import React from "react";
import Cards from './Cards';

export default function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}

