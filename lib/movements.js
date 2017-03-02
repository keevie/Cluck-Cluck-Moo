export const moveWithMouse = (stage, chicken, e) => {
  if (Math.round(chicken.x + chicken.regX - 5) > Math.round(stage.mouseX)) {
    chicken.x -= 6;
  }
  else if (Math.round(chicken.x + chicken.regX + 5) < Math.round(stage.mouseX)) {
    chicken.x += 6;
  }
};

export const bounce = (chicken) => {
  chicken.yVelocity = -5;
};

export const fallWithGravity = (chicken) => {
  // if (chicken.y >= 250) {
  //   chicken.yVelocity = 0;
  // }
  chicken.y += chicken.yVelocity;
  chicken.yVelocity += 0.1;
};
