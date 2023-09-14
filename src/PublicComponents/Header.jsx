import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <nav className={styles.linkList}>
      <NavLink to="/" end className={styles.navlink}>
        Produtos
      </NavLink>
      <NavLink to="/contato" className={`${styles.navlink}`}>
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
