import styles from "./Card.module.scss";

export const Card = ({
  img,
  title,
  description,
  link,
  font,
  date,
  country,
}) => {
  return (
    <div className={styles.containerCard}>
      <img src={img} alt="" />
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank">
          <h5>Ver más</h5>
        </a>
        <h6>Fuente: {font}</h6>
        <h6>{date}</h6>
        <h6>{country}</h6>
      </section>
    </div>
  );
};
