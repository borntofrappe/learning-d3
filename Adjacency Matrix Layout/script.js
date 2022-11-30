const nodes = [
  { id: 0, node: "UK" },
  { id: 1, node: "France" },
  { id: 2, node: "Germany" },
  { id: 3, node: "Spain" },
  { id: 4, node: "Italy" },
  { id: 5, node: "Poland" },
];

const edges = [
  { source: 0, target: 1, weight: 150000 },
  { source: 0, target: 2, weight: 104175 },
  { source: 0, target: 3, weight: 390880 },
  { source: 0, target: 4, weight: 29184 },
  { source: 0, target: 5, weight: 764 },
  { source: 1, target: 0, weight: 123000 },
  { source: 1, target: 2, weight: 116295 },
  { source: 1, target: 3, weight: 122385 },
  { source: 1, target: 4, weight: 32956 },
  { source: 1, target: 5, weight: 705 },
  { source: 2, target: 0, weight: 297000 },
  { source: 2, target: 1, weight: 91000 },
  { source: 2, target: 3, weight: 195842 },
  { source: 2, target: 4, weight: 42302 },
  { source: 2, target: 5, weight: 4446 },
  { source: 3, target: 0, weight: 71000 },
  { source: 3, target: 1, weight: 128000 },
  { source: 3, target: 2, weight: 111684 },
  { source: 3, target: 4, weight: 19094 },
  { source: 3, target: 5, weight: 169 },
  { source: 4, target: 0, weight: 119000 },
  { source: 4, target: 1, weight: 174000 },
  { source: 4, target: 2, weight: 556145 },
  { source: 4, target: 3, weight: 187847 },
  { source: 4, target: 5, weight: 672 },
  { source: 5, target: 0, weight: 550000 },
  { source: 5, target: 1, weight: 350000 },
  { source: 5, target: 2, weight: 425608 },
  { source: 5, target: 3, weight: 85862 },
  { source: 5, target: 4, weight: 105608 },
];

const format = d3.format(",");

const scaleColor = d3
  .scaleLinear()
  .domain([0, d3.max(edges, (d) => d.weight)])
  .range(["hsl(205, 79%, 92%)", "hsl(205, 74%, 65%)"]);

const size = 300;
const sizeCell = size / nodes.length;
const rectPadding = 0.1 * sizeCell;
const rectCell = sizeCell - rectPadding * 2;

const margin = {
  top: 50,
  bottom: 30,
  left: 70,
  right: 20,
};

const scaleNodes = d3
  .scaleBand()
  .domain(nodes.map((d) => d.node))
  .range([0, size]);

nodes.forEach((d) => {
  const o = scaleNodes(d.node);
  d.x = o;
  d.y = o;
  d.size = scaleNodes.bandwidth();
});

edges.forEach((d) => {
  const { node: source, x, size } = nodes.find(({ id }) => id === d.source);
  const { node: target, y } = nodes.find(({ id }) => id === d.target);

  d.source = source;
  d.target = target;
  d.nodeSize = size;
  d.x = y;
  d.y = x;
});

const root = d3.select("body").append("div").attr("id", "root");

root.append("h1").text("Where do they live?");
root
  .append("p")
  .html(
    "A <span>(relatively dated)</span> article <a href='https://www.theguardian.com/news/datablog/2012/jan/26/europe-population-who-lives-where'>from The Guardian</a> highlights where people live in Europe, focusing on the connections between a few countries."
  );

const svg = root
  .append("svg")
  .style("max-width", "30rem")
  .attr(
    "viewBox",
    `0 0 ${size + margin.left + margin.right} ${
      size + margin.top + margin.bottom
    }`
  );

const defs = svg.append("defs");

const pattern = defs
  .append("pattern")
  .attr("patternUnits", "userSpaceOnUse")
  .attr("width", sizeCell)
  .attr("height", sizeCell)
  .attr("id", "matrix-grid")
  .attr("viewBox", "0 0 100 100");

pattern
  .append("rect")
  .attr("width", "100")
  .attr("height", "100")
  .attr("fill", "none")
  .attr("stroke", "hsl(205, 89%, 15%)");

const marker = defs
  .append("marker")
  .attr("id", "marker")
  .attr("viewBox", "-0.5 -2 3 4")
  .attr("markerWidth", "5")
  .attr("markerHeight", "5")
  .attr("orient", "auto");

marker
  .append("path")
  .attr("d", "M 0 -1.5 2 0 0 1.5z")
  .attr("fill", "hsl(205, 65%, 55%)")
  .attr("stroke", "hsl(205, 65%, 55%)")
  .attr("stroke-width", "1")
  .attr("stroke-linecap", "round")
  .attr("stroke-linejoin", "round");

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupNodes = group
  .append("g")
  .attr("font-size", "12")
  .attr("fill", "currentColor")
  .attr("font-weight", "700");

const groupEdges = group.append("g");

const groupFrame = group.append("g").style("pointer-events", "none");

const groupHighlight = group
  .append("g")
  .style("pointer-events", "none")
  .attr("opacity", "0");

groupNodes
  .append("g")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("dominant-baseline", "middle")
  .attr("text-anchor", "end")
  /*
  // pre-layout
  .attr("transform", (d) => {
    const y = scaleNodes(d.node) + scaleNodes.bandwidth() / 2;

    return `translate(-10 ${y})`;
  })
  */
  .attr("transform", (d) => `translate(-10 ${d.y + d.size / 2})`)
  .text((d) => d.node);

groupNodes
  .append("g")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("text-anchor", "middle")
  /*
  // pre-layout
  .attr("transform", (d) => {
    const x = scaleNodes(d.node) + scaleNodes.bandwidth() / 2;

    return `translate(${x} ${-(10 + 8)})`;
  })
  */
  .attr("transform", (d) => `translate(${d.x + d.size / 2} ${-(10 + 8)})`)
  .text((d) => d.node);

const groupsEdges = groupEdges
  .selectAll("g")
  .data(edges)
  .enter()
  .append("g")
  /*
  // pre-layout
  .attr("transform", (d) => {
    const x = scaleNodes(nodes.find(({ id }) => id === d.target).node);
    const y = scaleNodes(nodes.find(({ id }) => id === d.source).node);

    return `translate(${x} ${y})`;
  })
  */
  .attr("transform", (d) => `translate(${d.x} ${d.y})`);

groupsEdges
  .append("rect")
  .attr("x", rectPadding)
  .attr("y", rectPadding)
  .attr("width", rectCell)
  .attr("height", rectCell)
  .attr("fill", (d) => scaleColor(d.weight))
  .attr("rx", "10");

groupsEdges
  .append("rect")
  .attr("width", sizeCell)
  .attr("height", sizeCell)
  .attr("fill", "transparent")
  .attr("opacity", "0");

groupHighlight
  .append("rect")
  .attr("width", sizeCell)
  .attr("height", sizeCell)
  .attr("fill", "hsl(205, 65%, 55%)")
  .attr("stroke", "none")
  .attr("fill-opacity", "0.1");

groupHighlight
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "hsl(205, 65%, 55%)")
  .attr("stroke-width", "2")
  .attr("marker-end", "url(#marker)");

groupHighlight
  .append("text")
  .attr("x", size)
  .attr("y", size + 10)
  .attr("fill", "currentColor")
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "hanging")
  .attr("font-size", "12");

groupFrame
  .append("rect")
  .attr("width", size)
  .attr("height", size)
  .attr("stroke", "hsl(205, 89%, 15%)")
  .attr("fill", "url(#matrix-grid)")
  .attr("rx", "10");

groupsEdges
  .on("mouseenter", function (e, d) {
    /* 
    // pre-layout
    const value = format(d.weight);
    
    const { node: source } = nodes.find(({ id }) => id === d.source);
    const { node: target } = nodes.find(({ id }) => id === d.target);

    const v = scaleNodes(source) + scaleNodes.bandwidth() / 2;
    const h = scaleNodes(target) + scaleNodes.bandwidth() / 2;
    const a = sizeCell / 2;
    */

    const value = format(d.weight);

    const { source, target, x, y, nodeSize: size } = d;

    const h = x + size / 2;
    const v = y + size / 2;
    const a = size / 2;

    groupHighlight
      .select("path")
      .transition()
      .attr(
        "d",
        `M 0 ${v} h ${h - a} a ${a} ${a} 0 0 0 ${a} ${-a} v ${-(v - a + 5)}`
      );

    /* 
      // pre-layout
      groupHighlight
        .select("rect")
        .attr("transform", d3.select(this).attr("transform"));
    */

    groupHighlight.select("rect").attr("transform", `translate(${x} ${y})`);

    groupHighlight
      .select("text")
      .html(
        `<tspan font-weight="700">${value}</tspan> people born in <tspan font-weight="700">${source}</tspan> live in <tspan font-weight="700">${target}</tspan>.`
      );

    groupHighlight.attr("opacity", "1");
  })
  .on("mouseleave", () => {
    groupHighlight.attr("opacity", "0");
  });
