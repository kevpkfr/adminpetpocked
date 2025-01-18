const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta "core"
app.use(express.static(path.join(__dirname, "core")));

// Manejar todas las rutas a index.html (opcional si usas Vue/React)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "core", "login.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
