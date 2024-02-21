import React from "react";
import { Link } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Languages from './components/Languages';
import styles from "./styles/App.module.css";
import myself from "./assets/me.jpg";
import linkedInLogo from "./assets/li.png";
import gitHubLogo from "./assets/github.png";
import emailLogo from "./assets/myEmail.png";
function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <button className={styles.homeButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>          <img src={myself} alt="Home" />
        </button>
        <div className={styles.navbarItems}>
          <Link to="about" smooth={true}><span className={styles.number}>01.</span> <span className={styles.text}>About</span></Link>
          <Link to="projects" smooth={true}><span className={styles.number}>02.</span> <span className={styles.text}>Projects</span></Link>
          <Link to="contact" smooth={true}><span className={styles.number}>03.</span> <span className={styles.text}>Contact</span></Link>
        </div>
      </nav>
      <header className={styles.header}>
        <div className={styles.introTile}>
          <h1>Hi, I'm Brian Cook</h1>
          <p>I'm a Junior @ GCU Studying Software Engineering</p>
        </div>
        <img src={myself} alt="Me" className={styles.profilePicture} />
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/brian-cook-38284921b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn" className={styles.logo} />
          </a>
          <a
            href="https://github.com/briancook247"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubLogo} alt="GitHub" className={styles.logo} />
          </a>
          <a href="mailto:btcsg7@icloud.com">
            <img src={emailLogo} alt="Email Me" className={styles.logo} />
          </a>
        </div>
      </header>
      <main>
        <div id="languages">
          <Languages />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
