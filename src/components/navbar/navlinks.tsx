import React from 'react';
import { Link } from 'gatsby';
import config from '@config';
import styled from 'styled-components';
import { mixins } from '@styles';

const NavLink = styled(Link)`
  ${mixins.inlineLink};
  margin: 0 1vw;
  transition: all 200ms ease-in
  position: relative;
  font-size: 1.5rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    height: 1px;
    transition: all 0.4s ease-in;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

const NavLinks: React.FC = () => {
  const { navLinks } = config;
  return (
    <>
      {navLinks &&
        navLinks.map(({ name, url }, idx) => (
          <NavLink to={url}>{name}</NavLink>
        ))
      }
    </>
  );
};

export default NavLinks;