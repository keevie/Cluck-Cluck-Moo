# Cluck Cluck Moo!
#### [Play Cluck Cluck Moo Now!][live]


![Image of gameplay][demo]

## Overview

Cluck Cluck Moo is an infinitely scrolling vertical jumping game, inspired by classics like PapiJump and the amazing [Winterbells][winterbells].

Cluck Cluck Moo is easy to learn but hard to master: the controls are as simple as moving the mouse, but will still easily eat up hours of your time as you try to reach a new high score.

## Libraries and Technologies used

* JavaScript
  * All core game logic
* Easel<i></i>.js
  * Animate sprites, load files, play sounds, and track framerate
* jQuery
  * Simple DOM manipulation 
* Firebase
  * Track high scores globally
* [Cookies.js][cookies]
  * Track personal high scores

## Implementation Details
Uses a promise object to check global high score before resolving the promise and drawing high scores on screen.
```javascript
  let highScore;
  getScore().then((score) => {
    highScore = score;
    let newHighScore = false;
    if (chicken.score > highScore) {
      updateScore(chicken.score);
      highScore = chicken.score;
      newHighScore = true;
    }
    drawScoreBox(chicken, highScore, newHighScore);
  });
```
Additionally checks local high score by reading from a cookie.
```javascript
  const getPersonalHighScore = (chicken) => {
    const highScore = docCookies
      .getItem('highScore') || chicken.score;
    if (chicken.score > highScore) {
      docCookies.setItem('highScore', `${chicken.score}`);
    }
    return highScore;
  };
```

## Future Features

* Global Leaderboard stored in firebase.


[demo]: https://media.giphy.com/media/xUPGcpN3tA1gKNIddS/giphy.gif
[live]: https://danieldyssegaardkallick.com/Cluck-Cluck-Moo
[winterbells]: http://www.ferryhalim.com/orisinal/g3/bells.htm
[cookies]: https://github.com/madmurphy/cookies.js
