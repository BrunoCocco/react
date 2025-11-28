import { useState, useEffect } from "react";


function Fact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function cargarFact() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (e) {
      setError("Error al cargar la API");
    } finally {
      setLoading(false);
    }
  }
//  Este use efect hace que el cargar datos se ejecute solo una vez. asi no se RENDERIZA Tipo bucle
  useEffect(() => {
    cargarFact(); 
  }, []);

  return (
    <div>
      <h1>Fact Random</h1>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
{/* Si no ubo error y no esta cargando... mostra el facto! */}
      {!loading && !error && <p>{fact}</p>}

      <button onClick={cargarFact}>Traer otro fact</button>
    </div>
  );

}

export default Fact;
