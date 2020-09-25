import './style.css'
import cat from './images/cat.png';
import * as PIXI from 'pixi.js';

function component() {
  var element = document.createElement('div');
  let img = new Image();
  img.src = cat

  element.appendChild(img);

  let type = "WebGL"
  if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
  }

  PIXI.utils.sayHello(type)

  return element;
}

document.body.appendChild(component());