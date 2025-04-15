export const validateForm = () => {
  const popup = document.getElementById('confirmationPopup');
  const closePopupBtn = document.getElementById('closePopup');

  closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (apellido && nombre && email && telefono) {
      if (!isValidEmail(email)) {
        alert('El correo electrónico no es válido');
        return;
      }
      if (!isValidPhone(telefono)) {
        alert('El número de teléfono no es válido');
        return;
      }
      popup.classList.add('active');
      this.reset();
    } else {
      alert('Por favor complete todos los campos');
    }
  });
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};
