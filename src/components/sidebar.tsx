// import { Link } from "gatsby";
import React from "react";
import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.link}>Home</div>
      <div className={styles.link}>Writings</div>
      <div className={styles.link}>Resume</div>
      <div className={styles.link}>Contact</div>
    </div>
  );
};

export default Sidebar;
