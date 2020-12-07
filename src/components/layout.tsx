/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from './head';
import FooterComponent from './footerComponent';
import Sidebar from './sidebar';

type SiteMetaProps = {
  title: string,
  description: string,
  siteUrl: string,
  author: string,
}
type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  height: 100%;
  padding-left: 50px;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const layoutQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `);
  const props: SiteMetaProps = {
    title: layoutQuery.site.siteMetadata.title,
    description: layoutQuery.site.siteMetadata.description,
    siteUrl: layoutQuery.site.siteMetadata.siteUrl,
    author: layoutQuery.site.siteMetadata.author,
  }
  const { title, description, siteUrl, author} = props
  return (
    <div id='root'>
      <Head title={title} description={description} siteUrl={siteUrl}/>
      <Sidebar />
      <div>
        <LayoutContainer>{children}</LayoutContainer>
        <FooterComponent author={author}/>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
