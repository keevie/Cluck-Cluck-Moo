const init = () => {

  const canvas = document.getElementById("gameCanvas");
  const stage = new createjs.Stage(canvas);

  const loadProgressLabel = new createjs.Text("","18px Verdana","black");
  loadProgressLabel.lineWidth = 200;
  loadProgressLabel.textAlign = "center";
  loadProgressLabel.x = canvas.width/2;
  loadProgressLabel.y = 50;
  stage.addChild(loadProgressLabel);

  //container that holds the elements of the loading bar
  const loadingBarContainer = new createjs.Container();
  const loadingBarHeight = 20;
  const loadingBarWidth = 300;
  const LoadingBarColor = createjs.Graphics.getRGB(0,0,0);

  //Create the loading bar
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

  //create loading queue
  //false param to stop COR problems?
  const preload = new createjs.LoadQueue(false);
  preload.addEventListener("complete", handleComplete);
  preload.addEventListener("progress", handleProgress);

  //Add files to the queue
  preload.loadFile({id: "chicken", src: "assets/chicken.png"});
  preload.loadFile({id: "boing", src: "assets/boing.wav"});

  stage.update();
};


document.addEventListener('DOMContentLoaded', init);

