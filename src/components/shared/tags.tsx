import React from 'react';
import { Tag } from './sharedStyles';

const TagDivs: React.FC<any> = ({ tags, theme }) => {
  return (<>
    {tags && tags.map((t: string, idx: number) => (
      <Tag key={idx} theme={theme}>{t}</Tag>
    ))}
  </>);
};

export default TagDivs;