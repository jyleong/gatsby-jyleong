import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types";
// import Image from "../image";
import style from "./section.module.scss";

// type WritingProps = {};

const SectionWriting: React.FC = () => {
  return (
    <section id="writing" className={style.sectionWriting}>
      <h3>Selected Writings</h3>
      {/* Blog list from GraphQL, recent 3 posts */}
      <div>
        <ul>
          <li>...</li>
        </ul>
      </div>
      <div>
        <Link to="/page-2/">Writings</Link>
      </div>
    </section>
  );
};

export default SectionWriting;
