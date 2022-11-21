import styles from "./Cars.module.scss";
import autoelectrico from "../../assets/img/boton-citycero-electrico.png";
import autogas from "../../assets/img/boton-citycero-gas.png";
import autohibrido from "../../assets/img/boton-citycero-hibrido.png";
import hojas from "../../assets/home/hojas.svg";

export const Cars = () => {
  return (
    <div className={styles.containerCars}>
      <section className={styles.firstSection}>
        <img src={autoelectrico} alt="" width={"100%"} />
        <h3>
          Vehículos eléctricos{" "}
          <img
            src={hojas}
            alt=""
            width={"35px"}
            style={{ marginBottom: "12px" }}
          />
        </h3>
        <p>
          El taxi techo verde y vehículos privados, pero más ecológico. Nuestros
          taxis eléctricos te llevarán de un sitio a otro a menor costo y
          contribuyendo a la disminución de la huella de carbono.
        </p>
      </section>
      <section className={styles.secondSection}>
        <img src={autogas} alt="" width={"100%"} />
        <h3>
          Vehículos a gas natural{" "}
          <img
            src={hojas}
            alt=""
            width={"35px"}
            style={{ marginBottom: "12px" }}
          />
        </h3>
        <p>
          El rendimiento de un auto a gas en velocidad y potencia es similar, y
          en muchos casos hasta mejor, que el de uno a gasolina. Es por eso, que
          todos tus viajes con Citybest serán los más económicos del mercado
        </p>
      </section>
      <section className={styles.thirdSection}>
        <img src={autohibrido} alt="" width={"100%"} />
        <h3>
          Impacto{" "}
          <img
            src={hojas}
            alt=""
            width={"35px"}
            style={{ marginBottom: "12px" }}
          />
        </h3>
        <p>
          En Citybest contribuimos a disminuir la presencia de gases
          contaminantes en la atmósfera, principalmente el dióxido de carbono
          (CO2), monóxido de carbono (CO), entre otros.
        </p>
      </section>
    </div>
  );
};
