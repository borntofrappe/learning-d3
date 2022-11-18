const waffle = () => {
  let size = [10, 10];
  let dimensions = [10, 10];
  let padding = 0;
  let rounding = 0;

  function waffle(data) {
    const [sx, sy] = size;
    const [dx, dy] = dimensions;
    const w = sx / dx;
    const h = sy / dy;

    const [px, py] = [w, h].map((d) => d * padding);

    const width = w - px * 2;
    const height = h - py * 2;

    const [rx, ry] = [width, height].map((d) => d * rounding);

    const length = data.reduce((a, c) => a + c, 0);
    const grid = [
      ...data.sort((a, b) => b - a).map((d) => Array(d).fill(d)),
      Array(dx * dy - length).fill(null),
    ]
      .reverse()
      .reduce(
        (a, c) => [
          ...a,
          ...c.map((d, i) => {
            const x = ((a.length + i) % dx) * w + px;
            const y = Math.floor((a.length + i) / dx) * h + py;
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

  waffle.dimensions = function (value) {
    if (!arguments.length) return dimensions;
    dimensions = value;
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

const width = 500;
const height = 500;

const margin = 10;

const values = [32, 17];
const colors = ["hsl(0, 92%, 68%)", "hsl(234, 81%, 67%)"];

const scaleColor = d3.scaleOrdinal().domain(values).range(colors);

const waffleGenerator = waffle()
  .size([width, height])
  .padding(0.1)
  .rounding(0.1);

const dataWaffle = waffleGenerator(values);

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${width + margin * 2} ${height + margin * 2}`);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

group
  .selectAll("rect")
  .data(dataWaffle)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("rx", (d) => d.rx)
  .attr("ry", (d) => d.ry)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => (d.data ? scaleColor(d.data) : "hsl(0, 0%, 90%)"));
