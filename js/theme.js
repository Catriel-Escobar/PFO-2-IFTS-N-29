// Función para alternar entre temas claro y oscuro
function toggleTheme() {
  const root = document.documentElement;
  // simplemente alterna la clase dark-theme en el root.
  const isDark = root.classList.toggle('dark-theme');
  console.log(isDark);
  const themeSwitch = document.querySelector('.theme-switch');
  themeSwitch.innerHTML = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  const root = document.documentElement;
  const themeSwitch = document.createElement('button');
  themeSwitch.className = 'theme-switch';
  document.body.appendChild(themeSwitch);
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  if (shouldBeDark) {
    root.classList.add('dark-theme');
    themeSwitch.innerHTML = '☀️';
  } else {
    themeSwitch.innerHTML = '🌙';
  }

  // Agregar evento click al botón
  themeSwitch.addEventListener('click', toggleTheme);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initTheme);
