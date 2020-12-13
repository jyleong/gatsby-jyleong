import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Content from '../components/content';
import SEO from '../components/seo';


const IndexPage: React.FC = (props: any) => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: { 
          fields: {
            slug: {
              nin: ["about", "resume"]
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
  const { location } = props;
  const { edges } = pageQuery.allMarkdownRemark;
  return(
    <Layout location={location}>
      <SEO title='Home' />
      <Content iEdge={edges}/>
    </Layout>
  );
};

export default IndexPage;
