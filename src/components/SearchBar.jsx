import { useState } from "react";
import styles from "./Styles/SearchBar.module.css";
const arr = [];

for (let i = 0; i < 827; i++) {
  arr.push(i);
}
const randomCharacterId = (array) => {
  return Math.floor(Math.random() * array.length);
};
export default function SearchBar(props) {
  const [id, setId] = useState(""); // Este parte se usa para agarrar el valor del input una vez agarrado el valor tambien guardo el estado, y cuando invoco la funcion en el botton la tengo que hacer funcionar con el valor que le agarro aca que se agarrar convocvnado la funcionc handle en el input
  const [random, setRandom] = useState(arr);
  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const numAleatorio = () => {
    const indiceRandom = randomCharacterId(arr);
    const valorRandom = random[indiceRandom];
    props.onSearch(valorRandom);
  };
  return (
    <div className={styles.bar}>
      <div>
        <input placeholder="Pon un id aqui..." type="search" onClick={handleChange} />
        <button className={styles.bn5} onClick={() => props.onSearch(id)}>Agregar</button>
        <button onClick={numAleatorio}>Aleatorio</button>
      </div>
    </div>
  );
}
