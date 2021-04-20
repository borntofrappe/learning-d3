async function drawMap() {
  const world = await d3.json(
    'https://unpkg.com/world-atlas@2.0.2/countries-110m.json'
  );

  const data = await d3.csv('./duration_school_closures.csv', function({
    id,
    country,
    weeks,
  }) {
    return {
      id,
      country,
      weeks: +weeks,
    };
  });

  const dataMap = d3.group(data, d => d.id);

  const groups = [
    {
      label: 'No data',
      threshold: -Infinity,
    },
    {
      label: '0 weeks',
      threshold: 0,
    },
    {
      label: '1-10 weeks',
      threshold: 10,
    },
    {
      label: '11-20 weeks',
      threshold: 20,
    },
    {
      label: '21-30 weeks',
      threshold: 30,
    },
    {
      label: '31-40 weeks',
      threshold: 40,
    },
    {
      label: '41+ weeks',
      threshold: Infinity,
    },
  ];

  const colors = d3.schemePuBu[groups.length];

  const width = 800;
  const sphere = { type: 'Sphere' };
  const projection = d3.geoNaturalEarth1().fitWidth(width, sphere);
  const pathGenerator = d3.geoPath(projection);
  const height = pathGenerator.bounds(sphere)[1][1];

  const root = d3.select('main');

  const tooltip = root
    .append('div')
    .attr('id', 'tooltip')
    .style('opacity', 0);

  root.append('h1').text('Total duration of school closures');

  const wrapper = root
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  const bounds = wrapper.append('g');
  const worldGroup = bounds.append('g');
  const legendGroup = bounds.append('g');

  // worldGroup
  //   .append('path')
  //   .attr('d', pathGenerator(sphere))
  //   .attr('fill', 'hsl(220, 72%, 98%)')
  //   .attr('stroke', 'none');

  // const graticuleJson = d3.geoGraticule10();
  // worldGroup
  //   .append('path')
  //   .attr('d', pathGenerator(graticuleJson))
  //   .attr('fill', 'none')
  //   .attr('stroke-width', '0.2')
  //   .attr('stroke', 'hsl(220, 72%, 68%)');

  const countries = topojson.feature(world, world.objects.countries);

  worldGroup
    .append('g')
    .selectAll('path')
    .data(countries.features.filter(d => d.properties.name !== 'Antarctica'))
    .enter()
    .append('path')
    .attr('d', pathGenerator)
    .attr('fill', ({ id }) => {
      if (dataMap.has(id)) {
        const { weeks } = dataMap.get(id)[0];
        return colors[groups.findIndex(({ threshold }) => weeks <= threshold)];
      }
      return colors[0];
    })
    .attr('stroke-width', '0.1')
    .attr('stroke', 'hsl(214, 72%, 64%)')
    .on('mouseenter', function(e, d) {
      const { id } = d;
      if (dataMap.has(id)) {
        d3.select(this).style('filter', 'brightness(1.5)');
        const { weeks, country } = dataMap.get(id)[0];

        tooltip.append('h2').text(country);

        tooltip.append('p').text(`${weeks} weeks`);

        const [x, y] = pathGenerator.centroid(d);

        tooltip
          .style('transform', `translate(${x}px, ${y}px)`)
          .style('opacity', 1);
      }
    })
    .on('mouseleave', function() {
      d3.select(this).style('filter', 'brightness(1)');

      tooltip
        .style('opacity', 0)
        .selectAll('*')
        .remove();
    });

  legendGroup.attr('transform', `translate(20 ${height / 1.5})`);

  const legendGroups = legendGroup
    .selectAll('g')
    .data(groups)
    .enter()
    .append('g')
    .attr(
      'transform',
      (d, i) => `translate(0 ${(height / 2.5 / (groups.length + 1)) * i})`
    );

  legendGroups
    .append('circle')
    .attr('r', 4)
    .attr('fill', (d, i) => colors[i]);

  legendGroups
    .append('text')
    .attr('dominant-baseline', 'middle')
    .attr('x', 18)
    .attr('font-size', 12)
    .text(({ label }) => label);

  root
    .append('a')
    .attr('href', 'https://en.unesco.org/covid19/educationresponse')
    .text('Source');
}

drawMap();
