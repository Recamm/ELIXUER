document.addEventListener('DOMContentLoaded', () => {
  // Obtener id de la categoría de la URL
  const urlParts = window.location.pathname.split('/');
  const categoriaId = urlParts[urlParts.length - 1];

  // Si estás accediendo como listadoProducto.html directamente sin /categoria/id,
  // tendrías que pasar el id como parámetro ?id=1 en la URL o definir otra lógica

  // Llamada a la API
  fetch(`/api/categoria/${categoriaId}`)
    .then(res => res.json())
    .then(data => {
      // Insertar título y descripción
      document.querySelector('.tituloCategoria').textContent = data.categoria.nombre;
      document.querySelector('.textoCategoria').textContent = data.categoria.descripcion;

      const grid = document.querySelector('.grid');
      grid.innerHTML = ''; // Limpiar productos default

      data.productos.forEach(prod => {
        const item = document.createElement('div');
        item.className = 'itemGrid';
        item.innerHTML = `
          <a href="producto.html" class="direccionamientoProducto">
            <div class="img">                    
              <img class="imgDefault" src="img/productos/${prod.id}/1.jpg" alt="">
              <img class="imgHover" src="img/productos/${prod.id}/2.jpg" alt="">
            </div>
            <div class="bot">
              <div class="descripcion">
                <h5 class="nombreProducto">${prod.nombre}</h5>
                <p class="marcaProducto">${prod.marca}</p>
                <p class="precioProducto">$${prod.precio}</p>
              </div>
              <a href="" class="comprarBoton lineaAnimacionInversa">Comprar</a>
            </div>
          </a>
        `;
        grid.appendChild(item);
      });
    })
    .catch(err => console.error('Error al cargar productos', err));
});
