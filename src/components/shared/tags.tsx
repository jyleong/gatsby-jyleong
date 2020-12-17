import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';

const { colors } = theme;

const Tag = styled.div`
  display: inline;
  margin: 2px;
  padding: 2px;
  border-radius: 5px;
  background-color: ${(props) => props.theme === 'dark' ? colors.labelGreyishBlue : colors.labelYellow};
`;

const TagDivs: React.FC<any> = ({ tags, theme }) => {
  return (<>
    {tags && tags.map((t: string, idx: number) => (
      <Tag key={idx} theme={theme}>{t}</Tag>
    ))}
  </>);
};

export default TagDivs;