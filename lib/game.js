import { moveWithMouse, fallWithGravity } from './movements';
import { preloadFiles, getRandomInt } from './util';
import { checkCollisions } from './collisions';
import { moveCamera} from './camera';
import merge from 'lodash/merge';

class Game {

  constructor (options) {
    this.stage = options.stage;
    this.world = new createjs.Container();
    this.world.cameraMoveCounter = -3001;
    this.stage.addChild(this.world);

    this.tick = this.tick.bind(this);
    this.generateTrampolines = this.generateTrampolines.bind(this);
    this.generateClouds = this.generateClouds.bind(this);
    this.generateWorld = this.generateWorld.bind(this);
    this.run = this.run.bind(this);
  }

  initialize () {
    this.assets = {};
    preloadFiles(this.assets, this.run);
  }

  run () {
    createjs.Ticker.on("tick", this.tick);
    createjs.Ticker.setFPS(60);

    this.world.addChild(this.assets.chicken);

    this.background = new createjs.Container();
    this.trampolines = [];
    this.generateTrampolines(5, 100);

    for (let i = 0; i < 21; i++) {
      this.generateTrampolines(3, i * -300);
    }


    this.world.addChild(this.background);

  }

  generateWorld () {
    if (this.world.cameraMoveCounter < -3000) {
      for (let i = 0; i < 11; i++) {
        this.generateTrampolines(3, this.assets.chicken.y - 1000 + (i * -300));
      }

      this.generateClouds(5, this.assets.chicken.y - 1000);
      this.world.cameraMoveCounter = 0;
    }
  }

  generateTrampolines(n, y) {
    for (let i = 0; i <= n; i++) {
      const trampoline = merge({}, this.assets.trampoline);
      trampoline.x = Math.round(Math.random() * 760);
      trampoline.y = y;
      this.background.addChild(trampoline);
      this.trampolines.push(trampoline);
    }
  }

  generateClouds(n, y) {
    for (let i = 0; i <= n; i++) {
      const cloud = merge({}, this.assets[`cloud${getRandomInt(1,3)}`]);
      cloud.x = Math.round(Math.random() * 400);
      cloud.y = Math.round(Math.random() * 300) + y;
      this.background.addChild(cloud);
    }
  }

  tick (e) {
    moveWithMouse(this.stage, this.assets.chicken);
    fallWithGravity(this.assets.chicken);
    checkCollisions(this.assets.chicken, this.trampolines, this.background);
    moveCamera(this.world, this.assets.chicken);
    this.generateWorld();
    this.stage.update();
  }

}

export default Game;
