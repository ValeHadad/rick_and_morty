import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          INICIO
        </Link>
        <SearchBar onSearch={props.onSearch} />
        <Link className="navbar-brand" to="/about">
          SOBRE
        </Link>
        <button className="btn btn-primary" onClick={props.out}>
          LOGOUT
        </button>
      </div>
    </nav>
  );
}
