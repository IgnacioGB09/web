let ocultoBtn = document.getElementById("menuBarras");
let escondido = document.getElementById("barraNavegacion");
function myFunction(x) {
    x.classList.toggle("change");
  }

ocultoBtn.addEventListener("click", toggle);
function toggle() {
    escondido.classList.toggle("show");
}