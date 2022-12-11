const data = {
  2022: ["France", "Ireland", "England", "Scotland", "Wales", "Italy"],
  2021: ["Wales", "France", "Ireland", "Scotland", "England", "Italy"],
  2020: ["England", "France", "Ireland", "Scotland", "Wales", "Italy"],
  2019: ["Wales", "England", "Ireland", "France", "Scotland", "Italy"],
  2018: ["Ireland", "Wales", "Scotland", "France", "England", "Italy"],
  2017: ["England", "Ireland", "France", "Scotland", "Wales", "Italy"],
  2016: ["England", "Wales", "Ireland", "Scotland", "France", "Italy"],
  2015: ["Ireland", "England", "Wales", "France", "Italy", "Scotland"],
  2014: ["Ireland", "England", "Wales", "France", "Scotland", "Italy"],
  2013: ["Wales", "England", "Scotland", "Italy", "Ireland", "France"],
  2012: ["Wales", "England", "Ireland", "France", "Italy", "Scotland"],
  2011: ["England", "France", "Ireland", "Wales", "Scotland", "Italy"],
  2010: ["France", "Ireland", "England", "Wales", "Scotland", "Italy"],
  2009: ["Ireland", "England", "France", "Wales", "Scotland", "Italy"],
  2008: ["Wales", "England", "France", "Ireland", "Scotland", "Italy"],
  2007: ["France", "Ireland", "England", "Italy", "Wales", "Scotland"],
  2006: ["France", "Ireland", "Scotland", "England", "Wales", "Italy"],
  2005: ["Wales", "France", "Ireland", "England", "Scotland", "Italy"],
  2004: ["France", "Ireland", "England", "Wales", "Italy", "Scotland"],
  2003: ["England", "Ireland", "France", "Scotland", "Italy", "Wales"],
  2002: ["France", "England", "Ireland", "Scotland", "Wales", "Italy"],
  2001: ["England", "Ireland", "Scotland", "Wales", "France", "Italy"],
  2000: ["England", "France", "Ireland", "Wales", "Scotland", "Italy"],
};

const dataRibbons = Object.entries(data).reduce(
  (acc, curr) => {
    const [year, teams] = curr;
    const nodes = teams.map((team, i) => ({
      id: `${year}-${team}`,
      position: i + 1,
      source: `${year}-${team}`,
      target: `${parseInt(year, 10) + 1}-${team}`,
      value: 1,
    }));
    acc.nodes.push(...nodes);

    if (year !== "2022") {
      const links = teams.map((team) => ({
        source: `${year}-${team}`,
        target: `${parseInt(year, 10) + 1}-${team}`,
        value: 1,
      }));
      acc.links.push(...links);
    }
    acc.years.push(year);
    return acc;
  },
  {
    nodes: [],
    links: [],
    years: [],
  }
);

const { nodes, links, years } = dataRibbons;

const widthPerYear = 150;
const width = widthPerYear * years.length;
const height = 600;
const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};

const sankey = d3
  .sankey()
  .nodeId((d) => d.id)
  .nodeSort((a, b) => a.position - b.position)
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
