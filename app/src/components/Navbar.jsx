import React from 'react';
import { Link } from "react-scroll";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={styles.navbar}>

        <div className={styles.navbarItems}>
          <Link to="about" smooth={true}><span className={styles.number}>01.</span> <span className={styles.text}>About</span></Link>
          <Link to="projects" smooth={true}><span className={styles.number}>02.</span> <span className={styles.text}>Projects</span></Link>
          <Link to="contact" smooth={true}><span className={styles.number}>03.</span> <span className={styles.text}>Contact</span></Link>
        </div>
      </nav>
    );
};

export default Navbar;