document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario-contacto');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío hasta que se valide

    // Limpiar errores previos
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-mensaje').textContent = '';

    let valid = true;

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar nombre
    if (nombre === '') {
      document.getElementById('error-nombre').textContent = 'Por favor, ingresa tu nombre.';
      valid = false;
    }

    // Validar correo
    if (email === '') {
      document.getElementById('error-email').textContent = 'Por favor, ingresa tu correo.';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('error-email').textContent = 'El correo no es válido.';
      valid = false;
    }

    // Validar mensaje
    if (mensaje === '') {
      document.getElementById('error-mensaje').textContent = 'Por favor, escribe un mensaje.';
      valid = false;
    }

    if (valid) {
      // Aquí puedes enviar el formulario o mostrar un mensaje de éxito
      alert('Formulario enviado correctamente');
      form.submit(); // Solo si todo es válido
    }
  });
});
