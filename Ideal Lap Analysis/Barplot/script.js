const data = [
  {
    name: "Bottas",
    key: "BOT",
    lap: "1:23.148",
    gap: 0.459,
  },
  {
    name: "Gasly",
    key: "GAS",
    lap: "1:23.357",
    gap: 0.204,
  },
  {
    name: "Verstappen",
    key: "VER",
    lap: "1:23.498",
    gap: 0.42,
  },
  {
    name: "Hamilton",
    key: "HAM",
    lap: "1:23.570",
    gap: 0.292,
  },
  {
    name: "Norris",
    key: "NOR",
    lap: "1:23.632",
    gap: 0.09,
  },
  {
    name: "Stroll",
    key: "STR",
    lap: "1:23.705",
    gap: 0.065,
  },
  {
    name: "Tsunoda",
    key: "TSU",
    lap: "1:23.735",
    gap: 0.271,
  },
  {
    name: "Perez",
    key: "PER",
    lap: "1:23.787",
    gap: 0.173,
  },
  {
    name: "Vettel",
    key: "VET",
    lap: "1:24.020",
    gap: 0.138,
  },
  {
    name: "Sainz",
    key: "SAI",
    lap: "1:24.033",
    gap: 0.222,
  },
  {
    name: "Ocon",
    key: "OCO",
    lap: "1:24.041",
    gap: 0.199,
  },
  {
    name: "Alonso",
    key: "ALO",
    lap: "1:24.056",
    gap: 0.462,
  },
  {
    name: "Leclerc",
    key: "LEC",
    lap: "1:24.095",
    gap: 0.429,
  },
  {
    name: "Ricciardo",
    key: "RIC",
    lap: "1:24.135",
    gap: 0.178,
  },
  {
    name: "Räikkönen",
    key: "RAI",
    lap: "1:24.631",
    gap: 0.335,
  },
  {
    name: "Russel",
    key: "RUS",
    lap: "1:24.954",
    gap: 0.237,
  },
  {
    name: "Giovinazzi",
    key: "GIO",
    lap: "1:25.072",
    gap: 0.422,
  },
  {
    name: "Latifi",
    key: "LAT",
    lap: "1:25.209",
    gap: 0.44,
  },
  {
    name: "Schumacher",
    key: "MSC",
    lap: "1:25.575",
    gap: 0.398,
  },
];

const { select, max, scaleLinear, scaleBand, axisLeft, axisBottom, format } =
  d3;

const dimensions = {
  width: 885,
  height: 240,
  margin: {
    top: 30,
    right: 20,
    bottom: 20,
    left: 55,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const xAccessor = (d) => d.key;
const yAccessor = (d) => d.gap;

const xScale = scaleBand()
  .domain(data.sort((a, b) => a.gap - b.gap).map((d) => xAccessor(d)))
  .range([0, dimensions.boundedWidth])
  .padding(0.1);

const yScale = scaleLinear()
  .domain([0, max(data, yAccessor)])
  .range([dimensions.boundedHeight, 0])
  .nice();

const xAxis = axisBottom(xScale);

const yAxis = axisLeft(yScale)
  .ticks(4)
  .tickFormat((d) => format("~")(d));

const wrapper = select("body")
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

const dataGroup = bounds.append("g");
const axisGroup = bounds.append("g");

const dataGroups = dataGroup
  .selectAll("g")
  .data(data)
  .join("g")
  .attr(
    "transform",
    (d) => `translate(${xScale(xAccessor(d))} ${yScale(yAccessor(d))})`
  );

dataGroups
  .append("rect")
  .attr("fill", "hsl(2, 100%, 44%)")
  .attr("height", (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
  .attr("width", xScale.bandwidth());

dataGroups
  .append("text")
  .attr("transform", `translate(${xScale.bandwidth() / 2} -3)`)
  .attr("text-anchor", "middle")
  .attr("fill", "currentColor")
  .attr("font-size", "12")
  .attr("font-family", "inherit")
  .text((d) => `+${yAccessor(d)}`);

const xAxisGroup = axisGroup
  .append("g")
  .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
  .call(xAxis);

const yAxisGroup = axisGroup.append("g").call(yAxis);

axisGroup.selectAll("line").remove();
axisGroup.selectAll("path").remove();

axisGroup
  .selectAll("text")
  .attr("fill", "currentColor")
  .attr("font-size", "14")
  .attr("font-family", "inherit");

xAxisGroup
  .append("path")
  .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-linecap", "square");

yAxisGroup
  .append("text")
  .attr("transform", "translate(0 -10)")
  .attr("text-anchor", "start") // override default of the y axis
  .attr("fill", "currentColor")
  .attr("font-size", "20")
  .attr("font-weight", "bold")
  .attr("font-family", "inherit")
  .style("text-transform", "capitalize")
  .text("Gap to ideal lap");

yAxisGroup
  .append("text")
  .attr(
    "transform",
    `translate(${-dimensions.margin.left + 14} ${
      dimensions.boundedHeight / 2
    }) rotate(-90)`
  )
  .attr("text-anchor", "middle")
  .attr("fill", "currentColor")
  .attr("font-size", "16")
  .attr("font-family", "inherit")
  .text("Gap (s)");

yAxisGroup
  .append("path")
  .attr("d", `M 0 0 v ${dimensions.boundedHeight}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-linecap", "square");

yAxisGroup.select("g.tick:last-of-type").remove();

yAxisGroup
  .selectAll("g.tick")
  .filter((_, i) => i > 0)
  .append("path")
  .attr("d", "M 0 0 h 5")
  .attr("fill", "none")
  .attr("stroke", "currentColor");
