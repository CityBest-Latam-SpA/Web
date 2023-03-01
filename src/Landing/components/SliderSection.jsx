import { Carousel } from "antd";
import styles from "./Slider.module.scss";
import slider1_o from "../../assets/home/COMUNICACION_BEV.webp";
import slider2_o from "../../assets/home/COMUNICACION_NOVOTEL.webp";
import slider3_o from "../../assets/home/COMUNICACION_RESTO.webp";
import slider4_o from "../../assets/home/COMUNICACION_WINE.webp";

import slider1 from "../../assets/home/COMUNICACION_1.png";
import slider2 from "../../assets/home/COMUNICACION_2.png";
import slider3 from "../../assets/home/COMUNICACION_3.png";
import slider4 from "../../assets/home/COMUNICACION_4.png";

const contentStyle = {
  // minHeight: "35vh",
  // height: "250px",
  width: "100%",
  background: "rgba(68, 26, 123, 1)",
};

export const SliderSection = () => {
  return (
    <div className={styles.containerSlider}>
      <Carousel effect="fade" autoplay>
        <div style={contentStyle}>
          <img width={"100%"} src={slider1} alt="" />
        </div>
        <div style={contentStyle}>
          <img width={"100%"} src={slider2} alt="" />
        </div>
        <div style={contentStyle}>
          <img width={"100%"} src={slider3} alt="" />
        </div>
        <div style={contentStyle}>
          <img width={"100%"} src={slider4} alt="" />
        </div>
      </Carousel>
      <br></br>
    </div>
  );
};