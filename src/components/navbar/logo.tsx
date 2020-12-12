import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 60px;

  @media (max-width: 768px) {
    flex: 0 1 30px;
  }
`;

const ImageItem = styled(Img)<{fluid: any}>`
  padding: 0;
  width: 100%;
	height: 100%;
	border-radius: 50%;
`;

interface LogoProps {
  show: boolean
};

const Logo: React.FC<LogoProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "jl-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 90, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      {props.show ? <ImageItem fluid={data.file.childImageSharp.fluid} alt="logo" /> : <div /> }
    </LogoWrap>
  )
}

export default Logo