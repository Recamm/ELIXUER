// Obtener la categoría desde la URL (ej: /fragancias)
const path = window.location.pathname;
const categoria = path.split("/").pop(); // obtiene "fragancias"

fetch(`/api/productos/${categoria}`)
.then(response => response.json())
.then(data => {
    const grid = document.querySelector(".grid");
    grid.innerHTML = ""; // limpia lo anterior

    data.forEach(producto => {
    const item = document.createElement("div");
    item.className = "itemGrid";

    item.innerHTML = `
        <a href="producto.html" class="direccionamientoProducto">
        <div class="img">
            <img class="imgDefault" src="${producto.imgURL}" alt="">
            <img class="imgHover" src="${producto.imgURL}" alt="">
        </div>
        <div class="bot">
            <div class="descripcion">
            <h5 class="nombreProducto">${producto.nombre}</h5>
            <p class="marcaProducto">${producto.descripcion}</p>
            <p class="precioProducto">$100000</p>
            </div>
            <a href="#" class="comprarBoton lineaAnimacionInversa">Comprar</a>
        </div>
        </a>
    `;
    grid.appendChild(item);
    });
})
.catch(error => console.error('Error al obtener productos:', error));