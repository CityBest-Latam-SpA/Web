import styles from "./SliderNosotros.module.scss";
import slider1 from "../../../assets/img/pasajero/pasajero.jpg";
import concursobanner1 from "../../../assets/img/concurso/concurso-banner-1.svg";
import concursobanner2 from "../../../assets/img/concurso/concurso-banner-2.svg";
import slider2 from "../../../assets/img/concurso/concurso-banner-2.svg";
import slider3 from "../../../assets/img/concurso/concurso-banner-3.svg";
import concursobanner4 from "../../../assets/img/concurso/concurso-banner-4.svg";
import NOSOTROS from "../../../assets/img/concurso/NOSOTROS.svg";
import logovive from "../../../assets/img/logo-vive.svg";
import logo from "../../../assets/img/logo.svg";

const contentStyle = {
  minHeight: "35vh",
  height: "50vh",
  width: "100%",
  background: "rgba(68, 26, 123, 1)",
};

export const SliderNosotros = () => {
  return (
    <div className={styles.containerSliderConcurso}>
      <figure>
        <img width={"100%"} src={NOSOTROS} alt="" />
      </figure>
      {/* <div className={styles.twoImg}>
        <div className={styles.columnImg}>
          <section className={styles.firstImg}>
            <figure>
              <img src={logovive} alt="" />
            </figure>
            <figure>
              <img src={slider3} alt="" />
            </figure>
          </section>
          <section className={styles.secondImg}>
            <figure>
              <img src={concursobanner2} alt="" />
            </figure>
          </section>
        </div>
        <div className={styles.texts}>
          <figure>
            <img src={concursobanner1} alt="" />
          </figure>
          <figure>
            <img src={concursobanner4} alt="" />
          </figure>
        </div>
      </div>
      <div className={styles.logo}>
        <figure>
          <img width={"10%"} src={logo} alt="" />
        </figure>
      </div> */}
    </div>
  );
};
