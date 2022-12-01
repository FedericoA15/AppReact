import styles from "./Styles/Card.module.css"
export default function Card(props) {
   return (
      <div className={styles.divContainer}>
         <div>
            <div className={styles.boton}>
               <button onClick={props.onClose}>X</button>
            </div>
            <h2 className={styles.name}>{props.name}</h2>
            <div className={styles.info}>
               <h2 className={styles.species}>{props.species}</h2>
               <h2 className={styles.gender}>{props.gender}</h2>
            </div>
            <img src={props.image} alt="" />
         </div>
      </div>
   );
}
