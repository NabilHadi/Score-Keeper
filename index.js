const scoreHeader = document.querySelector("#scoreHeader");
const playerOneScoreText = document.querySelector("#playerOneScore");
const playerTwoScoreText = document.querySelector("#playerTwoScore");
const winScoreSelect = document.querySelector("#winScoreSelect");
const playerOneBtn = document.querySelector("#playerOneBtn");
const playerTwoBtn = document.querySelector("#playerTwoBtn");
const resetBtn = document.querySelector("#resetBtn");

const playerOne = "PlayerOne";
const playerTwo = "PlayerTwo";

let playerOneScore = 0;
let playerTwoScore = 0;
let winScore = 3;

winScoreSelect.addEventListener("change", (e) => {
  winScore = e.target.value;
});

playerOneBtn.addEventListener("click", onBtnClick);

playerTwoBtn.addEventListener("click", onBtnClick);

resetBtn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  if (event.target === resetBtn) {
    restartGame();
  } else if (event.target === playerOneBtn) {
    if (playerOneScore >= winScore) return;
    playerOneScore++;
    updateScore();
  } else if (event.target === playerTwoBtn) {
    if (playerTwoScore >= winScore) return;
    playerTwoScore++;
    updateScore();
  } else {
    console.log("Unknown button click");
  }
}

function getWinner() {
  if (playerOneScore >= winScore) {
    return playerOne;
  } else if (playerTwoScore >= winScore) {
    return playerTwo;
  } else {
    return null;
  }
}

function showWinner(player) {
  if (player === playerOne) {
    playerOneScoreText.style.color = "green";
    playerTwoScoreText.style.color = "red";
    playerOneBtn.setAttribute("disabled", "");
    playerTwoBtn.setAttribute("disabled", "");
  } else if (player === playerTwo) {
    playerTwoScoreText.style.color = "green";
    playerOneScoreText.style.color = "red";
    playerOneBtn.setAttribute("disabled", "");
    playerTwoBtn.setAttribute("disabled", "");
  } else if (!player) {
    return;
  } else {
    console.log("Unknown player winner");
  }
}

function restartGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreText.textContent = playerOneScore;
  playerTwoScoreText.textContent = playerTwoScore;
  playerTwoScoreText.style.color = "black";
  playerOneScoreText.style.color = "black";
  playerOneBtn.removeAttribute("disabled");
  playerTwoBtn.removeAttribute("disabled");
}

function updateScore() {
  playerOneScoreText.textContent = playerOneScore;
  playerTwoScoreText.textContent = playerTwoScore;
  showWinner(getWinner());
}
