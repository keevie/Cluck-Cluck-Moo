import { moveWithMouse, fallWithGravity, moveCows, jump } from './movements';
import { preloadFiles, getRandomInt } from './util';
import { checkCollisions } from './collisions';
import { moveCamera } from './camera';
import { checkIfLose } from './loss_logic';
import docCookies from './cookies';
import merge from 'lodash/merge';

class Game {

  constructor (options) {
    this.stage = options.stage;
    this.world = new createjs.Container();
    this.world.cameraMoveCounter = -3001;
    this.stage.addChild(this.world);

    this.tick = this.tick.bind(this);
    this.generateTrampolines = this.generateTrampolines.bind(this);
    this.cleanupTrampolines = this.cleanupTrampolines.bind(this);
    this.generateClouds = this.generateClouds.bind(this);
    this.generateCow = this.generateCow.bind(this);
    this.generateWorld = this.generateWorld.bind(this);
    this.handleMute = this.handleMute.bind(this);
    window.mutedEffects = false;
    if ( docCookies.getItem('effectsMuted')  === 'true' ) {
      window.mutedEffects = true;
    }
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
    this.assets.chicken.score = 0;
    this.assets.chicken.scoreCounter = 0;
    this.displayScore = new createjs.Text(
      `${this.assets.chicken.score}`,"20px Arial", "#000000"
    );
    this.stage.addChild(this.displayScore);
    this.displayScore.x = this.displayScore.y = 5;

    this.background = new createjs.Container();
    this.collidables = [];
    // this.generateTrampolines(5, 100);
    this.background.addChild(this.assets.ground);

    for (let i = 0; i < 21; i++) {
      this.generateTrampolines(3, i * -300);
    }
    this.stage.addEventListener('stagemousedown',
      () => jump(this.assets.chicken));

    //mute button
    window.addEventListener('keydown', this.handleMute);

    this.world.addChild(this.background);
  }

  handleMute (e) {
    // "m"
    if (e.keyCode === 77) {
      if (window.music.muted === true) {
        window.music.muted = false;
        docCookies.setItem('musicMuted', 'false');
      }
      else {
        window.music.muted = true;
        docCookies.setItem('musicMuted', 'true');
      }
    }
    // "s"
    else if (e.keyCode === 83) {
      if (window.mutedEffects) {
        window.mutedEffects = false;
        docCookies.setItem('effectsMuted', 'false');
      }
      else {
        window.mutedEffects = true;
        docCookies.setItem('effectsMuted', 'true');
      }
    }
  }

  generateWorld () {
    if (this.world.cameraMoveCounter < -3000) {
      this.generateCow(this.assets.chicken.y - 500);
      for (let i = 0; i < 11; i++) {
        this.generateTrampolines(2, this.assets.chicken.y - 1000 + (i * -300), true);
        this.generateTrampolines(1, this.assets.chicken.y - 1000 + (i * -300), false);
        this.generateClouds(2, this.assets.chicken.y - 1000 + (i * -300));
      }
      this.world.cameraMoveCounter = 0;
    }
  }

  cleanupTrampolines () {
    this.collidables = this.collidables.filter((collidable) => {
      if (this.assets.chicken.y + 500 < collidable.y) {
        this.background.removeChild(collidable);
      }
      return ((this.assets.chicken.y + 500) > collidable.y);
    });
  }

  generateCow (y) {
    // const cow = merge({}, this.assets.cow);
    const cow = this.assets.cow.clone();
    cow.x = Math.round(Math.random() * 760);
    cow.y = y;
    cow.scaleX = -0.25;
    cow.collidableType = 'cow';
    cow.direction = 'right';
    this.background.addChild(cow);
    this.collidables.push(cow);
  }

  generateTrampolines(n, y, randomY) {
    for (let i = 0; i < n; i++) {
      const trampoline = merge({}, this.assets.trampoline);
      trampoline.x = Math.round(Math.random() * 730);
      if (randomY) {
        trampoline.y = y + Math.round(Math.random()* 200);
      }
      else {
        trampoline.y = y;
      }
      trampoline.collidableType = 'trampoline';
      this.background.addChild(trampoline);
      this.collidables.push(trampoline);
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
    this.cleanupTrampolines();
    moveCows(this.collidables.filter(function (collidable) {
      return collidable.collidableType === 'cow';
    }));
    fallWithGravity(this.assets.chicken);
    checkCollisions(this.assets.chicken,
      this.collidables, this.background, this.displayScore);
    moveCamera(this.world, this.assets.chicken);
    this.generateWorld();
    checkIfLose(this.assets.chicken, this.stage);
    this.stage.update();
  }

}

export default Game;
