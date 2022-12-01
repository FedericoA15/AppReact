import Card from './Card';
import styles from "./Styles/Cards.module.css"

export default function Cards({characters,onClose}) {
   return <div className={styles.divContain}> 
      {
      characters.map(character=> 
      <Card 
         name={character.name} 
         species={character.species}
         gender={character.gender}
         onClose={onClose}
         image={character.image}
         key={character.name}
         id={character.id}
      />)
      }
   </div>;
}
