// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { theme, mixins } from '../styles';

const SideBarContainer = styled.div`
  display: flex;
  left: 0;
  position: fixed;
  margin-top: calc(100px + 7%);
  transform: rotate(90deg) translateY(170px);
  opacity: 1;
  color: ${theme.colors.primaryDark} ;
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
  :hover{
    transition: 1s;
    border-color: ${theme.colors.primaryDark};
    border-bottom: 2px solid;
  }
`;
const Sidebar: React.FC = () => {
  return (
    <SideBarContainer>
      <SideBarLink>Home</SideBarLink>
      <SideBarLink>Writings</SideBarLink>
      <SideBarLink>Resume</SideBarLink>
      <SideBarLink>Contact</SideBarLink>
    </SideBarContainer>
  );
};

export default Sidebar;
