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

const { nodes, links, years } = Object.entries(data)
  .sort((a, b) => (a[0] > b[0] ? 1 : -1))
  .reduce(
    (acc, curr, i, { length }) => {
      const [key, teams] = curr;
      const year = parseInt(key, 10);
      const nodes = teams.map((team, i) => ({
        id: `${year}-${team}`,
        position: i + 1,
      }));
      acc.nodes.push(...nodes);

      if (i < length - 1) {
        const links = teams.map((team) => ({
          source: `${year}-${team}`,
          target: `${year + 1}-${team}`,
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

const widthPerYear = 200;
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
const teams = Object.values(data)[0].sort((a, b) => (a > b ? 1 : -1));

const root = d3.select("body").append("div").attr("id", "root");

const header = root.append("header");

header
  .append("h1")
  .text("Six Nations Championship")
  .append("svg")
  .attr("viewBox", "0 0 10 10")
  .style("width", "1.5em")
  .style("height", "auto")
  .append("use")
  .attr("href", "#trophy");

header
  .append("p")
  .html(
    `Ever since the year 2000 six nations compete in one of the most prestigious rugby tournaments: ${teams
      .map((team) => `<strong>${team}</strong>`)
      .join(", ")}.`
  );

const svg = root
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
  .attr("fill", "currentColor")
  .attr("d", (d) => {
    const { source, target } = d;
    const { x1: x0, y0, y1: y3 } = source;
    const { x0: x1, y0: y1, y1: y2 } = target;

    return `M ${x0} ${y0} ${x1} ${y1} ${x1} ${y2} ${x0} ${y3}`;
  })
  .attr("opacity", "0.25");
