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
    src: './assets/chicken.png',
    id: 'chicken'
  }, {
    src: './assets/trampoline.png',
    id: 'trampoline'
  }, {
    src: './assets/boing.wav',
    id: 'boing'
  }];
};

const startPreload = (assets, startGame) => {
  preload = new createjs.LoadQueue(true);
  preload.installPlugin(createjs.Sound);
  preload.on('fileload', handleFileLoad.bind(null, assets));
  preload.on('complete', startGame);
  preload.loadManifest(manifest);
};

const handleFileLoad = (assets, event) => {
  switch(event.item.id) {
    case 'chicken':
      const chicken = new createjs.Bitmap(event.result);
      chicken.scaleX = 0.125;
      chicken.scaleY = 0.125;
      chicken.regX = 25;
      chicken.regY = 30;
      chicken.yVelocity = 0;
      assets['chicken'] = chicken;
      return;
    case 'trampoline':
      const trampoline = new createjs.Bitmap(event.result);
      trampoline.scaleX = 0.125;
      trampoline.scaleY = 0.125;
      assets['trampoline'] = trampoline;
      return;
    case 'cloud1':
      const cloud1 = new createjs.Bitmap(event.result);
      assets['cloud1'] = cloud1;
      return;
    case 'cloud2':
      const cloud2 = new createjs.Bitmap(event.result);
      assets['cloud2'] = cloud2;
      return;
    case 'cloud3':
      const cloud3 = new createjs.Bitmap(event.result);
      assets['cloud3'] = cloud3;
      return;
    default:
      return;
  }
}
;


export const preloadFiles = (assets, startGame) => {
  setupManifest();
  startPreload(assets, startGame);
};

