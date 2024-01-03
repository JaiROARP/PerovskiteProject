
//Cambiar la pagina a Español
function indexESP() {
    window.location.href = 'index.html';
}


// Cambiar la pagina a Ingles
function indexENG() {
    window.location.href = 'indexENG.html';
}

// Prevenir que se pueda hacer clic derecho en la pagina
function noClicDerecho() {

    return false;
}

// No permite el arrastre de las imagenes fuera del navegador
function desactivarArrastre(event) {
    event.preventDefault();
}




let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = document.querySelector('.slider img').clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.slider img').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.slider img').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto-play the slider (optional)
// setInterval(() => {
// nextSlide();
// }, 3000);

