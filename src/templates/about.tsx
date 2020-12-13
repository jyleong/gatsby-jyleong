import React from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
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
  };
  location: any;
}

// TODO: add reusme pdf section
const AboutContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const About: React.FC<MdProps>  = (props) => {
  return (
    <Layout location={props.location}>
      <AboutContent>
        <h2>About me</h2>
      </AboutContent>
      <SEO title='About'/>
      <AboutContent dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></AboutContent>
    </Layout>
  )
}

export default About;
