const stages = [
  'Earlier stages',
  'Eight-finals',
  'Quarterfinals',
  'Semifinals',
  'Final',
];

const data = [
  {
    year: '1972',
    stage: 'Earlier stages',
    teams: ['FC Nantes'],
  },
  {
    year: '1973',
    stage: 'Earlier stages',
    teams: ['Nîmes Olympique SC', 'FC Sochaux'],
  },
  { year: '1974', stage: 'Eight-finals', teams: ['OGC Nice'] },
  {
    year: '1975',
    stage: 'Earlier stages',
    teams: ['Olympique Lyonnais', 'FC Nantes'],
  },
  {
    year: '1976',
    stage: 'Earlier stages',
    teams: ['Olympique Lyonnais', 'Olympique de Marseille'],
  },
  {
    year: '1977',
    stage: 'Earlier stages',
    teams: ['OGC Nice', 'FC Sochaux'],
  },
  { year: '1978', stage: 'Final', teams: ['SC Bastia'] },
  {
    year: '1979',
    stage: 'Eight-finals',
    teams: ['Racing Club de Strasbourg Alsace'],
  },
  { year: '1980', stage: 'Quarterfinals', teams: ['AS Saint-Etienne'] },
  { year: '1981', stage: 'Semifinals', teams: ['FC Sochaux'] },
  { year: '1982', stage: 'Eight-finals', teams: ['Girondins de Bordeaux'] },
  { year: '1983', stage: 'Eight-finals', teams: ['Girondins de Bordeaux'] },
  { year: '1984', stage: 'Eight-finals', teams: ['RC Lens'] },
  {
    year: '1985',
    stage: 'Earlier stages',
    teams: ['Paris Saint Germain'],
  },
  { year: '1986', stage: 'Quarterfinals', teams: ['FC Nantes'] },
  {
    year: '1987',
    stage: 'Earlier stages',
    teams: ['FC Toulouse'],
  },
  {
    year: '1988',
    stage: 'Earlier stages',
    teams: ['FC Toulouse'],
  },
  { year: '1989', stage: 'Eight-finals', teams: ['Girondins de Bordeaux'] },
  { year: '1990', stage: 'Quarterfinals', teams: ['AJ Auxerre'] },
  {
    year: '1991',
    stage: 'Eight-finals',
    teams: ['AS Monaco', 'Girondins de Bordeaux'],
  },
  {
    year: '1992',
    stage: 'Earlier stages',
    teams: ['AJ Auxerre', 'AS Cannes', 'Olympique Lyonnais'],
  },
  {
    year: '1993',
    stage: 'Semifinals',
    teams: ['AJ Auxerre', 'Paris Saint Germain'],
  },
  { year: '1994', stage: 'Eight-finals', teams: ['Girondins de Bordeaux'] },
  { year: '1995', stage: 'Quarterfinals', teams: ['FC Nantes'] },
  { year: '1996', stage: 'Final', teams: ['Girondins de Bordeaux'] },
  { year: '1997', stage: 'Semifinals', teams: ['AS Monaco'] },
  { year: '1998', stage: 'Quarterfinals', teams: ['AJ Auxerre'] },
  { year: '1999', stage: 'Final', teams: ['Olympique de Marseille'] },
  { year: '2000', stage: 'Semifinals', teams: ['RC Lens'] },
  {
    year: '2001',
    stage: 'Eight-finals',
    teams: ['Girondins de Bordeaux', 'FC Nantes'],
  },
  {
    year: '2002',
    stage: 'Eight-finals',
    teams: ['Olympique Lyonnais', 'Lille OSC'],
  },
  { year: '2003', stage: 'Eight-finals', teams: ['AJ Auxerre'] },
  { year: '2004', stage: 'Final', teams: ['Olympique de Marseille'] },
  { year: '2005', stage: 'Quarterfinals', teams: ['AJ Auxerre'] },
  {
    year: '2006',
    stage: 'Eight-finals',
    teams: ['Lille OSC', 'AJ Auxerre', 'Olympique de Marseille'],
  },
  {
    year: '2007',
    stage: 'Eight-finals',
    teams: ['RC Lens', 'Paris Saint Germain'],
  },
  { year: '2008', stage: 'Eight-finals', teams: ['Olympique de Marseille'] },
  {
    year: '2009',
    stage: 'Quarterfinals',
    teams: ['Olympique de Marseille', 'Paris Saint Germain'],
  },
  {
    year: '2010',
    stage: 'Eight-finals',
    teams: ['Olympique de Marseille', 'Lille OSC'],
  },
  { year: '2011', stage: 'Eight-finals', teams: ['Paris Saint Germain'] },
  {
    year: '2012',
    stage: 'Earlier stages',
    teams: ['Paris Saint Germain', 'Stade Rennais'],
  },
  { year: '2013', stage: 'Eight-finals', teams: ['Girondins de Bordeaux'] },
  { year: '2014', stage: 'Quarterfinals', teams: ['Olympique Lyonnais'] },
  {
    year: '2015',
    stage: 'Earlier stages',
    teams: ['EA Guingamp'],
  },
  {
    year: '2016',
    stage: 'Earlier stages',
    teams: ['Olympique de Marseille', 'AS Saint-Etienne'],
  },
  { year: '2017', stage: 'Semifinals', teams: ['Olympique Lyonnais'] },
  { year: '2018', stage: 'Final', teams: ['Olympique de Marseille'] },
  {
    year: '2019',
    stage: 'Earlier stages',
    teams: ['Stade Rennais'],
  },
  {
    year: '2020',
    stage: 'Earlier stages',
    teams: ['Stade Rennais', 'AS Saint-Etienne'],
  },
];

/* FIRST VISUALIZATION
layer a series of shapes to highlight the highest stage reached in a given year

 ^           o
stage        oo   o     
 |        o ooo  oo     
        oooooooooooo   
          -year>
*/
const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip');

const main = d3.select('body').append('main');
main.append('h1').text('Football Stats');

const section = main.append('section');
section
  .append('h2')
  .text(
    `Since ${
      data[0].year
    }, French teams have reached the final stage of the European League ${
      data.filter(
        ({ stage }) => stage.replace(/\W+/g, '').toLowerCase() === 'final'
      ).length
    } times, losing each match.`
  );

const width = 800;
const height = 100;
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 100,
};

const svg = section
  .append('svg')
  .attr(
    'viewBox',
    `0 0 ${width + margin.left + margin.right} ${height +
      margin.top +
      margin.bottom}`
  );
const svgGroup = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

const xScale = d3
  .scaleBand()
  .domain(data.map(({ year }) => year))
  .range([0, width]);

const yScale = d3
  .scaleBand()
  .domain(stages)
  .range([height, 0]);

const yAxis = d3
  .axisLeft(yScale)
  .tickSize(5)
  .tickSizeOuter(0);

// show the stages on the y axis
const yAxisGroup = svgGroup.append('g').call(yAxis);
yAxisGroup
  .selectAll('text')
  .style('font-weight', '700')
  .style('font-size', '14');
yAxisGroup.selectAll('line').attr('stroke-width', '0.5');
yAxisGroup.selectAll('path').attr('stroke-width', '0.5');

// wrap the data in a <g> element
const dataGroup = svgGroup.append('g');
// include one group for each year and on the x axis
const dataYearGroups = dataGroup
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', ({ year }) => `translate(${xScale(year)} ${height})`);

// include one group for each stage reached in the year (consider the stages in order)
const dataStageGroups = dataYearGroups
  .selectAll('g')
  .data(({ stage }) => [...stages.slice(0, stages.indexOf(stage) + 1)])
  .enter()
  .append('g')
  .attr('class', d => d.replace(/\W+/g, '').toLowerCase())
  .attr(
    'transform',
    (d, i) =>
      `translate(${xScale.bandwidth() / 2} ${(i * yScale.bandwidth() +
        yScale.bandwidth() / 2) *
        -1})`
  );

// include a square for each stage, picking from the smallest band width
const squarePadding = 0.125;
const squareSize =
  d3.min([xScale.bandwidth(), yScale.bandwidth()]) * (1 - squarePadding * 2);

dataStageGroups
  .append('rect')
  .attr(
    'transform',
    `translate(${(squareSize / 2) * -1} ${(squareSize / 2) * -1})`
  )
  .attr('width', squareSize)
  .attr('height', squareSize)
  .attr('fill', 'currentColor');

// update the rectangles nested in the .final <g> elements to have a reddish hue
dataYearGroups.selectAll('.final').style('color', '#ff3232');

// include transparent rectangles spanning the height of each year to ease mouse interaction
dataYearGroups
  .append('rect')
  .attr('transform', `translate(0 ${height * -1})`)
  .attr('width', xScale.bandwidth())
  .attr('height', height)
  .attr('opacity', 0);

// show the tooltip on hover
dataYearGroups.on('mouseenter', (event, datum) => {
  d3.select(event.currentTarget)
    .selectAll('g')
    .attr('class', 'hover');

  const { stage, year, teams } = datum;

  tooltip.style('left', `${event.x + xScale.bandwidth()}px`);
  tooltip.style('top', `${event.y}px`);
  tooltip.style('display', 'block');
  tooltip.append('p').text(`${stage} in ${year}`);
  tooltip.append('ul');
  tooltip
    .select('ul')
    .selectAll('li')
    .data(teams)
    .enter()
    .append('li')
    .text(d => d);
});

dataYearGroups.on('mouseleave', ({ currentTarget }) => {
  d3.select(currentTarget)
    .selectAll('g')
    .attr('class', '');
  tooltip.style('display', 'none');
  tooltip.select('p').remove();
  tooltip.select('ul').remove();
});

/* SECOND VISUALIZATION
detail a specific year through text and a series of path elements

STAGE in YEAR
TEAM
TEAM
                  ... TROPHY
            ----
          /
      ---
    /
---
*/
const sectionYear = main.append('section');
sectionYear
  .append('h2')
  .style('display', 'inline')
  .text('Select a year to highlight a specific round: ');

const select = sectionYear
  .append('select')
  .attr('name', 'year')
  .attr('id', 'year-select');

select
  .selectAll('option')
  .data(data.map(({ year }) => year))
  .enter()
  .append('option')
  .attr('value', d => d)
  .text(d => d);

const svgYear = sectionYear.append('svg').attr('viewBox', '0 0 480 200');

const trophyGroup = svgYear
  .append('g')
  .attr('id', 'year-trophy')
  .attr('transform', 'translate(428 93)')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 4);

trophyGroup
  .append('rect')
  .attr('y', -8)
  .attr('width', 32)
  .attr('height', 8)
  .attr('rx', 4);

trophyGroup
  .append('rect')
  .attr('x', 4)
  .attr('y', -14)
  .attr('width', 24)
  .attr('height', 6)
  .attr('rx', 3);

trophyGroup
  .append('path')
  .attr(
    'd',
    'M 16 -14 v -5 a 18 18 0 0 1 -18 -18 v -20 h 36 v 20 a 18 18 0 0 1 -18 18'
  );

trophyGroup
  .append('rect')
  .attr('x', -8)
  .attr('y', -67)
  .attr('width', 48)
  .attr('height', 10)
  .attr('rx', 5);

trophyGroup.append('path').attr('d', 'M 0 -34 h -2 a 8 8 0 0 1 0 -16 h 2');

trophyGroup.append('path').attr('d', 'M 32 -34 h 2 a 8 8 0 0 0 0 -16 h -2');

const pathsGroup = svgYear
  .append('g')
  .attr('transform', 'translate(0 197.5)')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '5');

pathsGroup
  .append('path')
  .attr('opacity', 0.2)
  .attr(
    'd',
    'M 0 0 h 40 c 20 0 20 -20 40 -20 h 40 c 20 0 20 -20 40 -20 h 40 c 20 0 20 -20 40 -20 h 40 c 20 0 20 -20 40 -20 h 40 c 20 0 20 -20 40 -20 h 80'
  );

const pathsStagesGroup = pathsGroup.append('g').attr('id', 'year-stages');

pathsStagesGroup.append('path').attr('d', 'M 0 0 h 40');
pathsStagesGroup.append('path').attr('d', 'M 40 0 c 20 0 20 -20 40 -20 h 40');

pathsStagesGroup
  .append('path')
  .attr('d', 'M 120 -20 c 20 0 20 -20 40 -20 h 40');
pathsStagesGroup
  .append('path')
  .attr('d', 'M 200 -40 c 20 0 20 -20 40 -20 h 40');
pathsStagesGroup
  .append('path')
  .attr('d', 'M 280 -60 c 20 0 20 -20 40 -20 h 40');
pathsStagesGroup
  .append('path')
  .attr('d', 'M 360 -80 c 20 0 20 -20 40 -20 h 80');

const textGroup = svgYear
  .append('g')
  .attr('id', 'year-text')
  .attr('transform', 'translate(0 26)')
  .attr('fill', 'currentColor')
  .attr('stroke', 'none')
  .attr('font-family', 'inherit');

textGroup
  .append('text')
  .attr('font-weight', '700')
  .attr('font-size', 24);

textGroup
  .append('text')
  .attr('y', 24)
  .attr('font-size', 14);

// default the visual to match the first data point
d3.select('g#year-text text').text(`${data[0].stage} in ${data[0].year}`);

d3.select('g#year-text text:nth-of-type(2)')
  .selectAll('tspan')
  .data(data[0].teams)
  .enter()
  .append('tspan')
  .text(d => d)
  .attr('x', 0)
  .attr('dy', (d, i) => (i === 0 ? 0 : 24));

d3.select('#year-trophy').attr(
  'opacity',
  data[0].stage.replace(/\W+/g, '').toLowerCase() === 'trophy' ? 1 : 0.2
);

d3.selectAll('g#year-stages path')
  .attr('stroke-dasharray', function() {
    return this.getTotalLength();
  })
  .attr('stroke-dashoffset', function(d, i) {
    return i === 0 ? 0 : this.getTotalLength();
  });

// update the visual with the selected year
function handleSelect(e) {
  const transitionDuration = 200;
  const { value: year } = e.target;

  const datum = data.find(d => d.year === year);
  d3.select('g#year-trophy')
    .transition()
    .delay(
      datum.stage.replace(/\W+/g, '').toLowerCase() === 'trophy'
        ? transitionDuration * (stages.length + 1)
        : 0
    )
    .attr(
      'opacity',
      datum.stage.replace(/\W+/g, '').toLowerCase() === 'trophy' ? 1 : 0.2
    );

  d3.selectAll('g#year-stages path')
    .transition(transitionDuration)
    .attr('stroke-dashoffset', function() {
      return this.getTotalLength();
    })
    .transition(transitionDuration)
    .delay((d, i) => i * transitionDuration)
    .attr('stroke-dashoffset', function(d, i) {
      const index = stages.indexOf(datum.stage);
      return index >= i || index === -1 ? 0 : this.getTotalLength();
    });

  d3.select('g#year-text text').text(`${datum.stage} in ${datum.year}`);

  d3.select('g#year-text text:nth-of-type(2)')
    .selectAll('tspan')
    .remove();

  d3.select('g#year-text text:nth-of-type(2)')
    .selectAll('tspan')
    .data(datum.teams)
    .enter()
    .append('tspan')
    .text(d => d)
    .attr('x', 0)
    .attr('dy', (d, i) => (i === 0 ? 0 : 24));
}

select.on('input', handleSelect);
