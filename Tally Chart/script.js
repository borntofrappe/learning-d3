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

    const group = svg.append("g").attr("transform", "translate(1 1)");

    const groupMarks = group
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", "0.5")
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
      .attr("href", (_, i) => `#mark-${i}`);
  };

  tallyChart.datum = function (value) {
    if (!arguments.length) return datum;

    datum = value;
    return this;
  };

  return tallyChart;
};

const defs = d3
  .select("body")
  .append("svg")
  .style("display", "none")
  .append("defs");

defs.append("path").attr("id", "mark-0").attr("d", "M 0 0 v 3");
defs.append("path").attr("id", "mark-1").attr("d", "M 1 0 v 3");
defs.append("path").attr("id", "mark-2").attr("d", "M 2 0 v 3");
defs.append("path").attr("id", "mark-3").attr("d", "M 3 0 v 3");
defs.append("path").attr("id", "mark-4").attr("d", "M -0.5 2.4 l 4 -1.8");

const [, test] = data;
const { value } = test;

d3.select("body").call(tallyChart().datum(value));
