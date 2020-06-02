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

  const matrix = nodes.map(({name: target}) => {
    return nodes.map(({name: source}) => {
        return links.find(d => d.source === source && d.target === target) ? 1 : 0;
    });
});


const main = d3.select('main');
main.append('h1').text('D3 Chord');
main.append('p').text('A circular pattern and nice-flowing ribbons.');

const colorScale = d3.schemeSet2;
const size = 300;
const padding = 80;
const border = 15;

const svg = d3.select('main').append('svg')
  .attr('viewBox', `-${size / 2} -${size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

const chord = d3.chord().padAngle(0.01);


const chordData = chord(matrix);
const ribbon = d3.ribbon().radius((size - padding - border * 1.2) / 2);
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
  .attr('fill', (d, i) => colorScale[d.target.index % colorScale.length])
  .style('opacity', d => {
      return 0.75;
  });

  svg
  .selectAll('g')
  .append('path')
  .attr('d', (d) => {
    arc.startAngle(d => d.source.startAngle).endAngle(d => d.source.endAngle);
    return arc(d);
  })
  .attr('fill', (d, i) => colorScale[i % colorScale.length]);

  svg
  .selectAll('g')
  .append('text')
  .attr('font-size', 8)
  .attr('text-anchor', 'middle')
    .attr('transform', d => {
        arc.startAngle(d => d.source.startAngle).endAngle(d => d.source.endAngle).outerRadius(size / 2);
    const [x, y] = arc.centroid(d);
    return `translate(${x} ${y})`;
  })
  .text((d, i) => nodes[i].name);

