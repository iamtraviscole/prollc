import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

import '../styles/blog.scss'

export const postsQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "/blog/"} }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM D, Y")
            title
          }
          excerpt(pruneLength: 200, format: HTML)
        }
      }
    }
  }
`

const Blog = (props) => {
  const { allMarkdownRemark } = props.data

  let posts = allMarkdownRemark.edges.map(edge => {
    const { frontmatter } = edge.node
    const { slug } = edge.node.fields

    return (
      <Link key={edge.node.id} to={'/blog/' + slug }>
        <div className='blog__post-ctr'>
          <div className='blog__title-ctr'>
            <h1>{frontmatter.title}</h1>
          </div>
          <div className='blog__date-ctr'>
            <p>{frontmatter.date}</p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <Layout pageTitle='Blog'>
      <div className='blog'>
        {posts.length ? posts : 'No posts yet'}
      </div>
    </Layout>
  )

}

export default Blog
