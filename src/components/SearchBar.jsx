import { useState } from "react";
import styles from "./Styles/SearchBar.module.css";
export default function SearchBar(props) {
  const [id, setId] = useState(""); // Este parte se usa para agarrar el valor del input una vez agarrado el valor tambien guardo el estado, y cuando invoco la funcion en el botton la tengo que hacer funcionar con el valor que le agarro aca que se agarrar convocvnado la funcionc handle en el input
  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };
  return (
    <div className={styles.bar}>
      <div>
        <input placeholder="Pon un id aqui..." type="search" onChange={handleChange} />
        <button className={styles.bn5} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
    </div>
  );
}
