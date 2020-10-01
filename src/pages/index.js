import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/index.scss'

const Home = (props) => {
  const data = useStaticQuery(graphql`
    query ContractImageQuery {
      file(relativePath: {eq: "contract.jpg"}) {
        childImageSharp {
          fluid(jpegQuality: 100) {
           ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title='Home' />
      <div className='index'>
        <BackgroundImage
          Tag='div'
          className='index__image-ctr'
          fluid={data.file.childImageSharp.fluid}
        >
          <div className='index__intro-ctr'>
            <div className='index__intro-inner-ctr'>
              <h1>Tu primer paso hacio el sueño americano</h1>
                <Link className='index__view-plans-link' to='/plans'>Ver Planes</Link>
            </div>
          </div>
        </BackgroundImage>
        <div className='index__services-ctr'>
          <h2>Servicios</h2>
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
      </div>
    </Layout>
  )
}

export default Home
