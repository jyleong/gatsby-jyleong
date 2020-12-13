import React from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
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
  };
  location: any;
}

const BlogContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;


const Blog: React.FC<PostProps> = (props: PostProps) => {
  let date: Date;
  let formattedDate: string = '';
  if (props.data.markdownRemark.frontmatter && props.data.markdownRemark.frontmatter.date) {
    date = new Date(props.data.markdownRemark.frontmatter.date);
    formattedDate = date.toDateString();
  }

  return (
    <Layout location={props.location}>
      <SEO title='blogpost'/>
      {/* Blog content */}
      <BlogContent>
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <p>{formattedDate}</p>
      </BlogContent>
      <BlogContent dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></BlogContent>
    </Layout>
  )
};

export default Blog;

