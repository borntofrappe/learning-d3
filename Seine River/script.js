// https://en.wikipedia.org/wiki/Seine
const data = {
  name: 'English Channel',
  children: [
    {
      name: 'Seine',
      size: 79000,
      children: [
        {
          name: 'Yonne',
          size: 10887,
          side: 'l',
        },
        {
          name: 'Loing',
          size: 4150,
          side: 'l',
        },
        {
          name: 'Eure',
          size: 5935,
          side: 'l',
        },
        {
          name: 'Risle',
          size: 2310,
          side: 'l',
        },
        {
          name: 'Ource',
          size: 736,
          side: 'r',
        },
        {
          name: 'Aube',
          size: 3600,
          side: 'r',
        },
        {
          name: 'Marne',
          size: 12800,
          side: 'r',
        },
        {
          name: 'Oise',
          size: 17000,
          side: 'r',
        },
        {
          name: 'Epte',
          size: 1403,
          side: 'r',
        },
      ],
    },
  ],
};

const { select, sankey, sankeyLinkHorizontal, format } = d3;

const root = select('#root');
root.append('h1').text('Seine River');

drawSankey();

function drawSankey() {
  const river = data.children[0];
  const { name, size, children } = river;

  const nodes = [...children, { name, size }];

  const links = children.map(({ name, size: value, side }) => {
    const source = side === 'l' ? name : river.name;
    const target = source === name ? river.name : name;
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
      top: 40,
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
    .nodePadding(30)
    .size([dimensions.boundedWidth, dimensions.boundedHeight]);

  const sankeyData = sankeyGenerator({ nodes, links });
  const sankeyLinkGenerator = sankeyLinkHorizontal();

  const viz = root
    .append('svg')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height])
    .attr('width', dimensions.width)
    .attr('height', dimensions.height)
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const linksGroup = viz.append('g');
  const nodesGroup = viz.append('g');

  linksGroup
    .selectAll('path')
    .data(sankeyData.links)
    .enter()
    .append('path')
    .attr(
      'class',
      d =>
        `tributary tributary-${
          d.source.name === river.name ? d.target.name : d.source.name
        }`
    )
    .attr('d', sankeyLinkGenerator)
    .attr('opacity', 0.5)
    .attr('stroke', '#a5d5d1')
    .attr('stroke-width', d => d.width)
    .attr('fill', 'none');

  const nodesGroups = nodesGroup
    .selectAll('g')
    .data(sankeyData.nodes)
    .enter()
    .append('g')
    .attr('transform', ({ x0, y0 }) => `translate(${x0} ${y0})`);

  nodesGroups
    .filter(d => d.name !== river.name)
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
    .attr('y', -16)
    .attr('font-size', 14);

  textGroup
    .append('text')
    .html(
      ({ size }) =>
        `${format(',')(size)} km<tspan dy="-3" font-size="8">2</tspan>`
    )
    .attr('y', -4)
    .attr('font-size', 10);

  textGroup
    .filter(d => d.name === river.name)
    .attr('text-anchor', 'middle')
    .attr('transform', ({ x1, x0 }) => `translate(${(x1 - x0) / 2} 0)`);
}
