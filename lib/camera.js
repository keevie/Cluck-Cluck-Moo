export const moveCamera = (world, chicken) => {
  if (chicken.y !== 663 * 0.55) {
    world.cameraMoveCounter += world.y - (663 * 0.55 -chicken.y);
    world.y = 663 * 0.55 - chicken.y;
  }
};

