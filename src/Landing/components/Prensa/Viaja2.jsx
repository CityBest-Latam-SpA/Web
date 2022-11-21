import styles from "./Viaja2.module.scss";
import gift from "../../../assets/img/gift.svg";
import paper from "../../../assets/img/paper.svg";
import cup from "../../../assets/img/cup.svg";

export const Viaja2 = () => {
  return (
    <div className={styles.containerViaja2}>
      <div className={styles.sectionFeatures}>
        <img src={gift} alt="" />
        <h4>Xiaomi RedmiNote 9</h4>
        <p>
          Solo tienes que registrarte, descargar nuestra app conductor y ya
          estarás participando por un Xiaomi Redmi Note 9 y recuerda mientras
          más viajes realizas con CityBest, más posibilidades tendrás de ganar.
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={paper} alt="" />
        <h4>Bases y condiciones</h4>
        <p>
          Revisa las bases y condiciones de nuestro concurso en el siguiente
          enlace.
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={cup} alt="" />
        <h4>Derecho al premio</h4>
        <p>
          Los clientes cuyos nombres resultaren ganadores de los sorteos tendrán
          derecho a adjudicarse el premio.
        </p>
      </div>
    </div>
  );
};
