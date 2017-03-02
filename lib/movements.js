export const moveWithMouse = (stage, chicken, e) => {
  if (chicken.x > stage.mouseX) {
    chicken.x -= 6;
  }
  else if (chicken.x < stage.mouseX) {
    chicken.x += 6;
  }
  else {
    chicken.x += 0;
  }
};

