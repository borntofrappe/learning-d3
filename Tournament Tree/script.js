const data = {
  name: ["Djokovic", "Rune"],
  children: [
    {
      name: ["Rune", "Auger-Aliassime"],
      children: [
        {
          name: ["Alcaraz", "Rune"],
        },
        {
          name: ["Tiafoe", "Auger-Aliassime"],
        },
      ],
    },
    {
      name: ["Djokovic", "Tsisipas"],
      children: [
        {
          name: ["Djokovic", "Musetti"],
        },
        {
          name: ["Tsisipas", "Paul"],
        },
      ],
    },
  ],
};

const width = 600;
const height = 400;
const margin = {
  top: 0,
  right: 200,
  bottom: 0,
  left: 10,
};

const root = d3.hierarchy(data);
const dataTree = d3.tree().size([height, width])(root);

const link = d3
  .link(d3.curveStep)
  .x((d) => d.y)
  .y((d) => d.x);

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

groupLinks
  .selectAll("path")
  .data(dataTree.links())
  .enter()
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", link);

const groupsNodes = groupNodes
  .selectAll("g")
  .data(dataTree.descendants())
  .enter()
  .append("g")
  .attr("fill", "currentColor")
  .attr("transform", ({ x, y }) => `translate(${y} ${x})`);

groupsNodes.append("circle").attr("r", "5");
groupsNodes
  .append("text")
  .attr("r", "5")
  .attr("x", "5")
  .attr("y", "-7")
  .text(({ data }) => data.name);
