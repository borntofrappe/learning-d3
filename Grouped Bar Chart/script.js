const stackedBarChartComponent = () => {
  let data;
  let keys;

  const stack = d3.stack();
  const scaleX = d3.scaleBand().range([0, width]).padding(0.4);
  const scaleY = d3.scaleLinear().range([height, 0]);

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

  const timeParse = d3.timeParse("%Y-%m-%d");
  const timeFormat = d3.timeFormat("%b %-d");

  const stackedBar = (context) => {
    const series = stack.keys(keys)(data);

    const selection = context.selection ? context.selection() : context;

    scaleX.domain(data.map((d) => timeParse(d.date)));
    scaleY.domain([0, d3.max(series[series.length - 1], (d) => d[1])]);

    let groupAxisX = selection.selectAll("g.axis-x").data([null]);
    let groupAxisY = selection.selectAll("g.axis-y").data([null]);
    let groupsSeries = selection
      .selectAll("g.series")
      .data(series, (d) => d.key);

    groupAxisX = groupAxisX.merge(
      groupAxisX
        .enter()
        .append("g")
        .attr("class", "axis-x")
        .attr("transform", `translate(0 ${height})`)
    );

    groupAxisY = groupAxisY.merge(
      groupAxisY.enter().append("g").attr("class", "axis-y")
    );

    const groupsSeriesEnter = groupsSeries
      .enter()
      .append("g")
      .attr("class", "series")
      .attr("fill", (d) => scaleColor(d.key));

    let groupsSeriesExit = groupsSeries.exit();

    groupsSeriesEnter
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => scaleX(timeParse(d.data.date)))
      .attr("width", scaleX.bandwidth())
      .attr("y", (d) => scaleY(d[1]))
      .attr("height", (d) => scaleY(d[0]) - scaleY(d[1]));

    if (context !== selection) {
      groupAxisX = groupAxisX.transition(context);
      groupAxisY = groupAxisY.transition(context);

      groupsSeriesEnter
        .selectAll("rect")
        .attr("y", height)
        .attr("height", "0")
        .transition(context)
        .attr("y", (d) => scaleY(d[1]))
        .attr("height", (d) => scaleY(d[0]) - scaleY(d[1]));

      groupsSeries
        .selectAll("rect")
        .data((d) => d)
        .join(
          (enter) => {
            enter
              .append("rect")
              .attr("x", (d) => scaleX(timeParse(d.data.date)))
              .attr("width", scaleX.bandwidth())
              .attr("y", (d) => scaleY(d[0]))
              .attr("height", "0")
              .transition(context)
              .attr("y", (d) => scaleY(d[1]))
              .attr("height", (d) => scaleY(d[0]) - scaleY(d[1]));
          },
          (update) => {
            update
              .transition(context)
              .attr("x", (d) => scaleX(timeParse(d.data.date)))
              .attr("width", scaleX.bandwidth())
              .attr("y", (d) => scaleY(d[1]))
              .attr("height", (d) => scaleY(d[0]) - scaleY(d[1]));
          },
          (exit) => {
            exit.transition(context).attr("height", "0").remove();
          }
        );

      groupsSeriesExit
        .selectAll("rect")
        .transition(context)
        .attr("y", height)
        .attr("height", "0");

      groupsSeriesExit = groupsSeriesExit.transition(context);
    }

    groupsSeriesExit.remove();

    groupAxisX.call(axisX);
    groupAxisY.call(axisY);
  };

  stackedBar.data = function (d) {
    if (!arguments.length) return data;

    data = d;
    return this;
  };

  stackedBar.keys = function (d) {
    if (!arguments.length) return keys;

    keys = d;
    return this;
  };

  return stackedBar;
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
const scaleColor = d3.scaleOrdinal(d3.schemeTableau10).domain(keys);

const article = d3.select("body").append("article");
article.append("h2").text("Stacked Bar Chart");
const legendKeys = article.append("div").attr("class", "legend");

const legendsKeys = legendKeys
  .selectAll("span")
  .data(keys)
  .enter()
  .append("span")
  .text((d) => d);

legendsKeys
  .append("svg")
  .attr("viewBox", "0 0 1 1")
  .style("height", "1em")
  .attr("fill", (d) => scaleColor(d))
  .append("rect")
  .attr("width", "1")
  .attr("height", "1");

const width = 600;
const height = 375;
const margin = {
  top: 30,
  bottom: 25,
  left: 35,
  right: 10,
};

const svg = article
  .append("svg")
  .attr("class", "stacked-bar-chart")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const stackedBarChart = stackedBarChartComponent().data(data).keys(keys);
group.call(stackedBarChart);

legendsKeys.style("cursor", "pointer").on("click", function (e, key) {
  e.stopPropagation();

  const transition = d3.transition().duration(500).ease(d3.easeQuadInOut);

  legendsKeys
    .filter((d) => d !== key)
    .transition(transition)
    .style("opacity", "0.25")
    .style("filter", "grayscale(1)");

  group.transition(transition).call(stackedBarChart.keys([key]));

  d3.select(this).style("opacity", "1").style("filter", "grayscale(0)");
});

article.on("click", () => {
  const transition = d3.transition().duration(500).ease(d3.easeQuadInOut);

  legendsKeys
    .transition(transition)
    .style("opacity", "1")
    .style("filter", "grayscale(0)");

  group.transition(transition).call(stackedBarChart.keys(keys));
});
