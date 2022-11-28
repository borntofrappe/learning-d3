const root = d3.select("body").append("div").attr("id", "root");

const header = root.append("header");
header.append("h1").text("Perlin-like noise");

header
  .append("p")
  .html(
    "One way to create Perlin-like noise is through a series of <em>octaves</em>, functions interpolating the position of random values."
  );

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
  .style("color", "currentColor")
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

const stepper = root.append("div").attr("class", "stepper");
const heading = stepper.append("h2").text("Step 1");
const paragraph = stepper
  .append("p")
  .text("Starting with a blank canvas, add a few random values.");

const button = stepper.append("button");

button.append("span").attr("class", "visually-hidden").text("Step through");

button
  .append("svg")
  .attr("viewBox", "-5 -5 10 10")
  .attr("width", "2em")
  .attr("height", "2em")
  .append("path")
  .attr("fill", "currentColor")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("stroke-linecap", "round")
  .attr("stroke-linejoin", "round")
  .attr("d", "M -1.8 -2.8 l 4 2.8 -4 2.8z");

button.on(
  "click",
  () => {
    stepper.transition().style("opacity", "0").style("visibility", "hidden");

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
      heading.text("Step 2");
      paragraph.text(
        "Interpolate between the points, for instance with a smooth curve."
      );

      stepper
        .transition()
        .delay(250)
        .style("opacity", "1")
        .style("visibility", "visible");

      stepper.select("button").on(
        "click",
        () => {
          stepper
            .transition()
            .style("opacity", "0")
            .style("visibility", "hidden");

          const transition = d3
            .transition()
            .duration(1000)
            .ease(d3.easeQuadInOut);

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
            heading.text("Step 3");
            paragraph.html(
              "Repeat, each time with <strong>more</strong> points, each time with <strong>smaller</strong> random values."
            );

            groupPoints
              .attr("opacity", "1")
              .transition()
              .attr("opacity", "0")
              .remove();

            stepper
              .transition()
              .delay(250)
              .style("opacity", "1")
              .style("visibility", "visible");

            stepper.select("button").on(
              "click",
              () => {
                stepper
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

                const transition = d3
                  .transition()
                  .duration(1500)
                  .ease(d3.easeQuadInOut);

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
                  heading.text("Step 4");
                  paragraph.html(
                    "Create a new line, adding up <strong>all</strong> the points of the different octaves."
                  );

                  stepper
                    .transition()
                    .delay(250)
                    .style("opacity", "1")
                    .style("visibility", "visible")
                    .on("end", () => {
                      const octaves = groupOctaves.selectAll("path").nodes();
                      const pathLength = octaves[0].getTotalLength();
                      const pointsNoise = Array(width + 1)
                        .fill()
                        .map((_, i, { length }) => {
                          const x = (1 / (length - 1)) * i;
                          const y = octaves.reduce(
                            (acc, curr) =>
                              acc + scaleY.invert(curr.getPointAtLength(i).y),
                            0
                          );

                          return { x, y };
                        });

                      stepper.select("button").on(
                        "click",
                        () => {
                          stepper
                            .transition()
                            .style("opacity", "0")
                            .style("visibility", "hidden");

                          const max = d3.max(pointsNoise, (d) => d.y);
                          scaleY.domain([0, max]);

                          const transition = d3
                            .transition()
                            .duration(700)
                            .ease(d3.easeQuadInOut);

                          groupOctaves
                            .selectAll("path")
                            .transition(transition)
                            .attr("d", line);

                          transition.on("end", () => {
                            const pointsPaths = [points, ...pointsOctaves];

                            const groupTranslucent = groupPadding
                              .append("g")
                              .attr("fill", "none")
                              .attr("stroke", "currentColor")
                              .attr("stroke-width", "1")
                              .attr("stroke-opacity", "0.2");

                            groupTranslucent
                              .selectAll("path")
                              .data(pointsPaths)
                              .enter()
                              .append("path")
                              .attr("d", line);

                            const groupNoise = groupPadding
                              .append("g")
                              .style(
                                "color",
                                "var(--color-noise, hsl(201, 79%, 46%))"
                              );

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
                              .duration(3000)
                              .ease(d3.easeQuadInOut);

                            const noise = pointsNoise.map(({ x, y }) => ({
                              x: scaleX(x),
                              y: scaleY(y),
                            }));

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
                                      (acc, curr) =>
                                        `${acc} ${curr.x} ${curr.y}`,
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
                              const transition = d3.transition().delay(1000);

                              groupNoise
                                .select("circle")
                                .transition(transition)
                                .attr("r", "0")
                                .remove();

                              groupTranslucent
                                .attr("opacity", "1")
                                .transition(transition)
                                .attr("opacity", "0")
                                .remove();

                              groupOctaves.transition(transition).remove();

                              groupNoise
                                .append("path")
                                .attr("fill-opacity", "0.25")
                                .attr("fill", "currentColor")
                                .attr(
                                  "d",
                                  `${noise.reduce(
                                    (acc, curr) => `${acc} ${curr.x} ${curr.y}`,
                                    "M "
                                  )} ${width} ${height + padding.y} ${0} ${
                                    height + padding.y
                                  }`
                                )
                                .attr("opacity", "0")
                                .transition(transition)
                                .attr("opacity", "1");

                              groupFrame
                                .style("color", "currentColor")
                                .transition(transition)
                                .style("color", groupNoise.style("color"));

                              heading.text("There you have it");
                              paragraph.text(
                                "You find a curve with the general shape of the first octave, with peaks and valleys in between the first few points."
                              );
                              button.remove();

                              stepper
                                .transition(transition)
                                .transition()
                                .style("opacity", "1")
                                .style("visibility", "visible");
                            });
                          });
                        },
                        { once: true }
                      );
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
