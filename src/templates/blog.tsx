import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TagDivs from '../components/shared/tags';
import SharingBar from '../components/social/sharingBar';
import { ThemeContext } from '../context/theme';
import { PostProps } from '@types';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date
        tags
      }
      fields {
        slug
      }
      html
    }
  }
`;

const BlogContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Blog: React.FC<PostProps> = (props: PostProps) => {
  const { theme } = useContext(ThemeContext);
  let date: Date;
  let formattedDate: string = '';
  if (props.data.markdownRemark.frontmatter && props.data.markdownRemark.frontmatter.date) {
    date = new Date(props.data.markdownRemark.frontmatter.date);
    formattedDate = date.toDateString();
  }
  const { title, tags } = props.data.markdownRemark.frontmatter;
  const { slug } = props.data.markdownRemark.fields;
  return (
    <Layout location={props.location}>
      <SEO title={title}/>
      <BlogContent>
        <h2>{title}</h2>
        {slug !== 'resume' && <p>{formattedDate}</p>}
        {tags !== null && <TagDivs tags={tags} theme={theme}/>}
      </BlogContent>
      <BlogContent dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></BlogContent>
      {slug !== 'resume' && 
        <BlogContent>
          <SharingBar title={title} location={props.location}/>
        </BlogContent>
      }
    </Layout>
  )
};

export default Blog;

