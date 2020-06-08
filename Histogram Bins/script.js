const main = d3.select('main');
const header = main.append('header');
header.append('h1').text('Bins');
header.append('p').html('Use <code>d3.bin</code> to slot a random set of data in a series of evenly-spaced containers.');

// input values
const datapoints = 300;
const thresholds = 25;
const mu = 0;
const sigma = 0.5;


const random = () => d3.randomLogNormal(mu, sigma)();
const data = Array(datapoints).fill().map(() => random());
const min = d3.min(data);
const max = d3.max(data);

const bin = d3.bin().thresholds(thresholds)
const bins = bin(data);
const articleHTML = main.append('article');
articleHTML.append('h2').text('Input');

const input = [
    {
        term: 'Function',
        description: 'd3.randomLogNormal(mu, sigma)'
    },
    {
        term: 'Data Points',
        description: datapoints
    },
    {
        term: 'Thresholds',
        description: thresholds
    },
    {
        term: 'mu',
        description: mu
    },
    {
        term: 'sigma',
        description: sigma
    },
];

const dl = articleHTML.append('dl');
input.forEach(({term, description}) => {
    dl.append('dt').text(term)
    dl.append('dd').text(description)
});

const height = 400; 
const width = 400;
const xScale = d3.scaleBand().domain(d3.range(bins.length)).range([0, width]).padding(0.2)
const yScale = d3.scaleLinear().domain([0, d3.max(bins, d => d.length)]).range([0, height])


const articleSVG = main.append('article');
articleSVG.append('h2').text('Output');

const svg = articleSVG
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('width', width)
    .attr('height', height)

    const groupBins = svg
        .selectAll('g.bin')
        .data(bins)
        .enter()
        .append('g')
        .attr('class', 'bin')
        .attr('transform', (d, i) => `translate(${xScale(i)} ${height})`);
    
    groupBins
        .append('rect')
        .attr('stroke', 'none')
        .attr('fill', 'currentColor')
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => yScale(d.length))
        .attr('transform', 'scale(1 -1)');
