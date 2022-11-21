import styles from "./Viaja1.module.scss";
import arrow from "../../../assets/img/arrows-third.svg";
import Colombia from "../../../assets/img/paises/Colombia.png";
import Chile from "../../../assets/img/paises/Chile.png";
import Uruguay from "../../../assets/img/paises/Uruguay.png";
import Mexico from "../../../assets/img/paises/Mexico.png";
import PASAJEROS_banner from "../../../assets/img/pasajero/PASAJEROS_banner.png";
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
          Club <strong>Citybest</strong>
        </p>
        <p>
          En <strong>Citybest</strong>, recompensamos tu fidelidad y te
          invitamos a sumarte por la disminución de la huella de carbono.
        </p>
        <p>
          ¿Cómo funciona? Disfrutarás de ventajas exclusivas y ganarás puntos de
          fidelidad al viajar con <strong>Citybest</strong>. Podrás utilizar tus
          puntos para obtener descuentos (¡e incluso viajes gratis!) y premios
          de nuestros auspiciadores.
        </p>
        <p className={styles.infoApp}>
          ¡Abre la app para descubrir las ventajas!
        </p>
        <p className={styles.buttonApp}>
          <a href="#">Abre la app</a>
        </p>
      </section>
      
      <section>
        <figure>
          <img src={PASAJEROS_banner} alt="PASAJEROS_banner" />
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
