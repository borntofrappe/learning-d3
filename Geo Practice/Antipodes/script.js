const { json, geoPath, geoOrthographic: projection, geoGraticule10 } = d3;
const { feature } = topojson;

const dimensions = {
  width: 600,
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);

const sphere = { type: "Sphere" };
const graticule = geoGraticule10();

const pathGenerator = geoPath(
  projection().fitWidth(dimensions.boundedWidth, sphere)
);

const getPathGenerator = (rotate = [0, 0], reflectX = false) =>
  reflectX
    ? geoPath(
        projection()
          .fitWidth(dimensions.boundedWidth, sphere)
          .rotate(rotate)
          .reflectX([-1])
      )
    : geoPath(
        projection().fitWidth(dimensions.boundedWidth, sphere).rotate(rotate)
      );

const y1 = pathGenerator.bounds(sphere)[1][1];

dimensions.boundedHeight = y1;
dimensions.height =
  dimensions.boundedHeight + (dimensions.margin.top + dimensions.margin.bottom);

const main = d3.select("body").append("main");

main.append("h1").text("Antipodes");

main
  .append("p")
  .text(
    "There may not be antipathies on the opposite side of the Earth, but there is certainly a word for the concept."
  );

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const defs = wrapper.append("defs");

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

bounds
  .append("path")
  .attr("d", getPathGenerator()(sphere))
  .attr("fill", "hsl(0, 0%, 97%)");

bounds
  .append("path")
  .attr("d", getPathGenerator()(graticule))
  .attr("fill", "none")
  .attr("stroke", "hsl(0, 0%, 84%)");

bounds
  .append("text")
  .text("Loading data")
  .attr("fill", "currentColor")
  .attr("font-size", "28")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .attr("x", dimensions.boundedWidth / 2)
  .attr("y", dimensions.boundedHeight / 2)
  .attr("font-weight", "bold");

// main
//   .append("p")
//   .append("a")
//   .attr("href", "https://en.wikipedia.org/wiki/Antipodes")
//   .text("Source");

const timeout = setTimeout(() => {
  drawWorld();
}, 500);

async function drawWorld() {
  const world = await json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const land = feature(world, world.objects.land);

  defs
    .append("clipPath")
    .attr("id", "clip")
    .append("path")
    .attr("d", getPathGenerator()(land));

  bounds.select("text").transition().attr("opacity", "0").remove();

  const worldGroup = bounds.append("g");

  worldGroup
    .append("path")
    .attr("d", getPathGenerator()(land))
    .attr("fill", "hsl(217, 100%, 80%)");

  worldGroup
    .append("path")
    .attr("d", getPathGenerator([0, 180], true)(land))
    .attr("fill", "hsl(51, 73%, 52%)");

  worldGroup
    .append("path")
    .attr("clip-path", "url(#clip)")
    .attr("d", getPathGenerator([0, 180], true)(land))
    .attr("fill", "hsl(23, 74%, 50%)");

  worldGroup
    .attr("opacity", "0")
    .transition()
    .duration(1000)
    .attr("opacity", "1");

  const input = main
    .append("input")
    .attr("type", "range")
    .attr("min", "0")
    .attr("max", "360")
    .attr("value", "0");

  // input.transition().delay(200).duration(2000).attr("value", "360");

  input.on("input", (e) => {
    // input.interrupt();

    const angle = parseInt(e.target.value, 10);

    defs.select("path").attr("d", getPathGenerator([angle, 0])(land));

    bounds
      .select("path:nth-of-type(2)")
      .attr("d", getPathGenerator([angle, 0])(graticule));

    worldGroup
      .select("path:nth-of-type(1)")
      .attr("d", getPathGenerator([angle, 0])(land));

    worldGroup
      .select("path:nth-of-type(2)")
      .attr("d", getPathGenerator([angle, 180], true)(land));

    worldGroup
      .select("path:nth-of-type(3)")
      .attr("d", getPathGenerator([angle, 180], true)(land));
  });
}
