// manually picked from the settings tab @codepen
const nodes = [
'HTML',
'Haml',
'Markdown',
'Slim',
'Pug',
'CSS',
'LESS',
'SCSS',
'Sass',
'Stylus',
'PostCSS',
'JavaScript',
'Babel',
'TypeScript',
'CoffeeScript',
'LiveScript',
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

const main = d3.select('main');
main.append('h1').text('Arc Diagram');
main
  .append('p')
  .text(
    'It\'s possible to draw an arc diagram using only the arc function.'
  );

  // change the dimensions according to the gap between the nodes, and the number of nodes itself
const gap = 30;

const padding = {
    top: 20,
    right: 20,
    bottom: 120,
    left: 20,
}

const width = nodes.length * gap;
// change the height according to the syntax for the arc
// for instance, for a semicircle, have the height match the width
// with a wider-than-taller arc, diminish the height accordingly
const height = width * 0.4;

const svg = main
    .append('svg')
    .attr('width', width + (padding.left + padding.right))
    .attr('height', height + (padding.top + padding.bottom))
    .attr('viewBox', `-${padding.left} -${padding.top + height} ${width + (padding.left + padding.right)} ${height + (padding.top + padding.bottom)}`)

// nodes
const scaleX = d3.scaleBand().domain(nodes).range([0, width]);
svg.attr('transform', `translate(${scaleX.bandwidth() / 2} 0)`)
svg.append('g').attr('class', 'nodes')
d3.select('.nodes').selectAll('g.node').data(nodes).enter().append('g').attr('class', 'node').attr('transform', d => `translate(${scaleX(d)} 0)`);
d3.selectAll('g.node').append('circle').attr('r', 7)
d3.selectAll('g.node').append('text').attr('y', 15).style('writing-mode', 'vertical-rl').text(d => d)

// links
svg.append('g').attr('class', 'links')
d3.select('.links').selectAll('path.link').data(links).enter().append('path')
    .attr('class', 'link')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 3)
    .attr('d', ({source, target}) => {
        const x0 = scaleX(source);
        const x1 = scaleX(target);
        return `M ${x0} 0 A ${(x1 - x0) / 2} ${(x1 - x0) / 2} 0 0 1 ${x1} 0`;
    });
