// routes/contact.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/contacto', (req, res) => {
  const { nombre, apellido, email, mensaje } = req.body;
  const fecha_de_creacion = new Date();

  const sql = 'INSERT INTO contactUs (nombre, apellido, email, mensaje, fecha_de_creacion) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, email, mensaje, fecha_de_creacion], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al enviar el formulario');
      return;
    }
    console.log('Mensaje guardado con id:', result.insertId);
    res.send('Formulario enviado correctamente.');
    // res.sendFile(path.join(__dirname, '..', 'aboutUs.html'));
  });
});

module.exports = router;