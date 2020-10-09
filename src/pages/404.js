import React from "react"

import Layout from "../components/layout"

import '../styles/404.scss'

const browser = typeof window !== 'undefined' && window

const NotFoundPage = () => (
  browser && (
    <Layout pageTitle='404'>
      <div className='pageNotFound'>
        <h1>Page not found</h1>
      </div>
    </Layout>
  )
)

export default NotFoundPage
