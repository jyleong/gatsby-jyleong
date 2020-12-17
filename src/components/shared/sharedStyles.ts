import styled from 'styled-components';

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