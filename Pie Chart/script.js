// build data from a set of initial values
const initialData = [
  {
    key: 'volleyball',
    color: "hsl(245, 70%, 55%)"
  },
  {
    key: 'tennis',
    color: "hsl(210, 95%, 60%)"
  },
  {
    key: 'soccer',
    color: "hsl(85, 30%, 55%)"
  },
  {
    key: 'football',
    color: "hsl(330, 65%, 50%)"
  },
  {
    key: 'cricket',
    color: "hsl(35, 70%, 60%)"
  }
];

const getValue = (key) => key.split('').reduce((acc, curr) => acc + curr.charCodeAt(), 0);

const data = initialData.map(({key, icon, color}) => ({
  key,
  icon,
  color,
  value: getValue(key),
}));

const format = d3.format(',');
const main = d3.select('main');

main.append('h2').text('Question');
main.append('p').html('If you were to tally the value of every word using <code>.charCodeAt()</code>, and on every letter, which word would rise on top?');

main.append('h2').text('Words');
main.append('p').text(data.map(({key}) => key).join(', '));

const dataSorted = [...data].sort((a, b) => a.value > b.value ? -1 : 1);

main.append('h2').text('Answer');
const table = main.append('table');
const tableHeadRow = table.append('thead').append('tr');
tableHeadRow.append('th').text('Word');
tableHeadRow.append('th').text('Value').attr('align', 'right');

const tableBody = table.append('tbody');
const tableRows = tableBody.selectAll('tr').data(dataSorted).enter().append('tr');
tableRows
  .append('td')
  .text(d => d.key)
  .style('text-transform', 'capitalize');

tableRows
  .append('td')
  .text(d => format(d.value)).attr('align', 'right').style('font-feature-settings', 'tnum');

const size = 500;

const arc = d3
  .arc()
  .innerRadius(size / 4)
  .outerRadius(size / 2);

const pie = d3
  .pie()
  .value(d => d.value);

const dataPie = pie(data);
main.append('h2').text('Pie Chart');

const svg = main.append('svg').attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`).attr('width', size).attr('height', size);


svg
  .append('use')
  .attr('transform', 'translate(-50 -50)')
  .attr('width', 100)
  .attr('height', 100)
  .attr('href', '#sports');


const groups = svg
  .selectAll('g.slice')
  .data(dataPie)
  .enter()
  .append('g')
  .attr('class', 'slice');

groups
  .append('path')
  .attr('d', d => arc(d))
  .attr('fill', d => d.data.color)

  groups
  .append('path')
  .attr('d', d => arc.innerRadius(size / 4).outerRadius(size / 3.2)(d))
  .attr('fill', 'hsl(0, 0, 0%)')
  .attr('opacity', '0.25');


groups
  .append('g')
  .attr('transform', d => {
    const [x, y] = arc.innerRadius(size / 3.2).outerRadius(size / 2).centroid(d);
    return `translate(${x} ${y})`;
  })
  .append('g')
  .style('color', 'hsl(0, 0%, 100%)')
  .append('use')
  .attr('transform', 'translate(-20 -20)')
  .attr('width', 40)
  .attr('height', 40)
  .attr('href', d => `#${d.data.key}`);

