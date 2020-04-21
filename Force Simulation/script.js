/* data: build a hierarchical structure where each generation has x connections
! consider using the Canvas API instead of SVG syntax when plotting a ridiculous number of data points
*/
const generations = 10;
const connections = 2;

const data = [{ hasStyle: true, generation: 0 }];

for (let generation = 0; generation < generations; generation += 1) {
  const currentGenerations = data.filter(
    point => point.generation === generation
  );

  currentGenerations.forEach(currentGeneration => {
    const id = Math.random();
    currentGeneration.id = id;

    const connectedGenerations = Array(connections)
      .fill()
      .map(() => ({
        parentId: id,
        generation: generation + 1,
        hasStyle: false,
      }));
    data.push(...connectedGenerations);
  });
}

// d3.forceSimulation adds a series of properties to the data points
// most notably `x` and `y`
const simulation = d3.forceSimulation(data);

// markup structure
const root = d3.select('#root');
const size = 950;
const svg = root
  .append('svg')
  .attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

// label describing the generation
svg
  .append('text')
  .attr('x', size / 2 - 5)
  .attr('y', -size / 2 + 30)
  .attr('font-size', 30)
  .attr('text-anchor', 'end')
  .text('Generation: ')
  .append('tspan')
  .text(0);

// buttons allowing to style the connections from the curernt generation
const controls = root.append('div').attr('class', 'controls');

const controlsPrevious = controls.append('button').attr('class', 'disabled');

controlsPrevious
  .append('svg')
  .attr('viewBox', '0 0 100 100')
  .style('pointer-events', 'none')
  .attr('width', '10')
  .attr('height', '10')
  .append('use')
  .attr('href', '#previous');

controlsPrevious.append('span').text('Step back');

const controlsOutput = controls
  .append('output')
  .text(data.filter(point => point.hasStyle).length);

const controlsNext = controls.append('button');

controlsNext.append('span').text('Step forward');

controlsNext
  .append('svg')
  .attr('viewBox', '0 0 100 100')
  .style('pointer-events', 'none')
  .attr('width', '10')
  .attr('height', '10')
  .append('use')
  .attr('href', '#next');

// VIZ
// function appending/updating the circle elements
function plotData(data) {
  svg
    .selectAll('circle')
    .data(data)
    .join(
      enter =>
        enter
          .append('circle')
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
          .attr('r', 5)
          .style('color', d => (d.hasStyle ? 'tomato' : 'inherit'))
          .attr('fill', d => (d.hasStyle ? 'currentColor' : 'none'))
          .attr('stroke-width', 2.5)
          .attr('stroke', 'currentColor'),
      update =>
        update
          .style('color', d => (d.hasStyle ? 'tomato' : 'inherit'))
          .attr('fill', d => (d.hasStyle ? 'currentColor' : 'none'))
    );

  // update the label to describe the latest generation with the boolean hasStyle
  svg
    .select('tspan')
    .text([...data].reverse().find(point => point.hasStyle).generation);

  // update the output to describe the number of data points with the boolean hasStyle
  controlsOutput.text(data.filter(point => point.hasStyle).length);
}
plotData(data);

// INTERACTION
// consider the generation with the boolean hasStyle
// use the .disabled class to limit the steps in the [0, generations] interval
controlsPrevious.on('click', function() {
  const isDisabled = d3.select(this).classed('disabled');
  if (!isDisabled) {
    const { generation } = [...data].reverse().find(point => point.hasStyle);
    data.forEach(point => {
      if (point.generation === generation) {
        point.hasStyle = false;
      }
    });

    plotData(data);
    controlsNext.attr('class', '');
    d3.select(this).attr('class', () => (generation > 1 ? '' : 'disabled'));
  }
});

controlsNext.on('click', function() {
  const isDisabled = d3.select(this).classed('disabled');
  if (!isDisabled) {
    const { generation } = data.find(point => !point.hasStyle);
    data.forEach(point => {
      if (point.generation === generation) {
        point.hasStyle = true;
      }
    });

    plotData(data);
    controlsPrevious.attr('class', '');
    d3.select(this).attr('class', () =>
      generation < generations ? '' : 'disabled'
    );
  }
});
