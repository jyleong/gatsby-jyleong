import React, { FC, useContext } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThemeContext } from '../context/theme';
import { TagProps } from '../types';
import {
  BodyContainer,
  ListContainer,
  BlogPostCard,
  TitleH3,
  TitleH3Link
} from '../components/shared/sharedStyles';

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

const Tags: React.FC<TagProps> = (props) => {
  const { pageContext, data, location } = props;
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;
  return (
    <Layout location={location}>
      <SEO title={tagHeader} />
      <TitleH3>{tagHeader}</TitleH3>
      <BodyContainer>
        <ListContainer>
          {edges.map((e) => {
            const { slug } = e.node.fields
            const { title, date } = e.node.frontmatter
            let formattedDate: string = '';
            if (date) {
              const dateObj = new Date(date);
              formattedDate = dateObj.toDateString();
            }
            return (
              <BlogPostCard key={slug}>
                <Link to={slug}>
                  <TitleH3Link>{title}</TitleH3Link>
                  <p>{formattedDate}</p>
                </Link>
              </BlogPostCard>
            )
          })}
        </ListContainer>
      </BodyContainer>
    </Layout>
  )
}

export default Tags;