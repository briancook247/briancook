
import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
<div id="about" className={styles.aboutSection}>
  <span className={styles.number}>01. </span> <span className={styles.text}>A little about me...</span> <br /><br />
  <p className={styles.textFaded}> I'm probably watching Fireship talk about the newest tech trend right now </p> <br />
  <p className={styles.textFaded}> I love everything to do with the new disruptive technologies such as Blockchain/AI/ML/AR/VR </p> <br />
  <p className={styles.textFaded}> I am looking to jump into the professional field and implement some of these technologies </p> <br />
  </div>
  );
};

export default About;
