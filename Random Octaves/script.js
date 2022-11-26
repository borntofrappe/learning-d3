const n = 5;
const width = 500;
const height = 100;

const points = Array(5)
  .fill()
  .map((_, i, { length }) => {
    const x = (width / (length - 1)) * i;
    const y = Math.random() * height;

    return { x, y };
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

const groupLine = svg
  .append("g")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "2");

groupLine.append("path").datum(points).attr("d", line);
