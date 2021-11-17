const { select, json, geoPath, geoEquirectangular } = d3;
const { feature } = topojson;

const itinerary = [
  {
    location: "London",
    coords: [0, 51.91616766467065],
  },
  {
    location: "Suez",
    coords: [32.335329341317376, 30.359281437125755],
  },
  {
    location: "Bombay",
    coords: [72.93413173652695, 18.50299401197605],
  },
  {
    location: "Calcutta",
    coords: [89.82035928143715, 21.736526946107784],
  },
  {
    location: "Hong Kong",
    coords: [116.76646706586826, 23.89221556886228],
  },
  {
    location: "Yokohama",
    coords: [140.83832335329342, 35.74850299401197],
  },
  {
    location: "San Francisco",
    coords: [-122.51497005988024, 37.90419161676647],
  },
  {
    location: "New York",
    coords: [-72.21556886227545, 41.49700598802394],
  },
];

const points = [
  [
    [0, 51.91616766467065],
    [1.7964071856287431, 49.76047904191617],
    [5.3892215568862, 45.449101796407184],
    [8.26347305389224, 44.73053892215569],
    [10.419161676646691, 45.08982035928144],
    [12.215568862275463, 43.293413173652695],
    [16.16766467065866, 41.1377245508982],
    [17.604790419161663, 41.49700598802394],
    [19.041916167664642, 40.05988023952096],
    [19.76047904191617, 35.74850299401197],
    [22.99401197604792, 33.952095808383234],
    [29.46107784431139, 33.23353293413174],
    [32.335329341317376, 30.359281437125755],
    [43.1137724550898, 12.75449101796407],
    [45.62874251497008, 11.67664670658683],
    [46.347305389221546, 13.473053892215571],
    [48.14371257485029, 12.395209580838317],
    [72.93413173652695, 18.50299401197605],
    [76.16766467065868, 21.736526946107784],
    [79.76047904191616, 24.25149700598803],
    [81.55688622754492, 26.40718562874251],
    [85.14970059880241, 27.12574850299401],
    [88.02395209580837, 24.970059880239518],
    [89.82035928143715, 21.736526946107784],
    [95.56886227544912, 7.365269461077854],
    [103.83233532934132, 0.1796407185628827],
    [104.5508982035928, 1.2574850299401228],
    [107.42514970059881, 2.694610778443114],
    [111.0179640718563, 7.724550898203592],
    [113.8922155688623, 14.19161676646706],
    [116.04790419161672, 19.94011976047904],
    [116.76646706586826, 23.89221556886228],
    [119.64071856287427, 24.610778443113766],
    [122.15568862275447, 27.12574850299401],
    [123.95209580838322, 29.64071856287426],
    [122.15568862275447, 30.7185628742515],
    [131.49700598802397, 31.437125748502996],
    [137.60479041916167, 32.51497005988024],
    [140.83832335329342, 35.74850299401197],
    [161.31736526946102, 33.59281437125748],
    [179.78143712574848, 33.59281437125748],
  ],
  [
    [-179.76646706586823, 25.68862275449102],
    [-145.14970059880238, 32.15568862275449],
    [-122.51497005988024, 37.90419161676647],
    [-116.04790419161678, 40.05988023952096],
    [-108.50299401197604, 40.778443113772454],
    [-102.03592814371257, 39.70059880239521],
    [-98.80239520958085, 39.70059880239521],
    [-88.74251497005989, 41.49700598802394],
    [-87.3053892215569, 39.70059880239521],
    [-75.44910179640718, 40.41916167664671],
    [-72.21556886227545, 41.49700598802394],
    [-65.74850299401197, 39.34131736526946],
    [-51.37724550898204, 41.49700598802394],
    [-30.89820359281437, 44.73053892215569],
    [-14.730538922155707, 49.401197604790426],
    [-7.544910179640709, 51.19760479041916],
    [-6.467065868263469, 54.07185628742515],
    [-2.5149700598802456, 54.07185628742515],
    [0, 51.91616766467065],
  ],
];

const dimensions = {
  width: window.innerWidth,
};

const sphere = { type: "Sphere" };

const projection = geoEquirectangular().fitWidth(dimensions.width, sphere);

const pathGenerator = geoPath(projection);

const y1 = pathGenerator.bounds(sphere)[1][1];

dimensions.height = y1;

const svg = select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);

svg
  .append("path")
  .attr("d", pathGenerator(sphere))
  .attr("fill", "hsl(0, 0%, 97%)");

svg
  .append("text")
  .text("Loading data")
  .attr("fill", "currentColor")
  .attr("font-size", "32")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .attr("x", dimensions.width / 2)
  .attr("y", dimensions.height / 2)
  .attr("font-weight", "bold");

const timeout = setTimeout(() => {
  drawWorld();
}, 750);

async function drawWorld() {
  const world = await json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const countries = feature(world, world.objects.countries);
  const paths = points.map((sequence) =>
    sequence.reduce((acc, curr) => `${acc} ${projection(curr)}`, `M `)
  );

  svg.select("text").transition().attr("opacity", "0").remove();

  const worldGroup = svg.append("g");

  worldGroup
    .append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
    .attr("d", pathGenerator)
    .attr("fill", "hsl(0, 0%, 80%)")
    .attr("stroke", "hsl(0, 0%, 97%)")
    .attr("stroke-width", "0.5");

  worldGroup
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "hsl(0, 0%, 64%)")
    .attr("stroke-width", "2.5")
    .selectAll("path")
    .data(paths)
    .join("path")
    .attr("d", (d) => d);

  const itineraryGroups = worldGroup
    .append("g")
    .selectAll("g")
    .data(itinerary)
    .join("g")
    .attr("transform", ({ coords }) => `translate(${projection(coords)})`);

  itineraryGroups
    .append("circle")
    .attr("fill", "hsl(0, 0%, 38%)")
    .attr("r", "5");

  itineraryGroups
    .append("text")
    .attr("fill", "hsl(0, 0%, 24%)")
    .attr("font-size", "18")
    .attr("font-weight", "bold")
    .attr("text-anchor", "middle")
    .attr("y", "18")
    .text(({ location }) => location);

  worldGroup
    .attr("opacity", "0")
    .transition()
    .duration(1000)
    .attr("opacity", "1");
}
