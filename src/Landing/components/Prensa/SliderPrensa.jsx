import { Link, animateScroll as scroll } from "react-scroll";
import { Carousel } from "antd";
import styles from "./SliderPrensa.module.scss";
import citynocity from "../../../assets/img/citynoticiaauto.jpg";
import { Card } from "./Card";
import { data } from "../../../helpers/dataPrensa";
import { PaginationBar } from "./Pagination";
import { detectScreen } from "../../../hooks/useScroll";
import { useEffect, useState } from "react";

const contentStyle = {
  minHeight: "35vh",
  height: "50vh",
  width: "100%",
  background: "rgba(68, 26, 123, 1)",
};

export const SliderPrensa = () => {
  const { dataInfo, setDataInfo } = detectScreen(window.innerWidth, data);

  return (
    <div className={styles.containerSliderPrensa}>
      <Carousel effect="fade" autoplay>
        <div style={`${contentStyle} ${styles.firstSection}`}>
          <section className={styles.sectionImgCity}>
            <img width={"100%"} src={citynocity} alt="" />
            <div>
              <span>
                {/* ¡Las noticias mas destacadas de Citybest las tenes aquí! */}
                ¡Todo lo que necesitas saber de Citybest y más, lo tenés aquí!
              </span>
              {/* <h5>Fuente: Semana</h5> */}
              {/* <a
                href="https://www.semana.com/hablan-las-marcas/articulo/citybest-la-app-de-transporte-urbano-con-vehiculos-ecologicos-que-llega-a-colombia/202200/"
                target="_blank"
              >
                <h6>Ver más...</h6>
              </a> */}
              <Link spy={true} to="cardsTitle">
                <h6>Ver más...</h6>
              </Link>
            </div>
          </section>
        </div>
      </Carousel>
      <div id="cardsTitle" style={{ color: "white", backgroundColor: 'white', height: '2rem' }}>
        .
      </div>
      <div className={styles.cardsTitle}>
        <h1>¡Noticias más destacadas!</h1>
      </div>
      <div className={styles.card}>
        {dataInfo.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
      <div className={styles.pagination}>
        <PaginationBar data={data} setDataInfo={setDataInfo} />
      </div>
    </div>
  );
};
