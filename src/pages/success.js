import React, { useEffect } from 'react'
import { navigate, Link } from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from '../components/layout'

import '../styles/success.scss'

const Success = (props) => {
  
  useEffect(() => {
    if (!props.location.state || !props.location.state.paymentId) {
      navigate('/')
    }
  }, [props.location.state])

  return (
    <Layout pageTitle='¡Éxito!'>
      <Helmet>
        <meta name='robots' content='noindex' />
      </Helmet>
      <div className='success'>
        <div className='success__ctr'>
          <h1>¡Gracias por su pedido!</h1>
          <p>Nos pondremos en contacto con usted pronto</p>
          <br />
          <div className='success__contact-ctr'>
            Si tiene alguna pregunta, por favor <Link to='/contact'>contáctenos</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Success
