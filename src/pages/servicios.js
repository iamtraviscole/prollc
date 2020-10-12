import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/services.scss'

const Services = (props) => {
  return (
    <Layout pageTitle='Servicios'>
      <SEO title='Servicios' />
      <div className='services'>
        <ul>
          <li>Planes</li>
          <li>Agente Registrado</li>
          <li>Conversión</li>
          <li>Reporte Anual</li>
          <li>Enmiendas</li>
          <li>Servicios de domicilio</li>
          <li>Servicios nominales</li>
          <li>Disolución</li>
          <li>Reactivación</li>
          <li>DBA (nombre ficticio)</li>
          <li>Registro de compañías extranjeras</li>
          <li>Destitución</li>
          <li>Declaraciones de Autoridad</li>
          <li>Certificado de Estatus</li>
          <li>Copias Certificadas</li>
          <li>Cambio de datos de la sociedad</li>
          <li>Cuenta Bancaria</li>
          <li>Apostilla</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Services
