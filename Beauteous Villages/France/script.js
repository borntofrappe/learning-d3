const div = d3.select("body").append("div");

const header = div.append("header");
header.append("h1").text("Beauteous Villages");
header
  .append("p")
  .html(
    '<a href="https://www.les-plus-beaux-villages-de-france.org">Les Plus Beaux Village de France</a> celebrates the most beautiful villages of France. <br/>In these communities the association promotes sites of historical importance, peculiar landscapes and local traditions.'
  );

const size = 600;

const svg = div.append("svg").attr("viewBox", `0 0 ${size} ${size}`);

svg
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .append("text")
  .text("Loading data");

// REQUIRE A SERVER TO BYPASS CORS
(async () => {
  const geoJSON = await d3.json("france.json");
  const { values: villages } = await d3.json("villages.json");

  const projection = d3
    .geoIdentity()
    .reflectY(true)
    .fitSize([size, size], geoJSON);

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

      const groupIntro = groupData.append("g");
      const groupGeoJSON = groupData.append("g");
      const groupVillages = groupData.append("g");
      const groupInteraction = groupData.append("g");

      const textIntro = groupIntro
        .append("text")
        .attr("font-size", "18")
        .attr("transform", "translate(0 24)");

      textIntro.append("tspan").text("As of October 2022 there are");

      const numberIntro = textIntro
        .append("tspan")
        .attr("dx", "5")
        .attr("font-size", "24")
        .attr("font-weight", "bold")
        .text(villages.length);

      textIntro
        .append("tspan")
        .attr("x", "0")
        .attr("font-style", "italic")
        .attr("y", "26")
        .text("beautiful villages");

      groupGeoJSON
        .attr("fill", "rgb(249, 161, 91)")
        .attr("stroke", "rgba(255, 255, 255, 0.8)")
        .attr("stroke-width", "1")
        .selectAll("path")
        .data(geoJSON.features)
        .enter()
        .append("path")
        .attr("d", path);

      groupVillages
        .selectAll("circle")
        .data(villages)
        .enter()
        .append("circle")
        .attr(
          "transform",
          ({ longitude, latitude }) =>
            `translate(${projection([longitude, latitude])})`
        )
        .attr("fill", "hsl(0, 0%, 27%)")
        .attr("r", "3");

      const hX = 5;
      const hY = size - 24;

      const { locality, longitude, latitude } =
        villages[Math.floor(Math.random() * villages.length)];
      const [x, y] = projection([longitude, latitude]);

      groupInteraction
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "hsl(0, 0%, 27%)")
        .attr("stroke-width", "1")
        .attr("d", `M ${hX} ${hY} v -15 L ${x} ${y}`);

      groupInteraction
        .append("circle")
        .attr("fill", "hsl(0, 0%, 27%)")
        .attr("stroke", "hsl(0, 0%, 97%)")
        .attr("stroke-width", "1")
        .attr("r", "6")
        .attr("transform", `translate(${x} ${y})`);

      const groupHighlight = groupInteraction
        .append("g")
        .attr("transform", `translate(${hX} ${hY})`);

      groupHighlight.append("circle").attr("r", "5");

      const textInteraction = groupHighlight
        .append("text")
        .attr("font-size", "18")
        .attr("x", "10")
        .attr("y", "5");

      textInteraction.append("tspan").text("Villages such as ");

      textInteraction
        .append("tspan")
        .attr("dx", "2")
        .attr("font-size", "24")
        .attr("font-weight", "bold")
        .text(locality);

      const delaunay = d3.Delaunay.from(
        villages.map(({ longitude, latitude }) =>
          projection([longitude, latitude])
        )
      );

      const voronoi = delaunay.voronoi([0, 0, size, size]);

      const cellsInteraction = groupInteraction
        .append("g")
        .selectAll("path")
        .data(villages)
        .enter()
        .append("path")
        .attr("opacity", 0)
        .attr("d", (d, i) => voronoi.renderCell(i));

      const transitionData = d3.transition().duration(500).ease(d3.easeQuadIn);
      const durationTransitionVillages = 2500;

      const transitionVillages = d3
        .transition(transitionData)
        .transition()
        .duration(durationTransitionVillages);

      const transitionHighlight = d3
        .transition(transitionVillages)
        .transition()
        .duration(500)
        .delay(1000);

      groupData
        .style("opacity", 0)
        .transition(transitionData)
        .style("opacity", 1);

      numberIntro
        .text(0)
        .transition(transitionVillages)
        .textTween(() => (t) => Math.floor(t * villages.length));

      groupVillages
        .selectAll("circle")
        .attr("r", 0)
        .transition(transitionData)
        .transition()
        .delay((_, i, { length }) => (durationTransitionVillages / length) * i)
        .ease(d3.easeBounceOut)
        .attr("r", 3);

      groupInteraction
        .select("path")
        .attr("pathLength", 1)
        .attr("stroke-dasharray", 1)
        .attr("stroke-dashoffset", 1);

      groupInteraction.select("circle").attr("r", 0);

      groupInteraction
        .style("opacity", 0)
        .style("visibility", "hidden")
        .transition(transitionHighlight)
        .style("opacity", 1)
        .style("visibility", "visible")
        .on("end", () => {
          const transition = d3.transition().duration(750).delay(500);

          groupInteraction
            .select("path")
            .attr("stroke-dashoffset", 1)
            .transition(transition)
            .attr("stroke-dashoffset", 0);

          groupInteraction
            .select("circle")
            .attr("r", 0)
            .transition(transition)
            .transition()
            .attr("r", 6);

          cellsInteraction.on("pointerenter", function (e, d) {
            const i = cellsInteraction.nodes().indexOf(this);

            const { locality, longitude, latitude } = villages[i];
            const [x, y] = projection([longitude, latitude]);

            groupInteraction
              .select("path")
              .attr("d", `M ${hX} ${hY} v -15 L ${x} ${y}`);

            groupInteraction
              .select("circle")
              .attr("transform", `translate(${x} ${y})`);

            textInteraction.select("tspan:last-of-type").text(locality);
          });
        });
    });
})();
