import React from 'react';

import styled from 'styled-components';
import { mixins } from '@styles';
import Social from './social';

const LayoutFooter = styled.footer`
  margin: 0 auto;
  height: 100%;
  padding: 1rem;
  ${mixins.flexCenter};
  flex-direction: column;
`;

const FooterDesc = styled.div`
  display: flex;
`;

interface FooterProps {
  author: string
};

const FooterComponent: React.FC<FooterProps> = ({ author }) => {
  return (
    <LayoutFooter>
      <Social />
      <FooterDesc>
        Built with ♥ by {author}, © {new Date().getFullYear()}
      </FooterDesc>
    </LayoutFooter>
    );
};

export default FooterComponent;
