const main = d3.select('main');
main.append('p').text('What the average web developer spends time thinking about. 1990-2020');

const colors = ["#7b3634","#a43838","#d13835","#df7d7a","#e7a6a0","#8b7833","#bf9e34","#eec650","#fcde7a","#f9f4cc","#4c693e","#568544","#7db16b","#9bca88","#9bca88","#3f70d0", "#5a8cdc", "#7ca8e9", "#acc6f2", "#564884", "#796aad", "#d4d0e2"];
const randomBeta = ({alpha = 2.5, beta = 2.5} = {}) => d3.randomBeta(alpha, beta)();
const rangeAlpha = [0.5, 4.5];
const rangeBeta = [3.5, 0.5];
const ticks = 10;
const scaleValues = d3.scaleLinear().domain([0, 1]);
const bin = d3.bin().domain(scaleValues.domain()).thresholds(scaleValues.ticks(ticks))
const dataPoints = 1000;
const scaleAlpha = d3.scaleLinear().domain([0, colors.length - 1]).range(rangeAlpha);
const scaleBeta = d3.scaleLinear().domain([0, colors.length - 1]).range(rangeBeta);
const dataValues = colors.map((color, index) => {
    const alpha = scaleAlpha(index);
    const beta = scaleBeta(index);
    const betas = Array(dataPoints).fill().map(() => randomBeta({alpha, beta}));
    const bins = bin(betas);
    const values = bins.map(bin => bin.length).slice(0, ticks);
    return values;
});

const dataTotals = Array(ticks).fill().map((value, index) => dataValues.map(values => values[index]).reduce((acc, curr) => acc + curr, 0));

const data = dataValues.map((values, indexValues) => {
    const color = colors[indexValues];
    return ({
        color,
        values: values.map((value, indexValue) => value / dataTotals[indexValue])
    })
});

const dataStack = Array(ticks).fill().map(() => ({}));
data.forEach(({color, values}) => {
    values.forEach((value, index) => {
        dataStack[index][color] = value;
    });
});

const stack = d3
    .stack()
    .keys(colors);

const series = stack(dataStack);

const margin = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
}
const width = 500;
const height = 350;

const min = d3.min(series[0], d => d[0]);
const max = d3.max(series[series.length - 1], d => d[1]);

main
  .append('svg')
  .attr('id', 'spider-chart')
  .attr('viewBox', `0 0 ${width} ${height}`)
  .attr('width', width)
  .attr('height', height);

const scaleX = d3.scalePoint().domain(d3.range(ticks)).range([margin.left, width - margin.right]);
const scaleY = scaleValues.range([height - margin.bottom, margin.top]);

const area = d3
    .area()
    .x((d, i) => scaleX(i))
    .y0(d => scaleY(d[0]))
    .y1(d => scaleY(d[1]))
    .curve(d3.curveCatmullRom);

d3.select('svg')
    .append('rect')
    .attr('x', margin.left)
    .attr('y', margin.top)
    .attr('width', (width - (margin.left + margin.right)))
    .attr('height', (height - (margin.top + margin.bottom)))
    .attr('fill', '#e6e3f0');

d3
    .select('svg')
    .selectAll('path.area')
    .data(series)
    .enter()
    .append('path')
    .attr('class', 'area')
    .attr('d', d => area(d))
    .attr('fill', d => d.key)
    .attr('stroke', d => d.key);