// data copied on May 20th 2020 from this website
// https://www.nintendo.co.jp/ir/en/finance/software/index.html
const data = [
  {
    name: 'Mario Kart 8 Deluxe',
    value: 24.77,
  },
  {
    name: 'Super Smash Bros. Ultimate',
    value: 18.84,
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    value: 17.41,
  },
  {
    name: 'Super Mario Odyssey',
    value: 17.41,
  },
  {
    name: 'Pokémon Sword/Pokémon Shield',
    value: 17.37,
  },
  {
    name: "Pokémon: Let's Go, Pikachu!/ Pokémon: Let's Go, Eevee!",
    value: 11.97,
  },
  {
    name: 'Animal Crossing: New Horizons',
    value: 11.77,
  },
  {
    name: 'Splatoon 2',
    value: 10.13,
  },
  {
    name: 'Super Mario Party',
    value: 10.1,
  },
  {
    name: 'New Super Mario Bros. U Deluxe',
    value: 6.6,
  },
];

const names = data.map(({ name }) => name);
const format = d3.format('2');
const total = data.reduce((acc, curr) => acc + curr.value, 0);

const main = d3.select('main');
const header = main.append('header');
header.append('h1').text('Faux 3D');
header
  .append('p')
  .text('The effect is achieved by overlapping semi-transparent SVG elements.');

// scales
const valueScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .nice();

const barScale = d3
  .scaleBand()
  .domain(names)
  .padding(0.5);

const colorScale = d3
  .scaleOrdinal()
  .domain(names)
  .range(d3.schemeTableau10);

const margin = 15;
const size = 500;

valueScale.range([0, size]);
barScale.range([0, size]);
const bandwidth = barScale.bandwidth();

// faux-3d column chart
main
  .append('svg')
  .attr(
    'viewBox',
    `-${margin} -${margin} ${size + margin * 2} ${size + margin * 2}`
  )
  .attr('width', size)
  .attr('height', size)
  .append('g')
  .attr('id', 'column-chart');

d3.select('#column-chart')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'column')
  .attr('color', ({ name }) => colorScale(name))
  .attr(
    'transform',
    ({ name }) => `translate(${barScale(name) + bandwidth / 2} ${size})`
  );

d3.selectAll('.column')
  .append('path')
  .attr('fill', 'currentColor')
  .attr(
    'd',
    ({ value }) =>
      `M -${bandwidth / 2} 0 0 ${bandwidth / 4} ${bandwidth / 2} 0 ${bandwidth /
        2} -${valueScale(value)} 0 -${valueScale(value) +
        bandwidth / 4} -${bandwidth / 2} -${valueScale(value)}`
  );

d3.selectAll('.column')
  .append('path')
  .attr('opacity', 0.4)
  .attr(
    'd',
    ({ value }) =>
      `M -${bandwidth / 2} 0 0 ${bandwidth / 4} 0 -${valueScale(value) -
        bandwidth / 4} -${bandwidth / 2} -${valueScale(value)}`
  );

d3.selectAll('.column')
  .append('text')
  .text(({ name }) => name)
  .attr('text-anchor', 'end')
  .style('writing-mode', 'vertical-lr')
  .attr('font-size', 15)
  .attr('transform', ({ value }) => `translate(${bandwidth} ${bandwidth / 4})`);

const pie = d3.pie().value(d => d.value);
const pieData = pie(data);
const innerArc = d3
  .arc()
  .innerRadius(size / 6)
  .outerRadius(size / 4);
const arc = d3
  .arc()
  .innerRadius(size / 6)
  .outerRadius(size / 2.75);
const outerArc = d3
  .arc()
  .innerRadius(size / 2.5)
  .outerRadius(size / 2);

main
  .append('svg')
  .attr(
    'viewBox',
    `-${margin + size / 2} -${margin + size / 2} ${size + margin * 2} ${size +
      margin * 2}`
  )
  .attr('width', size)
  .attr('height', size)
  .append('g')
  .attr('id', 'pie-chart');

d3.select('#pie-chart')
  .selectAll('g')
  .data(pieData)
  .enter()
  .append('g')
  .attr('class', 'slice')
  .attr('color', d => colorScale(d.data.name));

d3.selectAll('.slice')
  .append('path')
  .attr('d', arc)
  .attr('fill', 'currentColor');

d3.selectAll('.slice')
  .append('path')
  .attr('d', innerArc)
  .attr('opacity', 0.4);

d3.selectAll('.slice')
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .attr('font-size', 20)
  .attr('transform', d => {
    const [x, y] = outerArc.centroid(d);
    return `translate(${x} ${y})`;
  })
  .text(d => d.data.value);

d3.selectAll('.slice')
  .append('path')
  .attr('d', d => {
    const [x1, y1] = arc.centroid(d);
    // ! this modifies the outerArc
    const [x2, y2] = outerArc.outerRadius(size / 2.3).centroid(d);
    return `M ${x1} ${y1} ${x2} ${y2}`;
  })
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '2');

d3.select('#pie-chart')
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .attr('font-size', 35)
  .attr('font-weight', 700)
  .text(format(total))
  .append('tspan')
  .attr('x', 0)
  .attr('y', 35)
  .attr('font-size', 35)
  .text('Ml');
