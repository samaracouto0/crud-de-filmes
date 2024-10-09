import { Star } from "@phosphor-icons/react";
import styles from "./card.module.css";
import { TCardMovie } from "./card.type";

export const CardMovie = ({
  original_title,
  overview,
  poster_path,
  vote_average,
}: TCardMovie) => {
  return (
    <li className={styles.item}>
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
        alt="banner"
        className={styles.banner}
      />
      <span className={styles.overlay}></span>
      <div className={styles.info}>
        <h3 className={styles.title}>{original_title}</h3>
        <p className={styles.dsc}>{overview}</p>
      </div>
      <p className={styles.rate}>
        {vote_average} <Star size={16} weight="duotone" color="#F4DD5E" />{" "}
      </p>
    </li>
  );
};
