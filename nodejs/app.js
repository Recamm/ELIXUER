const express = require('express');
const cors = require('cors');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = 3000;

// Modulos
const contactRoutes = require('./module/contacto');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para leer formularios
app.use(express.static(__dirname)); // Servir archivos estáticos (HTML, CSS, JS)

// Servir archivos estáticos ubicados FUERA de la carpeta "nodejs"
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/img', express.static(path.join(__dirname, '../img')));

// Modulos
app.use('/', contactRoutes);

// Cargar paginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/marca/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'listadoProducto.html'));
});

app.get('/sobrenosotros', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'aboutUs.html'));
});

app.get('/descuentos', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'listadoProducto.html'));
});

app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'listadoProducto.html'));
});

app.get('/producto/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'producto.html'));
});

// API
app.get('/api/marca/:id', (req, res) => {
  const marcaId = req.params.id;

  const marcaQuery = 'SELECT * FROM marca WHERE id = ?';
  db.query(marcaQuery, [marcaId], (err, marcaResult) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los productos de la marca' });
    }

    const productosQuery = `
      SELECT p.id, p.nombre, p.descripcion, p.precio, m.nombre AS marca
      FROM producto p
      JOIN oferta o ON p.idOferta = o.id
      JOIN marca m ON p.idMarca = m.id
      WHERE p.idMarca = ?
    `;
    db.query(productosQuery, [marcaId], (err, productosResult) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener los productos de las marcas' });
      }

      res.json({
        marca: marcaResult[0],
        productos: productosResult
      });
    });
  });
});

app.get('/api/producto/:id', (req, res) => {
  const id = req.params.id;

  const productoQuery = `
    SELECT p.nombre AS nombreProducto, p.descripcion, p.especificaciones, p.precio, 
           m.nombre AS marca, o.descuento
    FROM producto p
    JOIN marca m ON p.idMarca = m.id
    JOIN oferta o ON p.idOferta = o.id
    WHERE p.id = ?
  `;

  const acordesQuery = `
    SELECT a.nombre
    FROM productoAcordes pa
    JOIN acorde a ON pa.idAcorde = a.id
    WHERE pa.idProducto = ?
  `;

  db.query(productoQuery, [id], (err, productoResult) => {
    if (err) return res.status(500).json({ error: err });

    if (productoResult.length === 0) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    const producto = productoResult[0];

    db.query(acordesQuery, [id], (err, acordesResult) => {
      if (err) return res.status(500).json({ error: err });

      producto.acordes = acordesResult.map(a => a.nombre);

      res.json(producto);
    });
  });
});

app.get('/api/marcas', (req, res) => {
  const marcasQuery = `
    SELECT * FROM marca
  `;
  db.query(marcasQuery, (err, marcasResult) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las marcas' });
    }

    res.json({
      marcas: marcasResult
    });
  });
});


app.get('/api/productos', (req, res) => {
  const productosQuery = `
    SELECT * FROM producto
  `;
  db.query(productosQuery, (err, productosResult) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los productos' });
    }

    res.json({
      productos: productosResult
    });
  });
});

app.get('/api/descuentos', (req, res) => {
  const productosQuery = `
	  SELECT * FROM producto
    JOIN oferta on producto.idOferta = oferta.id
  `;
  db.query(productosQuery, (err, productosResult) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los productos' });
    }

    res.json({
      productos: productosResult
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});