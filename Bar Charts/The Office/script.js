const data = [
  { name: 'Michael', lines: 9048, episodes: 139 },
  { name: 'Dwight', lines: 5577, episodes: 188 },
  { name: 'Jim', lines: 5019, episodes: 188 },
  { name: 'Pam', lines: 4077, episodes: 188 },
  { name: 'Andy', lines: 2906, episodes: 152 },
  { name: 'Angela', lines: 1258, episodes: 188 },
  { name: 'Kevin', lines: 1207, episodes: 188 },
  { name: 'Erin', lines: 1111, episodes: 102 },
  { name: 'Oscar', lines: 1036, episodes: 177 },
  { name: 'Ryan', lines: 1005, episodes: 168 },
  { name: 'Darryl', lines: 915, episodes: 120 },
  { name: 'Phyllis', lines: 830, episodes: 188 },
  { name: 'Jan', lines: 750, episodes: 42 },
  { name: 'Toby', lines: 714, episodes: 142 },
  { name: 'Kelly', lines: 689, episodes: 161 },
  { name: 'Stanley', lines: 544, episodes: 188 },
  { name: 'Meredith', lines: 459, episodes: 187 },
  { name: 'Holly', lines: 452, episodes: 17 },
  { name: 'David', lines: 421, episodes: 37 },
  { name: 'Nellie', lines: 363, episodes: 34 },
  { name: 'Creed', lines: 336, episodes: 180 },
  { name: 'Gabe', lines: 334, episodes: 51 },
  { name: 'Robert', lines: 301, episodes: 25 },
  { name: 'Karen', lines: 290, episodes: 26 },
  { name: 'Charles', lines: 209, episodes: 7 },
  { name: 'Roy', lines: 205, episodes: 31 },
  { name: 'Clark', lines: 196, episodes: 19 },
  { name: 'Jo', lines: 182, episodes: 8 },
  { name: 'Deangelo', lines: 150, episodes: 4 },
  { name: 'Pete', lines: 143, episodes: 21 },
  { name: 'Packer', lines: 137, episodes: 15 },
  { name: 'Carol', lines: 90, episodes: 7 },
  { name: 'Donna', lines: 81, episodes: 5 },
  { name: 'Katy', lines: 79, episodes: 3 },
  { name: 'Danny', lines: 68, episodes: 2 },
  { name: 'Josh', lines: 53, episodes: 8 },
  { name: 'Val', lines: 50, episodes: 14 },
  { name: 'Helene', lines: 48, episodes: 8 },
  { name: 'Nate', lines: 45, episodes: 19 },
  { name: 'Senator', lines: 43, episodes: 14 },
  { name: 'Hank', lines: 32, episodes: 22 },
  { name: 'Trevor', lines: 31, episodes: 2 },
  { name: 'Grotti', lines: 30, episodes: 1 },
  { name: 'Cathy', lines: 29, episodes: 12 },
  { name: 'Brian', lines: 25, episodes: 5 },
  { name: 'Nick', lines: 22, episodes: 5 },
  { name: 'Jada', lines: 22, episodes: 3 },
  { name: 'Alice', lines: 19, episodes: 1 },
  { name: 'Mose', lines: 18, episodes: 13 },
  { name: 'Lonny', lines: 16, episodes: 3 },
  { name: 'Zeke', lines: 13, episodes: 3 },
  { name: 'Rolf', lines: 12, episodes: 4 },
  { name: 'Vikram', lines: 10, episodes: 2 },
].filter(({ episodes }) => episodes >= 6);

function drawBarChart() {
  const metrics = [
    {
      id: 'lines-series',
      button: 'the entire series',
      label: 'total lines',
      accessor: d => d.lines,
    },
    {
      id: 'lines-episode',
      button: 'per episode',
      label: 'lines per episode',
      accessor: d => d.lines / d.episodes,
    },
  ];

  /* INTRODUCTORY MARKUP */
  d3.select('#wrapper')
    .append('h1')
    .text("That's how much they said");

  d3.select('#wrapper')
    .append('p')
    .html(
      `Lines spoken ${metrics
        .map(({ id, button }) => `<button id="${id}">${button}</button>`)
        .join(
          ''
        )} by characters of the series "The Office" who appeared in at least six episodes.`
    );

    /* STATIC SVG
    included regardless of the selected option
    */
    const dimensions = {
      width: 800,
      height: 800,
      margin: {
        top: 35,
        right: 40,
        bottom: 10,
        left: 60,
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
      .attr('fill', '#e7962a')
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
