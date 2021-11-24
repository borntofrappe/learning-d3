const dataset = [
  {
    name: "Bottas",
    points: [25, 18, 15, 0, 15, 16, 18, 10, 18, 26, 0, 18, 18, 0, 4, 4, 18],
  },
  {
    name: "Verstappen",
    points: [0, 15, 18, 19, 25, 18, 15, 0, 0, 18, 19, 15, 0, 8, 19, 0, 25],
  },
  {
    name: "Albon",
    points: [0, 12, 10, 4, 10, 4, 8, 0, 15, 1, 0, 0, 0, 6, 15, 8, 12],
  },
  {
    name: "Leclerc",
    points: [18, 0, 0, 15, 12, 0, 0, 0, 4, 8, 6, 12, 10, 12, 1, 0, 0],
  },
  {
    name: "Gasly",
    points: [6, 0, 0, 6, 0, 2, 4, 25, 0, 2, 8, 10, 0, 0, 8, 0, 4],
  },
  {
    name: "Stroll",
    points: [0, 6, 12, 2, 8, 12, 2, 15, 0, 0, 0, 0, 0, 2, 0, 15, 1],
  },
].map(({ name, points }) => ({
  // consider the cumulative number of points
  name,
  points: points.reduce(
    (acc, curr) =>
      acc[acc.length - 1] !== undefined
        ? [...acc, curr + acc[acc.length - 1]]
        : [curr],
    []
  ),
}))

const {
  select,
  scaleLinear,
  scalePoint,
  scaleOrdinal,
  min,
  max,
  extent,
  line,
  curveBasis,
  schemeSet1,
  axisBottom,
  axisLeft,
} = d3

const root = select("body").append("div").attr("id", "root")
root.append("h1").text("Complete the Line Chart")
root.append("p").text("Let's focus on three battles in the 2020 F1 season.")

drawLineChart({
  title: "Down to the wire",
  description:
    "Bottas and Verstappen were neck and neck leading up to round 7. Do you remember who took the lead in the second half of the season?",
  names: ["Bottas", "Verstappen"],
})

drawLineChart({
  title: "Change places",
  description:
    "Albon and Leclerc swapped places multiple times. Care to guess who eventually came out on top, perhaps even how?",
  names: ["Albon", "Leclerc"],
})

drawLineChart({
  title: "Equal terms",
  description:
    "Gasly and Stroll finished both with 75 points. Can you make up how Stroll reached the same level?",
  names: ["Gasly", "Stroll"],
})

function drawLineChart({ title, description, names }) {
  const data = names.map((name) => dataset.find((d) => d.name === name))

  const dimensions = {
    width: 450,
    height: 400,
    margin: {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40,
    },
    legend: {
      height: 50,
    },
  }

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right)
  dimensions.boundedHeight =
    dimensions.height -
    (dimensions.margin.top +
      dimensions.margin.bottom +
      dimensions.legend.height)

  const xScale = scalePoint()
    .domain(
      Array(17)
        .fill()
        .map((_, i) => i)
    )
    .range([0, dimensions.boundedWidth])

  const yScale = scaleLinear()
    .domain([
      0,
      max(
        data.reduce(
          (acc, curr) => [...acc, curr.points[curr.points.length - 1]],
          []
        )
      ),
    ])
    .range([dimensions.boundedHeight, 0])
    .nice()

  const colorScale = scaleOrdinal()
    .domain(names)
    .range(schemeSet1.slice(0, names.length))

  const lineGenerator = line()
    .x((_, i) => xScale(i))
    .y((d) => yScale(d))
    .curve(curveBasis)

  const xAxis = axisBottom(xScale)
    .tickSize(0)
    .tickPadding(12)
    .tickFormat((d) => d + 1)

  const yAxis = axisLeft(yScale).ticks(6).tickSize(0).tickPadding(12)

  const article = root.append("article")
  article.append("h2").text(title)
  article.append("p").text(description)

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    )

  const legendGroup = bounds.append("g")
  const legendGroups = legendGroup
    .selectAll("g")
    .data(data)
    .join("g")
    .attr(
      "transform",
      (d, i, { length }) =>
        `translate(0 ${(dimensions.legend.height / length) * (i + 1)})`
    )

  legendGroups
    .append("path")
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d.name))
    .attr("stroke-width", "2")
    .attr("d", "M 0 0 h 20")

  legendGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("font-family", "inherit")
    .attr("font-size", "14")
    .attr("font-weight", "bold")
    .attr("dominant-baseline", "middle")
    .attr("x", "30")
    .attr("y", "1")
    .text((d) => d.name)

  const chartGroup = bounds
    .append("g")
    .attr("transform", `translate(0 ${dimensions.legend.height})`)

  const axisGroup = chartGroup.append("g")
  const dataGroup = chartGroup.append("g")

  const dataGroups = dataGroup.selectAll("g").data(data).join("g")

  dataGroups
    .append("path")
    .attr("d", (d) => lineGenerator(d.points))
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", 2)

  dataGroups
    .append("circle")
    .attr("transform", (d) => `translate(${xScale(0)} ${yScale(d.points[0])})`)
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", "2")

  dataGroups
    .append("circle")
    .attr("transform", (d) => `translate(${xScale(0)} ${yScale(d.points[0])})`)
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", "2")

  dataGroups
    .append("circle")
    .attr(
      "transform",
      (d) =>
        `translate(${xScale(d.points.length - 1)} ${yScale(
          d.points[d.points.length - 1]
        )})`
    )
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", "2")

  axisGroup
    .append("g")
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis)

  const yAxisGroup = axisGroup.append("g").call(yAxis)

  axisGroup.selectAll("path").remove()
  axisGroup
    .selectAll("text")
    .attr("fill", "currentColor")
    .attr("font-family", "inherit")
    .attr("font-size", "12")

  yAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.1")
}
