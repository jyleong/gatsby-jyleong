/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules

const { create } = require('domain');
const path = require('path');

exports.onCreateNode = ({node, actions}) => {
  const { createNodeField } = actions
  if (node.internal.type == "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/blog.tsx");

  // Returns a promise
  const resp = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  resp.data.allMarkdownRemark.edges.forEach((edge) => {
    const date = edge.node.frontmatter.date;
    const yr = date.split("-")[0];
    createPage({
      // Path for this page — required
      path: `/blog/${yr}/${edge.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@content': path.resolve(__dirname, 'src/content'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};