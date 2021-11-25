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
  easeQuadInOut,
} = d3

const root = select("body").append("div").attr("id", "root")
root.append("h1").text("Complete the Line Chart")
root
  .append("p")
  .text(
    "The 2020 F1 season crowned Lewis Hamilton with a seventh, record-equalliing title. Behind the dominating performance, it is possible to highlight a few interesting battles with interactive line charts."
  )

drawdataGroup({
  title: "Who's on second?",
  description:
    "Bottas started out strong, with a victory in the very first round. Verstappen caught up by round 4, but stalled briefly at round 7. Who took the lead in the second half of the season?",
  names: ["Bottas", "Verstappen"],
})

drawdataGroup({
  title: "Change places!",
  description:
    "Albon and Leclerc swapped places multiple times through the championship. Who made the deciding overtake in the very last rounds?",
  names: ["Albon", "Leclerc"],
})

drawdataGroup({
  title: "All tied up",
  description:
    "Stroll and Gasly wrapped up the championship with 75 points each. How did Gasly achieve the same level?",
  names: ["Stroll", "Gasly"],
})

function drawdataGroup({ title, description, names }) {
  const data = names.map((name) => dataset.find((d) => d.name === name))

  // draw a smaller set of points for the last driver
  const referenceData = data.map((d, i, { length }) =>
    Object.assign({}, d, {
      points:
        i < length - 1
          ? d.points
          : d.points.slice(0, Math.floor(d.points.length / 2)),
    })
  )

  // the reference helps to 1. position the group for the second half and 2. extract the points for the last driver
  const index = referenceData[referenceData.length - 1].points.length - 1

  const dimensions = {
    width: 450,
    height: 400,
    margin: {
      top: 20,
      right: 20,
      bottom: 25,
      left: 40,
    },
    legend: {
      height: 40,
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
      Array(referenceData[0].points.length)
        .fill()
        .map((_, i) => i)
    )
    .range([0, dimensions.boundedWidth])

  // the points describe the cumulative measure so it's enough to consider the last value
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

  article
    .append("div")
    .attr("class", "notice")
    .html(
      `Complete the curve starting from round ${
        index + 1
      } and/or <button>show the line</button>.`
    )

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
    .attr("fill", "hsl(0, 0%, 24%)")
    .attr("font-family", "inherit")
    .attr("font-size", "14")
    .attr("font-weight", "bold")
    .attr("dominant-baseline", "middle")
    .attr("x", "30")
    .attr("y", "1")
    .text((d) => d.name)

  const dataGroup = bounds
    .append("g")
    .attr("transform", `translate(0 ${dimensions.legend.height})`)

  const axisGroup = dataGroup.append("g")
  const referenceGroup = dataGroup.append("g")
  const highlightGroup = dataGroup.append("g")

  const referenceGroups = referenceGroup
    .selectAll("g")
    .data(referenceData)
    .join("g")

  referenceGroups
    .append("path")
    .attr("d", (d) => lineGenerator(d.points))
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", 2)

  // add one circle for each end of the line
  referenceGroups
    .append("circle")
    .attr("transform", (d) => `translate(${xScale(0)} ${yScale(d.points[0])})`)
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", "2")

  referenceGroups
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

  highlightGroup.attr("transform", `translate(${xScale(index)} 0)`)

  // highlightGroup
  //   .append("rect")
  //   .attr("width", dimensions.boundedWidth - xScale(index))
  //   .attr("height", dimensions.boundedHeight)
  //   .attr("opacity", "0")

  // auto complete
  article
    .select("button")
    .style("cursor", "pointer")
    .on(
      "click",
      (e) => {
        const d = data[data.length - 1]
        const points = d.points.slice(index)

        // add the path _before_ the circles
        highlightGroup.append("path")

        highlightGroup
          .append("circle")
          .attr("transform", (d) => `translate(0 ${yScale(points[0])})`)
          .attr("r", "4")
          .attr("fill", "hsl(0, 0%, 100%)")
          .attr("stroke", colorScale(d.name))
          .attr("stroke-width", "2")

        highlightGroup
          .append("circle")
          .attr(
            "transform",
            (d) =>
              `translate(${xScale(points.length - 1)} ${yScale(
                points[points.length - 1]
              )})`
          )
          .attr("r", "4")
          .attr("fill", "hsl(0, 0%, 100%)")
          .attr("stroke", colorScale(d.name))
          .attr("stroke-width", "2")
          .attr("opacity", "0")

        highlightGroup
          .select("path")
          .attr("fill", "none")
          .attr("stroke", colorScale(d.name))
          .attr("stroke-width", "2")
          .attr("d", lineGenerator(points))
          .attr("stroke-dasharray", function () {
            return this.getTotalLength()
          })
          .attr("stroke-dashoffset", function () {
            return this.getTotalLength()
          })
          .transition()
          .duration(1500)
          .ease(easeQuadInOut)
          .attr("stroke-dashoffset", 0)
          .on("end", () => {
            highlightGroup
              .select("circle:nth-of-type(2)")
              .transition()
              .attr("opacity", "1")
          })

        select(e.currentTarget).style("cursor", "initial")
      },
      { once: true }
    )
}
