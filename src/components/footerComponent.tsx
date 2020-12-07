import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const LayoutFooter = styled.footer`
  margin: 0 auto;
  height: 100%;
  padding-left: 50px;
`;

interface FooterProps {
  author: string
};

const FooterComponent: React.FC<FooterProps> = ({ author }) => {
  return <LayoutFooter>Built with ♥ by {author}, © {new Date().getFullYear()}</LayoutFooter>;
};

export default FooterComponent;
