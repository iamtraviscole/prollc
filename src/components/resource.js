import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/resource.scss'

const Resource = (props) => {
  return (
    <Layout pageTitle='Recursos'>
      <SEO title={props.seoTitle} />
      <div className='resource'>
        {props.children}
      </div>
    </Layout>
  )
}

export default Resource
