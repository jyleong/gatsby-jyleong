/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Head from "./head";
import FooterComponent from "./footerComponent";
import Sidebar from "./sidebar";

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

  return (
    <div id="root">
      <Head />
      <Sidebar />
      <div>
        <LayoutContainer>{children}</LayoutContainer>
        <FooterComponent/>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
