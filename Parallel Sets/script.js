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
        team,
        position: i + 1,
        year,
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

const teams = Object.values(data)[0].sort((a, b) => (a > b ? 1 : -1));

const width = 500;
const heightPerYear = 250;
const height = heightPerYear * years.length;
const margin = {
  top: 25,
  right: 5,
  bottom: 25,
  left: 5,
};

const sankey = d3
  .sankey()
  .nodeId((d) => d.id)
  .nodeSort((a, b) => b.position - a.position)
  .extent([
    [0, 0],
    [height, width],
  ]);

const graph = sankey({ nodes, links });

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
    "Ever since the year 2000 six nations compete in one of the most prestigious rugby tournaments."
  );

header
  .append("p")
  .attr("class", "visually-hidden")
  .html(
    `These are: ${teams.map((team) => `<strong>${team}</strong>`).join(", ")}.`
  );

root
  .append("p")
  .text(
    "Select a node to highlight the journey of a specific team, from wodden spoon to glory."
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

const groupsNodes = groupNodes
  .selectAll("g")
  .data(graph.nodes)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(${d.y0} ${d.x0})`);

groupsNodes
  .append("rect")
  .attr("width", (d) => d.y1 - d.y0)
  .attr("height", (d) => d.x1 - d.x0)
  .attr("fill", "currentColor");

const labels = groupsNodes
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-weight", "700")
  .attr("font-size", "12")
  .attr("text-anchor", "middle")
  .attr("x", (d) => (d.y1 - d.y0) / 2)
  .attr("y", "-6")
  .text((d) => d.team);

labels.filter((d) => d.year !== years[0]).attr("opacity", "0");
labels
  .filter((d) => d.year === years[years.length - 1])
  .attr("opacity", "1")
  .attr("dominant-baseline", "hanging")
  .attr("y", (d) => d.x1 - d.x0 + 4);

const paths = groupLinks
  .selectAll("path")
  .data(graph.links)
  .enter()
  .append("path")
  .attr("fill", "currentColor")
  .attr("d", (d) => {
    const { source, target } = d;
    const { y0: x0, y1: x1, x1: y0 } = source;
    const { y1: x2, y0: x3, x0: y1 } = target;

    return `M ${x0} ${y0} ${x1} ${y0} ${x2} ${y1} ${x3} ${y1}`;
  })
  .attr("opacity", "0.2");

groupsNodes.on("click", (e, d) => {
  e.stopPropagation();

  groupsNodes
    .select("rect")
    .attr("fill", "currentColor")
    .filter(({ team }) => team === d.team)
    .attr("fill", "var(--color-highlight, hsl(45, 91%, 54%))");

  labels
    .filter((d) => d.year !== years[0] && d.year !== years[years.length - 1])
    .attr("opacity", "0")
    .filter(({ team }) => team === d.team)
    .attr("opacity", "1");

  paths
    .attr("fill", "currentColor")
    .attr("opacity", "0.2")
    .filter(({ source }) => source.team === d.team)
    .attr("fill", "var(--color-highlight, hsl(45, 91%, 54%))")
    .attr("opacity", "0.36");
});

svg.on("click", () => {
  groupsNodes.select("rect").attr("fill", "currentColor");
  labels
    .filter((d) => d.year !== years[0] && d.year !== years[years.length - 1])
    .attr("opacity", "0");

  paths.attr("fill", "currentColor").attr("opacity", "0.2");
});
