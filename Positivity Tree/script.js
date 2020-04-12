// DATA
/* there is definitely a better way to do this, but the idea is to

1. start from an object
{
  isSmiling: true,
  children: []
}

1. add a generation of five children, of which three are smiling

1. add another generation for the smiling children
1. repeat once more
*/
function getGeneration(children = 5, numberPositive = 3) {
  let generation = [];
  for (let i = 0; i < children; i += 1) {
    const point = {
      isSmiling: !(i < children - numberPositive),
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

function getData() {
  const data = {
    isSmiling: true,
    children: [],
  };

  const generation = getGeneration();
  data.children = generation;

  const nextGenerations = generation.filter(({ isSmiling }) => isSmiling);
  nextGenerations.forEach(nextGeneration => {
    nextGeneration.children = getGeneration();
    const nextGenerations = generation.filter(({ isSmiling }) => isSmiling);
    nextGenerations.forEach(nextGeneration => {
      nextGeneration.children = getGeneration();
    });
  });

  return data;
}

const data = getData();


// VIZ
const main = d3.select('main');
main.append('h1').text('Positivity Tree');

const margin = 50;
const width = 800;
const height = 500;
const svg = main.append('svg').attr('viewBox', `${-margin} ${-margin} ${width + margin * 2} ${height + margin * 2}`);

// define the shapes to later <use> as needed
const defs = svg.append('defs');
const faceSmiling = defs.append('symbol').attr('viewBox', '-50 -50 100 100').attr('id', 'face-smiling');
faceSmiling.append('circle').attr('r', '47').attr('stroke', 'currentColor').attr('stroke-width', '6').attr('fill', 'hsl(45, 90%, 85%)');
faceSmiling.append('circle').attr('r', '5').attr('cx', '-15').attr('cy', '-6')
faceSmiling.append('circle').attr('r', '5').attr('cx', '15').attr('cy', '-6')
faceSmiling.append('path').attr('d', 'M -10 10 a 10 10 0 0 0 20 0').attr('stroke', 'currentColor').attr('stroke-width', '4').attr('fill', 'none');

const faceDefault = defs.append('symbol').attr('viewBox', '-50 -50 100 100').attr('id', 'face-default');
faceDefault.append('circle').attr('r', '47').attr('stroke', 'currentColor').attr('stroke-width', '6').attr('fill', 'hsl(45, 90%, 98%)');
faceDefault.append('circle').attr('r', '5').attr('cx', '-15').attr('cy', '-6')
faceDefault.append('circle').attr('r', '5').attr('cx', '15').attr('cy', '-6')
faceDefault.append('path').attr('d', 'M -10 15 h 20').attr('stroke', 'currentColor').attr('stroke-width', '4').attr('fill', 'none');

const hierarchy = d3.hierarchy(data);
const tree = d3.tree().size([width, height]);
const dataTree = tree(hierarchy);

const links = dataTree.links();
const descendants = dataTree.descendants();

const link = d3.linkVertical().x(d => d.x).y(d => d.y);
svg.selectAll('path.highlight').data(links.filter(link => link.target.data.isSmiling)).enter().append('path').attr('class', 'highlight').attr('d', d => link(d)).attr('fill', 'none').attr('stroke', 'hsl(45, 90%, 85%)').attr('stroke-width', '25');
svg.selectAll('path.connection').data(links).enter().append('path').attr('class', 'connection').attr('d', d => link(d)).attr('fill', 'none').attr('stroke', 'currentColor').attr('stroke-width', '2');
const size = 50;
svg.selectAll('use').data(descendants).enter().append('use').attr('x', d => d.x).attr('y', d => d.y).attr('width', size).attr('height', size).attr('transform', `translate(${size / 2 * -1} ${size / 2 * -1})`).attr('href', d => d.data.isSmiling ? '#face-smiling' : '#face-default');