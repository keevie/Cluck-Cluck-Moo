import { bounce } from './movements';

export const checkCollisions = (chicken,
  collidables, background, displayScore) => {
  const chickenMaxX = chicken.x + 54;
  const chickenMaxY = chicken.y + 20;

  collidables.forEach((collidable, index) => {
    const collidableMaxX = collidable.x
      + collidable.getTransformedBounds().width;
    const collidableMaxY = collidable.y
      + collidable.getTransformedBounds().height;

    if (!(chickenMaxX < collidable.x
      || collidableMaxX < chicken.x
      || chickenMaxY < collidable.y
      || collidableMaxY < chicken.y
    ))
    {
      if (collidable.collidableType === 'trampoline') {
        background.removeChild(collidable);
        bounce(chicken);
        chicken.score += 100 + chicken.scoreCounter;
        chicken.scoreCounter += 10;
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




