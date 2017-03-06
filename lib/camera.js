export const moveCamera = (world, chicken) => {
  if (chicken.y >= 289) {
    world.y = 130;
    // if (world.y < 130 || world.y > 131) {

    //   world.y += 2;
    // }
    return;
  }
  if (chicken.y !== window.innerHeight * 0.5) {
    world.cameraMoveCounter += world.y - (window.innerHeight * 0.5 -chicken.y);
    world.y = window.innerHeight * 0.5 - chicken.y;
  }
};

