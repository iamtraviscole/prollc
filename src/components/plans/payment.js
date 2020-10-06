import React, { useState } from 'react'
import { navigate } from 'gatsby'
import axios from 'axios'
import useFirebase from '../../hooks/useFirebase'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js'

import StepHeader from './stepHeader'
import Loading from '../ui/loading'
import calcPrice from '../../helpers/calcPrice.js'

import '../../styles/plans/payment.scss'

const STRIPE_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontFamily: 'Lato, sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        fontWeight: '300'
      },
    },
  },
}

const Payment = (props) => {
  const { values } = props.formik
  const { submitting, setSubmitting } = props

  const [error, setError] = useState(null)

  const firebase = useFirebase()

  const stripe = useStripe()
  const elements = useElements()

  const handlePay = async (e) => {
    setSubmitting(true)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      // only need to pass one element to card, stripe automatically grabs the
      // rest of the card information (expiry, cvc, etc.)
      card: elements.getElement(CardNumberElement)
    })

    if (!error) {
      const { id } = paymentMethod

      try {
        const res = await axios.post(
          '/api/submitPlan',
          {
            id: id,
            values: values
          }
        )
        console.log('RES', res)

        const { payment } = res.data

        const orderDetails = {
          ...values,
          paymentId: payment.id,
          price: (payment.amount / 100),
          paymentTime: payment.created
        }

        const db = firebase.firestore()
        db.collection('orders').add(orderDetails)

        try {
          await axios.post(
            '/api/newOrderEmail',
            {
              firstName: values.contactDetails.firstName,
              lastName: values.contactDetails.lastName,
              email: values.contactDetails.email,
              price: (payment.amount / 100),
              paymentId: payment.id
            }
          )
        } catch (error) {
          console.error(error)
          setSubmitting(false)
        }

        navigate('/success', {
          replace: true,
          state: {paymentId: payment.id}
        })
      } catch (error) {
        let message = error.response && error.response.data.message
        setError(message)
        setSubmitting(false)

        console.error('ERR', message)
      }
    } else {
      setError(error.message)
      setSubmitting(false)
    }
  }

  const loadingOrButton = submitting
    ? <div className='payment__loading-ctr'><Loading /></div>
    : <button type='button'
        onClick={handlePay}
        disabled={submitting}>
        Pagar y Finalizar el Pedido
      </button>

  console.log(values)

  return (
    <div className='payment'>
      <StepHeader title='Resumen del Pedido y Pago' />
      <div className='payment__review-ctr'>
        <h3>Información de Contacto</h3>
        <p>
          {values.contactDetails.firstName + ' ' +
          values.contactDetails.lastName}
        </p>
        <p>{values.contactDetails.email}</p>
        <p>{values.contactDetails.phone}</p>
      </div>
      <div className='payment__price-ctr'>
        <h3>Precio Final</h3>
        <p>${calcPrice(values)}</p>
      </div>
      <div className='payment__card-ctr'>
        <h2>Pago</h2>
        <div className='payment__input-ctr'>
          <p>Número de tarjeta *</p>
          <CardNumberElement options={STRIPE_ELEMENT_OPTIONS}/>
        </div>
        <div className='payment__input-ctr'>
          <p>Fecha de vencimiento *</p>
          <CardExpiryElement options={{...STRIPE_ELEMENT_OPTIONS, placeholder: 'MM / YY'}}/>
        </div>
        <div className='payment__input-ctr'>
          <p>CVC o código de seguridad *</p>
          <CardCvcElement options={{...STRIPE_ELEMENT_OPTIONS, placeholder: 'CVC'}}/>
        </div>
        <div className='payment__error'>
          <p>{error && error}</p>
        </div>
        <div className='payment__pay-btn-ctr'>
          {loadingOrButton}
        </div>
      </div>
    </div>
  )
}

export default Payment
