import React from 'react';
import { Link } from 'gatsby';
import config from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes } = theme;

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.secondaryBackground};
  z-index: 11;
  height: ${theme.navHeight};
  box-shadow: 0 10px 15px -15px ${colors.black};
`;

const Navbar = styled.nav`
  ${mixins.flexBetween};
  width: 100%:
`;

const NavLinks = styled.div`
  display: flex;
  align-items: right;
`;

const NavList = styled.ul`
    ${mixins.flexBetween};
    margin: 0;
`;

const NavListItem = styled.li`
  font-size: ${fontSizes.large};
  margin: 0 10px;
  transition: ${theme.transition};
`;

const NavLink = styled(Link)`
    padding: 12px 8px;
    ${mixins.inlineLink}
`;

const NavBar: React.FC = () => {
  const { navLinks } = config;
  return (
    <NavContainer>
      <Navbar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ name, url }, idx) => (
                <NavListItem
                  key={idx}
                  style={{ transitionDelay: `${idx * 50 + 300 + theme.fadeinOffset}ms` }}
                  className="fadein"
                >
                  <NavLink to={url}>{name}</NavLink>
                </NavListItem>
              ))
            }
          </NavList>
        </NavLinks>
      </Navbar>
    </NavContainer>
  );
};

export default NavBar;