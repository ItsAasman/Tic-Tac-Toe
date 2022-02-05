const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];
const playerConfigOverlay = document.getElementById("config-overlays");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("new-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayerOneElement = document.getElementById("edit-player1");
const editPlayerTwoElement = document.getElementById("edit-player2");
const cancelBtnElement = document.getElementById("cancel");
const startNewGameBtnElement = document.getElementById("start-new-game");
const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayerOneElement.addEventListener("click", openPlayerConfig);
editPlayerTwoElement.addEventListener("click", openPlayerConfig);

cancelBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerconfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
