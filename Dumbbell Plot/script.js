// prettier-ignore
const data = [
    { country: "Belgium", values: [{ key: "Male", value: 78.5, }, { key: "Female", value: 83, }] }, 
    { country: "Bulgaria", values: [{ key: "Male", value: 70, }, { key: "Female", value: 77.5, }] }, 
    { country: "Czechia", values: [{ key: "Male", value: 75.3, }, { key: "Female", value: 81.3, }] }, 
    { country: "Denmark", values: [{ key: "Male", value: 79.7, }, { key: "Female", value: 83.6, }] }, 
    { country: "Germany", values: [{ key: "Male", value: 78.7, }, { key: "Female", value: 83.5, }] }, 
    { country: "Estonia", values: [{ key: "Male", value: 74.4, }, { key: "Female", value: 83, }] }, 
    { country: "Ireland", values: [{ key: "Male", value: 80.8, }, { key: "Female", value: 84.4, }] }, 
    { country: "Greece", values: [{ key: "Male", value: 78.8, }, { key: "Female", value: 83.9, }] }, 
    { country: "Spain", values: [{ key: "Male", value: 79.6, }, { key: "Female", value: 85.2, }] }, 
    { country: "France", values: [{ key: "Male", value: 79.2, }, { key: "Female", value: 85.3, }] }, 
    { country: "Croatia", values: [{ key: "Male", value: 74.7, }, { key: "Female", value: 80.9, }] }, 
    { country: "Italy", values: [{ key: "Male", value: 80, }, { key: "Female", value: 84.5, }] }, 
    { country: "Cyprus", values: [{ key: "Male", value: 80.4, }, { key: "Female", value: 84.4, }] }, 
    { country: "Latvia", values: [{ key: "Male", value: 70.6, }, { key: "Female", value: 80, }] }, 
    { country: "Lithuania", values: [{ key: "Male", value: 70.1, }, { key: "Female", value: 80.1, }] }, 
    { country: "Luxembourg", values: [{ key: "Male", value: 79.9, }, { key: "Female", value: 84.5, }] }, 
    { country: "Hungary", values: [{ key: "Male", value: 72.3, }, { key: "Female", value: 79, }] }, 
    { country: "Malta", values: [{ key: "Male", value: 80.3, }, { key: "Female", value: 84.5, }] }, 
    { country: "Netherlands", values: [{ key: "Male", value: 79.7, }, { key: "Female", value: 83.1, }] }, 
    { country: "Austria", values: [{ key: "Male", value: 78.9, }, { key: "Female", value: 83.6, }] }, 
    { country: "Poland", values: [{ key: "Male", value: 72.5, }, { key: "Female", value: 80.7, }] }, 
    { country: "Portugal", values: [{ key: "Male", value: 78, }, { key: "Female", value: 84.1, }] }, 
    { country: "Romania", values: [{ key: "Male", value: 70.4, }, { key: "Female", value: 78.3, }] }, 
    { country: "Slovenia", values: [{ key: "Male", value: 77.8, }, { key: "Female", value: 83.4, }] }, 
    { country: "Slovakia", values: [{ key: "Male", value: 73.5, }, { key: "Female", value: 80.4, }] }, 
    { country: "Finland", values: [{ key: "Male", value: 79.2, }, { key: "Female", value: 84.8, }] }, 
    { country: "Sweden", values: [{ key: "Male", value: 80.6, }, { key: "Female", value: 84.2, }]
  },
];

const keys = ["Male", "Female"];
const countries = data.map((d) => d.country);

const width = 400;
const height = 800;
const inset = 60;
const strokeDasharray = 3;
const radius = 5;
const strokeWidth = 12;

const margin = {
  top: 25,
  bottom: 5,
  left: 80,
  right: 10,
};

const extent = d3.extent(
  data.reduce(
    (acc, curr) => [
      ...acc,
      ...curr.values.reduce((a, c) => [...a, c.value], []),
    ],
    []
  )
);

const xScale = d3
  .scaleLinear()
  .domain(extent)
  .range([inset, width - inset])
  .nice();

const yScale = d3.scaleBand().domain(countries).range([0, height]);

const colorScale = d3.scaleOrdinal(d3.schemeSet2).domain(keys);

const xAxis = d3.axisTop(xScale).tickSize(0).tickPadding(10);
const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(10);

const values = data
  .map((d) => d.values)
  .reduce((acc, curr) => {
    curr.forEach(({ key, value }) => {
      acc[key] = acc[key] ? [...acc[key], value] : [value];
    });

    return acc;
  }, {});

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

const groupAxis = group.append("g");
const groupStats = group.append("g");
const groupData = group.append("g");

const textAxis = groupAxis.append("text").text("0");

groupAxis
  .append("line")
  .attr("stroke", "currentColor")
  .attr("stroke-dasharray", strokeDasharray)
  .attr("stroke-linecap", "square")
  .attr("x2", inset)
  .attr("transform", "translate(0.5 0.5)");

const groupAxisX = groupAxis.append("g").call(xAxis);
groupAxis.append("g").call(yAxis).select("path").remove();

const groupGroupAxisX = groupAxis.select("g");
const textAxisX = groupAxisX.select("text");

textAxis
  .attr("font-size", groupGroupAxisX.attr("font-size"))
  .attr("font-family", groupGroupAxisX.attr("font-family"))
  .attr("text-anchor", groupGroupAxisX.attr("text-anchor"))
  .attr("y", textAxisX.attr("y"))
  .attr("dy", textAxisX.attr("dy"))
  .attr("fill", textAxisX.attr("fill"));

groupAxis.select("line").attr("stroke-width", "0.5");
groupAxis.select("path").attr("stroke-width", "0.5");

const groupsData = groupData
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr(
    "transform",
    (d) => `translate(0 ${yScale(d.country) + yScale.bandwidth() / 2})`
  );

groupsData
  .append("path")
  .datum((d) => d.values)
  .attr("fill", "none")
  .attr("stroke", "var(--color-line, currentColor)")
  .attr("stroke-width", strokeWidth)
  .attr("stroke-linecap", "round")
  .attr("d", (d) => `M ${d.map(({ value }) => xScale(value)).join(" 0 ")} 0`);

groupsData
  .selectAll("circle")
  .data((d) => d.values)
  .enter()
  .append("circle")
  .attr("fill", (d) => colorScale(d.key))
  .attr("cx", (d) => xScale(d.value))
  .attr("r", radius);

const groupsStats = groupStats
  .selectAll("g")
  .data(Object.entries(values))
  .enter()
  .append("g")
  .style("color", (d) => colorScale(d[0]));

groupsStats
  .append("rect")
  .datum((d) => ({
    mean: d3.mean(d[1]),
    deviation: d3.deviation(d[1]),
  }))
  .attr("x", (d) => xScale(d.mean - d.deviation / 2))
  .attr(
    "width",
    (d) => xScale(d.mean + d.deviation / 2) - xScale(d.mean - d.deviation / 2)
  )
  .attr("height", height)
  .attr("fill", "currentColor")
  .attr("fill-opacity", "0.1");

groupsStats
  .append("path")
  .datum((d) => d3.mean(d[1]))
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("d", (d) => `M ${xScale(d)} 0 V ${height}`);
