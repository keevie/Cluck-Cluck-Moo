export const moveWithMouse = (stage, chicken, e) => {
  if (Math.round(chicken.x + chicken.regX - 5) > Math.round(stage.mouseX)) {
    chicken.x -= 6;
  }
  else if (Math.round(chicken.x + chicken.regX + 5) < Math.round(stage.mouseX)) {
    chicken.x += 6;
  }
};

export const bounce = (chicken) => {
  chicken.yVelocity = -10;
};

export const fallWithGravity = (chicken) => {
  chicken.y += chicken.yVelocity;
  chicken.yVelocity += 0.2;
};
