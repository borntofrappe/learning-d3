const data = [
  {
    name: "Bottas",
    key: "BOT",
    lap: "1:23.148",
    gap_to_ideal: 0.459,
  },
  {
    name: "Gasly",
    key: "GAS",
    lap: "1:23.357",
    gap_to_ideal: 0.204,
  },
  {
    name: "Verstappen",
    key: "VER",
    lap: "1:23.498",
    gap_to_ideal: 0.42,
  },
  {
    name: "Hamilton",
    key: "HAM",
    lap: "1:23.570",
    gap_to_ideal: 0.292,
  },
  {
    name: "Norris",
    key: "NOR",
    lap: "1:23.632",
    gap_to_ideal: 0.09,
  },
  {
    name: "Stroll",
    key: "STR",
    lap: "1:23.705",
    gap_to_ideal: 0.065,
  },
  {
    name: "Tsunoda",
    key: "TSU",
    lap: "1:23.735",
    gap_to_ideal: 0.271,
  },
  {
    name: "Perez",
    key: "PER",
    lap: "1:23.787",
    gap_to_ideal: 0.173,
  },
  {
    name: "Vettel",
    key: "VET",
    lap: "1:24.020",
    gap_to_ideal: 0.138,
  },
  {
    name: "Sainz",
    key: "SAI",
    lap: "1:24.033",
    gap_to_ideal: 0.222,
  },
  {
    name: "Ocon",
    key: "OCO",
    lap: "1:24.041",
    gap_to_ideal: 0.199,
  },
  {
    name: "Alonso",
    key: "ALO",
    lap: "1:24.056",
    gap_to_ideal: 0.462,
  },
  {
    name: "Leclerc",
    key: "LEC",
    lap: "1:24.095",
    gap_to_ideal: 0.429,
  },
  {
    name: "Ricciardo",
    key: "RIC",
    lap: "1:24.135",
    gap_to_ideal: 0.178,
  },
  {
    name: "Räikkönen",
    key: "RAI",
    lap: "1:24.631",
    gap_to_ideal: 0.335,
  },
  {
    name: "Russel",
    key: "RUS",
    lap: "1:24.954",
    gap_to_ideal: 0.237,
  },
  {
    name: "Giovinazzi",
    key: "GIO",
    lap: "1:25.072",
    gap_to_ideal: 0.422,
  },
  {
    name: "Latifi",
    key: "LAT",
    lap: "1:25.209",
    gap_to_ideal: 0.44,
  },
  {
    name: "Schumacher",
    key: "MSC",
    lap: "1:25.575",
    gap_to_ideal: 0.398,
  },
];

const {
  select,
  extent,
  max,
  scaleLinear,
  scaleBand,
  axisLeft,
  axisBottom,
  format,
} = d3;

const main = select("body").append("main");
main
  .append("h1")
  .text("Ideal lap analysis")
  .style("text-transform", "capitalize");

function drawDotplot({ title, label, data, fill = "currentColor" }) {
  const dimensions = {
    width: 520,
    height: 450,
    margin: {
      top: 45,
      right: 20,
      bottom: 45,
      left: 40,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const xAccessor = (d) => d.value;
  const yAccessor = (d) => d.key;

  const xScale = scaleLinear()
    .domain(extent(data, xAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = scaleBand()
    .domain(
      data.sort((a, b) => xAccessor(a) - xAccessor(b)).map((d) => yAccessor(d))
    )
    .range([0, dimensions.boundedHeight]);

  const xAxis = axisBottom(xScale)
    .ticks(5)
    .tickFormat((d) => format("~")(d));
  const yAxis = axisLeft(yScale);

  const wrapper = main
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  wrapper.attr("tabindex", "0").attr("role", "figure");

  wrapper.append("title").text(title);

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const dataGroup = bounds.append("g");
  const axisGroup = bounds.append("g");

  dataGroup
    .attr("tabindex", "0")
    .attr("role", "list")
    .attr("aria-label", "F1 drivers data");

  const dataGroups = dataGroup
    .selectAll("g")
    .data([...data.sort((a, b) => xAccessor(a) - xAccessor(b))])
    .join("g")
    .attr(
      "transform",
      (d) => `translate(0 ${yScale(yAccessor(d)) + yScale.bandwidth() / 2})`
    );

  dataGroups
    .attr("tabindex", "0")
    .attr("role", "listitem")
    .attr(
      "aria-label",
      (d) => `${yAccessor(d)} recorded a lap of ${xAccessor(d)} seconds`
    );

  dataGroups
    .append("circle")
    .attr("r", "5")
    .attr("fill", fill)
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
    .attr("font-size", "14")
    .attr("font-family", "inherit");

  xAxisGroup
    .append("text")
    .attr(
      "transform",
      `translate(${dimensions.boundedWidth / 2} ${
        dimensions.margin.bottom - 3
      })`
    )
    .attr("text-anchor", "middle")
    .attr("fill", "currentColor")
    .attr("font-size", "16")
    .attr("font-family", "inherit")
    .text(label);

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
    .attr("font-size", "20")
    .attr("font-weight", "bold")
    .attr("font-family", "inherit")
    .style("text-transform", "capitalize")
    .text(title);

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

  wrapper.selectAll("text").attr("aria-hidden", "true");
}

function drawBarplot({ title, label, data }) {
  const dimensions = {
    width: 1000,
    height: 240,
    margin: {
      top: 30,
      right: 20,
      bottom: 20,
      left: 55,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const xAccessor = (d) => d.key;
  const yAccessor = (d) => d.value;

  const xScale = scaleBand()
    .domain(
      data.sort((a, b) => yAccessor(a) - yAccessor(b)).map((d) => xAccessor(d))
    )
    .range([0, dimensions.boundedWidth])
    .padding(0.1);

  const yScale = scaleLinear()
    .domain([0, max(data, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAxis = axisBottom(xScale);

  const yAxis = axisLeft(yScale)
    .ticks(4)
    .tickFormat((d) => format("~")(d));

  const wrapper = main
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  wrapper.attr("tabindex", "0").attr("role", "figure");

  wrapper.append("title").text(title);

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const dataGroup = bounds.append("g");
  const axisGroup = bounds.append("g");

  dataGroup
    .attr("tabindex", "0")
    .attr("role", "list")
    .attr("aria-label", "F1 drivers data");

  const dataGroups = dataGroup
    .selectAll("g")
    .data(data)
    .join("g")
    .attr(
      "transform",
      (d) => `translate(${xScale(xAccessor(d))} ${yScale(yAccessor(d))})`
    );

  dataGroups
    .attr("tabindex", "0")
    .attr("role", "listitem")
    .attr(
      "aria-label",
      (d) => `${xAccessor(d)} gap to the idea lap was ${yAccessor(d)} seconds`
    );

  dataGroups
    .append("rect")
    .attr("fill", "hsl(0, 100%, 50%)")
    .attr("height", (d) => dimensions.boundedHeight - yScale(yAccessor(d)))
    .attr("width", xScale.bandwidth());

  dataGroups
    .append("text")
    .attr("transform", `translate(${xScale.bandwidth() / 2} -4)`)
    .attr("text-anchor", "middle")
    .attr("fill", "currentColor")
    .attr("font-size", "13")
    .attr("font-family", "inherit")
    .text((d) => `+${yAccessor(d)}`);

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
    .attr("font-size", "14")
    .attr("font-family", "inherit");

  xAxisGroup
    .append("path")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-linecap", "square");

  yAxisGroup
    .append("text")
    .attr("transform", "translate(0 -10)")
    .attr("text-anchor", "start") // override default of the y axis
    .attr("fill", "currentColor")
    .attr("font-size", "20")
    .attr("font-weight", "bold")
    .attr("font-family", "inherit")
    .style("text-transform", "capitalize")
    .text(title);

  yAxisGroup
    .append("text")
    .attr(
      "transform",
      `translate(${-dimensions.margin.left + 14} ${
        dimensions.boundedHeight / 2
      }) rotate(-90)`
    )
    .attr("text-anchor", "middle")
    .attr("fill", "currentColor")
    .attr("font-size", "16")
    .attr("font-family", "inherit")
    .text(label);

  yAxisGroup
    .append("path")
    .attr("d", `M 0 0 v ${dimensions.boundedHeight}`)
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-linecap", "square");

  yAxisGroup.select("g.tick:last-of-type").remove();

  yAxisGroup
    .selectAll("g.tick")
    .filter((_, i) => i > 0)
    .append("path")
    .attr("d", "M 0 0 h 5")
    .attr("fill", "none")
    .attr("stroke", "currentColor");

  wrapper.selectAll("text").attr("aria-hidden", "true");
}

drawDotplot({
  title: "Classified order",
  label: "Lap time (s)",
  data: data.map(({ key, lap }) => {
    const [m, s, ms] = lap.split(/[:.]/).map((d) => parseInt(d, 10));
    const value = m * 60 + s + ms / 1000;
    return {
      key,
      value,
    };
  }),
});

drawDotplot({
  title: "Ideal order",
  label: "Lap time (s)",
  data: data.map(({ key, lap, gap_to_ideal }) => {
    const [m, s, ms] = lap.split(/[:.]/).map((d) => parseInt(d, 10));
    const value = m * 60 + s + ms / 1000 - gap_to_ideal;
    return {
      key,
      value,
    };
  }),
  fill: "hsl(119, 97%, 46%)",
});

drawBarplot({
  title: "Gap to ideal lap",
  label: "Gap (s)",
  data: data.map(({ key, gap_to_ideal }) => ({
    key,
    value: gap_to_ideal,
  })),
});
