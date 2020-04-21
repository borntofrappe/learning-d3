const generations = 10;
const connections = 2;

const data = [{ hasStyle: true, generation: 0 }];

for (let generation = 0; generation < generations; generation += 1) {
  const currentGenerations = data.filter((point) => point.generation === generation);

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

const simulation = d3.forceSimulation(data);

const main = d3.select('main');


const size = 950;
const svg = main.append('svg').attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`).attr('width', size).attr('height', size);

svg.append('text').attr('x', size / 2 - 5).attr('y', - size / 2 + 30).attr('font-size', 30).attr('text-anchor', 'end').text('Generation: ').append('tspan').text(0);
function plotData(data) {
  svg
    .selectAll("circle")
    .data(data)
    .join(
      enter =>
      enter
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", 4)
        .style("color", d => d.hasStyle ? "tomato" : "inherit")
        .attr("fill", d => d.hasStyle ? "currentColor" : "none")
        .attr("stroke-width", 2)
        .attr("stroke", "currentColor"),
      update =>
      update
        .style("color", d => d.hasStyle ? "tomato" : "inherit")
        .attr("fill", d => d.hasStyle ? "currentColor" : "none")
    );

  svg.select('tspan').text([...data].reverse().find(point => point.hasStyle).generation);
}

plotData(data);

const controls = main.append('div').attr('class', 'controls');

const controlsPrevious = controls
  .append('button')
  .attr('class', 'disabled');

controlsPrevious
  .append('svg')
  .attr('viewBox', '0 0 100 100')
  .style('pointer-events', 'none')
  .attr('width', '10')
  .attr('height', '10')
  .append('use')
  .attr('href', '#previous');

  controlsPrevious
  .append('span')
  .text('Step back')

const controlsOutput = controls
  .append('output')
  .text(data.filter(point => point.hasStyle).length);

  const controlsNext = controls
  .append('button');

controlsNext
  .append('span')
  .text('Step forward')

controlsNext
  .append('svg')
  .attr('viewBox', '0 0 100 100')
  .style('pointer-events', 'none')
  .attr('width', '10')
  .attr('height', '10')
  .append('use')
  .attr('href', '#next');


controlsPrevious.on("click", function() {
    const isDisabled = d3.select(this).classed('disabled');
    if(!isDisabled) {
      const {generation} = [...data].reverse().find(point => point.hasStyle);
      data.forEach(point => {
        if(point.generation === generation) {
          point.hasStyle = false;
        }
      });

      plotData(data);

      controlsOutput.text(data.filter(point => point.hasStyle).length);
      controlsNext.attr('class', '');
      d3.select(this).attr('class', () => generation > 1 ? '' : 'disabled');
    }
  });

controlsNext.on("click", function() {
  const isDisabled = d3.select(this).classed('disabled');

  if(!isDisabled) {
    const {generation} = data.find(point => !point.hasStyle);
    data.forEach(point => {
      if(point.generation === generation) {
        point.hasStyle = true;
      }
    });
    plotData(data);

    controlsOutput.text(data.filter(point => point.hasStyle).length);
    controlsPrevious.attr('class', '');
    d3.select(this).attr('class', () => generation < generations ? '' : 'disabled');
  }
});

