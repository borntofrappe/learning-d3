const div = d3.select("body").append("div");

const header = div.append("header");
header.append("h1").text("Beauteous Villages");
header
  .append("p")
  .html(
    '<a href="https://www.les-plus-beaux-villages-de-france.org">Les Plus Beaux Village de France</a> celebrates the most beautiful villages of France. In these communities of less than 2000 inhabitants the association promotes sites of historical importance as well as peculiar landscapes and local traditions.'
  );

header
  .append("p")
  .text("Let's try to highlight the certification through continental France.");

const size = 600;

const svg = div.append("svg").attr("viewBox", `0 0 ${size} ${size}`);

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

      const groupIntro = groupData.append("g");
      const groupGeo = groupData.append("g");
      const groupVillages = groupData.append("g");

      const enterTransition = d3.transition().duration(500).ease(d3.easeQuadIn);
      const counterDuration = 2500;
      const counterTransition = d3
        .transition(enterTransition)
        .transition()
        .duration(counterDuration);

      groupData
        .attr("opacity", "0")
        .transition(enterTransition)
        .attr("opacity", "1");

      const textIntro = groupIntro
        .append("text")
        .attr("font-size", "18")
        .attr("transform", "translate(0 24)");
      textIntro.append("tspan").text("As of October 2022 there are");

      const counter = textIntro
        .append("tspan")
        .attr("dx", "5")
        .attr("font-size", "24")
        .attr("font-weight", "bold");

      counter
        .text(0)
        .transition(counterTransition)
        .textTween(() => (t) => Math.floor(t * dataVillages.values.length));

      textIntro
        .append("tspan")
        .attr("x", "0")
        .attr("font-style", "italic")
        .attr("y", "22")
        .text("beautiful villages");

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
        .attr("fill", "hsl(0, 0%, 27%)")
        .attr("r", "0")
        .transition(enterTransition)
        .transition()
        .delay((_, i, { length }) => (counterDuration / length) * i)
        .ease(d3.easeBounceOut)
        .attr("r", "3");
    });
})();
