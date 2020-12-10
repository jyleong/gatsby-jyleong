import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "about" }}) {
      html
    }
  }
`;

interface MdProps {
  data: {
    markdownRemark: {
      html: string
    }
  }
}

const About: React.FC<MdProps>  = (props) => {
  return (
    <Layout>
      <SEO title='About'/>
      <h2>About me</h2>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default About;
