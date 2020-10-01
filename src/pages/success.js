import React, { useEffect } from 'react'
import { navigate, Link } from 'gatsby'

import Layout from '../components/layout'

import '../styles/success.scss'

const Success = (props) => {

  useEffect(() => {
    console.log('hello')
    if (!props.location.state || !props.location.state.paymentId) {
      navigate('/')
    }
  }, [])


  return (
    <Layout pageTitle='¡Éxito!'>
      <div className='success'>
        <div className='success__ctr'>
          <h1>¡Gracias por su orden!</h1>
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
