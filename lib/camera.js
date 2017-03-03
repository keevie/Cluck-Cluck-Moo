export const moveCamera = (world, chicken) => {
  if (chicken.y !== window.innerHeight * 0.5) {
    world.cameraMoveCounter += world.y - (window.innerHeight * 0.5 -chicken.y);
    world.y = window.innerHeight * 0.5 - chicken.y;
  }
};

export const generateWorld = (generateTrampolines, generateClouds, world, chicken, background) => {
  if (world.cameraMoveCounter < -1000) {
    generateClouds(5, chicken.y - 1000, background);
    generateTrampolines(5, chicken.y - 1100, background);
    generateTrampolines(5, chicken.y - 1200, background);
    generateTrampolines(5, chicken.y - 1300, background);
    generateTrampolines(5, chicken.y - 1400, background);
    generateTrampolines(5, chicken.y - 1500, background);
    generateTrampolines(5, chicken.y - 1600, background);
    generateTrampolines(5, chicken.y - 1700, background);
    generateTrampolines(5, chicken.y - 1800, background);
    generateTrampolines(5, chicken.y - 1900, background);
    generateTrampolines(5, chicken.y - 2000, background);
    world.cameraMoveCounter = 0;
  }
};
