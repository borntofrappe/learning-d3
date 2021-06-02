// https://en.wikipedia.org/wiki/Seine
const dataSeine = {
  mouth: 'English channel',
  river: 'Seine',
  tributaries: [
    {
      name: 'Yonne',
      discharge: 95,
      side: 'l',
    },
    {
      name: 'Loing',
      discharge: 19,
      side: 'l',
    },
    {
      name: 'Eure',
      discharge: 26,
      side: 'l',
    },
    {
      name: 'Risle',
      discharge: 14,
      side: 'l',
    },
    {
      name: 'Ource',
      discharge: 8.6,
      side: 'r',
    },
    {
      name: 'Aube',
      discharge: 34,
      side: 'r',
    },
    {
      name: 'Marne',
      discharge: 100,
      side: 'r',
    },
    {
      name: 'Oise',
      discharge: 110,
      side: 'r',
    },
    {
      name: 'Epte',
      discharge: 9.8,
      side: 'r',
    },
  ],
};

// https://en.wikipedia.org/wiki/Po_(river)#Tributaries
const dataPo = {
  mouth: 'Adriatic sea',
  river: 'Po',
  tributaries: [
    {
      name: 'Pellice',
      length: 53,
    },
    {
      name: 'Varaita',
      length: 75,
    },
    {
      name: 'Maira',
      length: 120,
    },
    {
      name: 'Chisola',
      length: 39.4,
    },
    {
      name: 'Sangone',
      length: 46,
    },
    {
      name: 'Dora Riparia',
      length: 125,
    },
    {
      name: 'Stura di Lanzo',
      length: 68.8,
    },
    {
      name: 'Malone',
      length: 47.7,
    },
    {
      name: 'Orco',
      length: 89.568,
    },
    {
      name: 'Dora Baltea',
      length: 168.3,
    },
    {
      name: 'Stura del Monferrato',
      length: 36.7,
    },
    {
      name: 'Sesia',
      length: 139.6,
    },
    {
      name: 'Rotaldo',
      length: 40,
    },
    {
      name: 'Grana del Monferrato',
      length: 47,
    },
    {
      name: 'Tanaro',
      length: 276,
    },
    {
      name: 'Scrivia',
      length: 117.2,
    },
    {
      name: 'Agogna',
      length: 140,
    },
    {
      name: 'Curone',
      length: 59.482,
    },
    {
      name: 'Staffora',
      length: 58,
    },
    {
      name: 'Ticino ',
      length: 248,
    },
    {
      name: 'Versa ',
      length: 30,
    },
    {
      name: 'Tidone',
      length: 47,
    },
    {
      name: 'Lambro',
      length: 130,
    },
    {
      name: 'Trebbia',
      length: 118,
    },
    {
      name: 'Nure',
      length: 75,
    },
    {
      name: 'Adda',
      length: 313,
    },
    {
      name: 'Arda',
      length: 56,
    },
    {
      name: 'Taro',
      length: 126,
    },
    {
      name: 'Parma',
      length: 92,
    },
    {
      name: 'Enza',
      length: 93,
    },
    {
      name: 'Crostolo',
      length: 55,
    },
    {
      name: 'Oglio',
      length: 280,
    },
    {
      name: 'Mincio',
      length: 194,
    },
    {
      name: 'Secchia',
      length: 172,
    },
    {
      name: 'Panaro',
      length: 148,
    },
  ],
};

const {
  select,
  sankey,
  sankeyLinkHorizontal,
  scaleLinear,
  scaleBand,
  max,
} = d3;

const root = select('#root');
root.append('h1').text('Tributaries');

drawSeineSankey();
drawPoRadial();

function drawSeineSankey() {
  const target = dataSeine.river;
  const nodes = [...dataSeine.tributaries, { name: target }];

  const links = dataSeine.tributaries.map(
    ({ name: source, discharge: value }) => ({
      source,
      target,
      value,
    })
  );

  const width = 600;
  const height = 400;
  const margin = {
    top: 20,
    right: 60,
    bottom: 20,
    left: 20,
  };

  const sankeyGenerator = sankey()
    .nodeId(d => d.name)
    .nodePadding(25)
    .size([width, height]);
  const sankeyData = sankeyGenerator({ nodes, links });
  const sankeyLinkGenerator = sankeyLinkHorizontal();

  const viz = root
    .append('svg')
    .attr('viewBox', [
      -margin.left,
      -margin.top,
      width + (margin.left + margin.right),
      height + (margin.top + margin.bottom),
    ])
    .attr('width', width)
    .attr('height', height);

  const linksGroup = viz.append('g');
  const nodesGroup = viz.append('g');

  const linksPaths = linksGroup
    .selectAll('path')
    .data(sankeyData.links)
    .enter()
    .append('path')
    .attr('d', sankeyLinkGenerator)
    .attr('opacity', 0.5)
    .attr('stroke', '#60c0b4')
    .attr('stroke-width', d => d.width)
    .attr('fill', 'none');

  linksPaths.on('mouseenter', (e, d) => {
    linksPaths.attr('opacity', 0.2);
    select(e.currentTarget).attr('opacity', 1);
  });

  viz.on('mouseleave', () => {
    linksPaths.attr('opacity', 1);
  });
  const nodesGroups = nodesGroup
    .selectAll('g')
    .data(sankeyData.nodes)
    .enter()
    .append('g')
    .attr('transform', ({ x0, y0 }) => `translate(${x0} ${y0})`);

  nodesGroups
    .append('rect')
    .attr('width', ({ x0, x1 }) => x1 - x0)
    .attr('height', ({ y0, y1 }) => y1 - y0)
    .attr('fill', '#2fa397');

  nodesGroups
    .append('text')
    .attr('fill', 'currentColor')
    .text(({ name }) => name)
    .attr('text-anchor', 'start')
    .attr('y', -3);
}

function drawPoRadial() {
  const size = 500;
  const margin = 50;

  const angleScale = scaleBand()
    .domain(dataPo.tributaries.map(({ name }) => name))
    .range([0, 360]);
  const radiusScale = scaleLinear()
    .domain([0, max(dataPo.tributaries, d => d.length)])
    .range([0, size / 2]);

  const viz = root
    .append('svg')
    .attr('viewBox', [-margin, -margin, size + margin * 2, size + margin * 2])
    .attr('width', size)
    .attr('height', size);

  const dataGroup = viz
    .append('g')
    .attr('transform', `translate(${size / 2} ${size / 2})`);

  const dataGroups = dataGroup
    .selectAll('g')
    .data(dataPo.tributaries)
    .enter()
    .append('g');

  dataGroups
    .append('path')
    .attr('opacity', 0.5)
    .attr('fill', 'none')
    .attr('stroke', '#60c0b4')
    .attr('stroke-width', 2)
    .attr('transform', d => `rotate(${angleScale(d.name)})`)
    .attr('d', d => `M 0 0 v -${radiusScale(d.length)}`);

  const endGroups = dataGroups
    .append('g')
    .attr(
      'transform',
      d =>
        `rotate(${angleScale(d.name)}) translate(0 -${radiusScale(d.length) +
          5})`
    );

  endGroups
    .append('text')
    .attr('fill', 'currentColor')
    .attr('dominant-baseline', 'middle')
    .attr('transform', 'rotate(-90)')
    .attr('font-size', 14)

    .text(d => d.name);
}
