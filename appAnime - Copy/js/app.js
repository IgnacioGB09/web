/* let slider = document.getElementById('slider');
let sliderD = document.getElementById('sliderD');
let izquierda = document.getElementById('botonI');
let derecha = document.getElementById('botonD');
let sliderItems = slider.children; // Obtenemos los elementos hijos del carrusel
let sliderCount = sliderItems.length; // Contamos las tarjetas
let sliderIndex = 0; // Índice actual del carrusel
let botonI = document.getElementById('Iboton');
let botonD = document.getElementById('Dboton');

izquierda.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount; // Ajustamos el índice al moverse a la izquierda
    let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
    slider.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
});

derecha.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % sliderCount; // Ajustamos el índice al moverse a la derecha
    let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
    slider.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
});

botonI.addEventListener('click', () => {
    sliderIndex = (sliderIndex - 1 + sliderCount) % sliderCount; // Ajustamos el índice al moverse a la izquierda
    let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
    sliderD.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
});

botonD.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % sliderCount; // Ajustamos el índice al moverse a la derecha
    let porcentaje = sliderIndex * -12.6; // Calculamos el porcentaje de desplazamiento
    sliderD.style.transform = `translateX(${porcentaje}%)`; // Movemos el carrusel
});
 const user = JSON.parse(localStorage.getItem('login_success')) || false */

 function inicializarSlider(sliderId, botonIzqId, botonDerId) {
    let slider = document.getElementById(sliderId);
    let izquierda = document.getElementById(botonIzqId);
    let derecha = document.getElementById(botonDerId);
    let sliderItems = slider.children;
    let sliderCount = sliderItems.length;
    let sliderIndex = 0;

    if (sliderCount === 0) return; // Si no hay elementos, no hacemos nada

    let cardWidth = sliderItems[0].offsetWidth; // Ancho de la tarjeta + margen
    let maxScroll = (sliderCount - 1) * cardWidth; // Máximo desplazamiento

    izquierda.addEventListener('click', () => {
        sliderIndex = Math.max(sliderIndex - 1, 0); // No bajar de 0
        let desplazamiento = sliderIndex * -cardWidth;
        slider.style.transform = `translateX(${desplazamiento}px)`;
    });

    derecha.addEventListener('click', () => {
        sliderIndex = Math.min(sliderIndex + 1, sliderCount - 1); // No superar el máximo
        let desplazamiento = sliderIndex * -cardWidth;
        slider.style.transform = `translateX(${desplazamiento}px)`;
    });
}



 