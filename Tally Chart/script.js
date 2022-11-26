const data = [
  { month: "January", value: 19 },
  { month: "February", value: 16 },
  { month: "March", value: 15 },
  { month: "April", value: 11 },
  { month: "May", value: 9 },
  { month: "June", value: 9 },
  { month: "July", value: 10 },
  { month: "August", value: 12 },
  { month: "September", value: 14 },
  { month: "October", value: 18 },
  { month: "November", value: 19 },
  { month: "December", value: 19 },
];

const defs = d3
  .select("body")
  .append("svg")
  .style("display", "none")
  .append("defs");

defs.append("path").attr("id", "mark-0").attr("d", "M 0 0 v 3");
defs.append("path").attr("id", "mark-1").attr("d", "M 1 0 v 3");
defs.append("path").attr("id", "mark-2").attr("d", "M 2 0 v 3");
defs.append("path").attr("id", "mark-3").attr("d", "M 3 0 v 3");
defs.append("path").attr("id", "mark-4").attr("d", "M -0.5 2.4 l 4 -1.8");

const svg = d3.select("body").append("svg").attr("viewBox", "0 0 5 5");
const group = svg.append("g").attr("transform", "translate(1 1)");
const groupMarks = group
  .append("g")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.5")
  .attr("stroke-linecap", "square");

groupMarks
  .selectAll("use")
  .data(Array(5))
  .enter()
  .append("use")
  .attr("href", (_, i) => `#mark-${i}`);
