import './App.css'
import Cards from './components/Cards.jsx'
import Nav from "./components/Nav.jsx"
import React from 'react';
import { Routes, Route} from "react-router-dom"

function App () {
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
const onClose = (name) =>{
  setCharacters(characters.filter((char) => char.name !== name))
}
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
