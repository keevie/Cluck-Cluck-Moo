let manifest;
let preload;

const setupManifest = () => {
  manifest = [{
    src: './assets/cloud1.png',
    id: 'cloud1'
  }, {
    src: './assets/cloud2.png',
    id: 'cloud2'
  }, {
    src: './assets/cloud3.png',
    id: 'cloud3'
  }, {
    src: './assets/chicken-walking.png',
    id: 'chicken'
  }, {
    src: './assets/trampoline.png',
    id: 'trampoline'
  }, {
    src: './assets/sprite-sheet-of-cow-walking.png',
    id: 'cow'
  }, {
    src: './assets/ground.png',
    id: 'ground'
  }, {
    src: './assets/music.ogg',
    id: 'music'
  }, {
    src: './assets/moo.wav',
    id: 'moo'
  }, {
    src: './assets/splat.wav',
    id: 'splat'
  }, {
    src: './assets/boing.wav',
    id: 'boing'
  }];
};

const startPreload = (assets, startGame) => {
  preload = new createjs.LoadQueue(true);
  preload.installPlugin(createjs.Sound);
  preload.on('progress', handleOverallProgress);
  preload.on('fileload', handleFileLoad.bind(null, assets));
  preload.on('complete', () => {
    $("#mainProgress").hide();
    showInstructions(startGame);
  });
  preload.loadManifest(manifest);
};

const showInstructions = (startGame) => {
  $('#Instructions').show();
  $('#Instructions').on('click', () => {
    $('#Instructions').hide();
    const music = createjs.Sound.play('music');
    music.volume = 0.4;
    music.loop = -1;
    startGame();
  });
};
const handleOverallProgress = (event) => {
  $("#mainProgress > .progress")
    .width(preload.progress * $("#mainProgress").width());
};


const handleFileLoad = (assets, event) => {
  switch(event.item.id) {
    case 'chicken':
      const chicken = new createjs.SpriteSheet({
        images: [event.result],
        frames: {
          width: 54,
          height: 46,
          regX: 27,
          regY: 23
        },
        animations: {
          walk: [0,29, 'walk']
        },
        framerate: 5
      });
      const chickenAnimation = new createjs.Sprite(chicken, 'walk');
      chickenAnimation.y = 290;
      chickenAnimation.yVelocity = 0;
      assets['chicken'] = chickenAnimation;
      return;
    case 'trampoline':
      const trampoline = new createjs.Bitmap(event.result);
      trampoline.scaleX = 0.125;
      trampoline.scaleY = 0.125;
      assets['trampoline'] = trampoline;
      return;
    case 'ground':
      const ground = new createjs.Shape();
      ground.graphics.beginBitmapFill(event.result)
        .drawRect(0, 20, 2000, 200);
      ground.tileW = 200;
      ground.y = 280;
      assets['ground'] = ground;
      return;
    case 'cloud1':
      const cloud1 = new createjs.Bitmap(event.result);
      cloud1.scaleX = 0.125;
      cloud1.scaleY = 0.125;
      assets['cloud1'] = cloud1;
      return;
    case 'cloud2':
      const cloud2 = new createjs.Bitmap(event.result);
      cloud2.scaleX = 0.125;
      cloud2.scaleY = 0.125;
      assets['cloud2'] = cloud2;
      return;
    case 'cloud3':
      const cloud3 = new createjs.Bitmap(event.result);
      cloud3.scaleX = 0.125;
      cloud3.scaleY = 0.125;
      assets['cloud3'] = cloud3;
      return;
    case 'cow':
      const cow = new createjs.SpriteSheet({
        images: [event.result],
        frames: {
          width: 236,
          height: 158,
          regX: 118,
          regY: 70
        },
        animations: {
          walk: [0,65, 'walk']
        },
        framerate: 5
      });
      const cowAnimation = new createjs.Sprite(cow, 'walk');
      assets['cow'] = chickenAnimation;
      cowAnimation.scaleX = 0.25;
      cowAnimation.scaleY = 0.25;
      assets['cow'] = cowAnimation;
      return;
    default:
      return;
  }
};

export const preloadFiles = (assets, startGame) => {
  setupManifest();
  startPreload(assets, startGame);
};


export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
