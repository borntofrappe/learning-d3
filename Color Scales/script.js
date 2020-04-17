const main = d3.select('main');
main.append('h1').text('Github Contributions');
main.append('p')
  .text('A perfect use case for a continuous color scale: ')
  .append('a')
  .attr('href', 'https://github.com/d3/d3-scale-chromatic#interpolateGreens')
  .append('code')
  .text('d3.interpolateGreens.');

const dataPoints = 100;
const rows = 7;
const columns = Math.ceil(dataPoints / rows);
const data = Array(dataPoints).fill().map((d, i) => ({
  value: Math.random(),
  column: Math.floor(i / rows),
  row: i % rows,
}));

const width = 400;
const height = width / columns * rows;

// map values in the [0, 1] interval
const colorScale = d3.scaleSequential(d3.interpolateGreens);

const xScale = d3.scaleBand().domain(d3.range(columns)).range([0, width]).padding(0.1);
const yScale = d3.scaleBand().domain(d3.range(rows)).range([0, height]).padding(0.1);

const svg = main.append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('width', width).attr('height', height);
svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.column))
  .attr('y', d => yScale(d.row))
  .attr('width', xScale.bandwidth())
  .attr('height', yScale.bandwidth())
  .attr('fill', d => colorScale(d.value));