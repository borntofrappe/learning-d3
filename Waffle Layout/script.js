const waffle = () => {
  let size = [10, 10];
  let padding = 0;
  let rounding = 0;
  function waffle(data) {
    const cellWidth = size[0] / 10;
    const cellHeight = size[1] / 10;
    const [px, py] = [cellWidth, cellHeight].map((d) => d * padding);

    const width = cellWidth - px * 2;
    const height = cellHeight - py * 2;

    const [rx, ry] = [width, height].map((d) => d * rounding);

    const length = data.reduce((a, c) => a + c, 0);
    const grid = [
      ...data.sort((a, b) => b - a).map((d) => Array(d).fill(d)),
      Array(100 - length).fill(null),
    ]
      .reverse()
      .reduce(
        (a, c) => [
          ...a,
          ...c.map((d, i) => {
            const x = ((a.length + i) % 10) * cellWidth + px;
            const y = Math.floor((a.length + i) / 10) * cellHeight + py;
            return {
              data: d,
              x,
              y,
              width,
              height,
              rx,
              ry,
            };
          }),
        ],
        []
      );

    return grid;
  }

  waffle.size = function (value) {
    if (!arguments.length) return size;
    size = value;
    return this;
  };

  waffle.padding = function (values) {
    if (!arguments.length) return padding;
    padding = values;
    return this;
  };

  waffle.rounding = function (values) {
    if (!arguments.length) return rounding;
    rounding = values;
    return this;
  };

  return waffle;
};

const percentages = [32, 17];
const colors = ["hsl(0, 92%, 68%)", "hsl(234, 81%, 67%)"];

const scaleColor = d3.scaleOrdinal().domain(percentages).range(colors);

const width = 500;
const height = 500;

const margin = 10;

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${width + margin * 2} ${height + margin * 2}`);

svg
  .selectAll("rect")
  .data(waffle().size([width, height]).padding(0.1).rounding(0.1)(percentages))
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("rx", (d) => d.rx)
  .attr("ry", (d) => d.ry)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => (d.data ? scaleColor(d.data) : "hsl(0, 0%, 90%)"));
