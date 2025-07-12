// Calculamos top debido a que bottom no funciona. Hacemos que la altura de la pantalla menos la de la altura de los elementos que queremos motrar
function ajustarTopDescripcion() {
    if (window.innerWidth > 640) {
        const desc = document.querySelector('.descripcionProducto');
        if (desc) desc.style.top = '';
        return;
    }
    const desc = document.querySelector('.descripcionProducto');
    const nombre = document.querySelector('.nombre-producto');
    const marca = document.querySelector('.marca-producto');

    if (!desc) return;

    const nombreHeight = nombre ? nombre.offsetHeight : 0;
    const marcaHeight = marca ? marca.offsetHeight : 0;

    const alturaTotal = nombreHeight + marcaHeight;

    const topValue = `calc(100vh - ${alturaTotal}px - 30px)`;

    desc.style.top = topValue;
}

// window.addEventListener('load', ajustarTopDescripcion);
// window.addEventListener('resize', ajustarTopDescripcion);

// function ajustarTopDescripcion() {
//   const desc = document.querySelector('.descripcionProducto');
//   const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
//   const descHeight = desc.offsetHeight;
//   const topValue = `calc(var(--header-height) + 100vh - ${descHeight}px)`;
//   desc.style.top = topValue;
// }

// window.addEventListener('load', ajustarTopDescripcion);
// window.addEventListener('resize', ajustarTopDescripcion);



// Setea el alto de productoInfo = alto de imgs-producto + descripcionProductoWrapper
function ajustarAlturaProductoInfo() {
    if (window.innerWidth > 640) {
        const productoInfo = document.querySelector('.productoInfo');
        if (productoInfo) productoInfo.style.height = '';
        return;
    }

    const productoInfo = document.querySelector('.productoInfo');
    const imgsProducto = document.querySelector('.imgs-producto');
    const descripcionProducto = document.querySelector('.descripcionProducto');

    if (!productoInfo || !imgsProducto || !descripcionProducto) return;

    const imgsHeight = imgsProducto.offsetHeight;
    const descHeight = descripcionProducto.offsetHeight;

    // 30 le agruegue para que tenga como un espaciado
    const totalHeight = imgsHeight + descHeight + 30;
    console.log(totalHeight);
    

    productoInfo.style.height = totalHeight + 'px';
}

// Ejecutar al cargar y al redimensionar ventana
// window.addEventListener('load', ajustarAlturaProductoInfo);
// window.addEventListener('resize', ajustarAlturaProductoInfo);

// Ejecuta al cargar y al redimensionar ventana
window.addEventListener('load', () => {
  ajustarTopDescripcion();
  ajustarAlturaProductoInfo();
});
window.addEventListener('resize', () => {
  ajustarTopDescripcion();
  ajustarAlturaProductoInfo();
});