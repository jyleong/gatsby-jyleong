module.exports = {
  siteMetadata: {
    title: "The Stoic SWE",
    description: "The slice of the internet belonging to James Leong",
    author: "James Leong",
    siteUrl: "https://jyleong.github.io",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "james-leong",
        short_name: "jl",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Roboto Mono\:400,500",
          "Playfair Display\:400,500,700"
        ],
        display: 'swap'
      }
    }
  ],
};
