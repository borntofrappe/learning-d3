// DATA
const { randomNormal, curveCatmullRom, bin, select, line, area, scaleLinear, scalePoint, extent, axisBottom, axisLeft, min, max } = d3;

const input = {
  mu: 0,
  sigma: 1,
  points: 500,
};

// INTRODUCTORY HTML
const root = select('#root');

const header = root.append('header')
header
  .append('h1')
  .text('Random Normal');

header
  .append('p')
  .html('Exploring the <code>d3-random</code> module and a <strong>normal distribution</strong>');

// VISUALIZATION
const main = root
  .append('main');

const padding = 18;
const lineHeight = 32;
const width = 600;
const height = 400;

const svg = main
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`);

const entries = Object.entries(input);

const legend = svg
  .append('g')
  .attr('transform', `translate(${padding} ${padding * 2})`);

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

const clipPath = svg.append('defs').append('clipPath');
clipPath
  .attr('id', 'clip')
  .append('rect')
  .attr('width', width)
  .attr('height', height);

const visualization = svg
  .append('g');

const ticks = 8;

const axes = visualization
  .append('g')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '2')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none')
  .attr('opacity', '0.3')
  .attr('stroke-dasharray', '2 10')

axes
  .selectAll('path.x-axis')
  .data(Array(ticks))
  .enter()
  .append('path')
  .attr('class', 'x-axis')
  .attr('d', (d, i, {length}) =>  `M ${width / length * i} 0 v ${height}`);

  axes
  .selectAll('path.y-axis')
  .data(Array(ticks))
  .enter()
  .append('path')
  .attr('class', 'y-axis')
  .attr('d', (d, i, {length}) => `M 0 ${height / length * i} h ${width}`);


visualization
  .append('rect')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '2')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none')
  .attr('width', width)
  .attr('height', height)


  let data = Array(input.points)
    .fill()
    .map(() => randomNormal(input.mu, input.sigma)()).sort((a, b) => a - b);

  let binGenerator = bin().domain(extent(data));
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

    visualization
        .append('path')
        .attr('class', 'line')
        .attr('clip-path', 'url(#clip)')
        .attr('stroke', 'hsl(5, 90%, 70%)')
        .attr('stroke-width', '10')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('fill', 'none')
        .attr('d', lineGenerator(binData));

        visualization
        .append('path')
        .attr('class', 'area')
        .attr('clip-path', 'url(#clip)')
        .attr('stroke', 'none')
        .attr('fill', 'hsl(8, 95%, 80%)')
        .attr('d', areaGenerator(binData));

function updateData(i) {
  data = Array(parseInt(i.points)).fill().map(() => randomNormal(i.mu, i.sigma)()).sort((a, b) => a - b);

  binGenerator = bin().domain(extent(data));
  binData = binGenerator(data);

  xScale.domain(binData);
  yScale.domain(extent(binData, d => d.length))


  select('#legend-points')
    .text(`Points: ${i.points}`);
  select('path.line').transition().attr('d', lineGenerator(binData));
  select('path.area').transition().attr('d', areaGenerator(binData));

}

const range = main
  .append('form')
  .on('submit', (e) => e.preventDefault())
  .on('change', function() {
    input.points = this.points.value;
    updateData(input);

  });

range
  .append('input')
  .attr('type', 'range')
  .attr('id', 'points')
  .attr('name', 'points')
  .attr('min', 10)
  .attr('max', 1000)
  .attr('step', 1)
  .attr('value', input.points)


// CLOSING LINKS
root.append('h2').text('Useful Links');
const links = root.append('ul');
links.append('li').append('a').attr('href', 'https://github.com/d3/d3-random').append('code').text('d3.random')
links.append('li').append('a').attr('href', 'https://en.wikipedia.org/wiki/Normal_distribution').text('Normal Distribution')