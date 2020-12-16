import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mixins } from '../../styles';

const Description = styled.div`
  display: inline-block;
  text-align: left;

  h3 {
    display: block;
    padding-left: 40px;
    padding-top: 40px;
    padding-right: 40px;
  }

  h4 {
    display: none;
  }

  p {
    padding-left: 40px;
    font-style: italic;
  }

  @media (max-width: 768px) {
    h3 {
      display: none;
    }

    h4 {
      display: block;
      padding-left: 40px;
      padding-top: 40px;
      padding-right: 40px;
    }
  }
`;

const ImageCover = styled.div`
  display: inline-block;
  margin: 20px;
  width: 50%;
  height: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageItem = styled(Img)<{fluid: any}>`
	${mixins.imageItem};
`;

const SectionContainer = styled.div`
  ${mixins.sectionContainer};
  ${mixins.flexCenter};
`;

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
    <SectionContainer id='about'>
      <Description>
        <h3>Hello! I'm James. I write code, 
          but I often ponder about many things. 
          Hence the blog as a means to sort through my thoughts.
        </h3>
        <h4>Hello! I'm James.</h4>
        <p>Memento Mori</p>
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
