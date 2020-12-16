import React from 'react';

import { SectionAbout, SectionWriting } from './sections';
import { ContentProps } from '../types';

const Content: React.FC<ContentProps> = (props) => {
  const { iEdge } = props;
  const posts = iEdge.map(edge => {
    return {
      title: edge.node.frontmatter.title,
      date: edge.node.frontmatter.date,
      id: edge.node.id,
      slug: edge.node.fields.slug,
    }
  });
  return (
    <div>
      <SectionAbout />
      <SectionWriting posts={posts}/>
    </div>
  );
};

export default Content;
