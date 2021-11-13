const {
  randomIrwinHall,
  interpolateGreens,
  scaleLinear,
  select,
  contourDensity,
  Delaunay,
  geoPath,
  format,
} = d3;

const distanceFormatter = format(".2f");
const geoPathGenerator = geoPath();

const dataPoints = 50;
const n = 1.25;
const domain = [0, n];
const getRandom = () => randomIrwinHall(n)();

const data = Array(dataPoints)
  .fill()
  .map((_) => {
    const x = getRandom();
    const y = getRandom();
    return {
      x,
      y,
    };
  });

const dimensions = {
  size: 400,
  margin: 50,
};

dimensions.boundedSize = dimensions.size - dimensions.margin * 2;

const xAccessor = (d) => d.x;
const yAccessor = (d) => d.y;

const xScale = scaleLinear()
  .domain(domain)
  .range([0, dimensions.boundedSize])
  .nice();

const yScale = scaleLinear()
  .domain(domain)
  .range([dimensions.boundedSize, 0])
  .nice();

const thresholds = 5;
const contourGenerator = contourDensity()
  .x((d) => xScale(d.x))
  .y((d) => yScale(d.y))
  .size([dimensions.boundedSize, dimensions.boundedSize])
  .thresholds(thresholds);

const contourData = contourGenerator(data);

const colorScheme = Array(contourData.length)
  .fill()
  .map((_, i, { length }) => interpolateGreens((1 / length) * i))
  .reverse();

const delaunay = Delaunay.from(
  data,
  (d) => xScale(xAccessor(d)),
  (d) => yScale(yAccessor(d))
);

const voronoi = delaunay.voronoi([
  0,
  0,
  dimensions.boundedSize,
  dimensions.boundedSize,
]);

const main = d3.select("body").append("main");
main.append("h1").text("Target practice");
main.append("p").html(
  `
  ${dataPoints} data points, positioned at random with an <a href="https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution">Irwin-Hall</a> distribution.
  `
);

main.append("p").append("b").text("How close to the very center?");

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.size} ${dimensions.size}`)
  .attr("width", dimensions.size)
  .attr("height", dimensions.size);

const bounds = wrapper
  .append("g")
  .attr("transform", `translate(${dimensions.margin} ${dimensions.margin})`);

const contourGroup = bounds.append("g");
const dataGroup = bounds.append("g");
const highlightGroup = bounds.append("g");
const delaunayGroup = bounds.append("g");

contourGroup
  .selectAll("path")
  .data(contourData)
  .join("path")
  // .attr("d", (d) => geoPathGenerator(d))
  .attr("d", geoPathGenerator)
  .attr("fill", (d, i) => colorScheme[i])
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.1");

dataGroup
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("cx", (d) => xScale(xAccessor(d)))
  .attr("cy", (d) => yScale(yAccessor(d)))
  .attr("r", "4")
  .attr("fill", colorScheme[colorScheme.length - 1])
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.5");

delaunayGroup
  .selectAll("path")
  .data(data)
  .join("path")
  .attr("d", (d, i) => voronoi.renderCell(i))
  .attr("fill", "transparent")
  // .attr("stroke", "currentColor")
  // .attr("stroke-width", "1")
  .on("mouseenter", (_, d) => {
    highlight(d);
  });

highlightGroup.attr("opacity", "0");

highlightGroup
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("stroke-dasharray", "3 5");

highlightGroup
  .append("circle")
  .attr("r", "5")
  .attr("fill", colorScheme[colorScheme.length - 1])
  .attr("stroke", "currentColor")
  .attr("stroke-width", "2");

highlightGroup
  .append("circle")
  .attr("cx", dimensions.boundedSize / 2)
  .attr("cy", dimensions.boundedSize / 2)
  .attr("r", "4")
  .attr("fill", "currentColor");

const distanceGroup = highlightGroup
  .append("g")
  .attr("transform", `translate(0 -${dimensions.margin})`)
  .attr("fill", "currentColor");

distanceGroup
  .append("text")
  .attr("y", "26")
  .attr("font-size", "26")
  .attr("font-weight", "bold");

distanceGroup
  .append("text")
  .attr("y", 26 + 14)
  .attr("font-size", "12")
  .text("pixels");

function highlight(d) {
  const x1 = xScale(xAccessor(d));
  const y1 = yScale(yAccessor(d));
  const x2 = dimensions.boundedSize / 2;
  const y2 = dimensions.boundedSize / 2;

  const distance = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;

  highlightGroup.select("text").text(distanceFormatter(distance));

  highlightGroup.select("circle").attr("cx", x1).attr("cy", y1);

  highlightGroup.select("path").attr("d", `M ${x1} ${y1} L ${x2} ${y2}`);

  highlightGroup.attr("opacity", "1");
}

highlight(data[Math.floor(Math.random() * data.length)]);
