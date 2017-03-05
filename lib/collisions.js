import { bounce } from './movements';

export const checkCollisions = (chicken,
  collidables, background, displayScore) => {
  const chickenMaxX = chicken.x + chicken.getTransformedBounds().width;
  const chickenMaxY = chicken.y + chicken.getTransformedBounds().height;


  collidables.forEach((collidable, index) => {
    const trampolineCoords = collidable
      .localToGlobal(collidable.x, collidable.y);

    //these offset numbers are half the size of the chicken.
    const collidableMaxX = collidable.x
      + collidable.getTransformedBounds().width;// -37.5;
    const collidableMaxY = collidable.y
      + collidable.getTransformedBounds().height;// - 31.25;

    if (!(chickenMaxX < collidable.x// - 37.5
      || collidableMaxX < chicken.x
      || chickenMaxY < collidable.y// - 31.25
      || collidableMaxY < chicken.y
    ))
    {
      if (collidable.collidableType === 'trampoline') {
        background.removeChild(collidable);
        bounce(chicken);
        chicken.score += 100;
        displayScore.text = chicken.score;
        createjs.Sound.play('boing');
        collidables.splice(index, 1);
      }
      else {
        background.removeChild(collidable);
        bounce(chicken);
        chicken.score *= 2;
        displayScore.text = chicken.score;
        createjs.Sound.play('moo');
        collidables.splice(index, 1);

      }
    }
  });
};




