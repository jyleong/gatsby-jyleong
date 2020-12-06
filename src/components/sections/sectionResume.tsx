import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme, mixins } from '../../styles';

const SectionContainer = styled.div`
 ${mixins.sectionContainer};
  background-color: ${theme.colors.primaryBackground};
  ${mixins.flexCenter};
`;

const SectionResume: React.FC = () => {
  return (
    <SectionContainer id='resume'>
      <div>I&#39;m currently working at Dialpad</div>
      <div>
        <Link to='/page-2/'>Resume</Link>
      </div>
    </SectionContainer>
  );
};

export default SectionResume;
