const waffle = () => {
  let size = [10, 10];
  let dimensions = [10, 10];
  let padding = 0.1;
  let rounding = 0.1;
  let reverse = false;
  let flip = false;
  let accessor = (d) => d;

  function waffle(data) {
    const [sx, sy] = size;
    const [dx, dy] = dimensions;
    const w = sx / dx;
    const h = sy / dy;

    const [px, py] = [w, h].map((d) => d * padding);

    const width = w - px * 2;
    const height = h - py * 2;

    const [rx, ry] = [width, height].map((d) => d * rounding);

    const length = data.reduce((a, c) => a + accessor(c), 0);
    const grid = [
      ...data
        .sort((a, b) => accessor(b) - accessor(a))
        .map((d) => {
          const value = accessor(d);
          return Array(value).fill(d);
        }),
      Array(dx * dy - length).fill(null),
    ];

    if (reverse) grid.reverse();

    return grid.reduce(
      (a, c) => [
        ...a,
        ...c.map((data, i) => {
          const x = flip
            ? ((a.length + i) % dx) * w + px
            : (dx - 1 - ((a.length + i) % dx)) * w + px;
          const y = Math.floor((a.length + i) / dx) * h + py;
          return {
            data,
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

  waffle.accessor = function (fn) {
    if (!arguments.length) return accessor;
    accessor = fn;
    return this;
  };

  return waffle;
};

const width = 500;
const height = 500;

const margin = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 280,
};

const data = [
  {
    region: "Africa",
    percentage: 18,
    value: 1427,
  },
  {
    region: "Latin America and the Carribean",
    percentage: 8,
    value: 660,
  },
  {
    region: "Northern America",
    percentage: 5,
    value: 337,
  },
  {
    region: "Europe",
    percentage: 9,
    value: 744,
  },
  {
    region: "Oceania",
    percentage: 1,
    value: 45,
  },
  {
    region: "Asia",
    percentage: 59,
    value: 4723,
  },
];

const regions = [...data]
  .sort((a, b) => b.percentage - a.percentage)
  .map(({ region }) => region);

const scaleColor = d3.scaleOrdinal().domain(regions).range(d3.schemeSet2);

const scaleLegend = d3
  .scaleOrdinal()
  .domain(regions)
  .range(d3.range(regions.length).map((d) => d * 30));

const waffleGenerator = waffle()
  .accessor((d) => d.percentage)
  .size([width, height])
  .rounding(0)
  .flip(true)
  .dimensions([10, 10]);

const dataWaffle = waffleGenerator(data);

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupWaffle = group.append("g");

const groupLegend = group.append("g");

groupWaffle
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
  .attr("fill", (d) =>
    d.data.value ? scaleColor(d.data.region) : "hsl(0, 0%, 90%)"
  );

groupLegend.attr("transform", `translate(${width} 5)`);

const groupsLegend = groupLegend
  .selectAll("g")
  .data(regions)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(0 ${scaleLegend(d)})`);

groupsLegend
  .append("rect")
  .attr("x", "8")
  .attr("width", "16")
  .attr("height", "16")
  .attr("fill", scaleColor);

groupsLegend
  .append("text")
  .attr("x", "30")
  .attr("y", "8")
  .attr("font-weight", "700")
  .attr("dominant-baseline", "middle")
  .text((d) => d);
