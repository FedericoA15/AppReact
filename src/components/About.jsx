import React from "react";
import styles from "./Styles/About.module.css";

export default function About(){
    return (
        <div className={styles.prueba}>
            <h3>¿Quien soy?</h3>
            <p>Buenas, soy Federico Almeida, actual estudiante del bootcamp soy Henry, amante de la programacion y del diseño, buscando poder aprender mas y siempre poder trabajar en grupo con gente nueva</p>
            <h3>Informacion sobre la aplicacion:</h3>
            <p>Bueno esta aplicacion la cree para poder practicar temas que vemos en el segundo modulo de soy Henry estas incluyen las siguiente tecnologias</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScrip</li>
                <li>React</li>
                <li>React-Router-Dom</li>
                <li>Redux</li>
                <li>React-Redux</li>
            </ul>
        </div>
    );
}