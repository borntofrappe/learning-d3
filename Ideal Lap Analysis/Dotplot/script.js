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

const { select, extent, scaleLinear, scaleBand, axisLeft, axisBottom, format } =
  d3;

const dimensions = {
  width: 520,
  height: 450,
  margin: {
    top: 45,
    right: 20,
    bottom: 45,
    left: 45,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const xAccessor = (d) => {
  const [m, s, ms] = d.lap.split(/[:.]/).map((d) => parseInt(d, 10));
  return m * 60 + s + ms / 1000;
};

const yAccessor = (d) => d.key;

const xScale = scaleLinear()
  .domain(extent(data, xAccessor))
  .range([0, dimensions.boundedWidth])
  .nice();

const yScale = scaleBand()
  .domain(data.map((d) => yAccessor(d)))
  .range([0, dimensions.boundedHeight]);

const xAxis = axisBottom(xScale)
  .ticks(5)
  .tickFormat((d) => format("~")(d));
const yAxis = axisLeft(yScale);

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
    (d) => `translate(0 ${yScale(yAccessor(d)) + yScale.bandwidth() / 2})`
  );

dataGroups
  .append("circle")
  .attr("r", "5")
  .attr("fill", "currentColor")
  .attr("cx", (d) => xScale(xAccessor(d)));

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
  .attr("font-size", "12")
  .attr("font-family", "inherit");

xAxisGroup
  .append("text")
  .attr(
    "transform",
    `translate(${dimensions.boundedWidth / 2} ${dimensions.margin.bottom - 3})`
  )
  .attr("text-anchor", "middle")
  .attr("fill", "currentColor")
  .attr("font-size", "14")
  .attr("font-family", "inherit")
  .text("Lap time (s)");

xAxisGroup
  .append("path")
  .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-linecap", "square");

xAxisGroup
  .selectAll("g.tick")
  .filter((_, i) => i > 0)
  .append("path")
  .attr("d", "M 0 0 v -5")
  .attr("fill", "none")
  .attr("stroke", "currentColor");

yAxisGroup
  .append("text")
  .attr("transform", "translate(0 -10)")
  .attr("text-anchor", "start") // override default of the y axis
  .attr("fill", "currentColor")
  .attr("font-size", "18")
  .attr("font-weight", "bold")
  .attr("font-family", "inherit")
  .style("text-transform", "capitalize")
  .text("Classified order");

yAxisGroup
  .append("path")
  .attr("d", `M 0 0 v ${dimensions.boundedHeight}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-linecap", "square");

yAxisGroup
  .selectAll("g.tick")
  .append("path")
  .attr("d", "M 0 0 h 5")
  .attr("fill", "none")
  .attr("stroke", "currentColor");
