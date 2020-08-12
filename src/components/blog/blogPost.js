import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'

import '../../styles/blog/blogPost.scss'

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

const BlogPost = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark

  console.log(props)

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
