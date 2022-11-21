import styles from "./Footer.module.scss";
import logoAppleStore from "../../assets/home/footer/logoAppleStore.png";
import logoPlayStore from "../../assets/home/footer/logoPlayStore.png";
import viajesEcoamigables from "../../assets/home/footer/viajesEcoamigables.png";
import logo_pacto_global from "../../assets/img/logo_pacto_global.png";
import secretariademovilidad from "../../assets/img/secretaria-de-movilidad.png";
import bogotalogo from "../../assets/img/bogota-logo.png";

export const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.franjaMoradaFooter}></div>
      <div className={styles.titulo}>
        <h1>Una app, 3 formas de viajes ecoamigables</h1>
      </div>
      <div className={styles.descripcion1}>
        <p>
          Con <strong>Citybest</strong>, tú decides cómo contribuir al cuidado
          del medio ambiente. Taxistas regulados, conductores privados, en
          vehículos de energías renovables en una sola app. Al fin y al cabo,
          ¿tu decides como disminuir la huella de carbono?
        </p>
      </div>
      <div className={styles.descripcion2}>
        <p>
          Así que siéntate, disfruta y viaja en vehículos eléctricos con
          nosotros.
        </p>
      </div>
      <div className={styles.logos}>
        <div>
          <figure className={styles.logoApple}>
            <img src={logoAppleStore} alt="" />
          </figure>
        </div>
        <div>
          <figure className={styles.logoPlay}>
            <img src={logoPlayStore} alt="" />
          </figure>
        </div>
        <div>
          <figure className={styles.logoEcoAmigable}>
            <img src={viajesEcoamigables} alt="" />
          </figure>
        </div>
      </div>
      {/* <div className={styles.ecoAmigable}>
        
      </div> */}

      <div className={styles.marcas}>
        <span className={styles.support}>Support:</span>
        <figure>
          <img
            className={styles.pactoglobal}
            src={logo_pacto_global}            
            alt="pactoglobal"
          />
        </figure>
        <figure>
          <img className={styles.secretariademovilidad} src={secretariademovilidad} alt="secretariademovilidad" />
        </figure>
        <figure>
          <img
            className={styles.bogota}
            src={bogotalogo}            
            alt="bogota"
          />
        </figure>
      </div>

      <span className={styles.copy}>
        © Copyright 2009-2022. All rights reserved
      </span>
    </div>
  );
};

// export const Footer = () => {
//   return (
//     <div className={styles.containerFooter}>
//       <h1>
//         <center>
//           Citybest está presente en México, Colombia, Uruguay y Chile
//         </center>
//       </h1>
//       <h3>Terminos & Condiciones</h3>
//       <h3>© 2022 Citybest Todos los derechos reservados.</h3>

//       <h4>Colombia - Uruguay - Chile - Mexico</h4>
//       <section className={styles.fotosSection}>
//         <figure>
//           <img src={Colombia} width={"40px"} alt="" />
//         </figure>
//         <figure>
//           <img src={Uruguay} width={"40px"} alt="" />
//         </figure>
//         <figure>
//           <img src={Chile} width={"40px"} alt="" />
//         </figure>
//         <figure>
//           <img src={Mexico} width={"40px"} alt="" />
//         </figure>
//       </section>
//       <figure>
//         <img src={arrowprimary} width={"40px"} alt="" />
//       </figure>
//     </div>
//   );
// };
