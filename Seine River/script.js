// https://en.wikipedia.org/wiki/Seine
const data = {
  mouth: 'English Channel',
  river: 'Seine',
  size: 79000,
  length: 775,
  tributaries: [
    { name: 'Risle', size: 2310, length: 145, side: 'l' },
    { name: 'Eure', size: 5935, length: 229, side: 'l' },
    { name: 'Loing', size: 4150, length: 143, side: 'l' },
    { name: 'Yonne', size: 10887, length: 292, side: 'l' },
    { name: 'Epte', size: 1403, length: 112.5, side: 'r' },
    { name: 'Oise', size: 17000, length: 341, side: 'r' },
    { name: 'Marne', size: 12800, length: 514, side: 'r' },
    { name: 'Aube', size: 3600, length: 249, side: 'r' },
    { name: 'Ource', size: 736, length: 100, side: 'r' }
  ],
};

const { select, sankey, sankeyLinkHorizontal, format } = d3;

const root = select('main');
root.append('h1').text('Seine river');
root.append('p').html(`<a href="https://en.wikipedia.org/wiki/Seine">Wikipedia</a> lists ${data.tributaries.length} tributaries, dividing them according to the side in which they enter the river.`);

const formatThousand = d3.format(',')

highlightBasin();
highlightLength();

function highlightBasin() {
  const article = root.append('article');

  const nodes = [...data.tributaries, { name: data.river, size: data.size }];

  const links = data.tributaries.map(({ name, size: value, side }) => {
    const source = side === 'l' ? name : data.river;
    const target = source === name ? data.river : name;
    return {
      source,
      target,
      value,
    };
  });

  const dimensions = {
    width: 600,
    height: 350,
    margin: {
      top: 70,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const sankeyGenerator = sankey()
    .nodeId(d => d.name)
    .nodeAlign(d3.sankeyCenter)
    .nodePadding(35)
    .size([dimensions.boundedWidth, dimensions.boundedHeight]);

  const sankeyData = sankeyGenerator({ nodes, links });
  const sankeyLinkGenerator = sankeyLinkHorizontal();

  const svg = article
    .append('svg')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)

  const mouthGroup = svg.append('g');
  const riverGroup = svg
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const linksGroup = riverGroup.append('g');
  const nodesGroup = riverGroup.append('g');

  linksGroup
    .selectAll('path')
    .data(sankeyData.links)
    .enter()
    .append('path')
    .attr(
      'class',
      d =>
        `tributary tributary-${
          d.source.name === data.river ? d.target.name : d.source.name
        }`
    )
    .attr('d', sankeyLinkGenerator)
    .attr('stroke', '#c6e4da')
    .attr('stroke-width', d => d.width)
    .attr('fill', 'none');

  const nodesGroups = nodesGroup
    .selectAll('g')
    .data(sankeyData.nodes)
    .enter()
    .append('g')
    .attr('transform', ({ x0, y0 }) => `translate(${x0} ${y0})`);

  nodesGroups
    .filter(d => d.name !== data.river)
    .attr('class', d => `tributary tributary-${d.name}`);

  nodesGroups
    .append('rect')
    .attr('width', ({ x0, x1 }) => x1 - x0)
    .attr('height', ({ y0, y1 }) => y1 - y0)
    .attr('fill', '#74a6b0');

  const textGroup = nodesGroups
    .append('g')
    .attr('fill', 'currentColor')
    .attr('text-anchor', ({ side }) => (side === 'l' ? 'start' : 'end'))
    .attr('transform', ({ side, x1, x0 }) =>
      side === 'l' ? '' : `translate(${x1 - x0} 0)`
    );

  textGroup
    .append('text')
    .text(({ name }) => name)
    .attr('y', -17)
    .attr('font-weight', 'bold')
    .attr('font-size', 15);

  textGroup
    .append('text')
    .html(
      ({ size }) =>
        `${formatThousand(size)} km<tspan dy="-3" font-size="8">2</tspan>`
    )
    .attr('y', -4)
    .attr('font-size', 11);

  textGroup
    .filter(d => d.name === data.river)
    .attr('text-anchor', 'middle')
    .attr('transform', ({ x1, x0 }) => `translate(${(x1 - x0) / 2} 0)`)
    .select('text')
    .attr('font-size', 18)


      const linkGenerator = d3.linkVertical();
      const { x0, x1, y0} = sankeyData.nodes.find(d => d.name === data.river);

      mouthGroup
        .append('path')
        .attr('d', `${linkGenerator({ source: [0, 0], target: [x0, y0 + dimensions.margin.top]})} h ${x1 - x0} ${linkGenerator({ source: [x1, y0 + dimensions.margin.top], target: [dimensions.boundedWidth, 0]})} L 0 0`)
        .attr('fill', '#c6e4da')

        mouthGroup
        .append('text')
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'middle')
        .attr('x', dimensions.boundedWidth / 2)
        .attr('y', 15)
        .text(data.mouth)
        .attr('font-weight', 'bold')
        .attr('font-size', 12);
}


function highlightLength() {
  const article = root.append('article');


  const lengthData = data.tributaries.map(({name, length}) => ({name, length})).sort((a, b) => a.length - b.length);
  const shortestStream = lengthData[0]
  const longestStream = lengthData[lengthData.length - 1]
  article.append('p').html(`In terms of length, ${shortestStream.name} reaches ${formatThousand(shortestStream.length)} km, while ${longestStream.name} reaches ${formatThousand(longestStream.length)} km.`);


  const dimensions = {
    width: 500,
    height: 500,
    margin: {
      top: 70,
      right: 10,
      bottom: 10,
      left: 10,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);


  const viz = article
    .append('svg')
    .style('max-width', '500px')
    .style('margin-right', 'auto')
    .style('margin-left', 'auto')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );


  const markerId = 'marker-path'
  viz.append('defs').append('marker').attr('id', markerId).attr('orient', 'auto').attr('refX', 5).attr('refY', 2.5).attr('markerWidth', 1).attr('viewBox', '0 0 5 5').append('rect').attr('width', 5).attr('height', 5).attr('fill', '#74a6b0')

  const dataGroup = viz
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.boundedWidth / 2} ${dimensions.boundedHeight / 2})`
    );

    const tributariesGroup = dataGroup.append('g')
    const riverGroup = dataGroup.append('g')

    const innerRadius = 50;
    const outerRadius = d3.min([dimensions.boundedWidth, dimensions.boundedHeight]) / 2;
    const angleScale = d3.scaleBand().domain([...lengthData].reverse().map(d => d.name)).range([0, 360])
    const radiusScale = d3.scaleLinear().domain([0, d3.max(data.tributaries, d => d.length)]).range([innerRadius, outerRadius])

    riverGroup
      .append('text')
        .attr('font-size', 18)
        .attr('fill', 'currentColor')
      .attr('text-anchor', 'middle')
      .attr('y', -4)
      .attr('font-weight', 'bold')
      .text(data.river)

      riverGroup
      .append('text')
        .attr('font-size', 13)
        .attr('fill', 'currentColor')
      .attr('text-anchor', 'middle')
      .attr('y', 14)
      .text(`${data.length} km`)

      riverGroup
      .append('circle')
      .attr('r', innerRadius)
      .attr('fill', 'none')
      .attr('stroke', '#74a6b0')
      .attr('stroke-width', 10)

    const tributariesGroups = tributariesGroup
      .selectAll('g')
      .data(data.tributaries)
      .enter()
      .append('g')

    tributariesGroups
      .append('path')
      .attr('transform', d => `rotate(${angleScale(d.name)})`)
      .attr('d', d => `M 0 -${innerRadius} V -${radiusScale(d.length)}`)
      .attr('fill', 'none')
      .attr('stroke', '#c6e4da')
      .attr('stroke-width', 10)
      .attr('marker-end', `url(#${markerId})`)


    const textGroup = tributariesGroups
      .append('g')
      .attr('transform', d => {
        const angle = angleScale(d.name);
        const radius = radiusScale(d.length) + 5
        return `rotate(${angleScale(d.name)}) translate(0 -${radius}) ${angle > 180 ? 'rotate(90)' : 'rotate(270)'}`;
      })
      .attr('dominant-baseline', 'middle')
      .attr('text-anchor', d => angleScale(d.name) > 180 ? 'end' : 'start')
      .attr('fill', 'currentColor')
      textGroup
        .append('text')
        .attr('font-size', 15)
        .attr('y', -8)
        .text(d => d.name)
        .attr('font-weight', 'bold')

        textGroup
        .append('text')
        .attr('font-size', 13)
        .attr('y', 8)
        .html(d => `${d.length} <tspan>km</tspan>`)


}
