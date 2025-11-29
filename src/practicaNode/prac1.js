import fs from 'fs';

function nombre() {
  const user = process.argv[2]
  console.log(`🚀 ${user},PROGRAMADOOOOR PURA SANGREEE!`);

  // 1️⃣ Escribir contenido inicial
  const contenido = `Hola ${user}! Sos el mejor! No Existe otro programador como vos!! 💪\n`;
  
  fs.writeFileSync('src/practicaNode/text.txt', contenido);
  console.log('✅ Archivo creado.  /text.txt ');

  // 2️⃣ Leer el contenido del archivo
  const data = fs.readFileSync('src/practicaNode/text.txt', 'utf-8');
  
  console.log('📖 Contenido del archivo:');
  console.log(data);

  // 5️⃣ Borrarlo después de unos segundos
  console.log('⏳ El archivo se eliminará en 4 segundos...');
  
  setTimeout(() => {
    fs.unlinkSync('src/practicaNode/text.txt');
    console.log('🗑️  Archivo eliminado.');
  }, 4000);
}

nombre();