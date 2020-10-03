import React, { useState } from 'react'
import { Formik, ErrorMessage, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact.scss'

const contactValidation = yup.object().shape({
  email: yup.string().required('correo electrónico obligatorio').email('correo electrónico no válida'),
  message: yup.string().required('mensaje obligatorio')
})

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Layout pageTitle='Contacto'>
      <SEO title='Contacto' />
      <div className='contact'>
        <div className='contact__left-ctr'>
          <h2>¿Cómo te podemos ayudar?</h2>
          <div className='contact__phone-ctr'>
            <h3>123-456-7890</h3>
          </div>
          <div className='contact__address-ctr'>
            <h3>Dirección</h3>
            <p>1395 Brickell Avenue</p>
            <p>Suite 800</p>
            <p>Miami, FL 33134</p>
          </div>
        </div>
        <div className='contact__form-ctr'>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: ''
            }}
            onSubmit={async values => {
              const { name, email, message } = values

              try {
                await axios.post(
                  '/api/submitContactForm',
                  {
                    name,
                    email,
                    message
                  }
                )
                setSubmitted(true)
              } catch (error) {
                console.error(error)
              }

            }}
            validationSchema={contactValidation}
            validateOnMount={true}
          >
            {props => {
              return (
                <form onSubmit={props.handleSubmit}>
                  {submitted
                  ? <div className='contact__submit-success'>
                      <p>¡Gracias! Estaremos en contacto pronto.</p>
                    </div>
                  : <>
                      <Field
                        id='contact__name-input'
                        name='name'
                        placeholder='nombre'
                      />
                      <Field
                        id='contact__email-input'
                        name='email'
                        placeholder='correo electrónico *'
                      />
                      <ErrorMessage name='email'>
                        {msg => <div className='contact__input-err'>{msg}</div>}
                      </ErrorMessage>
                      <Field component='textarea'
                        id='contact__message-input'
                        name='message'
                        placeholder='mensaje *'
                      />
                      <ErrorMessage name='message'>
                        {msg => <div className='contact__input-err'>{msg}</div>}
                      </ErrorMessage>
                      <input type='submit' value='Enviar' />
                    </>
                  }
                </form>
              )
            }}
          </Formik>
        </div>
        <div className='contact__bottom-address-ctr'>
          <h3>Dirección</h3>
          <p>1395 Brickell Avenue</p>
          <p>Suite 800</p>
          <p>Miami, FL 33134</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
