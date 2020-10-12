import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import XIcon from '../images/svgs/x-icon.svg'
import CheckIcon from '../images/svgs/check-icon.svg'

import '../styles/plans.scss'

const Plans = (props) => {
  return (
    <Layout pageTitle='Planes'>
      <SEO title='Planes' />
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
              </span> Servicio pro (documentos procesados en 3 días)
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
    </Layout>
  )
}

export default Plans
