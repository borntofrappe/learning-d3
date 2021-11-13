const {
  randomIrwinHall,
  interpolateGreens,
  scaleLinear,
  extent,
  select,
  contourDensity,
  Delaunay,
} = d3;

const dataPoints = 60;

const n = 2;
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
  margin: 30,
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

const main = d3.select("body").append("main");
main.append("h1").text("Target Practice");
main.append("p").text("Four!");

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

dataGroup
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", "3")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.5")
  .attr("fill", colorScheme[colorScheme.length - 1])
  .attr("cx", (d) => xScale(xAccessor(d)))
  .attr("cy", (d) => yScale(yAccessor(d)));

contourGroup
  .selectAll("path")
  .data(contourData)
  .join("path")
  .attr("d", d3.geoPath())
  .attr("fill", (d, i) => colorScheme[i])
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.1");

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

delaunayGroup
  .selectAll("path")
  .data(data)
  .join("path")
  .attr("d", (d, i) => voronoi.renderCell(i))
  .attr("fill", "transparent")
  // .attr("stroke", "currentColor")
  // .attr("stroke-width", "1")
  .on("mouseenter", (e, d) => {
    highlightGroup
      .append("circle")
      .attr("r", "4")
      .attr("fill", "currentColor")
      .attr("cx", xScale(xAccessor(d)))
      .attr("cy", yScale(yAccessor(d)));
  })
  .on("mouseleave", (e, d) => {
    highlightGroup.select("circle").remove();
  });
