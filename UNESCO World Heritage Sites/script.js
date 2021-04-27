async function drawMap() {
  const world = await d3.json(
    'https://unpkg.com/world-atlas@2.0.2/countries-110m.json'
  );

  const width = 800;
  const height = 800;
  const sphere = { type: 'Sphere' };
  const projection = d3.geoOrthographic().fitSize([width, height], sphere);
  const pathGenerator = d3.geoPath(projection);

  const root = d3.select('#root');

  const header = root.append('header')
  header.append('h1').html('<abbr title="United Nations Educational, Scientific and Cultural Organization">UNESCO</abbr> World Heritage Sites');

  const main = root.append('main');

  const wrapper = main
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  const bounds = wrapper.append('g');
  const worldGroup = bounds.append('g');

  worldGroup
    .append('path')
    .attr('d', pathGenerator(sphere))
    .attr('fill', 'hsl(220, 72%, 98%)')
    .attr('stroke', 'none');

  const graticuleJson = d3.geoGraticule10();
  const graticule = worldGroup
    .append('path')
    .attr('d', pathGenerator(graticuleJson))
    .attr('fill', 'none')
    .attr('stroke-width', '0.2')
    .attr('stroke', 'hsl(220, 72%, 68%)');
  
  const countries = topojson.feature(world, world.objects.countries);

  const countriesPaths = worldGroup
    .append('g')
    .selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('d', pathGenerator)
    .attr('fill', 'hsl(242, 84%, 42%)')
    .attr('stroke-width', '0.1')
    .attr('stroke', 'hsl(242, 80%, 4%)');

  main
    .append('input')
    .attr('type', 'range')
    .attr('min', 0)
    .attr('max', 360)
    .attr('value', 0)
    .on('input', function() {
      projection.rotate([parseInt(this.value), 0])
      pathGenerator.projection(projection)
      
      graticule
        .attr('d', pathGenerator(graticuleJson))
      
      countriesPaths
        .attr('d', pathGenerator)
    })

}

drawMap();
