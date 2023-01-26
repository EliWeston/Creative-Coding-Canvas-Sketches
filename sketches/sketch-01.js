const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000, 1000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005;

      const w = width * 0.05;
      const h = height * 0.05;
      const gap = width * 0.01;
      const ix = width * 0.02;
      const iy = height * 0.02;
      let x, y;

      const fillSquareOffset = width * 0.015
      const openSquareOffset = width * 0.0165

      for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++){

          x = ix + (w + gap) * i;
          y = iy + (h + gap) * j;

          if (Math.random() > 0.4) {
            if (Math.random() > 0.9) {
              context.fillStyle = 'white';
            } else if (Math.random() > 0.8) {
              context.fillStyle = 'orange';
            } else if (Math.random() > 0.7) {
              context.fillStyle = 'red';
            } else if (Math.random() > 0.6) {
              context.fillStyle = 'blue';
            } else if (Math.random() > 0.6) {
              context.fillStyle = 'green';
            } else if (Math.random() > 0.5) {
              context.fillStyle = 'purple';
            } else if (Math.random() > 0.5) {
              context.fillStyle = 'teal';
            } else {
              context.fillStyle = 'gray';
            }
            context.beginPath();
            context.roundRect(x + fillSquareOffset / 2, y + fillSquareOffset/2, w - fillSquareOffset, h - fillSquareOffset, [4]);
            context.fill();
            }

          if (Math.random() > 0.4) {
            if (Math.random() > 0.9) {
              context.strokeStyle = 'white';
            } else if (Math.random() > 0.8) {
              context.strokeStyle = 'orange';
            } else if (Math.random() > 0.7) {
              context.strokeStyle = 'red';
            } else if (Math.random() > 0.6) {
              context.strokeStyle = 'blue';
            } else if (Math.random() > 0.6) {
              context.strokeStyle = 'green';
            } else if (Math.random() > 0.5) {
              context.strokeStyle = 'purple';
            } else if (Math.random() > 0.5) {
              context.strokeStyle = 'teal';
            } else {
              context.strokeStyle = 'gray';
            }
            context.beginPath();
            context.roundRect(x + openSquareOffset, y + openSquareOffset, w/3, h/3, [2]);
            context.stroke();
            }

          if(Math.random() > 0.5){
            if (Math.random() > 0.9) {
              context.strokeStyle = 'white';
            } else if (Math.random() > 0.8) {
              context.strokeStyle = 'orange';
            } else if (Math.random() > 0.7) {
              context.strokeStyle = 'red';
            } else if (Math.random() > 0.6) {
              context.strokeStyle = 'blue';
            } else if (Math.random() > 0.6) {
              context.strokeStyle = 'green';
            } else if (Math.random() > 0.5) {
              context.strokeStyle = 'purple';
            } else if (Math.random() > 0.5) {
              context.strokeStyle = 'teal';
            } else {
              context.strokeStyle = 'gray';
            }
            context.beginPath();
            context.roundRect(x, y, w, h, [4]);
            context.stroke();
            }
        }
      }
  };
};

canvasSketch(sketch, settings);
