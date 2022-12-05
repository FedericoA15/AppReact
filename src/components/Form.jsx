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
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username"></label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <p>{errors.username}</p>
      <label htmlFor="password"></label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <p>{errors.password}</p>
      <button type="submit">Iniciar</button>
      </form>
    </div>
  );
}
