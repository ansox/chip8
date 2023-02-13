import CPU from "./cpu.js";
import Keyboard from "./keyboard.js";
import Renderer from "./renderer.js";
import Speaker from "./speaker.js";

const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker);

let loop;

let fps = 60, fpsInterval, startTime, then, elapsed;

function init() {
  fpsInterval = 1000 / fps;

  then = Date.now();
  startTime = then;

  cpu.loadSpritesIntoMemory();
  cpu.loadRom('HEX');

  loop = requestAnimationFrame(step);
}

function step() {
  const now = Date.now();
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    cpu.cycle();
  }

  loop = requestAnimationFrame(step);
}

init();