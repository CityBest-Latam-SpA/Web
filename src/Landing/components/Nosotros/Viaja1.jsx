import styles from "./Viaja1.module.scss";
import arrow from "../../../assets/img/arrows-third.svg";
import Colombia from "../../../assets/img/paises/Colombia.png";
import Chile from "../../../assets/img/paises/Chile.png";
import Uruguay from "../../../assets/img/paises/Uruguay.png";
import Mexico from "../../../assets/img/paises/Mexico.png";
import Nosotros_banner from "../../../assets/img/concurso/NOSOTROS_banner.png";
import logoAppleStore from "../../../assets/home/footer/logoAppleStore.png";
import logoPlayStore from "../../../assets/home/footer/logoPlayStore.png";
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
          Es hora de <strong>Citybest.</strong>
        </p>
        <p>
          La App de movilidad de transporte sostenible. Estamos adheridos a
          Pacto Global (ONU) por la disminución de la huella de carbono.
        </p>
        <h4>"Déjate llevar, Libre para moverte, Libre para viajar."</h4>
        <ul>
          <li>
            Te llevamos donde quieras de forma rápida y cuidando el medio
            ambiente.
          </li>
          <li>
            Toma un taxi regulado o conductor privado desde tu hotel a todo
            destino y paga fácil por la App.
          </li>
          <li>
            Siéntete como en casa por Sudamérica: una App, 4 países, 9 ciudades.
          </li>
        </ul>

        {/* <p>
          Te llevamos donde quieras de forma rápida y cuidando el medio
          ambiente.
        </p> */}
        {/* <p>
          Toma un taxi regulado o conductor privado desde tu hotel a todo
          destino y paga fácil por la App.
        </p> */}
        {/* <p>
          Toma un taxi regulado o conductor privado desde tu hotel a todo
          destino y paga fácil por la App.
        </p> */}
        <p>
          <strong>Citybest</strong> es movimiento. Estaremos donde necesites
          para llevarte donde quieras con el único propósito de contirbuir a la
          disminución de la huella de carbono.
        </p>
        <p>Por favor, actualiza tu App para descubrir todos los cambios.</p>
        <div className={styles.logos}>
          <div>
            <figure className={styles.logoApple}>
              <img src={logoAppleStore} alt="logoAppleStore" />
            </figure>
          </div>
          <div>
            <figure className={styles.logoPlay}>
              <img src={logoPlayStore} alt="logoPlayStore" />
            </figure>
          </div>
        </div>
      </section>
      
      <section>
        <figure>
          <img src={Nosotros_banner} alt="NOSOTROS_banner" />
        </figure>
      </section>
      {/* <img src={arrow} alt="" />
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
      </div> */}
    </div>
  );
};
