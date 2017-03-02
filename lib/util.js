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

const startPreload = () => {
  preload = new createjs.LoadQueue(true);
  preload.installPlugin(createjs.Sound);
  preload.on('fileload', handleFileLoad);
  preload.loadManifest(manifest);
};

const handleFileLoad = (event) => {
  if (event.item.id === 'chicken') {
    const chicken = new createjs.Bitmap(event.result);
  }
}
;


export const preloadFiles = () => {
  setupManifest();
  startPreload();
};

