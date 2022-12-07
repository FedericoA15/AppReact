import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import React, { useState, useEffect } from "react";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAcces] = useState(false);

  const username = "ejemplo@gmail.com";

  const password = "1password";

  const navigate = useNavigate();

  const Location = useLocation();
  
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const Login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };
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
      {Location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form Login={Login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
