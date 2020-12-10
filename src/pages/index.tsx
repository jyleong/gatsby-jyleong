import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Content from '../components/content';
import SEO from '../components/seo';


const IndexPage: React.FC = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: { 
          fields: {
            slug: {
              ne: "about"
            }
          }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            id
            frontmatter {
              title
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
  const { edges } = pageQuery.allMarkdownRemark;
  return(
    <Layout>
      <SEO title='Home' />
      <Content iEdge={edges}/>
    </Layout>
  );
};

export default IndexPage;
