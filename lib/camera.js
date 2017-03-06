export const moveCamera = (world, chicken) => {
  if (chicken.y !== window.innerHeight * 0.55) {
    world.cameraMoveCounter += world.y - (window.innerHeight * 0.55 -chicken.y);
    world.y = window.innerHeight * 0.55 - chicken.y;
  }
};

