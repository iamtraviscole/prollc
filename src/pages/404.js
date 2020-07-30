import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/404.scss'

const NotFoundPage = () => (
  <Layout pageTitle='404'>
    <div className='pageNotFound'>
      <h1>Page not found</h1>
    </div>
  </Layout>
)

export default NotFoundPage
