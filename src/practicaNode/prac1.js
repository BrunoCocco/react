function SaludarHora() {
  const nombre = process.argv[2];

  if (!nombre) {
    console.log("⚠️  Debes escribir tu nombre. Ejemplo:");
    console.log("👉  node ./archivo Bruno");
    return;
  }

  console.log("🕒 " + new Date().toLocaleString());
  console.log(`🚀 ${nombre}, eres el mejor PROGRAMADOOOOR!`);
}

SaludarHora();