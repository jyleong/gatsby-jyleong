import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { theme as ThemeStyle } from '@styles';
import { ThemeContext } from '../context/theme';
import { TagsPageProps } from '../types';
import {
  BodyContainer,
  ListContainer,
  TitleH1
} from '../components/shared/sharedStyles';

// Utils
import kebabCase from 'lodash/kebabCase';

const StyledUl = styled.ul`
  display: inline;
  margin: 5px;
  padding: 3px;
  border-radius: 5px;
  background-color: ${(props) => props.theme === 'dark' ? colors.labelGreyishBlue : colors.labelYellow};
`;

const { colors } = ThemeStyle;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

const TagsPage: React.FC<TagsPageProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  const { data } = props;
  const { group } = data.allMarkdownRemark;
  return (
    <Layout location={props.location}>
      <SEO title="Tags"/>
      <TitleH1>Tags</TitleH1>
      <BodyContainer>
        <ListContainer>
          <ul>
            {group.map(tag => (
              <StyledUl key={tag.fieldValue} theme={theme}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </StyledUl>
            ))}
          </ul>
        </ListContainer>
      </BodyContainer>

    </Layout>
  )
}

export default TagsPage;
