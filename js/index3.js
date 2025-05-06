// Seleccionamos el enlace "Telefono de Contacto" y el div que contiene el teléfono
const telefonoLink = document.getElementById("telefono-link");
const telefono = document.getElementById("telefono-header");

// Añadimos un evento de clic al enlace
telefonoLink.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el enlace realice su acción por defecto
  
  // Alternamos la visibilidad del número de teléfono
  if (telefono.style.display === "none" || telefono.style.display === "") {
    telefono.style.display = "inline-block"; // Hacer visible el teléfono
  } else {
    telefono.style.display = "none"; // Ocultar el teléfono
  }
});
