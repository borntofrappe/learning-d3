const data = {
  laps: 53,
  drivers: [
    { name: "Pierre Gasly", short: "GAS", color: "#ffffff", position: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,15,14,9,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
    { name: "Carlos Sainz", short: "SAI", color: "#FF9800", position: [3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,8,6,6,6,6,6,4,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2] },
    { name: "Lance Stroll", short: "STR", color: "#f4a2d8", position: [8,8,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,2,2,2,2,2,5,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3] },
    { name: "Lando Norris", short: "NOR", color: "#FF9800", position: [6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,9,7,7,7,7,7,6,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4] },
    { name: "Valtteri Bottas", short: "BOT", color: "#00d2be", position: [2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,10,8,8,8,8,8,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5] },
    { name: "Daniel Ricciardo", short: "RIC", color: "#FFF500", position: [7,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,11,10,10,10,10,9,8,7,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6] },
    { name: "Lewis Hamilton", short: "HAM", color: "#00d2be", position: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,4,17,17,15,15,15,15,15,15,15,15,15,14,13,12,12,12,11,10,10,10,9,9,8,8,7] },
    { name: "Esteban Ocon", short: "OCO", color: "#FFF500", position: [12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,11,14,12,12,12,12,10,9,8,8,8,8,8,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,7,7,8] },
    { name: "Daniil Kvyat", short: "KVY", color: "#ffffff", position: [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,13,15,13,13,13,13,11,10,10,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,9,9,9] },
    { name: "Sergio Pérez", short: "PER", color: "#f4a2d8", position: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,12,14,14,14,14,13,11,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,9,9,10,10,10,10,10] },
    { name: "Nicholas Latifi", short: "LAT", color: "#0082fa", position: [20,19,19,19,19,19,18,18,18,18,18,18,18,18,18,18,18,19,18,18,18,18,16,7,9,9,9,9,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,11,11] },
    { name: "Romain Grosjean", short: "GRO", color: "#787878", position: [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,15,14,12,12,17,17,17,17,17,17,15,13,13,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,12] },
    { name: "Kimi Räikkönen", short: "RAI", color: "#900000", position: [14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,16,16,16,12,5,4,4,4,4,2,2,2,2,2,2,3,4,5,6,7,7,7,7,7,8,9,9,11,11,11,11,11,11,12,13] },
    { name: "George Russell", short: "RUS", color: "#0082fa", position: [19,17,18,18,18,18,17,17,17,17,17,17,17,17,17,17,17,17,16,15,14,13,18,16,15,15,15,15,16,15,14,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14] },
    { name: "Alexander Albon", short: "ALB", color: "#0600ef", position: [9,15,15,15,14,14,14,14,14,14,14,14,14,14,14,14,14,13,12,12,11,11,15,18,16,16,16,16,17,16,15,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15] },
    { name: "Antonio Giovinazzi", short: "GIO", color: "#900000", position: [18,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,14,14,13,13,15,10,4,5,5,5,5,3,3,9,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16] },
    { name: "Max Verstappen", short: "VER", color: "#0600ef", position: [5,7,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,13,11,11,11,11,14,14,16] },
    { name: "Charles Leclerc", short: "LEC", color: "#dc0000", position: [13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,16,17,17,17,17,14,6] },
    { name: "Kevin Magnussen", short: "MAG", color: "#787878", position: [15,20,20,20,20,20,19,19,19,19,19,19,19,19,19,19,19,18] },
    { name: "Sebastian Vettel", short: "VET", color: "#dc0000", position: [17,18,17,17,17,17,20] },
  ]
}

const main = d3.select('main');
main.append('h1').text('F1 race lap chart — Italy 2020');

const dimensions = {
  width: 800,
  height: 600,
  margin: {
    top: 20,
    right: 60,
    bottom: 10,
    left: 10,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

function drawLapChart({ laps, drivers, firstLap = 0 }) {
  const viz = main
    .append('svg')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const xScale = d3
    .scaleLinear()
    .domain([0, laps])
    .range([0, dimensions.boundedWidth]);
  const yScale = d3
    .scaleBand()
    .domain(d3.range(drivers.length))
    .range([0, dimensions.boundedHeight]);

  const lineGenerator = d3
    .line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d - 1) + yScale.bandwidth() / 2);

  const groupAxis = viz.append('g');
  const xAxis = d3
    .axisTop(xScale)
    .ticks(5)
    .tickSize(0)
    .tickFormat(d => d + firstLap);
  const xAxisGroup = groupAxis.append('g').call(xAxis);

  xAxisGroup.select('path').remove();

  xAxisGroup
    .style('color', 'hsl(0, 0%, 80%)')
    .selectAll('text')
    .attr('font-size', 11)

  xAxisGroup
    .selectAll('g.tick')
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 1)
    .attr('opacity', 0.3)
    .attr('d', `M 0 0 v ${dimensions.boundedHeight}`);

  const groupsDrivers = viz
    .append('g')
    .selectAll('g')
    .data(drivers)
    .enter()
    .append('g');

  groupsDrivers
    .append('path')
    .attr('d', d => lineGenerator(d.position))
    .attr('fill', 'none')
    .attr('stroke', d => d.color)
    .attr('stroke-width', 3)
    .attr('stroke-linecap', 'round')
    .attr('stroke-linejoin', 'round');

  groupsDrivers
    .append('circle')
    .attr('r', 5)
    .attr('fill', d => d.color)
    .attr('stroke', '#ffffff')
    .attr('stroke-width', 3)
    .attr(
      'transform',
      d =>
        `translate(${xScale(d.position.length - 1)} ${yScale(
          d.position[d.position.length - 1] - 1
        ) +
          yScale.bandwidth() / 2})`
    );

  groupsDrivers
    .filter(d => d.position.length === laps + 1)
    .append('text')
    .text(d => `${d.position[d.position.length - 1]} ${d.short}`)
    .attr('dominant-baseline', 'middle')
    .attr('fill', d => d.color)
    .attr('font-size', 13)
    .attr(
      'transform',
      d =>
        `translate(${dimensions.boundedWidth +
          15} ${yScale(
          d.position[d.position.length - 1] - 1
        ) +
          yScale.bandwidth() / 2})`
    );
}

const focus = [[0, data.laps], [20, 24], [27, 31]];

focus.forEach(([firstLap, lastLap]) => {
  const dataFocus = {
    laps: lastLap - firstLap,
    firstLap,
    drivers: data.drivers.filter(({position}) => position[firstLap]).map(({ name, short, color, position }) => ({
      name,
      short,
      color,
      position: [...position.slice(firstLap, lastLap + 1)]
    })),
  };
  drawLapChart(dataFocus);
});

