import { node } from 'prop-types';
import React from 'react';

import { SectionAbout, SectionResume, SectionWriting, SectionContact } from './sections';

interface IEdge {
  node: {
    id: string,
    frontmatter: {
      title: string,
      date: string,
    }
    fields: {
      slug: string,
    }
  }
}
interface ContentProps {
  iEdge: IEdge[]
}
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
      <SectionResume />
    </div>
  );
};

export default Content;
