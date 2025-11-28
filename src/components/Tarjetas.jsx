import { useEffect, useState } from "react";

function Tarjetas() {
  const [datos, setDatos] = useState([]);

  const cargarTarjetas = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await res.json();
    setDatos(data.results);
    console.log(datos);
  };

useEffect(() => {
  cargarTarjetas();
}, []);

  return (
    <>
      {datos.map((card, i) => (
        <p key={i}>{card.name}</p>
      ))}
    </>
  );
}

export default Tarjetas;
