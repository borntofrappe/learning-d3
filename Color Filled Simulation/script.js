// use the hsl() format with a hard coded lightness and saturation value
// the hue depends on the position of the cursor
const initialHue = 0;
const lightness = 95;
const saturation = 55;
const initialColor = `hsl(${initialHue}, ${lightness}%, ${saturation}%)`;
const data = [{ color: initialColor }];

const size = 500;
const circleSize = 6;

const svg = d3
  .select('body')
  .append('svg')
  .attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

// add an arbitrary number of circles around the center
// try with >300 :p
const circles = 30;
svg
  .selectAll('circle')
  .data(Array(circles).fill())
  .enter()
  .append('circle')
  .attr(
    'fill',
    (d, i, { length }) =>
      `hsl(${(360 / length) * i}, ${lightness}%, ${saturation}%)`
  )
  .attr(
    'transform',
    (d, i, { length }) =>
      `rotate(${(360 / length) * i}) translate(0 ${-size / 2 +
        circleSize}) rotate(${(360 / length) * i * -1})`
  )
  .attr('r', circleSize);

// triangular cursor
// by default pointing downwards
const cursor = svg
  .append('path')
  .attr('d', 'M -15 -10 h 30 l -15 30 z')
  .attr('fill', 'none')
  .attr('stroke-width', 5)
  .attr('stroke-linecap', 'round')
  .attr('stroke-linejoin', 'round')
  .attr('stroke', initialColor);

// scale the cursor into view
// ! if you add the instruction to the previous block, the cursor holds a reference to the transition and not the element
cursor
  .attr('transform', 'scale(0)')
  .transition()
  .attr('transform', 'scale(1)');

// group for the simulation
const group = svg.append('g');

// function called on.tick
function plotData(data) {
  group
    .selectAll('circle')
    .data(data)
    .join(
      enter => {
        enter
          .append('circle')
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
          .attr('fill', d => d.color || 'currentColor')
          .attr('r', 0)
          .transition()
          .attr('r', circleSize);
      },
      update => {
        update.attr('cx', d => d.x).attr('cy', d => d.y);
        // necessary given the transtion on .enter
        return undefined;
      }
    );
}

// first simulation
// since there's a single data point, no forces are necessary
const simulation = d3.forceSimulation(data).on('tick', () => plotData(data));

// INTERACTION
// following the mousemove event update the position and color of the cursor
svg.on('mousemove', function() {
  const [x, y] = d3.mouse(this);

  let angle = (Math.atan(Math.abs(x) / Math.abs(y)) * 180) / Math.PI;
  if (x < 0 && y < 0) {
    angle = 360 - angle;
  }
  if (x < 0 && y > 0) {
    angle += 180;
  } else if (x > 0 && y > 0) {
    angle = 180 - angle;
  }

  const hue = Math.round(angle);
  const color = `hsl(${hue}, ${lightness}%, ${saturation}%)`;

  cursor
    .attr('transform', `translate(${x} ${y}) rotate(${angle})`)
    .attr('stroke', color);

  // add data-* attributes for the click event
  // this way you don't have to find the values anew
  svg.attr('data-x', x);
  svg.attr('data-y', y);
  svg.attr('data-color', color);
});

svg.on('click', function(e) {
  // ! x and y are returned as string, so be sure to parse the values
  const { x, y, color } = this.dataset;

  data.push({ x: parseFloat(x), y: parseFloat(y), color });

  // restart the simulation with the new dataset
  // set up forces to push the elements toward the center
  simulation
    .nodes(data)
    .alpha(1)
    .force('center', d3.forceCenter(0, 0))
    .force('forceX', d3.forceX(0).strength(0.1))
    .force('forceY', d3.forceY(0).strength(0.1))
    .force('charge', d3.forceManyBody().strength(-40))
    .force('collision', d3.forceCollide().radius(circleSize * 2))
    .restart();
});
