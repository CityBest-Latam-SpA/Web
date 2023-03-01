import styles from "./Fotos.module.scss";
import electron from "../../assets/img/electron.webp";
import electronresponsive from "../../assets/img/electron-responsive.webp";
import { detectImage } from "../../hooks/useScroll";
// import foto27 from "../../assets/img/FOTO27.svg";
// import foto28 from "../../assets/img/FOTO28.svg";
// import foto29 from "../../assets/img/FOTO29.svg";
import byd from "../../assets/img/byd.png";
import mg from "../../assets/img/mg.png";

export const Fotos = () => {
  const { memoImg } = detectImage(window.innerWidth);

  return (
    <div className={styles.containerFotos}>
      <a href="https://www.mgmotor.pe" target="_blank">
        <figure>
          <img src={mg} alt="mg" width={"100%"} />
        </figure>
      </a>
      <a href="https://www.byd.com.pe" target="_blank">
        <figure>
          <img src={byd} alt="byd" width={"100%"} />
        </figure>
      </a>
      {/*<figure>
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
