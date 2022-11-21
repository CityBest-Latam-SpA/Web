import styles from "./styles.module.scss";
import { SliderSection, Cars, Fotos, Footer } from "../";
import { detectImage, useScroll } from "../../hooks/useScroll";
import sliderestatico from "../../assets/img/slider-estatico-nuevo.webp";
import franjamorada from "../../assets/img/franja-morada-telefono-nuevo.webp";
import franjamorada2 from "../../assets/img/franja-morada-telefono-nuevo2.png";
import celsinfondo from "../../assets/img/cel-sin-fondo.png";
import franjamoradaresponsive from "../../assets/img/franja-morada-telefono-nuevo-responsive.webp";
import franjamoradaresponsive2 from "../../assets/img/franja-morada-telefono-nuevo-responsive2.png";
import { Layout } from "../layouts/Layout";
import { useEffect } from "react";
import { InfoCitybest } from "../components/InfoCitybest/InfoCitybest";
import { Novotel } from "../components/Novotel/Novotel";

export const Home = () => {
  const { navbarMemo } = useScroll();
  const { memoImg } = detectImage(window.innerWidth);

  return (
    <>
      <SliderSection />
      <Layout>
        {/* <Navbar navbarMemo={navbarMemo} style={{ zIndex: "99" }} />
      <SubNavbar navbarMemo={navbarMemo} /> */}
        <a href="https://citybest-conductores.vercel.app/" target="_blank">
          <img
            src={sliderestatico}
            width={"100%"}
            alt="sliderestatico"
            style={{ marginTop: navbarMemo ? "0px" : "0px" }}
          />
        </a>
        <InfoCitybest />
        {/* <img
          src={franjamapatextos}
          width={"100%"}
          style={{ marginTop: "2rem" }}
          alt="franja"
        /> */}
        <div className={styles.viajaEntretenido}>
          <figure>
            <img
              src={memoImg ? franjamorada2 : franjamoradaresponsive2}
              width={"100%"}
              alt="franjamorada"
            />
          </figure>
          <figure>
            <img
              src={memoImg ? celsinfondo : celsinfondo}
              style={{ marginTop: "3rem" }}
              alt="cel_sin_fondo"
            />
          </figure>
        </div>

        <Cars />

        <Novotel />

        {/* <figure style={{ marginBottom: "0px" }}>
          <img
            src={driverusuario}
            width={"100%"}
            style={{ marginTop: "2rem" }}
            alt="driverusuario"
          />
        </figure> */}
        <Fotos />
        {/* <figure>
          <img src={playstoreappstore} alt="" />
        </figure> */}

        <Footer />
      </Layout>
    </>
  );
};
