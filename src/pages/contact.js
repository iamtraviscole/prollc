import React, { useState } from 'react'
import { Formik, ErrorMessage, Field } from 'formik'
import * as yup from 'yup'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact.scss'

const contactValidation = yup.object().shape({
    email: yup.string().required('email required').email('invalid email'),
    message: yup.string().required('message required')
  })

const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Layout pageTitle='Contacto'>
      <SEO title='Contacto' />
      <div className='contact'>
        <div className='contact__phone-ctr'>
          <p>¿Cómo podemos ayudar?</p>
          <br />
          <h2>123-456-7890</h2>
        </div>
        <div className='contact__form-ctr'>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: ''
            }}
            onSubmit={async values => {
              console.log('submit clicked')
              setSubmitted(true)
            }}
            validationSchema={contactValidation}
            validateOnMount={true}
          >
            {props => {
              console.log(props)
              return (
                <form onSubmit={props.handleSubmit}>
                  {submitted
                  ? <div className='contact__submit-success'>
                      <p>¡Gracias! Nos veremos pronto.</p>
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
                        placeholder='correo electrónic *'
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
      </div>
    </Layout>
  )
}

export default Contact
