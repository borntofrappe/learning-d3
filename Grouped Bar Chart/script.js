// prettier-ignore
const data = [
    { "edition": "1994", "Final winner": 1, "Finalists": 2, "Semi-finalists": 4, "Quarter-finalists": 8 },
    { "edition": "1998", "Final winner": 1, "Finalists": 2, "Semi-finalists": 3, "Quarter-finalists": 6 },
    { "edition": "2002", "Final winner": 1, "Finalists": 2, "Semi-finalists": 3, "Quarter-finalists": 4 },
    { "edition": "2006", "Final winner": 1, "Finalists": 1, "Semi-finalists": 3, "Quarter-finalists": 6 },
    { "edition": "2010", "Final winner": 1, "Finalists": 2, "Semi-finalists": 4, "Quarter-finalists": 7 },
    { "edition": "2014", "Final winner": 1, "Finalists": 2, "Semi-finalists": 4, "Quarter-finalists": 8 },
    { "edition": "2018", "Final winner": 1, "Finalists": 2, "Semi-finalists": 3, "Quarter-finalists": 6 },
    { "edition": "2022", "Final winner": 1, "Finalists": 2, "Semi-finalists": 3, "Quarter-finalists": 7 },
  ];

const keys = Object.keys(data[0]).filter((d) => d !== "edition");

const width = 400;
const height = 300;

const margin = {
  top: 45,
  bottom: 10,
  left: 60,
  right: 10,
};

const xMax = d3.max(data, (d) =>
  d3.max(
    Object.entries(d)
      .filter((d) => d[0] !== "edition")
      .map((d) => d[1])
  )
);

const yScale = d3
  .scaleBand()
  .domain(data.map((d) => d.edition))
  .range([0, height])
  .padding(0.3);

const yScale2 = d3
  .scaleBand()
  .domain(keys)
  .range([0, yScale.bandwidth()])
  .padding(0.3);

const xScale = d3.scaleLinear().domain([0, xMax]).range([0, width]);

const colorScale = d3
  .scaleOrdinal(d3.schemePastel2)
  .domain(keys)
  .unknown("currentColor");

const xAxis = d3
  .axisTop(xScale)
  .tickSize(0)
  .tickPadding(10)
  .tickFormat((d) => (d % 2 === 0 ? "" : d));
const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(6);

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const defs = svg.append("defs");
defs
  .append("clipPath")
  .attr("id", "clip-path")
  .append("rect")
  .attr("x", 1)
  .attr("width", width - 2)
  .attr("height", height);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupAxis = group.append("g");
const groupData = group.append("g").attr("clip-path", "url(#clip-path)");

const groupAxisX = groupAxis.append("g").attr("class", "axis-x").call(xAxis);
const groupAxisY = groupAxis.append("g").attr("class", "axis-y").call(yAxis);

groupAxisX.select("path").remove();
groupAxisX
  .selectAll(".tick")
  .append("line")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.1")
  .attr("y1", height);

groupAxisX.selectAll("text").attr("font-weight", "700");
groupAxisY.selectAll("text").attr("font-size", "9");

groupAxis
  .append("text")
  .attr("x", width / 2)
  .attr("y", -margin.top + 1)
  .attr("font-size", "10")
  .attr("font-weight", "700")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "hanging")
  .text("Number of teams");

groupAxis
  .append("text")
  .attr("transform", `translate(${-margin.left + 1} ${height / 2}) rotate(-90)`)
  .attr("font-size", "10")
  .attr("font-weight", "700")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "hanging")
  .text("World Cup");

const groupsData = groupData
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(0 ${yScale(d.edition)})`);

groupsData
  .selectAll("rect")
  .data((d) => Object.entries(d).filter((d) => d[0] !== "edition"))
  .enter()
  .append("rect")
  .attr("y", (d) => yScale2(d[0]))
  .attr("width", (d) => xScale(d[1]))
  .attr("height", yScale2.bandwidth())
  .attr("fill", (d) => colorScale(d[0]));
