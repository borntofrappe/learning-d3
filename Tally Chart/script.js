const data = [
  { month: "January", value: 19 },
  { month: "February", value: 16 },
  { month: "March", value: 15 },
  { month: "April", value: 11 },
  { month: "May", value: 9 },
  { month: "June", value: 9 },
  { month: "July", value: 10 },
  { month: "August", value: 12 },
  { month: "September", value: 14 },
  { month: "October", value: 18 },
  { month: "November", value: 19 },
  { month: "December", value: 19 },
];

const tallyChart = () => {
  let datum = 5;
  let strokeWidth = 0.5;
  const tallyChart = (selection) => {
    const marks = Array(datum)
      .fill()
      .map((_, i) => i)
      .reduce((acc, curr) => {
        if (curr % 5 === 0) acc.push([]);

        acc[acc.length - 1].push(curr);
        return acc;
      }, []);

    const svg = selection
      .append("svg")
      .attr("viewBox", `0 0 ${5 * marks.length} 5`);

    const defs = svg.append("defs");

    const filter = defs
      .append("filter")
      .attr("id", `filter-tally-${datum}`)
      .attr("filterUnits", "userSpaceOnUse");

    const baseFrequency = Math.random() ** 2;
    const numOctaves = Math.floor(Math.random() * 3) + 1;
    const scale = Math.random() ** 0.5;

    filter
      .append("feTurbulence")
      .attr("type", "turbulence")
      .attr("baseFrequency", "0.2")
      .attr("numOctaves", numOctaves)
      .attr("result", `turbulence-tally-${datum}`);

    filter
      .append("feDisplacementMap")
      .attr("in", "SourceGraphic")
      .attr("in2", `turbulence-tally-${datum}`)
      .attr("scale", scale)
      .attr("xChannelSelector", "R")
      .attr("yChannelSelector", "G");

    defs.append("path").attr("id", `mark-${datum}-0`).attr("d", "M 0 0 v 3");
    defs.append("path").attr("id", `mark-${datum}-1`).attr("d", "M 1 0 v 3");
    defs.append("path").attr("id", `mark-${datum}-2`).attr("d", "M 2 0 v 3");
    defs.append("path").attr("id", `mark-${datum}-3`).attr("d", "M 3 0 v 3");
    defs
      .append("path")
      .attr("id", `mark-${datum}-4`)
      .attr("d", "M -0.5 2.4 l 4 -1.8");

    const group = svg
      .append("g")
      .attr("transform", "translate(1 1)")
      .attr("filter", `url(#filter-tally-${datum})`);

    const groupMarks = group
      .append("g")
      .style("color", "var(--color-mark, currentColor)")
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", strokeWidth)
      .attr("stroke-linecap", "square");

    const groupsMarks = groupMarks
      .selectAll("g")
      .data(marks)
      .enter()
      .append("g")
      .attr("transform", (_, i) => `translate(${5 * i} 0)`);

    groupsMarks
      .selectAll("use")
      .data((d) => d)
      .enter()
      .append("use")
      .attr("href", (_, i) => `#mark-${datum}-${i}`);
  };

  tallyChart.datum = function (value) {
    if (!arguments.length) return datum;

    datum = value;
    return this;
  };

  tallyChart.strokeWidth = function (value) {
    if (!arguments.length) return strokeWidth;

    strokeWidth = value;
    return this;
  };

  return tallyChart;
};

const table = d3.select("body").append("table");

const tableData = table
  .append("tbody")
  .selectAll("tr")
  .data(data)
  .enter()
  .append("tr");

tableData.append("td").text((d) => d.month);

tableData.append("td").each(function (d) {
  d3.select(this).call(tallyChart().datum(d.value).strokeWidth(0.3));
});
