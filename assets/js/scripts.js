
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


// Slider

document.addEventListener("DOMContentLoaded", function () {
    const sliderNavLinks = document.querySelectorAll(".slider-nav a");
    const slider = document.querySelector(".slider");

    sliderNavLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            slider.scrollLeft = index * slider.offsetWidth;
        });
    });
});


// Toggle menu
// document.addEventListener("DOMContentLoaded", function() {

//     const nav = document.querySelector("#nav");
//     const abrir = document.querySelector("#abrir");
//     const cerrar = document.querySelector("#cerrar");

//     abrir.addEventListener("click", () => {
//         nav.classList.add("visible");
//     });

//     cerrar.addEventListener("click", () => {
//         nav.classList.remove("visible");
//     });
// });


