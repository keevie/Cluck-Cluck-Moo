# JS Project Proposal: ChickenBells

## Background

Chickenbells is a slight variation on the classic game by the independent developer Orisinal, itself a variation on the infinitely jumping upwards on platforms genre.

User is a chicken, jumping on a trampoline, trying to get to the top. Touching a trampoline will catapult the chicken upwards into the air far enough to reach the next trampoline, but if it doesn't get there before it falls below the line, the game is over. If you jump on a cow, your score doubles.

## Functionality & MVP

Users control the chicken with the mouse, moving side to side trying to touch a trampoline.

Game keeps track of high scores, and allows users to reset the game state after losing.

This game will include an instructions popup on original game load explaining the rules and controls, as well as a nice production readme with details.

## Wireframes
![wireframe][wireframe]

[wireframe]: ./wireframe.png

## Architecture and Technologies

This project will use `Easel.js` and `HTML5 canvas` to render an interactive game, and webpack to bundle the game files.

There will be 4 files/classes in addition to the webpack entry file.

1. `board.js`: handles core logic, rendering, keeping track of score, collision detection.
2. `chicken.js`: handles the main character logic, as well as its animations.
3. `trampoline.js`: handles the trampolines and their animation.
4. `cow.js`: handles the cows and their animation.

## Implementation Timeline

### Day One:

Learn about `Easel.js` and how to do collision detection.

### Day Two:

Write the core game and its logic.

### Day Three:

Work on animations and smoothing out the ui.

## Bonus features

1. Really nice animations. 
2. Sound--both background music and sound effects.
3. Levels.
