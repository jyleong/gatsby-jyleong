import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

interface PostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title?: string,
        date?: string,
      }
      html: string
    }
  }
}

const Blog: React.FC<PostProps> = (props: PostProps) => {
  return (
    <Layout>
      <SEO title='blogpost'/>
      {/* Blog content */}
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
};

export default Blog;

