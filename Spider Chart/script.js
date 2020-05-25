const data = [
    {
        name: "espeon",
        color: 'gold',
        stats: {
            hp: 65,
            attack: 65,
            defense: 60,
            specialAttack: 130,
            specialDefense: 95,
            speed: 110,
        }
    },
    {
        name: "umbreon",
        color: 'black',
        stats: {
            hp: 95,
            attack: 65,
            defense: 110,
            specialAttack: 60,
            specialDefense: 130,
            speed: 65,
        }
    }
];

const alias = {
    hp: 'hp',
    attack: 'atk',
    defense: 'def',
    specialAttack: 'spdef',
    specialDefense: 'spatk',
    speed: 'speed',
};

const statsKeys = data.map(({stats}) => Object.keys(stats)).reduce((acc, curr) => {
    const keys = curr.filter(key => !acc.includes(key));
    return [...acc, ...keys];
}, []);
const statsValues = data.map(({stats}) => Object.values(stats)).reduce((acc, curr) => [...acc, ...curr],[]);
const maxStat = d3.max(statsValues);

const main = d3.select('main');
main.append('h1').text('Spider Chart');

main
    .append('ul');

d3.select('ul')
    .selectAll('li')
    .data(data)
    .enter()
    .append('li')
    .text(d => d.name)
    .append('svg')
    .attr('viewBox', '-5 -5 10 10')
    .attr('width', '1em')
    .attr('height', '1em')
    .append('circle')
    .attr('r', 5)
    .attr('fill', d => d.color)
    .attr('stroke', 'none');


const size = 500;
const margin = 40;
const innerRadius = 0;
const outerRadius = (size - margin) / 2;

const scaleAngle = d3.scalePoint().domain([...statsKeys, ""]).range([0, Math.PI * 2]);
const scaleRadius = d3.scaleLinear().domain([0, maxStat * 1.08]).range([innerRadius, outerRadius]).nice();
const lineRadial = d3.lineRadial().angle(d => scaleAngle(d.stat)).radius(d => scaleRadius(d.value)).curve(d3.curveLinearClosed);

main
    .append('svg')
    .attr('id', 'spider-chart')
    .attr('viewBox', `-${size / 2} -${size / 2} ${size} ${size}`)
    .attr('width', size)
    .attr('height', size);

d3
    .select('#spider-chart')
    .selectAll('g.legend')
    .data(statsKeys)
    .enter()
    .append('g')
    .attr('class', 'legend');

const ticks = 6;
const dataTicks = Array(ticks).fill().map((value, index, { length }) => Math.round(maxStat / length * (index + 1)));

d3.selectAll('.legend')
    .append('text')
    .text(d => alias[d])
    .attr('fill', 'currentColor')
    .attr('stroke', 'none')
    .attr('font-size', 18)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('transform', d => `rotate(${scaleAngle(d) * 180 / Math.PI}) translate(0 -${outerRadius}) rotate(-${scaleAngle(d) * 180 / Math.PI})`);

d3.selectAll('.legend')
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 2)
    .attr('opacity', 0.25)
    .attr('d', `M 0 -${scaleRadius(dataTicks[0])} V -${scaleRadius(dataTicks[dataTicks.length - 1])}`)
    .attr('transform', d => `rotate(${scaleAngle(d) * 180 / Math.PI})`);


d3
    .select('.legend')
    .append('g')
    .attr('class', 'ticks')

d3
    .selectAll('.ticks')
    .selectAll('g.tick')
    .data(dataTicks)
    .enter()
    .append('g')
    .attr('class', 'tick');

d3
    .selectAll('.tick')
    .append('text')
    .attr('x', '5')
    .attr('transform', (d) => `translate(0 -${scaleRadius(d)})`)
    .text(d => d)
    .attr('font-size', 15)
    .attr('opacity', 0.5);

d3
    .selectAll('.tick')
    .append('path')
    .attr('d', d => lineRadial(statsKeys.map((stat) => ({ stat, value: d }))))
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 2)
    .attr('opacity', 0.25);

lineRadial.curve(d3.curveCatmullRomClosed);
data.forEach(({color, stats}) => {
    const dataStats = Object.entries(stats).map(([stat, value]) => ({ stat, value }));

    d3.select('#spider-chart')
        .append('path')
        .attr('d', lineRadial(dataStats))
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 5);

    d3.select('#spider-chart')
        .append('path')
        .attr('d', lineRadial(dataStats))
        .attr('fill', color)
        .attr('opacity', 0.25)
        .attr('stroke', 'none');

});




// d3.select('svg')
//     .selectAll('path.legend')
//     .data(dataLegend)
//     .enter()
//     .append('path')
//     .attr('class', 'legend')
//     .attr('d', d => lineRadial(d))
//     .attr('fill', 'none')
//     .attr('stroke', 'currentColor')
//     .attr('stroke-width', 2)
//     .attr('opacity', 0.25);



