require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `ProLLC`,
    description: `¿Te atreves a comenzar la gran aventura de tu vida? Desde ProLLC te ayudamos a crear tu empresa en Estados Unidos, ampliando con ello el alcance de tu negocio, y llegando a nuevos mercados.`,
    url: `http://prollc.com`,
    keywords: [`prollc`, `llc`, `us`, `usa`, `register`, `register llc`]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
