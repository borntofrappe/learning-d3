const nodes = [{ id: 0 }, { id: 1 }, { id: 2 }, { value: 3 }];

const links = [
  { source: 0, target: 3, value: 1 },
  { source: 1, target: 2, value: 1 },
];

const width = 500;
const height = 500;
const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};

const sankey = d3
  .sankey()
  .nodeSort((a, b) => a.id - b.id)
  .nodePadding(20)
  .extent([
    [0, 0],
    [width, height],
  ]);

const graph = sankey({ nodes, links });

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupLinks = group.append("g");
const groupNodes = group.append("g");

groupNodes
  .selectAll("rect")
  .data(graph.nodes)
  .join("rect")
  .attr("x", (d) => d.x0)
  .attr("y", (d) => d.y0)
  .attr("width", (d) => d.x1 - d.x0)
  .attr("height", (d) => d.y1 - d.y0)
  .attr("fill", "currentColor");

groupLinks
  .selectAll("path")
  .data(graph.links)
  .join("path")
  .attr("stroke", "currentColor")
  .attr("d", (d) => {
    const { source, target } = d;
    const { x1: x0, y0, y1: y3 } = source;
    const { x0: x1, y0: y1, y1: y2 } = target;

    return `M ${x0} ${y0} ${x1} ${y1} ${x1} ${y2} ${x0} ${y3}`;
  })
  .attr("opacity", "0.25");
