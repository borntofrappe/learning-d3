const waffle = () => {
  let size = [10, 10];
  function waffle(data) {
    const width = size[0] / 10;
    const height = size[1] / 10;
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
            const x = ((a.length + i) % 10) * width;
            const y = Math.floor((a.length + i) / 10) * height;
            return {
              data: d,
              x,
              y,
              width,
              height,
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

  return waffle;
};

const percentages = [32, 17];
const colors = ["red", "blue"];

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
  .data(waffle().size([width, height])(percentages))
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => (d.data ? scaleColor(d.data) : "hsl(0, 0%, 90%)"));
