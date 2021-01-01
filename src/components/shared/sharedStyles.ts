import styled from 'styled-components';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { theme as ThemeStyle, mixins } from '../../styles';

const { colors } = ThemeStyle;

export const BodyContainer = styled.div`
  ${mixins.flexCenter};
`;

export const ListContainer = styled.div`
  width: 70%;
`;

export const BlogPostCard = styled.div`
  ${mixins.divShadow};
`;

export const TitleH1 = styled.h1`
  text-align: center;
`;

export const TitleH3 = styled.h3`
  text-align: center;
`;

export const TitleH3Link = styled.h3`
  ${mixins.inlineLink};
`;

export const Tag = styled.div`
  display: inline;
  margin: 2px;
  padding: 2px;
  border-radius: 5px;
  background-color: ${(props) => props.theme === 'dark' ? colors.labelGreyishBlue : colors.labelYellow};
`;

export const SocialContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SocialItems = styled.div`
  display: flex;
`;

export const SocialItem = styled.div`
`;

export const SocialLink = styled(OutboundLink)`
  padding: 0.3rem;
  color: ${colors.primaryGray};
  display: flex;
  transition: ${ThemeStyle.transition};
  font-size: ${ThemeStyle.fontSizes.xxlarge};
  &:hover,
  &:focus {
    transform: translateY(-5px);
    color: ${colors.primaryAccent};
  }
`;
