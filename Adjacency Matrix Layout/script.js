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

const scaleColor = d3
  .scaleLinear()
  .domain([0, d3.max(edges, (d) => d.weight)])
  .range(["hsl(0, 0%, 100%)", "hsl(0, 0%, 50%)"]);

const size = 300;
const margin = {
  top: 30,
  bottom: 20,
  left: 70,
  right: 20,
};

const svg = d3
  .select("body")
  .append("svg")
  .style("max-width", "30rem")
  .attr(
    "viewBox",
    `0 0 ${size + margin.left + margin.right} ${
      size + margin.top + margin.bottom
    }`
  );

const defs = svg.append("defs");

const sizeCell = size / nodes.length;

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
  .attr("stroke", "currentColor");

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const scaleNodes = d3
  .scaleBand()
  .domain(nodes.map((d) => d.node))
  .range([0, size]);

const groupNodes = group.append("g").attr("font-size", "12");
const groupEdges = group.append("g");
const groupFrame = group.append("g");

groupNodes
  .append("g")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("dominant-baseline", "middle")
  .attr("text-anchor", "end")
  .attr(
    "transform",
    (d) => `translate(-10 ${scaleNodes(d.node) + scaleNodes.bandwidth() / 2})`
  )
  .text((d) => d.node);

groupNodes
  .append("g")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("dominant-baseline", "baseline")
  .attr("text-anchor", "middle")
  .attr(
    "transform",
    (d) => `translate(${scaleNodes(d.node) + scaleNodes.bandwidth() / 2} -10)`
  )
  .text((d) => d.node);

groupFrame
  .append("rect")
  .attr("width", size)
  .attr("height", size)
  .attr("stroke", "currentColor")
  .attr("fill", "url(#matrix-grid)");

const groupsEdges = groupEdges
  .selectAll("g")
  .data(edges)
  .enter()
  .append("g")
  .attr("transform", (d) => {
    const y = scaleNodes(nodes.find(({ id }) => id === d.source).node);
    const x = scaleNodes(nodes.find(({ id }) => id === d.target).node);
    return `translate(${x} ${y})`;
  });

groupsEdges
  .append("rect")
  .attr("width", sizeCell)
  .attr("height", sizeCell)
  .attr("fill", (d) => scaleColor(d.weight));
