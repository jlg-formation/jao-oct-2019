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

const coef = 2;
for (let i = 0; i < total; i++) {
  const angle1 = step * i * Math.PI / 180;
  const angle2 = step * i * coef * Math.PI / 180;
  const x1 = 500 + 400 * Math.cos(angle1);
  const y1 = 500 + 400 * Math.sin(angle1);
  const x2 = 500 + 400 * Math.cos(angle2);
  const y2 = 500 + 400 * Math.sin(angle2);
  const line = document.createElementNS(svgns, 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  svg.appendChild(line);
}
