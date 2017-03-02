import { moveWithMouse, fallWithGravity } from './movements';
import { preloadFiles } from './util';

class Game {

  constructor (options) {
    this.stage = options.stage;
    this.tick = this.tick.bind(this);
    this.run = this.run.bind(this);
  }

  initialize () {
    this.assets = {};
    preloadFiles(this.assets, this.run);
  }

  run () {
    createjs.Ticker.on("tick", this.tick);
    createjs.Ticker.setFPS(60);
    this.stage.addChild(this.assets.chicken);
    this.assets.trampoline.x = 200;
    this.assets.trampoline.y = 200;
    this.stage.addChild(this.assets.trampoline);
  }

  tick (e) {
    moveWithMouse(this.stage, this.assets.chicken);
    fallWithGravity(this.assets.chicken);
    this.stage.update();
  }

}

export default Game;
