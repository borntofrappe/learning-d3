const data = [
  {
    title: "Ruby and Sapphire",
    sales: 1093299,
    breakdown: [
      { title: "Ruby", sales: 543962, "sell-through": 89.79 },
      { title: "Sapphire", sales: 549337, "sell-through": 90.11 },
    ],
  },
  {
    title: "Diamond and Pearl",
    sales: 1588734,
    breakdown: [
      { title: "Diamond", sales: 820047, "sell-through": 97.12 },
      { title: "Pearl", sales: 768687, "sell-through": 96.16 },
    ],
  },
  {
    title: "Black and White",
    sales: 2557779,
    breakdown: [
      { title: "Black", sales: 1323423, "sell-through": 89.21 },
      { title: "White", sales: 1234356, "sell-through": 86.09 },
    ],
  },
  {
    title: "X and Y",
    sales: 1866570,
    breakdown: [
      { title: "X", sales: 961003, "sell-through": 83.3 },
      { title: "Y", sales: 905567, "sell-through": 78.23 },
    ],
  },
  {
    title: "Sun and Moon",
    sales: 1590629,
    breakdown: [
      { title: "Sun", sales: 807540, "sell-through": 81.9 },
      { title: "Moon", sales: 783090, "sell-through": 79.83 },
    ],
  },
  {
    title: "Sword and Shield",
    sales: 894123,
    breakdown: [
      { title: "Sword", sales: 534306, "sell-through": 84.96 },
      { title: "Shield", sales: 359817, "sell-through": 90.26 },
    ],
  },
];

const polarAreaChart = () => {
  let data = [];
  let accessor = (d) => d;
  let size = 200;
  let gap = 0;
  let innerRadius = 0;
  let margin = 0;
  let colors = ["#cb362f", "#f6f6f6"];

  const polarAreaChart = (selection) => {
    const radius = (size - margin) / 2;

    const max = d3.max(data, accessor);

    const scaleRadius = d3.scaleLinear().domain([0, max]).range([0, radius]);

    const pie = d3
      .pie()
      .value((d) => 1)
      .sort(null);

    const pieData = pie(data);

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius((d) => scaleRadius(accessor(d.data)));

    const svg = selection
      .append("svg")
      .attr("viewBox", `0 0 ${size + margin * 2} ${size + margin * 2}`)
      .attr("width", size)
      .attr("height", size);

    const group = svg
      .append("g")
      .attr("transform", `translate(${margin} ${margin})`);

    const groupCenter = group
      .append("g")
      .attr("transform", `translate(${size / 2} ${size / 2}) rotate(-90)`);

    groupCenter
      .selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .style("color", (_, i) => `var(--color-${i + 1}, ${colors[i]})`)
      .attr("d", arc)
      .attr("fill", "currentColor");

    groupCenter
      .append("rect")
      .attr("transform", `rotate(90)`)
      .attr("x", -radius)
      .attr("y", -gap / 2)
      .attr("width", radius * 2)
      .attr("height", gap)
      .attr("fill", "#363636");

    groupCenter
      .append("circle")
      .attr("r", innerRadius)
      .attr("fill", "#f6f6f6")
      .attr("stroke", "#363636")
      .attr("stroke-width", gap / 2);

    groupCenter
      .append("circle")
      .attr("r", innerRadius * 0.4)
      .attr("fill", "#f6f6f6")
      .attr("stroke", "#363636")
      .attr("stroke-width", gap / 6);
  };

  polarAreaChart.data = function (value) {
    if (!arguments.length) return data;

    data = value;
    return this;
  };

  polarAreaChart.accessor = function (fn) {
    if (!arguments.length) return accessor;

    accessor = fn;
    return this;
  };

  polarAreaChart.size = function (value) {
    if (!arguments.length) return size;

    size = value;
    return this;
  };

  polarAreaChart.gap = function (value) {
    if (!arguments.length) return gap;

    gap = value;
    return this;
  };

  polarAreaChart.innerRadius = function (value) {
    if (!arguments.length) return innerRadius;

    innerRadius = value;
    return this;
  };

  polarAreaChart.margin = function (value) {
    if (!arguments.length) return margin;

    margin = value;
    return this;
  };

  polarAreaChart.colors = function (value) {
    if (!arguments.length) return colors;

    colors = value;
    return this;
  };

  return polarAreaChart;
};

const format = d3.format(",");
const size = 200;
const margin = 10;

const root = d3.select("body").append("div").attr("id", "root");

const header = root.append("header");

header.append("h1").text("Poké split");

header
  .append("p")
  .html(
    "Pokemon games have historically <span>(and usually)</span> released in pairs. Are there large differences in the sales of the different versions?"
  );

header
  .append("p")
  .text("Let's see how many copies were sold in Japan, just after one week.");

const articles = root
  .append("div")
  .attr("class", "grid")
  .selectAll("article")
  .data(data)
  .enter()
  .append("article");

articles.append("h2").text((d) => d.title);
articles
  .append("p")
  .html(
    (d) =>
      `${d.breakdown
        .map((d) => `<strong>${format(d.sales)}</strong>`)
        .join(" and ")}.`
  );

articles.each(function (d) {
  d3.select(this).call(
    polarAreaChart()
      .data(d.breakdown)
      .accessor((d) => d.sales)
      .size(size)
      .margin(margin)
      .gap(15)
      .innerRadius(20)
  );
});
