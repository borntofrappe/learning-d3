async function drawMap() {
  const world = await d3.json(
    'https://unpkg.com/world-atlas@2.0.2/countries-110m.json'
  );

  const width = 800;
  const sphere = { type: 'Sphere' };
  const projection = d3.geoNaturalEarth1().fitWidth(width, sphere);
  const pathGenerator = d3.geoPath(projection);
  const height = pathGenerator.bounds(sphere)[1][1];

  const wrapper = d3
    .select('main')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  const bounds = wrapper.append('g');
  // bounds
  //   .append('path')
  //   .attr('d', pathGenerator(sphere))
  //   .attr('fill', 'hsl(220, 72%, 98%)')
  //   .attr('stroke', 'none');

  // const graticuleJson = d3.geoGraticule10();
  // bounds
  //   .append('path')
  //   .attr('d', pathGenerator(graticuleJson))
  //   .attr('fill', 'none')
  //   .attr('stroke-width', '0.2')
  //   .attr('stroke', 'hsl(220, 72%, 68%)');

  const countries = topojson.feature(world, world.objects.countries);
  bounds
    .append('g')
    .selectAll('path')
    .data(countries.features.filter(d => d.properties.name !== 'Antarctica'))
    .enter()
    .append('path')
    .attr('d', pathGenerator)
    .attr('fill', 'hsl(206, 68%, 88%)')
    .attr('stroke-width', '0.1')
    .attr('stroke', 'hsl(214, 72%, 64%)')
    .on('mouseenter', function() {
      d3.select(this).attr('fill', 'hsl(40, 84%, 68%)');
    })
    .on('mouseleave', function() {
      d3.select(this).attr('fill', 'hsl(206, 68%, 88%)');
    });
}

drawMap();
