const legend = () => {
  let scale = d3
    .scaleOrdinal()
    .domain(["tomato", "seagreen", "aqua"])
    .range(["tomato", "seagreen", "aqua"]);

  let width = 150;
  let height = 200;
  let fontSize = 24;
  let roundingRect = 0.2;
  let scaleOffset = d3.scaleBand();

  const dispatch = d3.dispatch("enter-item", "leave-area");

  const legend = (selection) => {
    const labels = scale.domain();
    scaleOffset.domain(labels).range([0, height]);

    const rect = selection
      .append("rect")
      .attr("x", "-5")
      .attr("width", width + "5")
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
      .attr("fill", (d) => scale(d));

    groups
      .append("text")
      .attr("x", fontSize + 10)
      .attr("dominant-baseline", "central")
      .attr("fill", "currentColor")
      .attr("font-size", fontSize)
      .text((d) => d);

    groups.on("mouseenter", function (e, d) {
      groups.attr("opacity", "0.1").attr("font-weight", "inherit");
      d3.select(this).attr("opacity", "1").attr("font-weight", "700");

      dispatch.call("enter-item", this, e, d);
    });

    rect.on("mouseleave", function (e) {
      groups.attr("opacity", "1").attr("font-weight", "inherit");

      dispatch.call("leave-area", this, e);
    });
  };

  legend.scale = function (value) {
    if (!arguments.length) return scale;

    scale = value;
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

  legend.on = function () {
    if (!arguments.length) return on;

    dispatch.on.apply(dispatch, arguments);
    return this;
  };

  return legend;
};

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

const legendComponent = legend()
  .scale(scaleColor)
  .width(legendWidth)
  .height(size)
  .fontSize(26)
  .roundingRect(0.5)
  .on("enter-item", (e, d) => {
    groupPaths
      .selectAll("path")
      .attr("opacity", "0.1")
      .filter(({ data }) => data.label === d)
      .attr("opacity", "1");

    const { value } = pieData.find(({ data }) => data.label === d).data;
    textHighlight.text(format(value));
  })
  .on("leave-area", function (e) {
    groupPaths.selectAll("path").attr("opacity", "1");
    textHighlight.text(format(total));
  });

groupLegend.call(legendComponent);
