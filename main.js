document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list');
  const errorMessage = document.getElementById('error-message');

  // Datos de productos incorporados directamente en el archivo JS
  const data = [
    {
      detalle: 'ASADO COSTILLA OFERTA',
      precio_actual: 3390.00,
      precio_anterior: 0.00,
      vig_hasta: 'MIÉRCOLES 6 DE DICIEMBRE',
      codigo_interno: 535
    },
    {
      detalle: 'DURAZNOS NAT, 820G, ABETO',
      precio_actual: 1164.90,
      precio_anterior: 1533.18,
      vig_hasta: 'DOMINGO 31 DE DICIEMBRE',
      codigo_interno: 303
    },
    {
      detalle: 'FALDA',
      precio_actual: 1990.00,
      precio_anterior: 3290.00,
      vig_hasta: 'JUEVES 7 DE DICIEMBRE',
      codigo_interno: 189
    },
    {
      detalle: 'MAYONESA HEINZ 850G, LIGHT',
      precio_actual: 1199.00,
      precio_anterior: 3121.78,
      vig_hasta: 'DOMINGO 10 DE DICIEMBRE',
      codigo_interno: 655
    },
    {
      detalle: 'MAYONESA HEINZ 850G, ORIGINAL',
      precio_actual: 1099.00,
      precio_anterior: 2830.92,
      vig_hasta: 'JUEVES 14 DE DICIEMBRE',
      codigo_interno: 656
    },
    {
      detalle: 'SIDRA LA FARRUCA 710CC, S/ALCOHOL',
      precio_actual: 869.90,
      precio_anterior: 1051.16,
      vig_hasta: 'DOMINGO 31 DE DICIEMBRE',
      codigo_interno: 20279
    },
    {
      detalle: 'VINO VIÑAS BALBO 1125CC, CLASICO TINTO',
      precio_actual: 1199.00,
      precio_anterior: 1398.93,
      vig_hasta: 'DOMINGO 31 DE DICIEMBRE',
      codigo_interno: 18295
    },
    {
      detalle: 'YERBA 1KG PLAYADITO',
      precio_actual: 2169.00,
      precio_anterior: 2784.57,
      vig_hasta: 'DOMINGO 31 DE DICIEMBRE',
      codigo_interno: 126
    },
    {
      detalle: 'YERBA 500G PLAYADITO',
      precio_actual: 1159.00,
      precio_anterior: 1488.94,
      vig_hasta: 'DOMINGO 31 DE DICIEMBRE',
      codigo_interno: 127
    },
    // Puedes agregar más productos según sea necesario
  ];

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
});