const root = d3.select('#root');

const header = root.append('header');
header.append('h1').text('d3-scale-chromatic');
header
  .append('p')
  .text('D3 offers a variety of color palette to style data visualizations');

// discrete color scale - scatter plot
const articleScatter = root.append('article')
articleScatter.append('h2').text('Categorical scale');
articleScatter.append('p').text('With an ordinal scale, different categories are mapped to different colors.');
// plot three categories of data in two dimensions
const symbol = d3.symbol().size(82);
const randomData = (dataPoints) => Array(dataPoints).fill().map(() => ({
  x: Math.random(),
  y: Math.random(),
}));
const dataPointsScatter = 15;
const symbols = ['circle', 'square', 'wye', 'cross'];
const dataScatter = symbols.map(type => ({type, data: randomData(dataPointsScatter)}));
const margin = 20;
const widthScatter = 300;
const heightScatter = 300;

const colorScaleScatter = d3.scaleOrdinal(d3.schemeCategory10).domain(symbols);

// continuous domain, continuous range
const xScaleScatter = d3.scaleLinear().range([0, widthScatter]).nice();
const yScaleScatter = d3.scaleLinear().range([heightScatter, 0]).nice();

const svgScatter = articleScatter.append('svg').attr('viewBox', `${-margin} ${-margin} ${widthScatter + margin * 2} ${heightScatter + margin * 2}`).attr('width', widthScatter).attr('height', heightScatter);
const groupsScatter = svgScatter.selectAll('g').data(dataScatter).enter().append('g').attr('data-type', d => d.type);

groupsScatter
  .selectAll('path')
  .data(d => d.data)
  .enter()
  .append('path')
  .attr('transform', ({x, y}) => `translate(${xScaleScatter(x)} ${yScaleScatter((y))})`)
  .attr('fill', function() {
    const type = this.parentNode.getAttribute('data-type');
    return colorScaleScatter(type);
  })
  .attr('d', function() {
    const type = this.parentNode.getAttribute('data-type');
    symbol.type(d3[`symbol${type[0].toUpperCase()}${type.slice(1)}`]);
    return symbol();
  });

// continuous color scale - github contributions
const articleGithub = root.append('article');
articleGithub.append('h2').text('Continuous scale');
articleGithub.append('p').text('With a sequential scale, a set of values is mapped to different shades of the same color');
// plot an arbitrary number of data points in a grid of squares
const dataPointsGithub = 100;
const rows = 7;
const columns = Math.ceil(dataPointsGithub / rows);
const dataGitub = Array(dataPointsGithub).fill().map((d, i) => ({
  value: Math.random(),
  column: Math.floor(i / rows),
  row: i % rows,
}));

const widthGithub = 400;
const heightGithub = widthGithub / columns * rows;

// conveniently, the default domain is [0, 1]
const colorScaleGithub = d3.scaleSequential(d3.interpolateGreens);

// discrete domain, continuous range
const xScaleGithub = d3.scaleBand().domain(d3.range(columns)).range([0, widthGithub]).padding(0.2);
const yScaleGithub = d3.scaleBand().domain(d3.range(rows)).range([0, heightGithub]).padding(0.2);

const svgGithub = articleGithub.append('svg').attr('viewBox', `0 0 ${widthGithub} ${heightGithub}`).attr('width', widthGithub).attr('height', heightGithub);
svgGithub
  .selectAll('rect')
  .data(dataGitub)
  .enter()
  .append('rect')
  .attr('x', d => xScaleGithub(d.column))
  .attr('rx', 1)
  .attr('y', d => yScaleGithub(d.row))
  .attr('width', xScaleGithub.bandwidth())
  .attr('height', yScaleGithub.bandwidth())
  .attr('fill', d => colorScaleGithub(d.value));