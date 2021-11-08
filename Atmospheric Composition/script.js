const data = [
  {
    name: "Mercury",
    gases: [
      { name: "Carbon Dioxide", value: 0 },
      { name: "Nitrogen", value: 0 },
      { name: "Methane", value: 0 },
      { name: "Argon", value: 0 },
      { name: "Oxygen", value: 42 },
      { name: "Sodium", value: 29 },
      { name: "Hydrogen", value: 22 },
      { name: "Helium", value: 0 },
      { name: "Other", value: 7 },
    ],
  },
  {
    name: "Venus",
    gases: [
      { name: "Carbon Dioxide", value: 96 },
      { name: "Nitrogen", value: 3 },
      { name: "Methane", value: 0 },
      { name: "Argon", value: 0 },
      { name: "Oxygen", value: 0 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 0 },
      { name: "Helium", value: 0 },
      { name: "Other", value: 1 },
    ],
  },
  {
    name: "Earth",
    gases: [
      { name: "Carbon Dioxide", value: 0 },
      { name: "Nitrogen", value: 78 },
      { name: "Methane", value: 0 },
      { name: "Argon", value: 1 },
      { name: "Oxygen", value: 20 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 0 },
      { name: "Helium", value: 0 },
      { name: "Other", value: 1 },
    ],
  },
  {
    name: "Mars",
    gases: [
      { name: "Carbon Dioxide", value: 95 },
      { name: "Nitrogen", value: 2 },
      { name: "Methane", value: 0 },
      { name: "Argon", value: 2 },
      { name: "Oxygen", value: 0 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 0 },
      { name: "Helium", value: 0 },
      { name: "Other", value: 1 },
    ],
  },
  {
    name: "Jupiter",
    gases: [
      { name: "Carbon Dioxide", value: 0 },
      { name: "Nitrogen", value: 0 },
      { name: "Methane", value: 0 },
      { name: "Argon", value: 0 },
      { name: "Oxygen", value: 0 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 89 },
      { name: "Helium", value: 10 },
      { name: "Other", value: 1 },
    ],
  },
  {
    name: "Saturn",
    gases: [
      { name: "Carbon Dioxide", value: 0 },
      { name: "Nitrogen", value: 0 },
      { name: "Methane", value: 0 },
      { name: "Argon", value: 0 },
      { name: "Oxygen", value: 0 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 96 },
      { name: "Helium", value: 3 },
      { name: "Other", value: 1 },
    ],
  },
  {
    name: "Uranus",
    gases: [
      { name: "Carbon Dioxide", value: 0 },
      { name: "Nitrogen", value: 0 },
      { name: "Methane", value: 2 },
      { name: "Argon", value: 0 },
      { name: "Oxygen", value: 0 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 83 },
      { name: "Helium", value: 15 },
      { name: "Other", value: 0 },
    ],
  },
  {
    name: "Neptune",
    gases: [
      { name: "Carbon Dioxide", value: 0 },
      { name: "Nitrogen", value: 0 },
      { name: "Methane", value: 1 },
      { name: "Argon", value: 0 },
      { name: "Oxygen", value: 0 },
      { name: "Sodium", value: 0 },
      { name: "Hydrogen", value: 80 },
      { name: "Helium", value: 19 },
      { name: "Other", value: 0.5 },
    ],
  },
];

const {
  min,
  max,
  scaleLinear,
  scaleBand,
  arc,
  pie,
  schemeSet1: schemeColor,
} = d3;

const dimensions = {
  width: 400,
  height: 200,
  margin: {
    top: 20,
    right: 20,
    bottom: 10,
    left: 20,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const pieGenerator = pie()
  .startAngle((Math.PI * 3) / 2)
  .endAngle((Math.PI * 5) / 2)
  .value((d) => d.value)
  .sort(null);

const radius = min([
  dimensions.boundedHeight * 0.75,
  dimensions.boundedWidth / 2,
]);

const arcGenerator = arc()
  .innerRadius(radius * 0.5)
  .outerRadius(radius);

d3.select("body").append("h1").text("Atmospheric Composition of...");
const main = d3.select("body").append("main");

function plotData(data) {
  const pieData = pieGenerator(data.gases);

  const article = main.append("article");
  article.append("h2").text(data.name);

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const legendGroup = bounds.append("g");

  const pieGroup = bounds
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.boundedWidth - radius} ${
        dimensions.boundedHeight
      })`
    );

  const legendGroups = legendGroup
    .selectAll("g")
    .data(data.gases.filter(({ value }) => value > 0))
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0 ${i * 30})`);

  legendGroups
    .append("circle")
    .attr(
      "fill",
      ({ name }) => schemeColor[data.gases.findIndex((d) => d.name === name)]
    )
    .attr("stroke", "currentColor")
    .attr("stroke-width", "2")
    .attr("r", "6")
    .attr("cy", "-1");

  const legendText = legendGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("x", "10")
    .attr("font-size", "18")
    .attr("dominant-baseline", "middle");

  legendText.append("tspan").text(({ name }) => `${name}: `);

  legendText
    .append("tspan")
    .attr("font-weight", "bold")
    .text(({ value }) => `${value}%`);

  pieGroup
    .selectAll("path")
    .data(pieData)
    .enter()
    .append("path")
    .attr("fill", (d, i) => schemeColor[i])
    .attr("stroke", "currentColor")
    .attr("stroke-width", "4")
    .attr("d", (d) => arcGenerator(d));
}

data.forEach((d) => plotData(d));
