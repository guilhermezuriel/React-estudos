import React from 'react';
import Head from '../PublicComponents/Head';
import Header from '../PublicComponents/Header';
import styles from './Produto.module.css';
import fetchAPI from '../CustomHooks/fetchAPI';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Produto = () => {
  const params = useParams().id;
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetchAPI(
        setData,
        `https://ranekapi.origamid.dev/json/api/produto/${params}`,
      );
      setLoading(false);
    }, 1000);
  }, [params]);
  return (
    <>
      <Head
        title={(loading && 'Ranek') || (data && `Ranek | ${data.nome}`)}
        description="Página do produto"
      />
      <Header />
      <main className={styles.main}>
        {loading && (
          <ClipLoader
            color="black"
            loading="loading"
            className={styles.loading}
          />
        )}
        {data && (
          <section className={styles.container}>
            <div>
              {data.fotos.map((foto) => (
                <img
                  key={foto.titulo}
                  src={foto.src}
                  alt={foto.titulo}
                  className={styles.foto}
                />
              ))}
            </div>
            <div className={styles.grid}>
              <h1 className={styles.titulo}>{data.nome}</h1>
              <span className={styles.preco}>{data.preco}</span>
              <p className={styles.descricao}>{data.descricao}</p>
            </div>
            )
          </section>
        )}
      </main>
    </>
  );
};

export default Produto;
