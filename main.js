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
const range = document.querySelector('.command input');
const div = document.querySelector('div.numPoint');
range.addEventListener('input', function(event) {
  console.log('input %O', event.target.valueAsNumber);
  div.innerHTML = event.target.valueAsNumber;
  funnyCircle.configure({
    numPoint: event.target.valueAsNumber
  });
  funnyCircle.draw();
});


