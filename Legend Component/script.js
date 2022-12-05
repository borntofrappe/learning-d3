const data = [
  { value: 445757, label: "Solid fossil fuels" },
  { value: 4554664, label: "Natural gas" },
  { value: 6372414, label: "Petroleum" },
  { value: 1766433, label: "Renewables" },
].sort((a, b) => b.value - a.value);

const format = d3.format(",");

const scaleColor = d3
  .scaleOrdinal()
  .domain(data.map((d) => d.label))
  .range([
    "hsl(238, 50%, 53%)",
    "hsl(215, 70%, 67%)",
    "hsl(195, 83%, 67%)",
    "hsl(192, 100%, 94%)",
  ]);

const size = 500;
const margin = 50;
const strokeWidth = 36;
const padAngle = 0.15;
const radius = size / 2 - strokeWidth / 2;

const pie = d3
  .pie()
  .value((d) => d.value)
  .padAngle(padAngle);

const arc = d3.arc().innerRadius(radius).outerRadius(radius);

const pieData = pie(data);

const root = d3.select("body").append("div");

root.append("h1").text("Energy sources");

const svg = root
  .attr("id", "root")
  .append("svg")
  .attr("viewBox", `0 0 ${size + margin * 2} ${size + margin * 2}`);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

const groupCenter = group
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`);

groupCenter
  .selectAll("path")
  .data(pieData)
  .enter()
  .append("path")
  .attr("d", arc)
  .style("color", "currentColor")
  .style(
    "color",
    (d, i) => `var(--color-${i + 1}, ${scaleColor(d.data.label)})`
  )
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", strokeWidth)
  .attr("stroke-linecap", "round")
  .attr("stroke-linejoin", "round");
