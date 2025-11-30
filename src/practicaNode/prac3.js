import fs from "fs";
import readline from "readline";

function practica3() {
  const archivo = process.argv[2];

  const stream = fs.createReadStream(archivo, "utf-8");

  const rl = readline.createInterface({
    input: stream,
  });
  let contadorLineas = 0;

  rl.on("line", () => {
    contadorLineas++;
  });
  rl.on("line", (linea) => {
    if (linea.includes("y")) {
      console.log(`Esta linea tiene la letra y:
        ${linea}  
        `);
    }
  });

  rl.on("close", () => {
    console.log("Total de líneas:", contadorLineas);
  });

  stream.on("data", (chunk) => {
    console.log("Chunk:", chunk.length, "bytes");
  });
}
practica3();
