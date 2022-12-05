import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Styles/Detail.module.css";
export default function Detail() {
  const { detailId } = useParams(); // para que el use Params ande la variable declarada debe tener el mismo nombre que se le pone en el route en la parte del path
  const [characters, setcharacters] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setcharacters(char);
        }
      })
      .catch((err) => {});
    return setcharacters({});
  }, [detailId]);
  return (
    <div className={styles.container}>
      <img src={characters.image} alt={characters.name} />
      <h2>{characters.name}</h2>
      <h2>{characters.status}</h2>
      <h2>{characters.species}</h2>
      <h2>{characters.gender}</h2>
      <h2>{characters.origin?.name}</h2>
    </div>
  );
}
// null safe es el signo de pregunta (?) signifca que si esta eso se muestre pero en caso de no existir que no me preocupe no aparecera
