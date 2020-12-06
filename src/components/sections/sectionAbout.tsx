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

const HeadShotImage = styled.div`
  display: inline-block;
  margin: 0 25px 0 25px;
  width: 30%;
  height: 30%;
  border-radius: 5px;
`;

const SectionContainer = styled.div`
 ${mixins.sectionContainer};
  background-color: ${theme.colors.primaryOffBeige1};
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
      <HeadShotImage>
        <Img 
          fluid={imgQuery.placeholderImage.childImageSharp.fluid}
          imgStyle={{"border-radius": "50%;"}}
        />
      </HeadShotImage>
    </SectionContainer>
  );
};

export default SectionAbout;
