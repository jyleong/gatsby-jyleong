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
  if (node.internal.type == 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blog.tsx');
  const aboutTemplate = path.resolve('./src/templates/about.tsx')
  
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
    const yr = date.split('-')[0];
    let pageObj = {
      // Path for this page — required
      path: `/blog/${yr}/${edge.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    }
    if (edge.node.fields.slug === 'about') {
      pageObj = {
        ...pageObj,
        path: '/about/',
        component: aboutTemplate,
      }
    }
    createPage(pageObj);
  });
}
