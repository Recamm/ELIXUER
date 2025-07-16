document.addEventListener('DOMContentLoaded', () => {
  // Obtener id de la categoría de la URL
  const urlParts = window.location.pathname.split('/');
  const marcaId = urlParts[urlParts.length - 1];

  // Si estás accediendo como listadoProducto.html directamente sin /categoria/id,
  // tendrías que pasar el id como parámetro ?id=1 en la URL o definir otra lógica
  
  // Llamada a la API
  fetch(`/api/marcas`)
    .then(res => res.json())
    .then(data => {
      const grid = document.querySelector('.contenido');
      grid.innerHTML = ''; // Limpiar productos default

      data.marcas.forEach(marca => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
          <div class="item">
            <a href="/marca/${marca.id}" class="itemLink">
              <div class="centrarInIMG">
                <p>${marca.nombre}</p>
              </div>
              <img src="/img/marcas/${marca.id}.png" alt="">
            </a>
          </div>
        `;
        grid.appendChild(item);
      });
    })
    .catch(err => console.error('Error al cargar las marcas', err));
});
