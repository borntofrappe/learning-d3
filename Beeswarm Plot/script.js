const data = [
  { match: "Qatar-Equador", result: "0-2" },
  { match: "Senegal-Netherlands", result: "0-2" },
  { match: "Qatar-Senegal", result: "1-3" },
  { match: "Netherlands-Equador", result: "1-1" },
  { match: "Equador-Senegal", result: "1-2" },
  { match: "Netherlands-Qatar", result: "2-0" },
  { match: "England-Iran", result: "6-2" },
  { match: "United States-Wales", result: "1-1" },
  { match: "Wales-Iran", result: "0-2" },
  { match: "England-United States", result: "0-0" },
  { match: "Wales-England", result: "0-3" },
  { match: "Iran-United States", result: "0-1" },
  { match: "Argentina-Saudi Arabia", result: "1-2" },
  { match: "Mexico-Poland", result: "0-0" },
  { match: "Poland-Saudi Arabia", result: "2-0" },
  { match: "Argentina-Mexico", result: "2-0" },
  { match: "Poland-Argentina", result: "0-2" },
  { match: "Saudi Arabia-Mexico", result: "1-2" },
  { match: "Denmark-Tunisia", result: "0-0" },
  { match: "France-Australia", result: "4-1" },
  { match: "Tunisia-Australia", result: "0-1" },
  { match: "France-Denmark", result: "2-1" },
  { match: "Australia-Denmark", result: "1-0" },
  { match: "Tunisia-France", result: "1-0" },
  { match: "Germany-Japan", result: "1-2" },
  { match: "Spain-Costa Rica", result: "7-0" },
  { match: "Japan-Costa Rica", result: "0-1" },
  { match: "Spain-Germany", result: "1-1" },
  { match: "Japan-Spain", result: "2-1" },
  { match: "Costa Rica-Germany", result: "2-4" },
  { match: "Morocco-Croatia", result: "0-0" },
  { match: "Belgium-Canada", result: "1-0" },
  { match: "Belgium-Morocco", result: "0-2" },
  { match: "Croatia-Canada", result: "4-1" },
  { match: "Croatia-Belgium", result: "0-0" },
  { match: "Canada-Morocco", result: "1-2" },
  { match: "Switzerland-Cameroon", result: "1-0" },
  { match: "Brazil-Serbia", result: "2-0" },
  { match: "Cameroon-Serbia", result: "3-3" },
  { match: "Brazil-Switzerland", result: "1-0" },
  { match: "Serbia-Switzerland", result: "2-3" },
  { match: "Cameroon-Brazil", result: "1-0" },
  { match: "Uruguay-South Korea", result: "0-0" },
  { match: "Portugal-Ghana", result: "3-2" },
  { match: "South Korea-Ghana", result: "2-3" },
  { match: "Portugal-Uruguay", result: "2-0" },
  { match: "Ghana-Uruguay", result: "0-2" },
  { match: "South Korea-Portugal", result: "2-1" },
  { match: "Netherlands-United States", result: "3-1" },
  { match: "Argentina-Australia", result: "2-1" },
  { match: "Japan-Croatia", result: "1-1" },
  { match: "Brazil-South Korea", result: "4-1" },
  { match: "England-Senegal", result: "3-0" },
  { match: "France-Poland", result: "3-1" },
  { match: "Morocco-Spain", result: "0-0" },
  { match: "Portugal-Switzerland", result: "6-1" },
];

// { ...data, goals }
const dataGoals = data.map((d) => {
  const { match, result } = d;
  const goals = result
    .split("-")
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  return {
    ...d,
    goals,
  };
});

// { goals, frequency }
const dataFrequency = Object.entries(
  dataGoals.reduce((acc, curr) => {
    acc[curr.goals] = acc[curr.goals] ? acc[curr.goals] + 1 : 1;
    return acc;
  }, {})
).map(([goals, frequency]) => ({ goals: parseInt(goals, 10), frequency }));

const totalGoals = dataGoals.reduce((acc, curr) => acc + curr.goals, 0);
const maxGoals = d3.max(dataFrequency, (d) => d.goals);
const { goals: goalsMaxFrequency } = dataFrequency.find(
  (d) => d.frequency === d3.max(dataFrequency, (d) => d.frequency)
);

const width = 500;
const height = 120;

const strokeWidth = 8;
const rounding = 8;
const verticalStripes = 5;

const margin = {
  top: 20,
  right: 10,
  bottom: 10,
  left: 10,
};

const radius = 8;

const scaleOffset = d3
  .scaleBand()
  .domain(d3.range(d3.max(dataGoals, (d) => d.goals) + 1))
  .range([0, width]);

// { ...dataGoals, x, y }
const dataNodes = dataGoals.map((d) => {
  const { goals } = d;
  const x = scaleOffset(goals) + scaleOffset.bandwidth() / 2;
  const y = height / 2;

  return {
    ...d,
    x,
    y,
  };
});

const simulation = d3
  .forceSimulation()
  .nodes(dataNodes)
  .force("collision", d3.forceCollide().radius(radius))
  .force(
    "x",
    d3.forceX().x((d) => d.x)
  )
  .force(
    "y",
    d3.forceY().y((d) => d.y)
  );

const root = d3.select("body").append("div").attr("id", "root");

const header = root.append("header");
header.append("h1").text("Just how many goals?");
header
  .append("p")
  .html(
    `Following the group stages and the round of 16, teams at the 2022 FIFA World Cup scored <strong>${totalGoals}</strong> times.`
  );

header
  .append("p")
  .html(
    `While the record is <strong>${maxGoals}</strong> goals, however, most matches ended with <strong>${goalsMaxFrequency}</strong>.`
  );

const svg = root
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + (margin.left + margin.right)} ${
      height + (margin.top + margin.bottom)
    }`
  );

// run the simulation before you draw the data points
while (simulation.alpha() > simulation.alphaMin()) {
  simulation.tick();
}

const axisX = d3.axisBottom(scaleOffset).tickSize(0);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupAxis = group.append("g");
const groupGoals = group.append("g");
const groupHighlight = group
  .append("g")
  .attr("transform", `translate(${width} ${-(strokeWidth + 1)})`)
  .attr("text-anchor", "end")
  .attr("fill", "currentColor")
  .attr("font-size", "13")
  .attr("font-weight", "700");

const groupDelaunay = group.append("g").attr("opacity", "0");

const groupAxisX = groupAxis
  .append("g")
  .attr("transform", `translate(0 ${height})`)
  .call(axisX);

const groupAxisY = groupAxis.append("g");

groupAxisX.select("path").remove();
groupAxisX.selectAll("text").attr("opacity", "0");

groupAxisX
  .selectAll("g.tick")
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "var(--color-net, currentColor)")
  .attr("stroke-width", "1")
  .attr("d", `M 0 0 v ${-height}`);

groupAxisY
  .selectAll("path")
  .data(
    d3.range(verticalStripes).map((d, _, { length }) => (height / length) * d)
  )
  .enter()
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "var(--color-net, currentColor)")
  .attr("stroke-width", "1")
  .attr("d", (d) => `M 0 ${d} h ${width}`);

groupAxis
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", strokeWidth)
  .attr("stroke-linejoin", "round")
  .attr(
    "d",
    `M 0 ${height}  v ${-(
      height - rounding
    )} a ${rounding} ${rounding} 0 0 1 ${rounding} ${-rounding} h ${
      width - rounding * 2
    } a ${rounding} ${rounding} 0 0 1 ${rounding} ${rounding} v ${
      height - rounding
    }`
  );

const groupsGoals = groupGoals
  .selectAll("g")
  .data(dataNodes)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(${d.x} ${d.y})`);

groupsGoals
  .append("use")
  .attr("x", -radius)
  .attr("y", -radius)
  .style("color", "var(--color-accent)")
  .attr("width", radius * 2)
  .attr("height", radius * 2)
  .attr("href", "#football-ball");

const delaunay = d3.Delaunay.from(
  dataNodes,
  (d) => d.x,
  (d) => d.y
);

const voronoi = delaunay.voronoi([0, 0, width, height]);

groupDelaunay
  .selectAll("path")
  .data(dataNodes)
  .enter()
  .append("path")
  .attr("d", (_, i) => voronoi.renderCell(i))
  .on("pointerenter", function (e, d) {
    groupsGoals
      .style("filter", "grayscale(0.7) brightness(0.5)")
      .filter(({ match }) => match === d.match)
      .style("filter", "grayscale(0) brightness(1)")
      .select("use")
      .transition()
      .duration(350)
      .attr("transform", "rotate(20) scale(1.25)");

    const { match, result } = d;
    groupHighlight
      .append("text")
      .html(
        `${match.replace(
          "-",
          " - "
        )} <tspan font-weight="initial" font-size="0.8em">ended</tspan> ${result.replace(
          "-",
          " - "
        )}`
      );
  })
  .on("pointerleave", function (e, d) {
    groupsGoals
      .style("filter", "grayscale(0) brightness(1)")
      .filter(({ match }) => match === d.match)
      .select("use")
      .transition()
      .attr("transform", "scale(1)");

    groupHighlight.select("text").remove();
  });
