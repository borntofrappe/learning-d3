const data = [
  { name: 'Michael', lines: 9048, episodes: 139 },
  { name: 'Dwight', lines: 5577, episodes: 188 },
  { name: 'Jim', lines: 5019, episodes: 188 },
  { name: 'Pam', lines: 4077, episodes: 188 },
  { name: 'Andy', lines: 2906, episodes: 152 },
  { name: 'Angela', lines: 1258, episodes: 188 },
  { name: 'Kevin', lines: 1207, episodes: 188 },
  { name: 'Erin', lines: 1111, episodes: 102 },
  { name: 'Oscar', lines: 1036, episodes: 177 },
  { name: 'Ryan', lines: 1005, episodes: 168 },
  { name: 'Darryl', lines: 915, episodes: 120 },
  { name: 'Phyllis', lines: 830, episodes: 188 },
  { name: 'Jan', lines: 750, episodes: 42 },
  { name: 'Toby', lines: 714, episodes: 142 },
  { name: 'Kelly', lines: 689, episodes: 161 },
  { name: 'Stanley', lines: 544, episodes: 188 },
  { name: 'Meredith', lines: 459, episodes: 187 },
  { name: 'Holly', lines: 452, episodes: 17 },
  { name: 'David', lines: 421, episodes: 37 },
  { name: 'Nellie', lines: 363, episodes: 34 },
  { name: 'Creed', lines: 336, episodes: 180 },
  { name: 'Gabe', lines: 334, episodes: 51 },
  { name: 'Robert', lines: 301, episodes: 25 },
  { name: 'Karen', lines: 290, episodes: 26 },
  { name: 'Charles', lines: 209, episodes: 7 },
  { name: 'Roy', lines: 205, episodes: 31 },
  { name: 'Clark', lines: 196, episodes: 19 },
  { name: 'Jo', lines: 182, episodes: 8 },
  { name: 'Deangelo', lines: 150, episodes: 4 },
  { name: 'Pete', lines: 143, episodes: 21 },
  { name: 'Packer', lines: 137, episodes: 15 },
  { name: 'Carol', lines: 90, episodes: 7 },
  { name: 'Donna', lines: 81, episodes: 5 },
  { name: 'Katy', lines: 79, episodes: 3 },
  { name: 'Danny', lines: 68, episodes: 2 },
  { name: 'Josh', lines: 53, episodes: 8 },
  { name: 'Val', lines: 50, episodes: 14 },
  { name: 'Helene', lines: 48, episodes: 8 },
  { name: 'Nate', lines: 45, episodes: 19 },
  { name: 'Senator', lines: 43, episodes: 14 },
  { name: 'Hank', lines: 32, episodes: 22 },
  { name: 'Trevor', lines: 31, episodes: 2 },
  { name: 'Grotti', lines: 30, episodes: 1 },
  { name: 'Cathy', lines: 29, episodes: 12 },
  { name: 'Brian', lines: 25, episodes: 5 },
  { name: 'Nick', lines: 22, episodes: 5 },
  { name: 'Jada', lines: 22, episodes: 3 },
  { name: 'Alice', lines: 19, episodes: 1 },
  { name: 'Mose', lines: 18, episodes: 13 },
  { name: 'Lonny', lines: 16, episodes: 3 },
  { name: 'Zeke', lines: 13, episodes: 3 },
  { name: 'Rolf', lines: 12, episodes: 4 },
  { name: 'Vikram', lines: 10, episodes: 2 },
];

d3
  .select('#wrapper')
  .append('h1')
  .text('That\'s how much they said');

d3
  .select('#wrapper')
  .append('p')
  .html('Lines spoken <button>per episode</button><button id="active">the entire series</button> by characters who appeared in at least six episodes.');

// const xAccessor = d => (d.lines / d.episodes);
const xAccessor = d => d.lines;
const yAccessor = d => d.name;

const dimensions = {
  width: 800,
  height: 1000,
  margin: {
    top: 25,
    right: 50,
    bottom: 10,
    left: 60,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const wrapper = d3
  .select('#wrapper')
  .append('svg')
  .attr('width', dimensions.width)
  .attr('height', dimensions.height)

wrapper
  .attr('tabindex', '0')
  .attr('role', 'figure');

wrapper
  .append('title')
  .text('Bar chart hihglighting the number of lines')

const bounds = wrapper
  .append('g')
  .attr(
    'transform',
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

bounds
  .attr('tabindex', '0')
  .attr('role', 'list')
  .attr('aria-label', 'Bars ');

const groupAxis = bounds.append('g');
const groupBars = bounds.append('g');

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, xAccessor)])
  .range([0, dimensions.boundedWidth]);

const xAxisGenerator = d3.axisTop().scale(xScale).tickSize(0).tickPadding(5);

groupAxis
  .append('g')
  .call(xAxisGenerator)
  .selectAll('g.tick')
  .append('line')
  .attr('x1', 0)
  .attr('x2', 0)
  .attr('y1', 0)
  .attr('y2', dimensions.boundedHeight)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 0.5)
  .attr('stroke-dasharray', '4 6')
  .attr('opacity', 0.5)

const yScale = d3
  .scaleBand()
  .domain(data.map(yAccessor))
  .range([0, dimensions.boundedHeight])
  .padding(0.2);

const yAxisGenerator = d3.axisLeft().scale(yScale).tickSize(0).tickPadding(5);

groupAxis.append('g').call(yAxisGenerator);

groupAxis
    .selectAll('text')
    .attr('font-size', 12);

groupAxis
  .selectAll('path')
  .remove()

const groupsBar = groupBars
  .append('g')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')

  groupsBar
  .attr('tabindex', '0')
  .attr('role', 'listitem')
  .attr('aria-label', d => `${yAccessor(d)} spoke ${xAccessor(d)} lines`);

groupsBar
  .append('rect')
  .attr('x', 0)
  .attr('y', d => yScale(yAccessor(d)))
  .attr('width', d => xScale(xAccessor(d)))
  .attr('height', yScale.bandwidth())
  .attr('fill', '#e7962a');
