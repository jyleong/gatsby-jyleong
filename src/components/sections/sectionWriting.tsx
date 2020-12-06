import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types";
// import Image from "../image";
import styled from "styled-components";
import { theme, mixins } from "../../styles";
// type WritingProps = {};

const SectionContainer = styled.div`
 ${mixins.sectionContainer};
  background-color: ${theme.colors.secondaryBackground};
  ${mixins.flexCenter};
`;
const SectionWriting: React.FC = () => {
  return (
    <SectionContainer id="writing">
      <h3>Recent Writings</h3>
      {/* Blog list from GraphQL, recent 3 posts */}
      <div>
        <ul>
          <li>...</li>
        </ul>
      </div>
      <div>
        <Link to="/writings/">Writings</Link>
      </div>
    </SectionContainer>
  );
};

export default SectionWriting;
