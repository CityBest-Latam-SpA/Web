import styles from "./Viaja2.module.scss";
import security from "../../../assets/img/security.svg";
import driver from "../../../assets/img/driver.svg";
import quality from "../../../assets/img/quality.svg";
import nature from "../../../assets/img/nature.svg";

export const Viaja2 = () => {
  return (
    <div className={styles.containerViaja2}>
      <div className={styles.sectionFeatures}>
        <img src={security} alt="" />
        <h4>Viaja seguro</h4>
        <p>
          Tu seguridad es lo más importante. Por eso elegimos cuidadosamente a
          nuestros conductores y hacemos seguimiento de todas las carreras en
          nuestra plataforma.
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={driver} alt="" />
        <h4>Conductor en minutos</h4>
        <p>
          Para ti el tiempo es algo valioso. ¡Recuerda! El tiempo de espera de
          nuestros viajes será mas prolongado que lo habitual. Estamos
          impulsando el crecimiento y oferta de vehículos eléctricos, híbridos y
          a gas, así que trata de tener paciencia previo a su llegada! ¡Saquemos
          lo mejor de nosotros y cuidemos el medio ambiente en cada ciudad!
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={quality} alt="" />
        <h4>Calidad y comodidad</h4>
        <p>
          Buscamos mejorar todos los días y, por eso, revisamos las
          calificaciones de nuestros conductores para asegurar que te mueves
          solo con los mejores. Además, viaja entretenido y ¡Recuerda!, puedes
          acceder directamente a Spotify y WhatsApp
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={nature} alt="" />
        <h4>Cuida el medio ambiente</h4>
        <p>
          Nos sumamos a los nuevos desafíos energéticos y ambientales y por ello
          nuestro compromiso es contribuir a la movilidad sustentable de las
          personas, fortaleciendo de forma continua el uso de vehículos en base
          a energías limpias para transportarse en el mercado Latam.
        </p>
      </div>
    </div>
  );
};
