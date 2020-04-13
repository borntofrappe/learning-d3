// DATA
// create an array of objects linking each other with `id` and `parentId` attributes
// use d3.stratify to build the necessary hierarchy
const generations = 2;
const data = [
  {
    isSmiling: true,
  }
];

function getGeneration(parentId, children = 5, numberPositive = 3) {
  let generation = [];
  for (let i = 0; i < children; i += 1) {
    const point = {
      isSmiling: !(i < children - numberPositive),
      parentId: parentId,
    };

    const index = Math.round(Math.random() * generation.length);
    generation = [
      ...generation.slice(0, index),
      point,
      ...generation.slice(index),
    ];
  }
  return generation;
}

for(let i = 0; i < generations; i += 1) {
  const latestGenerations = data.filter(point => point.isSmiling && !point.id);
  latestGenerations.forEach(latestGeneration => {
    const id = Math.random();
    latestGeneration.id = id;
    data.push(...getGeneration(id));
  });
}

const root = d3.stratify().id(d => d.id).parentId(d => d.parentId);
const dataRoot = root(data);

// VIZ
const main = d3.select('main');
main.append('h1').text('Positivity Tree');

const margin = 60;
const width = 750;
const height = 550;
const svg = main
  .append('svg')
  .attr(
    'viewBox',
    `${-margin} ${-margin} ${width + margin * 2} ${height + margin * 2}`
  );

// define the faces to later <use> as needed
const defs = svg.append('defs');
const faceSmiling = defs
  .append('symbol')
  .attr('viewBox', '-50 -50 100 100')
  .attr('id', 'face-smiling');
faceSmiling
  .append('circle')
  .attr('r', '47')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '6')
  .attr('fill', 'hsl(45, 90%, 85%)');
faceSmiling
  .append('circle')
  .attr('r', '5')
  .attr('cx', '-15')
  .attr('cy', '-6');
faceSmiling
  .append('circle')
  .attr('r', '5')
  .attr('cx', '15')
  .attr('cy', '-6');
faceSmiling
  .append('path')
  .attr('d', 'M -10 10 a 10 10 0 0 0 20 0')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '4')
  .attr('fill', 'none');

const faceDefault = defs
  .append('symbol')
  .attr('viewBox', '-50 -50 100 100')
  .attr('id', 'face-default');
faceDefault
  .append('circle')
  .attr('r', '47')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '6')
  .attr('fill', 'hsl(45, 90%, 98%)');
faceDefault
  .append('circle')
  .attr('r', '5')
  .attr('cx', '-15')
  .attr('cy', '-6');
faceDefault
  .append('circle')
  .attr('r', '5')
  .attr('cx', '15')
  .attr('cy', '-6');
faceDefault
  .append('path')
  .attr('d', 'M -10 15 h 20')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '4')
  .attr('fill', 'none');

// label moved next to the root node
const text = svg
  .append('text')
  .text('Happy Clam')
  .attr('font-size', '30')
  .attr('x', width / 2);

const path = svg
  .append('path')
  .attr('d', `M ${width / 2} 0`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '2')
  .attr('fill', 'none');

// MAPPING FUNCTION
function plotData(data, topToBottom = true) {
  // MAP DATA
  // const hierarchy = d3.hierarchy(dataRoot);
  const size = topToBottom ? [width, height] : [height, width];
  const tree = d3.tree().size(size);
  const dataTree = tree(data);

  const scaleSize = d3
    .scalePow()
    .exponent(0.5)
    .domain([dataTree.height, 0])
    .range([40, 120]);

  const links = dataTree.links();

  const linkVertical = d3
    .linkVertical()
    .x(d => d.x)
    .y(d => d.y);
  const linkHorizontal = d3
    .linkHorizontal()
    .x(d => d.y)
    .y(d => d.x);

  const link = topToBottom ? linkVertical : linkHorizontal;

  const descendants = dataTree.descendants();
  const root = descendants.find(({ depth }) => depth === 0);


  // ADD/UPADTE VISUALS
  text
    .attr('x', topToBottom ? root.x + 100 : root.y - 50)
    .attr('y', topToBottom ? root.y - 25 : root.x - 100);

  path.attr(
    'd',
    topToBottom
      ? `M ${root.x + 90} ${root.y - 35} h -25`
      : `M ${root.y - 25} ${root.x - 90} v 25`
  );

  svg
    .selectAll('path.highlight')
    .data(links.filter(link => link.target.data.isSmiling))
    .join(
      enter =>
        enter
          .append('path')
          .attr('class', 'highlight')
          .attr('d', d => link(d))
          .attr('fill', 'none')
          .attr('stroke', 'hsl(45, 90%, 80%)')
          .attr('stroke-width', '25'),
      update => update.attr('d', d => link(d))
    );

  svg
    .selectAll('path.connection')
    .data(links)
    .join(
      enter =>
        enter
          .append('path')
          .attr('class', 'connection')
          .attr('d', d => link(d))
          .attr('fill', 'none')
          .attr('stroke', 'hsl(0, 0%, 80%)')
          .attr('stroke-width', '2'),
      update => update.attr('d', d => link(d))
    );

  svg
    .selectAll('use')
    .data(descendants)
    .join(
      enter =>
        enter
          .append('use')
          .attr('x', d => (topToBottom ? d.x : d.y))
          .attr('y', d => (topToBottom ? d.y : d.x))
          .attr('width', d => scaleSize(d.depth))
          .attr('height', d => scaleSize(d.depth))
          .attr(
            'transform',
            d =>
              `translate(${(scaleSize(d.depth) / 2) * -1} ${(scaleSize(
                d.depth
              ) /
                2) *
                -1})`
          )
          .attr('href', d => d.data.isSmiling ? '#face-smiling' : '#face-default'
          ),
      update =>
        update
          .attr('x', d => (topToBottom ? d.x : d.y))
          .attr('y', d => (topToBottom ? d.y : d.x))
    );
}

// DIRECTION UPDATE
// consider the width of the window to map the data top to bottom/left to right
const { innerWidth } = window;
const threshold = 600;
let topToBottom = innerWidth < threshold;
plotData(dataRoot, topToBottom);

window.addEventListener('resize', function() {
  const { innerWidth } = this;
  if (topToBottom !== innerWidth < threshold) {
    topToBottom = innerWidth < threshold;
    plotData(dataRoot, topToBottom);
  }
});
