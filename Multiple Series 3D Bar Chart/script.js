const data = [
  {
    station: "Hampstead",
    "Distance from London": 4,
    "Max temperature": [
      7.46, 8.07, 10.91, 14.13, 17.33, 20.38, 22.73, 22.26, 19.13, 14.83, 10.6,
      7.81,
    ],
    "Min temperature": [
      2.29, 2.25, 3.72, 5.5, 8.3, 11.17, 13.34, 13.35, 11.12, 8.34, 5.04, 2.71,
    ],
  },
  {
    station: "Greenwich Park",
    "Distance from London": 6,
    "Max temperature": [
      8.47, 9.21, 12.07, 15.35, 18.59, 21.37, 23.75, 23.31, 20.29, 15.83, 11.55,
      8.85,
    ],
    "Min temperature": [
      3.36, 3.22, 4.66, 6.02, 9.06, 12.04, 13.93, 14.08, 11.57, 8.99, 6.09,
      3.77,
    ],
  },
  {
    station: "Kew Gardens",
    "Distance from London": 7,
    "Max temperature": [
      8.56, 9.2, 11.91, 15.13, 18.39, 21.43, 23.78, 23.37, 20.29, 15.97, 11.61,
      8.88,
    ],
    "Min temperature": [
      1.96, 2.03, 3.52, 5.1, 8.15, 11.02, 13.19, 12.99, 10.53, 7.78, 4.29, 2.28,
    ],
  },
  {
    station: "Hampton W Wks",
    "Distance from London": 13,
    "Max temperature": [
      8.46, 8.93, 11.52, 14.72, 17.98, 20.95, 23.2, 22.81, 19.82, 15.66, 11.55,
      8.9,
    ],
    "Min temperature": [
      2.9, 2.76, 4.09, 6.03, 8.97, 12.04, 14.11, 13.99, 11.49, 8.85, 5.56, 3.34,
    ],
  },
  {
    station: "Northolt",
    "Distance from London": 13,
    "Max temperature": [
      8.23, 8.82, 11.63, 14.84, 18.09, 21.19, 23.49, 23.1, 20, 15.62, 11.3,
      8.59,
    ],
    "Min temperature": [
      1.95, 2, 3.48, 5.23, 8.3, 11.27, 13.4, 13.19, 10.64, 7.92, 4.47, 2.34,
    ],
  },
];

const size = 500;
const margin = 10;

const h = size / 2;
const v = h / 2;
const elavation = size - v * 2;

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${size + margin * 2} ${size + margin * 2}`);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

const groupAxis = group
  .append("g")
  .attr("transform", `translate(0 ${elavation + v})`)
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1");

groupAxis
  .append("path")
  .attr(
    "d",
    `M 0 0 l ${h} ${v} ${h} ${-v} 0 ${-elavation} ${-h} ${-v} ${-h} ${v}z`
  );

const groupLines = groupAxis.append("g").attr("opacity", "0.25");

const groupsLinesData = groupLines
  .append("g")
  .selectAll("g")
  .data(() => {
    const { length } = data;
    const gap = h / length;
    return d3.range(length).map((d) => [d * gap, (d * gap) / 2]);
    //
  })
  .enter()
  .append("g")
  .attr("transform", ([x, y]) => `translate(${x} ${y})`);

groupsLinesData.append("path").attr("d", `M 0 0 l ${h} ${-v} 0 ${-elavation}`);

const groupsLinesValues = groupLines
  .append("g")
  .attr("transform", `translate(0 ${-elavation})`)
  .selectAll("g")
  .data(() => {
    const { length } = data[0]["Max temperature"];
    const gap = h / length;
    return d3.range(length).map((d) => [d * gap, (d * gap) / 2]);
    //
  })
  .enter()
  .append("g")
  .attr("transform", ([x, y]) => `translate(${x} ${-y})`);

groupsLinesValues.append("path").attr("d", `M 0 0 l 0 ${elavation} ${h} ${v}`);
