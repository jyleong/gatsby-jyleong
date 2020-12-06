import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';

const LayoutFooter = styled.footer`
  margin: 0 auto;
  height: 100%;
  padding-left: 50px;
`;

const FooterComponent: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return <LayoutFooter>Built with ♥ by {author}, © {new Date().getFullYear()}</LayoutFooter>;
};

export default FooterComponent;
