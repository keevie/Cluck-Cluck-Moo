import { bounce } from './movements';

export const checkCollisions = (chicken, trampolines, stage) => {
  const chickenMaxX = chicken.x + chicken.getTransformedBounds().width;
  const chickenMaxY = chicken.y + chicken.getTransformedBounds().height;

  return trampolines.forEach((trampoline, index) => {
    const trampolineMaxX = trampoline.x
      + trampoline.getTransformedBounds().width;
    const trampolineMaxY = trampoline.y
      + trampoline.getTransformedBounds().height;


    if (!(chickenMaxX < trampoline.x
      || trampolineMaxX < chicken.x
      || chickenMaxY < trampoline.y
      || trampolineMaxY < chicken.y
    ))
    {
      stage.removeChild(trampoline);
      bounce(chicken);
      createjs.Sound.play('boing');
      trampolines.splice(index, 1);
    }
  });
};




