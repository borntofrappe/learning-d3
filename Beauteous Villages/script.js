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
  const dataGeo = await d3.json("geo.json");
  const dataVillages = await d3.json("villages.json");

  const projection = d3
    .geoIdentity()
    .reflectY(true)
    .fitSize([size, size], dataGeo);

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
      const groupData = svg.append("g");
      const groupGeo = groupData.append("g");
      const groupVillages = groupData.append("g");

      groupData
        .attr("opacity", "0")
        .transition()
        .duration(500)
        .ease(d3.easeQuadIn)
        .attr("opacity", "1");

      groupGeo
        .selectAll("path")
        .data(dataGeo.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "hsl(0, 0%, 92%)")
        .attr("stroke", "hsl(0, 0%, 27%)")
        .attr("stroke-width", "0.75");

      const groupsVillages = groupVillages
        .selectAll("g")
        .data(dataVillages.values)
        .enter()
        .append("g")
        .attr(
          "transform",
          ({ longitude, latitude }) =>
            `translate(${projection([
              parseFloat(longitude),
              parseFloat(latitude),
            ])})`
        );

      groupsVillages
        .append("circle")
        .attr("r", "3")
        .attr("fill", "hsl(0, 0%, 27%)");
    });
})();
