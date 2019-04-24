
let array = ["piedra", "papel", "tijeras"];
var divResultado = document.querySelectorAll('body > div > main > p:nth-child(6) > a')[0];

////  FUNCTIONS
function random(numero) {
  let numero2 = Math.floor(Math.random() * numero.length)
  return numero2
}

function piepaptij(opcion) {
  if (opcion[0] == "piedra" && opcion[1] == "papel") {
    return "Gana el jugador 2"
  } else if (opcion[0] == "piedra" && opcion[1] == "tijera") {
    return "Gana el jugador 1"
  } else if (opcion[0] == "papel" && opcion[1] == "tijera") {
    return "Gana el jugador 2"
  } else if (opcion[0] == "papel" && opcion[1] == "piedra") {
    return "Gana el jugador 1"
  } else if (opcion[0] == "tijera" && opcion[1] == "piedra") {
    return "Gana el jugador 2"
  } else if (opcion[0] == "tijera" && opcion[1] == "papel") {
    return "Gana el jugador 1"
  } else if (opcion[0] == "piedra" && opcion[1] == "piedra") {
    return "Empate"
  } else if (opcion[0] == "papel" && opcion[1] == "papel") {
    return "Empate"
  } else if (opcion[0] == "tijera" && opcion[1] == "tijera") {
    return "Empate"
  } else {
    return "Escoge una opcion Valida"
  }
}
function jugada(jugadaJugador) {
  let final = random(["piedra", "papel", "tijeras"]);
  let resultado = piepaptij([array[final], jugadaJugador]);
  return resultado;
}


/// BINDS - EVENTOS
const piedra = document.querySelectorAll('body > div > main > p:nth-child(3) > a')[0];
piedra.addEventListener('click', function() {
  divResultado.innerHTML = jugada("piedra")
})

const papel = document.querySelectorAll('body > div > main > p:nth-child(4) > a')[0];
papel.addEventListener('click', function() {
  divResultado.innerHTML = jugada("papel")
})


const tijera = document.querySelectorAll('body > div > main > p:nth-child(5) > a')[0];
tijera.addEventListener('click', function() {
  divResultado.innerHTML = jugada("tijera")
})
