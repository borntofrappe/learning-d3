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

const main = d3.select('body').append('main');
main.append('h1').text('Football Stats');

const section = main.append('section');
const tooltip = d3.select('body').append('div').attr('id', 'tooltip');
section
  .append('h2')
  .text(
    'In the European League competition, the success of French teams has been minimal.'
  );

const width = 800;
const height = 90;
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 100,
};

const svg = section.append('svg').attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);
const svgGroup = svg.append('g').attr('transform', `translate(${margin.left} ${margin.top})`)

const xScale = d3
  .scaleBand()
  .domain(data.map(({year}) => year))
  .range([0, width]);

const yScale = d3
  .scaleBand()
  .domain(stages)
  .range([height, 0]);

const padding = 0.25;
const size = d3.min([xScale.bandwidth(), yScale.bandwidth()]) * (1 - padding)

const yAxis = d3
  .axisLeft(yScale)
  .tickSize(5)
  .tickSizeOuter(0);

const yAxisGroup =  svgGroup.append('g').call(yAxis);

yAxisGroup.selectAll('text').style('font-weight', '700').style('font-size', '14');
yAxisGroup.selectAll('line').attr('stroke-width', '0.5');
yAxisGroup.selectAll('path').attr('stroke-width', '0.5');

const dataGroup = svgGroup.append('g');
const dataYearGroups = dataGroup.selectAll('g').data(data).enter().append('g').attr('transform', ({year}) => `translate(${xScale(year)} ${height})`)
const dataStageGroups = dataYearGroups.selectAll('g').data(({stage}) => [...stages.slice(0, stages.indexOf(stage) + 1)]).enter().append('g').attr('class', d => d.replace(/\W+/g, '').toLowerCase()).attr('transform', (d, i) => `translate(${xScale.bandwidth() / 2} ${(i * yScale.bandwidth() + yScale.bandwidth() / 2) * -1})`);
dataStageGroups.append('rect').attr('transform', `translate(${size / 2 * -1} ${size / 2 * -1})`).attr('width', size).attr('height', size).attr('fill', 'currentColor')

dataYearGroups.selectAll('.final').style('color', '#ff3232')
dataYearGroups.append('rect').attr('transform', `translate(0 ${-height})`).attr('width', xScale.bandwidth()).attr('height', height).attr('opacity', 0)
dataYearGroups.on('mouseenter', function(d) {
  d3.select(this).selectAll('g').attr('class', 'hover');

  tooltip.style('left', `${d3.event.x + xScale.bandwidth()}px`);
  tooltip.style('top', `${d3.event.y}px`);
  tooltip.style('display', 'block');
  tooltip.append('p').text(d.stage);
  tooltip.append('ul');
  tooltip.select('ul').selectAll('li').data(d.teams).enter().append('li').text(d => d);
})

dataYearGroups.on('mouseleave', function() {
  d3.select(this).selectAll('g').attr('class', '')
  tooltip.style('display', 'none');
  tooltip.select('p').remove();
  tooltip.select('ul').remove();
})