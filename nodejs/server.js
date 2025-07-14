// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Servir archivos estáticos (HTML, CSS, JS)

// Servir archivos estáticos ubicados FUERA de la carpeta "nodejs"
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/img', express.static(path.join(__dirname, '../img')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Nueva ruta para obtener categoría + productos por idCategoria
app.get('/categoria/:id', (req, res) => {
  const categoriaId = req.params.id;

  // 1. Traer nombre y descripción de la categoría
  const categoriaQuery = 'SELECT * FROM categoria WHERE id = ?';
  db.query(categoriaQuery, [categoriaId], (err, categoriaResult) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener categoría' });
    }

    // 2. Traer productos de esa categoría
    const productosQuery = `
      SELECT p.id, p.nombre, p.descripcion, o.precio, m.nombre AS marca
      FROM producto p
      JOIN oferta o ON p.idOferta = o.id
      JOIN marca m ON p.idMarca = m.id
      WHERE p.idCategoria = ?
    `;
    db.query(productosQuery, [categoriaId], (err, productosResult) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener productos' });
      }

      res.json({
        categoria: categoriaResult[0],
        productos: productosResult
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});