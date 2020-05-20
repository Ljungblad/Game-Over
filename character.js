"use strict";

class Character {
  constructor() {
    this.r = 60; // maybe change the name so size instead or r for radius?
    this.x = this.r;
    this.y = 0;
    this.velocity = 0;
    this.gravity = 1;
    this.run = [17, 18, 19, 20, 21, 22];
    this.frameLimit = 6;
    this.frames = 0;
    this.currentLoopIndex = 0;
  }

  // Enables the character to jump from bottom or on a block
  jump() {
    if (
      this.y == height - this.r ||
      height - (this.y + this.r) == platforms[0].height
    ) {
      this.velocity = -20;
    }
  }

  // Gravity of the characters jump
  move() {
    this.y += this.velocity;
    this.velocity += this.gravity;
  }

  show(characterSprite) {
    this.frames++;
    if (this.frames >= this.frameLimit) {
      this.frames = 0;
      this.currentLoopIndex++;
      if (this.currentLoopIndex >= this.run.length) {
        this.currentLoopIndex = 0;
      }
    }
    image(
      characterSprite,
      this.x,
      this.y,
      this.r,
      this.r + 10,
      24 * this.run[this.currentLoopIndex]+1,
      0,
      24
    );
  }

  intersect() {
      for (let i = 0; i < platforms.length; i++) {
        if (
        this.y > platforms[i].height &&
        this.x > platforms[i].x && this.x < platforms[i].x + platforms[i].w
    ) {
      return true;
    }
  }
}

  collide() {
    if (this.y - this.r >= height) {
      return true;
    }
  }
}
