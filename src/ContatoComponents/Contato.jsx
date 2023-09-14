import React from 'react';
import Head from '../PublicComponents/Head';
import Header from '../PublicComponents/Header';
import styles from './Contato.module.css';
const Contato = () => {
  return (
    <section>
      <Head title="Ranek | Contato" description="Esta é a página de contato" />
      <Header />
      <div className={styles.grid}>
        <img src="../../public/img/contato.jpg" alt="maquina de escrever" />
        <div>
          <h1>Entre em contato.</h1>
          <ul>
            <li>eu@email.com</li>
            <li>99999-9999</li>
            <li>Rua Ali, 999</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contato;
