let env = process.env.NODE_ENV || 'development';

require('dotenv').config({ path: `./.env.${env}`});

module.exports = {
  siteMetadata: {
    title: 'The Stoic SWE',
    description: 'The slice of the internet belonging to James Leong',
    author: 'James Leong',
    siteUrl: 'https://jyleong.github.io',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about',
        path: `${__dirname}/src/about`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'james-leong',
        short_name: 'jl',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/jl-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@config': 'src/config',
          '@components': 'src/components',
          '@assets': 'src/assets',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@templates': 'src/templates',
          '@blog': 'src/blogs',
          '@types': 'src/types',
        },
        extensions: [
          'ts', 'tsx',
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      }
    }
  ],
};
