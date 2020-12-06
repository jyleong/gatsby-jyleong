import React from "react";
import styled from "styled-components";
import {theme, mixins} from "../../styles";

const SectionContainer = styled.div`
  ${mixins.sectionContainer};
  background-color: ${theme.colors.secondaryBackground};
  text-align: center;
`;

const SectionContact: React.FC = () => {
  return (
    <SectionContainer id="contact">
      <div>Need a developer? Send me an email []</div>
      <div>Or follow me on the socials</div>
    </SectionContainer>
  );
};

export default SectionContact;
