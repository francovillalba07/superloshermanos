document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list');
  const errorMessage = document.getElementById('error-message');

  // Ruta del archivo CSV en tu repositorio de GitHub
  const csvFilePath = 'ofertas.csv';

  // Hacer una solicitud al servidor para obtener los datos
  fetch(csvFilePath)
    .then(response => response.text())
    .then(csvData => {
      const data = parseCSV(csvData);

      // Verificar si hay datos
      if (data && data.length > 0) {
        // Construir tarjetas para cada producto
        data.forEach(product => {
          // Construir la URL completa de la imagen
          const imageUrl = `/images/${product.codigo_interno}.png`;

          const cardHtml = `
            <div class="col-md-4">
              <div class="card product-card">
                <img src="${imageUrl}" class="card-img-top" alt="imagen de producto">
                <div class="card-body">
                  <h5 class="card-title">${product.detalle}</h5>
                  <p class="card-text">Precio Actual: ${product.precio_actual}</p>
                  <p class="card-text">Precio Anterior: ${product.precio_anterior}</p>
                  <p class="card-text">Vigencia Hasta: ${product.vig_hasta}</p>
                </div>
              </div>
            </div>
          `;

          // Agregar la tarjeta al #product-list
          productList.innerHTML += cardHtml;
        });
      } else {
        // Mostrar un mensaje si no hay datos
        errorMessage.innerHTML = 'No hay datos disponibles.';
        errorMessage.style.display = 'block';
      }
    })
    .catch(error => {
      // Manejar errores de la solicitud
      console.error('Error al obtener datos:', error);
      errorMessage.innerHTML = 'Error al cargar los datos.';
      errorMessage.style.display = 'block';
    });
});

// Función para convertir datos CSV a un arreglo de objetos
function parseCSV(csv) {
  const lines = csv.split('\n');

  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i].split(';');

    if (currentLine.length === 5) {
      const obj = {
        detalle: currentLine[0],
        precio_actual: parseFloat(currentLine[1]),
        precio_anterior: parseFloat(currentLine[2]),
        vig_hasta: currentLine[3],
        codigo_interno: parseInt(currentLine[4], 10)
      };

      result.push(obj);
    }
  }

  return result;
}
