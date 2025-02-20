let formOne = document.getElementById('form1');
 formOne.addEventListener ('submit', (e) => {
    e.preventDefault()
    let correo = document.querySelector('#correo').value;
    let contraseña = document.querySelector('#contraseña').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUsers = Users.find(user => user.correo === correo &&  user.contraseña === contraseña);
    if(!validUsers){
        return alert('Correo y/o constraseña incorrectas');
    }
    alert(`Bienvenido ${validUsers.userName}`);
    localStorage.setItem('login_success', JSON.stringify(validUsers));
    window.location.href = '../index.html';
 })


