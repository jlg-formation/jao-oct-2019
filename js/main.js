'use strict';

console.log('start');

//
const elt = document.querySelector('svg.s1');
const funnyCircle = new FunnyCircle(elt);
funnyCircle.configure({
  numPoint: 800,
  factor: 4,
  showPoint: true,
});
funnyCircle.draw();



// command
const command = new Command(funnyCircle);
command.add('numPoint');
command.add('factor');







