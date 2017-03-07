export const moveWithMouse = (stage, chicken, e) => {
  if (Math.round(chicken.x - 5) > Math.round(stage.mouseX)) {
    chicken.x -= 6 * Math.abs((chicken.x - stage.mouseX) * 0.01);
    chicken.scaleX = -1;
  }
  else if (Math.round(chicken.x + 5) < Math.round(stage.mouseX)) {
    chicken.x += 6 * Math.abs((chicken.x - stage.mouseX) *0.01);
    chicken.scaleX = 1;
  }
};

export const bounce = (chicken) => {
  chicken.yVelocity = -10;
};

export const jump = (chicken) => {
  if (chicken.y === 325) {
    chicken.y = 324;
    chicken.yVelocity = -12;
  }
};

export const fallWithGravity = (chicken) => {
  if (chicken.y < 325) {
    chicken.y += chicken.yVelocity;
    chicken.yVelocity += 0.2;
  }
  else {
    chicken.y = 325;
  }
};

export const moveCows = (cows) => {
  cows.forEach(function (cow) {
    if (cow.x > 730) {
      cow.scaleX = 0.25;
      cow.direction = 'left';
    }
    else if (cow.x < 0) {
      cow.scaleX = -0.25;
      cow.direction = 'right';
    }
    if (cow.direction === 'right') {
      cow.x += 3;
    }
    else {
      cow.x -= 3;
    }
  });
};
