const stackedBarChartComponent = () => {
  // prettier-ignore
  let data = [
    { apples: 3840, bananas: 1920, cherries: 960, durians: 400 },
    { apples: 1600, bananas: 1440, cherries: 960, durians: 400 },
    { apples: 640, bananas: 960, cherries: 640, durians: 400 },
    { apples: 320, bananas: 480, cherries: 640, durians: 400 },
  ];
  let keys = Object.keys(data[0]);
  let xAccessor = (_, i) => i;
  let xFormat = (d) => d;
  let valueFormat = (d) => d;
  let colorScale = d3.scaleOrdinal(d3.schemeSet2).domain(keys);
  let width = 500;
  let height = 250;

  const stack = d3.stack();
  const xScale = d3.scaleBand().padding(0.4);
  const yScale = d3.scaleLinear();

  const xAxis = d3.axisBottom(xScale).tickSize(0).tickPadding(10);
  const yAxis = d3.axisLeft(yScale).ticks(4).tickSize(0).tickPadding(6);

  const stackedBarChartComponent = (context) => {
    const series = stack.keys(keys)(data);

    const selection = context.selection ? context.selection() : context;

    xScale.domain(data.map(xAccessor)).range([0, width]);

    yScale
      .domain([0, d3.max(series[series.length - 1], (d) => d[1])])
      .range([height, 0]);

    xAxis.tickFormat((d) => xFormat(d));
    yAxis.tickFormat((d) => valueFormat(d));

    let groupXAxis = selection.selectAll("g.axis-x").data([null]);
    let groupYAxis = selection.selectAll("g.axis-y").data([null]);
    let groupsSeries = selection
      .selectAll("g.series")
      .data(series, (d) => d.key);

    groupXAxis = groupXAxis.merge(
      groupXAxis
        .enter()
        .append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0 ${height})`)
    );

    groupYAxis = groupYAxis.merge(
      groupYAxis.enter().append("g").attr("class", "axis-y")
    );

    const groupsSeriesEnter = groupsSeries
      .enter()
      .append("g")
      .attr("class", "series")
      .attr("fill", (d) => colorScale(d.key));

    let groupsSeriesExit = groupsSeries.exit();

    if (context !== selection) {
      selection.selectAll("*").interrupt();

      groupXAxis = groupXAxis.transition(context);
      groupYAxis = groupYAxis.transition(context);

      groupsSeriesEnter
        .selectAll("rect")
        .data((d) => d)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(xAccessor(d.data, i)))
        .attr("width", xScale.bandwidth())
        .attr("y", height)
        .attr("height", "0")
        .transition(context)
        .attr("y", (d) => yScale(d[1]))
        .attr("height", (d) => yScale(d[0]) - yScale(d[1]));

      groupsSeries
        .selectAll("rect")
        .data((d) => d)
        .join(
          (enter) => {
            enter
              .append("rect")
              .attr("x", (d, i) => xScale(xAccessor(d.data, i)))
              .attr("width", xScale.bandwidth())
              .attr("y", height)
              .attr("height", "0")
              .transition(context)
              .attr("y", (d) => yScale(d[1]))
              .attr("height", (d) => yScale(d[0]) - yScale(d[1]));
          },
          (update) => {
            update
              .transition(context)
              .attr("x", (d, i) => xScale(xAccessor(d.data, i)))
              .attr("width", xScale.bandwidth())
              .attr("y", (d) => yScale(d[1]))
              .attr("height", (d) => yScale(d[0]) - yScale(d[1]));
          },
          (exit) => {
            exit
              .transition(context)
              .attr("y", height)
              .attr("height", "0")
              .remove();
          }
        );

      groupsSeriesExit
        .selectAll("rect")
        .transition(context)
        .attr("y", height)
        .attr("height", "0");

      groupsSeriesExit = groupsSeriesExit.transition(context);
    } else {
      groupsSeriesEnter
        .selectAll("rect")
        .data((d) => d)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(xAccessor(d.data, i)))
        .attr("width", xScale.bandwidth())
        .attr("y", (d) => yScale(d[1]))
        .attr("height", (d) => yScale(d[0]) - yScale(d[1]));

      groupsSeries
        .selectAll("rect")
        .data((d) => d)
        .join(
          (enter) => {
            enter
              .append("rect")
              .attr("x", (d, i) => xScale(xAccessor(d.data, i)))
              .attr("width", xScale.bandwidth())
              .attr("y", (d) => yScale(d[1]))
              .attr("height", (d) => yScale(d[0]) - yScale(d[1]));
          },
          (update) => {
            update
              .attr("x", (d, i) => xScale(xAccessor(d.data, i)))
              .attr("width", xScale.bandwidth())
              .attr("y", (d) => yScale(d[1]))
              .attr("height", (d) => yScale(d[0]) - yScale(d[1]));
          },
          (exit) => {
            exit.remove();
          }
        );

      groupsSeriesExit.selectAll("rect").remove();
    }

    groupsSeriesExit.remove();

    groupXAxis.call(xAxis);
    groupYAxis.call(yAxis);
  };

  stackedBarChartComponent.data = function (array) {
    if (!arguments.length) return data;

    data = array;
    return this;
  };

  stackedBarChartComponent.keys = function (array) {
    if (!arguments.length) return keys;

    keys = array;
    return this;
  };

  stackedBarChartComponent.xAccessor = function (fn) {
    if (!arguments.length) return xAccessor;

    xAccessor = fn;
    return this;
  };

  stackedBarChartComponent.xFormat = function (fn) {
    if (!arguments.length) return xFormat;

    xFormat = fn;
    return this;
  };

  stackedBarChartComponent.valueFormat = function (fn) {
    if (!arguments.length) return valueFormat;

    valueFormat = fn;
    return this;
  };

  stackedBarChartComponent.colorScale = function (scale) {
    if (!arguments.length) return colorScale;

    colorScale = scale;
    return this;
  };

  stackedBarChartComponent.width = function (number) {
    if (!arguments.length) return width;

    width = number;
    return this;
  };

  stackedBarChartComponent.height = function (number) {
    if (!arguments.length) return height;

    height = number;
    return this;
  };

  return stackedBarChartComponent;
};

// prettier-ignore
const data = [
  { "date": "2022-12-03", "Email & messages": 1, "Writing": 2, "Coding": 3, "Designing": 1, "Research": 0, "Paperwork": 0, "Planning": 1 },
  { "date": "2022-12-04", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 1, "Research": 1, "Paperwork": 0, "Planning": 0 },
  { "date": "2022-12-05", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 0, "Research": 1, "Paperwork": 2, "Planning": 0 },
  { "date": "2022-12-06", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 2, "Research": 0, "Paperwork": 0, "Planning": 0 },
  { "date": "2022-12-07", "Email & messages": 0, "Writing": 0, "Coding": 5, "Designing": 0, "Research": 0, "Paperwork": 0, "Planning": 2 },
  { "date": "2022-12-08", "Email & messages": 0, "Writing": 1, "Coding": 3, "Designing": 1, "Research": 0, "Paperwork": 0, "Planning": 0 },
  { "date": "2022-12-09", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 2, "Research": 0, "Paperwork": 0, "Planning": 1 },
  { "date": "2022-12-10", "Email & messages": 0, "Writing": 3, "Coding": 2, "Designing": 0, "Research": 0, "Paperwork": 0, "Planning": 1 },
  { "date": "2022-12-11", "Email & messages": 1, "Writing": 0, "Coding": 4, "Designing": 0, "Research": 2, "Paperwork": 0, "Planning": 1 },
  { "date": "2022-12-12", "Email & messages": 0, "Writing": 2, "Coding": 0, "Designing": 3, "Research": 1, "Paperwork": 0, "Planning": 0 },
  { "date": "2022-12-13", "Email & messages": 0, "Writing": 0, "Coding": 1, "Designing": 2, "Research": 1, "Paperwork": 2, "Planning": 0 },
  { "date": "2022-12-14", "Email & messages": 1, "Writing": 3, "Coding": 1, "Designing": 1, "Research": 0, "Paperwork": 1, "Planning": 0 },
  { "date": "2022-12-15", "Email & messages": 1, "Writing": 0, "Coding": 4, "Designing": 1, "Research": 0, "Paperwork": 0, "Planning": 0 },
  { "date": "2022-12-16", "Email & messages": 1, "Writing": 1, "Coding": 2, "Designing": 2, "Research": 0, "Paperwork": 0, "Planning": 1 }
];

const keys = Object.keys(data[0]).filter((d) => d !== "date");

const xAccessor = (d) => d.date;

const timeParse = d3.timeParse("%Y-%m-%d");
const timeFormat = d3.timeFormat("%b %-d");
const xFormat = (d) => timeFormat(timeParse(d));

const valueFormat = (d) => (d ? `${d} h` : "");

const colorScale = d3
  .scaleOrdinal(d3.schemeTableau10)
  .domain(keys)
  .unknown("currentColor");

const width = 600;
const height = 375;
const margin = {
  top: 10,
  bottom: 25,
  left: 40,
  right: 10,
};

const stackedBarChart = stackedBarChartComponent()
  .data(data)
  .keys(keys)
  .xAccessor(xAccessor)
  .xFormat(xFormat)
  .valueFormat(valueFormat)
  .colorScale(colorScale)
  .width(width)
  .height(height);

const root = d3.select("body").append("div").attr("id", "root");
root.append("h1").text("Stacked Bar Chart Component");

const svg = root
  .append("svg")
  .attr("class", "chart")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

group.call(stackedBarChart);

const form = root.append("form").on("submit", (e) => e.preventDefault());

const labels = form
  .selectAll("label")
  .data(["Show all", ...keys])
  .enter()
  .append("label")
  .text((d) => d);

labels
  .append("input")
  .attr("type", "radio")
  .attr("name", "key")
  .attr("value", (d) => d);

labels
  .append("svg")
  .attr("viewBox", "0 0 1 1")
  .attr("height", "1em")
  .attr("fill", (d) => colorScale(d))
  .append("rect")
  .attr("width", "1")
  .attr("height", "1");

form
  .select("label")
  .style("opacity", "0")
  .style("visibility", "hidden")
  .select("input")
  .property("checked", true);

labels.style("cursor", "pointer");

form.on("input", (e) => {
  const { value: key } = e.target;
  const transition = d3.transition().duration(500).ease(d3.easeQuadInOut);

  if (key === "Show all") {
    labels
      .transition(transition)
      .style("opacity", "1")
      .style("filter", "grayscale(0)");

    form
      .select("label")
      .transition(transition)
      .style("opacity", "0")
      .style("visibility", "hidden");

    group.transition(transition).call(stackedBarChart.keys(keys));
  } else {
    labels
      .filter((d) => d !== key)
      .transition(transition)
      .style("opacity", "0.25")
      .style("filter", "grayscale(1)");

    form
      .select("label")
      .transition(transition)
      .style("filter", "grayscale(0)")
      .style("opacity", "1")
      .style("visibility", "visible");

    labels
      .filter((d) => d === key)
      .style("opacity", "1")
      .style("filter", "grayscale(0)");

    group.transition(transition).call(stackedBarChart.keys([key]));
  }
});
