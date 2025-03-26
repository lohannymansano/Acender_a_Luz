// criando os elementos do dom
const imgOlhos = document.getElementById("imgOlhos");
const imgLampada = document.getElementById("imgLampada");
const btnLigar = document.getElementById("btnLigar");
const btnDesligar = document.getElementById("btnDesligar");
const sala = document.getElementById("sala");
grito = new Audio("./som/grito.mp3");

//Respondendo eventos
btnLigar.addEventListener("click", () => {
  debugger;
  imgLampada.src = "./img/ligada.jpg";
  imgOlhos.src = "./img/beijaflor.gif";
  sala.classList.remove("apagado");
  grito.pause();
});

btnDesligar.addEventListener("click", () => {
  debugger;
  imgLampada.src = "./img/desligada.jpg";
  imgOlhos.src = "./img/olhos.gif";
  sala.classList.add("apagado");
  grito.play();
});