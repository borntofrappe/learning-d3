// manually picked from the settings tab @codepen
const nodes = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Haml' },
  { name: 'Markdown' },
  { name: 'Slim' },
  { name: 'Pug' },
  { name: 'LESS' },
  { name: 'SCSS' },
  { name: 'Sass' },
  { name: 'Stylus' },
  { name: 'PostCSS' },
  { name: 'Babel' },
  { name: 'TypeScript' },
  { name: 'CoffeeScript' },
  { name: 'LiveScript' },
];

// set html as the root node
const links = [
  { source: 'HTML', target: 'CSS' },
  { source: 'HTML', target: 'JavaScript' },
  { source: 'HTML', target: 'Haml' },
  { source: 'HTML', target: 'Markdown' },
  { source: 'HTML', target: 'Slim' },
  { source: 'HTML', target: 'Pug' },
  { source: 'CSS', target: 'LESS' },
  { source: 'CSS', target: 'SCSS' },
  { source: 'CSS', target: 'Sass' },
  { source: 'CSS', target: 'Stylus' },
  { source: 'CSS', target: 'PostCSS' },
  { source: 'JavaScript', target: 'Babel' },
  { source: 'JavaScript', target: 'TypeScript' },
  { source: 'JavaScript', target: 'CoffeeScript' },
  { source: 'JavaScript', target: 'LiveScript' },
];

/* d3.chord() leries on a matrix highlighting the flow between nodes
build a matrix starting from the nodes array, highlighting a connection in reverse order 
[
[0, 0, 0...]
[1, 0, 0...]
...
]
*/
const matrix = nodes.map(({ name: target }) =>
  nodes.map(({ name: source }) =>
    links.find(d => d.source === source && d.target === target) ? 1 : 0
  )
);

const main = d3.select('main');
main.append('h1').text('D3 Chord');
main
  .append('p')
  .text(
    'The module allows to map a network structure with a circular pattern and nice-flowing ribbons.'
  );

const colorScale = d3.schemeSet2;
const size = 300;
const padding = 100;
const border = 15;

const svg = d3
  .select('main')
  .append('svg')
  .attr('viewBox', `-${size / 2} -${size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

const chord = d3.chord().padAngle(0.01);
const chordData = chord(matrix);

// generator function for the paths connecting the nodes
const ribbon = d3.ribbon().radius((size - padding - border * 1.2) / 2);

// generator function for the edges of the visualization
const arc = d3
  .arc()
  .innerRadius((size - padding - border) / 2)
  .outerRadius((size - padding) / 2);

svg
  .selectAll('g')
  .data(chordData)
  .enter()
  .append('g')
  .style('color', (d, i) => colorScale[i % colorScale.length]);

svg
  .selectAll('g')
  .append('path')
  .attr('d', ribbon)
  .attr('fill', d => colorScale[d.target.index % colorScale.length])
  .style('opacity', 0.75);

svg
  .selectAll('g')
  .append('path')
  .attr('d', d => {
    arc
      .startAngle(({ source }) => source.startAngle)
      .endAngle(({ source }) => source.endAngle);
    return arc(d);
  })
  .attr('fill', 'currentColor');

svg
  .selectAll('g')
  .append('text')
  .attr('font-size', 9)
  .attr('text-anchor', 'middle')
  .attr('fill', 'currentColor')
  .style('font-weight', '900')
  .style('text-shadow', '0 0 10px hsl(0, 0%, 0%)')
  .attr('transform', d => {
    arc
      .startAngle(({ source }) => source.startAngle)
      .endAngle(({ source }) => source.endAngle)
      .innerRadius((size - padding) / 2)
      .outerRadius(size / 2);
    const [x, y] = arc.centroid(d);
    return `translate(${x} ${y})`;
  })
  .text((d, i) => nodes[i].name);
