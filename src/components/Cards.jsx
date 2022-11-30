import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return <div className={styles.divContain}>
      {
      characters.map(character=> 
      <Card 
         name={character.name} 
         species={character.species}
         gender={character.gender}
         image={character.image}
         key={character.name}
         onClose={()=> window.alert('Emulamos que se cierra la card')}
      />)
      }
   </div>;
}
