import Card from './Card';
import styles from "./Styles/Cards.module.css"

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
         onClose={character.onClose}
      />)
      }
   </div>;
}
