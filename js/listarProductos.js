document.addEventListener('DOMContentLoaded', () => {
    // Obtener el idCategoria de la URL (por ejemplo: listadoProducto.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaId = urlParams.get('id');
  
    if (!categoriaId) return;
  
    fetch(`/categoria/${categoriaId}`)
      .then(res => res.json())
      .then(data => {
        if (!data || !data.categoria) return;
  
        // Actualizar título y descripción
        document.querySelector('.tituloCategoria').textContent = data.categoria.nombre;
        document.querySelector('.textoCategoria').textContent = data.categoria.descripcion;
  
        const grid = document.querySelector('.grid');
        grid.innerHTML = ''; // Limpiar productos actuales
  
        data.productos.forEach(prod => {
          const itemHTML = `
            <div class="itemGrid">
              <a href="producto.html?id=${prod.id}" class="direccionamientoProducto">
                <div class="img">
                  <img class="imgDefault" src="img/imgProductos/default1.jpg" alt="">
                  <img class="imgHover" src="img/imgProductos/default2.jpg" alt="">
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
            </div>
          `;
          grid.insertAdjacentHTML('beforeend', itemHTML);
        });
      });
  });
  