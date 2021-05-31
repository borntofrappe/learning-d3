
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

const winner = 'Italy';

const root = d3.select('#root');
root.append('h1').text('Eurovision Votes');
root
  .append('p')
  .text(
    "On the night of the grand final national juries and the public voted for their favorite songs. Here's how the two types impacted the competition."
  );

const ranking = root.append('article');
ranking.append('h2').text('The ranking');
ranking
  .append('p')
  .text(
    'Juries and the public have the same weight in terms of votes. This causes a considerable shuffle when the results are announced one type after the other.'
  );

highlightRanking(ranking);

const comparison = root.append('article');
comparison.append('h2').text('Professional juries vs televoting');
comparison
  .append('p')
  .text(
    'The difference between the two types of voting is often considerable.'
  );

highlightComparison(comparison);
highlightGap(comparison);

function highlightRanking(container) {
  const rankings = [
    data.map(({ country, jury }) => ({ country, votes: jury })),
    data.map(({ country, televoting }) => ({ country, votes: televoting })),
    data.map(({ country, jury, televoting }) => ({
      country,
      votes: jury + televoting,
    })),
  ];

  rankings.forEach(r => r.sort((a, b) => (a.votes < b.votes ? 1 : -1)));
  const nodes = rankings.reduce((acc, curr) => [...acc, ...curr], []);

  const links = rankings[0]
    .map(({ country }, _, { length }) => {
      const ranks = rankings.map(
        (r, i) => r.findIndex(d => d.country === country) + i * length
      );
      return [ranks.slice(0, 2), ranks.slice(1)];
    })
    .reduce((acc, curr) => [...acc, ...curr], [])
    .map(([source, target]) => ({ source, target, value: 1 }));

  const dimensions = {
    width: 500,
    height: 1000,
    margin: {
      top: 40,
      right: 120,
      bottom: 20,
      left: 120,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const sankeyGenerator = d3
    .sankey()
    .nodePadding(10)
    .nodeSort(d => d)
    .size([dimensions.boundedWidth, dimensions.boundedHeight]);

  const sankeyData = sankeyGenerator({ nodes, links });
  const sankeyLinkGenerator = d3.sankeyLinkHorizontal();

  const viz = container
    .append('svg')
    .style('max-width', '550px')
    .style('margin-left', 'auto')
    .style('margin-right', 'auto')
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
  const linksGroup = dataGroup.append('g');
  const nodesGroup = dataGroup.append('g');
  const juryGroup = dataGroup.append('g');
  const overallGroup = dataGroup.append('g');

  linksGroup
    .selectAll('path')
    .data(sankeyData.links)
    .enter()
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 1)
    .attr('opacity', 0.5)
    .attr('d', sankeyLinkGenerator);

  const nodesGroups = nodesGroup
    .selectAll('g')
    .data(sankeyData.nodes)
    .enter()
    .append('g')
    .attr(
      'transform',
      ({ x0, y0, x1, y1 }) =>
        `translate(${x0 + (x1 - x0) / 2} ${y0 + (y1 - y0) / 2})`
    );

  nodesGroups
    .append('circle')
    .attr('r', 11)
    .attr('fill', 'currentColor');

  nodesGroups
    .append('svg')
    .attr('viewBox', [0, 0, 100, 100])
    .attr('x', -8)
    .attr('y', -8)
    .attr('width', 16)
    .attr('height', 16)
    .append('use')
    .attr('href', d => `#${d.country.split(' ').join('-')}`);

  const labelsGroup = axisGroup
    .append('g')
    .attr('transform', `translate(0 ${-dimensions.margin.top + 20})`)
    .attr('fill', 'currentColor')
    .attr('font-size', 11)
    .attr('text-anchor', 'middle');

  labelsGroup
    .selectAll('text')
    .data(['Jury', 'Televoting', 'Overall'])
    .enter()
    .append('text')
    .attr('transform', (d, i) => {
      const { x0, x1 } = rankings[i][0];
      return `translate(${x0 + (x1 - x0) / 2} 0)`;
    })
    .text(d => d);

  juryGroup
    .selectAll('text')
    .data(rankings[0])
    .enter()
    .append('text')
    .attr('fill', 'currentColor')
    .attr('font-size', 11)
    .attr('dominant-baseline', 'middle')
    .attr('transform', d => {
      const { y0, y1 } = d;
      return `translate(${-dimensions.margin.left + 2} ${y0 + (y1 - y0) / 2})`;
    })
    .text((d, i) => `${i + 1}. ${d.country}`);

  overallGroup
    .selectAll('text')
    .data(rankings[rankings.length - 1])
    .enter()
    .append('text')
    .attr('fill', 'currentColor')
    .attr('font-size', 11)
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .attr('transform', d => {
      const { y0, y1 } = d;
      return `translate(${dimensions.boundedWidth +
        dimensions.margin.right -
        2} ${y0 + (y1 - y0) / 2})`;
    })
    .text((d, i) => `${i + 1}. ${d.country}`);
}

function highlightComparison(container) {
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

  const viz = container
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
  const highlightGroup = viz.append('g');
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

  const { televoting, jury } = data.find(({ country }) => country === winner);

  highlightGroup
    .append('circle')
    .attr('fill', 'none')
    .attr('r', 18)
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '2 2')
    .attr('transform', `translate(${xScale(televoting)} ${yScale(jury)})`);

  highlightGroup
    .append('circle')
    .attr('fill', 'currentColor')
    .attr('r', 18)
    .attr('opacity', 0.25)
    .attr('transform', `translate(${xScale(televoting)} ${yScale(jury)})`);

  highlightGroup
    .append('path')
    .attr('id', 'winner-circle')
    .attr('fill', 'none')
    .attr('d', 'M 0 -29 a 29 29 0 0 0 0 58 29 29 0 0 0 0 -58')
    .attr('transform', `translate(${xScale(televoting)} ${yScale(jury)})`);

  highlightGroup
    .append('text')
    .append('textPath')
    .attr('href', '#winner-circle')
    .attr('fill', 'currentColor')
    .attr('startOffset', '50%')
    .attr('text-anchor', 'middle')
    .attr('letter-spacing', 1.5)
    .attr('font-size', 10)
    .text('Winner');

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

function highlightGap(container) {
  const dataGaps = data
    .map(({ country, jury, televoting }) => ({
      country,
      gap: jury - televoting,
    }))
    .sort((a, b) => (a.gap < b.gap ? 1 : -1));
  const favoriteJury = dataGaps[0];
  const favoritePublic = dataGaps[dataGaps.length - 1];
  container
    .append('p')
    .html(
      `On one extreme ${favoriteJury.country} received <mark>${
        favoriteJury.gap
      }</mark> more votes from the jury. On the opposite end, ${
        favoritePublic.country
      } collected <mark>${Math.abs(
        favoritePublic.gap
      )}</mark> more votes from the public.`
    );

  const dimensions = {
    width: 500,
    height: 800,
    margin: {
      top: 60,
      right: 55,
      bottom: 20,
      left: 55,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const viz = container
    .append('svg')
    .style('max-width', '620px')
    .style('margin-left', 'auto')
    .style('margin-right', 'auto')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const maxGap = d3.max([
    Math.abs(favoriteJury.gap),
    Math.abs(favoritePublic.gap),
  ]);
  const xScale = d3
    .scaleLinear()
    .domain([-maxGap, maxGap])
    .range([0, dimensions.boundedWidth]);
  const yScale = d3
    .scaleBand()
    .domain(dataGaps.map(d => d.country))
    .range([0, dimensions.boundedHeight]);

  const axisGroup = viz.append('g');
  const dataGroup = viz.append('g');

  const dataGroups = dataGroup
    .selectAll('g')
    .data(dataGaps)
    .enter()
    .append('g')
    .attr(
      'transform',
      d => `translate(0 ${yScale(d.country) + yScale.bandwidth() / 2})`
    );

  dataGroups
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '2')
    .attr('d', d => `M ${xScale(0)} 0 H ${xScale(d.gap)}`);

  dataGroups
    .append('circle')
    .attr('r', 2)
    .attr('cx', xScale(0))
    .attr('fill', 'currentColor');

  const dataGroupsEnd = dataGroups
    .append('g')
    .attr('transform', d => `translate(${xScale(d.gap)} 0)`);

  dataGroupsEnd
    .append('circle')
    .attr('r', 11)
    .attr('fill', 'currentColor');

  dataGroupsEnd
    .append('svg')
    .attr('viewBox', [0, 0, 100, 100])
    .attr('x', -8)
    .attr('y', -8)
    .attr('width', 16)
    .attr('height', 16)
    .append('use')
    .attr('href', d => `#${d.country.split(' ').join('-')}`);

  dataGroupsEnd
    .append('text')
    .attr('fill', 'currentColor')
    .attr('font-size', 9)
    .attr('dominant-baseline', 'middle')
    .attr('y', 1)
    .attr('x', d => (d.gap >= 0 ? 18 : -18))
    .attr('text-anchor', d => (d.gap >= 0 ? 'start' : 'end'))
    .text(d => d.country);

  const xAxis = d3
    .axisTop(xScale)
    .ticks(6)
    .tickPadding(12)
    .tickSize(0)
    .tickFormat(d => Math.abs(d));
  const xAxisGroup = axisGroup.append('g').call(xAxis);

  xAxisGroup.select('path').remove();

  xAxisGroup
    .selectAll('g.tick')
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.15)
    .attr('d', `M 0 0 v ${dimensions.boundedHeight}`);

  xAxisGroup.selectAll('text').attr('font-size', 8);

  labelsGroup = axisGroup
    .append('g')
    .attr('transform', `translate(0 ${-dimensions.margin.top + 20})`)
    .attr('fill', 'currentColor')
    .attr('font-size', 9)
    .style('text-transform', 'uppercase');

  labelsGroup
    .append('text')
    .attr('x', dimensions.boundedWidth)
    .attr('text-anchor', 'end')
    .text('More jury points');

  labelsGroup.append('text').text('More televoting points');
}
