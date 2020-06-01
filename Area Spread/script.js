const url = 'https://trends.google.com/trends/explore?date=now%207-d&geo=US&q=apples,oranges';
const data = [
  {
    date: '2020-05-25T10',
    apples: 52,
    oranges: 24,
  },
  {
    date: '2020-05-25T11',
    apples: 45,
    oranges: 17,
  },
  {
    date: '2020-05-25T12',
    apples: 56,
    oranges: 18,
  },
  {
    date: '2020-05-25T13',
    apples: 55,
    oranges: 22,
  },
  {
    date: '2020-05-25T14',
    apples: 68,
    oranges: 26,
  },
  {
    date: '2020-05-25T15',
    apples: 78,
    oranges: 30,
  },
  {
    date: '2020-05-25T16',
    apples: 83,
    oranges: 28,
  },
  {
    date: '2020-05-25T17',
    apples: 87,
    oranges: 30,
  },
  {
    date: '2020-05-25T18',
    apples: 90,
    oranges: 33,
  },
  {
    date: '2020-05-25T19',
    apples: 93,
    oranges: 32,
  },
  {
    date: '2020-05-25T20',
    apples: 93,
    oranges: 33,
  },
  {
    date: '2020-05-25T21',
    apples: 97,
    oranges: 35,
  },
  {
    date: '2020-05-25T22',
    apples: 100,
    oranges: 33,
  },
  {
    date: '2020-05-25T23',
    apples: 98,
    oranges: 34,
  },
  {
    date: '2020-05-26T00',
    apples: 96,
    oranges: 32,
  },
  {
    date: '2020-05-26T01',
    apples: 88,
    oranges: 30,
  },
  {
    date: '2020-05-26T02',
    apples: 91,
    oranges: 31,
  },
  {
    date: '2020-05-26T03',
    apples: 79,
    oranges: 31,
  },
  {
    date: '2020-05-26T04',
    apples: 78,
    oranges: 31,
  },
  {
    date: '2020-05-26T05',
    apples: 71,
    oranges: 28,
  },
  {
    date: '2020-05-26T06',
    apples: 76,
    oranges: 29,
  },
  {
    date: '2020-05-26T07',
    apples: 68,
    oranges: 27,
  },
  {
    date: '2020-05-26T08',
    apples: 60,
    oranges: 27,
  },
  {
    date: '2020-05-26T09',
    apples: 57,
    oranges: 22,
  },
  {
    date: '2020-05-26T10',
    apples: 58,
    oranges: 20,
  },
  {
    date: '2020-05-26T11',
    apples: 47,
    oranges: 19,
  },
  {
    date: '2020-05-26T12',
    apples: 48,
    oranges: 19,
  },
  {
    date: '2020-05-26T13',
    apples: 46,
    oranges: 23,
  },
  {
    date: '2020-05-26T14',
    apples: 52,
    oranges: 23,
  },
  {
    date: '2020-05-26T15',
    apples: 61,
    oranges: 25,
  },
  {
    date: '2020-05-26T16',
    apples: 62,
    oranges: 24,
  },
  {
    date: '2020-05-26T17',
    apples: 66,
    oranges: 26,
  },
  {
    date: '2020-05-26T18',
    apples: 71,
    oranges: 28,
  },
  {
    date: '2020-05-26T19',
    apples: 72,
    oranges: 27,
  },
  {
    date: '2020-05-26T20',
    apples: 70,
    oranges: 27,
  },
  {
    date: '2020-05-26T21',
    apples: 75,
    oranges: 27,
  },
  {
    date: '2020-05-26T22',
    apples: 80,
    oranges: 28,
  },
  {
    date: '2020-05-26T23',
    apples: 82,
    oranges: 29,
  },
  {
    date: '2020-05-27T00',
    apples: 80,
    oranges: 30,
  },
  {
    date: '2020-05-27T01',
    apples: 84,
    oranges: 30,
  },
  {
    date: '2020-05-27T02',
    apples: 85,
    oranges: 34,
  },
  {
    date: '2020-05-27T03',
    apples: 78,
    oranges: 31,
  },
  {
    date: '2020-05-27T04',
    apples: 77,
    oranges: 29,
  },
  {
    date: '2020-05-27T05',
    apples: 73,
    oranges: 30,
  },
  {
    date: '2020-05-27T06',
    apples: 72,
    oranges: 30,
  },
  {
    date: '2020-05-27T07',
    apples: 71,
    oranges: 28,
  },
  {
    date: '2020-05-27T08',
    apples: 63,
    oranges: 25,
  },
  {
    date: '2020-05-27T09',
    apples: 60,
    oranges: 26,
  },
  {
    date: '2020-05-27T10',
    apples: 54,
    oranges: 23,
  },
  {
    date: '2020-05-27T11',
    apples: 50,
    oranges: 16,
  },
  {
    date: '2020-05-27T12',
    apples: 54,
    oranges: 17,
  },
  {
    date: '2020-05-27T13',
    apples: 49,
    oranges: 20,
  },
  {
    date: '2020-05-27T14',
    apples: 53,
    oranges: 23,
  },
  {
    date: '2020-05-27T15',
    apples: 64,
    oranges: 23,
  },
  {
    date: '2020-05-27T16',
    apples: 62,
    oranges: 25,
  },
  {
    date: '2020-05-27T17',
    apples: 69,
    oranges: 27,
  },
  {
    date: '2020-05-27T18',
    apples: 77,
    oranges: 29,
  },
  {
    date: '2020-05-27T19',
    apples: 77,
    oranges: 30,
  },
  {
    date: '2020-05-27T20',
    apples: 77,
    oranges: 29,
  },
  {
    date: '2020-05-27T21',
    apples: 77,
    oranges: 29,
  },
  {
    date: '2020-05-27T22',
    apples: 79,
    oranges: 28,
  },
  {
    date: '2020-05-27T23',
    apples: 82,
    oranges: 30,
  },
  {
    date: '2020-05-28T00',
    apples: 84,
    oranges: 31,
  },
  {
    date: '2020-05-28T01',
    apples: 86,
    oranges: 31,
  },
  {
    date: '2020-05-28T02',
    apples: 83,
    oranges: 31,
  },
  {
    date: '2020-05-28T03',
    apples: 84,
    oranges: 31,
  },
  {
    date: '2020-05-28T04',
    apples: 82,
    oranges: 29,
  },
  {
    date: '2020-05-28T05',
    apples: 78,
    oranges: 29,
  },
  {
    date: '2020-05-28T06',
    apples: 79,
    oranges: 28,
  },
  {
    date: '2020-05-28T07',
    apples: 76,
    oranges: 29,
  },
  {
    date: '2020-05-28T08',
    apples: 66,
    oranges: 27,
  },
  {
    date: '2020-05-28T09',
    apples: 68,
    oranges: 25,
  },
  {
    date: '2020-05-28T10',
    apples: 54,
    oranges: 23,
  },
  {
    date: '2020-05-28T11',
    apples: 61,
    oranges: 22,
  },
  {
    date: '2020-05-28T12',
    apples: 56,
    oranges: 16,
  },
  {
    date: '2020-05-28T13',
    apples: 67,
    oranges: 18,
  },
  {
    date: '2020-05-28T14',
    apples: 71,
    oranges: 19,
  },
  {
    date: '2020-05-28T15',
    apples: 78,
    oranges: 23,
  },
  {
    date: '2020-05-28T16',
    apples: 81,
    oranges: 23,
  },
  {
    date: '2020-05-28T17',
    apples: 79,
    oranges: 27,
  },
  {
    date: '2020-05-28T18',
    apples: 79,
    oranges: 25,
  },
  {
    date: '2020-05-28T19',
    apples: 81,
    oranges: 29,
  },
  {
    date: '2020-05-28T20',
    apples: 84,
    oranges: 25,
  },
  {
    date: '2020-05-28T21',
    apples: 82,
    oranges: 28,
  },
  {
    date: '2020-05-28T22',
    apples: 86,
    oranges: 28,
  },
  {
    date: '2020-05-28T23',
    apples: 86,
    oranges: 29,
  },
  {
    date: '2020-05-29T00',
    apples: 89,
    oranges: 28,
  },
  {
    date: '2020-05-29T01',
    apples: 88,
    oranges: 30,
  },
  {
    date: '2020-05-29T02',
    apples: 87,
    oranges: 28,
  },
  {
    date: '2020-05-29T03',
    apples: 82,
    oranges: 30,
  },
  {
    date: '2020-05-29T04',
    apples: 83,
    oranges: 26,
  },
  {
    date: '2020-05-29T05',
    apples: 73,
    oranges: 27,
  },
  {
    date: '2020-05-29T06',
    apples: 70,
    oranges: 28,
  },
  {
    date: '2020-05-29T07',
    apples: 73,
    oranges: 27,
  },
  {
    date: '2020-05-29T08',
    apples: 66,
    oranges: 25,
  },
  {
    date: '2020-05-29T09',
    apples: 60,
    oranges: 23,
  },
  {
    date: '2020-05-29T10',
    apples: 50,
    oranges: 19,
  },
  {
    date: '2020-05-29T11',
    apples: 46,
    oranges: 18,
  },
  {
    date: '2020-05-29T12',
    apples: 46,
    oranges: 19,
  },
  {
    date: '2020-05-29T13',
    apples: 52,
    oranges: 18,
  },
  {
    date: '2020-05-29T14',
    apples: 56,
    oranges: 20,
  },
  {
    date: '2020-05-29T15',
    apples: 60,
    oranges: 21,
  },
  {
    date: '2020-05-29T16',
    apples: 68,
    oranges: 22,
  },
  {
    date: '2020-05-29T17',
    apples: 70,
    oranges: 23,
  },
  {
    date: '2020-05-29T18',
    apples: 75,
    oranges: 27,
  },
  {
    date: '2020-05-29T19',
    apples: 80,
    oranges: 27,
  },
  {
    date: '2020-05-29T20',
    apples: 76,
    oranges: 26,
  },
  {
    date: '2020-05-29T21',
    apples: 80,
    oranges: 29,
  },
  {
    date: '2020-05-29T22',
    apples: 76,
    oranges: 26,
  },
  {
    date: '2020-05-29T23',
    apples: 82,
    oranges: 24,
  },
  {
    date: '2020-05-30T00',
    apples: 82,
    oranges: 27,
  },
  {
    date: '2020-05-30T01',
    apples: 84,
    oranges: 25,
  },
  {
    date: '2020-05-30T02',
    apples: 78,
    oranges: 28,
  },
  {
    date: '2020-05-30T03',
    apples: 75,
    oranges: 25,
  },
  {
    date: '2020-05-30T04',
    apples: 77,
    oranges: 26,
  },
  {
    date: '2020-05-30T05',
    apples: 72,
    oranges: 25,
  },
  {
    date: '2020-05-30T06',
    apples: 68,
    oranges: 26,
  },
  {
    date: '2020-05-30T07',
    apples: 67,
    oranges: 24,
  },
  {
    date: '2020-05-30T08',
    apples: 62,
    oranges: 21,
  },
  {
    date: '2020-05-30T09',
    apples: 56,
    oranges: 18,
  },
  {
    date: '2020-05-30T10',
    apples: 49,
    oranges: 18,
  },
  {
    date: '2020-05-30T11',
    apples: 45,
    oranges: 18,
  },
  {
    date: '2020-05-30T12',
    apples: 48,
    oranges: 15,
  },
  {
    date: '2020-05-30T13',
    apples: 53,
    oranges: 22,
  },
  {
    date: '2020-05-30T14',
    apples: 59,
    oranges: 22,
  },
  {
    date: '2020-05-30T15',
    apples: 75,
    oranges: 28,
  },
  {
    date: '2020-05-30T16',
    apples: 77,
    oranges: 28,
  },
  {
    date: '2020-05-30T17',
    apples: 83,
    oranges: 27,
  },
  {
    date: '2020-05-30T18',
    apples: 89,
    oranges: 28,
  },
  {
    date: '2020-05-30T19',
    apples: 94,
    oranges: 31,
  },
  {
    date: '2020-05-30T20',
    apples: 88,
    oranges: 32,
  },
  {
    date: '2020-05-30T21',
    apples: 84,
    oranges: 27,
  },
  {
    date: '2020-05-30T22',
    apples: 94,
    oranges: 31,
  },
  {
    date: '2020-05-30T23',
    apples: 92,
    oranges: 28,
  },
  {
    date: '2020-05-31T00',
    apples: 91,
    oranges: 30,
  },
  {
    date: '2020-05-31T01',
    apples: 89,
    oranges: 27,
  },
  {
    date: '2020-05-31T02',
    apples: 82,
    oranges: 26,
  },
  {
    date: '2020-05-31T03',
    apples: 77,
    oranges: 24,
  },
  {
    date: '2020-05-31T04',
    apples: 76,
    oranges: 25,
  },
  {
    date: '2020-05-31T05',
    apples: 72,
    oranges: 22,
  },
  {
    date: '2020-05-31T06',
    apples: 63,
    oranges: 22,
  },
  {
    date: '2020-05-31T07',
    apples: 67,
    oranges: 21,
  },
  {
    date: '2020-05-31T08',
    apples: 62,
    oranges: 23,
  },
  {
    date: '2020-05-31T09',
    apples: 58,
    oranges: 18,
  },
  {
    date: '2020-05-31T10',
    apples: 53,
    oranges: 22,
  },
  {
    date: '2020-05-31T11',
    apples: 53,
    oranges: 18,
  },
  {
    date: '2020-05-31T12',
    apples: 50,
    oranges: 14,
  },
  {
    date: '2020-05-31T13',
    apples: 54,
    oranges: 18,
  },
  {
    date: '2020-05-31T14',
    apples: 65,
    oranges: 25,
  },
  {
    date: '2020-05-31T15',
    apples: 84,
    oranges: 23,
  },
  {
    date: '2020-05-31T16',
    apples: 87,
    oranges: 23,
  },
  {
    date: '2020-05-31T17',
    apples: 92,
    oranges: 27,
  },
  {
    date: '2020-05-31T18',
    apples: 93,
    oranges: 28,
  },
  {
    date: '2020-05-31T19',
    apples: 96,
    oranges: 29,
  },
  {
    date: '2020-05-31T20',
    apples: 99,
    oranges: 31,
  },
  {
    date: '2020-05-31T21',
    apples: 100,
    oranges: 29,
  },
  {
    date: '2020-05-31T22',
    apples: 98,
    oranges: 30,
  },
  {
    date: '2020-05-31T23',
    apples: 94,
    oranges: 30,
  },
  {
    date: '2020-06-01T00',
    apples: 94,
    oranges: 27,
  },
  {
    date: '2020-06-01T01',
    apples: 93,
    oranges: 25,
  },
  {
    date: '2020-06-01T02',
    apples: 87,
    oranges: 25,
  },
  {
    date: '2020-06-01T03',
    apples: 81,
    oranges: 24,
  },
  {
    date: '2020-06-01T04',
    apples: 75,
    oranges: 26,
  },
  {
    date: '2020-06-01T05',
    apples: 66,
    oranges: 22,
  },
  {
    date: '2020-06-01T06',
    apples: 68,
    oranges: 22,
  },
  {
    date: '2020-06-01T07',
    apples: 61,
    oranges: 24,
  },
  {
    date: '2020-06-01T08',
    apples: 60,
    oranges: 20,
  },
  {
    date: '2020-06-01T09',
    apples: 57,
    oranges: 17,
  },
];

const legend = [
  {
    label: 'oranges',
    fill: '#F88829',
  },
  {
    label: 'apples',
    fill: '#EF1B32',
  },
];

const parseDate = d3.timeParse('%Y-%m-%dT%H');
const formatDay = d3.timeFormat('%a');
const formatHour = d3.timeFormat('%H');
const formatGap = d3.format('.2');

// array describing individual values
const values = [];
/* arrays separating the properties; objective an array of objects

  {
	  date,
	  value
  }
  */
const dataApples = [];
const dataOranges = [];

// array describing maximum values for each day
const dataMaxGap = [];

data.forEach(({ date, apples, oranges }) => {
  values.push(apples, oranges);
  dataApples.push({ date, value: apples });
  dataOranges.push({ date, value: oranges });

  const gap = apples - oranges;
  const day = formatDay(parseDate(date));

  const maxGapIndex = dataMaxGap.findIndex(d => d.day === day && d.gap >= gap);
  if (maxGapIndex === -1) {
    const hasDay = dataMaxGap.find(d => d.day === day);
    if (hasDay) {
      const previousMax = dataMaxGap.find(d => d.day === day);
      previousMax.gap = gap;
      previousMax.apples = apples;
      previousMax.oranges = oranges;
      previousMax.date = parseDate(date);
    } else {
      dataMaxGap.push({ day, gap, date: parseDate(date), apples, oranges });
    }
  }
});

const main = d3.select('main');
main.append('h1').text('Area spread');
main
  .append('p')
  .html(
    'Highlight the difference in the interest between apples and oranges in an informative area chart.'
  );

const width = 800;
const height = 300;

const margin = {
  top: 20,
  right: 0,
  bottom: 20,
  left: 0,
};

const legendPadding = 60;

const svg = main
  .append('svg')
  .attr(
    'viewBox',
    `-${margin.left} -${margin.top} ${width +
      (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`
  );

// DEFS
// dots pattern and arrow marker
const pattern = svg
  .append('defs')
  .append('pattern')
  .attr('id', 'pattern-dots')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 8)
  .attr('height', 8)
  .attr('viewBox', '-5 -5 10 10');
pattern
  .append('circle')
  .attr('r', 2)
  .attr('fill', 'currentColor');

const marker = svg
  .select('defs')
  .append('marker')
  .attr('id', 'marker-arrow')
  .attr('markerWidth', 4)
  .attr('markerHeight', 4)
  .attr('viewBox', '-5 -5 10 10')
  .attr('orient', 'auto-start-reverse');
marker
  .append('path')
  .attr('d', 'M -5 -5 l 10 5 -10 5')
  .attr('fill', 'currentColor')
  .attr('stroke', 'none');

// LEGEND
svg.append('g').attr('id', 'legend');

const scaleLegend = d3
  .scaleBand()
  .domain(legend.map(({ label }) => label))
  .range([width / 8, width - width / 4]);

d3.select('#legend')
  .selectAll('g.label')
  .data(legend)
  .enter()
  .append('g')
  .attr('class', 'label')
  .attr('id', d => `label-${d.label}`)
  .attr(
    'transform',
    d => `translate(${scaleLegend(d.label) + scaleLegend.bandwidth() / 2} 0)`
  )
  .attr('color', d => d.fill);

d3.selectAll('#legend .label')
  .append('rect')
  .attr('width', 40)
  .attr('height', 20)
  .attr('fill', 'currentColor')
  .attr('transform', 'translate(-20 -10)')
  .attr('opacity', 0.25);

d3.select('#label-apples')
  .append('rect')
  .attr('width', 40)
  .attr('height', 20)
  .attr('fill', 'url(#pattern-dots)')
  .attr('transform', 'translate(-20 -10)')
  .attr('opacity', 0.15);

d3.selectAll('#legend .label')
  .append('rect')
  .attr('width', 40)
  .attr('height', 5)
  .attr('fill', 'currentColor')
  .attr('transform', 'translate(-20 -10)');

d3.selectAll('#legend .label')
  .append('text')
  .attr('x', 25)
  .attr('y', 5)
  .text(d => d.label)
  .style('letter-spacing', '0.5px')
  .style('text-transform', 'capitalize');

// VIZ
svg
  .append('g')
  .attr('id', 'viz')
  .attr('transform', `translate(0 ${legendPadding})`);

// SCALES
const scaleTime = d3
  .scaleTime()
  .domain(d3.extent(data, d => parseDate(d.date)))
  .range([0, width]);
const scaleValues = d3
  .scaleLinear()
  .domain([0, d3.max(values)])
  .range([height - legendPadding, 0]);

// AXES
const axisTime = d3
  .axisBottom(scaleTime)
  .ticks(data.length * 0.2)
  .tickFormat(d => {
    const h = formatHour(d);
    const hour = `${h} h`;
    return h > 10 ? hour : hour.slice(1);
  })
  .tickSize(0)
  .tickPadding(5);

const axisValues = d3
  .axisLeft(scaleValues)
  .ticks(5)
  .tickSize(0)
  .tickPadding(0)
  .tickFormat(d => (d === 0 ? '' : d));

d3.select('#viz')
  .append('g')
  .attr('class', 'axes')
  .style('opacity', 0.5);

d3.select('.axes')
  .append('g')
  .attr('id', 'axis-time')
  .attr('transform', `translate(0 ${height - legendPadding})`)
  .call(axisTime);

d3.select('.axes')
  .append('g')
  .attr('id', 'axis-values')
  .call(axisValues);

d3.select('#axis-values')
  .select('path')
  .remove();

d3.select('#axis-values')
  .selectAll('text')
  .attr('fill', 'currentColor')
  .attr('text-anchor', 'start')
  .attr('y', 12)
  .style('font-size', 12);

d3.select('#axis-values')
  .selectAll('.tick')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-dasharray', '5 10')
  .style('opacity', 0.5);
  
d3.select('#axis-time')
  .selectAll('.tick')
  .append('path')
  .attr('d', d => {
    const h = d.getHours();
    return h === 0 ? `M 0 0 v -${height - legendPadding}` : '';
  })
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 0.5)
  .attr('opacity', 0.5);

d3.select('#axis-time')
  .selectAll('.tick')
  .append('text')
  .text(d => {
    const h = d.getHours();
    return h === 12 && formatDay(d) !== 'Mon' ? formatDay(d) : '';
  })
  .attr('fill', 'currentColor')
  .attr('stroke', 'none')
  .attr('text-anchor', 'middle')
  .attr('transform', `translate(0 -${height - legendPadding})`)
  .attr('y', -10)
  .style('font-size', 12)
  .style('text-transform', 'uppercase');

// ACTUAL VIZ
const line = d3
  .line()
  .x(d => scaleTime(parseDate(d.date)))
  .y(d => scaleValues(d.value));
const area = d3
  .area()
  .x(d => scaleTime(parseDate(d.date)))
  .y0(scaleValues(0))
  .y1(d => scaleValues(d.value));

d3.select('#viz')
  .append('g')
  .attr('id', 'areas')
  .attr('fill', 'currentColor')
  .attr('stroke', 'none')
  .attr('opacity', 0.25);

d3.select('#areas')
  .append('path')
  .attr('d', area(dataApples))
  .attr('fill', legend.find(d => d.label === 'apples').fill);

d3.select('#areas')
  .append('path')
  .attr('d', area(dataApples))
  .attr('fill', 'url(#pattern-dots)')
  .style('opacity', 0.8);

d3.select('#areas')
  .append('path')
  .attr('d', area(dataOranges))
  .attr('fill', legend.find(d => d.label === 'oranges').fill);

d3.select('#viz')
  .append('g')
  .attr('id', 'lines')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 4)
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');
d3.select('#lines')
  .append('path')
  .attr('d', line(dataApples))
  .attr('stroke', legend.find(d => d.label === 'apples').fill);
d3.select('#lines')
  .append('path')
  .attr('d', line(dataOranges))
  .attr('stroke', legend.find(d => d.label === 'oranges').fill);

d3.select('#viz')
  .append('g')
  .attr('id', 'gaps');
d3.select('#gaps')
  .selectAll('g.gap')
  .data(dataMaxGap)
  .enter()
  .append('g')
  .attr('class', 'gap')
  .attr('transform', ({ date }) => `translate(${scaleTime(date)} 0)`);
d3.selectAll('g.gap')
  .append('path')
  .attr(
    'd',
    ({ apples, oranges }) =>
      `M 0 ${scaleValues(apples)} V ${scaleValues(oranges)}`
  )
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 3)
  .attr('marker-start', 'url(#marker-arrow)')
  .attr('marker-end', 'url(#marker-arrow)');
d3.selectAll('g.gap')
  .append('text')
  .text(({ apples, oranges }) => `x${formatGap(apples / oranges)}`)
  .attr('transform', ({ apples }) => `translate(0 ${scaleValues(apples) - 10})`)
  .attr('fill', 'currentColor')
  .attr('stroke', 'none')
  .attr('text-anchor', 'middle')
  .style('font-size', 14)
  .style('letter-spacing', '-1px')
  .style('font-weight', '600');

main
  .append('p')
  .text('Source: ')
  .append('a')
  .attr('href', url)
  .text('Google Trends');