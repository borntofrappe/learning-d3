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

const root = d3.select("body").append("div").attr("id", "root");

const header = root.append("header");
header.append("h1").text("Perlin-like noise");

header
  .append("p")
  .html(
    "One way to create Perlin like noise is through a series of <em>octaves</em>, functions interpolating the position of random values."
  );

const svg = root
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right + padding.x * 2} ${
      height + margin.top + margin.bottom + padding.y * 2
    }`
  );

const groupMargin = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.right})`);

const groupFrame = groupMargin.append("g");

groupFrame
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

const controls = root.append("div");
controls.append("h2").text("Step 1");
controls
  .append("button")
  .text("Compute random values")
  .on(
    "click",
    () => {
      controls.transition().style("opacity", "0").style("visibility", "hidden");

      const numberInitialPoints = 5;
      const numberOctaves = 5;

      const scaleX = d3.scaleLinear().range([0, width]);
      const scaleY = d3.scaleLinear().range([height, 0]);

      const line = d3
        .line()
        .x(({ x }) => scaleX(x))
        .y(({ y }) => scaleY(y))
        .curve(d3.curveCatmullRom);

      const points = Array(numberInitialPoints)
        .fill()
        .map((_, i, { length }) => {
          const x = (1 / (length - 1)) * i;
          const y = Math.random();

          return { x, y };
        });

      const transition = d3.transition().duration(500);

      const groupPadding = groupMargin
        .append("g")
        .attr("transform", `translate(${padding.x} ${padding.y})`);

      const groupPoints = groupPadding.append("g").attr("fill", "currentColor");

      groupPoints
        .selectAll("circle")
        .data(points)
        .enter()
        .append("circle")
        .attr("transform", ({ x, y }) => `translate(${scaleX(x)} ${scaleY(y)})`)
        .attr("r", "0")
        .transition(transition)
        .delay((_, i) => 50 * i)
        .attr("r", "4");

      transition.on("end", () => {
        controls.select("h2").text("Step 2");
        controls.select("button").text("Interpolate between the points");

        controls
          .transition()
          .delay(250)
          .style("opacity", "1")
          .style("visibility", "visible");

        controls.select("button").on(
          "click",
          () => {
            controls
              .transition()
              .style("opacity", "0")
              .style("visibility", "hidden");

            const transition = d3.transition().duration(500);
            const groupOctaves = groupPadding
              .append("g")
              .attr("fill", "none")
              .attr("stroke", "currentColor")
              .attr("stroke-width", "1");

            groupOctaves
              .append("path")
              .datum(points)
              .attr("class", "octave")
              .attr("d", line)
              .attr("pathLength", "1")
              .attr("stroke-dasharray", "1")
              .attr("stroke-dashoffset", "1")
              .transition(transition)
              .attr("stroke-dashoffset", "0");

            transition.on("end", () => {
              controls.select("h2").text("Step 3");
              controls
                .select("button")
                .text(
                  "Repeat the process with more points and smaller random values"
                );

              groupPoints
                .attr("opacity", "1")
                .transition()
                .attr("opacity", "0")
                .remove();

              controls
                .transition()
                .delay(250)
                .style("opacity", "1")
                .style("visibility", "visible");

              controls.select("button").on(
                "click",
                () => {
                  controls
                    .transition()
                    .style("opacity", "0")
                    .style("visibility", "hidden");

                  const pointsOctaves = Array(numberOctaves - 1)
                    .fill()
                    .map((_, i) => {
                      const numberPoints = numberInitialPoints * 2 ** (i + 1);
                      const heightLine = 1 / 2 ** (i + 1);

                      return Array(numberPoints)
                        .fill()
                        .map((_, i, { length }) => {
                          const x = (1 / (length - 1)) * i;
                          const y = Math.random() * heightLine;

                          return { x, y };
                        });
                    });

                  const transition = d3.transition().duration(500);

                  groupOctaves
                    .selectAll("path.octaves")
                    .data(pointsOctaves)
                    .enter()
                    .append("path")
                    .attr("class", "octaves")
                    .attr("d", line)
                    .attr("pathLength", "1")
                    .attr("stroke-dasharray", "1")
                    .attr("stroke-dashoffset", "1")
                    .transition(transition)
                    .attr("stroke-dashoffset", "0");

                  transition.on("end", () => {
                    controls.select("h2").text("Step 4");
                    controls.select("button").text("Add up lines");

                    controls
                      .transition()
                      .delay(250)
                      .style("opacity", "1")
                      .style("visibility", "visible");

                    const octaves = groupOctaves.selectAll("path").nodes();
                    const pathLength = octaves[0].getTotalLength();
                    const pointsNoise = Array(width + 1)
                      .fill()
                      .map((_, i, { length }) => {
                        const x = i;
                        const y0 = scaleY.invert(
                          octaves[0].getPointAtLength(x).y
                        );
                        const y1 = octaves.reduce(
                          (acc, curr) =>
                            acc + scaleY.invert(curr.getPointAtLength(x).y),
                          0
                        );

                        return { x, y0, y1 };
                      });

                    controls.select("button").on(
                      "click",
                      () => {
                        controls
                          .transition()
                          .style("opacity", "0")
                          .style("visibility", "hidden");

                        const max = d3.max(pointsNoise, (d) => d.y1);
                        scaleY.domain([0, max]);

                        const transition = d3.transition().duration(700);
                        groupOctaves
                          .selectAll("path")
                          .transition(transition)
                          .attr("d", line);

                        transition.on("end", () => {
                          const groupNoise = groupPadding
                            .append("g")
                            .style("color", "red");

                          groupNoise
                            .append("path")
                            .attr("fill", "none")
                            .attr("stroke", "currentColor")
                            .attr("stroke-width", "1");

                          groupNoise
                            .append("circle")
                            .attr("r", "4")
                            .attr("fill", "currentColor");

                          const transition = d3
                            .transition()
                            .duration(2000)
                            .ease(d3.easeCubicInOut);

                          const noise = pointsNoise.map(({ x, y1 }) => ({
                            x,
                            y: scaleY(y1),
                          }));

                          const pointsPaths = [points, ...pointsOctaves];

                          console.log(pointsPaths);
                          transition.tween("noise", () => {
                            const i = d3.interpolateNumber(0, 1);
                            return (t) => {
                              const index = Math.floor(
                                i(t) * (noise.length - 1)
                              );

                              groupNoise.select("path").attr(
                                "d",
                                noise
                                  .slice(0, index)
                                  .reduce(
                                    (acc, curr) => `${acc} ${curr.x} ${curr.y}`,
                                    "M "
                                  )
                              );

                              const { x, y } = noise[index];

                              groupNoise
                                .select("circle")
                                .attr("transform", `translate(${x} ${y})`);

                              groupOctaves
                                .selectAll("path")
                                .attr("stroke-dashoffset", -i(t));
                            };
                          });

                          transition.on("end", () => {
                            groupNoise
                              .select("circle")
                              .transition()
                              .attr("r", "0")
                              .remove();

                            groupOctaves.remove();
                          });
                        });
                      },
                      { once: true }
                    );
                  });
                },
                { once: true }
              );
            });
          },
          { once: true }
        );
      });
    },
    { once: true }
  );
