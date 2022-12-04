import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import React from "react";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = React.useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!isRepetida(data.name)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No podes repetir");
          }
        } else {
          window.alert("No hay nadie con ese Id");
        }
      });
  }
  const isRepetida = (name) => {
    let aux = false;
    characters.forEach((char) => {
      if (char.name === name) aux = true;
    });
    return aux;
  };
  const onClose = (name) => {
    setCharacters(characters.filter((char) => char.name !== name));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose}  />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
