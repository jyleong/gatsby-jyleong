import React from "react";
// import PropTypes from "prop-types";
// import Image from "../image";
import style from "./section.module.scss";

// type AboutProps = {};

const SectionAbout: React.FC = () => {
  return (
    <section id="about" className={style.sectionAbout}>
      <div>
        <h3>James Leong </h3>
        <p>Software Engineer | Stoic | Essentialist</p>
      </div>
      {/* image placeholder */}
      {/* <div>
        <img></img>
      </div> */}
    </section>
  );
};

export default SectionAbout;
