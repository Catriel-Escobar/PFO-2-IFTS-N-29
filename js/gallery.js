// Función para manejar la galería de imágenes
function initGallery() {
  const galleryContainer = document.querySelector('.peliculas-container');
  const movies = Array.from(document.querySelectorAll('.pelicula'));
  let currentIndex = 0;

  // Crear elementos de navegación
  const navigationContainer = document.createElement('div');
  navigationContainer.className = 'gallery-navigation';

  const prevButton = document.createElement('button');
  prevButton.innerHTML = '&#8592;'; // Flecha izquierda
  prevButton.className = 'gallery-nav-button prev-button';

  const nextButton = document.createElement('button');
  nextButton.innerHTML = '&#8594;'; // Flecha derecha
  nextButton.className = 'gallery-nav-button next-button';

  const indicators = document.createElement('div');
  indicators.className = 'gallery-indicators';

  // Crear indicadores de posición
  movies.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => showMovie(index));
    indicators.appendChild(dot);
  });

  // Añadir elementos al DOM
  navigationContainer.appendChild(prevButton);
  navigationContainer.appendChild(indicators);
  navigationContainer.appendChild(nextButton);
  galleryContainer.parentNode.appendChild(navigationContainer);

  // Configurar visualización inicial
  updateGalleryDisplay();

  // Manejadores de eventos para los botones
  prevButton.addEventListener('click', showPreviousMovie);
  nextButton.addEventListener('click', showNextMovie);

  // Añadir soporte para gestos táctiles
  let touchStartX = 0;
  galleryContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  galleryContainer.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      // Umbral mínimo para considerar como swipe
      if (diff > 0) {
        showNextMovie();
      } else {
        showPreviousMovie();
      }
    }
  });

  function showMovie(index) {
    movies.forEach((movie, i) => {
      movie.style.display = i === index ? 'block' : 'none';
      movie.style.opacity = i === index ? '1' : '0';
    });

    // Actualizar indicadores
    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentIndex = index;
  }

  function showNextMovie() {
    const nextIndex = (currentIndex + 1) % movies.length;
    showMovie(nextIndex);
  }

  function showPreviousMovie() {
    const prevIndex = (currentIndex - 1 + movies.length) % movies.length;
    showMovie(prevIndex);
  }

  function updateGalleryDisplay() {
    movies.forEach((movie, index) => {
      movie.style.display = index === currentIndex ? 'block' : 'none';
      movie.style.opacity = index === currentIndex ? '1' : '0';
      movie.style.transition = 'opacity 0.3s ease-in-out';
    });
  }
}

export { initGallery };
