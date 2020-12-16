/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Head from './head';
import NavBar from './navbar/navbar';
import FooterComponent from './footerComponent';
import { SiteMetaProps, LayoutProps } from '../types';

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
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
  const { title, description, siteUrl, author } = props
  const pathname = location.pathname ? location.pathname : '/';
  return (
    <div id='root'>
      <Head title={title} description={description} siteUrl={siteUrl}/>
      <div>
        <LayoutContainer>
          <NavBar path={pathname}/>
          {children}
        </LayoutContainer>
        <FooterComponent author={author}/>
      </div>
    </div>
  );
};

export default Layout;
