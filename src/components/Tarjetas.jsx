import { useState } from "react";

function Tarjetas() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const buscar = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`;

    const res = await fetch(url);
    if (!res.ok) {
      setData(null);
      return;
    }

    const json = await res.json();

    const info = {
      nombre: json.name,
      tipos: json.types.map((t) => t.type.name),
      peso: json.weight,
      altura: json.height,
      img: json.sprites.front_default,
    };

    setData(info);
  };

  return (
    <>
      <h2>Nombre de Pokémon:</h2>

      <input
        type="text"
        placeholder="Ingrese un Pokémon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      {data && (
        <div>
          <img src={data.img} alt={data.nombre} />
          <p>Nombre: {data.nombre}</p>
          <p>Peso: {data.peso}</p>
          <p>Altura: {data.altura}</p>
          <p>Tipos: {data.tipos.join(", ")}</p>
        </div>
      )}
    </>
  );
}

export default Tarjetas;

// ***************EJERCICIO 1 EJERCICIO 1 ******************************
//  const [datos, setDatos] = useState([]);

//  const cargarTarjetas = async () => {
//      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
//      const data = await res.json();
//      setDatos(data.results);
//      console.log(datos);
//    };

//    useEffect(() => {
//        cargarTarjetas();
//      }, []);

//      return (
//          <>
//            <section>
//              <article>
//                {datos.map((card, i) => (
//                    <p key={i}>{card.name}</p>
//                  ))}
//                </article>
//              </section>
//            </>

// *****************************EJERCICIO 2 EJERCICIO 2  **************************
//   const [img , setImg] = useState("")

//   const api = async ()=>{
//      const res = await fetch("https://dog.ceo/api/breeds/image/random")
//       const data = await res.json();
//       setImg(data.message)
//     }
//     useEffect(()=>{api()},[])

// return(
//   <>
//   <section>
//     <article>
//      <img src={img} />
//      <button onClick={api} >apreta gil</button>
//     </article>
//   </section>

//   </>
