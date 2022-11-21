import { Carousel } from "antd";
import styles from "./SliderPasajeros.module.scss";
import slider1 from "../../../assets/img/pasajero/pasajero.jpg";
import pasajerobanner1 from "../../../assets/img/pasajero/pasajero-banner-1.svg";
import slider2 from "../../../assets/img/pasajero/pasajero-banner-2.svg";
import slider3 from "../../../assets/img/pasajero/pasajero-banner-3.svg";
import logovive from "../../../assets/img/logo-vive.svg";
import logo from "../../../assets/img/logo.svg";
import PASAJEROS from "../../../assets/img/pasajero/PASAJEROS.svg";

const contentStyle = {
  minHeight: "35vh",
  height: "50vh",
  width: "100%",
  background: "rgba(68, 26, 123, 1)",
};

export const SliderPasajeros = () => {
  return (
    <div className={styles.containerSliderPasajeros}>
      <figure>
        <img width={"100%"} src={PASAJEROS} alt="" />
      </figure>
      {/* <Carousel effect="fade" autoplay>
        <div style={`${contentStyle} ${styles.firstSection}`}>
          <section>
            <img width={"100%"} src={PASAJEROS} alt="" />
            <section>
              <div>
                <img width={"15%"} src={logovive} alt="" />
                <img width={"35%"} src={slider3} alt="" />
                <img width={"45%"} src={pasajerobanner1} alt="" />
                <img width={"10%"} src={logo} alt="" />
              </div>
            </section>
          </section>
        </div>
        <div style={`${contentStyle} ${styles.firstSection}`}>
          <section>
            <img width={"100%"} src={slider1} alt="" />
            <section>
              <div>
                <img width={"15%"} src={logovive} alt="" />
                <img width={"35%"} src={slider2} alt="" />
                <img width={"45%"} src={pasajerobanner1} alt="" />
                <img width={"10%"} src={logo} alt="" />
              </div>
            </section>
          </section>
        </div>
      </Carousel> */}
    </div>
  );
};
