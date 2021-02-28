const {
  timeParse,
  timeFormat,
  format,
  select,
  selectAll,
  scaleTime,
  scaleLinear,
  extent,
  axisBottom,
  axisLeft,
  line,
  scaleBand,
  Delaunay,
  lineRadial,
  curveLinearClosed,
} = d3;

/* DATA
child birth between the years 2000 and 2020
for reference visit the French institute of statistics and economic studies 
https://www.insee.fr/fr/statistiques/serie/000436391
*/
const data = [
  { date: '2000-01', value: 63559 },
  { date: '2000-02', value: 60149 },
  { date: '2000-03', value: 64315 },
  { date: '2000-04', value: 62469 },
  { date: '2000-05', value: 67324 },
  { date: '2000-06', value: 63940 },
  { date: '2000-07', value: 67916 },
  { date: '2000-08', value: 66778 },
  { date: '2000-09', value: 64297 },
  { date: '2000-10', value: 65720 },
  { date: '2000-11', value: 63262 },
  { date: '2000-12', value: 65053 },
  { date: '2001-01', value: 64850 },
  { date: '2001-02', value: 57456 },
  { date: '2001-03', value: 63962 },
  { date: '2001-04', value: 62957 },
  { date: '2001-05', value: 67673 },
  { date: '2001-06', value: 63176 },
  { date: '2001-07', value: 68550 },
  { date: '2001-08', value: 66010 },
  { date: '2001-09', value: 63452 },
  { date: '2001-10', value: 66765 },
  { date: '2001-11', value: 63160 },
  { date: '2001-12', value: 62934 },
  { date: '2002-01', value: 63884 },
  { date: '2002-02', value: 57216 },
  { date: '2002-03', value: 62091 },
  { date: '2002-04', value: 61725 },
  { date: '2002-05', value: 64383 },
  { date: '2002-06', value: 62181 },
  { date: '2002-07', value: 67968 },
  { date: '2002-08', value: 65735 },
  { date: '2002-09', value: 64203 },
  { date: '2002-10', value: 66644 },
  { date: '2002-11', value: 61411 },
  { date: '2002-12', value: 64189 },
  { date: '2003-01', value: 63955 },
  { date: '2003-02', value: 58057 },
  { date: '2003-03', value: 62351 },
  { date: '2003-04', value: 62670 },
  { date: '2003-05', value: 65699 },
  { date: '2003-06', value: 62144 },
  { date: '2003-07', value: 67625 },
  { date: '2003-08', value: 64025 },
  { date: '2003-09', value: 63601 },
  { date: '2003-10', value: 65109 },
  { date: '2003-11', value: 61905 },
  { date: '2003-12', value: 64323 },
  { date: '2004-01', value: 64039 },
  { date: '2004-02', value: 59222 },
  { date: '2004-03', value: 60985 },
  { date: '2004-04', value: 61116 },
  { date: '2004-05', value: 61453 },
  { date: '2004-06', value: 63303 },
  { date: '2004-07', value: 68793 },
  { date: '2004-08', value: 65846 },
  { date: '2004-09', value: 65273 },
  { date: '2004-10', value: 66932 },
  { date: '2004-11', value: 64929 },
  { date: '2004-12', value: 65925 },
  { date: '2005-01', value: 63987 },
  { date: '2005-02', value: 58823 },
  { date: '2005-03', value: 63902 },
  { date: '2005-04', value: 62437 },
  { date: '2005-05', value: 65178 },
  { date: '2005-06', value: 63627 },
  { date: '2005-07', value: 66574 },
  { date: '2005-08', value: 67070 },
  { date: '2005-09', value: 66424 },
  { date: '2005-10', value: 67111 },
  { date: '2005-11', value: 63574 },
  { date: '2005-12', value: 65648 },
  { date: '2006-01', value: 64814 },
  { date: '2006-02', value: 59915 },
  { date: '2006-03', value: 65394 },
  { date: '2006-04', value: 61797 },
  { date: '2006-05', value: 68860 },
  { date: '2006-06', value: 66224 },
  { date: '2006-07', value: 69705 },
  { date: '2006-08', value: 68913 },
  { date: '2006-09', value: 69029 },
  { date: '2006-10', value: 70117 },
  { date: '2006-11', value: 65741 },
  { date: '2006-12', value: 66387 },
  { date: '2007-01', value: 66287 },
  { date: '2007-02', value: 59939 },
  { date: '2007-03', value: 64561 },
  { date: '2007-04', value: 60994 },
  { date: '2007-05', value: 66638 },
  { date: '2007-06', value: 64156 },
  { date: '2007-07', value: 68411 },
  { date: '2007-08', value: 68249 },
  { date: '2007-09', value: 66488 },
  { date: '2007-10', value: 68727 },
  { date: '2007-11', value: 64811 },
  { date: '2007-12', value: 66724 },
  { date: '2008-01', value: 66911 },
  { date: '2008-02', value: 61219 },
  { date: '2008-03', value: 64405 },
  { date: '2008-04', value: 65943 },
  { date: '2008-05', value: 68582 },
  { date: '2008-06', value: 65352 },
  { date: '2008-07', value: 70282 },
  { date: '2008-08', value: 67926 },
  { date: '2008-09', value: 67820 },
  { date: '2008-10', value: 67489 },
  { date: '2008-11', value: 63865 },
  { date: '2008-12', value: 66250 },
  { date: '2009-01', value: 66436 },
  { date: '2009-02', value: 58890 },
  { date: '2009-03', value: 64725 },
  { date: '2009-04', value: 63560 },
  { date: '2009-05', value: 66099 },
  { date: '2009-06', value: 65184 },
  { date: '2009-07', value: 70900 },
  { date: '2009-08', value: 68311 },
  { date: '2009-09', value: 67988 },
  { date: '2009-10', value: 67903 },
  { date: '2009-11', value: 65117 },
  { date: '2009-12', value: 68307 },
  { date: '2010-01', value: 66785 },
  { date: '2010-02', value: 61107 },
  { date: '2010-03', value: 66066 },
  { date: '2010-04', value: 64024 },
  { date: '2010-05', value: 66774 },
  { date: '2010-06', value: 65535 },
  { date: '2010-07', value: 69761 },
  { date: '2010-08', value: 68783 },
  { date: '2010-09', value: 67959 },
  { date: '2010-10', value: 70298 },
  { date: '2010-11', value: 66874 },
  { date: '2010-12', value: 68258 },
  { date: '2011-01', value: 66293 },
  { date: '2011-02', value: 60316 },
  { date: '2011-03', value: 64702 },
  { date: '2011-04', value: 62244 },
  { date: '2011-05', value: 67624 },
  { date: '2011-06', value: 66950 },
  { date: '2011-07', value: 70231 },
  { date: '2011-08', value: 69486 },
  { date: '2011-09', value: 67003 },
  { date: '2011-10', value: 67464 },
  { date: '2011-11', value: 64559 },
  { date: '2011-12', value: 66124 },
  { date: '2012-01', value: 64914 },
  { date: '2012-02', value: 61634 },
  { date: '2012-03', value: 65079 },
  { date: '2012-04', value: 63184 },
  { date: '2012-05', value: 66341 },
  { date: '2012-06', value: 63920 },
  { date: '2012-07', value: 68774 },
  { date: '2012-08', value: 68642 },
  { date: '2012-09', value: 66919 },
  { date: '2012-10', value: 69892 },
  { date: '2012-11', value: 65122 },
  { date: '2012-12', value: 65869 },
  { date: '2013-01', value: 65670 },
  { date: '2013-02', value: 58533 },
  { date: '2013-03', value: 62652 },
  { date: '2013-04', value: 61106 },
  { date: '2013-05', value: 65152 },
  { date: '2013-06', value: 63680 },
  { date: '2013-07', value: 70099 },
  { date: '2013-08', value: 68466 },
  { date: '2013-09', value: 66818 },
  { date: '2013-10', value: 67931 },
  { date: '2013-11', value: 64462 },
  { date: '2013-12', value: 67052 },
  { date: '2014-01', value: 67011 },
  { date: '2014-02', value: 60373 },
  { date: '2014-03', value: 64557 },
  { date: '2014-04', value: 60665 },
  { date: '2014-05', value: 64527 },
  { date: '2014-06', value: 65018 },
  { date: '2014-07', value: 68465 },
  { date: '2014-08', value: 66837 },
  { date: '2014-09', value: 67426 },
  { date: '2014-10', value: 67637 },
  { date: '2014-11', value: 63078 },
  { date: '2014-12', value: 65573 },
  { date: '2015-01', value: 64596 },
  { date: '2015-02', value: 57525 },
  { date: '2015-03', value: 61115 },
  { date: '2015-04', value: 59699 },
  { date: '2015-05', value: 64144 },
  { date: '2015-06', value: 63984 },
  { date: '2015-07', value: 66701 },
  { date: '2015-08', value: 65784 },
  { date: '2015-09', value: 65449 },
  { date: '2015-10', value: 65888 },
  { date: '2015-11', value: 61899 },
  { date: '2015-12', value: 63637 },
  { date: '2016-01', value: 62570 },
  { date: '2016-02', value: 57854 },
  { date: '2016-03', value: 59634 },
  { date: '2016-04', value: 57235 },
  { date: '2016-05', value: 62373 },
  { date: '2016-06', value: 62797 },
  { date: '2016-07', value: 67237 },
  { date: '2016-08', value: 65109 },
  { date: '2016-09', value: 63579 },
  { date: '2016-10', value: 64513 },
  { date: '2016-11', value: 60546 },
  { date: '2016-12', value: 61250 },
  { date: '2017-01', value: 60446 },
  { date: '2017-02', value: 54948 },
  { date: '2017-03', value: 58676 },
  { date: '2017-04', value: 57195 },
  { date: '2017-05', value: 62091 },
  { date: '2017-06', value: 59935 },
  { date: '2017-07', value: 65170 },
  { date: '2017-08', value: 64654 },
  { date: '2017-09', value: 61693 },
  { date: '2017-10', value: 63830 },
  { date: '2017-11', value: 60763 },
  { date: '2017-12', value: 60841 },
  { date: '2018-01', value: 59752 },
  { date: '2018-02', value: 52733 },
  { date: '2018-03', value: 56391 },
  { date: '2018-04', value: 55364 },
  { date: '2018-05', value: 61232 },
  { date: '2018-06', value: 60292 },
  { date: '2018-07', value: 64823 },
  { date: '2018-08', value: 63860 },
  { date: '2018-09', value: 61834 },
  { date: '2018-10', value: 63588 },
  { date: '2018-11', value: 59937 },
  { date: '2018-12', value: 59931 },
  { date: '2019-01', value: 59866 },
  { date: '2019-02', value: 51832 },
  { date: '2019-03', value: 56592 },
  { date: '2019-04', value: 55652 },
  { date: '2019-05', value: 60092 },
  { date: '2019-06', value: 59768 },
  { date: '2019-07', value: 64579 },
  { date: '2019-08', value: 62998 },
  { date: '2019-09', value: 61515 },
  { date: '2019-10', value: 62636 },
  { date: '2019-11', value: 58700 },
  { date: '2019-12', value: 59799 },
  { date: '2020-01', value: 59100 },
  { date: '2020-02', value: 53500 },
  { date: '2020-03', value: 57300 },
  { date: '2020-04', value: 54400 },
  { date: '2020-05', value: 58700 },
  { date: '2020-06', value: 58600 },
  { date: '2020-07', value: 62600 },
  { date: '2020-08', value: 60400 },
  { date: '2020-09', value: 59800 },
  { date: '2020-10', value: 60900 },
  { date: '2020-11', value: 56100 },
  { date: '2020-12', value: 55500 },
];

/* INTRODUCTORY MARKUP */
const div = select('body')
  .append('div')
  .attr('id', 'wrapper');

div.append('h1').text('Number of  births');
div
  .append('p')
  .html(
    '<a href="https://www.insee.fr/fr/statistiques/serie/000436391">Data</a> from the <abbr title="Institute of statistics and economic studies">Insee</abbr> shows the number of births for mainland France, on a monthly basis and since 1946.'
  );

/* VIZ #1: analyze the trend through the years */
function lineChartYears(data) {
  const section = div.append('section').attr('id', 'line-chart-years');
  section.append('h2').text('Through the years');

  section
    .append('p')
    .text(
      'While oscillating between months, the overall trend since 2000 shows an overall decline.'
    );

  section
    .append('p')
    .style('font-size', '0.9rem')
    .text('Hover on the chart to higlight the value of a specific month.');

  const dateParser = timeParse('%Y-%m');
  const dateFormatter = timeFormat('%B %Y');

  const backgroundColor = '#fff';
  const highlightColor = '#8652ca';
  const tickPadding = 5;
  const borderRadius = 5;
  const fontSize = 15;
  const axisStrokeWidth = 1;
  const lineStrokeWidth = 3;
  const highlightStrokeWidth = 3;
  const highlightStrokeDasharray = 4;
  const highlightRadius = 6;
  const highlightPadding = 8;
  const gridLinesOpacity = 0.2;

  const width = 500;
  const height = 280;

  const margin = {
    top: 30,
    right: 30,
    bottom: 40,
    left: 60,
  };

  const svg = section
    .append('svg')
    .attr('viewBox', [
      0,
      0,
      width + margin.left + margin.right,
      height + margin.top + margin.bottom,
    ]);

  svg
    .append('rect')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('fill', backgroundColor)
    .attr('rx', borderRadius);

  const group = svg
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);

  const xScale = scaleTime()
    .domain(extent(data, ({ date }) => dateParser(date)))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, ({ value }) => value))
    .range([height, 0])
    .nice();

  const xAxis = axisBottom()
    .scale(xScale)
    .ticks(5)
    .tickSize(0)
    .tickPadding(tickPadding)
    .tickFormat(d => dateFormatter(d));

  const yAxis = axisLeft()
    .scale(yScale)
    .ticks(8)
    .tickSize(0)
    .tickPadding(tickPadding);

  const axisGroup = group.append('g');
  axisGroup
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0 ${height})`);

  const yAxisGroup = axisGroup.append('g').call(yAxis);

  yAxisGroup.select('path').remove();

  yAxisGroup.selectAll('g.tick:nth-of-type(even)').remove();

  yAxisGroup.selectAll('g.tick:nth-of-type(1)').remove();

  yAxisGroup
    .selectAll('g.tick')
    .append('path')
    .attr('d', `M 0 0 h ${width}`)
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', axisStrokeWidth)
    .attr('opacity', gridLinesOpacity);

  axisGroup.selectAll('text').attr('font-size', fontSize);

  const lineGenerator = line()
    .x(({ date }) => xScale(dateParser(date)))
    .y(({ value }) => yScale(value));

  group
    .append('g')
    .append('path')
    .attr('d', lineGenerator(data))
    .attr('fill', 'none')
    .attr('stroke', highlightColor)
    .attr('stroke-width', lineStrokeWidth);

  const highlightGroup = group
    .append('g')
    .attr('class', 'highlight')
    .style('color', highlightColor);

  const highlightX = highlightGroup.append('g').attr('class', 'highlight-x');

  highlightX
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', highlightStrokeWidth)
    .attr('stroke-dasharray', highlightStrokeDasharray);

  highlightX.append('rect').attr('fill', backgroundColor);

  highlightX
    .append('text')
    .attr('fill', 'currentColor')
    .attr('text-anchor', 'middle')
    .style('font-weight', 'bold');

  const highlightY = highlightGroup.append('g').attr('class', 'highlight-y');

  highlightY
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', highlightStrokeWidth)
    .attr('stroke-dasharray', highlightStrokeDasharray);

  highlightY.append('rect').attr('fill', backgroundColor);

  highlightY
    .append('text')
    .attr('fill', 'currentColor')
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .style('font-weight', 'bold');

  highlightGroup
    .append('circle')
    .attr('fill', backgroundColor)
    .attr('stroke', 'currentColor')
    .attr('stroke-width', highlightStrokeWidth);

  group
    .append('g')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', ({ date }) => xScale(dateParser(date)))
    .attr(
      'width',
      xScale(dateParser(data[1].date)) - xScale(dateParser(data[0].date))
    )
    .attr('height', height)
    .attr('opacity', 0)
    .on('mousemove', (event, { date, value }) => {
      const x = xScale(dateParser(date));
      const y = yScale(value);

      select('#line-chart-years .highlight circle')
        .attr('r', highlightRadius)
        .attr('cx', x)
        .attr('cy', y);

      select('#line-chart-years .highlight-x text')
        .text(dateFormatter(dateParser(date)))
        .attr('x', x)
        .attr('y', height + fontSize + 1);

      const { width: xLabelWidth } = select(
        '#line-chart-years .highlight-x text'
      )
        .node()
        .getBoundingClientRect();

      select('#line-chart-years .highlight-x rect')
        .attr('x', x - xLabelWidth / 2 - highlightPadding)
        .attr('y', height + 1)
        .attr('width', xLabelWidth + highlightPadding * 2)
        .attr('height', margin.bottom - 1);

      select('#line-chart-years .highlight-x path').attr(
        'd',
        `M ${x} ${height} V ${y}`
      );

      select('#line-chart-years .highlight-y text')
        .text(format(',')(value))
        .attr('x', -2)
        .attr('y', y);

      const { height: yLabelHeight } = select(
        '#line-chart-years .highlight-y text'
      )
        .node()
        .getBoundingClientRect();
      select('#line-chart-years .highlight-y rect')
        .attr('x', -margin.left)
        .attr('y', y - yLabelHeight / 2 - highlightPadding)
        .attr('width', margin.left - 1)
        .attr('height', yLabelHeight + highlightPadding * 2);

      select('#line-chart-years .highlight-y path').attr(
        'd',
        `M -5 ${y} H ${x}`
      );
    });
}

/* VIZ #2: analyse the trend through the months */
function lineChartMonths(data) {
  const section = div.append('section').attr('id', 'line-chart-months');

  section.append('h2').text('Through the months');

  section
    .append('p')
    .text(
      'Every year shows a similar trend, with a considerable increase between the months of April and July.'
    );

  section
    .append('p')
    .style('font-size', '0.9rem')
    .text('Hover on the charts to focus on a specific year.');

  const dateParser = timeParse('%Y-%m');
  const dateFormatterYear = timeFormat('%Y');
  const dateFormatterMonth = timeFormat('%b');

  const years = data
    .map(({ date }) => dateFormatterYear(dateParser(date)))
    .reduce(
      (acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]),
      []
    );

  const dataYear = years.map(year => ({
    year,
    values: data
      .filter(({ date }) => dateFormatterYear(dateParser(date)) === year)
      .map(({ date, value }) => ({
        date,
        month: dateFormatterMonth(dateParser(date)),
        value,
      })),
  }));

  const backgroundColor = '#fff';
  const highlightColor = '#8652ca';

  const width = 500;
  const height = 280;
  const borderRadius = 5;
  const tickPadding = 5;
  const yTicks = 8;
  const gridLinesOpacity = 0.2;
  const fontSize = 15;
  const linesOpacity = 0.1;
  const lineStrokeWidth = 3;

  const margin = {
    top: 20,
    right: 50,
    bottom: 40,
    left: 60,
  };

  const svg = section
    .append('svg')
    .attr('viewBox', [
      0,
      0,
      width + margin.left + margin.right,
      height + margin.top + margin.bottom,
    ]);

  svg
    .append('rect')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('rx', borderRadius)
    .attr('fill', backgroundColor);

  const group = svg
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);

  const xScale = scaleBand()
    .domain(dataYear[0].values.map(({ month }) => month))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(extent(data, d => d.value))
    .range([height, 0])
    .nice();

  const xAxis = axisBottom()
    .scale(xScale)
    .tickSize(0)
    .tickPadding(tickPadding);

  const yAxis = axisLeft()
    .scale(yScale)
    .ticks(yTicks)
    .tickSize(0)
    .tickPadding(tickPadding);

  const axisGroup = group.append('g');
  axisGroup
    .append('g')
    .call(xAxis)
    .attr('transform', `translate(0 ${height})`);

  const yAxisGroup = axisGroup.append('g').call(yAxis);

  yAxisGroup.select('path').remove();

  yAxisGroup.selectAll('g.tick:nth-of-type(even)').remove();

  yAxisGroup.selectAll('g.tick:nth-of-type(1)').remove();

  yAxisGroup
    .selectAll('g.tick')
    .append('path')
    .attr('d', `M 0 0 h ${width}`)
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 1)
    .attr('opacity', gridLinesOpacity);

  axisGroup.selectAll('text').attr('font-size', fontSize);

  const lineGenerator = line()
    .x(d => xScale(d.month) + xScale.bandwidth() / 2)
    .y(d => yScale(d.value));

  const linesGroups = group
    .append('g')
    .selectAll('g')
    .data(dataYear)
    .enter()
    .append('g')
    .attr('class', 'line')
    .attr('id', ({ year }) => `line-${year}`)
    .attr('opacity', ({ year }) =>
      year === years[years.length - 1] ? 1 : linesOpacity
    );

  linesGroups
    .append('path')
    .attr('d', ({ values }) => lineGenerator(values))
    .attr('fill', 'none')
    .attr('stroke', highlightColor)
    .attr('stroke-width', lineStrokeWidth);

  linesGroups
    .append('text')
    .attr('fill', 'currentColor')
    .attr('font-size', fontSize)
    .attr('dominant-baseline', 'middle')
    .attr('x', width)
    .attr('y', ({ values }) => yScale(values[values.length - 1].value))
    .text(({ year }) => year);

  const dataDelaunay = dataYear.reduce((acc, curr) => {
    const values = curr.values.map(({ month, value }) => ({
      month,
      value,
      year: curr.year,
    }));
    return [...acc, ...values];
  }, []);

  const delaunay = Delaunay.from(
    dataDelaunay,
    d => xScale(d.month),
    d => yScale(d.value)
  );

  const voronoi = delaunay.voronoi([0, 0, width, height]);

  group
    .append('g')
    .selectAll('path')
    .data(dataDelaunay)
    .enter()
    .append('path')
    .attr('opacity', 0)
    .attr('d', (d, i) => voronoi.renderCell(i))
    .on('mouseenter', (event, { year }) => {
      selectAll('#line-chart-months .line').attr('opacity', linesOpacity);

      select(`#line-chart-months #line-${year}`).attr('opacity', 1);
    });

  const widthRadial = 500;
  const heightRadial = 500;
  const marginRadial = 20;

  const svgRadial = section
    .append('svg')
    .attr('viewBox', [
      0,
      0,
      widthRadial + marginRadial * 2,
      heightRadial + marginRadial * 2,
    ]);

  svgRadial
    .append('rect')
    .attr('width', widthRadial + marginRadial * 2)
    .attr('height', heightRadial + marginRadial * 2)
    .attr('rx', borderRadius)
    .attr('fill', backgroundColor);

  groupRadial = svgRadial
    .append('g')
    .attr(
      'transform',
      `translate(${marginRadial + widthRadial / 2} ${marginRadial +
        heightRadial / 2})`
    );

  const angleScale = scaleBand()
    .domain(xScale.domain())
    .range([0, Math.PI * 2]);

  const radiusScale = scaleLinear()
    .domain(yScale.domain())
    .range([0, Math.floor(widthRadial / 2)]);

  const lineGeneratorRadial = lineRadial()
    .angle(d => angleScale(d.month))
    .radius(d => radiusScale(d.value))
    .curve(curveLinearClosed);

  const linesGroupsRadial = groupRadial
    .append('g')
    .selectAll('g')
    .data(dataYear)
    .enter()
    .append('g')
    .attr('class', 'line-radial')
    .attr('id', ({ year }) => `line-radial-${year}`)
    .attr('opacity', ({ year }) =>
      year === years[years.length - 1] ? 1 : linesOpacity
    );

  linesGroupsRadial
    .append('path')
    .attr('d', ({ values }) => lineGeneratorRadial(values))
    .attr('fill', 'none')
    .attr('stroke', highlightColor)
    .attr('stroke-width', lineStrokeWidth);

  const delaunayRadial = Delaunay.from(
    dataDelaunay,
    d => Math.cos(angleScale(d.month)) * radiusScale(d.value),
    d => Math.sin(angleScale(d.month)) * radiusScale(d.value)
  );

  const voronoiRadial = delaunayRadial.voronoi([
    -widthRadial / 2,
    -heightRadial / 2,
    widthRadial / 2,
    heightRadial / 2,
  ]);

  groupRadial
    .append('g')
    .selectAll('path')
    .data(dataDelaunay)
    .enter()
    .append('path')
    .attr('opacity', 0)
    .attr('d', (d, i) => voronoiRadial.renderCell(i))
    .on('mouseenter', (event, { year }) => {
      selectAll('#line-chart-months .line-radial').attr(
        'opacity',
        linesOpacity
      );

      select(`#line-chart-months #line-radial-${year}`).attr('opacity', 1);
    });
}

// lineChartYears(data);
lineChartMonths(data);
