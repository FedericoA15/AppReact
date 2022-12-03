import styles from "./Styles/Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Card({ name, id, species, gender, image, onClose }) {
  return (
    <div className={styles.divContainer}>
      <div>
        <div className={styles.boton}>
          <button onClick={onClose}>X</button>
        </div>
        <Link>
          <h2 className={styles.name}>{name}</h2>
        </Link>
        <h2 className={styles.name}>{id}</h2>
        <div className={styles.info}>
          <h2 className={styles.species}>{species}</h2>
          <h2 className={styles.gender}>{gender}</h2>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
