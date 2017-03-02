import { moveWithMouse, fallWithGravity } from './movements';
import { preloadFiles } from './util';
import merge from 'lodash/merge';

class Game {

  constructor (options) {
    this.stage = options.stage;
    this.tick = this.tick.bind(this);
    this.generateTrampolines = this.generateTrampolines.bind(this);
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
    this.generateTrampolines(5).forEach(function (trampoline) {
      this.stage.addChild(trampoline);
    }.bind(this));

  }

  generateTrampolines(n) {
    const trampolines = [];
    for (let i = 0; i <= n; i++) {
      const trampoline = merge({}, this.assets.trampoline);
      trampoline.x = Math.round(Math.random() * 760);
      trampoline.y = 250;
      trampolines.push(trampoline);
    }
    return trampolines;
  }

  tick (e) {
    moveWithMouse(this.stage, this.assets.chicken);
    fallWithGravity(this.assets.chicken);
    this.stage.update();
  }

}

export default Game;
