export const checkIfLose = (chicken, stage, tick) => {
  if (chicken.score > 0
    && (chicken.y > 324 || chicken.yVelocity > 25 )) {
    const loseBox = new createjs.Shape();
    loseBox.graphics.beginFill('white');
    loseBox.alpha = 0.85;
    loseBox.graphics.drawRect(180, 50, 400, 400 );
    loseBox.graphics.endFill();
    stage.addChild(loseBox);
    createjs.Ticker.removeAllEventListeners();
  }
};
