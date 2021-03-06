const winsThreshold = 5;
const data = [
  { name: 'Lewis Hamilton', races: 266, wins: 95 },
  { name: 'Michael Schumacher', races: 306, wins: 91 },
  { name: 'Sebastian Vettel', races: 257, wins: 53 },
  { name: 'Alain Prost', races: 199, wins: 51 },
  { name: 'Ayrton Senna', races: 161, wins: 41 },
  { name: 'Fernando Alonso', races: 311, wins: 32 },
  { name: 'Nigel Mansell', races: 187, wins: 31 },
  { name: 'Jackie Stewart', races: 99, wins: 27 },
  { name: 'Niki Lauda', races: 171, wins: 25 },
  { name: 'Jim Clark', races: 72, wins: 25 },
  { name: 'Juan Manuel Fangio', races: 51, wins: 24 },
  { name: 'Nico Rosberg', races: 206, wins: 23 },
  { name: 'Nelson Piquet', races: 204, wins: 23 },
  { name: 'Damon Hill', races: 115, wins: 22 },
  { name: 'Kimi Räikkönen', races: 329, wins: 21 },
  { name: 'Mika Häkkinen', races: 161, wins: 20 },
  { name: 'Stirling Moss', races: 66, wins: 16 },
  { name: 'Jenson Button', races: 306, wins: 15 },
  { name: 'Graham Hill', races: 176, wins: 14 },
  { name: 'Emerson Fittipaldi', races: 144, wins: 14 },
  { name: 'Jack Brabham', races: 126, wins: 14 },
  { name: 'David Coulthard', races: 246, wins: 13 },
  { name: 'Alberto Ascari', races: 32, wins: 13 },
  { name: 'Carlos Reutemann', races: 146, wins: 12 },
  { name: 'Alan Jones', races: 116, wins: 12 },
  { name: 'Mario Andretti', races: 128, wins: 12 },
  { name: 'Jacques Villeneuve', races: 163, wins: 11 },
  { name: 'Felipe Massa', races: 269, wins: 11 },
  { name: 'Rubens Barrichello', races: 322, wins: 11 },
  { name: 'Max Verstappen', races: 119, wins: 10 },
  { name: 'Jody Scheckter', races: 112, wins: 10 },
  { name: 'Ronnie Peterson', races: 123, wins: 10 },
  { name: 'James Hunt', races: 92, wins: 10 },
  { name: 'Gerhard Berger', races: 210, wins: 10 },
  { name: 'Mark Webber', races: 215, wins: 9 },
  { name: 'Valtteri Bottas', races: 156, wins: 9 },
  { name: 'Jacky Ickx', races: 114, wins: 8 },
  { name: 'Denny Hulme', races: 112, wins: 8 },
  { name: 'Daniel Ricciardo', races: 188, wins: 7 },
  { name: 'Juan Pablo Montoya', races: 94, wins: 7 },
  { name: 'René Arnoux', races: 149, wins: 7 },
  { name: 'Gilles Villeneuve', races: 67, wins: 6 },
  { name: 'John Surtees', races: 111, wins: 6 },
  { name: 'Ralf Schumacher', races: 180, wins: 6 },
  { name: 'Jochen Rindt', races: 60, wins: 6 },
  { name: 'Riccardo Patrese', races: 256, wins: 6 },
  { name: 'Jacques Laffite', races: 176, wins: 6 },
  { name: 'Tony Brooks', races: 38, wins: 6 },
  { name: 'John Watson', races: 152, wins: 5 },
  { name: 'Keke Rosberg', races: 114, wins: 5 },
  { name: 'Clay Regazzoni', races: 132, wins: 5 },
  { name: 'Nino Farina', races: 33, wins: 5 },
  { name: 'Michele Alboreto', races: 194, wins: 5 },
  { name: 'Bruce McLaren', races: 100, wins: 4 },
  { name: 'Eddie Irvine', races: 146, wins: 4 },
  { name: 'Dan Gurney', races: 86, wins: 4 },
  { name: 'Didier Pironi', races: 70, wins: 3 },
  { name: 'Phil Hill', races: 49, wins: 3 },
  { name: 'Johnny Herbert', races: 161, wins: 3 },
  { name: 'Mike Hawthorn', races: 45, wins: 3 },
  { name: 'Heinz-Harald Frentzen', races: 156, wins: 3 },
  { name: 'Giancarlo Fisichella', races: 229, wins: 3 },
  { name: 'Peter Collins', races: 32, wins: 3 },
  { name: 'Thierry Boutsen', races: 163, wins: 3 },
  { name: 'Bill Vukovich', races: 5, wins: 2 },
  { name: 'Wolfgang von Trips', races: 27, wins: 2 },
  { name: 'Maurice Trintignant', races: 82, wins: 2 },
  { name: 'Patrick Tambay', races: 114, wins: 2 },
  { name: 'Jo Siffert', races: 96, wins: 2 },
  { name: 'Pedro Rodríguez', races: 54, wins: 2 },
  { name: 'Peter Revson', races: 30, wins: 2 },
  { name: 'Charles Leclerc', races: 59, wins: 2 },
  { name: 'Jean-Pierre Jabouille', races: 49, wins: 2 },
  { name: 'José Froilán González', races: 26, wins: 2 },
  { name: 'Patrick Depailler', races: 95, wins: 2 },
  { name: 'Elio de Angelis', races: 108, wins: 2 },
  { name: 'Rodger Ward', races: 12, wins: 1 },
  { name: 'Lee Wallard', races: 2, wins: 1 },
  { name: 'Jarno Trulli', races: 252, wins: 1 },
  { name: 'Piero Taruffi', races: 18, wins: 1 },
  { name: 'Bob Sweikert', races: 5, wins: 1 },
  { name: 'Ludovico Scarfiotti', races: 10, wins: 1 },
  { name: 'Troy Ruttman', races: 8, wins: 1 },
  { name: 'Jim Rathmann', races: 10, wins: 1 },
  { name: 'Sergio Pérez', races: 191, wins: 1 },
  { name: 'Johnnie Parsons', races: 9, wins: 1 },
  { name: 'Olivier Panis', races: 157, wins: 1 },
  { name: 'Carlos Pace', races: 72, wins: 1 },
  { name: 'Gunnar Nilsson', races: 31, wins: 1 },
  { name: 'Alessandro Nannini', races: 76, wins: 1 },
  { name: 'Luigi Musso', races: 24, wins: 1 },
  { name: 'Jochen Mass', races: 105, wins: 1 },
  { name: 'Pastor Maldonado', races: 95, wins: 1 },
  { name: 'Robert Kubica', races: 97, wins: 1 },
  { name: 'Heikki Kovalainen', races: 111, wins: 1 },
  { name: 'Innes Ireland', races: 50, wins: 1 },
  { name: 'Sam Hanks', races: 8, wins: 1 },
  { name: 'Richie Ginther', races: 52, wins: 1 },
  { name: 'Peter Gethin', races: 30, wins: 1 },
  { name: 'Pierre Gasly', races: 64, wins: 1 },
  { name: 'Pat Flaherty', races: 6, wins: 1 },
  { name: 'Luigi Fagioli', races: 7, wins: 1 },
  { name: 'François Cevert', races: 46, wins: 1 },
  { name: 'Jimmy Bryan', races: 9, wins: 1 },
  { name: 'Vittorio Brambilla', races: 74, wins: 1 },
  { name: 'Jo Bonnier', races: 104, wins: 1 },
  { name: 'Jean-Pierre Beltoise', races: 86, wins: 1 },
  { name: 'Lorenzo Bandini', races: 42, wins: 1 },
  { name: 'Giancarlo Baghetti', races: 21, wins: 1 },
  { name: 'Jean Alesi', races: 201, wins: 1 },

].filter(({wins}) => wins >= winsThreshold);

function drawBarChart() {
  const metrics = [
    {
      id: 'wins-absolute',
      button: 'absolute',
      label: 'total wins',
      accessor: d => d.wins,
    },
    {
      id: 'wins-relative',
      button: 'relative',
      label: 'wins over races',
      accessor: d => d.wins / d.races,
    },
  ];

  /* INTRODUCTORY MARKUP */
  d3.select('#wrapper')
    .append('h1')
    .text("How much they won");

  d3.select('#wrapper')
    .append('p')
    .html(
      `Number of ${metrics
        .map(({ id, button }) => `<button id="${id}">${button}</button>`)
        .join(
          ''
        )} victories by F1 drivers who won at least ${winsThreshold} races.`
    );

    /* STATIC SVG
    included regardless of the selected option
    */
    const dimensions = {
      width: 800,
      height: 1600,
      margin: {
        top: 35,
        right: 40,
        bottom: 10,
        left: 120,
      },
    };
  
    dimensions.boundedWidth =
      dimensions.width - (dimensions.margin.left + dimensions.margin.right);
    dimensions.boundedHeight =
      dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const wrapper = d3
    .select('#wrapper')
    .append('svg')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .attr('width', dimensions.width)
    .attr('height', dimensions.height);

  wrapper.attr('tabindex', '0').attr('role', 'figure');

  wrapper.append('title');

  const bounds = wrapper
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const axisGroup = bounds.append('g');
  const barsGroup = bounds.append('g').attr('id', 'bars');

  barsGroup
    .attr('tabindex', '0')
    .attr('role', 'list')
    .attr('aria-label', 'Bars');

  axisGroup
    .append('g')
    .attr('id', 'x-axis')
    .append('text')
    .attr('id', 'x-axis-label')
    .attr('x', dimensions.boundedWidth / 2)
    .attr('y', -dimensions.margin.top + 10);

  d3
    .select('#wrapper')
    .append('p')
    .html('Inspired by <a href="https://pudding.cool/2017/08/the-office/">this essay</a> to practice with D3, data binding and transitions.');

  function drawBars(metric) {
    /* UPDATE VISUALIZATION
    according to the chosen metric update
    - <title> element
    - label on the x-axis
    - y position of the bars
    - width of the rectangle
    */
    d3.select('#wrapper svg title').text(
      `Bar chart hihglighting the number of ${metric.label}`
    );

    d3.select('#wrapper svg #x-axis-label').text(metric.label);

    const xAccessor = metric.accessor;
    const yAccessor = d => d.name;

    const sortedData = data.sort((a, b) =>
      xAccessor(a) < xAccessor(b) ? 1 : -1
    );

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, xAccessor)])
      .range([0, dimensions.boundedWidth]);

    const xAxisGenerator = d3
      .axisTop()
      .scale(xScale)
      .tickSize(0)
      .tickPadding(5);

    const xAxis = axisGroup.select('#x-axis').call(xAxisGenerator);

    xAxis.selectAll('path').remove();

    xAxis
      .selectAll('g.tick')
      .append('path')
      .attr('d', `M 0 0 V ${dimensions.boundedHeight}`)
      .attr('stroke', 'currentColor')
      .attr('stroke-width', 0.5)
      .attr('stroke-dasharray', '4 6')
      .attr('opacity', 0.5);

    const yScale = d3
      .scaleBand()
      .domain(sortedData.map(yAccessor))
      .range([0, dimensions.boundedHeight])
      .padding(0.2);

    // firstTransition for change in width (initial and update)
    // second transition for the change in y coordinate 
    const firstTransition = d3.transition().duration(500);
    const secondTransition = d3
      .transition()
      .delay(200)
      .duration(1000);

    /* DATA JOIN
    for new elements include the group, rectangle and text elements
    for existing element, update the group's position, the rectangle's width
    */
    const barGroups = barsGroup.selectAll('g').data(sortedData, yAccessor);

    const newBarGroups = barGroups
      .enter()
      .append('g')
      .attr('transform', d => `translate(0 ${yScale(yAccessor(d))})`);

    barGroups
      .transition(firstTransition)
      .transition(secondTransition)
      .delay((d, i) => {
        const index = sortedData.findIndex(({ name }) => name === yAccessor(d));
        return Math.floor(index / 2) * 50;
      })
      .attr('transform', d => `translate(0 ${yScale(yAccessor(d))})`);

    /* ISSUE: the order of the elements dictates the order in which the bars are tabbed
    is the only solution updating the DOM?
    */
    newBarGroups
      .attr('tabindex', '0')
      .attr('role', 'listitem')
      .merge(barGroups)
      .attr('aria-label', d => `${yAccessor(d)} spoke ${xAccessor(d)} lines`);

    newBarGroups
      .append('rect')
      .attr('height', yScale.bandwidth())
      .attr('fill', '#010101')
      .transition(firstTransition)
      .attr('width', d => xScale(xAccessor(d)));

    barGroups
      .select('rect')
      .transition(firstTransition)
      .attr('width', d => xScale(xAccessor(d)));

    newBarGroups
      .append('text')
      .text(yAccessor)
      .attr('x', -5)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('y', yScale.bandwidth() / 2);

    d3.selectAll('#wrapper button')
      .attr('class', function() {
        return d3.select(this).attr('id') === metric.id ? 'active' : '';
      })
      .on('click', function() {
        const selection = metrics.find(
          ({ id }) => d3.select(this).attr('id') === id
        );
        if (selection.id !== metric.id) {
          drawBars(selection);
        }
      });
  }

  // include the bars for the first metric
  drawBars(metrics[0]);
}

drawBarChart();