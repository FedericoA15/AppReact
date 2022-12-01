import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav.jsx"
import React from 'react';

function App () {
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };
  const [characters, setCharacters] = React.useState([]);
  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}
const onClose = (id) =>{
  setCharacters(characters.filter((char) => char.id !== id))
}
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div style={{display : "flex", justifyContent: "center"}}>
      </div>
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
