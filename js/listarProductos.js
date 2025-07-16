document.addEventListener('DOMContentLoaded', () => {
  // Obtener id de la categoría de la URL
  const urlParts = window.location.pathname.split('/');
  const marcaId = urlParts[urlParts.length - 1];

  // Si estás accediendo como listadoProducto.html directamente sin /categoria/id,
  // tendrías que pasar el id como parámetro ?id=1 en la URL o definir otra lógica
  
  // Llamada a la API
  fetch(`/api/marca/${marcaId}`)
    .then(res => res.json())
    .then(data => {
      // Insertar título y descripción
      document.querySelector('.tituloCategoria').textContent = data.marca.nombre;
      document.querySelector('.textoCategoria').textContent = data.marca.descripcion;

      const grid = document.querySelector('.grid');
      grid.innerHTML = ''; // Limpiar productos default

      data.productos.forEach(prod => {
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
