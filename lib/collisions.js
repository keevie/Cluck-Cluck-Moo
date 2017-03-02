export const checkCollisions = (chicken, trampolines) => {
  const chickenMaxX = chicken.x + chicken.getTransformedBounds().width;
  const chickenMaxY = chicken.y + chicken.getTransformedBounds().height;

  trampolines.forEach((trampoline) => {
    const trampolineMaxX = trampoline.x
      + trampoline.getTransformedBounds().width;
    const trampolineMaxY = trampoline.y
      + trampoline.getTransformedBounds().height;


    if (!(chickenMaxX < trampoline.x
      || trampolineMaxX < chicken.x
      || chickenMaxY < trampoline.y
      || trampolineMaxY < chicken.y
    )) {
      createjs.Sound.play('boing');
      console.log('collision!');
    }
  });
};
