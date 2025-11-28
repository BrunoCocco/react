import {useState } from "react";

function Pokemon() {
  const [poke, setPokemon] = useState("");

  const elegido = async (nombre) => {
    
      const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
      const res = await fetch(url);
      const data = await res.json();
      setPokemon(`a ver a ver putitos!! : ${data.name},${data.height}`);
    
  };

  return (
    <>
    <h2>cuanto te mide pokemon: </h2>
      <input id="pokemon" type="text" placeholder="Ingrese un Pokémon" />

      <button onClick={() => {
        const value = document.getElementById("pokemon").value;
        elegido(value);
      }}>
        Buscar
      </button>

      <p>{poke}</p>
    </>
  );
}

export default Pokemon;
