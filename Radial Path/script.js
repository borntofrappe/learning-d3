const { select, selectAll, format, timeFormat, timeParse, scaleLinear, scaleTime, max, min, extent, lineRadial, areaRadial, curveCatmullRomClosed, schemeTableau10, easeQuadInOut } = d3;
const href = "https://trends.google.com/trends/explore?date=2019-01-01%202020-01-01&geo=US&q=spring,summer,fall,winter";

// fixed set of data
const data = [
  { date: '2019-01-06', spring: 42, summer: 23, fall: 18, winter: 42 },
  { date: '2019-01-13', spring: 42, summer: 23, fall: 19, winter: 46 },
  { date: '2019-01-20', spring: 41, summer: 24, fall: 18, winter: 42 },
  { date: '2019-01-27', spring: 42, summer: 25, fall: 19, winter: 41 },
  { date: '2019-02-03', spring: 46, summer: 25, fall: 18, winter: 29 },
  { date: '2019-02-10', spring: 47, summer: 26, fall: 18, winter: 29 },
  { date: '2019-02-17', spring: 55, summer: 28, fall: 18, winter: 28 },
  { date: '2019-02-24', spring: 64, summer: 29, fall: 19, winter: 24 },
  { date: '2019-03-03', spring: 73, summer: 31, fall: 20, winter: 23 },
  { date: '2019-03-10', spring: 77, summer: 32, fall: 19, winter: 19 },
  { date: '2019-03-17', spring: 97, summer: 36, fall: 22, winter: 16 },
  { date: '2019-03-24', spring: 65, summer: 38, fall: 30, winter: 15 },
  { date: '2019-03-31', spring: 60, summer: 40, fall: 20, winter: 15 },
  { date: '2019-04-07', spring: 60, summer: 44, fall: 20, winter: 16 },
  { date: '2019-04-14', spring: 53, summer: 45, fall: 20, winter: 14 },
  { date: '2019-04-21', spring: 49, summer: 48, fall: 20, winter: 14 },
  { date: '2019-04-28', spring: 43, summer: 51, fall: 20, winter: 15 },
  { date: '2019-05-05', spring: 40, summer: 54, fall: 19, winter: 14 },
  { date: '2019-05-12', spring: 37, summer: 57, fall: 20, winter: 14 },
  { date: '2019-05-19', spring: 35, summer: 68, fall: 20, winter: 13 },
  { date: '2019-05-26', spring: 33, summer: 76, fall: 19, winter: 13 },
  { date: '2019-06-02', spring: 32, summer: 78, fall: 19, winter: 12 },
  { date: '2019-06-09', spring: 30, summer: 74, fall: 20, winter: 13 },
  { date: '2019-06-16', spring: 30, summer: 88, fall: 24, winter: 13 },
  { date: '2019-06-23', spring: 29, summer: 75, fall: 22, winter: 13 },
  { date: '2019-06-30', spring: 29, summer: 76, fall: 21, winter: 13 },
  { date: '2019-07-07', spring: 29, summer: 76, fall: 27, winter: 13 },
  { date: '2019-07-14', spring: 29, summer: 60, fall: 25, winter: 14 },
  { date: '2019-07-21', spring: 29, summer: 52, fall: 27, winter: 15 },
  { date: '2019-07-28', spring: 28, summer: 47, fall: 29, winter: 15 },
  { date: '2019-08-04', spring: 28, summer: 42, fall: 32, winter: 15 },
  { date: '2019-08-11', spring: 29, summer: 39, fall: 38, winter: 17 },
  { date: '2019-08-18', spring: 28, summer: 34, fall: 45, winter: 17 },
  { date: '2019-08-25', spring: 28, summer: 28, fall: 48, winter: 20 },
  { date: '2019-09-01', spring: 28, summer: 25, fall: 53, winter: 19 },
  { date: '2019-09-08', spring: 28, summer: 21, fall: 58, winter: 21 },
  { date: '2019-09-15', spring: 28, summer: 20, fall: 66, winter: 21 },
  { date: '2019-09-22', spring: 28, summer: 19, fall: 81, winter: 23 },
  { date: '2019-09-29', spring: 29, summer: 19, fall: 66, winter: 27 },
  { date: '2019-10-06', spring: 29, summer: 19, fall: 67, winter: 32 },
  { date: '2019-10-13', spring: 30, summer: 17, fall: 60, winter: 32 },
  { date: '2019-10-20', spring: 29, summer: 18, fall: 53, winter: 31 },
  { date: '2019-10-27', spring: 29, summer: 20, fall: 55, winter: 40 },
  { date: '2019-11-03', spring: 30, summer: 18, fall: 45, winter: 48 },
  { date: '2019-11-10', spring: 29, summer: 18, fall: 30, winter: 57 },
  { date: '2019-11-17', spring: 29, summer: 19, fall: 28, winter: 45 },
  { date: '2019-11-24', spring: 26, summer: 16, fall: 24, winter: 46 },
  { date: '2019-12-01', spring: 29, summer: 16, fall: 21, winter: 58 },
  { date: '2019-12-08', spring: 28, summer: 17, fall: 20, winter: 54 },
  { date: '2019-12-15', spring: 29, summer: 17, fall: 20, winter: 63 },
  { date: '2019-12-22', spring: 31, summer: 18, fall: 18, winter: 100 },
  { date: '2019-12-29', spring: 37, summer: 21, fall: 18, winter: 48 },
];

// functions to parse/format the date object
const parseDate = timeParse("%Y-%m-%d");
const formatDate = timeFormat("%b %d");

const seasons = ["spring", "summer", "fall", "winter"];

// array for the path elements, describing one array for each season
const dataVisualization = seasons.map(season => data.map(point => ({
  date: parseDate(point.date),
  value: point[season],
})));

// array for the scale, to find the greatest possible value
const dataValues = dataVisualization.reduce((acc, curr) => [...acc, ...curr.map(({ value }) => value)], []);
// array for the scale, to find the min/max date
const dataDates = data.map(({date}) => parseDate(date));

// array for the mask, to hide the portion of the visualization past the most searched result
const dataMask = data.map(point => {
  const values = Object.values(point).slice(1).sort((a, b) => b - a);
  return ({
    date: parseDate(point.date),
    value: values[1],
  });
});

// array for the max value for each season
const dataMax = dataVisualization.map(visualization => [...visualization].sort((a, b) => b.value - a.value)[0]);

// MARKUP
const root = select('#root')
root.append('h1').text('The Season of 2019');
root.append('p').text('Following ').append('a').attr('href', href).text('Google Trends');

const duration = 1000;
const initialDelay = 1000;
const delay = 1000;
const size = 500;
const margin = 50;

// line and area function, plotting the data around the SVG
const angleScale = scaleTime().domain(extent(dataDates)).range([0, Math.PI * 2]);
const radiusScale = scaleLinear().domain([0, max(dataValues)]).range([0, size / 2]).nice();

const line = lineRadial()
  .angle(d => angleScale(d.date))
  .radius(d => radiusScale(d.value)).curve(curveCatmullRomClosed);

const area = areaRadial()
  .angle(d => angleScale(d.date))
  .outerRadius(d => radiusScale(d.value)).curve(curveCatmullRomClosed);

// to rotate the shapes according to today's date, use the scale with last year's value
const date = new Date();
date.setFullYear(date.getFullYear() - 1);
const angle = angleScale(date) * 180 / Math.PI;

const svg = root
  .append('svg')
  .attr('viewBox', `${-margin} ${-margin} ${size + margin * 2} ${size + margin * 2}`).attr('width', size).attr('height', size);

// legend describing the four seasons and matching colors
seasons.forEach((season, index, { length }) => {
  const groupSeason = svg.append('g').attr('transform', `translate(${size / (length + 1) * (index + 1)} ${size + margin / 2})`);
  groupSeason
    .append('text').text(season)
    .attr('text-anchor', 'middle')
    .style('text-transform', 'capitalize')
    .attr('fill', 'currentColor');
  groupSeason
    .append('rect')
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', schemeTableau10[index])
    .attr('transform', 'translate(-5 5)');
});

const mask = svg
  .append('defs')
  .append('mask')
  .attr('id', 'mask-center');

mask
  .append('rect')
  .attr('width', size)
  .attr('height', size)
  .attr('fill', 'hsl(0, 0%, 100%)');

mask
  .append('g')
  .attr('transform', `translate(${size / 2} ${size / 2})`)
  .append('g')
  .attr('class', 'rotate')
  .append('g')
  .attr('class', 'scale')
  .append('path')
  .attr('d', line(dataMask))
  .attr('fill', 'hsl(0, 0%, 0%)');

const group = svg
  .append('g')
  .attr('mask', 'url(#mask-center)')
  .append('g')
  .attr('transform', `translate(${size / 2} ${size / 2})`)
  .append('g')
  .attr('class', 'rotate');

dataVisualization.forEach((season, index) => {
  group.append('path').attr('d', line(season)).attr('fill', "none").attr('stroke', schemeTableau10[index]).attr('stroke-width', 5);
  group.append('path').attr('d', area(season)).attr('fill', schemeTableau10[index]).attr('stroke', "none").attr('opacity', '0.25');
});

const text = svg
  .append('g')
  .attr('transform', `translate(${size / 2} ${size / 2})`)
  .append('g')
  .attr('class', 'scale')
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .attr('fill', 'currentColor');

text.append('tspan')
  .text(date.getDate())
  .attr('font-size', 45)
  .attr('y', -20)
  .attr('font-weight', 'bold')
  .attr('text-shadow', '-1px -1px 5px hsl(0, 0%, 0%, 0.25), 1px 1px 5px hsl(0, 0%, 0%, 0.25), 1px -1px 5px hsl(0, 0%, 0%, 0.25), -1px 1px 5px hsl(0, 0%, 0%, 0.25)');


text.append('tspan')
  .text(timeFormat("%b")(date))
  .attr('x', 0)
  .attr('y', 20)
  .attr('font-size', 25)
  .attr('font-weight', 'bold');

const groupMax = svg.append('g').attr('transform', `translate(${size / 2} ${size / 2})`);

const groups = groupMax.selectAll('g')
  .data(dataMax)
  .enter()
  .append('g')
  .attr('class', 'rotate')
  .append('g')
  .attr('transform', d => `rotate(${angleScale(d.date) * 180 / Math.PI}) translate(0 ${-radiusScale(d.value)}) rotate(${-angleScale(d.date) * 180 / Math.PI})`)
  .append('g')
  .attr('transform', 'scale(-1 1)')
  .append('g')
  .attr('class', 'rotate')
  .append('g')
  .attr('transform', 'scale(-1 1)');

groups
  .append('circle').attr('r', '8').attr('fill', (d, i) => schemeTableau10[i]);

groups
  .append('text')
  .attr('transform', (d) => {
    const dx = angleScale(d.date) < Math.PI ? 20 : -20;
    const dy = angleScale(d.date) < Math.PI / 2 || angleScale(d.date) > Math.PI * 3 / 2 ? -15 : 25;
    return `translate(${dx} ${dy})`;
  })
  .attr('text-anchor', 'middle')
  .attr('fill', 'currentColor')
  .text(({date}) => formatDate(date));

// silly transitions
selectAll('.rotate')
  .attr('transform', 'rotate(0)')
  .transition()
  .duration(duration)
  .delay(initialDelay)
  .attr('transform', `rotate(${-angle})`);

selectAll('.scale')
  .attr('transform', 'scale(0)')
  .transition()
  .duration(duration)
  .delay(delay+ initialDelay)
  .attr('transform', 'scale(1)');
