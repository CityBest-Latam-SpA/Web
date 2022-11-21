import styles from "./Viaja2.module.scss";
import money from "../../../assets/img/money.svg";
import money2 from "../../../assets/img/money-2.svg";
import money3 from "../../../assets/img/money-3.svg";
import nature from "../../../assets/img/nature.svg";

export const Viaja2 = () => {
  return (
    <div className={styles.containerViaja2}>
      <div className={styles.sectionFeatures}>
        <img src={money} alt="" />
        <h4>Aumenta tu renta</h4>
        <p>
          Con Citybest, en cualquier lugar usted garantiza un número constante
          de pasajeros que van a incrementar sus ganancias.
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={money2} alt="" />
        <h4>Reduzca sus gastos</h4>
        <p>
          Nuestra aplicación aumenta su número de pasajeros. Usted va a recoger
          más pasajeros y manejar menos.
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={money3} alt="" />
        <h4>Controle sus ingresos</h4>
        <p>
          Con nosotros aumentarás tus ganancias en un 30%, obtendrás mayor
          volumen de solicitudes y gastarás menos en el uso de energías limpias.
        </p>
      </div>
      <div className={styles.sectionFeatures}>
        <img src={nature} alt="" />
        <h4>Cuida el medio ambiente</h4>
        <p>
          Pide tu viaje y llegará por ti un conductor calificado que te llevará
          cómodo, rápido y seguro
        </p>
      </div>
    </div>
  );
};
