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
              <span>starting at</span>
              $74
            </div>
            <div className='plans__plan-header'>
              <h2>Básico LLC</h2>
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Escritura de Constitución
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Agente Registrado por un año
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Soporte Correo Electrónico
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Servicio Rápido (documentos procesados en 15 días)
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Obtención del Número de Identificación Tributaria
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Elección de la clasificación tributaria de S-Corp
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Certificados de Membresía
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Apertura de Cuenta Bancaria (presencia física necesaria)
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Acuerdo Operativo
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Consulta Con Abogado – 30 minutos
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon /></span> Resolución Bancaria
            </div>
            <Link className='plans__select-btn' to='/plans/basic'>Select</Link>
          </div>
        </div>
        <div className='plans__plan-outer-ctr'>
          <div className='plans__plan-ctr'>
            <div className='plans__plan-price'>
              <span>starting at</span>
              $164
            </div>
            <div className='plans__plan-header'>
              <h2>Completo LLC</h2>
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Escritura de Constitución
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Agente Registrado por un año
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Soporte Telefónico y Correo Electrónico
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Servicio Rápido (documentos procesados en 7 días)
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Obtención del Número de Identificación Tributaria
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Elección de la clasificación tributaria de S-Corp
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Certificados de Membresía
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Apertura de Cuenta Bancaria (presencia física necesaria)
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Acuerdo Operativo
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon />
              </span> Consulta Con Abogado – 30 minutos
            </div>
            <div className='plans__plan-feature not-included'>
              <span className='plans__x-icon'>
                <XIcon /></span> Resolución Bancaria
            </div>
            <Link className='plans__select-btn' to='/plans/complete'>Select</Link>
          </div>
        </div>
        <div className='plans__plan-outer-ctr'>
          <div className='plans__plan-ctr'>
            <div className='plans__plan-price'>
              <span>starting at</span>
              $374
            </div>
            <div className='plans__plan-header'>
              <h2>Pro LLC</h2>
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Escritura de Constitución
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Agente Registrado por un año
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Soporte Telefónico y Correo Electrónico
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Servicio Pro (documentos presentados el mismo día)
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Obtención del Número de Identificación Tributaria
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Elección de la clasificación tributaria de S-Corp
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Certificados de Membresía
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Apertura de Cuenta Bancaria (presencia física necesaria)
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Acuerdo Operativo
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon />
              </span> Consulta Con Abogado – 30 minutos
            </div>
            <div className='plans__plan-feature'>
              <span className='plans__check-icon'>
                <CheckIcon /></span> Resolución Bancaria
            </div>
            <Link className='plans__select-btn' to='/plans/pro'>Select</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Plans
