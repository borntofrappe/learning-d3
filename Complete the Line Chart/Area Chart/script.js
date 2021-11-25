const data = [
  [6, 0, 0, 6, 0, 2, 4, 25, 0, 2, 8, 10, 0, 0, 8, 0, 4],
  [0, 6, 12, 2, 8, 12, 2, 15, 0, 0, 0, 0, 0, 2, 0, 15, 1],
].map((d) =>
  d.reduce(
    (acc, curr) =>
      acc[acc.length - 1] === undefined
        ? [curr]
        : [...acc, curr + acc[acc.length - 1]],
    []
  )
)

const {
  select,
  scaleLinear,
  scalePoint,
  scaleOrdinal,
  max,
  extent,
  line,
  area,
  curveBasis,
  schemeSet1,
  axisBottom,
  axisLeft,
} = d3

const root = select("body").append("div").attr("id", "root")
root.append("h1").text("Area Chart")
root.append("p").text("Let's highlight the area between two curves.")

const dimensions = {
  width: 450,
  height: 400,
  margin: {
    top: 20,
    right: 20,
    bottom: 25,
    left: 40,
  },
}

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right)
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom)

const xScale = scalePoint()
  .domain(
    Array(data[0].length)
      .fill()
      .map((_, i) => i)
  )
  .range([0, dimensions.boundedWidth])

const yScale = scaleLinear()
  .domain([0, max(data.reduce((acc, curr) => [...acc, ...curr], [])) * 1.25])
  .range([dimensions.boundedHeight, 0])
  .nice()

const lineGenerator = line()
  .x((_, i) => xScale(i))
  .y((d) => yScale(d))
  .curve(curveBasis)

const areaGenerator = area()
  .x((_, i) => xScale(i))
  .y0((d) => yScale(d[0]))
  .y1((d) => yScale(d[1]))
  .curve(curveBasis)

const xAxis = axisBottom(xScale)
  .tickSize(0)
  .tickPadding(12)
  .tickFormat((d) => d + 1)

const yAxis = axisLeft(yScale).ticks(6).tickSize(0).tickPadding(12)

const wrapper = root
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height)

const gradient = wrapper
  .append("defs")
  .append("linearGradient")
  .attr("id", "g")
  .attr("gradientUnits", "userSpaceOnUse")
  .attr("spreadMethod", "repeat")
  .attr("x1", "0")
  .attr("x2", "4")
  .attr("y1", "0")
  .attr("y2", "4")

gradient
  .append("stop")
  .attr("offset", "0")
  .attr("stop-color", "hsl(0, 0%, 60%)")

gradient
  .append("stop")
  .attr("offset", "0.5")
  .attr("stop-color", "hsl(0, 0%, 60%)")

gradient
  .append("stop")
  .attr("offset", "0.5")
  .attr("stop-color", "hsl(0, 0%, 100%)")

gradient
  .append("stop")
  .attr("offset", "1")
  .attr("stop-color", "hsl(0, 0%, 100%)")

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  )

const dataGroup = bounds.append("g")
const axisGroup = bounds.append("g")

dataGroup
  .append("path")
  .attr("d", areaGenerator(data[0].map((v, i) => [v, data[1][i]])))
  .attr("fill", "url(#g)")
  .attr("stroke", "none")
  .attr("opacity", "0.25")

dataGroup
  .append("g")
  .selectAll("path")
  .data(data)
  .join("path")
  .attr("d", (d) => lineGenerator(d))
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", 2)

axisGroup
  .append("g")
  .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
  .call(xAxis)

const yAxisGroup = axisGroup.append("g").call(yAxis)

axisGroup.selectAll("path").remove()
axisGroup
  .selectAll("text")
  .attr("fill", "hsl(0, 0%, 42%)")
  .attr("font-family", "inherit")
  .attr("font-size", "12")

yAxisGroup
  .selectAll("g.tick")
  .append("path")
  .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.1")
