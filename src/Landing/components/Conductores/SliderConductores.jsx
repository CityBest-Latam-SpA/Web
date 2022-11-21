import { Carousel } from "antd";
import styles from "./SliderConductores.module.scss";
import slider1 from "../../../assets/img/pasajero/pasajero.jpg";
import conductorbanner1 from "../../../assets/img/conductor/conductor-banner-1.svg";
import slider2 from "../../../assets/img/conductor/conductor-banner-2.svg";
import slider3 from "../../../assets/img/conductor/conductor-banner-3.svg";
import logovive from "../../../assets/img/logo-vive.svg";
import logo from "../../../assets/img/logo.svg";
import CONDUCTORES from "../../../assets/img/conductor/CONDUCTORES.svg";

const contentStyle = {
  minHeight: "35vh",
  height: "50vh",
  width: "100%",
  background: "rgba(68, 26, 123, 1)",
};

export const SliderConductores = () => {
  return (
    <div className={styles.containerSliderConductores}>
      <figure>
        <img width={"100%"} src={CONDUCTORES} alt="" />
      </figure>
      {/* <Carousel effect="fade" autoplay>
        <div style={`${contentStyle} ${styles.firstSection}`}>
          <section>
            <img width={"100%"} src={slider1} alt="" />
            <section>
              <div>
                <img width={"15%"} src={logovive} alt="" />
                <img width={"35%"} src={slider3} alt="" />
                <img width={"45%"} src={conductorbanner1} alt="" />
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
                <img width={"45%"} src={conductorbanner1} alt="" />
                <img width={"10%"} src={logo} alt="" />
              </div>
            </section>
          </section>
        </div>
      </Carousel> */}
    </div>
  );
};
