const init = () => {

  const canvas = document.getElementById("gameCanvas");
  const stage = new createjs.Stage(canvas);

  const loadProgressLabel = new createjs.Text("","18px Verdana","black");
  loadProgressLabel.lineWidth = 200;
  loadProgressLabel.textAlign = "center";
  loadProgressLabel.x = canvas.width/2;
  loadProgressLabel.y = 50;
  stage.addChild(loadProgressLabel);

  const loadingBarContainer = new createjs.Container();
  const loadingBarHeight = 20;
  const loadingBarWidth = 300;
  const LoadingBarColor = createjs.Graphics.getRGB(0,0,0);

  const loadingBar = new createjs.Shape();
  loadingBar.graphics.beginFill(LoadingBarColor)
    .drawRect(0, 0, 1, loadingBarHeight).endFill();

  const frame = new createjs.Shape();
  const padding = 3;
  frame.graphics.setStrokeStyle(1)
    .beginStroke(LoadingBarColor)
    .drawRect(-padding/2, -padding/2, loadingBarWidth+padding, loadingBarHeight+padding);


  //Add the loading bar and the frame to container, and place on canvas in correct position.
  loadingBarContainer.addChild(loadingBar, frame);
  loadingBarContainer.x = Math.round(canvas.width/2 - loadingBarWidth/2);
  loadingBarContainer.y = 100;

  //Add the container to the stage
  stage.addChild(loadingBarContainer);

};


document.addEventListener('DOMContentLoaded', init);



// const circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);

// createjs.Tween.get(circle, { loop: true })
//   .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
//   .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
//   .to({ alpha: 0, y: 225 }, 100)
//   .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
//   .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

// createjs.Ticker.setFPS(60);
// createjs.Ticker.addEventListener("tick", stage);

// const soundButton = document.createElement("button");
// soundButton.addEventListener('click', playSound)
// const currentCanvas = document.getElementById('gameCanvas')
// document.body.insertBefore(soundButton,currentCanvas)
