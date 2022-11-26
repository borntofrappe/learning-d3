const numberInitialPoints = 5;
const numberOctaves = 4;
const width = 500;
const height = 100;

const lines = Array(numberOctaves)
  .fill()
  .map((_, i) => {
    const numberPoints = numberInitialPoints * (i + 1);
    const heightLine = height / (i + 1);

    return Array(numberPoints)
      .fill()
      .map((_, i, { length }) => {
        const x = (width / (length - 1)) * i;
        const y = Math.random() * heightLine;

        return { x, y };
      });
  });

const line = d3
  .line()
  .x(({ x }) => x)
  .y(({ y }) => height - y)
  .curve(d3.curveCatmullRom);

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`);

const group = svg
  .append("g")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1");

const groupLines = group.selectAll("g").data(lines).enter().append("g");

groupLines
  .append("path")
  .datum((d) => d)
  .attr("d", line);
