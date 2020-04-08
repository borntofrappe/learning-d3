const {
  randomNormal,
  curveCatmullRom,
  bin,
  select,
  line,
  area,
  scaleLinear,
  scalePoint,
  extent,
} = d3;

// INTRODUCTORY HTML
const root = select('#root');

const header = root.append('header');
header.append('h1').text('Random Normal');

header
  .append('p')
  .html(
    'Exploring the <code>d3-random</code> module and a <strong>normal distribution</strong>'
  );

// VISUALIZATION
// starting from an arbitrary set of values
const input = {
  mu: 0,
  sigma: 1,
  points: 500,
};

// sort the observations in ascending order
let data = Array(input.points)
  .fill()
  .map(() => randomNormal(input.mu, input.sigma)())
  .sort((a, b) => a - b);

const main = root.append('main');

const margin = 20;
const width = 600;
const height = 400;

const svg = main
  .append('svg')
  .attr(
    'viewBox',
    `${-margin} ${-margin} ${width + margin * 2} ${height + margin * 2}`
  );

// use the bin function and the height of the containers to plot the desired shape
const binGenerator = bin().domain(extent(data));
let binData = binGenerator(data);

const xScale = scalePoint()
  .domain(binData)
  .range([0, width]);

const yScale = scaleLinear()
  .domain(extent(binData, d => d.length))
  .range([height, 0])
  .nice();

const lineGenerator = line()
  .x(d => xScale(d))
  .y(d => yScale(d.length))
  .curve(curveCatmullRom);

const areaGenerator = area()
  .x(d => xScale(d))
  .y0(d => yScale(0))
  .y1(d => yScale(d.length))
  .curve(curveCatmullRom);

svg
  .append('path')
  .attr('class', 'line')
  .attr('clip-path', 'url(#clip)')
  .attr('stroke', 'hsl(5, 90%, 70%)')
  .attr('stroke-width', '10')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none')
  .attr('d', lineGenerator(binData));

svg
  .append('path')
  .attr('class', 'area')
  .attr('clip-path', 'url(#clip)')
  .attr('stroke', 'none')
  .attr('fill', 'hsl(8, 95%, 80%)')
  .attr('d', areaGenerator(binData));

// LEGEND
// above the visualization
const entries = Object.entries(input);
const lineHeight = 32;

const legend = svg.append('g');

legend
  .selectAll('text')
  .data(entries)
  .enter()
  .append('text')
  .attr('id', ([key]) => `legend-${key}`)
  .attr('y', (d, i) => i * lineHeight)
  .attr('font-size', '18')
  .style('text-transform', 'capitalize')
  .text(([key, value]) => `${key}: ${value}`);

// following the input event in the form element update the data set and the necessary elements
function updateData(i) {
  data = Array(parseInt(i.points))
    .fill()
    .map(() => randomNormal(i.mu, i.sigma)())
    .sort((a, b) => a - b);

  binGenerator.domain(extent(data));
  binData = binGenerator(data);

  xScale.domain(binData);
  yScale.domain(extent(binData, d => d.length));

  select('#legend-points').text(`Points: ${i.points}`);
  select('path.line').attr('d', lineGenerator(binData));
  select('path.area').attr('d', areaGenerator(binData));
}

// allow to change the number of points with an input of type range
const form = main
  .append('form')
  .on('submit', e => e.preventDefault())
  .on('input', function() {
    input.points = this.points.value;
    updateData(input);
  });

form
  .append('input')
  .attr('type', 'range')
  .attr('id', 'points')
  .attr('name', 'points')
  .attr('min', 10)
  .attr('max', 1000)
  .attr('step', 1)
  .attr('value', input.points);

// CLOSING LINKS
root.append('h2').text('Useful Links');
const links = root.append('ul');
links
  .append('li')
  .append('a')
  .attr('href', 'https://github.com/d3/d3-random')
  .append('code')
  .text('d3.random');
links
  .append('li')
  .append('a')
  .attr('href', 'https://en.wikipedia.org/wiki/Normal_distribution')
  .text('Normal Distribution');
