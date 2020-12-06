import React from 'react';

import { SectionAbout, SectionResume, SectionWriting, SectionContact } from './sections';

const Content: React.FC = () => {
  return (
    <div>
      <SectionAbout />
      <SectionWriting />
      <SectionResume />
      <SectionContact />
    </div>
  );
};

export default Content;
