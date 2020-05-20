// data copied on May 20th 2020 from this website
// https://www.nintendo.co.jp/ir/en/finance/software/index.html
const data = [
  {
    name: 'Mario Kart 8 Deluxe',
    date: '2017-04-27',
    value: 24.77,
  },
  {
    name: 'Super Smash Bros. Ultimate',
    date: '2018-12-07',
    value: 18.84,
  },
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    date: '2017-03-03',
    value: 17.41,
  },
  {
    name: 'Super Mario Odyssey',
    date: '2017-10-27',
    value: 17.41,
  },
  {
    name: 'Pokémon Sword/Pokémon Shield',
    date: '2019-11-15',
    value: 17.37,
  },
  {
    name: "Pokémon: Let's Go, Pikachu!/ Pokémon: Let's Go, Eevee!",
    date: '2018-11-15',
    value: 11.97,
  },
  {
    name: 'Animal Crossing: New Horizons',
    date: '2020-03-20',
    value: 11.77,
  },
  {
    name: 'Splatoon 2',
    date: '2017-07-21',
    value: 10.13,
  },
  {
    name: 'Super Mario Party',
    date: '2018-10-05',
    value: 10.1,
  },
  {
    name: 'New Super Mario Bros. U Deluxe',
    date: '2019-01-10',
    value: 6.6,
  },
];

const main = d3.select('main');
main.append('h1').text('Bars');

// scales
const valueScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .nice();

const names = data.map(({ name }) => name);
const barScale = d3
  .scaleBand()
  .domain(names)
  .padding(0.4);

const colorScale = d3
  .scaleOrdinal()
  .domain(names)
  .range(d3.schemeTableau10);

// row chart
const rowChart = main.append('article');
rowChart.append('h2').text('Horizontal');

const margin = 30;
const size = 500;

valueScale.range([0, size]);
barScale.range([0, size]);
const bandwidth = barScale.bandwidth();

rowChart
  .append('svg')
  .attr(
    'viewBox',
    `-${margin} -${margin} ${size + margin * 2} ${size + margin * 2}`
  )
  .attr('width', size)
  .attr('height', size)
  .append('g')
  .attr('id', 'row-chart-group');

d3.select('#row-chart-group')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'row')
  .attr('color', ({ name }) => colorScale(name))
  .attr('transform', ({ name }) => `translate(0 ${barScale(name)})`);

d3.selectAll('.row')
  .append('rect')
  .attr('fill', 'currentColor')
  .attr('width', ({ value }) => valueScale(value))
  .attr('height', barScale.bandwidth());

// column chart
const columnChart = main.append('article');
columnChart.append('h2').text('Vertical');

columnChart
  .append('svg')
  .attr(
    'viewBox',
    `-${margin} -${margin} ${size + margin * 2} ${size + margin * 2}`
  )
  .attr('width', size)
  .attr('height', size)
  .append('g')
  .attr('id', 'column-chart-group');

d3.select('#column-chart-group')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'column')
  .attr('color', ({ name }) => colorScale(name))
  .attr('transform', ({ name }) => `translate(${barScale(name)} ${size})`);

d3.selectAll('.column')
  .append('rect')
  .attr('fill', 'currentColor')
  .attr('width', barScale.bandwidth())
  .attr('y', ({ value }) => valueScale(value) * -1)
  .attr('height', ({ value }) => valueScale(value));

// faux-3d column chart
const faux3dColumnChart = main.append('article');
faux3dColumnChart.append('h2').text('Faux-3d');

faux3dColumnChart
  .append('svg')
  .attr(
    'viewBox',
    `-${margin} -${margin} ${size + margin * 2} ${size + margin * 2}`
  )
  .attr('width', size)
  .attr('height', size)
  .append('g')
  .attr('id', 'faux-3d-column-chart-group');

d3.select('#faux-3d-column-chart-group')
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'faux-3d-column')
  .attr('color', ({ name }) => colorScale(name))
  .attr(
    'transform',
    ({ name }) => `translate(${barScale(name) + bandwidth / 2} ${size})`
  );

d3.selectAll('.faux-3d-column')
  .append('path')
  .attr('fill', 'currentColor')
  .attr(
    'd',
    ({ value }) =>
      `M -${bandwidth / 2} 0 0 ${bandwidth / 4} ${bandwidth / 2} 0 ${bandwidth /
        2} -${valueScale(value)} 0 -${valueScale(value) +
        bandwidth / 4} -${bandwidth / 2} -${valueScale(value)}`
  );

d3.selectAll('.faux-3d-column')
  .append('path')
  .attr('opacity', 0.4)
  .attr(
    'd',
    ({ value }) =>
      `M -${bandwidth / 2} 0 0 ${bandwidth / 4} 0 -${valueScale(value) -
        bandwidth / 4} -${bandwidth / 2} -${valueScale(value)}`
  );
