import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'

import '../../styles/blog/blogPost.scss'

export const postQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        date(formatString: "MMM D, Y")
        title
      }
    }
  }
`

const BlogPost = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout pageTitle='Blog Post'>
      <div className='blogPost'>
        <div className='blogPost__post'>
          <div className='blogPost__title-ctr'>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
          </div>
          <div className='blogPost__content'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
