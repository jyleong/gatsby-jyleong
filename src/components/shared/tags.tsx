import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';
import { Tag } from './sharedStyles';

const { colors } = theme;

const TagDivs: React.FC<any> = ({ tags, theme }) => {
  return (<>
    {tags && tags.map((t: string, idx: number) => (
      <Tag key={idx} theme={theme}>{t}</Tag>
    ))}
  </>);
};

export default TagDivs;