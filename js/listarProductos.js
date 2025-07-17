document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const urlParts = path.split('/').filter(Boolean); // elimina strings vacíos
  let apiUrl = '';

  // Detectar qué endpoint usar
  if (urlParts.includes('marca')) {
    // Si es /api/marca/:idMarca
    const marcaId = urlParts[urlParts.length - 1];
    apiUrl = `/api/marca/${marcaId}`;
  } else if (urlParts.includes('productos')) {
    // Si es /api/productos o cualquier otro listado
    apiUrl = `/api/productos`;
  } else if (urlParts.includes('descuentos')) {
    apiUrl = `/api/descuentos`
  }

  console.log(apiUrl);
  
  // Llamada a la API correspondiente
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const grid = document.querySelector('.grid');
      grid.innerHTML = '';

      let productos = [];
      let titulo = document.querySelector('.tituloCategoria');
      let texto = document.querySelector('.textoCategoria');

      if (data.marca) {
        // Caso /api/marca/:idMarca → trae marca + productos
        titulo.textContent = data.marca.nombre;
        texto.textContent = data.marca.descripcion;
        productos = data.productos;
      } else if (apiUrl == `/api/descuentos`) {
        titulo.textContent = "Promociones";
        texto.textContent = "Explora nuestras ofertas.";
        productos = data.productos || data; // depende cómo devuelvas los datos
      } else {
        // Caso /api/productos → solo lista todos
        titulo.textContent = "Todos los productos";
        texto.textContent = "Explora nuestro catálogo completo.";
        productos = data.productos || data; // depende cómo devuelvas los datos
      }

      productos.forEach(prod => {
        const item = document.createElement('div');
        item.className = 'itemGrid';
        item.innerHTML = `
          <a href="/producto/${prod.id}" class="direccionamientoProducto">
            <div class="img">                    
              <img class="imgDefault" src="/img/productos/${prod.id}/1.jpg" alt="">
              <img class="imgHover" src="/img/productos/${prod.id}/2.jpg" alt="">
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



// const path = require("path");

// function cargarProductos(apiUrl, tipo) {
//   fetch(apiUrl)
//     .then(res => res.json())
//     .then(data => {
//       // Insertar título y descripción según el tipo de consulta
//       if (tipo === 'marca') {
//         document.querySelector('.tituloCategoria').textContent = data.marca.nombre;
//         document.querySelector('.textoCategoria').textContent = data.marca.descripcion;
//       } else if (tipo === 'categoria') {
//         document.querySelector('.tituloCategoria').textContent = data.categoria.nombre;
//         document.querySelector('.textoCategoria').textContent = data.categoria.descripcion;
//       } else {
//         // Para /api/productos que no tiene titulo general
//         document.querySelector('.tituloCategoria').textContent = 'Todos los productos';
//         document.querySelector('.textoCategoria').textContent = '';
//       }

//       const grid = document.querySelector('.grid');
//       grid.innerHTML = ''; // Limpiar productos anteriores

//       data.productos.forEach(prod => {
//         const item = document.createElement('div');
//         item.className = 'itemGrid';
//         item.innerHTML = `
//           <a href="/producto/${prod.id}" class="direccionamientoProducto">
//             <div class="img">                    
//               <img class="imgDefault" src="/img/productos/${prod.id}/1.jpg" alt="">
//               <img class="imgHover" src="/img/productos/${prod.id}/2.jpg" alt="">
//             </div>
//             <div class="bot">
//               <div class="descripcion">
//                 <h5 class="nombreProducto">${prod.nombre}</h5>
//                 <p class="marcaProducto">${prod.marca}</p>
//                 <p class="precioProducto">$${prod.precio}</p>
//               </div>
//               <a href="" class="comprarBoton lineaAnimacionInversa">Comprar</a>
//             </div>
//           </a>
//         `;
//         grid.appendChild(item);
//       });
//     })
//     .catch(err => console.error('Error al cargar productos', err));
// }

// // Ejemplo de uso:

// // Para marca
// const marcaId = 1;
// cargarProductos(`/api/marca/${marcaId}`, 'marca');

// // Para productos generales
// cargarProductos('/api/productos', 'productos');

// const pathParts = window.location.pathname.split('/');
// marcaId = pathParts[pathParts.length - 1];

// console.log(pathParts);
