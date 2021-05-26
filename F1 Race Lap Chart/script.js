const { select, selectAll, scaleLinear, scaleBand, range, line, axisTop } = d3;

const data = {
  laps: 53,
  drivers: [
    { name: "Pierre Gasly", short: "GAS", color: "hsl(0, 0%, 100%)", position: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,15,14,9,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] },
    { name: "Carlos Sainz", short: "SAI", color: "hsl(36, 100%, 50%)", position: [3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,8,6,6,6,6,6,4,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2] },
    { name: "Lance Stroll", short: "STR", color: "hsl(320, 79%, 80%)", position: [8,8,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,2,2,2,2,2,5,5,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3] },
    { name: "Lando Norris", short: "NOR", color: "hsl(36, 100%, 50%)", position: [6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,9,7,7,7,7,7,6,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4] },
    { name: "Valtteri Bottas", short: "BOT", color: "hsl(174, 100%, 41%)", position: [2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,10,8,8,8,8,8,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5] },
    { name: "Daniel Ricciardo", short: "RIC", color: "hsl(58, 100%, 50%)", position: [7,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,11,10,10,10,10,9,8,7,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6] },
    { name: "Lewis Hamilton", short: "HAM", color: "hsl(174, 100%, 41%)", position: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,4,17,17,15,15,15,15,15,15,15,15,15,14,13,12,12,12,11,10,10,10,9,9,8,8,7] },
    { name: "Esteban Ocon", short: "OCO", color: "hsl(58, 100%, 50%)", position: [12,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,11,14,12,12,12,12,10,9,8,8,8,8,8,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,7,7,8] },
    { name: "Daniil Kvyat", short: "KVY", color: "hsl(0, 0%, 100%)", position: [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10,13,15,13,13,13,13,11,10,10,9,9,9,9,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,9,9,9] },
    { name: "Sergio Pérez", short: "PER", color: "hsl(320, 79%, 80%)", position: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,12,14,14,14,14,13,11,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,9,9,10,10,10,10,10] },
    { name: "Nicholas Latifi", short: "LAT", color: "hsl(209, 100%, 65%)", position: [20,19,19,19,19,19,18,18,18,18,18,18,18,18,18,18,18,19,18,18,18,18,16,7,9,9,9,9,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,11,11] },
    { name: "Romain Grosjean", short: "GRO", color: "hsl(0, 0%, 69%)", position: [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,15,15,14,12,12,17,17,17,17,17,17,15,13,13,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,12] },
    { name: "Kimi Räikkönen", short: "RAI", color: "hsl(0, 67%, 47%)", position: [14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,16,16,16,12,5,4,4,4,4,2,2,2,2,2,2,3,4,5,6,7,7,7,7,7,8,9,9,11,11,11,11,11,11,12,13] },
    { name: "George Russell", short: "RUS", color: "hsl(209, 100%, 65%)", position: [19,17,18,18,18,18,17,17,17,17,17,17,17,17,17,17,17,17,16,15,14,13,18,16,15,15,15,15,16,15,14,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14] },
    { name: "Alexander Albon", short: "ALB", color: "hsl(228, 98%, 63%)", position: [9,15,15,15,14,14,14,14,14,14,14,14,14,14,14,14,14,13,12,12,11,11,15,18,16,16,16,16,17,16,15,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15] },
    { name: "Antonio Giovinazzi", short: "GIO", color: "hsl(0, 67%, 47%)", position: [18,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,14,14,13,13,15,10,4,5,5,5,5,3,3,9,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16] },
    { name: "Max Verstappen", short: "VER", color: "hsl(228, 98%, 63%)", position: [5,7,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,13,11,11,11,11,14,14,16] },
    { name: "Charles Leclerc", short: "LEC", color: "hsl(0, 100%, 46%)", position: [13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,16,17,17,17,17,14,6] },
    { name: "Kevin Magnussen", short: "MAG", color: "hsl(0, 0%, 69%)", position: [15,20,20,20,20,20,19,19,19,19,19,19,19,19,19,19,19,18] },
    { name: "Sebastian Vettel", short: "VET", color: "hsl(0, 100%, 46%)", position: [17,18,17,17,17,17,20] },
  ]
}

const main = select('main');
main.append('h1').text('F1 race lap chart — Italy 2020');

const dimensions = {
  width: 800,
  height: 400,
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

function drawLapChart(container, data) {
  const { laps, drivers, firstLap = 0 } = data;

  const id = Math.random()
    .toString()
    .split('.')
    .pop();
    
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

  const xScale = scaleLinear()
    .domain([0, laps])
    .range([0, dimensions.boundedWidth]);

  const yScale = scaleBand()
    .domain(range(drivers.length))
    .range([0, dimensions.boundedHeight]);

  const lineGenerator = line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d - 1) + yScale.bandwidth() / 2);

  const groupAxis = viz.append('g');
  const xAxis = axisTop(xScale)
    .ticks(5)
    .tickSize(0)
    .tickFormat(d => d + firstLap);
  const xAxisGroup = groupAxis.append('g').call(xAxis);

  xAxisGroup.select('path').remove();

  xAxisGroup
    .style('color', 'hsl(0, 0%, 80%)')
    .selectAll('text')
    .attr('font-size', 11);

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
    .append('g')
    .attr('class', d => `driver-${id} ${d.short}-${id}`);

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
    .attr('stroke', 'hsl(0, 0%, 100%)')
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
    .attr('font-size', 14)
    .attr(
      'transform',
      d =>
        `translate(${dimensions.boundedWidth + 15} ${yScale(
          d.position[d.position.length - 1] - 1
        ) +
          yScale.bandwidth() / 2})`
    );

  groupsDrivers
    .filter(d => d.position.length === laps + 1)
    .append('rect')
    .attr('y', d => yScale(d.position[d.position.length - 1] - 1))
    .attr('width', dimensions.boundedWidth + dimensions.margin.right)
    .attr('height', yScale.bandwidth())
    .attr('opacity', 0)
    .on('mouseenter', (e, { short }) => {
      selectAll(`.driver-${id}`).style('opacity', 0.2);
      selectAll(`.${short}-${id}`).style('opacity', 1);
    });

  viz.on('mouseleave', () => {
    selectAll(`.driver-${id}`).style('opacity', 1);
  });
}

const dataPositions = Array(data.laps)
  .fill('')
  .map((_, i) =>
    data.drivers.reduce(
      (acc, { position }) => (position[i] ? [...acc, position[i]] : [...acc]),
      []
    )
  );

const changes = dataPositions.reduce(
  (acc, curr, i, array) =>
    i === 0
      ? acc
      : acc + curr.reduce((a, c, j) => (c === array[i - 1][j] ? a : a + 1), 0),
  0
);

const articles = [
  {
    title: 'The race',
    brief: `Over ${
      data.laps
    } laps the drivers change positions ${changes} times. This highlights a very interesting race, but causes a rather noisy visualization as well.`,
  },
  {
    title: 'Pit stop',
    brief:
      'On lap 19 Kevin Magnussen pulls over to the side of the track,  the safety car is deployed, and the drivers scatter for a pit stop. This causes a considerable shuffle in positions. Further, the pit lane is not opened immediately, but Lewis Hamilton and Antonio Giovinazzi fail to notice this, and incur in a penalty of 10 seconds.',
    interval: [20, 24],
  },
  {
    title: 'Red flag',
    brief:
      'On top of the commotion, the race is interrupted on lap 25. Charles Leclerc loses the back of the car, hits the tyre barrier, and the marshals are called to clear the debris. The 10 second penalty at the restart of the race causes Hamilton to drop behind and opens the door for Pierre Gasly to take a surprising, emotional victory.',
    interval: [26, 31],
  },
];

articles.forEach(({ title, brief, interval }) => {
  const article = main.append('article');
  article.append('h2').text(title);
  article.append('p').text(brief);

  if (!interval) {
    drawLapChart(article, data);
  } else {
    const [firstLap, lastLap] = interval;

    const dataArticle = {
      laps: lastLap - firstLap,
      firstLap,
      drivers: data.drivers
        .filter(({ position }) => position[firstLap])
        .map(({ name, short, color, position }) => ({
          name,
          short,
          color,
          position: position.slice(firstLap, lastLap + 1),
        })),
    };
    drawLapChart(article, dataArticle);
  }
});
