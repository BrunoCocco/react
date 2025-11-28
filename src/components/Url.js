// const pokemon = (p) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${p}`
//     console.log(url);
//     return (url)
// }

// pokemon("pikachu")

// const buscar = (n) => {
//     const url = `https://catfact.ninja/facts?limit=${n}`
//     console.log(url);
//     return (url)
// }
// buscar(5)

// const btcPrice = (btc) => {
//     const url = `https://api.coingecko.com/api/v3/coins/${btc}`
//        console.log(url);
//     return (url)
// }
// btcPrice("bitcoin")

async function opciones() {
  let opcEleg = prompt("1 , 2 o 3 ??");
  console.log(opcEleg);

  try {
    
    if (opcEleg === "1") {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      console.log("Gato:", data.fact);
    } 
    else if (opcEleg === "2") {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await res.json();
      console.log("Pokemon:", data.name);
    } 
    else if (opcEleg === "3") {
      const res = await fetch("https://api.coingecko.com/api/v3/ping");
      const data = await res.json();
      console.log("CoinGecko:", data.gecko_says);
    } 
    else {
      console.log("Opción inválida");
    }
  } 
  catch (err) {
    console.log("Error en la API:", err.message);
  }
}

opciones();
