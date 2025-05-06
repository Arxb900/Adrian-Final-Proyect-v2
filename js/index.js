function crearSlideshow(selector) {
  let slides = document.querySelectorAll(`${selector} .slide`);
  let indiceActual = 0;

  function mostrarSlide(indice) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[indice].classList.add("active");
  }

  function cambiarSlide() {
    indiceActual = (indiceActual + 1) % slides.length;
    mostrarSlide(indiceActual);
  }

  mostrarSlide(indiceActual);
  setInterval(cambiarSlide, 3000);
}

// Crear slideshows por separado
crearSlideshow(".slider1");
crearSlideshow(".slider2");
crearSlideshow(".slider3");
