const playerImage = document.getElementById('player__image');
const computerImage = document.getElementById('computer__image');

const resultImage = document.getElementById('result__image');
const choiceButtons = document.querySelectorAll('.game__button');

let player;
let playerImg;
let computer;
let computerImg;
let result;

choiceButtons.forEach((button) =>
  button.addEventListener('click', () => {
    playerTurn(button);
    computerTurn();

    playerImage.src = playerImg;
    computerImage.src = computerImg;
    resultImage.src = checkWinner();
  })
);

function computerTurn() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computer = 'ROCK';
      computerImg = './images/rock.png';
      break;
    case 2:
      computer = 'PAPER';
      computerImg = './images/paper.jpg';
      break;
    case 3:
      computer = 'SCISSORS';
      computerImg = './images/scissors.png';
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return './images/draw.gif';
  } else if (computer === 'ROCK') {
    return player === 'PAPER' ? './images/win.gif' : './images/lose.gif';
  } else if (computer === 'PAPER') {
    return player === 'SCISSORS' ? './images/win.gif' : './images/lose.gif';
  } else if (computer === 'SCISSORS') {
    return player === 'ROCK' ? './images/win.gif' : './images/lose.gif';
  }
}

function playerTurn(button) {
  player = button.id;

  if (player === 'ROCK') {
    playerImg = './images/rock.png';
  } else if (player === 'PAPER') {
    playerImg = './images/paper.jpg';
  } else if (player === 'SCISSORS') {
    playerImg = './images/scissors.png';
  }
}
