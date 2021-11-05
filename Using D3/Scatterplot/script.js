/* https://www.stat.cmu.edu/~larry/all-of-statistics/=data/faithful.dat
eruptions: eruption time in minutes
waiting: waiting time to next eruption
*/
const data = [
  { eruptions: 3.6, waiting: 79 },
  { eruptions: 1.8, waiting: 54 },
  { eruptions: 3.333, waiting: 74 },
  { eruptions: 2.283, waiting: 62 },
  { eruptions: 4.533, waiting: 85 },
  { eruptions: 2.883, waiting: 55 },
  { eruptions: 4.7, waiting: 88 },
  { eruptions: 3.6, waiting: 85 },
  { eruptions: 1.95, waiting: 51 },
  { eruptions: 4.35, waiting: 85 },
  { eruptions: 1.833, waiting: 54 },
  { eruptions: 3.917, waiting: 84 },
  { eruptions: 4.2, waiting: 78 },
  { eruptions: 1.75, waiting: 47 },
  { eruptions: 4.7, waiting: 83 },
  { eruptions: 2.167, waiting: 52 },
  { eruptions: 1.75, waiting: 62 },
  { eruptions: 4.8, waiting: 84 },
  { eruptions: 1.6, waiting: 52 },
  { eruptions: 4.25, waiting: 79 },
  { eruptions: 1.8, waiting: 51 },
  { eruptions: 1.75, waiting: 47 },
  { eruptions: 3.45, waiting: 78 },
  { eruptions: 3.067, waiting: 69 },
  { eruptions: 4.533, waiting: 74 },
  { eruptions: 3.6, waiting: 83 },
  { eruptions: 1.967, waiting: 55 },
  { eruptions: 4.083, waiting: 76 },
  { eruptions: 3.85, waiting: 78 },
  { eruptions: 4.433, waiting: 79 },
  { eruptions: 4.3, waiting: 73 },
  { eruptions: 4.467, waiting: 77 },
  { eruptions: 3.367, waiting: 66 },
  { eruptions: 4.033, waiting: 80 },
  { eruptions: 3.833, waiting: 74 },
  { eruptions: 2.017, waiting: 52 },
  { eruptions: 1.867, waiting: 48 },
  { eruptions: 4.833, waiting: 80 },
  { eruptions: 1.833, waiting: 59 },
  { eruptions: 4.783, waiting: 90 },
  { eruptions: 4.35, waiting: 80 },
  { eruptions: 1.883, waiting: 58 },
  { eruptions: 4.567, waiting: 84 },
  { eruptions: 1.75, waiting: 58 },
  { eruptions: 4.533, waiting: 73 },
  { eruptions: 3.317, waiting: 83 },
  { eruptions: 3.833, waiting: 64 },
  { eruptions: 2.1, waiting: 53 },
  { eruptions: 4.633, waiting: 82 },
  { eruptions: 2.0, waiting: 59 },
  { eruptions: 4.8, waiting: 75 },
  { eruptions: 4.716, waiting: 90 },
  { eruptions: 1.833, waiting: 54 },
  { eruptions: 4.833, waiting: 80 },
  { eruptions: 1.733, waiting: 54 },
  { eruptions: 4.883, waiting: 83 },
  { eruptions: 3.717, waiting: 71 },
  { eruptions: 1.667, waiting: 64 },
  { eruptions: 4.567, waiting: 77 },
  { eruptions: 4.317, waiting: 81 },
  { eruptions: 2.233, waiting: 59 },
  { eruptions: 4.5, waiting: 84 },
  { eruptions: 1.75, waiting: 48 },
  { eruptions: 4.8, waiting: 82 },
  { eruptions: 1.817, waiting: 60 },
  { eruptions: 4.4, waiting: 92 },
  { eruptions: 4.167, waiting: 78 },
  { eruptions: 4.7, waiting: 78 },
  { eruptions: 2.067, waiting: 65 },
  { eruptions: 4.7, waiting: 73 },
  { eruptions: 4.033, waiting: 82 },
  { eruptions: 1.967, waiting: 56 },
  { eruptions: 4.5, waiting: 79 },
  { eruptions: 4.0, waiting: 71 },
  { eruptions: 1.983, waiting: 62 },
  { eruptions: 5.067, waiting: 76 },
  { eruptions: 2.017, waiting: 60 },
  { eruptions: 4.567, waiting: 78 },
  { eruptions: 3.883, waiting: 76 },
  { eruptions: 3.6, waiting: 83 },
  { eruptions: 4.133, waiting: 75 },
  { eruptions: 4.333, waiting: 82 },
  { eruptions: 4.1, waiting: 70 },
  { eruptions: 2.633, waiting: 65 },
  { eruptions: 4.067, waiting: 73 },
  { eruptions: 4.933, waiting: 88 },
  { eruptions: 3.95, waiting: 76 },
  { eruptions: 4.517, waiting: 80 },
  { eruptions: 2.167, waiting: 48 },
  { eruptions: 4.0, waiting: 86 },
  { eruptions: 2.2, waiting: 60 },
  { eruptions: 4.333, waiting: 90 },
  { eruptions: 1.867, waiting: 50 },
  { eruptions: 4.817, waiting: 78 },
  { eruptions: 1.833, waiting: 63 },
  { eruptions: 4.3, waiting: 72 },
  { eruptions: 4.667, waiting: 84 },
  { eruptions: 3.75, waiting: 75 },
  { eruptions: 1.867, waiting: 51 },
  { eruptions: 4.9, waiting: 82 },
  { eruptions: 2.483, waiting: 62 },
  { eruptions: 4.367, waiting: 88 },
  { eruptions: 2.1, waiting: 49 },
  { eruptions: 4.5, waiting: 83 },
  { eruptions: 4.05, waiting: 81 },
  { eruptions: 1.867, waiting: 47 },
  { eruptions: 4.7, waiting: 84 },
  { eruptions: 1.783, waiting: 52 },
  { eruptions: 4.85, waiting: 86 },
  { eruptions: 3.683, waiting: 81 },
  { eruptions: 4.733, waiting: 75 },
  { eruptions: 2.3, waiting: 59 },
  { eruptions: 4.9, waiting: 89 },
  { eruptions: 4.417, waiting: 79 },
  { eruptions: 1.7, waiting: 59 },
  { eruptions: 4.633, waiting: 81 },
  { eruptions: 2.317, waiting: 50 },
  { eruptions: 4.6, waiting: 85 },
  { eruptions: 1.817, waiting: 59 },
  { eruptions: 4.417, waiting: 87 },
  { eruptions: 2.617, waiting: 53 },
  { eruptions: 4.067, waiting: 69 },
  { eruptions: 4.25, waiting: 77 },
  { eruptions: 1.967, waiting: 56 },
  { eruptions: 4.6, waiting: 88 },
  { eruptions: 3.767, waiting: 81 },
  { eruptions: 1.917, waiting: 45 },
  { eruptions: 4.5, waiting: 82 },
  { eruptions: 2.267, waiting: 55 },
  { eruptions: 4.65, waiting: 90 },
  { eruptions: 1.867, waiting: 45 },
  { eruptions: 4.167, waiting: 83 },
  { eruptions: 2.8, waiting: 56 },
  { eruptions: 4.333, waiting: 89 },
  { eruptions: 1.833, waiting: 46 },
  { eruptions: 4.383, waiting: 82 },
  { eruptions: 1.883, waiting: 51 },
  { eruptions: 4.933, waiting: 86 },
  { eruptions: 2.033, waiting: 53 },
  { eruptions: 3.733, waiting: 79 },
  { eruptions: 4.233, waiting: 81 },
  { eruptions: 2.233, waiting: 60 },
  { eruptions: 4.533, waiting: 82 },
  { eruptions: 4.817, waiting: 77 },
  { eruptions: 4.333, waiting: 76 },
  { eruptions: 1.983, waiting: 59 },
  { eruptions: 4.633, waiting: 80 },
  { eruptions: 2.017, waiting: 49 },
  { eruptions: 5.1, waiting: 96 },
  { eruptions: 1.8, waiting: 53 },
  { eruptions: 5.033, waiting: 77 },
  { eruptions: 4.0, waiting: 77 },
  { eruptions: 2.4, waiting: 65 },
  { eruptions: 4.6, waiting: 81 },
  { eruptions: 3.567, waiting: 71 },
  { eruptions: 4.0, waiting: 70 },
  { eruptions: 4.5, waiting: 81 },
  { eruptions: 4.083, waiting: 93 },
  { eruptions: 1.8, waiting: 53 },
  { eruptions: 3.967, waiting: 89 },
  { eruptions: 2.2, waiting: 45 },
  { eruptions: 4.15, waiting: 86 },
  { eruptions: 2.0, waiting: 58 },
  { eruptions: 3.833, waiting: 78 },
  { eruptions: 3.5, waiting: 66 },
  { eruptions: 4.583, waiting: 76 },
  { eruptions: 2.367, waiting: 63 },
  { eruptions: 5.0, waiting: 88 },
  { eruptions: 1.933, waiting: 52 },
  { eruptions: 4.617, waiting: 93 },
  { eruptions: 1.917, waiting: 49 },
  { eruptions: 2.083, waiting: 57 },
  { eruptions: 4.583, waiting: 77 },
  { eruptions: 3.333, waiting: 68 },
  { eruptions: 4.167, waiting: 81 },
  { eruptions: 4.333, waiting: 81 },
  { eruptions: 4.5, waiting: 73 },
  { eruptions: 2.417, waiting: 50 },
  { eruptions: 4.0, waiting: 85 },
  { eruptions: 4.167, waiting: 74 },
  { eruptions: 1.883, waiting: 55 },
  { eruptions: 4.583, waiting: 77 },
  { eruptions: 4.25, waiting: 83 },
  { eruptions: 3.767, waiting: 83 },
  { eruptions: 2.033, waiting: 51 },
  { eruptions: 4.433, waiting: 78 },
  { eruptions: 4.083, waiting: 84 },
  { eruptions: 1.833, waiting: 46 },
  { eruptions: 4.417, waiting: 83 },
  { eruptions: 2.183, waiting: 55 },
  { eruptions: 4.8, waiting: 81 },
  { eruptions: 1.833, waiting: 57 },
  { eruptions: 4.8, waiting: 76 },
  { eruptions: 4.1, waiting: 84 },
  { eruptions: 3.966, waiting: 77 },
  { eruptions: 4.233, waiting: 81 },
  { eruptions: 3.5, waiting: 87 },
  { eruptions: 4.366, waiting: 77 },
  { eruptions: 2.25, waiting: 51 },
  { eruptions: 4.667, waiting: 78 },
  { eruptions: 2.1, waiting: 60 },
  { eruptions: 4.35, waiting: 82 },
  { eruptions: 4.133, waiting: 91 },
  { eruptions: 1.867, waiting: 53 },
  { eruptions: 4.6, waiting: 78 },
  { eruptions: 1.783, waiting: 46 },
  { eruptions: 4.367, waiting: 77 },
  { eruptions: 3.85, waiting: 84 },
  { eruptions: 1.933, waiting: 49 },
  { eruptions: 4.5, waiting: 83 },
  { eruptions: 2.383, waiting: 71 },
  { eruptions: 4.7, waiting: 80 },
  { eruptions: 1.867, waiting: 49 },
  { eruptions: 3.833, waiting: 75 },
  { eruptions: 3.417, waiting: 64 },
  { eruptions: 4.233, waiting: 76 },
  { eruptions: 2.4, waiting: 53 },
  { eruptions: 4.8, waiting: 94 },
  { eruptions: 2.0, waiting: 55 },
  { eruptions: 4.15, waiting: 76 },
  { eruptions: 1.867, waiting: 50 },
  { eruptions: 4.267, waiting: 82 },
  { eruptions: 1.75, waiting: 54 },
  { eruptions: 4.483, waiting: 75 },
  { eruptions: 4.0, waiting: 78 },
  { eruptions: 4.117, waiting: 79 },
  { eruptions: 4.083, waiting: 78 },
  { eruptions: 4.267, waiting: 78 },
  { eruptions: 3.917, waiting: 70 },
  { eruptions: 4.55, waiting: 79 },
  { eruptions: 4.083, waiting: 70 },
  { eruptions: 2.417, waiting: 54 },
  { eruptions: 4.183, waiting: 86 },
  { eruptions: 2.217, waiting: 50 },
  { eruptions: 4.45, waiting: 90 },
  { eruptions: 1.883, waiting: 54 },
  { eruptions: 1.85, waiting: 54 },
  { eruptions: 4.283, waiting: 77 },
  { eruptions: 3.95, waiting: 79 },
  { eruptions: 2.333, waiting: 64 },
  { eruptions: 4.15, waiting: 75 },
  { eruptions: 2.35, waiting: 47 },
  { eruptions: 4.933, waiting: 86 },
  { eruptions: 2.9, waiting: 63 },
  { eruptions: 4.583, waiting: 85 },
  { eruptions: 3.833, waiting: 82 },
  { eruptions: 2.083, waiting: 57 },
  { eruptions: 4.367, waiting: 82 },
  { eruptions: 2.133, waiting: 67 },
  { eruptions: 4.35, waiting: 74 },
  { eruptions: 2.2, waiting: 54 },
  { eruptions: 4.45, waiting: 83 },
  { eruptions: 3.567, waiting: 73 },
  { eruptions: 4.5, waiting: 73 },
  { eruptions: 4.15, waiting: 88 },
  { eruptions: 3.817, waiting: 80 },
  { eruptions: 3.917, waiting: 71 },
  { eruptions: 4.45, waiting: 83 },
  { eruptions: 2.0, waiting: 56 },
  { eruptions: 4.283, waiting: 79 },
  { eruptions: 4.767, waiting: 78 },
  { eruptions: 4.533, waiting: 84 },
  { eruptions: 1.85, waiting: 58 },
  { eruptions: 4.25, waiting: 83 },
  { eruptions: 1.983, waiting: 43 },
  { eruptions: 2.25, waiting: 60 },
  { eruptions: 4.75, waiting: 75 },
  { eruptions: 4.117, waiting: 81 },
  { eruptions: 2.15, waiting: 46 },
  { eruptions: 4.417, waiting: 90 },
  { eruptions: 1.817, waiting: 46 },
  { eruptions: 4.467, waiting: 74 },
];

const { scaleLinear, extent, axisBottom, axisLeft, axisTop, axisRight } = d3;

const dimensions = {
  width: 400,
  height: 400,
  margin: {
    top: 10,
    right: 10,
    bottom: 50,
    left: 50,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const xAccessor = (d) => d.eruptions;
const yAccessor = (d) => d.waiting;

const xScale = scaleLinear()
  .domain(extent(data, xAccessor))
  .range([0, dimensions.boundedWidth])
  .nice();

const yScale = scaleLinear()
  .domain(extent(data, yAccessor))
  .range([dimensions.boundedHeight, 0])
  .nice();

const xAxis = axisBottom(xScale).ticks(6);
const yAxis = axisLeft(yScale).ticks(5);

const main = d3.select("body").append("main");
main.append("h1").text("Old Faithful Eruptions");
main
  .append("p")
  .text(
    "As the time between eruptions grows, so does the duration of the individual episodes."
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

/*
bounds
  .append("g")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("opacity", 0.5)
  .attr("fill", "currentColor")
  .attr("cx", (d) => xScale(xAccessor(d)))
  .attr("cy", (d) => yScale(yAccessor(d)));
/* */

/*
bounds
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 5)
  .attr("opacity", 0.5)
  .attr("fill", "currentColor")
  .attr("cx", (d) => xScale(xAccessor(d)))
  .attr("cy", (d) => yScale(yAccessor(d)));
/* */

bounds
  .append("g")
  .selectAll("circle")
  .data(data)
  .join((enter) =>
    enter
      .append("circle")
      .attr("r", 5)
      .attr("opacity", 0.5)
      .attr("fill", "currentColor")
      .attr("cx", (d) => xScale(xAccessor(d)))
      .attr("cy", (d) => yScale(yAccessor(d)))
  );

const groupAxis = bounds.append("g");

groupAxis
  .append("g")
  .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
  .call(xAxis);

groupAxis.append("g").call(yAxis);

groupAxis
  .append("g")
  .call(axisTop(xScale).ticks(0).tickSize(0))
  .selectAll("line")
  .remove();

groupAxis
  .append("g")
  .attr("transform", `translate(${dimensions.boundedWidth} 0)`)
  .call(axisRight(yScale).ticks(0).tickSize(0))
  .selectAll("line")
  .remove();

const groupLabels = bounds
  .append("g")
  .attr("fill", "currentColor")
  .attr("font-size", 15);

groupLabels
  .append("text")
  .attr(
    "transform",
    `translate(${-dimensions.margin.left + 15} ${
      dimensions.boundedHeight / 2
    }) rotate(-90)`
  )
  .attr("text-anchor", "middle")
  .text("Waiting time between eruptions (mins)");

groupLabels
  .append("text")
  .attr(
    "transform",
    `translate(${dimensions.boundedWidth / 2} ${
      dimensions.boundedHeight + dimensions.margin.bottom - 5
    })`
  )
  .attr("text-anchor", "middle")
  .text("Eruption duration (mins)");

main
  .append("p")
  .text("Source: ")
  .append("a")
  .attr(
    "href",
    "https://www.stat.cmu.edu/~larry/all-of-statistics/=data/faithful.dat"
  )
  .text("Old Faithful Geyser Data");
