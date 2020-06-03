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

// change the dimensions according to the gap between the nodes, and the number of nodes itself
const gap = 30;

const padding = {
  top: 20,
  right: 20,
  bottom: 150,
  left: 20,
};

const width = nodes.length * gap;
// for the height consider the syntax of the d attribute for the path elements
// the steeper the arc, the taller the container
const height = width * 0.4;

const svg = main
  .append('svg')
  .attr('width', width + (padding.left + padding.right))
  .attr('height', height + (padding.top + padding.bottom))
  .attr(
    'viewBox',
    `-${padding.left} -${padding.top + height} ${width +
      (padding.left + padding.right)} ${height +
      (padding.top + padding.bottom)}`
  );

const scaleX = d3
  .scaleBand()
  .domain(nodes)
  .range([0, width]);

const scaleColor = d3.schemeSet2;

svg.attr('transform', `translate(${scaleX.bandwidth() / 2} 0)`);

// links
svg.append('g').attr('class', 'links');

d3.select('.links')
  .selectAll('path.link')
  .data(links)
  .enter()
  .append('path')
  .attr('class', 'link')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr(
    'stroke',
    ({ source }) =>
      scaleColor[nodes.findIndex(d => d === source) % scaleColor.length]
  )
  .attr('stroke-width', 3)
  .attr('d', ({ source, target }) => {
    const x0 = scaleX(source);
    const x1 = scaleX(target);
    return `M ${x0} 0 A ${(x1 - x0) / 2} ${(x1 - x0) / 2} 0 0 1 ${x1} 0`;
  });

// nodes
svg.append('g').attr('class', 'nodes');

d3.select('.nodes')
  .selectAll('g.node')
  .data(nodes)
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', d => `translate(${scaleX(d)} 0)`)
  .attr('fill', (d, i) => scaleColor[i % scaleColor.length]);

d3.selectAll('g.node')
  .append('circle')
  .attr('r', 7);

d3.selectAll('g.node')
  .append('text')
  .attr('y', 15)
  .style('writing-mode', 'vertical-rl')
  .style('font-weight', '900')
  .style('text-shadow', '0 0 5px -4px hsl(0, 0%, 0%)')
  .text(d => d);

// animate only if the media query doesn't specify reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);
if (!prefersReducedMotion.matches) {
  // nodes in opacity of the circle element
  d3.selectAll('g.node')
    .style('opacity', 0)
    .transition()
    .duration(150)
    .delay((d, i) => 50 * i)
    .style('opacity', 1);
  d3.selectAll('g.node circle')
    .style('transform', 'scale(0)')
    .transition()
    .duration(150)
    .delay((d, i) => 50 * i)
    .style('transform', 'scale(1)');

  // links in stroke-dashoffset
  // ! use the function keyword to have access to "this"
  d3.selectAll('path.link')
    .attr('stroke-dasharray', function() {
      return this.getTotalLength();
    })
    .attr('stroke-dashoffset', function() {
      return this.getTotalLength();
    })
    .transition()
    .ease(d3.easeQuadOut)
    .duration(500)
    .delay((d, i) => 400 * i + (50 * nodes.length + 150))
    .attr('stroke-dashoffset', 0);
}
