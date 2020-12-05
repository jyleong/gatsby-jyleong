import React from "react";
import { Link } from "gatsby";
import style from "./section.module.scss";

const SectionResume: React.FC = () => {
  return (
    <section id="resume" className={style.sectionResume}>
      <div>I&#39;m currently working at Dialpad</div>
      <div>
        <Link to="/page-2/">Resume</Link>
      </div>
    </section>
  );
};

export default SectionResume;
