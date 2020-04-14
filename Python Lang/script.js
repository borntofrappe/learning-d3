// D3 functions
const {
  select,
  selectAll,
  scaleTime,
  scaleLinear,
  extent,
  timeParse,
  timeFormat,
  format,
  line,
  curveCatmullRom,
  axisBottom,
  axisLeft,
} = d3;

// DATA
const href = 'https://insights.stackoverflow.com/trends?tags=python';
const data = [
  {
    date: '2018-01-01',
    value: 0.10789181226942998,
  },
  {
    date: '2018-02-01',
    value: 0.10476534380132,
  },
  {
    date: '2018-03-01',
    value: 0.1056689848389,
  },
  {
    date: '2018-04-01',
    value: 0.10613729261841,
  },
  {
    date: '2018-05-01',
    value: 0.11014630897897,
  },
  {
    date: '2018-06-01',
    value: 0.11372640704676,
  },
  {
    date: '2018-07-01',
    value: 0.11371031292101,
  },
  {
    date: '2018-08-01',
    value: 0.11264258886326,
  },
  {
    date: '2018-09-01',
    value: 0.11497565774221,
  },
  {
    date: '2018-10-01',
    value: 0.12232676354807999,
  },
  {
    date: '2018-11-01',
    value: 0.12098892921684,
  },
  {
    date: '2019-00-01',
    value: 0.11553902745741,
  },
  {
    date: '2019-01-01',
    value: 0.12182493965327999,
  },
  {
    date: '2019-02-01',
    value: 0.12567815877168,
  },
  {
    date: '2019-03-01',
    value: 0.12659195402298,
  },
  {
    date: '2019-04-01',
    value: 0.12265029059208,
  },
  {
    date: '2019-05-01',
    value: 0.12582668187001,
  },
  {
    date: '2019-06-01',
    value: 0.1284379202533,
  },
  {
    date: '2019-07-01',
    value: 0.12913978494623,
  },
  {
    date: '2019-08-01',
    value: 0.12155650857719,
  },
  {
    date: '2019-09-01',
    value: 0.1317077272345,
  },
  {
    date: '2019-10-01',
    value: 0.13619775053592,
  },
  {
    date: '2019-11-01',
    value: 0.13372390354426,
  },
  {
    date: '2020-00-01',
    value: 0.13461730835996,
  },
  {
    date: '2020-01-01',
    value: 0.13561773800599,
  },
  {
    date: '2020-02-01',
    value: 0.14412959476865,
  },
];

const main = select('main');
main.append('h1').text('Stack Overflow Trends');
main
  .append('p')
  .html(
    `The number of questions using the <mark>python</mark> tag has increased consistently throughout the years.`
  );

// VIZ
const margin = {
  top: 50,
  bottom: 50,
  left: 55,
  right: 25,
};
const strokeWidth = 15;
const width = 500;
const height = 300;

const parseTime = timeParse('%Y-%m-%d');
const formatTime = timeFormat('%b %Y');
const formatValue = format('.0%');
const xScale = scaleTime()
  .domain(extent(data, ({ date }) => parseTime(date)))
  .range([0, width]);
const yScale = scaleLinear()
  .domain(extent(data, ({ value }) => value))
  .range([height, 0])
  .nice();

const lineGenerator = line()
  .x(({ date }) => xScale(parseTime(date)))
  .y(({ value }) => yScale(value))
  .curve(curveCatmullRom);

// actual elements
const svg = main
  .append('svg')
  .attr(
    'viewBox',
    `0 0 ${width + margin.left + margin.right} ${height +
      margin.top +
      margin.bottom}`
  );
const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// marker elements
const defs = svg.append('defs');
const markerStart = defs
  .append('marker')
  .attr('id', 'marker-start')
  .attr('viewBox', '-50 -20 50 40')
  .attr('markerHeight', '1')
  .attr('markerWidth', '2')
  .attr('orient', 'auto');

markerStart
  .append('path')
  .attr('d', 'M 0 -20 q -42 0 -50 20 8 20 50 20')
  .attr('fill', 'currentColor')
  .attr('stroke', 'none');

const markerMid = defs
  .append('marker')
  .attr('id', 'marker-mid')
  .attr('viewBox', '-5 -5 10 10')
  .attr('markerHeight', '0.5')
  .attr('markerWidth', '0.5')
  .attr('orient', 'auto');

markerMid
  .append('path')
  .attr('d', 'M -4.5 0 l 4.5 4.5 4.5 -4.5 -4.5 -4.5 z')
  .attr('fill', 'hsl(200, 80%, 80%)')
  .attr('stroke', 'hsl(200, 80%, 80%)')
  .attr('stroke-width', '1')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

const markerEnd = defs
  .append('marker')
  .attr('id', 'marker-end')
  .attr('viewBox', '0 -40 90 80')
  .attr('markerHeight', '2')
  .attr('markerWidth', '2.25')
  .attr('orient', 'auto');

markerEnd
  .append('path')
  .attr('d', 'M 70 -2 q 14 0 20 -4 -2 4 -6 6 4 2 6 6 -6 -4 -20 -4')
  .attr('fill', 'hsl(0, 80%, 60%)')
  .attr('stroke', 'none');

markerEnd
  .append('path')
  .attr(
    'd',
    'M 10 -10 a 20 20 0 0 1 20 -20 q 20 0 36 30 -16 30 -36 30 a 20 20 0 0 1 -20 -20 z'
  )
  .attr('fill', 'currentColor')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '20')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

markerEnd
  .append('path')
  .attr('d', 'M 28 -20 q 12 2 18 7 c -18 0 -18 4 -18 -7 z')
  .attr('fill', 'hsl(200, 80%, 80%)')
  .attr('stroke', 'hsl(200, 80%, 80%)')
  .attr('stroke-width', '6')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

markerEnd
  .append('path')
  .attr('transform', 'scale(1 -1)')
  .attr('d', 'M 28 -20 q 12 2 18 7 c -18 0 -18 4 -18 -7 z')
  .attr('fill', 'hsl(200, 80%, 80%)')
  .attr('stroke', 'hsl(200, 80%, 80%)')
  .attr('stroke-width', '6')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

// axes
const xAxis = axisBottom(xScale)
  .tickFormat(d => formatTime(d))
  .tickSize(0)
  .tickPadding(15);
const yAxis = axisLeft(yScale)
  .ticks(6)
  .tickFormat(d => formatValue(d))
  .tickSize(0)
  .tickPadding(12);

group
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis)
  .selectAll('g.tick:nth-of-type(even)')
  .remove();
group
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxis);

// grid lines
select('.x-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('class', 'grid-line')
  .attr('d', `M 0 0 v -${height}`);

select('.y-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('class', 'grid-line')
  .attr('d', `M 0 0 h ${width}`);

selectAll('.grid-line')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1')
  .attr('opacity', '0.2')
  .attr('stroke-dasharray', '3 5')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

selectAll('.axis .domain')
  .attr('stroke-width', '10')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('marker-end', 'url(#marker-end)');

// labels
group
  .append('text')
  .attr('font-weight', '700')
  .attr('font-size', '18')
  .text('Date')
  .attr('text-anchor', 'middle')
  .attr('transform', `translate(${width / 2} ${height + 50})`);
group
  .append('text')
  .attr('font-weight', '700')
  .attr('font-size', '18')
  .text('Stack Overflow questions')
  .attr('text-anchor', 'middle')
  .attr('transform', `translate(${-45} ${height / 2}) rotate(-90)`);

// line chart
group
  .append('path')
  .attr('d', lineGenerator(data))
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('marker-start', 'url(#marker-start)')
  .attr('marker-mid', 'url(#marker-mid)')
  .attr('marker-end', 'url(#marker-end)')
  .attr('stroke-width', strokeWidth)
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

main
  .append('a')
  .attr('href', href)
  .text('Source');
