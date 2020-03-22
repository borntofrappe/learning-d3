const duration = 1000;
const {
  lineRadial,
  areaRadial,
  max,
  select,
  scaleLinear,
  scaleOrdinal,
  curveCatmullRomClosed,
  easeLinear
} = d3;
const getRandomPercentage = (min = 0) =>
  Math.floor(Math.random() * (100 - min) + min);

const dataPoints = 20;
const data = Array(dataPoints)
  .fill()
  .map(() => getRandomPercentage(50));
const dataMax = max(data);

const size = 200;
const radiusScale = scaleLinear()
  .domain([0, dataMax])
  .range([0, size / 2])
  .nice();

const angleScale = scaleOrdinal()
  .domain(data.map((d, i) => i))
  .range(data.map((d, i, { length }) => ((Math.PI * 2) / length) * i));

const innerRadiusScale = scaleLinear()
  .domain([0, 1])
  .range([2, 1]);

const line = lineRadial()
  .angle((d, i) => angleScale(i))
  .radius(d => d)
  .curve(curveCatmullRomClosed);

const area = areaRadial()
  .angle((d, i) => angleScale(i))
  .outerRadius(d => radiusScale(d))
  .innerRadius(d => radiusScale(d / 1.1))
  .curve(curveCatmullRomClosed);

const svg = select('body')
  .append('svg')
  .attr(
    'viewBox',
    `${-(size) / 2} ${-(size) / 2} ${size} ${size}`
  );


svg
  .append('path')
  .attr('id', 'line')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 3)
  .attr('stroke-linecap', 'round')
  .attr('stroke-linejoin', 'round')
  .attr('d', line(data));

svg
  .append('path')
  .attr('id', 'area')
  .attr('fill', 'currentColor')
  .attr('stroke', 'none')
  .attr('d', area(data))
  .attr('opacity', 0.5);


function updateRadial(data) {
  select('path#line')
    .transition()
    .duration(duration)
    .ease(easeLinear)
    .attr('d', line(data.slice(-dataPoints)));

  area.innerRadius(d => radiusScale(d / innerRadiusScale(Math.random())));

  select('path#area')
    .transition()
    .duration(duration)
    .ease(easeLinear)
    .attr('d', area(data.slice(-dataPoints)));
}

setInterval(() => {
  data.push(getRandomPercentage(50))
  updateRadial(data);
}, duration);