
const data = [
  { country: "Cyprus", jury: 50, televoting: 44 },
  { country: "Albania", jury: 22, televoting: 35 },
  { country: "Israel", jury: 73, televoting: 20 },
  { country: "Belgium", jury: 71, televoting: 3 },
  { country: "Russia", jury: 104, televoting: 100 },
  { country: "Malta", jury: 208, televoting: 47 },
  { country: "Portugal", jury: 126, televoting: 27 },
  { country: "Serbia", jury: 20, televoting: 82 },
  { country: "United Kingdom", jury: 0, televoting: 0 },
  { country: "Greece", jury: 91, televoting: 79 },
  { country: "Switzerland", jury: 267, televoting: 165 },
  { country: "Iceland", jury: 198, televoting: 180 },
  { country: "Spain", jury: 6, televoting: 0 },
  { country: "Moldova", jury: 53, televoting: 62 },
  { country: "Germany", jury: 3, televoting: 0 },
  { country: "Finland", jury: 83, televoting: 218 },
  { country: "Bulgaria", jury: 140, televoting: 30 },
  { country: "Lithuania", jury: 55, televoting: 165 },
  { country: "Ukraine", jury: 97, televoting: 267 },
  { country: "France", jury: 248, televoting: 251 },
  { country: "Azerbaijan", jury: 32, televoting: 33 },
  { country: "Norway", jury: 15, televoting: 60 },
  { country: "Netherlands", jury: 11, televoting: 0 },
  { country: "Italy", jury: 206, televoting: 318 },
  { country: "Sweden", jury: 46, televoting: 63 },
  { country: "San Marino", jury: 37, televoting: 13}
]


const main = d3.select('main');
main.append('h1').text('Eurovision Votes');

function drawScatterplot() {
  const article = main.append('article');
  article.append('h2').text('Professional juries vs televoting');

  const dimensions = {
    width: 800,
    height: 500,
    margin: {
      top: 40,
      right: 20,
      bottom: 40,
      left: 50,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.televoting)])
    .range([0, dimensions.boundedWidth]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.jury)])
    .range([dimensions.boundedHeight, 0]);

  const viz = article
    .append('svg')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const axisGroup = viz.append('g');
  const dataGroup = viz.append('g');

  const dataGroups = dataGroup
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr(
      'transform',
      d => `translate(${xScale(d.televoting)} ${yScale(d.jury)})`
    );

  dataGroups
    .append('circle')
    .attr('r', 13)
    .attr('fill', 'currentColor');

  dataGroups
    .append('svg')
    .attr('viewBox', [0, 0, 100, 100])
    .attr('x', -10)
    .attr('y', -10)
    .attr('width', 20)
    .attr('height', 20)
    .append('use')
    .attr('href', d => `#${d.country.split(' ').join('-')}`);

  dataGroups
    .append('text')
    .text(d => d.country)
    .attr('font-size', 12)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .attr('fill', 'currentColor');

  const labelsGroup = axisGroup
    .append('g')
    .attr('fill', 'currentColor')
    .attr('font-size', 12)
    .style('text-transform', 'uppercase');

  labelsGroup
    .append('text')
    .attr('x', -dimensions.margin.left)
    .attr('y', -dimensions.margin.top + 14)
    .text('Jury points');

  labelsGroup
    .append('text')
    .attr('text-anchor', 'end')
    .attr('x', dimensions.boundedWidth + dimensions.margin.right)
    .attr('y', dimensions.boundedHeight + dimensions.margin.bottom)
    .text('Televoting points');

  const xAxis = d3
    .axisBottom(xScale)
    .ticks(3)
    .tickPadding(12)
    .tickSize(0)
    .tickFormat(d => d || '');
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(3)
    .tickPadding(12)
    .tickSize(0)
    .tickFormat(d => d || '');

  const xAxisGroup = axisGroup
    .append('g')
    .attr('transform', `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis);

  const yAxisGroup = axisGroup.append('g').call(yAxis);

  xAxisGroup.select('path').remove();

  yAxisGroup.select('path').remove();

  xAxisGroup
    .selectAll('g.tick')
    .filter(d => d)
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.25)
    .attr('d', `M 0 0 v ${-dimensions.boundedHeight}`);

  yAxisGroup
    .selectAll('g.tick')
    .filter(d => d)
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.25)
    .attr('d', `M 0 0 h ${dimensions.boundedWidth}`);

  axisGroup
    .append('path')
    .attr('id', 'equal-line')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 0.4)
    .attr('stroke-dasharray', '3 3')
    .attr(
      'd',
      `M ${xScale.range()[0]} ${yScale.range()[0]} L ${xScale.range()[1]} ${
        yScale.range()[1]
      }`
    );

  axisGroup
    .append('text')
    .attr('fill', 'currentColor')
    .attr('font-size', 11)
    .attr('dy', -5)
    .append('textPath')
    .attr('text-anchor', 'end')
    .attr('startOffset', '100%')
    .attr('href', '#equal-line')
    .text('Line of equal jury and televoting points');
}

drawScatterplot();
