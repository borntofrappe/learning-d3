const data = [
  {
    name: "Lewis Hamilton",
    points: [12, 25, 26, 25, 19, 25, 25, 7, 26, 15, 25, 26, 26, 25, 25, 0, 15],
  },
  {
    name: "Valtteri Bottas",
    points: [25, 18, 15, 0, 15, 16, 18, 10, 18, 26, 0, 18, 18, 0, 4, 4, 18],
  },
  {
    name: "Max Verstappen",
    points: [0, 15, 18, 19, 25, 18, 15, 0, 0, 18, 19, 15, 0, 8, 19, 0, 25],
  },
  {
    name: "Sergio Perez",
    points: [8, 8, 6, 0, 0, 10, 1, 1, 10, 12, 12, 6, 8, 18, 0, 25, 0],
  },
  {
    name: "Daniel Ricciardo",
    points: [0, 4, 4, 12, 0, 0, 13, 8, 12, 10, 15, 2, 15, 1, 6, 10, 7],
  },
  {
    name: "Carlos Sainz",
    points: [10, 3, 2, 0, 0, 8, 0, 18, 0, 0, 10, 8, 6, 10, 10, 12, 8],
  },
  {
    name: "Alexander Albon",
    points: [0, 12, 10, 4, 10, 4, 8, 0, 15, 1, 0, 0, 0, 6, 15, 8, 12],
  },
  {
    name: "Charles Leclerc",
    points: [18, 0, 0, 15, 12, 0, 0, 0, 4, 8, 6, 12, 10, 12, 1, 0, 0],
  },
  {
    name: "Lando Norris",
    points: [16, 10, 0, 10, 2, 1, 6, 12, 8, 0, 0, 0, 4, 5, 12, 1, 10],
  },
  {
    name: "Pierre Gasly",
    points: [6, 0, 0, 6, 0, 2, 4, 25, 0, 2, 8, 10, 0, 0, 8, 0, 4],
  },
  {
    name: "Lance Stroll",
    points: [0, 6, 12, 2, 8, 12, 2, 15, 0, 0, 0, 0, 0, 2, 0, 15, 1],
  },
].map(({ name, points }) => ({
  name,
  points: points.reduce(
    (acc, curr) =>
      acc[acc.length - 1] !== undefined
        ? [...acc, curr + acc[acc.length - 1]]
        : [curr],
    []
  ),
}))

const dataPairs = data.reduce((acc, curr, currentIndex) => {
  return [
    ...acc,
    ...data
      .filter((d, i) => i > currentIndex)
      .map((opponent) => [
        {
          name: curr.name,
          points: [...curr.points],
        },
        {
          name: opponent.name,
          points: [...opponent.points],
        },
      ]),
  ]
}, [])

const { select, scaleLinear, scalePoint, min, max, extent, line, curveBasis } =
  d3

const root = select("body").append("div").attr("id", "root")
root.append("h1").text("Pairings")
root
  .append("p")
  .text(
    "Focus on interesting pairs. See something interesting to compare with a dedicated 'Complete the Line Chart' chart type?"
  )

const main = root.append("main")

const dimensions = {
  width: 450,
  height: 400,
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
}

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right)
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom)

const xScale = scalePoint()
  .domain(
    Array(17)
      .fill()
      .map((_, i) => i)
  )
  .range([0, dimensions.boundedWidth])

// domain depends on the max values in the pairs

function plotLines(data) {
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

  const lineGenerator = line()
    .x((_, i) => xScale(i))
    .y((d) => yScale(d))
    .curve(curveBasis)

  const wrapper = main
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

  const dataGroup = bounds.append("g")

  const dataGroups = dataGroup.selectAll("g").data(data).join("g")

  dataGroups
    .append("text")
    .attr("y", (_, i) => 38 * (i + 1))
    .attr("fill", "currentColor")
    .attr("font-size", "32")
    .attr("font-weight", "bold")
    .text((d) => d.name)

  dataGroups
    .append("path")
    .attr("d", (d) => lineGenerator(d.points))
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", 2)
}

dataPairs.forEach((pair) => plotLines(pair))
