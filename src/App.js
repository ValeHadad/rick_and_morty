import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "123456";

  function logout() {
    setAccess(false);
  }

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);

  function onSearch(dato) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((response) => {
        if (response.data.name) {
          setCharacters((oldChars) => [...oldChars, response.data]);
        } else {
        }
      })
      .catch((err) => window.alert("¡No hay personajes con este ID!"));
  }

  function onClose(id) {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== Number(id))
    );
  }

  const [characters, setCharacters] = useState([]);

  const location = useLocation();
 return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />}
      <div className="container">
        <Routes>
          <Route
            path="/home"
            element={<Home characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/"
            element={<Form login={login} EMAIL={EMAIL} PASSWORD={PASSWORD} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

