// prettier-ignore
const data = [
    { date: "2022-12-03", "Email & messages": 0.16, Writing: 0.03, Coding: 0.42, Designing: 0.16, Research: 0.05, Paperwork: 0.03, Planning: 0.14 },
    { date: "2022-12-04", "Email & messages": 0.09, Writing: 0.23, Coding: 0.32, Designing: 0.15, Research: 0.1, Paperwork: 0.03, Planning: 0.07 },
    { date: "2022-12-05", "Email & messages": 0.11, Writing: 0.24, Coding: 0.27, Designing: 0.11, Research: 0.16, Paperwork: 0.06, Planning: 0.05 },
    { date: "2022-12-06", "Email & messages": 0.06, Writing: 0.15, Coding: 0.37, Designing: 0.33, Research: 0.03, Paperwork: 0, Planning: 0.05 },
    { date: "2022-12-07", "Email & messages": 0, Writing: 0.06, Coding: 0.7, Designing: 0.07, Research: 0.03, Paperwork: 0.04, Planning: 0.09 },
    { date: "2022-12-08", "Email & messages": 0.05, Writing: 0.15, Coding: 0.38, Designing: 0.22, Research: 0.06, Paperwork: 0.05, Planning: 0.1 },
    { date: "2022-12-09", "Email & messages": 0.07, Writing: 0.1, Coding: 0.35, Designing: 0.22, Research: 0.08, Paperwork: 0.03, Planning: 0.15 },
    { date: "2022-12-10", "Email & messages": 0.01, Writing: 0.38, Coding: 0.3, Designing: 0.1, Research: 0.02, Paperwork: 0.05, Planning: 0.13 },
    { date: "2022-12-11", "Email & messages": 0.19, Writing: 0.02, Coding: 0.52, Designing: 0.08, Research: 0.02, Paperwork: 0.04, Planning: 0.13 },
    { date: "2022-12-12", "Email & messages": 0.07, Writing: 0.3, Coding: 0.01, Designing: 0.41, Research: 0.14, Paperwork: 0.03, Planning: 0.04 },
    { date: "2022-12-13", "Email & messages": 0.12, Writing: 0.04, Coding: 0.17, Designing: 0.37, Research: 0.15, Paperwork: 0.06, Planning: 0.09 },
    { date: "2022-12-14", "Email & messages": 0.14, Writing: 0.39, Coding: 0.23, Designing: 0.16, Research: 0.03, Paperwork: 0.05, Planning: 0 },
    { date: "2022-12-15", "Email & messages": 0.12, Writing: 0.08, Coding: 0.51, Designing: 0.18, Research: 0.02, Paperwork: 0.03, Planning: 0.06 },
    { date: "2022-12-16", "Email & messages": 0.11, Writing: 0.19, Coding: 0.25, Designing: 0.28, Research: 0.12, Paperwork: 0, Planning: 0.05 }
];

const width = 500;
const height = 350;
const margin = {
  top: 10,
  bottom: 25,
  left: 35,
  right: 10,
};

const timeParse = d3.timeParse("%Y-%m-%d");
const timeFormat = d3.timeFormat("%b %-d");

const keys = Object.keys(data[0]).filter((d) => d !== "date");

const stack = d3.stack().keys(keys);

const series = stack(data);

const scaleX = d3
  .scaleBand()
  .domain(data.map((d) => timeParse(d.date)))
  .range([0, width])
  .padding(0.4);

const scaleY = d3
  .scaleLinear()
  .domain([0, d3.max(series[series.length - 1], (d) => d[1])])
  .range([height, 0])
  .nice();

const scaleColor = d3.scaleOrdinal(d3.schemeTableau10).domain(keys);

const axisX = d3
  .axisBottom(scaleX)
  .tickFormat((d) => timeFormat(d))
  .tickSize(0)
  .tickPadding(10);

const axisY = d3
  .axisLeft(scaleY)
  .ticks(4)
  .tickFormat((d) => (d ? `${d} h` : ""))
  .tickSize(0)
  .tickPadding(6);

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

const groupData = group.append("g");
const groupAxis = group.append("g");

groupAxis.append("g").attr("transform", `translate(0 ${height})`).call(axisX);
groupAxis.append("g").call(axisY);

const groupsData = groupData
  .selectAll("g")
  .data(series)
  .enter()
  .append("g")
  .attr("fill", (d) => scaleColor(d.key));

groupsData
  .selectAll("rect")
  .data((d) => d)
  .enter()
  .append("rect")
  .attr("x", (d) => scaleX(timeParse(d.data.date)))
  .attr("width", scaleX.bandwidth())
  .attr("y", (d) => scaleY(d[1]))
  .attr("height", (d) => scaleY(d[0]) - scaleY(d[1]));
