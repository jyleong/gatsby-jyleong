import React from "react";
import style from "./section.module.scss";

const SectionContact: React.FC = () => {
  return (
    <section id="contact" className={style.sectionContact}>
      <div>Need a developer? Send me an email []</div>
      <div>Or follow me on the socials</div>
    </section>
  );
};

export default SectionContact;
