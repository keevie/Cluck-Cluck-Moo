class Game {

  constructor (options) {
    this.stage = options.stage;

  }

  run () {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", this.stage);

    const onImageLoaded = (e) => {
      const myBitmap= new createjs.Bitmap(chickenImg);
      this.stage.addChild(myBitmap);
    };

    const chickenImg = new Image();
    chickenImg.width = '20px';
    chickenImg.height = '20px';
    chickenImg.onload = onImageLoaded;
    chickenImg.src = "assets/chicken.png";
  }

}

export default Game;
