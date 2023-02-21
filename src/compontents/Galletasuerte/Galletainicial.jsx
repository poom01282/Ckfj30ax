import styles from "./Galletainicial.module.css";

const Galletainicial = () => {
  return (
    <div className={styles.galletacontainer}>
      <div>
        <h1>Galleta china de la fortuna</h1>
        <img
          className={styles.imggalleta}
          src="https://i.ibb.co/XLKfJb6/galleta-de-la-fortuna-1.png"
        />

        <div className={styles.container}>
          <a href="/frase-galleta">
            <div className={styles.button}>
              <span>打開 Abrir</span>
            </div>
            <div className={styles.sun}></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Galletainicial;
