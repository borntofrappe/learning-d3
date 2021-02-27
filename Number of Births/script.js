/* DATA
child birth between the years 2000 and 2020
for reference visit the French institute of statistics and economic studies 
https://www.insee.fr/fr/statistiques/serie/000436391
*/
const data = [
  { date: '2020-12', value: 55500 },
  { date: '2020-11', value: 56100 },
  { date: '2020-10', value: 60900 },
  { date: '2020-09', value: 59800 },
  { date: '2020-08', value: 60400 },
  { date: '2020-07', value: 62600 },
  { date: '2020-06', value: 58600 },
  { date: '2020-05', value: 58700 },
  { date: '2020-04', value: 54400 },
  { date: '2020-03', value: 57300 },
  { date: '2020-02', value: 53500 },
  { date: '2020-01', value: 59100 },
  { date: '2019-12', value: 59799 },
  { date: '2019-11', value: 58700 },
  { date: '2019-10', value: 62636 },
  { date: '2019-09', value: 61515 },
  { date: '2019-08', value: 62998 },
  { date: '2019-07', value: 64579 },
  { date: '2019-06', value: 59768 },
  { date: '2019-05', value: 60092 },
  { date: '2019-04', value: 55652 },
  { date: '2019-03', value: 56592 },
  { date: '2019-02', value: 51832 },
  { date: '2019-01', value: 59866 },
  { date: '2018-12', value: 59931 },
  { date: '2018-11', value: 59937 },
  { date: '2018-10', value: 63588 },
  { date: '2018-09', value: 61834 },
  { date: '2018-08', value: 63860 },
  { date: '2018-07', value: 64823 },
  { date: '2018-06', value: 60292 },
  { date: '2018-05', value: 61232 },
  { date: '2018-04', value: 55364 },
  { date: '2018-03', value: 56391 },
  { date: '2018-02', value: 52733 },
  { date: '2018-01', value: 59752 },
  { date: '2017-12', value: 60841 },
  { date: '2017-11', value: 60763 },
  { date: '2017-10', value: 63830 },
  { date: '2017-09', value: 61693 },
  { date: '2017-08', value: 64654 },
  { date: '2017-07', value: 65170 },
  { date: '2017-06', value: 59935 },
  { date: '2017-05', value: 62091 },
  { date: '2017-04', value: 57195 },
  { date: '2017-03', value: 58676 },
  { date: '2017-02', value: 54948 },
  { date: '2017-01', value: 60446 },
  { date: '2016-12', value: 61250 },
  { date: '2016-11', value: 60546 },
  { date: '2016-10', value: 64513 },
  { date: '2016-09', value: 63579 },
  { date: '2016-08', value: 65109 },
  { date: '2016-07', value: 67237 },
  { date: '2016-06', value: 62797 },
  { date: '2016-05', value: 62373 },
  { date: '2016-04', value: 57235 },
  { date: '2016-03', value: 59634 },
  { date: '2016-02', value: 57854 },
  { date: '2016-01', value: 62570 },
  { date: '2015-12', value: 63637 },
  { date: '2015-11', value: 61899 },
  { date: '2015-10', value: 65888 },
  { date: '2015-09', value: 65449 },
  { date: '2015-08', value: 65784 },
  { date: '2015-07', value: 66701 },
  { date: '2015-06', value: 63984 },
  { date: '2015-05', value: 64144 },
  { date: '2015-04', value: 59699 },
  { date: '2015-03', value: 61115 },
  { date: '2015-02', value: 57525 },
  { date: '2015-01', value: 64596 },
  { date: '2014-12', value: 65573 },
  { date: '2014-11', value: 63078 },
  { date: '2014-10', value: 67637 },
  { date: '2014-09', value: 67426 },
  { date: '2014-08', value: 66837 },
  { date: '2014-07', value: 68465 },
  { date: '2014-06', value: 65018 },
  { date: '2014-05', value: 64527 },
  { date: '2014-04', value: 60665 },
  { date: '2014-03', value: 64557 },
  { date: '2014-02', value: 60373 },
  { date: '2014-01', value: 67011 },
  { date: '2013-12', value: 67052 },
  { date: '2013-11', value: 64462 },
  { date: '2013-10', value: 67931 },
  { date: '2013-09', value: 66818 },
  { date: '2013-08', value: 68466 },
  { date: '2013-07', value: 70099 },
  { date: '2013-06', value: 63680 },
  { date: '2013-05', value: 65152 },
  { date: '2013-04', value: 61106 },
  { date: '2013-03', value: 62652 },
  { date: '2013-02', value: 58533 },
  { date: '2013-01', value: 65670 },
  { date: '2012-12', value: 65869 },
  { date: '2012-11', value: 65122 },
  { date: '2012-10', value: 69892 },
  { date: '2012-09', value: 66919 },
  { date: '2012-08', value: 68642 },
  { date: '2012-07', value: 68774 },
  { date: '2012-06', value: 63920 },
  { date: '2012-05', value: 66341 },
  { date: '2012-04', value: 63184 },
  { date: '2012-03', value: 65079 },
  { date: '2012-02', value: 61634 },
  { date: '2012-01', value: 64914 },
  { date: '2011-12', value: 66124 },
  { date: '2011-11', value: 64559 },
  { date: '2011-10', value: 67464 },
  { date: '2011-09', value: 67003 },
  { date: '2011-08', value: 69486 },
  { date: '2011-07', value: 70231 },
  { date: '2011-06', value: 66950 },
  { date: '2011-05', value: 67624 },
  { date: '2011-04', value: 62244 },
  { date: '2011-03', value: 64702 },
  { date: '2011-02', value: 60316 },
  { date: '2011-01', value: 66293 },
  { date: '2010-12', value: 68258 },
  { date: '2010-11', value: 66874 },
  { date: '2010-10', value: 70298 },
  { date: '2010-09', value: 67959 },
  { date: '2010-08', value: 68783 },
  { date: '2010-07', value: 69761 },
  { date: '2010-06', value: 65535 },
  { date: '2010-05', value: 66774 },
  { date: '2010-04', value: 64024 },
  { date: '2010-03', value: 66066 },
  { date: '2010-02', value: 61107 },
  { date: '2010-01', value: 66785 },
  { date: '2009-12', value: 68307 },
  { date: '2009-11', value: 65117 },
  { date: '2009-10', value: 67903 },
  { date: '2009-09', value: 67988 },
  { date: '2009-08', value: 68311 },
  { date: '2009-07', value: 70900 },
  { date: '2009-06', value: 65184 },
  { date: '2009-05', value: 66099 },
  { date: '2009-04', value: 63560 },
  { date: '2009-03', value: 64725 },
  { date: '2009-02', value: 58890 },
  { date: '2009-01', value: 66436 },
  { date: '2008-12', value: 66250 },
  { date: '2008-11', value: 63865 },
  { date: '2008-10', value: 67489 },
  { date: '2008-09', value: 67820 },
  { date: '2008-08', value: 67926 },
  { date: '2008-07', value: 70282 },
  { date: '2008-06', value: 65352 },
  { date: '2008-05', value: 68582 },
  { date: '2008-04', value: 65943 },
  { date: '2008-03', value: 64405 },
  { date: '2008-02', value: 61219 },
  { date: '2008-01', value: 66911 },
  { date: '2007-12', value: 66724 },
  { date: '2007-11', value: 64811 },
  { date: '2007-10', value: 68727 },
  { date: '2007-09', value: 66488 },
  { date: '2007-08', value: 68249 },
  { date: '2007-07', value: 68411 },
  { date: '2007-06', value: 64156 },
  { date: '2007-05', value: 66638 },
  { date: '2007-04', value: 60994 },
  { date: '2007-03', value: 64561 },
  { date: '2007-02', value: 59939 },
  { date: '2007-01', value: 66287 },
  { date: '2006-12', value: 66387 },
  { date: '2006-11', value: 65741 },
  { date: '2006-10', value: 70117 },
  { date: '2006-09', value: 69029 },
  { date: '2006-08', value: 68913 },
  { date: '2006-07', value: 69705 },
  { date: '2006-06', value: 66224 },
  { date: '2006-05', value: 68860 },
  { date: '2006-04', value: 61797 },
  { date: '2006-03', value: 65394 },
  { date: '2006-02', value: 59915 },
  { date: '2006-01', value: 64814 },
  { date: '2005-12', value: 65648 },
  { date: '2005-11', value: 63574 },
  { date: '2005-10', value: 67111 },
  { date: '2005-09', value: 66424 },
  { date: '2005-08', value: 67070 },
  { date: '2005-07', value: 66574 },
  { date: '2005-06', value: 63627 },
  { date: '2005-05', value: 65178 },
  { date: '2005-04', value: 62437 },
  { date: '2005-03', value: 63902 },
  { date: '2005-02', value: 58823 },
  { date: '2005-01', value: 63987 },
  { date: '2004-12', value: 65925 },
  { date: '2004-11', value: 64929 },
  { date: '2004-10', value: 66932 },
  { date: '2004-09', value: 65273 },
  { date: '2004-08', value: 65846 },
  { date: '2004-07', value: 68793 },
  { date: '2004-06', value: 63303 },
  { date: '2004-05', value: 61453 },
  { date: '2004-04', value: 61116 },
  { date: '2004-03', value: 60985 },
  { date: '2004-02', value: 59222 },
  { date: '2004-01', value: 64039 },
  { date: '2003-12', value: 64323 },
  { date: '2003-11', value: 61905 },
  { date: '2003-10', value: 65109 },
  { date: '2003-09', value: 63601 },
  { date: '2003-08', value: 64025 },
  { date: '2003-07', value: 67625 },
  { date: '2003-06', value: 62144 },
  { date: '2003-05', value: 65699 },
  { date: '2003-04', value: 62670 },
  { date: '2003-03', value: 62351 },
  { date: '2003-02', value: 58057 },
  { date: '2003-01', value: 63955 },
  { date: '2002-12', value: 64189 },
  { date: '2002-11', value: 61411 },
  { date: '2002-10', value: 66644 },
  { date: '2002-09', value: 64203 },
  { date: '2002-08', value: 65735 },
  { date: '2002-07', value: 67968 },
  { date: '2002-06', value: 62181 },
  { date: '2002-05', value: 64383 },
  { date: '2002-04', value: 61725 },
  { date: '2002-03', value: 62091 },
  { date: '2002-02', value: 57216 },
  { date: '2002-01', value: 63884 },
  { date: '2001-12', value: 62934 },
  { date: '2001-11', value: 63160 },
  { date: '2001-10', value: 66765 },
  { date: '2001-09', value: 63452 },
  { date: '2001-08', value: 66010 },
  { date: '2001-07', value: 68550 },
  { date: '2001-06', value: 63176 },
  { date: '2001-05', value: 67673 },
  { date: '2001-04', value: 62957 },
  { date: '2001-03', value: 63962 },
  { date: '2001-02', value: 57456 },
  { date: '2001-01', value: 64850 },
  { date: '2000-12', value: 65053 },
  { date: '2000-11', value: 63262 },
  { date: '2000-10', value: 65720 },
  { date: '2000-09', value: 64297 },
  { date: '2000-08', value: 66778 },
  { date: '2000-07', value: 67916 },
  { date: '2000-06', value: 63940 },
  { date: '2000-05', value: 67324 },
  { date: '2000-04', value: 62469 },
  { date: '2000-03', value: 64315 },
  { date: '2000-02', value: 60149 },
  { date: '2000-01', value: 63559 },
];

/* INTRODUCTORY MARKUP */
const dateParser = d3.timeParse('%Y-%m');
const dateFormatter = d3.timeFormat('%B %Y');
const xAccessor = d => dateParser(d.date);
const yAccessor = d => d.value;

const div = d3
  .select('body')
  .append('div')
  .attr('id', 'wrapper');

div.append('h1').text('Number of  births');

/* VIZ #1: line chart spanning the entire timeframe */
const width = 500;
const height = 280;

const margin = {
  top: 20,
  right: 20,
  bottom: 80,
  left: 50,
};

const svg = div
  .append('svg')
  .attr('viewBox', [
    0,
    0,
    width + margin.left + margin.right,
    height + margin.top + margin.bottom,
  ]);

const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

const xScale = d3
  .scaleTime()
  .domain(d3.extent(data, xAccessor))
  .range([0, width]);

const yScale = d3
  .scaleLinear()
  .domain(d3.extent(data, yAccessor))
  .range([height, 0])
  .nice();

const xAxis = d3
  .axisBottom()
  .scale(xScale)
  .ticks(5)
  .tickSize(0)
  .tickPadding(5)
  .tickFormat(d => dateFormatter(d));

const yAxis = d3
  .axisLeft()
  .scale(yScale)
  .ticks(8)
  .tickSize(0)
  .tickPadding(5);

const axisGroup = group.append('g');
axisGroup
  .append('g')
  .attr('id', 'x-axis')
  .call(xAxis)
  .attr('transform', `translate(0 ${height})`);

axisGroup
  .append('g')
  .attr('id', 'y-axis')
  .call(yAxis);

d3.select('#y-axis')
  .select('path')
  .remove();

d3.select('#y-axis')
  .selectAll('g.tick:nth-of-type(even)')
  .remove();

d3.select('#y-axis')
  .selectAll('g.tick:nth-of-type(1)')
  .remove();

d3.select('#y-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1)
  .attr('opacity', 0.25);

axisGroup
  .selectAll('text')
  .attr('font-size', 14)

const lineGenerator = d3
  .line()
  .x(d => xScale(xAccessor(d)))
  .y(d => yScale(yAccessor(d)));

group
  .append('g')
  .append('path')
  .attr('d', lineGenerator(data))
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 3);