import styles from "./Viaja3.module.scss";
import arrows from "../../../assets/img/arrows.svg";

export const Viaja3 = () => {
  return (
    <div className={styles.containerViaja3}>
      <img src={arrows} alt="" width={"20%"} />
      <section className={styles.info}>
        <h2>¿Preparado para una nueva manera de viajar?</h2>
        <div className={styles.containerLinea}>
          <div className={styles.linea}></div>
          <div className={styles.linea}></div>
          <div className={styles.linea}></div>
        </div>
        <h5>
          <span style={{ fontWeight: "bold" }}>Regístrate</span> para comenzar a
          conducir
        </h5>
      </section>
    </div>
  );
};
