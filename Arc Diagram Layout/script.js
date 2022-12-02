const nodes = [
  { node: "Belgium", id: 0 },
  { node: "Bulgaria", id: 1 },
  { node: "Czechia", id: 2 },
  { node: "Denmark", id: 3 },
  { node: "Germany", id: 4 },
  { node: "Estonia", id: 5 },
  { node: "Ireland", id: 6 },
  { node: "Greece", id: 7 },
  { node: "Spain", id: 8 },
  { node: "France", id: 9 },
  { node: "Croatia", id: 10 },
  { node: "Italy", id: 11 },
  { node: "Cyprus", id: 12 },
  { node: "Latvia", id: 13 },
  { node: "Lithuania", id: 14 },
  { node: "Luxembourg", id: 15 },
  { node: "Hungary", id: 16 },
  { node: "Malta", id: 17 },
  { node: "Netherlands", id: 18 },
  { node: "Austria", id: 19 },
  { node: "Poland", id: 20 },
  { node: "Portugal", id: 21 },
  { node: "Romania", id: 22 },
  { node: "Slovenia", id: 23 },
  { node: "Slovakia", id: 24 },
  { node: "Finland", id: 25 },
  { node: "Sweden", id: 26 },
];

const edges = [
  { source: 0, target: 9, weight: 5029349 },
  { source: 0, target: 15, weight: 74756 },
  { source: 0, target: 18, weight: 7805621 },
  { source: 1, target: 7, weight: 15000 },
  { source: 1, target: 22, weight: 2946803 },
  { source: 2, target: 4, weight: 9078000 },
  { source: 2, target: 19, weight: 378420 },
  { source: 2, target: 20, weight: 3797046 },
  { source: 2, target: 24, weight: 262000 },
  { source: 3, target: 18, weight: 1053439 },
  { source: 3, target: 26, weight: 5431000 },
  { source: 4, target: 0, weight: 123500 },
  { source: 4, target: 2, weight: 3172336 },
  { source: 4, target: 3, weight: 6486562 },
  { source: 4, target: 9, weight: 12959450 },
  { source: 4, target: 15, weight: 1003856 },
  { source: 4, target: 18, weight: 8677063 },
  { source: 4, target: 19, weight: 5310060 },
  { source: 4, target: 20, weight: 12068 },
  { source: 4, target: 26, weight: 2550000 },
  { source: 5, target: 13, weight: 167022 },
  { source: 5, target: 25, weight: 6611000 },
  { source: 7, target: 1, weight: 1875568 },
  { source: 7, target: 11, weight: 2632593 },
  { source: 8, target: 9, weight: 11410282 },
  { source: 8, target: 21, weight: 6096853 },
  { source: 9, target: 0, weight: 4257300 },
  { source: 9, target: 4, weight: 2762000 },
  { source: 9, target: 8, weight: 6192458 },
  { source: 9, target: 11, weight: 1164020 },
  { source: 10, target: 16, weight: 3204000 },
  { source: 10, target: 23, weight: 5002470 },
  { source: 11, target: 7, weight: 317000 },
  { source: 11, target: 9, weight: 13789133 },
  { source: 11, target: 17, weight: 4233 },
  { source: 11, target: 19, weight: 1165707 },
  { source: 11, target: 23, weight: 3909180 },
  { source: 13, target: 5, weight: 3396000 },
  { source: 13, target: 14, weight: 1382600 },
  { source: 14, target: 13, weight: 2356389 },
  { source: 14, target: 20, weight: 380729 },
  { source: 14, target: 26, weight: 4188000 },
  { source: 15, target: 0, weight: 386700 },
  { source: 15, target: 9, weight: 1147553 },
  { source: 16, target: 10, weight: 376300 },
  { source: 16, target: 19, weight: 6385979 },
  { source: 16, target: 22, weight: 1467829 },
  { source: 16, target: 24, weight: 9251000 },
  { source: 17, target: 11, weight: 419841 },
  { source: 18, target: 0, weight: 3782000 },
  { source: 18, target: 3, weight: 2142501 },
  { source: 18, target: 4, weight: 8957000 },
  { source: 19, target: 2, weight: 8687133 },
  { source: 19, target: 4, weight: 14433000 },
  { source: 19, target: 11, weight: 9776 },
  { source: 19, target: 16, weight: 102000 },
  { source: 19, target: 23, weight: 211406 },
  { source: 20, target: 2, weight: 1677647 },
  { source: 20, target: 4, weight: 11235000 },
  { source: 20, target: 14, weight: 2159000 },
  { source: 20, target: 24, weight: 93000 },
  { source: 20, target: 26, weight: 3819000 },
  { source: 21, target: 8, weight: 7553565 },
  { source: 22, target: 1, weight: 816091 },
  { source: 22, target: 16, weight: 2185000 },
  { source: 23, target: 10, weight: 1919400 },
  { source: 23, target: 11, weight: 423107 },
  { source: 23, target: 19, weight: 4777438 },
  { source: 24, target: 2, weight: 9983795 },
  { source: 24, target: 16, weight: 57000 },
  { source: 24, target: 20, weight: 3154658 },
  { source: 25, target: 5, weight: 327000 },
  { source: 25, target: 26, weight: 18370000 },
  { source: 26, target: 3, weight: 2254688 },
  { source: 26, target: 14, weight: 96800 },
  { source: 26, target: 20, weight: 12574 },
  { source: 26, target: 25, weight: 1000 },
];

const width = 800;
const height = 800;
const margin = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};

const inset = 70;
const outset = 5;
const format = (d) => `${d3.format(",")(d)} GW`;

const scaleOffset = d3
  .scaleBand()
  .domain(nodes.map((d) => d.id))
  .range([0, height]);

const maxDistanceId = d3.max(edges, (d) => Math.abs(d.source - d.target));

nodes.forEach((d) => {
  const offset = scaleOffset(d.id) + scaleOffset.bandwidth() / 2;
  d.offset = offset;
});

edges.forEach((d) => {
  const { source, target } = d;

  const offsetStart = scaleOffset(source) + scaleOffset.bandwidth() / 2;
  const offsetEnd = scaleOffset(target) + scaleOffset.bandwidth() / 2;
  d.offsetStart = offsetStart;
  d.offsetEnd = offsetEnd;
});

const scaleDistance = d3
  .scaleBand()
  .domain(d3.range(maxDistanceId + 1))
  .range([0, width / 2 - outset - inset]);

const root = d3.select("body").append("div").attr("id", "root");

root.append("h1").text("How does electricity flow in the EU?");
root
  .append("p")
  .html(
    "Member states of the European Union export electricity between each other, creating an interesting network of connections."
  );

const svg = root
  .append("svg")
  .style("display", "block")
  .style("max-width", "40rem")
  .style("margin-inline", "auto")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const defs = svg.append("defs");

const marker = defs
  .append("marker")
  .attr("id", "marker")
  .attr("viewBox", "0 -1.5 3 3")
  .attr("markerWidth", "6")
  .attr("markerHeight", "6")
  .attr("orient", "auto");

marker
  .append("path")
  .attr("d", "M 0 -1.5 3 0 0 1.5")
  .attr("fill", "var(--color-highlight, hsl(199, 84%, 55%))")
  .attr("stroke", "none");

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupCenter = group
  .append("g")
  .attr("transform", `translate(${width / 2} 0)`);

const groupNodes = groupCenter
  .append("g")
  .attr("fill", "currentColor")
  .attr("font-size", "15")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .style("text-transform", "uppercase");

const groupEdges = groupCenter
  .append("g")
  .attr("fill", "none")
  .attr("stroke", "var(--color-highlight, hsl(199, 84%, 55%))")
  .attr("stroke-width", "2");

const groupHighlight = groupCenter
  .append("g")
  .attr("fill", "currentColor")
  .attr("font-size", "15")
  .attr("dominant-baseline", "middle");

const groupsNodes = groupNodes
  .selectAll("g")
  .data(nodes)
  .enter()
  .append("g")
  // .attr(
  //   "transform",
  //   (d) => `translate(0 ${scaleOffset(d.id) + scaleOffset.bandwidth() / 2})`
  // )
  .attr("transform", (d) => `translate(0 ${d.offset})`);

groupsNodes.append("text").text((d) => d.node);

const pathEdges = groupEdges
  .selectAll("path")
  .data(edges)
  .enter()
  .append("path")
  .attr("marker-end", "url(#marker)")
  .attr("d", (d) => {
    // const { source, target } = d;
    // const y0 = scaleOffset(source) + scaleOffset.bandwidth() / 2;
    // const y1 = scaleOffset(target) + scaleOffset.bandwidth() / 2;

    const { source, target, offsetStart: y0, offsetEnd: y1 } = d;

    const dy = y1 - y0;

    const x0 = dy > 0 ? -inset : inset;

    const distance = scaleDistance(Math.abs(source - target));
    const lx = dy > 0 ? distance * -1 : distance;
    const ly = dy / 2;
    const h = dy > 0 ? outset * -1 : outset;

    return `M ${x0} ${y0} h ${h} l ${lx} ${ly} ${lx * -1} ${ly} h ${h * -1}`;
  });

groupsNodes
  .on("mouseenter", function (e, d) {
    d3.select(this).select("text").attr("font-weight", "700");

    const { id } = d;
    const pathEdges = groupEdges
      .selectAll("path")
      .attr("opacity", "0.05")
      .filter((d) => d.source === id);

    pathEdges.attr("opacity", "1");

    groupHighlight.selectAll("*").remove();
    pathEdges.each((d) => {
      // const { source, target, weight } = d;

      // const y0 = scaleOffset(source) + scaleOffset.bandwidth() / 2;
      // const y1 = scaleOffset(target) + scaleOffset.bandwidth() / 2;

      const { offsetStart: y0, offsetEnd: y1, weight } = d;

      const oy = y1 - y0;
      const ox = oy > 0 ? inset : -inset;
      const textAnchor = oy > 0 ? "start" : "end";

      groupHighlight
        .append("text")
        .attr("font-weight", "700")
        .attr("text-anchor", textAnchor)
        .attr("transform", `translate(${ox} ${y1})`)
        .text(format(weight));
    });
  })
  .on("mouseleave", function () {
    d3.select(this).select("text").attr("font-weight", "400");
  });

svg.on("mouseleave", () => {
  groupEdges.selectAll("path").attr("opacity", "1");
  groupNodes.select("text").attr("font-weight", "400");

  groupHighlight.selectAll("*").remove();
});
