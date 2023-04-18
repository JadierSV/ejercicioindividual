let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var logo = document.querySelector('.logo');
var rotation = 0;

function rotateLogo() {
  rotation += 1;
  logo.style.transform = 'rotate(' + rotation + 'deg)';
  requestAnimationFrame(rotateLogo);
}

rotateLogo();

// Juego

// Obtenemos los elementos del DOM
const startBtn = document.querySelector('#start-btn');
const tiles = document.querySelectorAll('.game-tile');

// Función para generar un número aleatorio
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para cambiar el color de un tile
function changeTileColor(tile) {
  tile.style.backgroundColor = "#006b3f";
}

// Función para reiniciar los colores de los tiles
function resetTileColors() {
  tiles.forEach(tile => {
    tile.style.backgroundColor = "#008148";
  });
}

// Event listener para el botón de comenzar
startBtn.addEventListener('click', () => {
  // Reiniciamos los colores de los tiles
  resetTileColors();

  // Seleccionamos un tile al azar y cambiamos su color
  const randomTileIndex = getRandomInt(0, 2);
  const randomTile = tiles[randomTileIndex];
  changeTileColor(randomTile);
});

// Event listener para los tiles
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    if (tile.style.backgroundColor === "rgb(0, 107, 63)") {
      // El usuario ha ganado el juego
      alert('¡Ganaste un café gratis!');
      resetTileColors();
    } else {
      // El usuario ha perdido el juego
      alert('Lo siento has perdido');
      resetTileColors();
    }
  });
});