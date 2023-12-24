import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <header className={styles.header}>
        <h1>Hi, I'm [Brian Cook]</h1>
        <p>I'm a Ugrad Software Engineer @GCU</p>
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
