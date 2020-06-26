import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/resources.scss'

const Resources = (props) => {
  return (
    <Layout pageTitle='Resources'>
      <SEO title='Resources' />
      <div className='resources'>
        <div className='resources__resource-btns-ctr'>
          <Link to='/resources/companias-llc'>Compañías LLC</Link>
          <Link to='/resources/llc-vs-corporacion'>LLC vs. Corporación</Link>
          <Link to='/resources/s-corp'>S-Corp</Link>
          <Link to='/resources/ein'>EIN</Link>
          <Link to='/resources/la-clasificacion-tributaria-de-tu-llc'>
            La clasificación tributaria de tu LLC
          </Link>
          <Link to='/resources/constituir-tu-empresa-en-los-estados-unidos'>
            Ventajas de constituir tu empresa en los Estados Unidos
          </Link>
          <Link to='/resources/por-que-delaware'>
            ¿Por qué constituir tu LLC en Delaware?
          </Link>
          <Link to='/resources/por-que-florida'>
            ¿Por qué constituir tu LLC en Florida?
          </Link>
          <Link to='/resources/el-acuerdo-operativo'>El Acuerdo Operativo</Link>
          <Link to='/resources/agente-registrado'>Agente Registrado</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Resources
