import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const stage = new createjs.Stage('gameCanvas');

  const game = new Game({ stage });

  game.run();
});

