import { chronometer } from './contador.js';
import { validateForm } from './form.js';
import { initTheme } from './theme.js';
import { initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  validateForm();
  chronometer();
  initGallery();
});
