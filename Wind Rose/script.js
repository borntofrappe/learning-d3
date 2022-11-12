const data = [
  {
    direction: [355, 4],
    speed: [
      { interval: "2-4.9", value: 0.276 },
      { interval: "5-6.9", value: 0.374 },
      { interval: "7-9.9", value: 0.403 },
      { interval: "10-14.9", value: 0.659 },
      { interval: "15-19.9", value: 0.325 },
      { interval: "20+", value: 0.069 },
    ],
  },
  {
    direction: [5, 14],
    speed: [
      { interval: "2-4.9", value: 0.285 },
      { interval: "5-6.9", value: 0.285 },
      { interval: "7-9.9", value: 0.216 },
      { interval: "10-14.9", value: 0.315 },
      { interval: "15-19.9", value: 0.167 },
      { interval: "20+", value: 0.01 },
    ],
  },
  {
    direction: [15, 24],
    speed: [
      { interval: "2-4.9", value: 0.384 },
      { interval: "5-6.9", value: 0.187 },
      { interval: "7-9.9", value: 0.118 },
      { interval: "10-14.9", value: 0.226 },
      { interval: "15-19.9", value: 0.089 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [25, 34],
    speed: [
      { interval: "2-4.9", value: 0.187 },
      { interval: "5-6.9", value: 0.207 },
      { interval: "7-9.9", value: 0.089 },
      { interval: "10-14.9", value: 0.226 },
      { interval: "15-19.9", value: 0.108 },
      { interval: "20+", value: 0.03 },
    ],
  },
  {
    direction: [35, 44],
    speed: [
      { interval: "2-4.9", value: 0.177 },
      { interval: "5-6.9", value: 0.295 },
      { interval: "7-9.9", value: 0.177 },
      { interval: "10-14.9", value: 0.187 },
      { interval: "15-19.9", value: 0.03 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [45, 54],
    speed: [
      { interval: "2-4.9", value: 0.187 },
      { interval: "5-6.9", value: 0.167 },
      { interval: "7-9.9", value: 0.157 },
      { interval: "10-14.9", value: 0.098 },
      { interval: "15-19.9", value: 0.059 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [55, 64],
    speed: [
      { interval: "2-4.9", value: 0.108 },
      { interval: "5-6.9", value: 0.187 },
      { interval: "7-9.9", value: 0.157 },
      { interval: "10-14.9", value: 0.138 },
      { interval: "15-19.9", value: 0 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [65, 74],
    speed: [
      { interval: "2-4.9", value: 0.167 },
      { interval: "5-6.9", value: 0.157 },
      { interval: "7-9.9", value: 0.079 },
      { interval: "10-14.9", value: 0.049 },
      { interval: "15-19.9", value: 0.01 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [75, 84],
    speed: [
      { interval: "2-4.9", value: 0.138 },
      { interval: "5-6.9", value: 0.216 },
      { interval: "7-9.9", value: 0.226 },
      { interval: "10-14.9", value: 0.039 },
      { interval: "15-19.9", value: 0 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [85, 94],
    speed: [
      { interval: "2-4.9", value: 0.148 },
      { interval: "5-6.9", value: 0.266 },
      { interval: "7-9.9", value: 0.295 },
      { interval: "10-14.9", value: 0.148 },
      { interval: "15-19.9", value: 0 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [95, 104],
    speed: [
      { interval: "2-4.9", value: 0.187 },
      { interval: "5-6.9", value: 0.246 },
      { interval: "7-9.9", value: 0.118 },
      { interval: "10-14.9", value: 0.256 },
      { interval: "15-19.9", value: 0.089 },
      { interval: "20+", value: 0.02 },
    ],
  },
  {
    direction: [105, 114],
    speed: [
      { interval: "2-4.9", value: 0.403 },
      { interval: "5-6.9", value: 0.403 },
      { interval: "7-9.9", value: 0.236 },
      { interval: "10-14.9", value: 0.187 },
      { interval: "15-19.9", value: 0.069 },
      { interval: "20+", value: 0.03 },
    ],
  },
  {
    direction: [115, 124],
    speed: [
      { interval: "2-4.9", value: 0.403 },
      { interval: "5-6.9", value: 0.423 },
      { interval: "7-9.9", value: 0.197 },
      { interval: "10-14.9", value: 0.384 },
      { interval: "15-19.9", value: 0.216 },
      { interval: "20+", value: 0.049 },
    ],
  },
  {
    direction: [125, 134],
    speed: [
      { interval: "2-4.9", value: 0.472 },
      { interval: "5-6.9", value: 0.571 },
      { interval: "7-9.9", value: 0.413 },
      { interval: "10-14.9", value: 0.767 },
      { interval: "15-19.9", value: 0.413 },
      { interval: "20+", value: 0.148 },
    ],
  },
  {
    direction: [135, 144],
    speed: [
      { interval: "2-4.9", value: 0.551 },
      { interval: "5-6.9", value: 0.453 },
      { interval: "7-9.9", value: 0.659 },
      { interval: "10-14.9", value: 0.945 },
      { interval: "15-19.9", value: 0.659 },
      { interval: "20+", value: 0.266 },
    ],
  },
  {
    direction: [145, 154],
    speed: [
      { interval: "2-4.9", value: 0.374 },
      { interval: "5-6.9", value: 0.472 },
      { interval: "7-9.9", value: 0.659 },
      { interval: "10-14.9", value: 1.092 },
      { interval: "15-19.9", value: 0.394 },
      { interval: "20+", value: 0.089 },
    ],
  },
  {
    direction: [155, 164],
    speed: [
      { interval: "2-4.9", value: 0.492 },
      { interval: "5-6.9", value: 0.364 },
      { interval: "7-9.9", value: 0.571 },
      { interval: "10-14.9", value: 0.994 },
      { interval: "15-19.9", value: 0.394 },
      { interval: "20+", value: 0.187 },
    ],
  },
  {
    direction: [165, 174],
    speed: [
      { interval: "2-4.9", value: 0.492 },
      { interval: "5-6.9", value: 0.453 },
      { interval: "7-9.9", value: 0.453 },
      { interval: "10-14.9", value: 0.964 },
      { interval: "15-19.9", value: 0.305 },
      { interval: "20+", value: 0.108 },
    ],
  },
  {
    direction: [175, 184],
    speed: [
      { interval: "2-4.9", value: 0.167 },
      { interval: "5-6.9", value: 0.325 },
      { interval: "7-9.9", value: 0.443 },
      { interval: "10-14.9", value: 0.866 },
      { interval: "15-19.9", value: 0.384 },
      { interval: "20+", value: 0.049 },
    ],
  },
  {
    direction: [185, 194],
    speed: [
      { interval: "2-4.9", value: 0.315 },
      { interval: "5-6.9", value: 0.246 },
      { interval: "7-9.9", value: 0.453 },
      { interval: "10-14.9", value: 0.689 },
      { interval: "15-19.9", value: 0.364 },
      { interval: "20+", value: 0.089 },
    ],
  },
  {
    direction: [195, 204],
    speed: [
      { interval: "2-4.9", value: 0.413 },
      { interval: "5-6.9", value: 0.581 },
      { interval: "7-9.9", value: 0.502 },
      { interval: "10-14.9", value: 0.689 },
      { interval: "15-19.9", value: 0.167 },
      { interval: "20+", value: 0.03 },
    ],
  },
  {
    direction: [205, 214],
    speed: [
      { interval: "2-4.9", value: 0.541 },
      { interval: "5-6.9", value: 0.531 },
      { interval: "7-9.9", value: 0.394 },
      { interval: "10-14.9", value: 0.521 },
      { interval: "15-19.9", value: 0.098 },
      { interval: "20+", value: 0.049 },
    ],
  },
  {
    direction: [215, 224],
    speed: [
      { interval: "2-4.9", value: 0.61 },
      { interval: "5-6.9", value: 0.492 },
      { interval: "7-9.9", value: 0.571 },
      { interval: "10-14.9", value: 0.659 },
      { interval: "15-19.9", value: 0.157 },
      { interval: "20+", value: 0.049 },
    ],
  },
  {
    direction: [225, 234],
    speed: [
      { interval: "2-4.9", value: 0.64 },
      { interval: "5-6.9", value: 0.758 },
      { interval: "7-9.9", value: 0.512 },
      { interval: "10-14.9", value: 0.699 },
      { interval: "15-19.9", value: 0.177 },
      { interval: "20+", value: 0.01 },
    ],
  },
  {
    direction: [235, 244],
    speed: [
      { interval: "2-4.9", value: 0.718 },
      { interval: "5-6.9", value: 0.531 },
      { interval: "7-9.9", value: 0.285 },
      { interval: "10-14.9", value: 0.236 },
      { interval: "15-19.9", value: 0.02 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [245, 254],
    speed: [
      { interval: "2-4.9", value: 0.571 },
      { interval: "5-6.9", value: 0.482 },
      { interval: "7-9.9", value: 0.216 },
      { interval: "10-14.9", value: 0.108 },
      { interval: "15-19.9", value: 0 },
      { interval: "20+", value: 0 },
    ],
  },
  {
    direction: [255, 264],
    speed: [
      { interval: "2-4.9", value: 0.62 },
      { interval: "5-6.9", value: 0.384 },
      { interval: "7-9.9", value: 0.197 },
      { interval: "10-14.9", value: 0.207 },
      { interval: "15-19.9", value: 0.039 },
      { interval: "20+", value: 0.01 },
    ],
  },
  {
    direction: [265, 274],
    speed: [
      { interval: "2-4.9", value: 0.62 },
      { interval: "5-6.9", value: 0.521 },
      { interval: "7-9.9", value: 0.551 },
      { interval: "10-14.9", value: 0.531 },
      { interval: "15-19.9", value: 0.167 },
      { interval: "20+", value: 0.01 },
    ],
  },
  {
    direction: [275, 284],
    speed: [
      { interval: "2-4.9", value: 0.62 },
      { interval: "5-6.9", value: 0.64 },
      { interval: "7-9.9", value: 0.423 },
      { interval: "10-14.9", value: 0.738 },
      { interval: "15-19.9", value: 0.325 },
      { interval: "20+", value: 0.079 },
    ],
  },
  {
    direction: [285, 294],
    speed: [
      { interval: "2-4.9", value: 0.394 },
      { interval: "5-6.9", value: 0.59 },
      { interval: "7-9.9", value: 0.443 },
      { interval: "10-14.9", value: 0.945 },
      { interval: "15-19.9", value: 0.453 },
      { interval: "20+", value: 0.197 },
    ],
  },
  {
    direction: [295, 304],
    speed: [
      { interval: "2-4.9", value: 0.325 },
      { interval: "5-6.9", value: 0.699 },
      { interval: "7-9.9", value: 0.62 },
      { interval: "10-14.9", value: 1.702 },
      { interval: "15-19.9", value: 0.954 },
      { interval: "20+", value: 0.64 },
    ],
  },
  {
    direction: [305, 314],
    speed: [
      { interval: "2-4.9", value: 0.433 },
      { interval: "5-6.9", value: 0.6 },
      { interval: "7-9.9", value: 0.945 },
      { interval: "10-14.9", value: 2.391 },
      { interval: "15-19.9", value: 1.663 },
      { interval: "20+", value: 1.289 },
    ],
  },
  {
    direction: [315, 324],
    speed: [
      { interval: "2-4.9", value: 0.403 },
      { interval: "5-6.9", value: 0.669 },
      { interval: "7-9.9", value: 1.171 },
      { interval: "10-14.9", value: 2.706 },
      { interval: "15-19.9", value: 1.84 },
      { interval: "20+", value: 1.938 },
    ],
  },
  {
    direction: [325, 334],
    speed: [
      { interval: "2-4.9", value: 0.364 },
      { interval: "5-6.9", value: 0.492 },
      { interval: "7-9.9", value: 0.748 },
      { interval: "10-14.9", value: 2.184 },
      { interval: "15-19.9", value: 1.092 },
      { interval: "20+", value: 0.945 },
    ],
  },
  {
    direction: [335, 344],
    speed: [
      { interval: "2-4.9", value: 0.335 },
      { interval: "5-6.9", value: 0.531 },
      { interval: "7-9.9", value: 0.443 },
      { interval: "10-14.9", value: 1.446 },
      { interval: "15-19.9", value: 0.669 },
      { interval: "20+", value: 0.344 },
    ],
  },
  {
    direction: [345, 354],
    speed: [
      { interval: "2-4.9", value: 0.354 },
      { interval: "5-6.9", value: 0.521 },
      { interval: "7-9.9", value: 0.403 },
      { interval: "10-14.9", value: 0.984 },
      { interval: "15-19.9", value: 0.354 },
      { interval: "20+", value: 0.148 },
    ],
  },
];

const intervals = data[0].speed.map(({ interval }) => interval);
const colors = Array(intervals.length)
  .fill()
  .map((_, i, { length }) => d3.interpolateTurbo((i + 1) / length));

const size = 500;
const margin = 25;
const radius = size / 2;

const legendHeight = 60;
const gapHeight = 30;

const scaleLegendX = d3.scaleBand().domain(intervals).range([0, size]);
const scaleColor = d3.scaleOrdinal().domain(intervals).range(colors);

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${size + margin * 2} ${size + margin * 2 + gapHeight + legendHeight}`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

const groupCenter = group
  .append("g")
  .attr("transform", `translate(${size / 2} ${size / 2})`);

const groupLegend = group
  .append("g")
  .attr("transform", `translate(0 ${size + gapHeight})`);

groupCenter
  .append("circle")
  .attr("r", radius)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.5");

const groupData = groupCenter.append("g");

groupLegend
  .append("rect")
  .attr("width", size)
  .attr("height", legendHeight)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.5");

groupLegend
  .append("text")
  .attr("transform", (d) => `translate(${size / 2} 0)`)
  .attr("fill", "currentColor")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "hanging")
  .attr("y", "5")
  .attr("font-size", "14")
  .text("Wind speed (mph)");

const groupsLegend = groupLegend
  .selectAll("g")
  .data(intervals)
  .enter()
  .append("g")
  .attr(
    "transform",
    (d) =>
      `translate(${scaleLegendX(d) + scaleLegendX.bandwidth() / 2} ${
        legendHeight - 16
      })`
  );

groupsLegend
  .append("rect")
  .attr("x", "-26")
  .attr("y", "-4")
  .attr("width", "24")
  .attr("height", "8")
  .attr("fill", (d) => scaleColor(d));

groupsLegend
  .append("text")
  .attr("x", "2")
  .attr("fill", "currentColor")
  .attr("dominant-baseline", "central")
  .attr("font-size", "14")
  .text((d) => d);
