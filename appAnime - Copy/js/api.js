let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today =  days[new Date().getDay()];
let fliterAnime;
let anime = `https://api.jikan.moe/v4/schedules/${today}`; // URL de la API
/* let hoy = new Date().getDay(); */
fetch(anime)
  .then(response => response.json())
  .then(data => {
    aniem(data.data)
  
  }) // Pasamos el array de animes a la función
 // Manejo de errores

function aniem(data) {
   
   let tarjetas = document.getElementsByClassName('tarjeta');
   Array.from(tarjetas).forEach((tarjeta, index) => {
      let imagen = document.createElement('img');
       let titulo = document.createElement('h3');
       let episodio = document.createElement('p');
       titulo.classList.add('titulos', 'tituloH3');
       episodio.classList.add('titulos', 'parrafo');
       imagen.src = data[index].images.jpg.image_url; // Imagen del anime
       imagen.alt = data[index].title; // Texto alternativo
       titulo.textContent = data[index].title; // Título del anime
       episodio.textContent = `Episodio ${data[index].episodes}`;
       // Agregar elementos a la tarjeta
       tarjeta.appendChild(imagen);
       tarjeta.appendChild(titulo);
       tarjeta.appendChild(episodio); 
   });
   ;
};
let hoy = new Date();
let season = ['winter', 'spring', 'summer', 'fall']; 
let mes = season[Math.floor((hoy.getMonth() + 1) / 3) % 4]; // calculos para obtener la temporada actual
let year = hoy.getFullYear();
let urlCardUltimos = `https://api.jikan.moe/v4/seasons/${year}/${mes}`; // URL de la API
fetch(urlCardUltimos)
  .then(response => response.json())
  .then(data => {
    cardUltimos(data.data)
    inicializarSlider('slider', 'botonI', 'botonD');
  }) // Pasamos el array de animes a la función
 // Manejo de errores
 function cardUltimos (data) {
    let cardUltimos =  document.querySelector('#slider');
    cardUltimos.innerHTML = '';
     data.forEach( data => { 
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
      cardUltimos.appendChild(card);
    });
   
  
   
 }
 let urlEmision = 'https://api.jikan.moe/v4/anime?status=airing'; // URL de la API
fetch(urlEmision)
  .then(response => response.json())
  .then(data => {
    emision(data.data)
    inicializarSlider('sliderD', 'Iboton', 'Dboton')
  }) // Pasamos el array de animes a la función
  function emision(data) {
    let cardEmision = document.querySelector('#sliderD');
    cardEmision.innerHTML = '';
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
      cardEmision.appendChild(card);
    });
    
  };

  