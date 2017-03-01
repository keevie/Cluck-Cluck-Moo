const init = () => {
  const canvas = document.getElementById('gameCanvas');
  const stage = new createjs.Stage(canvas);

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener('tick', stage);

  const onImageLoaded = (e) => {
    const myBitmap= new createjs.Bitmap(chickenImg);
    stage.addChild(myBitmap);
  };

  const chickenImg = new Image();
  chickenImg.onload = onImageLoaded;
  chickenImg.src = "assets/chicken.png";


};


document.addEventListener('DOMContentLoaded', init);

