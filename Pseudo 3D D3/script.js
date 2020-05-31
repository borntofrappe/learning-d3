const data = [
  {
    country: 'France',
    value: 450600078,
    colors: ['hsl(220, 85%, 65%)', 'hsl(0, 0%, 98%)', 'hsl(0, 90%, 60%)'],
  },
  {
    country: 'Germany',
    value: 493945671,
    colors: ['hsl(0, 0%, 30%)', 'hsl(0, 90%, 60%)', 'hsl(60, 95%, 65%)'],
  },
  {
    country: 'Italy',
    value: 435463054,
    colors: ['hsl(120, 80%, 70%)', 'hsl(0, 0%, 98%)', 'hsl(0, 90%, 60%)'],
  },
  {
    country: 'United Kingdom',
    value: 328055041,
    colors: ['hsl(0, 0%, 98%)', 'hsl(0, 90%, 60%)', 'hsl(220, 85%, 65%)'],
  },
  {
    country: 'Spain',
    value: 307065000,
    colors: ['hsl(0, 90%, 60%)', 'hsl(60, 95%, 65%)', 'hsl(0, 90%, 60%)'],
  },
].sort((a, b) => a.value > b.value ? -1 : 1);

const canvas = document.createElement('canvas');
const width = 800;
const height = 250;
canvas.width = width;
canvas.height = height;

document.querySelector('main').appendChild(canvas);

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
};
const scaleSize = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([1, 5]);
const scalePosition = d3.scaleBand().domain(data.map(({country}) => country)).range([width - margin.right, margin.left])

const illustration = new Zdog.Illustration({
  element: canvas,
  translate: { y: -20 },
  rotate: { y : -Zdog.TAU / 20, x: -Zdog.TAU / 50 },
});

data.forEach(({country, value, colors}) => {
  const size = scaleSize(value);
  const position = scalePosition(country) + scalePosition.bandwidth() / 2;
  const length = 20;
  const anchor = new Zdog.Anchor({
    addTo: illustration,
    translate: { x: position - width / 2, y: length * scaleSize.range()[1] },
    scale: size,
  });

  new Zdog.Cone({
    addTo: anchor,
    diameter: 15,
    length,
    stroke: 15,
    color: 'hsl(38, 85%, 55%)',
    translate: { y: -length },
    // translate: { y: size * 40 },
    rotate: { x: -Zdog.TAU / 4},
  });

  const scoop = new Zdog.Group({
    addTo: anchor,
    translate: { y: -length },
  })
  
  colors.forEach((color, i) => {
    new Zdog.Shape({
      addTo: scoop,
      stroke: 60,
      color: color,
      translate: { x: -6 + 6 * i, y: i % 2 === 0 ? -2 : -6 },
    })
  });

});


illustration.updateRenderGraph();

const format = d3.format(",");

const main = d3.select('main');

main.append('p').text(`In Europe, ${data[0].country} is the largest producer of ice cream. In terms of quantity, the top five countries can be summarised as follows:`);
const table = main.append('table');

table.append('thead').append('tr').selectAll('th').data(['Country', 'Quantity (million liters)']).enter().append('th').text(d => d);
table.append('tbody').selectAll('tr').data(data).enter().append('tr');
d3.selectAll('tbody tr').append('td').text(d => d.country);
d3.selectAll('tbody tr').append('td').text(d => format(d.value)).style('text-align', 'end');