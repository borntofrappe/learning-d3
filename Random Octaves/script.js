const numberInitialPoints = 5;
const numberOctaves = 4;
const width = 500;
const height = 100;

const margin = {
  top: 5,
  right: 10,
  bottom: 5,
  left: 10,
};

const lines = Array(numberOctaves)
  .fill()
  .map((_, i) => {
    const numberPoints = numberInitialPoints * 2 ** i;
    const heightLine = 1 / 2 ** i;

    return Array(numberPoints)
      .fill()
      .map((_, i, { length }) => {
        const x = (1 / (length - 1)) * i;
        const y = Math.random() * heightLine;

        return { x, y };
      });
  });

const scaleX = d3.scaleLinear().range([0, width]);
const scaleY = d3.scaleLinear().range([height, 0]);

const line = d3
  .line()
  .x(({ x }) => scaleX(x))
  .y(({ y }) => scaleY(y))
  .curve(d3.curveCatmullRom);

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const defs = svg.append("defs");
defs
  .append("clipPath")
  .attr("id", "clip-lines")
  .append("rect")
  .attr("width", width)
  .attr("height", height);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.right})`);

const groupAxis = group.append("g");
const groupData = group.append("g");

groupAxis
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M 0 0 h ${width} v ${height} h ${-width}z`);

groupData
  .attr("clip-path", "url(#clip-lines)")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1");

const groupLines = groupData.selectAll("g").data(lines).enter().append("g");

groupLines
  .append("path")
  .datum((d) => d)
  .attr("d", line);
