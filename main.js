console.log('start');

//
const elt = document.querySelector('svg.s1');
const funnyCircle = new FunnyCircle(elt);
funnyCircle.configure({
  numPoint: 10,
  factor: 2,
  showPoint: true,
});
funnyCircle.draw();

const elt2 = document.querySelector('svg.s2');
const funnyCircle2 = new FunnyCircle(elt2);
funnyCircle2.configure({
  numPoint: 100,
  factor: 20,
  showPoint: false,
});
funnyCircle2.draw();
