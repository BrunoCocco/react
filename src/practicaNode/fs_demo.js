import fs from 'fs'

// 1️⃣ Crear el archivo
fs.writeFileSync('src/practicaNode/texto.txt', 'Este archivo se autodestruirá... 💣');
console.log('✅ Archivo creado.');

// 2️⃣ Leerlo
const contenido = fs.readFileSync('src/practicaNode/texto.txt', 'utf-8');
console.log('📄 Contenido:', contenido);

// 3️⃣ Esperar unos segundos y luego borrarlo
console.log('⏳ Esperando 3 segundos para eliminar el archivo...');

setTimeout(() => {
  fs.unlink('src/practicaNode/texto.txt', (error) => {
    if (error) {
      console.error('❌ Error al eliminar el archivo:', error.message);
      return;
    }
    console.log('🗑️  Archivo eliminado correctamente.');
  });
}, 3000);}

{/*Genere un archivo con un mensaje personalizado (process.argv[2] como nombre).

Espere 5 segundos.

Lo borre.

Si no existe, muestre un mensaje de error claro. */}