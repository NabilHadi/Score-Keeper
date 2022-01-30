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

playerOneBtn.addEventListener("click", () => {
  if (playerOneScore >= winScore) return;
  playerOneScore++;
  playerOneScoreText.textContent = playerOneScore;
  if (whoWon() === playerOne) {
    playerOneScoreText.style.color = "green";
    playerTwoScoreText.style.color = "red";
    playerOneBtn.setAttribute("disabled", "");
    playerTwoBtn.setAttribute("disabled", "");
  }
});

playerTwoBtn.addEventListener("click", () => {
  if (playerTwoScore >= winScore) return;
  playerTwoScore++;
  playerTwoScoreText.textContent = playerTwoScore;
  if (whoWon() === playerTwo) {
    playerTwoScoreText.style.color = "green";
    playerOneScoreText.style.color = "red";
    playerOneBtn.setAttribute("disabled", "");
    playerTwoBtn.setAttribute("disabled", "");
  }
});

resetBtn.addEventListener("click", () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreText.textContent = playerOneScore;
  playerTwoScoreText.textContent = playerTwoScore;
  playerTwoScoreText.style.color = "black";
  playerOneScoreText.style.color = "black";
  playerOneBtn.removeAttribute("disabled");
  playerTwoBtn.removeAttribute("disabled");
});


function whoWon() {
  if (playerOneScore >= winScore) {
    return playerOne;
  } else if (playerTwoScore >= winScore) {
    return playerTwo;
  } else {
    return null;
  }
}
