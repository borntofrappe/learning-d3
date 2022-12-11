const data = [
  {
    year: 2022,
    teams: ["France", "Ireland", "England", "Scotland", "Wales", "Italy"],
  },
  {
    year: 2021,
    teams: ["Wales", "France", "Ireland", "Scotland", "England", "Italy"],
  },
  {
    year: 2020,
    teams: ["England", "France", "Ireland", "Scotland", "Wales", "Italy"],
  },
  {
    year: 2019,
    teams: ["Wales", "England", "Ireland", "France", "Scotland", "Italy"],
  },
  {
    year: 2018,
    teams: ["Ireland", "Wales", "Scotland", "France", "England", "Italy"],
  },
  {
    year: 2017,
    teams: ["England", "Ireland", "France", "Scotland", "Wales", "Italy"],
  },
  {
    year: 2016,
    teams: ["England", "Wales", "Ireland", "Scotland", "France", "Italy"],
  },
  {
    year: 2015,
    teams: ["Ireland", "England", "Wales", "France", "Italy", "Scotland"],
  },
  {
    year: 2014,
    teams: ["Ireland", "England", "Wales", "France", "Scotland", "Italy"],
  },
  {
    year: 2013,
    teams: ["Wales", "England", "Scotland", "Italy", "Ireland", "France"],
  },
  {
    year: 2012,
    teams: ["Wales", "England", "Ireland", "France", "Italy", "Scotland"],
  },
  {
    year: 2011,
    teams: ["England", "France", "Ireland", "Wales", "Scotland", "Italy"],
  },
  {
    year: 2010,
    teams: ["France", "Ireland", "England", "Wales", "Scotland", "Italy"],
  },
  {
    year: 2009,
    teams: ["Ireland", "England", "France", "Wales", "Scotland", "Italy"],
  },
  {
    year: 2008,
    teams: ["Wales", "England", "France", "Ire", "Scotland", "Italy"],
  },
  {
    year: 2007,
    teams: ["France", "Ireland", "England", "Italy", "Wales", "Scotland"],
  },
  {
    year: 2006,
    teams: ["France", "Ireland", "Scotland", "England", "Wales", "Italy"],
  },
  {
    year: 2005,
    teams: ["Wales", "France", "Ireland", "England", "Scotland", "Italy"],
  },
  {
    year: 2004,
    teams: ["France", "Ireland", "England", "Wales", "Italy", "Scotland"],
  },
  {
    year: 2003,
    teams: ["England", "Ireland", "France", "Scotland", "Italy", "Wales"],
  },
  {
    year: 2002,
    teams: ["France", "England", "Ireland", "Scotland", "Wales", "Italy"],
  },
  {
    year: 2001,
    teams: ["England", "Ireland", "Scotland", "Wales", "France", "Italy"],
  },
  {
    year: 2000,
    teams: ["England", "France", "Ireland", "Wales", "Scotland", "Italy"],
  },
];

const nodes = [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3 }];

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
    [height, width],
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
