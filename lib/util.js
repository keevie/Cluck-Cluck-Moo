let manifest;
let preload;

const setupManifest = () => {
  manifest = [{
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
  if (event.item.id === 'chicken') {
    const chicken = new createjs.Bitmap(event.result);
    chicken.scaleX = 0.125;
    chicken.scaleY = 0.125;
    chicken.regX = 25;
    chicken.regY = 30;
    chicken.yVelocity = 0;
    assets['chicken'] = chicken;
  }
  else if (event.item.id === 'trampoline') {
    const trampoline = new createjs.Bitmap(event.result);
    trampoline.scaleX = 0.125;
    trampoline.scaleY = 0.125;
    assets['trampoline'] = trampoline;
  }
}
;


export const preloadFiles = (assets, startGame) => {
  setupManifest();
  startPreload(assets, startGame);
};

