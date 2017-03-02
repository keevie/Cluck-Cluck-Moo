export const moveWithMouse = (stage, chicken, e) => {
  if (Math.round(chicken.x) > Math.round(stage.mouseX)) {
    chicken.x -= 6;
  }
  else if (Math.round(chicken.x) < Math.round(stage.mouseX)) {
    chicken.x += 6;
  }
};

export const fallWithGravity = (chicken) => {
  chicken.y += chicken.yVelocity;
  chicken.yVelocity += 0.1;
};
