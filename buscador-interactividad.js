//JavaScript para manejar el comportamiento -->
  // Obtener referencias a los elementos
  const searchBox = document.getElementById('searchBox');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const tableRows = document.querySelectorAll('#table tbody tr');
  const noResults = document.getElementById('no-results');
  const resultsBox = document.getElementById('resultsBox');

  let hovering = false; // Variable para detectar si el cursor está cerca

  // Al hacer clic en la lupa
  searchBtn.addEventListener('click', () => {
    searchBox.classList.add('active'); // Expandir buscador
    searchInput.focus(); // Poner el cursor en el input
  });

  // Al escribir en el campo
  searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase(); // Texto en minúsculas sin espacios
    filterTable(query); // Filtra los resultados

    // Mostrar u ocultar los resultados dependiendo del texto
    resultsBox.style.display = query.length > 0 ? 'block' : 'none';
  });

  // Filtrar resultados
  function filterTable(query) {
    let found = false;
    tableRows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const match = text.includes(query); // Ver si el texto coincide
      row.style.display = match ? '' : 'none';
      if (match) found = true;
    });
    // Mostrar mensaje si no se encontró nada
    noResults.style.display = found ? 'none' : 'block';
  }

  // Detectar si el mouse entra al área del buscador o resultados
  [searchBox, resultsBox].forEach(el => {
    el.addEventListener('mouseenter', () => {
      hovering = true;
    });
    el.addEventListener('mouseleave', () => {
      hovering = false;
      setTimeout(() => {
        if (!hovering) {
          searchBox.classList.remove('active'); // Cerrar buscador
          searchInput.value = ''; // Limpiar texto
          filterTable('');
          resultsBox.style.display = 'none'; // Ocultar resultados
        }
      }, 300); // Esperar un poco antes de cerrar
    });
  });
