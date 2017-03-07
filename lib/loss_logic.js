export const checkIfLose = (chicken, stage, tick) => {
  if (chicken.score > 0
    && (chicken.y > 324 || chicken.yVelocity > 25 )) {
    createjs.Ticker.removeAllEventListeners();

    if (chicken.yVelocity > 25) {
      setTimeout(() => createjs.Sound.play('splat'), 1000);
    }
    else {
      createjs.Sound.play('splat');
    }
  }
};
