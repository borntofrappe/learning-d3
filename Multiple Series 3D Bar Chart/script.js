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

const width = 600;
const height = 500;
const margin = 10;

const ratio = 3;

const h1 = width / ratio;
const h2 = width - h1;
const v1 = h1 / 2;
const v2 = h2 / 2;
const elevation = height - ((v1 + v2) / 2) * 2;

const { length: l1 } = data;
const g1 = h1 / l1;
const os1 = d3.range(l1).map((d) => [d * g1, (d * g1) / 2]);

const { length: l2 } = data[0]["Max temperature"];
const g2 = h2 / l2;
const os2 = d3.range(l2).map((d) => [d * g2, (d * g2) / 2]);

const p = 0.2 * (g1 + g2);
const gp1 = g1 - p;
const gp2 = g2 - p;

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${width + margin * 2} ${height + margin * 2}`);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin + elevation + v2})`);

const groupAxis = group.append("g");
const groupData = group.append("g");

groupAxis
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1");

groupAxis
  .append("path")
  .attr(
    "d",
    `M 0 0 l ${h1} ${v1} ${h2} ${-v2} 0 ${-elevation} ${-h1} ${-v1} ${-h2} ${v2}z`
  );

const groupLines = groupAxis.append("g").attr("opacity", "0.25");

const groupsLinesStation = groupLines
  .append("g")
  .selectAll("g")
  .data(os1)
  .enter()
  .append("g")
  .attr("transform", ([x, y]) => `translate(${x} ${y})`);

groupsLinesStation
  .append("path")
  .attr("d", `M 0 0 l ${h2} ${-v2} 0 ${-elevation}`);

const groupsLinesTemperatures = groupLines
  .append("g")
  .attr("transform", `translate(0 ${-elevation})`)
  .selectAll("g")
  .data(os2)
  .enter()
  .append("g")
  .attr("transform", ([x, y]) => `translate(${x} ${-y})`);

groupsLinesTemperatures
  .append("path")
  .attr("d", `M 0 0 l 0 ${elevation} ${h1} ${v1}`);

groupData.attr(
  "transform",
  `translate(${os1[3][0] + os2[5][0]} ${os1[3][1] - os2[5][1]})`
);

groupData
  .append("path")
  .attr("fill", "red")
  .attr(
    "d",
    `M ${p} 0 l ${gp1} ${gp1 / 2} ${gp2} ${-gp2 / 2} 0 ${-elevation} ${-gp1} ${
      -gp1 / 2
    } ${-gp2} ${gp2 / 2}`
  );

groupData
  .append("path")
  .attr("fill", "black")
  .attr("opacity", "0.25")
  .attr(
    "d",
    `M ${gp1 + p} ${gp1 / 2} l ${gp2} ${-gp2 / 2} 0 ${-elevation} ${-gp2} ${
      gp2 / 2
    } z`
  );
