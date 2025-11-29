import fs from 'fs';

fs.readFile('src/practicaNode/prac1.js', 'utf-8', (error, data) => {
  if (error) {
    console.error("❌ Error al leer:", error.message);
    return;
  }
  console.log("📄 Contenido:", data);
});

console.log("✅ Lectura iniciada...");

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
    console.log("⏳ Esperando...");
    console.log(" tendras que esperarme 2 o 3 seg...")
    await esperar(3000);
    console.log("✅ ¡Listo después de 2 segundos!");
}

demo();


// import fs from 'fs';


// function SaludarHora() {
//   const nombre = process.argv[2];
//   console.log(`🚀 ${nombre}, eres el mejor PROGRAMADOOOOR!`);
  
//   fs.writeFileSync('src/practicaNode/texto.txt', 'Este archivo se autodestruirá... 💣');
//   console.log('✅ Archivo creado.');
  
//   setTimeout(() => {
//     fs.unlink('src/practicaNode/texto.txt', (error) => {
//       if (error) {
//         console.error('❌ Error al eliminar el archivo:', error.message);
//         return;
//       }
//       console.log('🗑️  Archivo eliminado correctamente.');
//     });
//   }, 3000);}

// SaludarHora();