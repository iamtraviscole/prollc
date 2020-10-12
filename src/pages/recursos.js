import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/resources.scss'

const Resources = (props) => {
  return (
    <Layout pageTitle='Recursos'>
      <SEO title='Recursos' />
      <div className='resources'>
        <div className='resources__resource-btns-ctr'>
          <Link to='/recursos/companias-llc'>Compañías LLC</Link>
          <Link to='/recursos/llc-vs-corporacion'>LLC vs. Corporación</Link>
          <Link to='/recursos/s-corp'>S-Corp</Link>
          <Link to='/recursos/ein'>EIN</Link>
          <Link to='/recursos/la-clasificacion-tributaria-de-tu-llc'>
            La clasificación tributaria de tu LLC
          </Link>
          <Link to='/recursos/constituir-tu-empresa-en-los-estados-unidos'>
            Ventajas de constituir tu empresa en los Estados Unidos
          </Link>
          <Link to='/recursos/por-que-delaware'>
            ¿Por qué constituir tu LLC en Delaware?
          </Link>
          <Link to='/recursos/por-que-florida'>
            ¿Por qué constituir tu LLC en Florida?
          </Link>
          <Link to='/recursos/el-acuerdo-operativo'>El Acuerdo Operativo</Link>
          <Link to='/recursos/agente-registrado'>Agente Registrado</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Resources
