import React, { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        placeholder="Busca un personaje..."
        onChange={handleChange}
        value={id}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
