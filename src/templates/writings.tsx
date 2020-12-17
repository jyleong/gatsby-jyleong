import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThemeContext } from '../context/theme';
import { PageContextProps } from '../types';
import TagDivs from '../components/shared/tags';
import { 
  BodyContainer,
  ListContainer,
  BlogPostCard,
  TitleH3,
  TitleH3Link
} from '../components/shared/sharedStyles';

const NumberedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const NavNumberedLi = styled.li``;

const NavNumberedListLink = styled(Link)`
  :hover {
    text-decoration: underline;
  }
`;

const Writings: React.FC<PageContextProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  const { data } = props;
  const { numPages, currentPage } = props.pageContext;
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/writings' : `/writings/${(currentPage - 1).toString()}`;
  const nextPage = `/writings/${(currentPage + 1).toString()}`;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={props.location}>
      <SEO title="List of blog posts" />
      <TitleH3>All blog posts</TitleH3>
      <BodyContainer>
        <ListContainer>
          {posts.map((edge: any) => {
            const { title, date, tags } = edge.node && edge.node.frontmatter;
            const id = edge.node.id;
            const slug = edge.node.fields.slug;
            const yr = date.split("-")[0];
            const blogPath = `/blog/${yr}/${slug}`;
            let formattedDate: string = '';
            if (date) {
              const dateObj = new Date(date);
              formattedDate = dateObj.toDateString();
            }
            return (
              <BlogPostCard key={id}>
                <Link
                  to={blogPath}
                >
                  <TitleH3Link>{title}</TitleH3Link>
                  <p>{formattedDate}</p>
                  <TagDivs tags={tags} theme={theme}/>
                </Link>
              </BlogPostCard>
            )
          })}
          <NumberedList>
          {!isFirst && 
            <NavNumberedListLink to={prevPage}>
              ← Previous
            </NavNumberedListLink>
          }
          {Array.from({ length: numPages }, (_, i) => (
            <NavNumberedLi
              key={`paginated-number-${i+1}`}
            >
              <NavNumberedListLink
                to={`/writings/${i===0 ? '' : i+1}`}
              >
                {i+1}
              </NavNumberedListLink>
            </NavNumberedLi>
          ))}
          {!isLast &&
            <NavNumberedListLink to={nextPage}>
              Next →
            </NavNumberedListLink>
          }
          </NumberedList>


        </ListContainer>
      </BodyContainer>
    </Layout>
  );
};

export default Writings;

export const writingsListQuery = graphql`
    query writingsListQuery($skip: Int!, $limit: Int!) {
      allMarkdownRemark (
        filter: { 
          fields: {
            slug: {
              nin: ["about", "resume"]
            }
          }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `;
