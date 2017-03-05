export const moveWithMouse = (stage, chicken, e) => {
  if (Math.round(chicken.x + chicken.regX - 5) > Math.round(stage.mouseX)) {
    chicken.x -= 6 * Math.abs((chicken.x - stage.mouseX) * 0.01);
  }
  else if (Math.round(chicken.x + chicken.regX + 5) < Math.round(stage.mouseX)) {
    chicken.x += 6 * Math.abs((chicken.x - stage.mouseX) *0.01);
  }
};

export const bounce = (chicken) => {
  chicken.yVelocity = -10;
};

export const fallWithGravity = (chicken) => {
  chicken.y += chicken.yVelocity;
  chicken.yVelocity += 0.2;
};

export const moveCows = (cows) => {
  cows.forEach(function (cow) {
    if (cow.x > 730) {
      cow.direction = 'left';
    }
    else if (cow.x < 0) {
      cow.direction = 'right';
    }
    if (cow.direction === 'right') {
      cow.x += 2;
    }
    else {
      cow.x -= 2;
    }
  });
};
