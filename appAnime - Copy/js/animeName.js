
document.addEventListener('click', (event) => {
    let tarjeta = event.target.closest('.tarjetaDos'); // Busca el elemento con la clase tarjetaDos más cercano
   
        let titulo = tarjeta.querySelector('.tituloH3'); // Busca el título dentro de la tarjeta
        if (titulo) {
            console.log(titulo.innerText);
            let animeTitulo = titulo.innerText.trim();
            let urlAniemes = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeTitulo)}&limit=1`;
            fetch(urlAniemes)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    let animeId = data.data[0].mal_id; // Obtiene el ID del anime
                    let basePath = document.referrer.includes("/anime/") ? "../anime/anime.html" : "anime/anime.html";
                    window.location.href = `${basePath}?id=${animeId}`;

                }
            })
             
           
        }
});


function cargarAnime() {
    let params = new URLSearchParams(window.location.search);
     let animeId = params.get('id');  
    if (animeId) {
        let urlId = `https://api.jikan.moe/v4/anime/${animeId}`
    fetch(urlId)
    .then(response => response.json())
    .then(data => {
    animeID(data.data)
    console.log(data.title)
    })
    }
    
    
}

function animeID(data) {
        let img = document.getElementById('imgAnime');
        if (img && data) {
            img.src = data.images.jpg.image_url
        }
        let nameAnime = document.getElementById('nameAnime');
        if (nameAnime && data) {
            nameAnime.textContent = data.title
        }
        let information = document.getElementById('information');
        if (information && data) {
            information.textContent = data.synopsis
        }
        let gender = document.getElementById('gender');
        if (gender && Array.isArray(data.genres)) {
            gender.innerHTML = '';
            data.genres.forEach(genre => {
            let nameG = document.createElement('li');
            nameG.classList.add('gnreName', 'titulos');
            nameG.textContent = genre.name;
            gender.appendChild(nameG);
        });
        }
        
         let episodios = document.querySelector('#episodios')
         if (episodios  && Array.isArray(data.episodes)) {
            data.episodes.forEach(episode => {
            episodios.innerHTML = "";
            let episodio = document.createElement('div');
            let numero = document.createElement('h3');
            numero.textContent = episode.episodes
            episodio.appendChild(numero);
            episodios.appendChild(episodio);
        });
         }
          
    }
cargarAnime(); 