//VARIABLES
let array: string[] =  ["piedra", "papel", "tijeras"];
var divResultado = document.querySelectorAll('body > div > main > p:nth-child(6) > a')[0];
const piedra: Element = document.querySelectorAll('body > div > main > p:nth-child(3) > a')[0];
const papel: Element = document.querySelectorAll('body > div > main > p:nth-child(4) > a')[0];
const tijera: Element = document.querySelectorAll('body > div > main > p:nth-child(5) > a')[0];

////  FUNCTIONS
function random(numero:string[]):number {
  let numero2: number = Math.floor(Math.random() * numero.length)
  return numero2
}

function piepaptij(opcion:string[]):string{
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

function jugada(jugadaJugador:string):string {
  let final:number = random(["piedra", "papel", "tijeras"]);
  let resultado:string = piepaptij([array[final], jugadaJugador]);
  return resultado;
}

/// BINDS - EVENTOS
piedra.addEventListener('click', function() {
  divResultado.innerHTML = jugada("piedra")
})

papel.addEventListener('click', function() {
  divResultado.innerHTML = jugada("papel")
})

tijera.addEventListener('click', function() {
  divResultado.innerHTML = jugada("tijera")
})
