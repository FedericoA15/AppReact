import { useState } from "react";
import { validation } from "./validation.js";
import styles from "./Styles/Form.module.css";
export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    props.Login(userData);
  }
  return (
    <div className={styles.divContain}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username"></label>
      <input
        placeholder="Email..."
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
        className={styles.input}
      />
      <p className={styles.error}>{errors.username}</p>
      <label htmlFor="password"></label>
      <input
      placeholder="Password..."
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        className={styles.input}
      />
      <p>{errors.password}</p>
      <button className={styles.bn5} type="submit">Iniciar</button>
      </form>
    </div>
  );
}
