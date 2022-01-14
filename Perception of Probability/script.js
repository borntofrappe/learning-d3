const dataset = {
  "Almost Certainly": [
    95.0, 95.0, 95.0, 95.0, 98.0, 95.0, 85.0, 97.0, 95.0, 90.0, 90.0, 99.0,
    60.0, 88.7, 99.0, 95.0, 97.0, 99.0, 95.0, 95.0, 90.0, 92.0, 98.0, 98.0,
    90.0, 95.0, 95.0, 98.0, 85.0, 80.0, 98.0, 96.0, 99.0, 85.0, 90.0, 95.0,
    98.0, 98.0, 80.0, 95.0, 99.0, 85.0, 90.0, 95.0, 85.0, 95.0,
  ],
  "Highly Likely": [
    80, 75, 85, 85, 95, 99, 95, 95, 95, 85, 90, 97, 80, 69, 98, 90, 90, 95, 95,
    90, 80, 85, 90, 92, 90, 85, 90, 95, 85, 15, 80, 85, 85, 84, 95, 85, 96, 96,
    90, 90, 90, 80, 70, 80, 90, 80,
  ],
  "Very Good Chance": [
    85, 75, 85, 85, 80, 85, 65, 75, 80, 90, 85, 70, 70, 80, 85, 80, 70, 75, 90,
    75, 80, 75, 75, 91, 75, 80, 80, 75, 90, 74, 75, 80, 75, 87, 80, 80, 90, 82,
    70, 90, 80, 80, 80, 90, 75, 75,
  ],
  Likely: [
    66, 75, 75, 75, 70, 75, 40, 70, 65, 75, 60, 75, 60, 70, 75, 70, 65, 65, 80,
    75, 80, 70, 85, 85, 65, 65, 75, 90, 65, 65, 70, 70, 75, 60, 90, 80, 90, 86,
    80, 90, 60, 70, 70, 70, 65, 60,
  ],
  Probably: [
    75, 51, 70, 70, 75, 75, 45, 80, 80, 70, 75, 75, 55, 60, 65, 80, 60, 75, 75,
    75, 75, 60, 85, 85, 80, 75, 60, 85, 76, 65, 55, 90, 90, 65, 60, 80, 80, 80,
    80, 90, 50, 70, 65, 75, 60, 68,
  ],
  Probable: [
    75, 51, 70, 70, 70, 90, 80, 70, 70, 70, 70, 75, 70, 51, 85, 70, 51, 60, 60,
    80, 75, 60, 80, 85, 75, 75, 60, 85, 60, 65, 65, 75, 80, 50, 70, 64, 90, 75,
    80, 80, 90, 70, 75, 75, 65, 75,
  ],
  "We Believe": [
    66, 51, 80, 80, 65, 80, 80, 75, 65, 65, 80, 90, 60, 50, 5, 85, 75, 80, 75,
    50, 60, 85, 85, 70, 80, 50, 60, 75, 50, 60, 60, 80, 50, 50, 60, 75, 70, 45,
    70, 85, 90, 65, 70, 100, 95, 55,
  ],
  "Better Than Even": [
    55.0, 51.0, 60.0, 60.0, 60.0, 65.0, 60.0, 55.0, 55.0, 60.0, 60.0, 67.0,
    55.0, 5.0, 65.0, 60.0, 51.0, 55.0, 60.0, 50.1, 60.0, 57.0, 60.0, 60.0, 60.0,
    60.0, 51.0, 98.0, 51.0, 60.0, 55.0, 60.0, 51.0, 60.0, 80.0, 80.0, 53.0,
    69.0, 60.0, 55.0, 60.0, 51.0, 60.0, 60.0, 55.0, 51.0,
  ],
  "About Even": [
    50, 50, 50, 50, 50, 50, 45, 50, 50, 52, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    50, 50, 50, 49, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 40, 50, 50, 52,
    50, 48, 50, 45, 50, 50, 50, 49,
  ],
  "Probably Not": [
    15.0, 49.0, 25.0, 25.0, 20.0, 15.0, 40.0, 25.0, 35.0, 45.0, 40.0, 25.0,
    30.0, 40.0, 100.0, 40.0, 10.0, 30.0, 20.0, 49.9, 25.0, 10.0, 10.0, 27.0,
    30.0, 25.0, 40.0, 25.0, 20.0, 34.0, 35.0, 20.0, 10.0, 30.0, 20.0, 20.0,
    30.0, 26.0, 30.0, 15.0, 40.0, 30.0, 25.0, 20.0, 40.0, 40.0,
  ],
  "We Doubt": [
    40, 20, 30, 30, 10, 7, 45, 25, 20, 60, 25, 17, 20, 30, 100, 30, 5, 25, 25,
    25, 40, 25, 5, 30, 12, 33, 10, 40, 33, 38, 25, 5, 1, 60, 25, 10, 40, 21, 10,
    15, 40, 30, 15, 10, 95, 25,
  ],
  Unlikely: [
    30, 25, 25, 25, 5, 8, 20, 15, 35, 30, 15, 10, 30, 20, 10, 30, 15, 15, 10,
    25, 10, 10, 2, 18, 35, 25, 20, 10, 25, 36, 12, 3, 10, 24, 5, 25, 30, 34, 20,
    35, 10, 35, 20, 10, 20, 35,
  ],
  Improbable: [
    20.0, 49.0, 10.0, 10.0, 50.0, 15.0, 35.0, 30.0, 30.0, 20.0, 1.0, 10.0, 5.0,
    49.0, 1.0, 40.0, 10.0, 3.0, 10.0, 20.0, 30.0, 33.0, 15.0, 7.0, 25.0, 10.0,
    49.0, 7.0, 25.0, 29.0, 20.0, 9.0, 0.001, 3.0, 3.0, 10.0, 4.0, 12.0, 0.0,
    20.0, 20.0, 15.0, 35.0, 5.0, 5.0, 20.0,
  ],
  "Little Chance": [
    20, 5, 20, 20, 5, 5, 20, 20, 15, 20, 20, 17, 10, 13, 100, 15, 15, 10, 25,
    25, 20, 7, 2, 17, 20, 10, 15, 10, 10, 29, 15, 20, 5, 20, 4, 8, 8, 18, 10,
    15, 5, 10, 5, 10, 25, 17,
  ],
  "Chances Are Slight": [
    25, 5, 15, 15, 10, 20, 30, 10, 10, 25, 15, 5, 15, 5, 35, 10, 5, 40, 10, 10,
    5, 13, 5, 10, 20, 5, 10, 5, 15, 30, 15, 12, 5, 30, 30, 5, 10, 13, 10, 10,
    15, 20, 10, 5, 10, 15,
  ],
  "Highly Unlikely": [
    25, 10, 5, 5, 2, 3, 20, 5, 15, 6, 10, 3, 5, 3, 90, 5, 7, 5, 5, 5, 5, 3, 5,
    3, 10, 5, 20, 5, 15, 15, 8, 5, 10, 15, 2, 5, 5, 3, 10, 8, 30, 15, 10, 5, 5,
    10,
  ],
  "Almost No Chance": [
    5.0, 5.0, 1.0, 1.0, 1.0, 1.0, 10.0, 3.0, 5.0, 10.0, 15.0, 2.0, 5.0, 2.0,
    95.0, 1.0, 2.0, 1.0, 5.0, 5.0, 5.0, 3.0, 5.0, 2.0, 2.0, 2.0, 5.0, 2.0, 1.0,
    7.0, 1.0, 10.0, 0.05, 5.0, 2.0, 2.0, 1.0, 7.0, 1.0, 5.0, 1.0, 5.0, 2.0, 1.0,
    2.0, 5.0,
  ],
};

function normalDistribution(x, mean, deviation) {
  return (
    (1 / (deviation * (2 * Math.PI) ** 0.5)) *
    2.71828 ** ((-1 / 2) * ((x - mean) / deviation) ** 2)
  );
}

const main = d3.select("body").append("main");
main.append("h1").text("Perception of Probability");
main
  .append("p")
  .html(
    "<a href='https://www.data-to-viz.com/story/OneNumOneCatSeveralObs.html'>From data to Viz</a> highlights several types of visualizations to analyse numerical and categorical variables."
  );

const keys = Object.keys(dataset);

const colorScale = d3
  .scaleOrdinal()
  .domain(keys)
  .range(
    keys.map((_, i, { length }) =>
      d3.interpolateRainbow((1 / (length + 1)) * i)
    )
  );

function drawBoxPlot() {
  const data = Object.entries(dataset)
    .map(([key, values]) => {
      const mean = d3.mean(values);
      const q1 = d3.quantile(values, 0.25);
      const q3 = d3.quantile(values, 0.75);
      const iqr = q3 - q1;

      return {
        key,
        values,
        mean,
        q1,
        q3,
        iqr,
      };
    })
    .sort((a, b) => b.mean > a.mean);

  const dimensions = {
    width: 600,
    height: 600,
    margin: {
      top: 20,
      right: 20,
      bottom: 45,
      left: 120,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, dimensions.boundedWidth]);

  const [min, max] = xScale.domain();

  const yScale = d3
    .scaleBand()
    .domain(data.map(({ key }) => key))
    .range([0, dimensions.boundedHeight])
    .padding(0.35);

  const bandwidth = yScale.bandwidth();

  const xAxis = d3.axisBottom(xScale).ticks(6).tickSize(0).tickPadding(5);
  const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(5);

  const article = main.append("article");
  article.append("h2").text("Box plot");
  article
    .append("p")
    .text(
      "A box plot summarises the distribution of the numerical variable through its main features: mean, first and last quartiles, outliers."
    );

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const axisGroup = bounds.append("g");
  const labelsGroup = bounds.append("g");
  const dataGroup = bounds.append("g");

  const boxPlots = dataGroup
    .selectAll("g")
    .data(data)
    .join("g")
    .attr(
      "transform",
      ({ key }) => `translate(0 ${yScale(key) + bandwidth / 2})`
    );

  /* labels are included through the axis
  boxPlots
    .append("text")
    .attr("x", -5)
    .attr("fill", "currentColor")
    .attr("text-anchor", "end")
    .attr("dominant-baseline", "middle")
    .text(({key}) => key);
  */

  const boxPlot = boxPlots.append("g");

  boxPlot
    .append("path")
    .attr("fill", ({ key }) => colorScale(key))
    .attr("stroke", "currentColor")
    .attr("stroke-width", 0.75)
    .attr("d", ({ mean, q1, q3, iqr }) => {
      const o1 = d3.max([min, mean - iqr * 1.5]);
      const o2 = d3.min([max, mean + iqr * 1.5]);

      return `M ${xScale(o1)} 0 H ${xScale(q1)} v ${bandwidth / 2} H ${xScale(
        q3
      )} v -${bandwidth / 2} H ${xScale(o2)} H ${xScale(q3)} v -${
        bandwidth / 2
      } H ${xScale(q1)} v ${bandwidth / 2}`;
    });

  boxPlot
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", 2)
    .attr(
      "d",
      ({ mean }) =>
        `M ${xScale(mean)} -${yScale.bandwidth() / 2} v ${yScale.bandwidth()}`
    );

  boxPlot
    .selectAll("circle")
    .data(({ values, mean, iqr }) =>
      values.filter((d) => d < mean - iqr * 1.5 || d > mean + iqr * 1.5)
    )
    .join("circle")
    .attr("fill", "currentColor")
    .attr("r", 2.5)
    .attr("transform", (d) => `translate(${xScale(d)} 0)`);

  const xAxisGroup = axisGroup
    .append("g")
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis);

  const yAxisGroup = axisGroup.append("g").call(yAxis);

  axisGroup.selectAll("path").remove();

  xAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", 0.1)
    .attr("d", `M 0 0 v -${dimensions.boundedHeight}`);

  yAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.1")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`);

  axisGroup
    .selectAll("text")
    .attr("font-size", 13)
    .attr("font-family", "inherit")
    .attr("fill", "currentColor");

  labelsGroup
    .append("text")
    .attr(
      "transform",
      `translate(${dimensions.boundedWidth} ${
        dimensions.boundedHeight + dimensions.margin.bottom - 5
      })`
    )
    .attr("fill", "currentColor")
    .attr("font-size", 15)
    .attr("text-anchor", "end")
    .text("Assigned probability (%)");
}

function drawViolinPlot() {
  const data = Object.entries(dataset)
    .map(([key, values]) => {
      const mean = d3.mean(values);
      const min = d3.min(values);
      const max = d3.max(values);
      const deviation = d3.deviation(values);

      const points = Array(20)
        .fill()
        .map((_, i, { length }) => {
          const x = min + ((max - min) * i) / (length - 1);
          const y = normalDistribution(x, mean, deviation);
          return [x, y];
        });

      return {
        key,
        mean,
        points,
      };
    })
    .sort((a, b) => b.mean > a.mean);

  const dimensions = {
    width: 600,
    height: 600,
    margin: {
      top: 20,
      right: 20,
      bottom: 45,
      left: 120,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleBand()
    .domain(data.map(({ key }) => key))
    .range([0, dimensions.boundedHeight]);

  const bandwidth = yScale.bandwidth();

  const sizeScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map(({ points }) => d3.max(points, ([, y]) => y)))])
    .range([0, bandwidth]);

  const area = d3
    .area()
    .x(([x]) => xScale(x))
    .y0(([, y]) => sizeScale(y * -1))
    .y1(([, y]) => sizeScale(y))
    .curve(d3.curveCatmullRom);

  const xAxis = d3.axisBottom(xScale).ticks(6).tickSize(0).tickPadding(5);
  const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(5);

  const article = main.append("article");
  article.append("h2").text("Violin plot");
  article
    .append("p")
    .text(
      "A violin plot focuses on the distribution of the numerical variable with the inclusion of kernel density plots."
    );

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const axisGroup = bounds.append("g");
  const labelsGroup = bounds.append("g");
  const dataGroup = bounds.append("g");

  const violinPlots = dataGroup
    .selectAll("g")
    .data(data)
    .join("g")
    .attr(
      "transform",
      ({ key }) => `translate(0 ${yScale(key) + bandwidth / 2})`
    );

  const violinPlot = violinPlots.append("g");

  violinPlot
    .append("path")
    .attr("fill", ({ key }) => colorScale(key))
    .attr("d", ({ points }) => area(points));

  const xAxisGroup = axisGroup
    .append("g")
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis);

  const yAxisGroup = axisGroup.append("g").call(yAxis);

  axisGroup.selectAll("path").remove();

  xAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", 0.1)
    .attr("d", `M 0 0 v -${dimensions.boundedHeight}`);

  yAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.1")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`);

  axisGroup
    .selectAll("text")
    .attr("font-size", 13)
    .attr("font-family", "inherit")
    .attr("fill", "currentColor");

  labelsGroup
    .append("text")
    .attr(
      "transform",
      `translate(${dimensions.boundedWidth} ${
        dimensions.boundedHeight + dimensions.margin.bottom - 5
      })`
    )
    .attr("fill", "currentColor")
    .attr("font-size", 15)
    .attr("text-anchor", "end")
    .text("Assigned probability (%)");
}

function drawDensityPlot(keys) {
  const data = Object.entries(dataset)
    .filter(([key]) => keys.includes(key))
    .map(([key, values]) => {
      const mean = d3.mean(values);
      const min = d3.min(values);
      const max = d3.max(values);
      const deviation = d3.deviation(values);

      const points = Array(20)
        .fill()
        .map((_, i, { length }) => {
          const x = min + ((max - min) * i) / (length - 1);
          const y = normalDistribution(x, mean, deviation);
          return [x, y];
        });

      return {
        key,
        mean,
        deviation,
        points,
      };
    })
    .sort((a, b) => b.mean > a.mean);

  const dimensions = {
    width: 400,
    height: 300,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 60,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

  const xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, dimensions.boundedWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map(({ points }) => d3.max(points, ([, y]) => y)))])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const xAxis = d3.axisBottom(xScale).ticks(6).tickSize(0).tickPadding(7.5);
  const yAxis = d3.axisLeft(yScale).ticks(5).tickSize(0).tickPadding(7.5);

  const article = main.append("article");
  article.append("h2").text("Kernel density plot");
  article
    .append("p")
    .text(
      "A kernel density plot is effective to illustrate and compare the distribution for a handful of categories."
    );

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const axisGroup = bounds.append("g");
  const labelsGroup = bounds.append("g");
  const dataGroup = bounds.append("g");

  const densityPlots = dataGroup.selectAll("g").data(data).join("g");

  const densityPlot = densityPlots
    .append("g")
    .style("color", ({ key }) => colorScale(key));

  const line = d3
    .line()
    .x(([x]) => xScale(x))
    .y(([, y]) => yScale(y))
    .curve(d3.curveCatmullRom);

  const area = d3
    .area()
    .x(([x]) => xScale(x))
    .y0(yScale(0))
    .y1(([, y]) => yScale(y))
    .curve(d3.curveCatmullRom);

  densityPlot
    .append("path")
    .attr("fill", "currentColor")
    .attr("d", ({ points }) => area(points))
    .attr("opacity", 0.5);

  densityPlot
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", 2)
    .attr("d", ({ points }) => line(points));

  densityPlot
    .append("text")
    .attr("font-weight", "bold")
    .attr("transform", ({ mean, deviation }) => {
      return `translate(${xScale(mean)} ${
        yScale(normalDistribution(mean, mean, deviation)) - 7
      })`;
    })
    .attr("font-size", 14)
    .attr("text-anchor", ({ mean }) =>
      xScale(mean) > dimensions.boundedWidth / 2 ? "end" : "start"
    )
    .attr("fill", ({ key }) => colorScale(key))
    .text(({ key }) => key);

  const xAxisGroup = axisGroup
    .append("g")
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis);

  const yAxisGroup = axisGroup.append("g").call(yAxis);

  axisGroup.selectAll("path").remove();

  xAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", 0.1)
    .attr("d", `M 0 0 v -${dimensions.boundedHeight}`);

  yAxisGroup
    .selectAll("g.tick")
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.1")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`);

  axisGroup
    .selectAll("text")
    .attr("font-size", 13)
    .attr("font-family", "inherit")
    .attr("fill", "currentColor");

  labelsGroup
    .append("text")
    .attr(
      "transform",
      `translate(${-dimensions.margin.left + 15} 0) rotate(-90)`
    )
    .attr("fill", "currentColor")
    .attr("font-size", 15)
    .attr("text-anchor", "end")
    .text("Assigned probability (%)");
}

drawBoxPlot();
drawViolinPlot();
drawDensityPlot([
  "Almost No Chance",
  "About Even",
  "Probable",
  "Almost Certainly",
]);
