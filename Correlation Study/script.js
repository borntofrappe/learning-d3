// https://trends.google.com/trends/explore?date=now%207-d&q=css,js
const data = [
  {
    date: '2020-05-23T15',
    css: 41,
    js: 43,
  },
  {
    date: '2020-05-23T16',
    css: 42,
    js: 45,
  },
  {
    date: '2020-05-23T17',
    css: 42,
    js: 42,
  },
  {
    date: '2020-05-23T18',
    css: 40,
    js: 41,
  },
  {
    date: '2020-05-23T19',
    css: 39,
    js: 40,
  },
  {
    date: '2020-05-23T20',
    css: 38,
    js: 40,
  },
  {
    date: '2020-05-23T21',
    css: 37,
    js: 37,
  },
  {
    date: '2020-05-23T22',
    css: 35,
    js: 37,
  },
  {
    date: '2020-05-23T23',
    css: 33,
    js: 41,
  },
  {
    date: '2020-05-24T00',
    css: 32,
    js: 38,
  },
  {
    date: '2020-05-24T01',
    css: 31,
    js: 35,
  },
  {
    date: '2020-05-24T02',
    css: 29,
    js: 33,
  },
  {
    date: '2020-05-24T03',
    css: 29,
    js: 33,
  },
  {
    date: '2020-05-24T04',
    css: 30,
    js: 33,
  },
  {
    date: '2020-05-24T05',
    css: 31,
    js: 34,
  },
  {
    date: '2020-05-24T06',
    css: 32,
    js: 36,
  },
  {
    date: '2020-05-24T07',
    css: 33,
    js: 38,
  },
  {
    date: '2020-05-24T08',
    css: 34,
    js: 38,
  },
  {
    date: '2020-05-24T09',
    css: 37,
    js: 40,
  },
  {
    date: '2020-05-24T10',
    css: 39,
    js: 43,
  },
  {
    date: '2020-05-24T11',
    css: 40,
    js: 44,
  },
  {
    date: '2020-05-24T12',
    css: 44,
    js: 43,
  },
  {
    date: '2020-05-24T13',
    css: 43,
    js: 44,
  },
  {
    date: '2020-05-24T14',
    css: 44,
    js: 43,
  },
  {
    date: '2020-05-24T15',
    css: 41,
    js: 43,
  },
  {
    date: '2020-05-24T16',
    css: 43,
    js: 46,
  },
  {
    date: '2020-05-24T17',
    css: 43,
    js: 43,
  },
  {
    date: '2020-05-24T18',
    css: 41,
    js: 42,
  },
  {
    date: '2020-05-24T19',
    css: 40,
    js: 41,
  },
  {
    date: '2020-05-24T20',
    css: 40,
    js: 41,
  },
  {
    date: '2020-05-24T21',
    css: 38,
    js: 39,
  },
  {
    date: '2020-05-24T22',
    css: 37,
    js: 40,
  },
  {
    date: '2020-05-24T23',
    css: 38,
    js: 43,
  },
  {
    date: '2020-05-25T00',
    css: 36,
    js: 40,
  },
  {
    date: '2020-05-25T01',
    css: 35,
    js: 39,
  },
  {
    date: '2020-05-25T02',
    css: 38,
    js: 41,
  },
  {
    date: '2020-05-25T03',
    css: 50,
    js: 51,
  },
  {
    date: '2020-05-25T04',
    css: 55,
    js: 58,
  },
  {
    date: '2020-05-25T05',
    css: 51,
    js: 61,
  },
  {
    date: '2020-05-25T06',
    css: 58,
    js: 58,
  },
  {
    date: '2020-05-25T07',
    css: 64,
    js: 64,
  },
  {
    date: '2020-05-25T08',
    css: 74,
    js: 76,
  },
  {
    date: '2020-05-25T09',
    css: 79,
    js: 81,
  },
  {
    date: '2020-05-25T10',
    css: 87,
    js: 86,
  },
  {
    date: '2020-05-25T11',
    css: 84,
    js: 86,
  },
  {
    date: '2020-05-25T12',
    css: 75,
    js: 78,
  },
  {
    date: '2020-05-25T13',
    css: 68,
    js: 71,
  },
  {
    date: '2020-05-25T14',
    css: 72,
    js: 71,
  },
  {
    date: '2020-05-25T15',
    css: 70,
    js: 72,
  },
  {
    date: '2020-05-25T16',
    css: 65,
    js: 67,
  },
  {
    date: '2020-05-25T17',
    css: 61,
    js: 60,
  },
  {
    date: '2020-05-25T18',
    css: 55,
    js: 52,
  },
  {
    date: '2020-05-25T19',
    css: 50,
    js: 49,
  },
  {
    date: '2020-05-25T20',
    css: 49,
    js: 48,
  },
  {
    date: '2020-05-25T21',
    css: 49,
    js: 47,
  },
  {
    date: '2020-05-25T22',
    css: 49,
    js: 49,
  },
  {
    date: '2020-05-25T23',
    css: 49,
    js: 48,
  },
  {
    date: '2020-05-26T00',
    css: 46,
    js: 47,
  },
  {
    date: '2020-05-26T01',
    css: 45,
    js: 43,
  },
  {
    date: '2020-05-26T02',
    css: 48,
    js: 46,
  },
  {
    date: '2020-05-26T03',
    css: 57,
    js: 56,
  },
  {
    date: '2020-05-26T04',
    css: 63,
    js: 64,
  },
  {
    date: '2020-05-26T05',
    css: 57,
    js: 63,
  },
  {
    date: '2020-05-26T06',
    css: 63,
    js: 67,
  },
  {
    date: '2020-05-26T07',
    css: 71,
    js: 70,
  },
  {
    date: '2020-05-26T08',
    css: 82,
    js: 86,
  },
  {
    date: '2020-05-26T09',
    css: 92,
    js: 92,
  },
  {
    date: '2020-05-26T10',
    css: 96,
    js: 97,
  },
  {
    date: '2020-05-26T11',
    css: 93,
    js: 96,
  },
  {
    date: '2020-05-26T12',
    css: 86,
    js: 88,
  },
  {
    date: '2020-05-26T13',
    css: 78,
    js: 80,
  },
  {
    date: '2020-05-26T14',
    css: 75,
    js: 77,
  },
  {
    date: '2020-05-26T15',
    css: 77,
    js: 76,
  },
  {
    date: '2020-05-26T16',
    css: 77,
    js: 74,
  },
  {
    date: '2020-05-26T17',
    css: 69,
    js: 67,
  },
  {
    date: '2020-05-26T18',
    css: 62,
    js: 59,
  },
  {
    date: '2020-05-26T19',
    css: 57,
    js: 55,
  },
  {
    date: '2020-05-26T20',
    css: 60,
    js: 57,
  },
  {
    date: '2020-05-26T21',
    css: 61,
    js: 56,
  },
  {
    date: '2020-05-26T22',
    css: 62,
    js: 58,
  },
  {
    date: '2020-05-26T23',
    css: 60,
    js: 58,
  },
  {
    date: '2020-05-27T00',
    css: 54,
    js: 54,
  },
  {
    date: '2020-05-27T01',
    css: 54,
    js: 50,
  },
  {
    date: '2020-05-27T02',
    css: 53,
    js: 50,
  },
  {
    date: '2020-05-27T03',
    css: 60,
    js: 55,
  },
  {
    date: '2020-05-27T04',
    css: 66,
    js: 62,
  },
  {
    date: '2020-05-27T05',
    css: 59,
    js: 65,
  },
  {
    date: '2020-05-27T06',
    css: 64,
    js: 67,
  },
  {
    date: '2020-05-27T07',
    css: 73,
    js: 74,
  },
  {
    date: '2020-05-27T08',
    css: 83,
    js: 83,
  },
  {
    date: '2020-05-27T09',
    css: 94,
    js: 95,
  },
  {
    date: '2020-05-27T10',
    css: 98,
    js: 99,
  },
  {
    date: '2020-05-27T11',
    css: 99,
    js: 100,
  },
  {
    date: '2020-05-27T12',
    css: 89,
    js: 87,
  },
  {
    date: '2020-05-27T13',
    css: 79,
    js: 79,
  },
  {
    date: '2020-05-27T14',
    css: 77,
    js: 77,
  },
  {
    date: '2020-05-27T15',
    css: 77,
    js: 77,
  },
  {
    date: '2020-05-27T16',
    css: 77,
    js: 76,
  },
  {
    date: '2020-05-27T17',
    css: 70,
    js: 68,
  },
  {
    date: '2020-05-27T18',
    css: 61,
    js: 58,
  },
  {
    date: '2020-05-27T19',
    css: 56,
    js: 57,
  },
  {
    date: '2020-05-27T20',
    css: 56,
    js: 53,
  },
  {
    date: '2020-05-27T21',
    css: 56,
    js: 54,
  },
  {
    date: '2020-05-27T22',
    css: 54,
    js: 53,
  },
  {
    date: '2020-05-27T23',
    css: 56,
    js: 56,
  },
  {
    date: '2020-05-28T00',
    css: 55,
    js: 52,
  },
  {
    date: '2020-05-28T01',
    css: 49,
    js: 49,
  },
  {
    date: '2020-05-28T02',
    css: 53,
    js: 50,
  },
  {
    date: '2020-05-28T03',
    css: 58,
    js: 56,
  },
  {
    date: '2020-05-28T04',
    css: 67,
    js: 65,
  },
  {
    date: '2020-05-28T05',
    css: 61,
    js: 63,
  },
  {
    date: '2020-05-28T06',
    css: 66,
    js: 67,
  },
  {
    date: '2020-05-28T07',
    css: 72,
    js: 73,
  },
  {
    date: '2020-05-28T08',
    css: 80,
    js: 84,
  },
  {
    date: '2020-05-28T09',
    css: 98,
    js: 92,
  },
  {
    date: '2020-05-28T10',
    css: 98,
    js: 98,
  },
  {
    date: '2020-05-28T11',
    css: 97,
    js: 97,
  },
  {
    date: '2020-05-28T12',
    css: 87,
    js: 89,
  },
  {
    date: '2020-05-28T13',
    css: 78,
    js: 79,
  },
  {
    date: '2020-05-28T14',
    css: 78,
    js: 79,
  },
  {
    date: '2020-05-28T15',
    css: 82,
    js: 75,
  },
  {
    date: '2020-05-28T16',
    css: 76,
    js: 76,
  },
  {
    date: '2020-05-28T17',
    css: 71,
    js: 68,
  },
  {
    date: '2020-05-28T18',
    css: 63,
    js: 58,
  },
  {
    date: '2020-05-28T19',
    css: 59,
    js: 55,
  },
  {
    date: '2020-05-28T20',
    css: 57,
    js: 55,
  },
  {
    date: '2020-05-28T21',
    css: 56,
    js: 54,
  },
  {
    date: '2020-05-28T22',
    css: 59,
    js: 57,
  },
  {
    date: '2020-05-28T23',
    css: 57,
    js: 57,
  },
  {
    date: '2020-05-29T00',
    css: 55,
    js: 52,
  },
  {
    date: '2020-05-29T01',
    css: 49,
    js: 50,
  },
  {
    date: '2020-05-29T02',
    css: 52,
    js: 49,
  },
  {
    date: '2020-05-29T03',
    css: 58,
    js: 55,
  },
  {
    date: '2020-05-29T04',
    css: 63,
    js: 63,
  },
  {
    date: '2020-05-29T05',
    css: 60,
    js: 63,
  },
  {
    date: '2020-05-29T06',
    css: 65,
    js: 64,
  },
  {
    date: '2020-05-29T07',
    css: 73,
    js: 72,
  },
  {
    date: '2020-05-29T08',
    css: 81,
    js: 83,
  },
  {
    date: '2020-05-29T09',
    css: 92,
    js: 90,
  },
  {
    date: '2020-05-29T10',
    css: 93,
    js: 89,
  },
  {
    date: '2020-05-29T11',
    css: 93,
    js: 89,
  },
  {
    date: '2020-05-29T12',
    css: 83,
    js: 85,
  },
  {
    date: '2020-05-29T13',
    css: 77,
    js: 74,
  },
  {
    date: '2020-05-29T14',
    css: 73,
    js: 70,
  },
  {
    date: '2020-05-29T15',
    css: 72,
    js: 69,
  },
  {
    date: '2020-05-29T16',
    css: 68,
    js: 65,
  },
  {
    date: '2020-05-29T17',
    css: 63,
    js: 61,
  },
  {
    date: '2020-05-29T18',
    css: 59,
    js: 55,
  },
  {
    date: '2020-05-29T19',
    css: 54,
    js: 51,
  },
  {
    date: '2020-05-29T20',
    css: 53,
    js: 51,
  },
  {
    date: '2020-05-29T21',
    css: 50,
    js: 48,
  },
  {
    date: '2020-05-29T22',
    css: 52,
    js: 50,
  },
  {
    date: '2020-05-29T23',
    css: 48,
    js: 49,
  },
  {
    date: '2020-05-30T00',
    css: 44,
    js: 45,
  },
  {
    date: '2020-05-30T01',
    css: 36,
    js: 41,
  },
  {
    date: '2020-05-30T02',
    css: 31,
    js: 36,
  },
  {
    date: '2020-05-30T03',
    css: 31,
    js: 34,
  },
  {
    date: '2020-05-30T04',
    css: 31,
    js: 34,
  },
  {
    date: '2020-05-30T05',
    css: 32,
    js: 36,
  },
  {
    date: '2020-05-30T06',
    css: 33,
    js: 36,
  },
  {
    date: '2020-05-30T07',
    css: 35,
    js: 37,
  },
  {
    date: '2020-05-30T08',
    css: 39,
    js: 40,
  },
  {
    date: '2020-05-30T09',
    css: 41,
    js: 44,
  },
  {
    date: '2020-05-30T10',
    css: 42,
    js: 43,
  },
  {
    date: '2020-05-30T11',
    css: 44,
    js: 44,
  },
  {
    date: '2020-05-30T12',
    css: 41,
    js: 43,
  },
  {
    date: '2020-05-30T13',
    css: 42,
    js: 43,
  },
  {
    date: '2020-05-30T14',
    css: 40,
    js: 41,
  },
];

const dataOverlap = data
  .filter(({ css, js }) => css === js)
  .map(({ css, date }) => ({ date, value: css }));

const colors = {
  css: 'hsl(340, 80%, 60%)',
  js: 'hsl(240, 70%, 60%)',
  overlap: 'hsl(290, 75%, 60%)',
};

const parseDate = d3.timeParse('%Y-%m-%dT%H');
const formatDate = d3.timeFormat('%d %b');
const values = data.reduce((acc, curr) => [...acc, curr.css, curr.js], []);

const main = d3.select('main');
main.append('h1').text('Interest over time');
main.append('p').html('Last <strong>7</strong> days');

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
};

const width = 500;
const height = 125;

const scaleTime = d3
  .scaleTime()
  .domain(d3.extent(data, d => parseDate(d.date)))
  .range([0, width]);
  
const scaleValues = d3
  .scaleLinear()
  .domain([0, d3.max(values)])
  .range([height, 0]);

main
  .append('svg')
  .attr(
    'viewBox',
    `0 0 ${width + (margin.left + margin.right)} ${height +
      (margin.top + margin.bottom)}`
  );

d3.select('svg')
  .append('defs')
  .append('mask')
  .attr('id', 'mask-overlap');

d3.select('#mask-overlap')
  .append('rect')
  .attr('x', -margin.left)
  .attr('y', -margin.top)
  .attr('width', width + (margin.left + margin.right))
  .attr('height', height + (margin.top + margin.bottom))
  .attr('fill', 'hsl(0, 0%, 100%)')
  .attr('stroke', 'none');

d3.select('#mask-overlap')
  .selectAll('circle')
  .data(dataOverlap)
  .enter()
  .append('circle')
  .attr('fill', 'hsl(0, 0%, 0%)')
  .attr('stroke', 'none')
  .attr('r', 2.5)
  .attr('cx', d => scaleTime(parseDate(d.date)))
  .attr('cy', d => scaleValues(d.value));

d3.select('svg')
  .append('g')
  .attr('id', 'viz')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

const axisTime = d3.axisBottom(scaleTime).ticks(5);
const axisValues = d3.axisLeft(scaleValues).ticks(5);

d3.select('#viz')
  .append('g')
  .attr('class', 'axis x-axis')
  .call(axisTime)
  .attr('transform', `translate(0 ${height})`);

d3.select('#viz')
  .append('g')
  .attr('class', 'axis y-axis')
  .call(axisValues);

d3.selectAll('.axis path').remove();
d3.selectAll('.axis line').remove();

d3.selectAll('.axis .tick')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1)
  .attr('stroke-dasharray', '4 4')
  .style('opacity', 0.1);

d3.select('#viz')
  .append('path')
  .attr('d', `M 0 0 v ${height} m ${width} 0 v -${height}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1)
  .attr('stroke-dasharray', '4 4')
  .style('opacity', 0.1);

d3.selectAll('.x-axis .tick path').attr('d', `M 0 0 v -${height}`);
d3.selectAll('.y-axis .tick path').attr('d', `M 0 0 h ${width}`);

const line = d3
  .line()
  .x(d => scaleTime(parseDate(d.date)))
  .y(d => scaleValues(d.value));

const dataCSS = data.map(({ date, css }) => ({ date, value: css }));
const dataJS = data.map(({ date, js }) => ({ date, value: js }));

d3.select('#viz')
  .append('g')
  .attr('class', 'content')
  .attr('mask', 'url(#mask-overlap)');

d3.select('#viz .content')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', colors.js)
  .attr('stroke-width', 3)
  .attr('stroke-linecap', 'round')
  .attr('stroke-linejoin', 'round')
  .attr('d', line(dataJS));

d3.select('#viz .content')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', colors.css)
  .attr('stroke-width', 3)
  .attr('stroke-linecap', 'round')
  .attr('stroke-linejoin', 'round')
  .attr('d', line(dataCSS));

d3.select('#viz .content')
  .selectAll('circle')
  .data(dataOverlap)
  .enter()
  .append('circle')
  .attr('fill', 'none')
  .attr('stroke', colors.overlap)
  .attr('stroke-width', 6)
  .attr('r', 2.5)
  .attr('cx', d => scaleTime(parseDate(d.date)))
  .attr('cy', d => scaleValues(d.value));


main.append('ul').attr('id', 'legend');

d3.select('#legend')
  .selectAll('li')
  .data(Object.entries(colors))
  .enter()
  .append('li')
  .style('color', d => d[1]);

d3.selectAll('#legend li')
  .append('svg')
  .attr('viewBox', '-5 -5 10 10')
  .attr('width', '1em')
  .attr('height', '1em')
  .append('circle')
  .attr('r', 5)
  .attr('fill', 'currentColor');

d3.selectAll('#legend li')
  .append('span')
  .text(d => d[0])
  .style('font-weight', '700');
