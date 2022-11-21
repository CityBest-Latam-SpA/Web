import styles from "./Viaja1.module.scss";
import arrow from "../../../assets/img/arrows-third.svg";
import Colombia from "../../../assets/img/paises/Colombia.png";
import Chile from "../../../assets/img/paises/Chile.png";
import Uruguay from "../../../assets/img/paises/Uruguay.png";
import Mexico from "../../../assets/img/paises/Mexico.png";
import { useScroll } from "../../../hooks/useScroll";

export const Viaja1 = () => {
  const { navbarMemo } = useScroll();
  return (
    <div
      className={styles.containerViaja1}
      style={navbarMemo ? { marginTop: "-60px" } : { marginTop: "0px" }}
    >
      <img src={arrow} alt="" />
      <div className={styles.info}>
        <h1>Concurso Citybest</h1>
        <h3>conductores</h3>
        <p>
          Con el afán de premiar a nuestros nuevos clientes, lanzamos la campaña
          denominada “DESCARGA CITYBEST Y GANA”.
        </p>
        <section className={styles.lineas}>
          <div className={styles.linea}></div>
          <div className={styles.linea}></div>
          <div className={styles.linea}></div>
        </section>
        <div className={styles.paises}>
          <img src={Colombia} width={"40px"} alt="" />
          <img src={Chile} width={"40px"} alt="" />
          <img src={Uruguay} width={"45px"} alt="" />
          <img src={Mexico} width={"45px"} alt="" />
        </div>
      </div>
      <div className={styles.thirdSection}>
        <a href="#">
          <span>Ver bases y condiciones</span>
        </a>
      </div>
    </div>
  );
};
