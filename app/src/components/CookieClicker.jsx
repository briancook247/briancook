import React, { useState } from 'react';
import styles from '../styles/CookieClicker.module.css';

const CookieClicker = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button className={styles.clicker} onClick={handleClick}>
      Click me! {count}
    </button>
  );
};

export default CookieClicker;