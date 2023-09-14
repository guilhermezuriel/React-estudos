import React from 'react';
import Head from '../PublicComponents/Head';
import Header from '../PublicComponents/Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import fetchAPI from '../CustomHooks/fetchAPI';

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);
  fetchAPI(setProdutos, 'https://ranekapi.origamid.dev/json/api/produto');
  return (
    <section>
      <Head title="Ranek" description="Esta é a parte inicial do site" />
      <Header />
      {produtos && (
        <ul className={styles.flexProdutos}>
          {produtos.map((produto) => (
            <li key={produto.id} className={styles.produtos}>
              <Link to={`/produto/${produto.id}`}>
                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                <h3>{produto.nome}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Home;
