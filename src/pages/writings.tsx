import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { theme, mixins } from "../styles";

const TitleH1 = styled.h1`
  text-align: center;
  font-size: ${theme.fontSizes.xlarge};
`;

const TitleH3 = styled.h3`
  ${mixins.inlineLink};
`;


const BodyContainer = styled.div`
  ${mixins.flexCenter};
`;

const ListContainer = styled.ul`
  width: 70%;
`;

const BlogPostCard = styled.div`
  width: 100%;
  padding: 1rem;
  position: inline-block;
  background-color: ${theme.colors.primaryBackground};
`;

const Writings = () => {

  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
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

  return (
    <Layout>
      <SEO title="List of blog posts" />
      <TitleH1>All blog posts</TitleH1>
      <BodyContainer>
        <ListContainer>
          {posts.allMarkdownRemark.edges.map((edge: any) => {
            const { title, date } = edge.node.frontmatter;
            const id = edge.node.id;
            const slug = edge.node.fields.slug;
            const yr = date.split("-")[0];
            const blogPath = `/blog/${yr}/${slug}`;
            return (
              <BlogPostCard key={id}>
                <Link
                  to={blogPath}
                >
                  <TitleH3>{title}</TitleH3>
                  <p>{date}</p>
                </Link>
              </BlogPostCard>
            )
          })}
        </ListContainer>
      </BodyContainer>
    </Layout>
  );
};

export default Writings;
