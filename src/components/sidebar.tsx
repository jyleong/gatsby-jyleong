import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import config from '@config';
import { theme, mixins } from '@styles';

const SideBarContainer = styled.div`
  display: flex;
  left: 0;
  position: fixed;
  margin-top: calc(90px + 7%);
  transform: rotate(90deg) translateY(80px);
  opacity: .5;
  color: ${theme.colors.primaryDark};
  z-index: 1000;

  div {
    transform: rotate(180deg);
    :hover{
      border-bottom: ${theme.colors.primaryDark} 2px solid;
      cursor: pointer;
    }
  }
  @media (max-width:1100px){
    transform: none;
    margin-top: 10px;
    z-index: 1000;
    div {
      transform: none;
    }
  }
`;

const SideBarLink = styled.div`
  margin: 0 10px;
  a {
    color: ${theme.colors.primaryDark};
  }
  :hover{
    text-decoration: underline
  }
`;
const Sidebar: React.FC = () => {
  const { navLinks } = config;
  console.log(navLinks);

  return (
    <SideBarContainer>
      {
        navLinks.map(({name, url}, index) => (
          <SideBarLink key={index}>
            <Link
              to={url}
            >{name}
            </Link>
          </SideBarLink>
        ))
      }
    </SideBarContainer>
  );
};

export default Sidebar;
