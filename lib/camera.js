export const moveCamera = (world, chicken) => {
  if (chicken.y !== window.innerHeight * 0.5) {
    world.cameraMoveCounter += world.y - (window.innerHeight * 0.5 -chicken.y);
    world.y = window.innerHeight * 0.5 - chicken.y;
  }
};

