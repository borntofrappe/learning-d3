const data = [
  { observation: 1, experiment: 1, run: 1, speed: 850 },
  { observation: 2, experiment: 1, run: 2, speed: 740 },
  { observation: 3, experiment: 1, run: 3, speed: 900 },
  { observation: 4, experiment: 1, run: 4, speed: 1070 },
  { observation: 5, experiment: 1, run: 5, speed: 930 },
  { observation: 6, experiment: 1, run: 6, speed: 850 },
  { observation: 7, experiment: 1, run: 7, speed: 950 },
  { observation: 8, experiment: 1, run: 8, speed: 980 },
  { observation: 9, experiment: 1, run: 9, speed: 980 },
  { observation: 10, experiment: 1, run: 10, speed: 880 },
  { observation: 11, experiment: 1, run: 11, speed: 1000 },
  { observation: 12, experiment: 1, run: 12, speed: 980 },
  { observation: 13, experiment: 1, run: 13, speed: 930 },
  { observation: 14, experiment: 1, run: 14, speed: 650 },
  { observation: 15, experiment: 1, run: 15, speed: 760 },
  { observation: 16, experiment: 1, run: 16, speed: 810 },
  { observation: 17, experiment: 1, run: 17, speed: 1000 },
  { observation: 18, experiment: 1, run: 18, speed: 1000 },
  { observation: 19, experiment: 1, run: 19, speed: 960 },
  { observation: 20, experiment: 1, run: 20, speed: 960 },
  { observation: 21, experiment: 2, run: 1, speed: 960 },
  { observation: 22, experiment: 2, run: 2, speed: 940 },
  { observation: 23, experiment: 2, run: 3, speed: 960 },
  { observation: 24, experiment: 2, run: 4, speed: 940 },
  { observation: 25, experiment: 2, run: 5, speed: 880 },
  { observation: 26, experiment: 2, run: 6, speed: 800 },
  { observation: 27, experiment: 2, run: 7, speed: 850 },
  { observation: 28, experiment: 2, run: 8, speed: 880 },
  { observation: 29, experiment: 2, run: 9, speed: 900 },
  { observation: 30, experiment: 2, run: 10, speed: 840 },
  { observation: 31, experiment: 2, run: 11, speed: 830 },
  { observation: 32, experiment: 2, run: 12, speed: 790 },
  { observation: 33, experiment: 2, run: 13, speed: 810 },
  { observation: 34, experiment: 2, run: 14, speed: 880 },
  { observation: 35, experiment: 2, run: 15, speed: 880 },
  { observation: 36, experiment: 2, run: 16, speed: 830 },
  { observation: 37, experiment: 2, run: 17, speed: 800 },
  { observation: 38, experiment: 2, run: 18, speed: 790 },
  { observation: 39, experiment: 2, run: 19, speed: 760 },
  { observation: 40, experiment: 2, run: 20, speed: 800 },
  { observation: 41, experiment: 3, run: 1, speed: 880 },
  { observation: 42, experiment: 3, run: 2, speed: 880 },
  { observation: 43, experiment: 3, run: 3, speed: 880 },
  { observation: 44, experiment: 3, run: 4, speed: 860 },
  { observation: 45, experiment: 3, run: 5, speed: 720 },
  { observation: 46, experiment: 3, run: 6, speed: 720 },
  { observation: 47, experiment: 3, run: 7, speed: 620 },
  { observation: 48, experiment: 3, run: 8, speed: 860 },
  { observation: 49, experiment: 3, run: 9, speed: 970 },
  { observation: 50, experiment: 3, run: 10, speed: 950 },
  { observation: 51, experiment: 3, run: 11, speed: 880 },
  { observation: 52, experiment: 3, run: 12, speed: 910 },
  { observation: 53, experiment: 3, run: 13, speed: 850 },
  { observation: 54, experiment: 3, run: 14, speed: 870 },
  { observation: 55, experiment: 3, run: 15, speed: 840 },
  { observation: 56, experiment: 3, run: 16, speed: 840 },
  { observation: 57, experiment: 3, run: 17, speed: 850 },
  { observation: 58, experiment: 3, run: 18, speed: 840 },
  { observation: 59, experiment: 3, run: 19, speed: 840 },
  { observation: 60, experiment: 3, run: 20, speed: 840 },
  { observation: 61, experiment: 4, run: 1, speed: 890 },
  { observation: 62, experiment: 4, run: 2, speed: 810 },
  { observation: 63, experiment: 4, run: 3, speed: 810 },
  { observation: 64, experiment: 4, run: 4, speed: 820 },
  { observation: 65, experiment: 4, run: 5, speed: 800 },
  { observation: 66, experiment: 4, run: 6, speed: 770 },
  { observation: 67, experiment: 4, run: 7, speed: 760 },
  { observation: 68, experiment: 4, run: 8, speed: 740 },
  { observation: 69, experiment: 4, run: 9, speed: 750 },
  { observation: 70, experiment: 4, run: 10, speed: 760 },
  { observation: 71, experiment: 4, run: 11, speed: 910 },
  { observation: 72, experiment: 4, run: 12, speed: 920 },
  { observation: 73, experiment: 4, run: 13, speed: 890 },
  { observation: 74, experiment: 4, run: 14, speed: 860 },
  { observation: 75, experiment: 4, run: 15, speed: 880 },
  { observation: 76, experiment: 4, run: 16, speed: 720 },
  { observation: 77, experiment: 4, run: 17, speed: 840 },
  { observation: 78, experiment: 4, run: 18, speed: 850 },
  { observation: 79, experiment: 4, run: 19, speed: 850 },
  { observation: 80, experiment: 4, run: 20, speed: 780 },
  { observation: 81, experiment: 5, run: 1, speed: 890 },
  { observation: 82, experiment: 5, run: 2, speed: 840 },
  { observation: 83, experiment: 5, run: 3, speed: 780 },
  { observation: 84, experiment: 5, run: 4, speed: 810 },
  { observation: 85, experiment: 5, run: 5, speed: 760 },
  { observation: 86, experiment: 5, run: 6, speed: 810 },
  { observation: 87, experiment: 5, run: 7, speed: 790 },
  { observation: 88, experiment: 5, run: 8, speed: 810 },
  { observation: 89, experiment: 5, run: 9, speed: 820 },
  { observation: 90, experiment: 5, run: 10, speed: 850 },
  { observation: 91, experiment: 5, run: 11, speed: 870 },
  { observation: 92, experiment: 5, run: 12, speed: 870 },
  { observation: 93, experiment: 5, run: 13, speed: 810 },
  { observation: 94, experiment: 5, run: 14, speed: 740 },
  { observation: 95, experiment: 5, run: 15, speed: 810 },
  { observation: 96, experiment: 5, run: 16, speed: 940 },
  { observation: 97, experiment: 5, run: 17, speed: 950 },
  { observation: 98, experiment: 5, run: 18, speed: 800 },
  { observation: 99, experiment: 5, run: 19, speed: 810 },
  { observation: 100, experiment: 5, run: 20, speed: 870 },
];

const dataBoxplots = [...d3.group(data, (d) => d.experiment)];

const div = d3.select("body").append("div");
div.append("h1").text("Boxplot Experiment");

const width = 400;
const height = 400;
const margin = {
  top: 5,
  bottom: 55,
  left: 75,
  right: 5,
};

const xScale = d3
  .scaleBand()
  .domain(dataBoxplots.map(([boxplot]) => boxplot))
  .range([0, width]);

const yScale = d3
  .scaleLinear()
  .domain(d3.extent(data, (d) => d.speed))
  .range([height, 0])
  .nice();

const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
const yAxis = d3.axisLeft(yScale).ticks(4).tickSizeOuter(0);

const svg = div
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

const groupLabels = group.append("g");
const groupData = group.append("g");
const groupAxis = group.append("g");

const groupAxisX = groupAxis
  .append("g")
  .attr("transform", `translate(0 ${height})`)
  .call(xAxis);
const groupAxisY = groupAxis.append("g").call(yAxis);

groupAxisY.select("g").remove();
groupAxisY.select("g:last-of-type").remove();

const groupAxisNode = groupAxis.node();

groupAxis
  .append("g")
  .node()
  .appendChild(groupAxisX.select("path").node().cloneNode(true));

groupAxis
  .append("g")
  .attr("transform", `translate( ${width} 0)`)
  .node()
  .appendChild(groupAxisY.select("path").node().cloneNode(true));

groupAxis.selectAll("text").attr("font-size", "12");
groupLabels.attr("font-size", "16");

groupLabels
  .append("g")
  .attr("transform", `translate(${width / 2} ${height + margin.bottom - 5})`)
  .append("text")
  .attr("text-anchor", "middle")
  .text("Experiment No.");

groupLabels
  .append("g")
  .attr(
    "transform",
    `translate(${-margin.left + 20} ${height / 2}) rotate(-90)`
  )
  .append("text")
  .attr("text-anchor", "middle")
  .text("Speed of light (km/h minus 290,000)");

const groupsData = groupData
  .selectAll("g")
  .data(dataBoxplots)
  .enter()
  .append("g")
  .attr(
    "transform",
    ([boxplot]) => `translate(${xScale(boxplot) + xScale.bandwidth() / 2} 0)`
  );

groupsData
  .selectAll("circle")
  .data(([, values]) => values)
  .enter()
  .append("circle")
  .attr("transform", (d) => `translate(0 ${yScale(d.speed)})`)
  .attr("r", 2)
  .attr("opacity", 0.75);
