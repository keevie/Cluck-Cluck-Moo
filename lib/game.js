import { moveWithMouse, fallWithGravity } from './movements';

class Game {

  constructor (options) {
    this.stage = options.stage;
    this.tick = this.tick.bind(this);
    this.run = this.run.bind(this);
  }

  initialize () {

    const onImageLoaded = (e) => {
      this.myChicken = new createjs.Bitmap(chickenImg);
      this.stage.addChild(this.myChicken);
      this.myChicken.scaleX = 0.125;
      this.myChicken.scaleY = 0.125;
      this.myChicken.yVelocity = 0;
      this.run();
    };

    const chickenImg = new Image();
    chickenImg.width = '20px';
    chickenImg.height = '20px';
    chickenImg.onload = onImageLoaded;
    chickenImg.src = "assets/chicken.png";

    createjs.Ticker.on("tick", this.tick);
    createjs.Ticker.setFPS(60);
  }

  run () {
  }

  tick (e) {
    moveWithMouse(this.stage, this.myChicken);
    fallWithGravity(this.myChicken);
    this.stage.update();
  }

}

export default Game;
