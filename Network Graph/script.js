// starting point
const lightness = 95;
const saturation = 55;
const initialHue = 0;
const initialColor = `hsl(${initialHue}, ${lightness}%, ${saturation}%)`;
const data = [{ color: initialColor}];

const size = 500;
const circleSize = 6;

const svg = d3
  .select('body')
  .append('svg')
  .attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`)
  .attr('width', size)
  .attr('height', size);

svg
  .selectAll('circle')
  .data(Array(30).fill())
  .enter()
  .append('circle')
  .attr('fill', (d, i, {length}) => `hsl(${360 / length * i}, ${lightness}%, ${saturation}%)`)
  .attr('transform', (d, i, {length}) => `rotate(${360 / length * i}) translate(0 ${-size / 2 + circleSize})`)
  .attr('r', circleSize);

const cursor = svg
  .append('path')
  .attr('d', 'M -14 -12 h 28 l -14 30 z')
  .attr('fill', 'none')
  .attr('stroke-width', 5)
  .attr('stroke-linecap', 'round')
  .attr('stroke-linejoin', 'round')
  .attr('stroke', initialColor);


cursor.attr('transform', 'scale(0)')
  .transition()
  .attr('transform', 'scale(1)');

const group = svg.append('g');

function plotData(data) {
  group
    .selectAll('circle')
    .data(data)
    .join(
      enter => {
        enter.append('circle').attr('cx', d => d.x).attr('cy', d => d.y).attr('fill', d => d.color || 'currentColor').attr('r', 0).transition().attr('r', circleSize);
      },
      update => {
        update.attr('cx', d => d.x).attr('cy', d => d.y);
        return undefined;
      },
    );
}

const simulation = d3
  .forceSimulation(data)
  .force('center', d3.forceCenter(0, 0))
  .on('tick', () => plotData(data));


const scaleForce = d3.scaleLinear().domain([0, size / 2 * (2 ** 0.5)]).range([0.1, 0.2]);
svg
  .on('click', function(e) {
    // this: svg element
    // d3.mouse(container) provides the x and y coordinates
    const [x, y] = d3.mouse(this);

    let angle = Math.atan(Math.abs(x) / Math.abs(y)) * 180 / Math.PI;
     if(x < 0 && y < 0) {
      angle = 360 - angle;
    }
     if(x < 0 && y > 0) {
      angle += 180;
    }
    else if(x > 0 && y > 0) {
      angle = 180 - angle;
     }

    const hue = Math.round(angle);
     const color = `hsl(${hue}, ${lightness}%, ${saturation}%)`;
    data.push({x, y, color});

    simulation.nodes(data);
    simulation
      .alpha(1)
      .force('center', d3.forceCenter(0, 0))
      .force('forceX', d3.forceX(0).strength(0.1))
      .force('forceY', d3.forceY(0).strength(0.1))
      .force('charge', d3.forceManyBody().strength(-40))
      .force('collision', d3.forceCollide().radius(circleSize * 2))

      .restart();
   })

svg
   .on('mousemove', function() {
     const [x, y] = d3.mouse(this);

     let angle = Math.atan(Math.abs(x) / Math.abs(y)) * 180 / Math.PI;
     if(x < 0 && y < 0) {
      angle = 360 - angle;
    }
     if(x < 0 && y > 0) {
      angle += 180;
    }
    else if(x > 0 && y > 0) {
      angle = 180 - angle;
     }

     const hue = Math.round(angle);
     const color = `hsl(${hue}, ${lightness}%, ${saturation}%)`;

     cursor
      .attr('transform', `translate(${x} ${y}) rotate(${angle})`)
      .attr('stroke', color);

   });