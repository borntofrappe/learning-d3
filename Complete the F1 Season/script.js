const {
  select,
  scaleLinear,
  scalePoint,
  scaleOrdinal,
  max,
  line,
  curveBasis,
  schemeSet1,
  axisBottom,
  axisLeft,
  easeQuadInOut,
  pointer,
} = d3

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

const root = select("body").append("div").attr("id", "root")

const header = root.append("header")
header.append("h1").text("Complete the F1 Season")
header
  .append("p")
  .html(
    "The 2020 F1 season crowned Lewis Hamilton with a seventh, record-equalliing title.<br/>Behind the dominating performance, drivers competed until the very last race creating interesting patterns in the number of points accumulated."
  )

header
  .append("p")
  .html("Let's explore some of them with interactive line charts.")

drawLineChart({
  title: "Who's on second?",
  description:
    "Bottas started out strong, with a victory in the very first round. Verstappen caught up by round 4, but stalled briefly at round 7. Who took the lead in the second half of the season, finally placing second in the championship?",
  names: ["Bottas", "Verstappen"],
})

drawLineChart({
  title: "Change places!",
  description:
    "Albon and Leclerc swapped places multiple times throughout the year. Who made the deciding overtake in the very last rounds?",
  names: ["Albon", "Leclerc"],
})

drawLineChart({
  title: "All tied up",
  description:
    "Stroll and Gasly wrapped up the championship with 75 points each. How did Gasly achieve the same level?",
  names: ["Stroll", "Gasly"],
})

function drawLineChart({ title, description, names }) {
  const data = names.map((name) => dataset.find((d) => d.name === name))

  // display half the number of points for the last name
  const initialData = data.map((d, i, { length }) =>
    Object.assign({}, d, {
      points:
        i < length - 1
          ? d.points
          : d.points.slice(0, Math.floor(d.points.length / 2)),
    })
  )
  const initialIndex = initialData[initialData.length - 1].points.length - 1

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
      height: 65,
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
      Array(data[0].points.length)
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
      ) * 1.1,
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
        initialIndex + 1
      } and/or <button>show the line</button>.`
    )

  const wrapper = article
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
    .attr("x2", "5")
    .attr("y1", "0")
    .attr("y2", "5")

  gradient
    .append("stop")
    .attr("offset", "0")
    .attr("stop-color", "hsl(0, 0%, 88%)")

  gradient
    .append("stop")
    .attr("offset", "0.25")
    .attr("stop-color", "hsl(0, 0%, 88%)")

  gradient
    .append("stop")
    .attr("offset", "0.25")
    .attr("stop-color", "hsl(0, 0%, 98%)")

  gradient
    .append("stop")
    .attr("offset", "1")
    .attr("stop-color", "hsl(0, 0%, 98%)")

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    )

  const legendGroup = bounds.append("g")

  const dataGroup = bounds
    .append("g")
    .attr("transform", `translate(0 ${dimensions.legend.height})`)

  const axisGroup = dataGroup.append("g")

  // the area is translated similar to the additional data, but should be displayed before the initial data
  const areaGroup = dataGroup
    .append("g")
    .attr("transform", `translate(${xScale(initialIndex)} 0)`)

  const initialDataGroup = dataGroup.append("g")

  const additionalDataGroup = dataGroup
    .append("g")
    .attr("transform", `translate(${xScale(initialIndex)} 0)`)

  const automaticGroup = additionalDataGroup.append("g")
  const inputGroup = additionalDataGroup.append("g")

  const legendGroups = legendGroup
    .selectAll("g")
    .data(names)
    .join("g")
    .attr(
      "transform",
      (_, i, { length }) =>
        `translate(0 ${(dimensions.legend.height / length) * i})`
    )

  legendGroups
    .append("path")
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d))
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
    .text((d) => d)

  const initialDataGroups = initialDataGroup
    .selectAll("g")
    .data(initialData)
    .join("g")

  initialDataGroups
    .append("path")
    .attr("d", (d) => lineGenerator(d.points))
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d.name))
    .attr("stroke-width", 2)

  initialDataGroups
    .append("circle")
    .attr("transform", (d) => `translate(${xScale(0)} ${yScale(d.points[0])})`)

  initialDataGroups
    .append("circle")
    .attr(
      "transform",
      (d) =>
        `translate(${xScale(d.points.length - 1)} ${yScale(
          d.points[d.points.length - 1]
        )})`
    )

  initialDataGroups
    .selectAll("circle")
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", (d) => colorScale(d.name))
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

  automaticGroup
    .append("path")
    .attr("fill", "none")
    .attr("stroke", colorScale(data[data.length - 1].name))
    .attr("stroke-width", "2")
    .attr("d", lineGenerator(data[data.length - 1].points.slice(initialIndex)))
    .attr("stroke-dasharray", function () {
      return this.getTotalLength()
    })
    .attr("stroke-dashoffset", function () {
      return this.getTotalLength()
    })

  automaticGroup
    .append("circle")
    .attr(
      "transform",
      `translate(0 ${yScale(data[data.length - 1].points[initialIndex])})`
    )

  automaticGroup
    .append("circle")
    .attr(
      "transform",
      `translate(${xScale(
        data[data.length - 1].points.length - initialIndex - 1
      )} ${yScale(
        data[data.length - 1].points[data[data.length - 1].points.length - 1]
      )})`
    )

  automaticGroup
    .selectAll("circle")
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", colorScale(data[data.length - 1].name))
    .attr("stroke-width", "2")
    .attr("opacity", "0")

  inputGroup
    .append("path")
    .attr("fill", "none")
    .attr("stroke", colorScale(data[data.length - 1].name))
    .attr("stroke-width", "1.5")

  inputGroup
    .append("circle")
    .attr(
      "transform",
      `translate(0 ${yScale(data[data.length - 1].points[initialIndex])})`
    )
    .attr("r", "4")
    .attr("fill", "hsl(0, 0%, 100%)")
    .attr("stroke", colorScale(data[data.length - 1].name))
    .attr("stroke-width", "2")

  inputGroup.append("g").attr("fill", colorScale(data[data.length - 1].name))

  let isMousedown = false
  const columns = data[data.length - 1].points.length - initialIndex
  const columnWidth = xScale(1)

  /*
  { 0: undefined, 1: undefined, 2: undefined ...}
  the idea is to fill in the object considering mouse coordinates
  */
  const columnsPoints = Object.fromEntries(
    Array(columns)
      .fill()
      .map((_, i) => [i])
  )

  additionalDataGroup
    .append("rect")
    .style("cursor", "pointer")
    .attr("width", columnWidth * (columns - 1))
    .attr("height", dimensions.boundedHeight)
    .attr("opacity", "0")
    .on("mousedown", (e) => {
      e.preventDefault()
      isMousedown = true
    })
    .on("mouseup", (e) => {
      isMousedown = false
    })
    .on("mouseleave", () => {
      isMousedown = false
    })
    .on("mousemove", (e) => {
      if (!isMousedown) return

      const [x, y] = pointer(e)
      const column = Math.floor(x / columnWidth)

      if (columnsPoints[column]) return

      const points = Math.floor(yScale.invert(y))
      for (let c = 0; c <= column; c += 1) {
        if (!columnsPoints[c]) {
          columnsPoints[c] = points
        }
      }

      const coordinates = Object.values(columnsPoints)
        .filter((d) => d)
        .map((d, i) => [xScale(i + 1), yScale(d)])

      inputGroup.select("path").attr(
        "d",
        coordinates.reduce(
          (acc, curr) => `${acc} ${curr[0]} ${curr[1]}`,
          `M ${xScale(0)} ${yScale(data[data.length - 1].points[initialIndex])}`
        )
      )

      inputGroup
        .select("g")
        .selectAll("circle")
        .data(coordinates)
        .join("circle")
        .attr("r", "3")
        .attr("transform", (d) => `translate(${d[0]} ${d[1]})`)

      if (coordinates.length === columns - 1) {
        automaticGroup.select("circle").attr("opacity", "1")
        areaGroup.attr("opacity", "0")

        areaGroup
          .append("path")
          .attr(
            "d",
            automaticGroup.select("path").attr("d") +
              [...coordinates.reverse()].reduce(
                (acc, curr) => `${acc} ${curr[0]} ${curr[1]}`,
                ""
              )
          )
          .attr("fill", "url(#g)")
          .attr("stroke", "none")

        automaticGroup
          .select("path")
          .transition()
          .duration(1500)
          .ease(easeQuadInOut)
          .attr("stroke-dashoffset", 0)
          .on("end", () => {
            automaticGroup
              .select("circle:nth-of-type(2)")
              .transition()
              .attr("opacity", "1")

            areaGroup.transition().attr("opacity", "1")
          })

        select(e.currentTarget)
          .style("cursor", "initial")
          .on("mousedown", null)
          .on("mouseup", null)
          .on("mouseleave", null)
          .on("mousemove", null)

        article
          .select("button")
          .style("cursor", "initial")
          .style("border-bottom-color", "transparent")
          .on("click", null)
      }
    })

  article
    .select("button")
    .style("cursor", "pointer")
    .on(
      "click",
      (e) => {
        automaticGroup.select("circle").attr("opacity", "1")

        automaticGroup
          .select("path")
          .transition()
          .duration(1500)
          .ease(easeQuadInOut)
          .attr("stroke-dashoffset", 0)
          .on("end", () => {
            automaticGroup
              .select("circle:nth-of-type(2)")
              .transition()
              .attr("opacity", "1")
          })

        additionalDataGroup
          .select("rect")
          .style("cursor", "initial")
          .on("mousedown", null)
          .on("mouseup", null)
          .on("mouseleave", null)
          .on("mousemove", null)

        select(e.currentTarget)
          .style("cursor", "initial")
          .style("border-bottom-color", "transparent")
          .on("click", null)
      },
      { once: true }
    )
}
