import styles from "./Viaja1.module.scss";
import arrow from "../../../assets/img/arrows-third.svg";
import Colombia from "../../../assets/img/paises/Colombia.png";
import Chile from "../../../assets/img/paises/Chile.png";
import Uruguay from "../../../assets/img/paises/Uruguay.png";
import Mexico from "../../../assets/img/paises/Mexico.png";
import CONDUCTORES_banner from "../../../assets/img/conductor/CONDUCTORES_banner.png";
import { useScroll } from "../../../hooks/useScroll";

export const Viaja1 = () => {
  const { navbarMemo } = useScroll();
  return (
    <div
      className={styles.containerViaja1}
      style={navbarMemo ? { marginTop: "0px" } : { marginTop: "0px" }}
    >
      <section>
        <p className={styles.title}>
          ¿Por qué <strong>Citybest</strong>?
        </p>
        <p>
          Consigue más servicios durante tu jornada laboral y únete a la App de
          transporte sostenible. El equipo <strong>Citybest</strong> de tu
          ciudad estará encantado de ayudarte.
        </p>
        <p>
          Consigue más servicios desde los hoteles y aeropuertos y empieza a
          sacarle partido ahora mismo a tu App conductor: más clientes, más
          servicios, más promociones, más planificación... ¡Y mucho más!
        </p>
        <p>
          Únete a <strong>Citybest</strong> sin ataduras. No tendrás que pagar
          ningún tipo de cuota, solo una pequeña comisión por los servicios que
          realices. Sin riesgo, ¡todo beneficios!
        </p>
        <p className={styles.buttonApp}>
          <a href="#">Abre la app</a>
        </p>
      </section>
      <section>
        <figure>
          <img src={CONDUCTORES_banner} alt="CONDUCTORES_banner" />
        </figure>
      </section>
      {/* <img src={arrow} width={"17%"} alt="" />
      <div>
        <h1>Viajá con nosotros</h1>
        <h3>Descargá la app</h3>
        <section>
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
      </div> */}
    </div>
  );
};
