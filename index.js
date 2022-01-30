const playerOne = {
  score: 0,
  scoreText: document.querySelector("#playerOneScore"),
  button: document.querySelector("#playerOneBtn"),
};

const playerTwo = {
  score: 0,
  scoreText: document.querySelector("#playerTwoScore"),
  button: document.querySelector("#playerTwoBtn"),
};

const scoreHeader = document.querySelector("#scoreHeader");
const resetBtn = document.querySelector("#resetBtn");

let winScore = 3;

winScoreSelect.addEventListener("change", (e) => {
  winScore = parseInt(e.target.value);
});

playerOneBtn.addEventListener("click", onBtnClick);

playerTwoBtn.addEventListener("click", onBtnClick);

resetBtn.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  if (event.target === resetBtn) {
    restartGame(playerOne, playerTwo);
  } else if (event.target === playerOne.button) {
    if (playerOne.score >= winScore) return;
    playerOne.score++;
    updateScore(playerOne, playerTwo);
  } else if (event.target === playerTwo.button) {
    if (playerTwo.score >= winScore) return;
    playerTwo.score++;
    updateScore(playerOne, playerTwo);
  } else {
    console.log("Unknown button click");
  }
}

function getWinner(p1, p2) {
  if (p1.score >= winScore) {
    return [p1, p2];
  } else if (p2.score >= winScore) {
    return [p2, p1];
  } else {
    return null;
  }
}

function showWinner(winner, loser) {
  if (!winner || !loser) return;

  winner.scoreText.style.color = "green";
  loser.scoreText.style.color = "red";

  winner.button.disabled = true;
  loser.button.disabled = true;
}

function restartGame(p1, p2) {
  p1.score = 0;
  p1.scoreText.textContent = "0";
  p1.scoreText.style.color = "black";

  p2.score = 0;
  p2.scoreText.textContent = "0";
  p2.scoreText.style.color = "black";

  p1.button.disabled = false;
  p2.button.disabled = false;
}

function updateScore(p1, p2) {
  p1.scoreText.textContent = playerOne.score;
  p2.scoreText.textContent = playerTwo.score;
  const winnerAndLoser = getWinner(p1, p2);
  winnerAndLoser && showWinner(...winnerAndLoser);
}
