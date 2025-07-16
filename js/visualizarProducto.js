document.addEventListener('DOMContentLoaded', () => {
  const urlParts = window.location.pathname.split('/');
  const idProducto = urlParts[urlParts.length - 1];

  fetch(`/api/producto/${idProducto}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.marca);
        
      document.querySelector('.nombre-producto').textContent = data.nombreProducto;
      document.querySelector('.marca-producto').textContent = data.marca;
      document.querySelector('.descripcion-producto').textContent = data.descripcion;
      document.querySelector('.descripcion-detalles').textContent = data.especificaciones;

      const precio = data.precio;
      const descuento = data.descuento;

      const precioConDescuento = descuento > 0
        ? precio - (precio * descuento / 100)
        : precio;

      document.querySelector('.precio').textContent = `$${precioConDescuento}`;

      const descuentoElement = document.querySelector('.descuento');
      if (descuento > 0) {
        descuentoElement.innerHTML = `<strike>$${precio}</strike> (${descuento}% OFF)`;
        descuentoElement.style.display = 'block';
      } else {
        descuentoElement.style.display = 'none';
      }

      const acordesDiv = document.querySelector('.acordesStats');
      acordesDiv.innerHTML = ''; // limpia

      data.acordes.forEach((acorde, index) => {
        const porcentaje = 100 - index * 10; // ejemplo de ancho decreciente
        const p = document.createElement('p');
        p.textContent = acorde;
        p.style.width = porcentaje + '%';
        acordesDiv.appendChild(p);
      });

      // 🔥 Mostrar imágenes de img/productos/{id_producto}/ numeradas
      const imgsContainer = document.querySelector('.imgs-producto');
      imgsContainer.innerHTML = ''; // limpia imágenes actuales

      let imgIndex = 1;

      const checkImages = () => {
        const imgPath = `/img/productos/${idProducto}/${imgIndex}.jpg`;
        const img = new Image();

        img.onload = () => {
          imgsContainer.appendChild(img);
          imgIndex++;
          checkImages(); // verifica la siguiente
        };

        img.onerror = () => {
          // si no existe más, termina
        };

        img.src = imgPath;
        img.alt = data.nombreProducto;
      };

      checkImages(); // inicia la carga de imágenes
    })
    .catch(err => console.error(err));
});
