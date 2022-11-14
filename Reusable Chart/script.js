const datasets = [
  [
    [10, 8.04],
    [8, 6.95],
    [13, 7.58],
    [9, 8.81],
    [11, 8.33],
    [14, 9.96],
    [6, 7.24],
    [4, 4.26],
    [12, 10.84],
    [7, 4.82],
    [5, 5.68],
  ],
  [
    [10, 9.14],
    [8, 8.14],
    [13, 8.74],
    [9, 8.77],
    [11, 9.26],
    [14, 8.1],
    [6, 6.13],
    [4, 3.1],
    [12, 9.13],
    [7, 7.26],
    [5, 4.74],
  ],
  [
    [10, 7.46],
    [8, 6.77],
    [13, 12.74],
    [9, 7.11],
    [11, 7.81],
    [14, 8.84],
    [6, 6.08],
    [4, 5.39],
    [12, 8.15],
    [7, 6.42],
    [5, 5.73],
  ],
  [
    [8, 6.58],
    [8, 5.76],
    [8, 7.71],
    [8, 8.84],
    [8, 8.47],
    [8, 7.04],
    [8, 5.25],
    [19, 12.5],
    [8, 5.56],
    [8, 7.91],
    [8, 6.89],
  ],
];

const width = 650;
const height = 400;
const margin = {
  top: 5,
  bottom: 65,
  left: 70,
  right: 5,
};
const radius = 10;
const strokeWidth = 1;
const fontSize = {
  label: 30,
  tick: 18,
};

const gap = {
  horizontal: 50,
  vertical: 50,
};

const totalWidth = (width + margin.left + margin.right) * 2 + gap.horizontal;
const totalHeight = (height + margin.top + margin.bottom) * 2 + gap.vertical;

const domainX = [
  0,
  d3.max(datasets, (dataset) => d3.max(dataset, (d) => d[0])),
];

const domainY = [
  0,
  d3.max(datasets, (dataset) => d3.max(dataset, (d) => d[1])),
];

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${totalWidth} ${totalHeight}`);

const group = svg.append("g");

group
  .append("g")
  .attr("transform", `translate(${0} ${0})`)
  .call(
    chart()
      .width(width)
      .height(height)
      .data(datasets[0])
      .margin(margin)
      .domainX(domainX)
      .domainY(domainY)
  );

group
  .append("g")
  .attr(
    "transform",
    `translate(${width + margin.left + margin.right + gap.horizontal} ${0})`
  )
  .call(
    chart()
      .width(width)
      .height(height)
      .data(datasets[1])
      .margin(margin)
      .domainX(domainX)
      .domainY(domainY)
  );

group
  .append("g")
  .attr(
    "transform",
    `translate(${0} ${height + margin.top + margin.bottom + gap.vertical})`
  )
  .call(
    chart()
      .width(width)
      .height(height)
      .data(datasets[2])
      .margin(margin)
      .domainX(domainX)
      .domainY(domainY)
  );

group
  .append("g")
  .attr(
    "transform",
    `translate(${width + margin.left + margin.right + gap.horizontal} ${
      height + margin.top + margin.bottom + gap.vertical
    })`
  )
  .call(
    chart()
      .width(width)
      .height(height)
      .data(datasets[3])
      .margin(margin)
      .domainX(domainX)
      .domainY(domainY)
  );

function chart() {
  let width;
  let height;
  let margin;
  let data;
  let domainX;
  let domainY;

  function my(selection) {
    const scaleX = d3.scaleLinear().domain(domainX).range([0, width]).nice();
    const scaleY = d3.scaleLinear().domain(domainY).range([height, 0]).nice();

    const axisX = d3.axisBottom(scaleX).ticks(8).tickSizeOuter(0);
    const axisY = d3.axisLeft(scaleY).ticks(6).tickSizeOuter(0);

    const group = selection
      .append("g")
      .attr("transform", `translate(${margin.left} ${margin.top})`);
    const groupAxis = group.append("g");
    const groupAxisLabels = groupAxis.append("g");

    const groupData = group.append("g");

    groupAxis
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", strokeWidth);

    groupAxis
      .append("g")
      .attr("class", "axis x-axis")
      .call(axisX)
      .attr("transform", `translate(0 ${height})`);

    groupAxis.append("g").attr("class", "axis y-axis").call(axisY);

    groupAxis.selectAll(".axis").select("path").remove();
    groupAxis.selectAll(".axis").select(".tick").remove();
    groupAxis.selectAll(".axis").select(".tick:last-of-type").remove();
    groupAxis.selectAll("text").attr("font-size", fontSize.tick);

    groupAxisLabels
      .attr("stroke", "currentColor")
      .attr("font-size", fontSize.label);

    groupAxisLabels
      .append("text")
      .attr(
        "transform",
        `translate(${width / 2} ${height + margin.bottom - 1})`
      )
      .attr("text-anchor", "middle")
      .text("x");

    groupAxisLabels
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "hanging")
      .attr("transform", `translate(${-margin.left} ${height / 2}) rotate(-90)`)
      .text("y");

    const groupsData = groupData
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("transform", ([x, y]) => `translate(${scaleX(x)} ${scaleY(y)})`)
      .attr("r", radius)
      .attr("fill", "var(--color-data, currentColor)")
      .attr("fill-opacity", "0.3")
      .attr("stroke", "var(--color-data, currentColor)")
      .attr("stroke-width", strokeWidth);

    groupData
      .append("path")
      .datum(() => {})
      .attr("d", () => {
        const { length: n } = data;
        const sumX = data.reduce((a, c) => a + c[0], 0);
        const sumY = data.reduce((a, c) => a + c[1], 0);
        const sumXY = data.reduce((a, c) => a + c[0] * c[1], 0);
        const sumX2 = data.reduce((a, c) => a + c[0] ** 2, 0);

        const a = (sumY * sumX2 - sumX * sumXY) / (n * sumX2 - sumX ** 2);
        const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);

        return `M ${[0, width]
          .map((x) => [x, scaleY(a + b * scaleX.invert(x))].join(" "))
          .join(" ")}`;
      })
      .attr("stroke", "currentColor")
      .attr("stroke-width", strokeWidth);
  }

  my.width = function (value) {
    if (!arguments.length) return width;

    width = value;
    return my;
  };

  my.height = function (value) {
    if (!arguments.length) return height;

    height = value;
    return my;
  };

  my.margin = function (value) {
    if (!arguments.length) return margin;

    margin = value;
    return my;
  };

  my.data = function (value) {
    if (!arguments.length) return data;

    data = value;
    return my;
  };

  my.domainX = function (value) {
    if (!arguments.length) return domainX;

    domainX = value;
    return my;
  };

  my.domainY = function (value) {
    if (!arguments.length) return domainY;

    domainY = value;
    return my;
  };

  return my;
}
