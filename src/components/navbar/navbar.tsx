import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@styles';
import NavLinks from './navlinks';
import Logo from './logo';

const { colors } = theme;

interface NavProps {
  path: string
};

const NavContainer = styled.nav`
  height: 12vh;
  display: flex;
  background-color: ${colors.secondaryBackground};
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 3vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 2vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

interface OpenProps {
  open: boolean;
};

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${(props: OpenProps) => (props.open ? "inherit" : "rotate(-45deg)")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props: OpenProps) =>
      props.open ? "rotate(0deg)": "rotate(-90deg) translate(-10px, 0px)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props: OpenProps) => (props.open ? "1" : "0")};
    transform: ${(props: OpenProps) => (props.open ? "rotate(0deg)" : "rotate(90deg)")};
    top: 10px;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: ${colors.primaryBackground};
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props: OpenProps) => (props.open ? "0" : "-100%")};
  }
`

const NavBar: React.FC<NavProps> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const shouldShow = props.path !== '/';
  return (
    <NavContainer>
      <Logo show={shouldShow}/>
      <Toggle
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open={false}/> : <Hamburger open />}
      </Toggle>
      
      <Navbox open={navbarOpen}>
        <NavLinks />
      </Navbox>
      
    </NavContainer>
  );
};

export default NavBar;