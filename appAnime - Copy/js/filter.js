/* let derecha = document.getElementById('derecha');
let izquierda = document.getElementById('izquierda'); 
let number = document.getElementById('number');
let numero = 1; 

let cache = {}; // Almacena los datos en caché
// Función para cargar los datos de la página
let filtroAnimes = [];
function cargarPagina(pagina) {
    
    if (cache[pagina]) {
        animePlus(cache[pagina]); // Usar datos en caché
    } else {
        let urlanimeP =  `https://api.jikan.moe/v4/anime?page=${pagina}`;
        fetch(urlanimeP)
            .then(response => response.json())
            .then(data => {
                cache[pagina] = data.data; // Guardar en caché
                animePlus(data.data); // Mostrar los datos
            })
    }
}
function animePlus(data) {
    let filterImg = document.getElementById('filterImg');
    filterImg.innerHTML = ""; // Limpiar contenido antes de agregar nuevos elementos

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
        filterImg.appendChild(card);
    })
}
// Evento para aplicar filtros
 document.getElementById('botonFiltro').addEventListener('click', (e) => {
    e.preventDefault();
    let genero = document.getElementById('genero').value;
    let tipo = document.getElementById('tipo').value;
    let estado = document.getElementById('estado').value;

    if (genero) {
        urlanimeP +=`genres=${genero}`
        console.log(genero);
    }
     if (tipo) {
        urlanimeP += `type=${tipo}`
    }
    if (estado) {
        urlanimeP += `status=${estado}`
    } 

    
    numero = 1; // Reiniciar a la primera página
    
    number.textContent = numero;
    cargarPagina(numero)
    
}); 

// Función para mostrar los datos en la página


// Evento para el botón de la derecha (página siguiente)
 derecha.addEventListener('click', () => {
    if (numero < 25) {
        numero++;
        number.textContent = numero;
        cargarPagina(numero);
    }
}); 

// Evento para el botón de la izquierda (página anterior)
izquierda.addEventListener('click', () => {
    if (numero > 1) {
        numero--;
        number.textContent = numero;
        cargarPagina(numero);
    }
}); 

// Cargar la primera página al iniciar

cargarPagina(numero) */

let derecha = document.getElementById('derecha');
let izquierda = document.getElementById('izquierda'); 
let number = document.getElementById('number');
let numero = 1; 

let cache = {}; // Almacena los datos en caché
let urlanimeP = 'https://api.jikan.moe/v4/anime'; // URL base de la API

// Función para cargar los datos de la página
function cargarPagina(pagina) {
    let url = `${urlanimeP}?page=${pagina}`;

    // Aplicar filtros si existen
    let genero = document.getElementById('genero').value;
    let tipo = document.getElementById('tipo').value;
    let estado = document.getElementById('estado').value;

    if (genero) {
        url += `&genres=${genero}`;
    }
    if (tipo) {
        url += `&type=${tipo}`;
    }
    if (estado) {
        url += `&status=${estado}`;
    }

    if (cache[url]) {
        animePlus(cache[url]); // Usar datos en caché
    } else {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                cache[url] = data.data; // Guardar en caché
                animePlus(data.data); // Mostrar los datos
            })
            .catch(error => console.error('Error:', error));
    }
}

function animePlus(data) {
    let filterImg = document.getElementById('filterImg');
    filterImg.innerHTML = ""; // Limpiar contenido antes de agregar nuevos elementos

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
        filterImg.appendChild(card);
    });
}

// Evento para aplicar filtros
document.getElementById('botonFiltro').addEventListener('click', (e) => {
    e.preventDefault();
    numero = 1; // Reiniciar a la primera página
    number.textContent = numero;
    cargarPagina(numero);
}); 

// Evento para el botón de la derecha (página siguiente)
derecha.addEventListener('click', () => {
    if (numero < 25) {
        numero++;
        number.textContent = numero;
        cargarPagina(numero);
    }
}); 

// Evento para el botón de la izquierda (página anterior)
izquierda.addEventListener('click', () => {
    if (numero > 1) {
        numero--;
        number.textContent = numero;
        cargarPagina(numero);
    }
}); 

// Cargar la primera página al iniciar
cargarPagina(numero);