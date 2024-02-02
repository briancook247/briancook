import React from "react";
import { Link } from "react-scroll";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import styles from "./styles/App.module.css";
import myself from "./assets/me.jpg";
import linkedInLogo from "./assets/li.png";
import gitHubLogo from "./assets/github.png";
import emailLogo from "./assets/myEmail.png";
function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <button className={styles.homeButton} onClick={() => window.scrollTo(0, 0)}>
          <img src={myself} alt="Home" />
        </button>
        <div className={styles.navbarItems}>
          <Link to="projects" smooth={true}>Projects</Link>
          <Link to="about" smooth={true}>About</Link>
          <Link to="contact" smooth={true}>Contact</Link>
        </div>
      </nav>
      <header className={styles.header}>
      <div className={styles.introTile}>
  <h1>Hi, I'm Brian Cook</h1>
  <p>I'm a Junior @ GC Studying Software Engineering</p>
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
        <div id="about">
          <Projects />
        </div>
        <div id="projects">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
