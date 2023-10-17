const express = require('express');
const db = require('./dbconfig'); // Importa la configuración de la base de datos

const app = express();

// Ruta de ejemplo para obtener datos desde la base de datos
app.get('/api/ejemplo', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM tabla_ejemplo');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al consultar la base de datos' });
  }
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`API escuchando en el puerto ${puerto}`);
});
