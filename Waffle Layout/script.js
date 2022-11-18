const waffle = () => {
  let size = [10, 10];
  let dimensions = [10, 10];
  let padding = 0.1;
  let rounding = 0.1;
  let reverse = false;
  let flip = false;

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
    ];

    if (reverse) grid.reverse();
    return grid.reduce(
      (a, c) => [
        ...a,
        ...c.map((d, i) => {
          const x = flip
            ? ((a.length + i) % dx) * w + px
            : (dx - 1 - ((a.length + i) % dx)) * w + px;
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

  waffle.flip = function (bool) {
    if (!arguments.length) return flip;
    flip = bool;
    return this;
  };

  waffle.reverse = function (bool) {
    if (!arguments.length) return reverse;
    reverse = bool;
    return this;
  };

  return waffle;
};

const width = 500;
const height = 500;

const margin = 10;

const values = [59, 18, 9, 8, 5, 1];
const colors = d3.schemeSet2;

const scaleColor = d3.scaleOrdinal().domain(values).range(colors);

const waffleGenerator = waffle()
  .size([width, height])
  .padding(0.1)
  .rounding(0.1)
  .flip(true)
  .dimensions([10, 10]);

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
