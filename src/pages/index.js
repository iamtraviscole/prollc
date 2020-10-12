import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import XIcon from '../images/svgs/x-icon.svg'
import CheckIcon from '../images/svgs/check-icon.svg'

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
              <h1>Tu primer paso hacia el sueño americano</h1>
                <Link className='index__view-plans-link' to='/planes'>Ver Planes</Link>
            </div>
          </div>
        </BackgroundImage>
        <div className='index__about-ctr'>
          <h2>Quiénes Somos</h2>
          <p>Llevas años soñando con emprender, con crear tu propia empresa o
            negocio, y Estados Unidos, la tierra de las oportunidades, te resulta
            el lugar idóneo para desempeñar tu actividad.
          </p>
          <p>¡Deja de soñar y pasa a la acción! <b>Crear tu empresa en EE.UU.</b> es más
            fácil de lo que pensabas, y estás en el sitio correcto para iniciar tu
            andadura empresarial.
          </p>
          <p>
            <b>ProLLC</b> es un proyecto que surge gracias a personas como tú, que buscan
            información en español sobre temas mercantiles, particularmente sobre
            los trámites de constitución de compañías LLC (sociedad de
            responsabilidad limitada, en español). Nuestro propósito es
            proporcionarte toda la información que necesitas antes de decidirte a
            crear tu LLC y acompañarte en su constitución, asegurándonos que tu
            empresa cumple con todas las formalidades de constitución, todo ello
            por un precio muy asequible.
          </p>
          <Link className='index__view-about-link' to='/quienes-somos'>Lee más</Link>
        </div>
        <div className='index__plans-ctr'>
          <h2>Planes</h2>
          <div className='plans'>
            <div className='plans__plan-outer-ctr'>
              <div className='plans__plan-ctr'>
                <div className='plans__plan-price'>
                  <span>a partir de</span>
                  $199
                </div>
                <div className='plans__plan-header'>
                  <h2>Básico LLC</h2>
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Escritura de constitución
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Servicios de agente registrado gratis por un año
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Soporte - Telefónico y correo electrónico
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Servicio rápido (documentos procesados en 15 días)
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Obtención del número de identificación tributaria
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Elección de la clasificación tributaria de S-Corp, si aplica
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Certificados de membresía
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Apertura de cuenta bancaria (exclusiones aplican)
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Acuerdo operativo
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Consulta con abogado – 30 minutos
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon /></span> Resolución bancaria
                </div>
                <Link className='plans__select-btn' to='/planes/basico'>Seleccionar</Link>
              </div>
            </div>
            <div className='plans__plan-outer-ctr'>
              <div className='plans__plan-ctr'>
                <div className='plans__plan-price'>
                  <span>a partir de</span>
                  $289
                </div>
                <div className='plans__plan-header'>
                  <h2>Completo LLC</h2>
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Escritura de constitución
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Servicios de agente registrado gratis por un año
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Soporte - Telefónico y correo electrónico
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Servicio rápido (documentos procesados en 7 días)
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Obtención del número de identificación tributaria
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Elección de la clasificación tributaria de S-Corp, si aplica
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Certificados de membresía
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Apertura de cuenta bancaria (exclusiones aplican)
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Acuerdo operativo
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon />
                  </span> Consulta con abogado – 30 minutos
                </div>
                <div className='plans__plan-feature not-included'>
                  <span className='plans__x-icon'>
                    <XIcon /></span> Resolución bancaria
                </div>
                <Link className='plans__select-btn' to='/planes/completo'>Seleccionar</Link>
              </div>
            </div>
            <div className='plans__plan-outer-ctr'>
              <div className='plans__plan-ctr'>
                <div className='plans__plan-price'>
                  <span>a partir de</span>
                  $479
                </div>
                <div className='plans__plan-header'>
                  <h2>ProLLC</h2>
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Escritura de constitución
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Servicios de agente registrado gratis por un año
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Soporte - Telefónico y correo electrónico
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Servicio pro (documentos presentados el mismo día)
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Obtención del número de identificación tributaria
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Elección de la clasificación tributaria de S-Corp, si aplica
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Certificados de membresía
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Apertura de cuenta bancaria (exclusiones aplican)
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Acuerdo operativo
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon />
                  </span> Consulta con abogado – 30 minutos
                </div>
                <div className='plans__plan-feature'>
                  <span className='plans__check-icon'>
                    <CheckIcon /></span> Resolución bancaria
                </div>
                <Link className='plans__select-btn' to='/planes/pro'>Seleccionar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
