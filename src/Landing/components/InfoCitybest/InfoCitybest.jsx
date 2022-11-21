import styles from "./styles.module.scss";
import info from "../../../assets/home/aquiEmpieza.png";
import info1 from "../../../assets/img/info1.png";
import info2 from "../../../assets/img/info2.jpg";
import info3 from "../../../assets/img/info3.png";
import info4 from "../../../assets/img/info4.png";
import hojas from "../../../assets/home/hojas.svg";

export const InfoCitybest = () => {
  return (
    <div className={styles.containerInfo}>
      <figure className={styles.aquiEmpieza}>
        <img src={info} alt="" />
      </figure>
      <section className={styles.sections}>
        <div className={styles.firstSection}>
          <figure>
            <img src={info1} alt="" />
          </figure>
          <p className={styles.titles}>
            <strong>
              Beneficios para ti
              <img src={hojas} alt="" />
            </strong>
          </p>
          <p>
            Ser un taxista regulado y privado comprometido con el medio ambiente
            merece ser premiado. Accede a beneficios especiales: registro como
            taxista en la App sin esperas, prioridad en los servicios y mucho
            más.
          </p>
        </div>
        <div className={styles.secondSection}>
          <figure>
            <img src={info2} alt="" />
          </figure>
          <p className={styles.titles}>
            <strong>
              Prueba un eléctrico
              <img src={hojas} alt="" />
            </strong>
          </p>
          <p>
            Es tu turno, ¿te atreves a probar un coche eléctrico? Puedes probar
            los coches eléctricos de nuestros proveedores para ver qué vehículo
            eléctrico se adapta más a tus necesidades.
          </p>
        </div>
        <div className={styles.thirdSection}>
          <figure>
            <img src={info3} alt="" />
          </figure>
          <p className={styles.titles}>
            <strong>
              Por qué decirle sí al eléctrico
              <img src={hojas} alt="" />
            </strong>
          </p>
          <p>
            Accede a <strong>ventajas exclusivas</strong> en la financiación, el
            estacionamiento o una conducción más eficiente. El futuro se escribe
            en verde y la electrificación de la movilidad es la alternativa{" "}
            <strong>más sostenible</strong> a los actuales problemas de
            contaminación.
          </p>
        </div>
        <div className={styles.fourthSection}>
          <figure>
            <img src={info4} alt="" />
          </figure>
          <p className={styles.titles}>
            <strong>
              Plan Aeropuerto Hoteles
              <img src={hojas} alt="" />
            </strong>
          </p>
          <p>
            <strong>Benefíciate del Plan Aeropuerto Hoteles</strong> con mas
            volúmen de viajes y ganancias por ser trayectos más largos del punto
            de recogida al punto de destino.
          </p>
        </div>
      </section>
    </div>
  );
};
