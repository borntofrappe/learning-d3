const data = [
  {
    label: "Styled Components",
    color: "hsl(231, 81%, 60%)",
    satisfaction: [
      { year: 2019, ranking: 3, percentage: 0.85 },
      { year: 2020, ranking: 2, percentage: 0.821 },
      { year: 2021, ranking: 4, percentage: 0.766 },
    ],
    interest: [
      { year: 2019, ranking: 2, percentage: 0.677 },
      { year: 2020, ranking: 2, percentage: 0.601 },
      { year: 2021, ranking: 5, percentage: 0.541 },
    ],
    usage: [
      { year: 2019, ranking: 1, percentage: 0.397 },
      { year: 2020, ranking: 1, percentage: 0.516 },
      { year: 2021, ranking: 1, percentage: 0.523 },
    ],
    awareness: [
      { year: 2019, ranking: 1, percentage: 0.791 },
      { year: 2020, ranking: 1, percentage: 0.857 },
      { year: 2021, ranking: 1, percentage: 0.869 },
    ],
  },
  {
    label: "JSS",
    color: "hsl(180, 54%, 52%)",
    satisfaction: [
      { year: 2019, ranking: 5, percentage: 0.593 },
      { year: 2020, ranking: 8, percentage: 0.579 },
      { year: 2021, ranking: 13, percentage: 0.503 },
    ],
    interest: [
      { year: 2019, ranking: 5, percentage: 0.379 },
      { year: 2020, ranking: 9, percentage: 0.369 },
      { year: 2021, ranking: 13, percentage: 0.302 },
    ],
    usage: [
      { year: 2019, ranking: 5, percentage: 0.068 },
      { year: 2020, ranking: 5, percentage: 0.144 },
      { year: 2021, ranking: 5, percentage: 0.14 },
    ],
    awareness: [
      { year: 2019, ranking: 4, percentage: 0.309 },
      { year: 2020, ranking: 4, percentage: 0.474 },
      { year: 2021, ranking: 5, percentage: 0.486 },
    ],
  },
  {
    label: "Styled JSX",
    color: "hsl(338, 83%, 62%)",
    satisfaction: [
      { year: 2019, ranking: 4, percentage: 0.672 },
      { year: 2020, ranking: 6, percentage: 0.681 },
      { year: 2021, ranking: 11, percentage: 0.616 },
    ],
    interest: [
      { year: 2019, ranking: 4, percentage: 0.446 },
      { year: 2020, ranking: 7, percentage: 0.408 },
      { year: 2021, ranking: 11, percentage: 0.36 },
    ],
    usage: [
      { year: 2019, ranking: 3, percentage: 0.137 },
      { year: 2020, ranking: 3, percentage: 0.265 },
      { year: 2021, ranking: 3, percentage: 0.25 },
    ],
    awareness: [
      { year: 2019, ranking: 3, percentage: 0.443 },
      { year: 2020, ranking: 3, percentage: 0.622 },
      { year: 2021, ranking: 3, percentage: 0.631 },
    ],
  },
  {
    label: "Emotion",
    color: "hsl(0, 99%, 71%)",
    satisfaction: [
      { year: 2019, ranking: 1, percentage: 0.866 },
      { year: 2020, ranking: 3, percentage: 0.797 },
      { year: 2021, ranking: 6, percentage: 0.736 },
    ],
    interest: [
      { year: 2019, ranking: 3, percentage: 0.565 },
      { year: 2020, ranking: 4, percentage: 0.516 },
      { year: 2021, ranking: 10, percentage: 0.417 },
    ],
    usage: [
      { year: 2019, ranking: 4, percentage: 0.076 },
      { year: 2020, ranking: 4, percentage: 0.162 },
      { year: 2021, ranking: 4, percentage: 0.192 },
    ],
    awareness: [
      { year: 2019, ranking: 5, percentage: 0.271 },
      { year: 2020, ranking: 5, percentage: 0.424 },
      { year: 2021, ranking: 4, percentage: 0.49 },
    ],
  },
  {
    label: "CSS Modules",
    color: "hsl(144, 53%, 54%)",
    satisfaction: [
      { year: 2019, ranking: 2, percentage: 0.858 },
      { year: 2020, ranking: 1, percentage: 0.869 },
      { year: 2021, ranking: 2, percentage: 0.855 },
    ],
    interest: [
      { year: 2019, ranking: 1, percentage: 0.797 },
      { year: 2020, ranking: 1, percentage: 0.752 },
      { year: 2021, ranking: 1, percentage: 0.735 },
    ],
    usage: [
      { year: 2019, ranking: 2, percentage: 0.249 },
      { year: 2020, ranking: 2, percentage: 0.362 },
      { year: 2021, ranking: 2, percentage: 0.411 },
    ],
    awareness: [
      { year: 2019, ranking: 2, percentage: 0.634 },
      { year: 2020, ranking: 2, percentage: 0.727 },
      { year: 2021, ranking: 2, percentage: 0.774 },
    ],
  },
  {
    label: "Styled System",
    color: "hsl(47, 100%, 77%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 4, percentage: 0.796 },
      { year: 2021, ranking: 9, percentage: 0.719 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 3, percentage: 0.568 },
      { year: 2021, ranking: 8, percentage: 0.489 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 6, percentage: 0.074 },
      { year: 2021, ranking: 6, percentage: 0.081 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 6, percentage: 0.215 },
      { year: 2021, ranking: 6, percentage: 0.239 },
    ],
  },
  {
    label: "Stitches",
    color: "hsl(176, 53%, 48%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 5, percentage: 0.69 },
      { year: 2021, ranking: 5, percentage: 0.762 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 6, percentage: 0.457 },
      { year: 2021, ranking: 3, percentage: 0.546 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 8, percentage: 0.011 },
      { year: 2021, ranking: 8, percentage: 0.023 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 7, percentage: 0.082 },
      { year: 2021, ranking: 8, percentage: 0.143 },
    ],
  },
  {
    label: "Fela",
    color: "hsl(29, 85%, 57%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.395 },
      { year: 2021, ranking: 14, percentage: 0.449 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.282 },
      { year: 2021, ranking: 14, percentage: 0.253 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 9, percentage: 0.009 },
      { year: 2021, ranking: 13, percentage: 0.008 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.058 },
      { year: 2021, ranking: 14, percentage: 0.07 },
    ],
  },
  {
    label: "Linaria",
    color: "hsl(101, 48%, 42%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 7, percentage: 0.638 },
      { year: 2021, ranking: 10, percentage: 0.693 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 5, percentage: 0.463 },
      { year: 2021, ranking: 6, percentage: 0.504 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 7, percentage: 0.013 },
      { year: 2021, ranking: 11, percentage: 0.017 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 8, percentage: 0.079 },
      { year: 2021, ranking: 11, percentage: 0.106 },
    ],
  },
  {
    label: "Astroturf",
    color: "hsl(203, 89%, 53%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 9, percentage: 0.575 },
      { year: 2021, ranking: 12, percentage: 0.591 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 8, percentage: 0.376 },
      { year: 2021, ranking: 12, percentage: 0.352 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 10, percentage: 0.006 },
      { year: 2021, ranking: 14, percentage: 0.007 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: 9, percentage: 0.063 },
      { year: 2021, ranking: 12, percentage: 0.08 },
    ],
  },
  {
    label: "Twin",
    color: "hsl(259, 48%, 55%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 8, percentage: 0.73 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.49 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 10, percentage: 0.017 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 13, percentage: 0.078 },
    ],
  },
  {
    label: "Theme UI",
    color: "hsl(242, 67%, 81%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.731 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 4, percentage: 0.541 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.033 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 10, percentage: 0.131 },
    ],
  },
  {
    label: "vanilla-extract",
    color: "hsl(231, 81%, 60%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 1, percentage: 0.873 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 2, percentage: 0.677 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 12, percentage: 0.014 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 7, percentage: 0.164 },
    ],
  },
  {
    label: "Windi CSS",
    color: "hsl(180, 54%, 52%)",
    satisfaction: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 3, percentage: 0.836 },
    ],
    interest: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 9, percentage: 0.452 },
    ],
    usage: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 9, percentage: 0.022 },
    ],
    awareness: [
      { year: 2019, ranking: null, percentage: 0 },
      { year: 2020, ranking: null, percentage: 0 },
      { year: 2021, ranking: 9, percentage: 0.135 },
    ],
  },
].map((d) => ({
  ...d,
  key: d.label.replace(/\s/g, ""),
}));

const options = ["satisfaction", "usage", "satisfaction", "awareness"];
const years = [2019, 2020, 2021];

const [option] = options;

const width = 900;
const height = 900;
const margin = {
  x: 150,
  y: 50,
};

const scaleX = d3.scaleBand().domain(years).range([0, width]);
const scaleY = d3
  .scaleBand()
  .domain(d3.range(1, data.length + 1))
  .range([0, height]);

const line = d3
  .line()
  .x((d) => scaleX(d.year) + scaleX.bandwidth() / 2)
  .y((d) => scaleY(d.ranking) + scaleY.bandwidth() / 2)
  .defined((d) => d.ranking)
  .curve(d3.curveBumpX);

const formatPercentage = d3.format(".0%");
const markerWidth = scaleX.bandwidth() / 3;

const root = d3.select("body").append("div").attr("id", "root");

const controls = root.append("div").attr("id", "controls");

controls
  .selectAll("button")
  .data(options)
  .enter()
  .append("button")
  .text((d) => d)
  .style("text-transform", "capitalize");

const viz = root.append("div").attr("id", "viz").style("position", "relative");

const tooltip = viz
  .append("div")
  .attr("id", "tooltip")
  .style("position", "absolute")
  .style("pointer-events", "none")
  .style("visibility", "hidden")
  .style("opacity", "0");

const svg = viz
  .append("svg")
  .attr("viewBox", `0 0 ${width + margin.x * 2} ${height + margin.y * 2}`);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.x} ${margin.y})`);

const defs = svg.append("defs");

const groupYears = group.append("g");
const groupData = group.append("g");

const groupsYears = groupYears
  .selectAll("g")
  .data(years)
  .enter()
  .append("g")
  .attr(
    "transform",
    (d) => `translate(${scaleX(d) + scaleX.bandwidth() / 2} 0)`
  );

groupsYears
  .append("path")
  .attr("opacity", "0.5")
  .attr("fill", "none")
  .attr("stroke", "hsl(38, 100%, 95%)")
  .attr("stroke-width", "1")
  .attr("stroke-dasharray", "3 5")
  .attr("d", `M 0 0 V ${height}`);

const groupsYearsLabels = groupsYears
  .append("g")
  .attr("text-anchor", "middle")
  .attr("font-size", "11")
  .attr("font-family", "sans-serif")
  .attr("fill", "currentColor");

groupsYearsLabels
  .append("text")
  .text((d) => d)
  .attr("y", "-8");

groupsYearsLabels
  .append("text")
  .text((d) => d)
  .attr("y", height + 12);

const groupsData = groupData
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("id", ({ key }) => key)
  .style("color", (d) => d.color);

const groupsDataLabels = groupsData
  .append("g")
  .attr("dominant-baseline", "central")
  .attr("font-size", "12")
  .attr("font-weight", "700")
  .attr("font-family", "sans-serif")
  .attr("fill", "currentColor");

groupsDataLabels
  .filter((d) => d[option][0].ranking)
  .append("text")
  .attr("class", "start")
  .attr("text-anchor", "end")
  .text(({ label }) => label)
  .attr("transform", (d) => {
    const { ranking } = d[option][0];
    const y = scaleY(ranking) + scaleY.bandwidth() / 2;
    return `translate(0 ${y})`;
  });

groupsDataLabels
  .filter((d) => d[option][d[option].length - 1].ranking)
  .append("text")
  .attr("class", "end")
  .text(({ label }) => label)
  .attr("transform", (d) => {
    const { ranking } = d[option][d[option].length - 1];
    const y = scaleY(ranking) + scaleY.bandwidth() / 2;
    return `translate(${width} ${y})`;
  });

const groupsDataLines = groupsData
  .append("g")
  .datum((d) => d[option])
  .attr("class", "swooshing-line")
  .attr("fill", "none")
  .attr("stroke-linecap", "round")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "5");

groupsDataLines.append("path").attr("d", line);
groupsDataLines
  .append("path")
  .attr("class", "start")
  .attr("d", (d) => {
    const { year, ranking } = d.find((d) => d.ranking !== null);
    const x = scaleX(year) + scaleX.bandwidth() / 2;
    const y = scaleY(ranking) + scaleY.bandwidth() / 2;

    return `M ${x} ${y} h -${markerWidth}`;
  });
groupsDataLines
  .append("path")
  .attr("class", "end")
  .attr("d", (d) => {
    const { year, ranking } = [...d].reverse().find((d) => d.ranking !== null);
    const x = scaleX(year) + scaleX.bandwidth() / 2;
    const y = scaleY(ranking) + scaleY.bandwidth() / 2;

    return `M ${x} ${y} h ${markerWidth}`;
  });

const groupsPercentages = groupsData
  .selectAll("g.percentages")
  .data((d) => d[option].filter(({ ranking }) => ranking !== null))
  .enter()
  .append("g")
  .attr("class", "percentages")
  .attr("transform", ({ year, ranking }) => {
    const x = scaleX(year) + scaleX.bandwidth() / 2;
    const y = scaleY(ranking) + scaleY.bandwidth() / 2;

    return `translate(${x} ${y})`;
  });

const groupsPercentagesDetails = groupsPercentages.append("g");

groupsPercentagesDetails
  .append("circle")
  .attr("fill", "hsl(345, 5%, 15%)")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "3.5")
  .attr("r", "20");

groupsPercentagesDetails
  .append("text")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "11")
  .attr("font-family", "sans-serif")
  .attr("fill", "hsl(38, 100%, 95%)")
  .attr("letter-spacing", "0.25")
  .text((d) => formatPercentage(d.percentage));

const groupsInteraction = groupsData
  .append("g")
  .attr("class", "interaction")
  .attr("opacity", "0");

groupsInteraction
  .append("rect")
  .attr("class", "start")
  .attr("fill", "currentColor")
  .attr("transform", (d) => {
    const { year, ranking } = d[option].find((d) => d.ranking !== null);

    const x = scaleX(year) + scaleX.bandwidth() / 2 - markerWidth;
    const y = scaleY(ranking);

    return `translate(${x} ${y})`;
  })
  .attr("width", markerWidth)
  .attr("height", scaleY.bandwidth());

groupsInteraction
  .append("rect")
  .attr("class", "end")
  .attr("fill", "currentColor")
  .attr("transform", (d) => {
    const { year, ranking } = d[option][d[option].length - 1];

    const x = scaleX(year) + scaleX.bandwidth() / 2;
    const y = scaleY(ranking);

    return `translate(${x} ${y})`;
  })
  .attr("width", markerWidth)
  .attr("height", scaleY.bandwidth());

groupsInteraction
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", scaleY.bandwidth())
  .attr("d", (d) => line(d[option]));

controls.select("button").attr("class", "active");
controls.selectAll("button").on("click", function (e, option) {
  if (d3.select(this).classed("active")) return;

  controls.select("button.active").classed("active", false);
  d3.select(this).classed("active", true);

  const transition = d3.transition().duration(500).ease(d3.easeQuadInOut);

  groupsDataLabels
    .filter((d) => d[option][0].ranking)
    .select("text.start")
    .transition(transition)
    .attr("transform", (d) => {
      const { ranking } = d[option][0];
      const y = scaleY(ranking);
      return `translate(0 ${y + scaleY.bandwidth() / 2})`;
    });

  groupsDataLabels
    .filter((d) => d[option][d[option].length - 1].ranking)
    .select("text.end")
    .transition(transition)
    .attr("transform", (d) => {
      const { ranking } = d[option][d[option].length - 1];
      const y = scaleY(ranking) + scaleY.bandwidth() / 2;
      return `translate(${width} ${y})`;
    });

  const groupsDataLines = groupsData
    .select("g.swooshing-line")
    .datum((d) => d[option]);

  groupsDataLines.select("path").transition(transition).attr("d", line);
  groupsDataLines
    .select("path.start")
    .transition(transition)
    .attr("d", (d) => {
      const { year, ranking } = d.find((d) => d.ranking !== null);
      const x = scaleX(year) + scaleX.bandwidth() / 2;
      const y = scaleY(ranking) + scaleY.bandwidth() / 2;

      return `M ${x} ${y} h -${markerWidth}`;
    });
  groupsDataLines
    .select("path.end")
    .transition(transition)
    .attr("d", (d) => {
      const { year, ranking } = [...d]
        .reverse()
        .find((d) => d.ranking !== null);
      const x = scaleX(year) + scaleX.bandwidth() / 2;
      const y = scaleY(ranking) + scaleY.bandwidth() / 2;

      return `M ${x} ${y} h ${markerWidth}`;
    });

  const groupsPercentages = groupsData
    .selectAll("g.percentages")
    .data((d) => d[option].filter(({ ranking }) => ranking !== null))
    .transition(transition)
    .attr("transform", ({ year, ranking }) => {
      const x = scaleX(year) + scaleX.bandwidth() / 2;
      const y = scaleY(ranking) + scaleY.bandwidth() / 2;

      return `translate(${x} ${y})`;
    });

  groupsPercentages.select("text").text((d) => formatPercentage(d.percentage));

  const groupsInteraction = groupsData.select("g.interaction");

  groupsInteraction
    .select("path")
    .transition(transition)
    .attr("d", (d) => line(d[option]));

  groupsInteraction
    .select("rect.start")
    .transition(transition)
    .attr("transform", (d) => {
      const { year, ranking } = d[option].find((d) => d.ranking !== null);

      const x = scaleX(year) + scaleX.bandwidth() / 2 - markerWidth;
      const y = scaleY(ranking);

      return `translate(${x} ${y})`;
    });

  groupsInteraction
    .select("rect.end")
    .transition(transition)
    .attr("transform", (d) => {
      const { year, ranking } = d[option][d[option].length - 1];

      const x = scaleX(year) + scaleX.bandwidth() / 2;
      const y = scaleY(ranking);

      return `translate(${x} ${y})`;
    });
});

groupsInteraction
  .on("pointerenter", function (e, { label, color, key }) {
    groupsData.transition().attr("opacity", "0.35");
    groupsData
      .select("g.swooshing-line")
      .transition()
      .attr("stroke-width", "4");
    groupsData
      .selectAll("g.percentages g")
      .transition()
      .attr("transform", "scale(0)");

    d3.select(`g#${key}`).transition().attr("opacity", "1");
    d3.select(`g#${key}`)
      .select("g.swooshing-line")
      .transition()
      .attr("stroke-width", "5.5");
    d3.select(`g#${key}`)
      .selectAll("g.percentages g")
      .transition()
      .attr("transform", "scale(1.15)");

    tooltip.style("visibility", "visible").style("opacity", "1");

    tooltip
      .append("span")
      .style("display", "block")
      .style("width", "0.9em")
      .style("height", "0.9em")
      .style("background", color);

    tooltip.append("h2").text(label);
  })
  .on("pointermove", (e) => {
    tooltip.style("left", `${e.offsetX}px`).style("top", `${e.offsetY - 7}px`);
  })
  .on("pointerleave", () => {
    tooltip
      .style("visibility", "hidden")
      .style("opacity", "0")
      .selectAll("*")
      .remove();
  });

svg.on("pointerleave", () => {
  groupsData.transition().attr("opacity", "1");
  groupsData.select("g.swooshing-line").transition().attr("stroke-width", "4");
  groupsData
    .selectAll("g.percentages g")
    .transition()
    .attr("transform", "scale(1)");
});
