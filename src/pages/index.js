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
      <BackgroundImage
        Tag='div'
        className='index__image-ctr'
        fluid={data.file.childImageSharp.fluid}
      >
        <div className='index__intro-ctr'>
          <div className='index__intro-inner-ctr'>
            <h1>Tu primer paso hacio el sueño americano</h1>
              <Link className='index__view-plans-link' to='plans'>View Plans</Link>  
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Home
