const { lineRadial, areaRadial, max, select, scaleLinear, range, scaleOrdinal, curveCatmullRomClosed } = d3;
const getRandomPercentage = (min = 0) => Math.floor(Math.random() * (100 - min) + min);

const dataPoints = 30;
const data = Array(dataPoints).fill().map(() => getRandomPercentage(50));
const dataMax = max(data);

const size = 200;
const radiusScale = scaleLinear()
  .domain([0, dataMax])
  .range([0, size / 2])
  .nice();

const angleScale = scaleOrdinal()
  .domain(data.map((d, i) => i))
  .range(data.map((d, i, {length}) => Math.PI * 2 / length * i));

const line = lineRadial()
  .angle((d, i) => angleScale(i))
  .radius(d => d)
  .curve(curveCatmullRomClosed);

const area = areaRadial()
  .angle((d, i) => angleScale(i))
  .outerRadius(d => d)
  .innerRadius(d => d / 2)
  .curve(curveCatmullRomClosed);

const svg = select('body')
  .append('svg')
  .attr('viewBox', `${-(size * 1.2) / 2} ${-(size * 1.2) / 2} ${size * 1.2} ${size * 1.2}`);

svg
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 2)
  .attr('stroke-linecap', 'round')
  .attr('stroke-linejoin', 'round')
  .attr('d', line(data));

svg
  .append('path')
  .attr('fill', 'currentColor')
  .attr('stroke', "none")
  .attr('d', area(data))
  .attr('opacity', 0.5);