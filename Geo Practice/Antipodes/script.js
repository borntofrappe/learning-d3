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

const y1 = pathGenerator.bounds(sphere)[1][1];

dimensions.boundedHeight = y1;
dimensions.height =
  dimensions.boundedHeight + (dimensions.margin.top + dimensions.margin.bottom);

const main = d3.select("body").append("main");

main.append("h1").text("Antipodes");
main.append("p").text("Diametrical opposites");

const input = main
  .append("input")
  .attr("type", "range")
  .attr("min", "0")
  .attr("max", "180")
  .attr("value", "0");

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

bounds.append("path").attr("d", pathGenerator(sphere)).attr("fill", "#75cdca");

bounds
  .append("path")
  .attr("d", pathGenerator(graticule))
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.25");

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

const timeout = setTimeout(() => {
  drawWorld();
}, 500);

async function drawWorld() {
  const world = await json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const land = feature(world, world.objects.land);

  bounds.select("text").transition().attr("opacity", "0").remove();

  const worldGroup = bounds.append("g");

  worldGroup
    .append("path")
    .attr(
      "d",
      geoPath(
        projection().fitSize(
          [dimensions.boundedWidth, dimensions.boundedHeight],
          sphere
        )
      )(land)
    )
    .attr("fill", "blue")
    .attr("opacity", "0.5");

  worldGroup
    .append("path")
    .attr(
      "d",
      geoPath(
        projection()
          .fitSize([dimensions.boundedWidth, dimensions.boundedHeight], sphere)
          .rotate([0, 180])
          .reflectX([-1])
      )(land)
    )
    .attr("fill", "red")
    .attr("opacity", "0.5");

  worldGroup
    .attr("opacity", "0")
    .transition()
    .duration(1000)
    .attr("opacity", "1");

  // input
  //   .transition()
  //   .duration(2000)
  //   .attr("value", "180")

  input.on("input", (e) => {
    const angle = parseInt(e.target.value, 10);

    worldGroup
      .select("path:nth-of-type(1)")
      .attr(
        "d",
        geoPath(
          projection()
            .fitSize(
              [dimensions.boundedWidth, dimensions.boundedHeight],
              sphere
            )
            .rotate([angle, 0])
        )(land)
      );

    worldGroup
      .select("path:nth-of-type(2)")
      .attr(
        "d",
        geoPath(
          projection()
            .fitSize(
              [dimensions.boundedWidth, dimensions.boundedHeight],
              sphere
            )
            .rotate([angle, 180])
            .reflectX([-1])
        )(land)
      );
  });
}
