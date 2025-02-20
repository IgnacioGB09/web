let UserIcon = document.getElementById('user');
let menuUser = document.getElementById('menuInicio');


UserIcon.addEventListener('click',() => {
    if (menuUser.style.display === 'none') {
        menuUser.style.display = 'grid';
    } else {
        menuUser.style.display = 'none';
    }
});
const us = JSON.parse(localStorage.getItem('login_success')) || false;
let names = document.getElementById('userName');
let iniciar = document.getElementById('Iniciar');
 if (us) {
    names.innerHTML = `${us.userName}`;
    iniciar.style.display = 'none';
    names.style.display = 'block';
 };
 
 let Cerrar = document.getElementById('Cerrar');
  Cerrar.addEventListener('click', () => {
    localStorage.removeItem('login_success')
    window.location.href = 'index.html'
  });
  if (!us) {
    names.innerHTML = '';
    iniciar.style.display = 'grid';
    
 };
