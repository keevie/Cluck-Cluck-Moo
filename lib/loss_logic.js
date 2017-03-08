import docCookies from './cookies';
import { updateScore, getScore } from './database';

export const checkIfLose = (chicken, stage, tick) => {
  if (chicken.score > 0
    && (chicken.y > 324 || chicken.yVelocity > 25 )) {
    createjs.Ticker.removeAllEventListeners();

    let highScore;
    getScore().then((res) => {
      highScore = res;
      let newHighScore = false;
      if (chicken.score > highScore) {
        updateScore(chicken.score);
        highScore = chicken.score;
        newHighScore = true;
      }
      drawScoreBox(chicken, highScore, newHighScore);
    });

    createjs.Sound.stop();

    if (chicken.yVelocity > 25) {
      setTimeout(() => createjs.Sound.play('splat'), 1000);
    }
    else {
      createjs.Sound.play('splat');
    }
  }
};
const getPersonalHighScore = (chicken) => {
  const highScore = docCookies
    .getItem('highScore') || chicken.score;
  if (chicken.score > highScore) {
    docCookies.setItem('highScore', `${chicken.score}`);
  }
  return highScore;
};

const drawScoreBox = (chicken, highScore, newHighScore) => {
  const $highScoreBox = $('#high-score');
  const personalBest = getPersonalHighScore(chicken);

  if (newHighScore) {
    $highScoreBox
      .append('<h2>Amazing! You beat the high score!</h2>');
  }
  $highScoreBox.append('<h2>Score</h2>');
  $highScoreBox.append(`<p>${chicken.score}</p>`);
  $highScoreBox.append('<h2>High Score</h2>');
  $highScoreBox.append(`<p>${highScore}</p>`);
  $highScoreBox.append(`<h2>Personal Best</h2>`);
  $highScoreBox.append(`<p>${personalBest}</p>`);
  $highScoreBox.append("<button id='replay'>Play again!</button>");
  $highScoreBox.append("<p>Song by Disposable Planet</p>");
  $('#replay').on('click', () => window.location.reload(false));
  $highScoreBox.css('display', 'flex');
};
