import { useEffect, useState } from "react";

 function Tarjetas() {
    const [img , setImg] = useState("")
    
    const api = async ()=>{
       const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        setImg(data.message)
      }
      useEffect(()=>{api()},[])

  return(
    <>
    <section>
      <article>
       <img src={img} />
       <button onClick={api} >apreta gil</button>
      </article>
    </section>

    </>

);
}
export default Tarjetas;
//   const [datos, setDatos] = useState([]);

//   const cargarTarjetas = async () => {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
//     const data = await res.json();
//     setDatos(data.results);
//     console.log(datos);
//   };

//   useEffect(() => {
//     cargarTarjetas();
//   }, []);

  
//   return (
//     <>
//       <section>
//         <article>
//           {datos.map((card, i) => (
//             <p key={i}>{card.name}</p>
//           ))}
//         </article>
//       </section>
//     </>
