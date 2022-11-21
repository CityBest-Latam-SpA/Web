import { Link } from "react-router-dom";
import logoCitybest from "../../assets/img/logocitibest.png";
import logo_pacto_global from "../../assets/img/logo_pacto_global.png";
import secretariademovilidad from "../../assets/img/secretaria-de-movilidad.png";
import bogotalogo from "../../assets/img/bogota-logo.png";
import iconoSecciones from "../../assets/img/iconoSecciones.svg";
import styles from "./SubNavbar.module.scss";

export const SubNavbar = ({ navbarMemo }) => {
  return (
    <nav
      className={styles.containerSubNavbar}
      style={
        navbarMemo
          ? { position: "fixed", top: "0px", opacity: 0.8 }
          : { position: "fixed", top: "60px", opacity: 0.8 }
      }
    >
      <div className={styles.firstSection}>
        <Link to="/">
          <figure>
            <img src={logoCitybest} width={"80px"} alt="" />
          </figure>
        </Link>
        <span
          style={{
            height: "3rem",
            width: "2px",
            backgroundColor: "white",
            margin: "0 1rem",
          }}
        ></span>
        <span
          style={{
            color: "white",
            fontSize: "1rem",
            position: "relative",
            marginLeft: "0",
          }}
        >
          Support
        </span>
        <figure>
          <img
            className={styles.pactoglobal}
            src={logo_pacto_global}
            width={"50px"}
            alt=""
          />
        </figure>
        <figure>
          <img src={secretariademovilidad} width={"65px"} alt="" />
        </figure>
        <figure>
          <img
            className={styles.bogota}
            src={bogotalogo}
            width={"65px"}
            alt=""
          />
        </figure>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.sections}>
          <Link to="/nosotros">
            <figure>
              <img src={iconoSecciones} width={"27px"} alt="" />
            </figure>
            <span>Nosotros</span>
          </Link>
        </div>
        <div className={styles.sections}>
          <Link to="/pasajeros">
            <figure>
              <img src={iconoSecciones} width={"27px"} alt="" />
            </figure>
            <span>Pasajeros</span>
          </Link>
        </div>
        <div className={styles.sections}>
          <Link to="/conductores">
            <figure>
              <img src={iconoSecciones} width={"27px"} alt="" />
            </figure>
            <span>Conductores</span>
          </Link>
        </div>
        <div className={styles.sections}>
          <Link to="/prensa">
            <figure>
              <img src={iconoSecciones} width={"27px"} alt="" />
            </figure>
            <span>Prensa</span>
          </Link>
        </div>
        <span
          onClick={() => {
            window.open("https://citybest-conductores.vercel.app/", "_blank");
          }}
          className={styles.conductor}
          style={{
            // backgroundColor: "#f8f9fa",
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "5px 12px",
            opacity: "0.8",
            fontSize: "1rem",
            marginLeft: "7px",
            cursor: "pointer",
          }}
        >
          ¡Quiero ser Conductor!
        </span>
      </div>
    </nav>
  );
};
