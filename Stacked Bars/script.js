const { scaleLinear, scaleBand, schemeCategory10: colorScheme, stack } = d3;

const href = "https://jamstack.org/survey/2021";

const data = {
  Never: {
    "Content Producer": 1.48,
    "Back-end": 3.18,
    "Front-end": 31.18,
    "Full stack": 48.75,
  },
  Sometimes: {
    "Content Producer": 2.24,
    "Back-end": 4.08,
    "Front-end": 29.25,
    "Full stack": 45.98,
  },
  Mostly: {
    "Content Producer": 2.58,
    "Back-end": 4.37,
    "Front-end": 34.92,
    "Full stack": 39.88,
  },
};

const dimensions = {
  width: 650,
  height: 350,
  margin: {
    top: 10,
    right: 20,
    bottom: 10,
    left: 90,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const keys = Object.keys(data);

const yScale = scaleBand()
  .domain(keys)
  .range([0, dimensions.boundedHeight])
  .padding(0.25);

const xScale = scaleLinear()
  .domain([0, 100])
  .range([0, dimensions.boundedWidth]);

const xTicks = xScale.ticks(5);

const labels = Object.keys(data[keys[0]]);

const main = d3.select("body").append("main");
main.append("h1").text("Job titles of devs who work on very large websites");

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

const axisGroup = bounds.append("g");
const dataGroup = bounds.append("g");

axisGroup
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "2")
  .attr("d", `M -1 5 V ${dimensions.boundedHeight - 10}`);

const xTickGroups = axisGroup
  .selectAll("g")
  .data(xTicks)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(${xScale(d)} 0)`);

xTickGroups
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.15")
  .attr("d", `M -1 5 V ${dimensions.boundedHeight - 10}`);

xTickGroups
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "12")
  .attr("y", dimensions.boundedHeight + 5)
  .attr("text-anchor", "middle")
  .text((d) => `${d}%`);

const keyGroups = dataGroup
  .selectAll("g")
  .data(keys)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(0 ${yScale(d)})`);

keyGroups
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "15")
  .attr("font-weight", "bold")
  .attr("x", "-8")
  .attr("y", yScale.bandwidth() / 2)
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")
  .text((d) => d);

keyGroups
  .append("rect")
  .attr("fill", (d) => colorScheme[Object.keys(data[d]).length])
  .attr("width", dimensions.boundedWidth)
  .attr("height", yScale.bandwidth())
  .attr("opacity", "0.2");

const stackGroups = keyGroups
  .selectAll("g")
  .data((d) => stack().keys(Object.keys(data[d]))([data[d]]))
  /*
  .data((d) => {
    // generator function expects an array of objects witht the chosen keys
    // [{ 'Content Producer': 1, { 'Back-end': 18 }, ...]
    const stackGenerator = stack().keys(Object.keys(data[d]));
    const stackData = stackGenerator([data[d]]);

    return stackData;
  })
  */
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(${xScale(d[0][0])} 0)`);

stackGroups
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "12")
  .attr("x", (d) => `${xScale(d[0][1]) - xScale(d[0][0])}`)
  .attr("y", "-3")
  .attr("text-anchor", "middle")
  .text((d) => `${Math.floor(d[0][1])}%`);

stackGroups
  .append("rect")
  .attr("fill", (d, i) => colorScheme[i])
  .attr("width", (d) => xScale(d[0][1]) - xScale(d[0][0]))
  .attr("height", yScale.bandwidth);

const ul = main.append("ul");
ul.selectAll("li")
  .data(labels)
  .enter()
  .append("li")
  .style("border", (d, i) => `0.18rem solid ${colorScheme[i]}`)
  .text((d) => d);

main
  .append("p")
  .append("a")
  .attr("href", href)
  .text("Source: Jamstack Community Survey 2020–2021");
