import React from 'react';
import styles from '../styles/Languages.module.css';

import jsImg from '../assets/js.jpg';
import cppImg from '../assets/cpp.png';
import csImg from '../assets/c#.png';
import rustImg from '../assets/rust.png';
import javaImg from '../assets/java.png';
import pythonImg from '../assets/python.png';
import reactImg from '../assets/react.png';

const Languages = () => {

    return (
        <section id="languages" className={styles.languages}>
            <div className={styles.container}>
                <div className={styles['image-container']}>
                    <img src={pythonImg} alt="Python" />
                    <img src={javaImg} alt="Java" />
                    <img src={reactImg} alt="React" />
                    <img src={jsImg} alt="JavaScript" />
                    <img src={cppImg} alt="C++" />
                    <img src={csImg} alt="C#" />
                    <img src={rustImg} alt="Rust" />
                </div>
            </div>
        </section>
    );
};

export default Languages;