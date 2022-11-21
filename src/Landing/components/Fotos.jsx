import styles from "./Fotos.module.scss";
import electron from "../../assets/img/electron.webp";
import electronresponsive from "../../assets/img/electron-responsive.webp";
import { detectImage } from "../../hooks/useScroll";
// import foto27 from "../../assets/img/FOTO27.svg";
// import foto28 from "../../assets/img/FOTO28.svg";
// import foto29 from "../../assets/img/FOTO29.svg";

export const Fotos = () => {
  const { memoImg } = detectImage(window.innerWidth);

  return (
    <div className={styles.containerFotos}>
      <a href="https://electronmotors.pe/" target="_blank">
        <figure>
          <img
            src={memoImg ? electron : electronresponsive}
            alt="electron"
            width={"100%"}
          />
        </figure>
      </a>
      {/* <figure>
        <img
          src={foto27}
          width={"100%"}
          style={{ marginTop: "2rem" }}
          alt="foto27"
        />
      </figure>
      <figure>
        <img
          src={foto28}
          width={"100%"}
          style={{ marginTop: "2rem" }}
          alt="foto28"
        />
      </figure>
      <figure>
        <img
          src={foto29}
          width={"100%"}
          style={{ marginTop: "2rem" }}
          alt="foto29"
        />
      </figure> */}
    </div>
  );
};
