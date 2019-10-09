import { Command } from './Command';
import { FunnyCircle } from './FunnyCircle';

console.log('start');

//
const elt = document.querySelector<SVGElement>('svg.s1');
const funnyCircle = new FunnyCircle(elt);
funnyCircle.configure({
  numPoint: 100,
  factor: 21,
  showPoint: true,
});
funnyCircle.draw();



// command
const command = new Command(funnyCircle);
command.add('numPoint', funnyCircle.config.numPoint);
command.add('factor', funnyCircle.config.factor);







