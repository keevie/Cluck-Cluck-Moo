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
    $highScoreBox.append(`Score: ${chicken.score}`);
    $highScoreBox.append(`High Score: ${highScore}`);
    $highScoreBox.append("<button id='replay'>Play again</button>");
    $('#replay').on('click', () => window.location.reload(false));
    $highScoreBox.show();

    if (chicken.yVelocity > 25) {
      setTimeout(() => createjs.Sound.play('splat'), 1000);
    }
    else {
      createjs.Sound.play('splat');
    }
  }
};
