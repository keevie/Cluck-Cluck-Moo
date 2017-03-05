import { bounce } from './movements';

export const checkCollisions = (chicken,
  trampolines, background, displayScore) => {
  const chickenMaxX = chicken.x + chicken.getTransformedBounds().width;
  const chickenMaxY = chicken.y + chicken.getTransformedBounds().height;


  return trampolines.forEach((trampoline, index) => {
    const trampolineCoords = trampoline
      .localToGlobal(trampoline.x, trampoline.y);

    //these offset numbers are half the size of the chicken.
    const trampolineMaxX = trampoline.x
      + trampoline.getTransformedBounds().width// -37.5;
    const trampolineMaxY = trampoline.y
      + trampoline.getTransformedBounds().height// - 31.25;

    if (!(chickenMaxX < trampoline.x// - 37.5
      || trampolineMaxX < chicken.x
      || chickenMaxY < trampoline.y// - 31.25
      || trampolineMaxY < chicken.y
    ))
    {
      background.removeChild(trampoline);
      bounce(chicken);
      chicken.score += 100;
      displayScore.text = chicken.score;
      createjs.Sound.play('boing');
      trampolines.splice(index, 1);
    }
  });
};




