const phases = [
  "Winner",
  "Final",
  "Semifinal",
  "Quarter-final",
  "Round of 16",
  "Group stage",
];

const editions = 4;

const nodesPhases = d3.range(editions).reduce((acc, curr) => {
  return [...acc, ...phases.map((d) => ({ id: `${d} ${curr}` }))];
}, []);

const linksPhases = d3.range(editions - 1).reduce((acc, curr) => {
  return [
    ...acc,
    ...phases.map((d) => ({
      source: `${d} ${curr}`,
      target: `${d} ${curr + 1}`,
      value: 1,
    })),
  ];
}, []);

const nodes = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

const links = [
  { source: 0, target: 3, value: 1 },
  { source: 1, target: 2, value: 1 },
];

const heightEdition = 250;
const width = 500;
const height = heightEdition * editions;
const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};

const sankey = d3
  .sankey()
  .nodeId((d) => d.id)
  .nodePadding(20)
  .extent([
    [0, 0],
    [height, width],
  ]);

const graph = sankey({ nodes: nodesPhases, links: linksPhases });

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
  .attr("x", (d) => d.y0)
  .attr("y", (d) => d.x0)
  .attr("width", (d) => d.y1 - d.y0)
  .attr("height", (d) => d.x1 - d.x0)
  .attr("fill", "currentColor");

groupLinks
  .selectAll("path")
  .data(graph.links)
  .join("path")
  .attr("stroke", "currentColor")
  .attr("d", (d) => {
    const { source, target } = d;
    const { y0: x0, y1: x1, x1: y0 } = source;
    const { y0: x3, y1: x2, x0: y1 } = target;

    return `M ${x0} ${y0} ${x1} ${y0} ${x2} ${y1} ${x3} ${y1}`;
  })
  .attr("opacity", "0.25");
