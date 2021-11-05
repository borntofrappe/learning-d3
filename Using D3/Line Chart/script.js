// https://trends.google.com/trends/explore?date=2020-01-01%202021-11-04&geo=US&q=pikmin
const data = [
  { date: "2020-01-05", value: 10 },
  { date: "2020-01-12", value: 10 },
  { date: "2020-01-19", value: 10 },
  { date: "2020-01-26", value: 8 },
  { date: "2020-02-02", value: 14 },
  { date: "2020-02-09", value: 14 },
  { date: "2020-02-16", value: 10 },
  { date: "2020-02-23", value: 11 },
  { date: "2020-03-01", value: 15 },
  { date: "2020-03-08", value: 10 },
  { date: "2020-03-15", value: 10 },
  { date: "2020-03-22", value: 18 },
  { date: "2020-03-29", value: 11 },
  { date: "2020-04-05", value: 12 },
  { date: "2020-04-12", value: 14 },
  { date: "2020-04-19", value: 12 },
  { date: "2020-04-26", value: 12 },
  { date: "2020-05-03", value: 15 },
  { date: "2020-05-10", value: 15 },
  { date: "2020-05-17", value: 18 },
  { date: "2020-05-24", value: 13 },
  { date: "2020-05-31", value: 12 },
  { date: "2020-06-07", value: 16 },
  { date: "2020-06-14", value: 12 },
  { date: "2020-06-21", value: 15 },
  { date: "2020-06-28", value: 14 },
  { date: "2020-07-05", value: 10 },
  { date: "2020-07-12", value: 13 },
  { date: "2020-07-19", value: 17 },
  { date: "2020-07-26", value: 16 },
  { date: "2020-08-02", value: 58 },
  { date: "2020-08-09", value: 24 },
  { date: "2020-08-16", value: 21 },
  { date: "2020-08-23", value: 21 },
  { date: "2020-08-30", value: 22 },
  { date: "2020-09-06", value: 23 },
  { date: "2020-09-13", value: 19 },
  { date: "2020-09-20", value: 20 },
  { date: "2020-09-27", value: 15 },
  { date: "2020-10-04", value: 41 },
  { date: "2020-10-11", value: 34 },
  { date: "2020-10-18", value: 40 },
  { date: "2020-10-25", value: 100 },
  { date: "2020-11-01", value: 83 },
  { date: "2020-11-08", value: 64 },
  { date: "2020-11-15", value: 53 },
  { date: "2020-11-22", value: 49 },
  { date: "2020-11-29", value: 30 },
  { date: "2020-12-06", value: 28 },
  { date: "2020-12-13", value: 31 },
  { date: "2020-12-20", value: 39 },
  { date: "2020-12-27", value: 46 },
  { date: "2021-01-03", value: 24 },
  { date: "2021-01-10", value: 26 },
  { date: "2021-01-17", value: 29 },
  { date: "2021-01-24", value: 20 },
  { date: "2021-01-31", value: 23 },
  { date: "2021-02-07", value: 20 },
  { date: "2021-02-14", value: 22 },
  { date: "2021-02-21", value: 24 },
  { date: "2021-02-28", value: 20 },
  { date: "2021-03-07", value: 14 },
  { date: "2021-03-14", value: 15 },
  { date: "2021-03-21", value: 26 },
  { date: "2021-03-28", value: 20 },
  { date: "2021-04-04", value: 19 },
  { date: "2021-04-11", value: 16 },
  { date: "2021-04-18", value: 16 },
  { date: "2021-04-25", value: 17 },
  { date: "2021-05-02", value: 13 },
  { date: "2021-05-09", value: 14 },
  { date: "2021-05-16", value: 14 },
  { date: "2021-05-23", value: 15 },
  { date: "2021-05-30", value: 10 },
  { date: "2021-06-06", value: 12 },
  { date: "2021-06-13", value: 12 },
  { date: "2021-06-20", value: 21 },
  { date: "2021-06-27", value: 19 },
  { date: "2021-07-04", value: 18 },
  { date: "2021-07-11", value: 11 },
  { date: "2021-07-18", value: 11 },
  { date: "2021-07-25", value: 10 },
  { date: "2021-08-01", value: 10 },
  { date: "2021-08-08", value: 11 },
  { date: "2021-08-15", value: 10 },
  { date: "2021-08-22", value: 13 },
  { date: "2021-08-29", value: 13 },
  { date: "2021-09-05", value: 9 },
  { date: "2021-09-12", value: 11 },
  { date: "2021-09-19", value: 7 },
  { date: "2021-09-26", value: 14 },
  { date: "2021-10-03", value: 10 },
  { date: "2021-10-10", value: 14 },
  { date: "2021-10-17", value: 15 },
  { date: "2021-10-24", value: 63 },
  { date: "2021-10-31", value: 55 },
];

const {
  timeParse,
  timeFormat,
  scaleLinear,
  scaleTime,
  extent,
  max,
  mean,
  line,
  axisBottom,
  axisLeft,
} = d3;

const dimensions = {
  width: 640,
  height: 320,
  margin: {
    top: 20,
    right: 10,
    bottom: 20,
    left: 30,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const dateParser = timeParse("%Y-%m-%d");
const dateFormatter = timeFormat("%B %Y");

const xAccessor = (d) => dateParser(d.date);
const yAccessor = (d) => d.value;

const xScale = scaleTime()
  .domain(extent(data, xAccessor))
  .range([0, dimensions.boundedWidth]);

const yScale = scaleLinear()
  .domain([0, max(data, yAccessor)])
  .range([dimensions.boundedHeight, 0]);

const lineGenerator = line()
  .x((d) => xScale(xAccessor(d)))
  .y((d) => yScale(yAccessor(d)));

const xAxis = axisBottom(xScale)
  .ticks(8)
  .tickFormat((d) => dateFormatter(d));

const yAxis = axisLeft(yScale).ticks(4);

const yMean = mean(data, yAccessor);

const main = d3.select("body").append("main");
main.append("h1").text("Pikmin Bloom-ish");
main
  .append("p")
  .html(
    "Search interest in the United States for the word <strong>Pikmin</strong>, between <strong>January 2020</strong> and <strong>October 2021</strong>."
  );

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

bounds
  .append("path")
  .attr("d", lineGenerator(data))
  .attr("fill", "none")
  .attr("stroke", "currentColor");

const groupMean = bounds
  .append("g")
  .attr("transform", `translate(0 ${yScale(yMean)})`);

groupMean
  .append("path")
  .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-dasharray", "5");

groupMean
  .append("text")
  .attr("x", "5")
  .attr("y", "-5")
  .attr("fill", "currentColor")
  .attr("font-size", "14")
  .text("Mean: ")
  .append("tspan")
  .attr("font-weight", "700")
  .text(yMean);

const groupAxis = bounds.append("g");

groupAxis
  .append("g")
  .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
  .call(xAxis);

const groupYAxis = groupAxis.append("g").call(yAxis);

groupAxis.selectAll("line").remove();
groupAxis.selectAll("path").remove();

groupAxis
  .selectAll("text")
  .attr("font-size", "12")
  .attr("fill", "currentColor");

groupYAxis
  .selectAll(".tick")
  .append("path")
  .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("opacity", "0.2");

main
  .append("p")
  .text("Source: ")
  .append("a")
  .attr(
    "href",
    "https://trends.google.com/trends/explore?date=2020-01-01%202021-11-04&geo=US&q=pikmin"
  )
  .text("Google Trends");
