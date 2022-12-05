const data = [
  { value: 866.25, label: "Housing" },
  { value: 247.5, label: "Transportation" },
  { value: 371.25, label: "Food" },
  { value: 618.75, label: "Insurance" },
  { value: 297, label: "Utilities" },
  { value: 74.25, label: "Other" },
].sort((a, b) => b.value - a.value);

const format = (d) => `${d3.format(",")(d)}£`;
const total = data.reduce((acc, curr) => acc + curr.value, 0);

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
const legendWidth = 200;
const legendGap = 50;

const pie = d3
  .pie()
  .value((d) => d.value)
  .padAngle(padAngle);

const arc = d3.arc().innerRadius(radius).outerRadius(radius);

const pieData = pie(data);

const root = d3.select("body").append("div");

root.append("h1").text("Budget categories");

const svg = root
  .attr("id", "root")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${size + margin * 2 + legendGap + legendWidth} ${size + margin * 2}`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

const groupLegend = group
  .append("g")
  .attr("transform", `translate(${size + legendGap} 0)`);

const groupCenter = group
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`);

const textHighlight = groupCenter
  .append("text")
  .attr("fill", "currentColor")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "64")
  .attr("font-weight", "700")
  .text(format(total));

const groupPaths = groupCenter
  .append("g")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", strokeWidth)
  .attr("stroke-linecap", "round")
  .attr("stroke-linejoin", "round");

groupPaths
  .selectAll("path")
  .data(pieData)
  .enter()
  .append("path")
  .attr("d", arc)
  .style("color", "currentColor")
  .style(
    "color",
    (d, i) => `var(--color-${i + 1}, ${scaleColor(d.data.label)})`
  );

const legend = () => {
  let labels = ["A", "B", "C"];
  let width = 100;
  let height = 500;
  let fontSize = 24;
  let roundingRect = 0.2;

  const legend = (selection) => {
    const scaleOffset = d3.scaleBand().domain(labels).range([0, height]);

    selection
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "transparent")
      .attr("opacity", "0");

    const groups = selection
      .selectAll("g")
      .data(labels)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d) => `translate(0 ${scaleOffset(d) + scaleOffset.bandwidth() / 2})`
      );

    groups
      .append("rect")
      .attr("y", -fontSize / 2)
      .attr("width", fontSize)
      .attr("height", fontSize)
      .attr("rx", fontSize * roundingRect)
      .attr("fill", (d) => scaleColor(d));

    groups
      .append("text")
      .attr("x", fontSize + 10)
      .attr("dominant-baseline", "central")
      .attr("fill", "currentColor")
      .attr("font-size", fontSize)
      .text((d) => d);
  };

  legend.labels = function (values) {
    if (!arguments.length) return labels;

    labels = values;
    return this;
  };

  legend.width = function (value) {
    if (!arguments.length) return width;

    width = value;
    return this;
  };

  legend.height = function (value) {
    if (!arguments.length) return height;

    height = value;
    return this;
  };

  legend.scaleOffset = function (scale) {
    if (!arguments.length) return scaleOffset;

    scaleOffset = scale;
    return this;
  };

  legend.fontSize = function (value) {
    if (!arguments.length) return fontSize;

    fontSize = value;
    return this;
  };

  legend.roundingRect = function (value) {
    if (!arguments.length) return roundingRect;

    roundingRect = value;
    return this;
  };

  return legend;
};

groupLegend.call(
  legend()
    .labels(data.map((d) => d.label))
    .width(legendWidth)
    .height(size)
    .fontSize(24)
    .roundingRect(0.5)
);

// groupsLegend.on("mouseenter", function (e, d) {
//   groupsLegend.attr("opacity", "0.1").attr("font-weight", "inherit");
//   d3.select(this).attr("opacity", "1").attr("font-weight", "700");

//   groupPaths
//     .selectAll("path")
//     .attr("opacity", "0.1")
//     .filter(({ data }) => data.label === d)
//     .attr("opacity", "1");

//   const { value } = pieData.find(({ data }) => data.label === d).data;
//   textHighlight.text(format(value));
// });

// groupLegend.on("mouseleave", () => {
//   groupsLegend.attr("opacity", "1").attr("font-weight", "inherit");

//   groupPaths.selectAll("path").attr("opacity", "1");

//   textHighlight.text(format(total));
// });
