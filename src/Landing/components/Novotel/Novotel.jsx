import styles from "./styles.module.scss";
import novotel from "../../../assets/home/honor_novotel.jpg";
import cel1 from "../../../assets/home/cel1.png";
import cel2 from "../../../assets/home/cel2.png";
import cel3 from "../../../assets/home/cel3.png";
import hiltonviaje from "../../../assets/home/hilton_viaje.jpg";

export const Novotel = () => {
  return (
    <div className={styles.containerNovotel}>
      <section className={styles.firstSection}>
        <figure>
          <img src={hiltonviaje} alt="hiltonviaje" />
        </figure>
        <div className={styles.generalInfo}>
          <h1>
            Traslados desde y hacia el aeropuerto más sencillos con Citybest
          </h1>
          <p>
            ¿Vas al aeropuerto? Usa la app de transporte sostenible, reserva tus
            traslados al aeropuerto desde tu hotel, y contribuye a la
            disminución de la huella de carbono, haz que volar de madrugada o
            llegar a una ciudad nueva sea mucho más sencillo que nunca.
          </p>
          <a href="#" target="_blank">
            Más información
          </a>
        </div>
      </section>

      <div className={styles.cel1}>
        <figure>
          <img src={cel1} alt="cel1" />
        </figure>
        <h3>Trayecto Hotel-Aeropuerto</h3>
        <p>
          Solo tienes que reservar tu trayecto como de costumbre. Recuerda que
          algunos aeropuertos tienen varias terminales, comprueba que has
          escogido la correcta mediante nuestra aplicación o ejecutivo
          presencial.
        </p>
      </div>
      <div className={styles.cel2}>
        <figure>
          <img src={cel2} alt="cel2" />
        </figure>
        <h3>Encuentra a tu conductor/a</h3>
        <p>
          Cada aeropuerto es un mundo. Por eso, tenemos señales que te ayudarán
          a encontrar a tu conductor/a regulado o privado en el punto de
          recogida correcto.
        </p>
      </div>
      <div className={styles.cel3}>
        <figure>
          <img src={cel3} alt="cel3" />
        </figure>
        <h3>¡Buen viaje!</h3>
        <p>
          Siéntate, relájate y vive la experiencia de un viaje sostenible
          mediante vehículos de energías limpias y 100% eléctricos con Citybest.
        </p>
      </div>
    </div>
  );
};
