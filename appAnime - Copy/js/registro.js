let form = document.querySelector('#form2');

let warning = document.getElementById('warning');
form.addEventListener ('submit', (e) => {
    e.preventDefault();
    let correo = document.querySelector('#correoCrear').value;
    let userName = document.querySelector('#usuario').value;
    let contraseña = document.querySelector('#contraseñaCrear').value;
    let confirmar = document.querySelector('#contraseñaRepetir').value;
     const Users = JSON.parse(localStorage.getItem('users')) || [];
   const UsersRegistered = Users.find(user => user.correo === correo); 
    let entrar = false;
    let parrafo = "";
    warning.innerHTML = "";
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contraRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regex.test(correo)) {
        parrafo += `El correo no es valido <br>`;
        entrar = true;
    };
    if (userName.lenght < 6) {
        
        parrafo += `El nombre no es valido <br>`;
        entrar = true;
    };
    if (!contraRegex.test(contraseña)) {
        parrafo += `La contraseña no es valida <br>`;
        entrar = true;
    };
    if (confirmar !== contraseña) {
      parrafo  += `Las contraseñas no coinciden.  <br>`
      entrar = true;
    } ;
    if (!entrar) {
         
        Users.push({userName: userName, correo: correo, contraseña: contraseña});
        localStorage.setItem('users', JSON.stringify(Users));
        alert('Registro exitoso!')
        window.location.href = 'ingresa.html'; 
    } else {
        warning.innerHTML = parrafo;
    }
      if (UsersRegistered) {
        return alert('El usuario ya esta registrado');
    } 
    
    
});

