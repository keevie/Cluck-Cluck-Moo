import docCookies  from './cookies';

export const checkIfLose = (chicken, stage, tick) => {
  if (chicken.score > 0
    && (chicken.y > 324 || chicken.yVelocity > 25 )) {
    createjs.Ticker.removeAllEventListeners();
    const $highScoreBox = $('#high-score');
    // const highScore = document.cookie.highScore || chicken.score;
    const highScore = docCookies
      .getItem('highScore') || chicken.score;
    if (chicken.score >= highScore) {
      docCookies.setItem('highScore', `${chicken.score}`);
    }
    $highScoreBox.append('<h2>Score</h2>');
    $highScoreBox.append(`<p>${chicken.score}</p>`);
    $highScoreBox.append('<h2>High Score</h2>');
    $highScoreBox.append(`<p>${highScore}</p>`);
    $highScoreBox.append("<button id='replay'>Play again!</button>");
    $('#replay').on('click', () => window.location.reload(false));
    $highScoreBox.css('display', 'flex');

    if (chicken.yVelocity > 25) {
      setTimeout(() => createjs.Sound.play('splat'), 1000);
    }
    else {
      createjs.Sound.play('splat');
    }
  }
};
