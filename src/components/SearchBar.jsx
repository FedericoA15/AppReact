import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
   return (
      <div className={styles.prueba}>
         <div>
            <input type='search' />
            <button 
            onClick={()=> props.onSearch("Esto es el id")}
            >Agregar</button>
         </div>
      </div>
   );
}
