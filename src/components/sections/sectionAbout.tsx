import React from "react";
// import PropTypes from "prop-types";
// import Image from "../image";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { theme, mixins } from "../../styles";

const Description = styled.div`
  display: inline-block;
  margin-left: 0 50px 0 20px;
  text-align: left;
  p {
    color: ${theme.colors.primaryGray};
  }
`;

const ImageCover = styled.div`
  display: inline-block;
  margin: 0 25px 0 25px;
  width: 30%;
  height: 30%;
`;

const ImageItem = styled(Img)<{fluid: any}>`
	padding: 0;
  width: 100%;
	height: 100%;
	border-radius: ${theme.borderRadius};
`;

const SectionContainer = styled.div`
 ${mixins.sectionContainer};
  background-color: ${theme.colors.primaryBackground};
  ${mixins.flexCenter};
`;

// type AboutProps = {};

const SectionAbout: React.FC = () => {
  const imgQuery = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jamesleong.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`);
  return (
    <SectionContainer id="about">
      <Description>
        <h3>James Leong </h3>
        <p>Software Engineer | Stoic | Essentialist</p>
      </Description>
      <ImageCover>
        <ImageItem 
          fluid={imgQuery.placeholderImage.childImageSharp.fluid}
        />
      </ImageCover>
    </SectionContainer>
  );
};

export default SectionAbout;
