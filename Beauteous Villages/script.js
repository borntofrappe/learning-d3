const div = d3.select("body").append("div");

const header = div.append("header");
header.append("h1").text("Beauteous Villages");
header
  .append("p")
  .html("Let us focus on small, beautiful villages in continental France");

const size = 600;

const svg = div
  .append("svg")
  .attr("viewBox", `0 0 ${size} ${size}`)
  .style("max-width", "40rem");

svg
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .append("text")
  .text("Loading Geographical Data");

// REQUIRE A SERVER TO BYPASS CORS
(async () => {
  const json = await d3.json("france.json");

  const projection = d3
    .geoIdentity()
    .reflectY(true)
    .fitSize([size, size], json);

  const path = d3.geoPath().projection(projection);

  svg
    .select("g")
    .attr("opacity", "1")
    .transition()
    .delay(500)
    .duration(500)
    .ease(d3.easeQuadOut)
    .attr("opacity", "0")
    .remove()
    .on("end", () => {
      const group = svg.append("g");

      group
        .attr("opacity", "0")
        .transition()
        .duration(500)
        .ease(d3.easeQuadIn)
        .attr("opacity", "1");

      group
        .selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "hsl(0, 0%, 37%)")
        .attr("stroke", "hsl(0, 0%, 97%)");
    });
})();
