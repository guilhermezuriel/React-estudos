import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>ERROR 404</h1>
      <p>Page was not found. Please try again</p>
    </div>
  );
};

export default NotFound;
