import { useEffect } from "react";
import './components/Url'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
//Siempre entra por un useEfect, porq se carga 1 vez al crear el componente!
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      // .then(data => console.table(data))

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((pok) => pok.json())
      // .then((poke) => console.log(poke));
  }, []);

  return (
    <>
      <h2>hola</h2>

    </>
  );
}

export default App;
