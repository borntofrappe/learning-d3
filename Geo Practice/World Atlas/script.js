const { select, json, geoPath, geoAzimuthalEqualArea } = d3;
const { feature } = topojson;

const dimensions = {
  width: 600,
  margin: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);

const sphere = { type: "Sphere" };

const projection = geoAzimuthalEqualArea().fitWidth(
  dimensions.boundedWidth,
  sphere
);

const pathGenerator = geoPath(projection);

const y1 = pathGenerator.bounds(sphere)[1][1];

dimensions.boundedHeight = y1;
dimensions.height =
  dimensions.boundedHeight + (dimensions.margin.top + dimensions.margin.bottom);

const wrapper = select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const defs = wrapper
  .append("defs")
  .append("path")
  .attr("id", "p")
  .attr(
    "d",
    `M 0 ${dimensions.boundedHeight / 2} a ${dimensions.boundedWidth / 2} ${
      dimensions.boundedHeight / 2
    }  0 0 1 ${dimensions.boundedWidth} 0`
  );

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

bounds.append("path").attr("d", pathGenerator(sphere)).attr("fill", "#75cdca");

bounds
  .append("text")
  .text("Loading data")
  .attr("fill", "currentColor")
  .attr("font-size", "32")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .attr("x", dimensions.boundedWidth / 2)
  .attr("y", dimensions.boundedHeight / 2)
  .attr("font-weight", "bold");

const timeout = setTimeout(() => {
  drawWorld();
}, 750);

async function drawWorld() {
  const world = await json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const land = feature(world, world.objects.land);

  bounds.select("text").transition().attr("opacity", "0").remove();

  const worldGroup = bounds.append("g");

  worldGroup
    .append("text")
    .attr("dy", "-10")
    .append("textPath")
    .attr("href", "#p")
    .text("It's a wonderful world atlas")
    .attr("startOffset", "50%")
    .attr("fill", "currentColor")
    .attr("font-size", "38")
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold");

  worldGroup
    .append("path")
    .attr("d", pathGenerator(land))
    .attr("fill", "#41b35b");

  worldGroup
    .attr("opacity", "0")
    .transition()
    .duration(1000)
    .attr("opacity", "1");
}
