console.log('start');

const svgns = "http://www.w3.org/2000/svg";

const total = 10;
const svg = document.querySelector('svg');
const step = 360 / total;
for (let i = 0; i < total; i++) {
  const angle = step * i * Math.PI / 180;
  const cx = 500 + 400 * Math.cos(angle);
  const cy = 500 + 400 * Math.sin(angle);
  const circle = document.createElementNS(svgns, 'circle');
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', 10);
  circle.setAttribute('class', 'tick');
  svg.appendChild(circle);

}
