// https://trends.google.com/trends/explore?date=2020-01-20%202020-05-17&q=turnip
const data = [
  {
    date: '2020-01-20',
    value: 10,
  },
  {
    date: '2020-01-21',
    value: 12,
  },
  {
    date: '2020-01-22',
    value: 11,
  },
  {
    date: '2020-01-23',
    value: 11,
  },
  {
    date: '2020-01-24',
    value: 11,
  },
  {
    date: '2020-01-25',
    value: 13,
  },
  {
    date: '2020-01-26',
    value: 13,
  },
  {
    date: '2020-01-27',
    value: 9,
  },
  {
    date: '2020-01-28',
    value: 11,
  },
  {
    date: '2020-01-29',
    value: 10,
  },
  {
    date: '2020-01-30',
    value: 8,
  },
  {
    date: '2020-01-31',
    value: 8,
  },
  {
    date: '2020-02-01',
    value: 9,
  },
  {
    date: '2020-02-02',
    value: 10,
  },
  {
    date: '2020-02-03',
    value: 8,
  },
  {
    date: '2020-02-04',
    value: 9,
  },
  {
    date: '2020-02-05',
    value: 8,
  },
  {
    date: '2020-02-06',
    value: 7,
  },
  {
    date: '2020-02-07',
    value: 8,
  },
  {
    date: '2020-02-08',
    value: 11,
  },
  {
    date: '2020-02-09',
    value: 11,
  },
  {
    date: '2020-02-10',
    value: 9,
  },
  {
    date: '2020-02-11',
    value: 8,
  },
  {
    date: '2020-02-12',
    value: 10,
  },
  {
    date: '2020-02-13',
    value: 8,
  },
  {
    date: '2020-02-14',
    value: 8,
  },
  {
    date: '2020-02-15',
    value: 8,
  },
  {
    date: '2020-02-16',
    value: 11,
  },
  {
    date: '2020-02-17',
    value: 9,
  },
  {
    date: '2020-02-18',
    value: 9,
  },
  {
    date: '2020-02-19',
    value: 9,
  },
  {
    date: '2020-02-20',
    value: 8,
  },
  {
    date: '2020-02-21',
    value: 8,
  },
  {
    date: '2020-02-22',
    value: 9,
  },
  {
    date: '2020-02-23',
    value: 12,
  },
  {
    date: '2020-02-24',
    value: 8,
  },
  {
    date: '2020-02-25',
    value: 8,
  },
  {
    date: '2020-02-26',
    value: 8,
  },
  {
    date: '2020-02-27',
    value: 9,
  },
  {
    date: '2020-02-28',
    value: 9,
  },
  {
    date: '2020-02-29',
    value: 9,
  },
  {
    date: '2020-03-01',
    value: 10,
  },
  {
    date: '2020-03-02',
    value: 8,
  },
  {
    date: '2020-03-03',
    value: 7,
  },
  {
    date: '2020-03-04',
    value: 7,
  },
  {
    date: '2020-03-05',
    value: 7,
  },
  {
    date: '2020-03-06',
    value: 8,
  },
  {
    date: '2020-03-07',
    value: 9,
  },
  {
    date: '2020-03-08',
    value: 10,
  },
  {
    date: '2020-03-09',
    value: 9,
  },
  {
    date: '2020-03-10',
    value: 7,
  },
  {
    date: '2020-03-11',
    value: 8,
  },
  {
    date: '2020-03-12',
    value: 7,
  },
  {
    date: '2020-03-13',
    value: 8,
  },
  {
    date: '2020-03-14',
    value: 9,
  },
  {
    date: '2020-03-15',
    value: 11,
  },
  {
    date: '2020-03-16',
    value: 8,
  },
  {
    date: '2020-03-17',
    value: 9,
  },
  {
    date: '2020-03-18',
    value: 7,
  },
  {
    date: '2020-03-19',
    value: 8,
  },
  {
    date: '2020-03-20',
    value: 9,
  },
  {
    date: '2020-03-21',
    value: 11,
  },
  {
    date: '2020-03-22',
    value: 25,
  },
  {
    date: '2020-03-23',
    value: 15,
  },
  {
    date: '2020-03-24',
    value: 15,
  },
  {
    date: '2020-03-25',
    value: 15,
  },
  {
    date: '2020-03-26',
    value: 13,
  },
  {
    date: '2020-03-27',
    value: 14,
  },
  {
    date: '2020-03-28',
    value: 22,
  },
  {
    date: '2020-03-29',
    value: 56,
  },
  {
    date: '2020-03-30',
    value: 26,
  },
  {
    date: '2020-03-31',
    value: 23,
  },
  {
    date: '2020-04-01',
    value: 22,
  },
  {
    date: '2020-04-02',
    value: 20,
  },
  {
    date: '2020-04-03',
    value: 20,
  },
  {
    date: '2020-04-04',
    value: 24,
  },
  {
    date: '2020-04-05',
    value: 64,
  },
  {
    date: '2020-04-06',
    value: 38,
  },
  {
    date: '2020-04-07',
    value: 38,
  },
  {
    date: '2020-04-08',
    value: 33,
  },
  {
    date: '2020-04-09',
    value: 28,
  },
  {
    date: '2020-04-10',
    value: 26,
  },
  {
    date: '2020-04-11',
    value: 31,
  },
  {
    date: '2020-04-12',
    value: 74,
  },
  {
    date: '2020-04-13',
    value: 59,
  },
  {
    date: '2020-04-14',
    value: 56,
  },
  {
    date: '2020-04-15',
    value: 43,
  },
  {
    date: '2020-04-16',
    value: 37,
  },
  {
    date: '2020-04-17',
    value: 32,
  },
  {
    date: '2020-04-18',
    value: 37,
  },
  {
    date: '2020-04-19',
    value: 100,
  },
  {
    date: '2020-04-20',
    value: 79,
  },
  {
    date: '2020-04-21',
    value: 61,
  },
  {
    date: '2020-04-22',
    value: 48,
  },
  {
    date: '2020-04-23',
    value: 38,
  },
  {
    date: '2020-04-24',
    value: 34,
  },
  {
    date: '2020-04-25',
    value: 38,
  },
  {
    date: '2020-04-26',
    value: 93,
  },
  {
    date: '2020-04-27',
    value: 79,
  },
  {
    date: '2020-04-28',
    value: 66,
  },
  {
    date: '2020-04-29',
    value: 50,
  },
  {
    date: '2020-04-30',
    value: 38,
  },
  {
    date: '2020-05-01',
    value: 33,
  },
  {
    date: '2020-05-02',
    value: 35,
  },
  {
    date: '2020-05-03',
    value: 74,
  },
  {
    date: '2020-05-04',
    value: 70,
  },
  {
    date: '2020-05-05',
    value: 56,
  },
  {
    date: '2020-05-06',
    value: 49,
  },
  {
    date: '2020-05-07',
    value: 36,
  },
  {
    date: '2020-05-08',
    value: 29,
  },
  {
    date: '2020-05-09',
    value: 34,
  },
  {
    date: '2020-05-10',
    value: 68,
  },
  {
    date: '2020-05-11',
    value: 62,
  },
  {
    date: '2020-05-12',
    value: 56,
  },
  {
    date: '2020-05-13',
    value: 43,
  },
  {
    date: '2020-05-14',
    value: 34,
  },
  {
    date: '2020-05-15',
    value: 26,
  },
  {
    date: '2020-05-16',
    value: 30,
  },
  {
    date: '2020-05-17',
    value: 61,
  },
];

const url =
  'https://trends.google.com/trends/explore?date=2020-01-20%202020-05-17&q=turnip';

const game = {
  href:
    'https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch',
  date: '2020-03-20',
};

// line chart
// plot the data points in the five month period
const strokeWidth = 3;

const parseDate = d3.timeParse('%Y-%m-%d');
const formatDate = d3.timeFormat('%A %d-%m');
const formatValue = d3.format('.2f');

const scaleValue = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]);

const scaleTime = d3
  .scaleTime()
  .domain(d3.extent(data, d => parseDate(d.date)));

const margin = {
  top: 5,
  right: 10,
  bottom: 55,
  left: 30,
};

const width = 500;
const height = 200;

scaleValue.range([height - margin.bottom, margin.top]);
scaleTime.range([margin.left, width - margin.right]);

const line = d3
  .line()
  .x(d => scaleTime(parseDate(d.date)))
  .y(d => scaleValue(d.value))
  .curve(d3.curveCatmullRom);

const axisValue = d3
  .axisLeft(scaleValue)
  .ticks(5)
  .tickSize(0)
  .tickPadding(8);

const axisTime = d3
  .axisBottom(scaleTime)
  .tickFormat(d => formatDate(d))
  .tickSize(0)
  .tickPadding(8);

const main = d3.select('main');
main.append('h1').text('Seasonal data');
main
  .append('p')
  .html(
    `<a href="${url}">Interest</a> for the word <strong>turnip</strong> proves to be highly volatile. <a href="${
      game.href
    }">A certain video game</a> might be responsible for the cyclical spike.`
  );

main
  .append('svg')
  .attr('id', 'line-chart')
  .attr('viewBox', `0 0 ${width} ${height}`)
  .attr('width', width)
  .attr('height', height);

const average = d3.mean(data, d => d.value);
const offset = 1 - average / d3.max(data, d => d.value);

d3.select('svg#line-chart')
  .append('defs')
  .append('linearGradient')
  .attr('gradientUnits', 'userSpaceOnUse')
  .attr('id', 'linear-gradient')
  .attr('x1', 0)
  .attr('x2', 0)
  .attr('y1', margin.top)
  .attr('y2', height - margin.bottom);

d3.select('#linear-gradient')
  .append('stop')
  .attr('stop-color', 'hsl(0, 100%, 25%)')
  .attr('offset', 0);

d3.select('#linear-gradient')
  .append('stop')
  .attr('stop-color', 'hsl(35, 100%, 50%)')
  .attr('offset', offset);

d3.select('#linear-gradient')
  .append('stop')
  .attr('stop-color', 'hsl(145, 50%, 75%)')
  .attr('offset', offset);

d3.select('#linear-gradient')
  .append('stop')
  .attr('stop-color', 'hsl(205, 80%, 30%)')
  .attr('offset', 1);

d3.select('svg#line-chart')
  .append('g')
  .attr('class', 'axes');

d3.select('.axes')
  .append('g')
  .attr('id', 'axis-value')
  .attr('transform', `translate(${margin.left} 0)`)
  .call(axisValue);

d3.select('.axes')
  .append('g')
  .attr('id', 'axis-time')
  .attr('transform', `translate(0 ${height - margin.bottom})`)
  .call(axisTime);

d3.select('#axis-value')
  .selectAll('text')
  .style('font-size', '9');

d3.select('#axis-time')
  .selectAll('text')
  .attr('text-anchor', 'end')
  .attr('transform', 'rotate(-45)')
  .style('font-size', '9');

d3.selectAll('.axes')
  .selectAll('path')
  .attr('stroke-width', strokeWidth)
  .attr('stroke-linecap', 'round');

d3.select('#axis-value')
  .selectAll('.tick')
  .append('path')
  .attr('d', `M 0 0 h ${width - (margin.right + margin.left)}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('opacity', 0.2)
  .attr('stroke-dasharray', '2 5');

d3.select('#axis-time')
  .selectAll('.tick')
  .append('path')
  .attr('d', `M 0 0 v -${height - (margin.top + margin.bottom)}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('opacity', 0.2)
  .attr('stroke-dasharray', '2 5');

d3.select('svg')
  .append('g')
  .attr('id', 'average')
  .attr('transform', `translate(${margin.left} ${scaleValue(average)})`);

d3.select('#average')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-dasharray', '5 5')
  .attr('opacity', 0.8)
  .attr('d', `M 0 0 H ${width - (margin.right + margin.left)}`);

d3.select('#average')
  .append('text')
  .attr('x', '5')
  .attr('y', '-5')
  .style('font-size', '10')
  .text(`Average ${formatValue(average)}`);

d3.select('svg')
  .append('g')
  .attr('id', 'release-date')
  .attr(
    'transform',
    `translate(${scaleTime(parseDate(game.date))} ${margin.top})`
  );

d3.select('#release-date')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-dasharray', '5 5')
  .attr('opacity', 0.8)
  .attr('d', `M 0 0 V ${height - (margin.top + margin.bottom)}`);

d3.select('#release-date')
  .append('text')
  .attr('x', '-5')
  .attr('y', '10')
  .attr('text-anchor', 'end')
  .style('font-size', '10')
  .text(`Animal Crossing Release`);

d3.select('svg')
  .append('path')
  .attr('id', 'line')
  .attr('fill', 'none')
  .attr('stroke', 'url(#linear-gradient)')
  .attr('stroke-width', strokeWidth)
  .attr('stroke-linecap', 'round')
  .attr('d', line(data));

// radial line chart(s)
// highlight the data points in the timeframe of a week, before and after the release date
// consider the data before and after the release date

const dataBefore = [];
const dataAfter = [];
const formatDay = d3.timeFormat('%A');

data.forEach(datum => {
  const date = parseDate(datum.date);
  const day = formatDay(date);
  if (date < parseDate(game.date)) {
    if (dataBefore[day]) {
      dataBefore[day].push(datum.value);
    } else {
      dataBefore[day] = [datum.value];
    }
  } else if(dataAfter[day]) {
      dataAfter[day].push(datum.value);
    } else {
      dataAfter[day] = [datum.value];
    }
});

const averageBefore = Object.entries(dataBefore).map(([day, values]) => ({
  day,
  average: d3.mean(values),
}));

const averageAfter = Object.entries(dataAfter).map(([day, values]) => ({
  day,
  average: d3.mean(values),
}));

const days = averageBefore.map(({ day }) => day);

const size = 500;
const padding = 50;
const radius = (size - padding) / 2;

const scaleAngle = d3
  .scalePoint()
  .domain([...days, ''])
  .range([0, Math.PI * 2]);

const scaleRadius = d3.scaleLinear().range([0, radius]);

const lineRadial = d3
  .lineRadial()
  .angle(d => scaleAngle(d.day))
  .radius(d => scaleRadius(d.average))
  .curve(d3.curveCatmullRomClosed);

main.append('h2').text('Over the week');

main
  .append('p')
  .text('Prior to the release date, interest in turnips increases toward the end of the week, without varying excessively from the average.');

const averageDaysBefore = d3.mean(averageBefore, d => d.average);
const maxDaysBefore = d3.max(averageBefore, d => d.average);
const offsetBefore = averageDaysBefore / maxDaysBefore;

scaleRadius.domain([0, maxDaysBefore]);

main
  .append('svg')
  .attr('id', 'radial-chart-before')
  .attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

d3.select('svg#radial-chart-before')
  .append('defs')
  .append('radialGradient')
  .attr('gradientUnits', 'userSpaceOnUse')
  .attr('id', 'radial-gradient-before')
  .attr('r', radius)
  .attr('cx', 0)
  .attr('cy', 0);

d3.select('#radial-gradient-before')
  .append('stop')
  .attr('stop-color', 'hsl(205, 80%, 30%)')
  .attr('offset', 0);

d3.select('#radial-gradient-before')
  .append('stop')
  .attr('stop-color', 'hsl(145, 50%, 75%)')
  .attr('offset', offsetBefore);

d3.select('#radial-gradient-before')
  .append('stop')
  .attr('stop-color', 'hsl(35, 100%, 50%)')
  .attr('offset', offsetBefore);

d3.select('#radial-gradient-before')
  .append('stop')
  .attr('stop-color', 'hsl(0, 100%, 25%)')
  .attr('offset', 1);

d3.select('svg#radial-chart-before')
  .selectAll('text')
  .data(days)
  .enter()
  .append('text')
  .text(d => d)
  .style('text-transform', 'uppercase')
  .attr('fill', 'currentColor')
  .attr('font-size', 18)
  .attr('text-anchor', 'middle')
  .attr(
    'transform',
    d =>
      `rotate(${(scaleAngle(d) * 180) /
        Math.PI}) translate(0 -${radius})`
  );

d3.select('svg#radial-chart-before')
  .append('circle')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', strokeWidth)
  .attr('opacity', 0.2)
  .attr('r', scaleRadius(averageDaysBefore));

d3.select('svg#radial-chart-before')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'url(#radial-gradient-before)')
  .attr('stroke-width', strokeWidth * 2)
  .attr('d', lineRadial(averageBefore));

main
  .append('p')
  .text(
    "Following the title's launch, interest spikes on Sunday, and goes back to its average in the week which follows."
  );

const averageDaysAfter = d3.mean(averageAfter, d => d.average);
const maxDaysAfter = d3.max(averageAfter, d => d.average);
const offsetAfter = averageDaysAfter / maxDaysAfter;

scaleRadius.domain([0, maxDaysAfter]);

main
  .append('svg')
  .attr('id', 'radial-chart-after')
  .attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

d3.select('svg#radial-chart-after')
  .append('defs')
  .append('radialGradient')
  .attr('gradientUnits', 'userSpaceOnUse')
  .attr('id', 'radial-gradient-after')
  .attr('r', radius)
  .attr('cx', 0)
  .attr('cy', 0);

d3.select('#radial-gradient-after')
  .append('stop')
  .attr('stop-color', 'hsl(205, 80%, 30%)')
  .attr('offset', 0);

d3.select('#radial-gradient-after')
  .append('stop')
  .attr('stop-color', 'hsl(145, 50%, 75%)')
  .attr('offset', offsetAfter);

d3.select('#radial-gradient-after')
  .append('stop')
  .attr('stop-color', 'hsl(35, 100%, 50%)')
  .attr('offset', offsetAfter);

d3.select('#radial-gradient-after')
  .append('stop')
  .attr('stop-color', 'hsl(0, 100%, 25%)')
  .attr('offset', 1);

d3.select('svg#radial-chart-after')
  .selectAll('text')
  .data(days)
  .enter()
  .append('text')
  .text(d => d)
  .style('text-transform', 'uppercase')
  .attr('fill', 'currentColor')
  .attr('font-size', 18)
  .attr('text-anchor', 'middle')
  .attr(
    'transform',
    d =>
      `rotate(${(scaleAngle(d) * 180) /
        Math.PI}) translate(0 -${radius})`
  );

d3.select('svg#radial-chart-after')
  .append('circle')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', strokeWidth)
  .attr('opacity', 0.2)
  .attr('r', scaleRadius(averageDaysAfter));

d3.select('svg#radial-chart-after')
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'url(#radial-gradient-after)')
  .attr('stroke-width', strokeWidth * 2)
  .attr('d', lineRadial(averageAfter));
