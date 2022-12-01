const div = d3.select("body").append("div");

// const header = div.append("header");
// header.append("h1").text("Beauteous Villages");
// header
//   .append("p")
//   .html(
//     '<a href="https://www.les-plus-beaux-villages-de-france.org">Les Plus Beaux Village de France</a> celebrates the most beautiful villages of France. <br/>In these communities the association promotes sites of historical importance, peculiar landscapes and local traditions.'
//   );

const size = 600;

const svg = div.append("svg").attr("viewBox", `0 0 ${size} ${size}`);

svg
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .append("text")
  .text("Loading data");

(async () => {
  const world = await d3.json(
    "https://unpkg.com/world-atlas@2.0.2/countries-50m.json"
  );

  const countries = topojson.feature(world, world.objects.countries);

  const [feature] = countries.features.filter(
    (d) => d.properties.name === "France"
  );

  const projection = d3
    .geoMercator()
    .fitSize([size, size], countries)
    .rotate([-2.8, -46.7])
    .scale(3200);

  const path = d3.geoPath().projection(projection);

  svg
    .select("g")
    .style("opacity", 1)
    .transition()
    .delay(500)
    .duration(500)
    .ease(d3.easeQuadOut)
    .style("opacity", 0)
    .remove()
    .on("end", () => {
      const groupData = svg.append("g");

      const groupGeoJSON = groupData.append("g");

      groupGeoJSON
        .append("path")
        .datum(feature)
        .attr("d", path)
        .attr("fill", "rgb(249, 161, 91)")
        .attr("stroke", "rgba(255, 255, 255, 0.8)")
        .attr("stroke-width", "1");
    });
})();
