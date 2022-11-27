const numberInitialPoints = 5;
const numberOctaves = 4;
const width = 500;
const height = 100;

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
};

const padding = {
  x: 0,
  y: 20,
};

const noise = Array(numberOctaves)
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
    `0 0 ${width + margin.left + margin.right + padding.x * 2} ${
      height + margin.top + margin.bottom + padding.y * 2
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.right})`);

const groupAxis = group.append("g");
const groupPadding = group.append("g");
const groupNoise = groupPadding.append("g");
const groupLine = groupPadding.append("g");
const groupArea = groupPadding.append("g");

groupAxis
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr(
    "d",
    `M 0 0 h ${width + padding.x * 2} v ${height + padding.y * 2} h ${-(
      width +
      padding.x * 2
    )}z`
  );

groupPadding.attr("transform", `translate(${padding.x} ${padding.y})`);

groupNoise
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1");

const groupsNoise = groupNoise.selectAll("g").data(noise).enter().append("g");

groupsNoise
  .append("path")
  .datum((d) => d)
  .attr("d", line);

groupLine.attr("fill", "none").attr("stroke", "red").attr("stroke-width", "1");
groupArea.attr("fill", "red").attr("opacity", "0.2");

d3.select("body")
  .append("button")
  .text("Add up")
  .on(
    "click",
    () => {
      const numberPoints = 100;
      const lines = groupNoise.selectAll("path").nodes();

      const pathLength = lines[0].getTotalLength();
      const points = Array(width + 1)
        .fill()
        .map((_, i) => {
          const x = i;
          const y0 = scaleY.invert(lines[0].getPointAtLength(x).y);
          const y1 = lines.reduce(
            (acc, curr) => acc + scaleY.invert(curr.getPointAtLength(x).y),
            0
          );

          return { x, y0, y1 };
        });

      const max = d3.max(points, (d) => d.y1);
      scaleY.domain([0, max]).nice();

      const d0 = points.reduce(
        (acc, curr) => `${acc} ${curr.x} ${scaleY(curr.y0)}`,
        "M"
      );
      const d1 = points.reduce(
        (acc, curr) => `${acc} ${curr.x} ${scaleY(curr.y1)}`,
        "M"
      );

      groupLine.append("path").attr("d", d0);

      const transition = d3.transition();

      groupsNoise.select("path").transition(transition).attr("d", line);
      groupLine.select("path").datum(d1).transition(transition).attr("d", d1);

      transition.on("end", () => {
        const transition = d3.transition();

        groupNoise
          .attr("opacity", "1")
          .transition(transition)
          .attr("opacity", "0")
          .remove();

        groupArea
          .append("path")
          .attr(
            "d",
            `${d1} L ${width} ${height + padding.y} 0 ${height + padding.y}`
          )
          .attr("opacity", "0")
          .transition(transition)
          .attr("opacity", "1");
      });
    },
    {
      once: true,
    }
  );
