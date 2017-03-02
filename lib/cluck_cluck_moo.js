import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const stage = new createjs.Stage('gameCanvas');
  const canvas = document.getElementById('gameCanvas');
  canvas.style.backgroundColor = '#87CEEB';

  const game = new Game({ stage });

  game.initialize();
});

