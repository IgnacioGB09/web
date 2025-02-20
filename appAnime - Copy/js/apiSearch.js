let inputanime = document.querySelector('#animeSearch');
let animeCache = {};

function cargarAnime(anime) {
    if (animeCache[anime]) {
        filtroAnime(animeCache[anime]);
    } else {
        let animeUrl = `https://api.jikan.moe/v4/anime?q=${anime}`;
        fetch(animeUrl)
        .then(response => response.json())
        .then(data => {
            animeCache[anime] = data.data; // Almacenar datos en caché
            filtroAnime(data.data); // Mostrar los datos
        });
    }
}

function filtroAnime(data) {
    let filtroCont = document.getElementById('filtroCont'); // Contenedor en el HTML
    filtroCont.innerHTML = ""; // Limpiar contenido antes de agregar nuevos elementos
    data.forEach(data => {
        let card = document.createElement('div');
        card.classList.add('tarjetaDos', 'cards');
        let cardTitulos = document.createElement('div');
        cardTitulos.classList.add('conenedorTitulo', 'cardTitulo');
        let imagen = document.createElement('img');
        imagen.src = data.images.jpg.image_url;
        imagen.alt = data.title;
        let titulos = document.createElement('h3');
        titulos.classList.add('titulos', 'tituloH3');
        titulos.textContent = data.title;
        cardTitulos.appendChild(titulos);
        card.appendChild(imagen);
        card.appendChild(cardTitulos);
        filtroCont.appendChild(card);
    });
}

inputanime.addEventListener('input', (e) => {
    let input = e.target.value;
    if (input) {
        cargarAnime(input); // Llama a cargarAnime con lo que el usuario escribe
    } 
});

// Cargar algunos animes al inicio
window.addEventListener('load', () => {
    cargarAnime("naruto"); // Puedes usar cualquier anime popular aquí
});
