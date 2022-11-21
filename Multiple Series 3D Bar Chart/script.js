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
    Rainfall: [
      69.54, 51.41, 42.82, 49.59, 50.51, 58.45, 50.49, 67.65, 59.08, 78.57,
      75.71, 68.25,
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
    Rainfall: [
      43.93, 39.85, 36.52, 38.63, 43.99, 49.34, 36.3, 53.02, 52.38, 58.34,
      59.85, 50.71,
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
    Rainfall: [
      59.87, 45.37, 38.96, 43.64, 44.59, 49.66, 45.24, 55.1, 51.93, 67.91,
      65.96, 59.24,
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
    Rainfall: [
      57.5, 44.09, 37.5, 40.64, 42.07, 48.92, 43.34, 55.54, 49.92, 65.75, 66.04,
      57.23,
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
    Rainfall: [
      62.93, 49.09, 42.43, 45.62, 51.83, 50.16, 48.58, 56.61, 51.36, 70.18,
      71.41, 63.06,
    ],
  },
];

const width = 600;
const height = 520;
const margin = {
  top: 5,
  bottom: 50,
  left: 100,
  right: 30,
};
const strokeWidth = 0;

const h1 = width / 3;
const h2 = width - h1;
const v1 = h1 / 2;
const v2 = h2 / 2;
const elevation = height - ((v1 + v2) / 2) * 2;

const timeFormat = d3.timeFormat("%b");

const months = d3
  .timeMonths(new Date(2022, 0, 1), new Date(2023, 0, 1))
  .map((d) => timeFormat(d));

const stations = data.map(({ station }) => station);

const dataViz = data.map((d) => {
  return {
    ...d,
    "Max temperature": d["Max temperature"].map((value, i) => ({
      value,
      month: months[i],
    })),
    "Min temperature": d["Min temperature"].map((value, i) => ({
      value,
      month: months[i],
    })),
    Rainfall: d["Rainfall"].map((value, i) => ({
      value,
      month: months[i],
    })),
  };
});

const metrics = {
  "Max temperature": {
    interpolator: d3.interpolateReds,
    range: [0, elevation],
    max: d3.max(dataViz, (d) =>
      d3.max(d["Max temperature"], ({ value }) => value)
    ),
  },
  "Min temperature": {
    interpolator: d3.interpolateBlues,
    range: [elevation, 0],
    max: d3.max(dataViz, (d) =>
      d3.max(d["Min temperature"], ({ value }) => value)
    ),
  },
  Rainfall: {
    interpolator: d3.interpolatePurples,
    range: [0, elevation],
    max: d3.max(dataViz, (d) => d3.max(d["Rainfall"], ({ value }) => value)),
  },
};

const keys = Object.keys(metrics);

const [key] = keys;
const { interpolator, range, max } = metrics[key];

const { length: l1 } = stations;
const g1 = h1 / l1;
const os1 = d3.range(l1).map((d) => [d * g1, (d * g1) / 2]);

const { length: l2 } = months;
const g2 = h2 / l2;
const os2 = d3.range(l2).map((d) => [d * g2, ((d * g2) / 2) * -1]);

const p = 0.2 * (g1 + g2);
const gp1 = g1 - p;
const gp2 = g2 - p;

const scaleOffset1 = d3.scaleOrdinal().domain(stations).range(os1);
const scaleOffset2 = d3.scaleOrdinal().domain(months).range(os2);

const scaleElevation = d3
  .scaleLinear()
  .domain([0, max])
  .range(range)
  .clamp(true);

const scaleColor = d3
  .scaleSequential()
  .domain([0, max])
  .interpolator(interpolator);

const ticksElevation = scaleElevation.ticks(4).slice(1);

const root = d3.select("body").append("div").attr("id", "root");

const svg = root
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const group = svg
  .append("g")
  .attr(
    "transform",
    `translate(${margin.left} ${margin.top + elevation + v2})`
  );

const groupAxis = group.append("g");
const groupData = group.append("g");

groupAxis.style("color", "hsl(0, 0%, 35%)");
groupData.style("color", "hsl(0, 0%, 20%)");

groupAxis
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M 0 ${-elevation} l 0 ${elevation} ${h1} ${v1}`);

groupAxis
  .append("path")
  .attr("opacity", "0.2")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M ${h1 + h2} ${v1 - v2} l 0 ${-elevation}`);

const groupTemperatures = groupAxis.append("g");
const groupStations = groupAxis.append("g");
const groupElevation = groupAxis.append("g");

const groupsElevation = groupElevation
  .append("g")
  .selectAll("g")
  .data(ticksElevation)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(0 ${-scaleElevation(d)})`);

groupsElevation
  .append("path")
  .attr("fill", "none")
  .attr("opacity", "0.2")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M 0 0 l ${h2} ${-v2} ${h1} ${v1}`);

groupsElevation
  .append("text")
  .attr("x", "-12")
  .attr("text-anchor", "end")
  .attr("fill", "currentColor")
  .attr("font-size", "18")
  .attr("font-weight", "500")
  .text((d) => d);

const groupsStations = groupStations
  .append("g")
  .selectAll("g")
  .data(stations)
  .enter()
  .append("g")
  .attr("transform", (d) => {
    const [x, y] = scaleOffset1(d);
    return `translate(${x} ${y})`;
  });

groupsStations
  .append("path")
  .attr("fill", "none")
  .attr("opacity", "0.2")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M 0 0 l ${h2} ${-v2} 0 ${-elevation}`);

groupsStations
  .append("text")
  .attr("transform", `translate(${g1 / 2} ${g1 / 2 / 2})`)
  .attr("x", "-8")
  .attr("y", "8")
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")
  .attr("fill", "currentColor")
  .attr("font-size", "16")
  .attr("font-weight", "500")
  .text((d) => d);

const groupsTemperatures = groupTemperatures
  .append("g")
  .attr("transform", `translate(${h1} ${v1})`)
  .selectAll("g")
  .data(months)
  .enter()
  .append("g")
  .attr("transform", (d) => {
    const [x, y] = scaleOffset2(d);
    return `translate(${x} ${y})`;
  });

groupsTemperatures
  .append("path")
  .attr("fill", "none")
  .attr("opacity", "0.2")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M 0 0 l ${-h1} ${-v1} 0 ${-elevation}`);

groupsTemperatures
  .append("text")
  .attr("transform", `translate(${g2 / 2} ${-g2 / 2 / 2})`)
  .attr("x", "18")
  .attr("y", "18")
  .attr("text-anchor", "middle")
  .attr("fill", "currentColor")
  .attr("font-size", "16")
  .attr("font-weight", "500")
  .text((d) => d);

const groupsData = groupData
  .selectAll("g")
  .data(dataViz)
  .enter()
  .append("g")
  .attr("transform", ({ station }) => {
    const [x, y] = scaleOffset1(station);

    return `translate(${x} ${y})`;
  });

const groupsBar = groupsData
  .selectAll("g")
  .data((d) => [...d[key]].reverse())
  .enter()
  .append("g")
  .attr("transform", ({ month }) => {
    const [x, y] = scaleOffset2(month);

    return `translate(${x} ${y})`;
  });

groupsBar
  .append("path")
  .attr("fill", ({ value }) => scaleColor(value))
  .attr(
    "d",
    ({ value }) =>
      `M ${p} 0 l ${gp1} ${gp1 / 2} ${gp2} ${-gp2 / 2} 0 ${-scaleElevation(
        value
      )} ${-gp1} ${-gp1 / 2} ${-gp2} ${gp2 / 2}`
  );

groupsBar
  .append("path")
  .attr("fill", ({ value }) => d3.color(scaleColor(value)).darker(0.6))
  .attr(
    "d",
    ({ value }) =>
      `M ${gp1 + p} ${gp1 / 2} l ${gp2} ${-gp2 / 2} 0 ${-scaleElevation(
        value
      )} ${-gp2} ${gp2 / 2} z`
  );

groupsBar
  .append("path")
  .attr("fill", "none")
  .attr("stroke-linecap", "round")
  .attr("stroke-linejoin", "round")
  .attr("stroke", "currentColor")
  .attr("stroke-width", strokeWidth)
  .attr(
    "d",
    ({ value }) =>
      `M ${gp1 + p} ${gp1 / 2} l ${gp2} ${-gp2 / 2} 0 ${-scaleElevation(
        value
      )} ${-gp2} ${gp2 / 2} 0 ${scaleElevation(value)} ${-gp1} ${
        -gp1 / 2
      } 0 ${-scaleElevation(value)} ${gp1} ${gp1 / 2} m ${gp2} ${
        -gp2 / 2
      } l ${-gp1} ${-gp1 / 2} ${-gp2} ${gp2 / 2}`
  );

const form = root.append("form").on("submit", (e) => e.preventDefault());

const select = form.append("select");

select
  .selectAll("option")
  .data(keys)
  .enter()
  .append("option")
  .attr("value", (d) => d)
  .text((d) => d);

select.property("value", key).on("input", (e) => {
  const { value: key } = e.target;
  const { interpolator, range, max } = metrics[key];

  scaleElevation.domain([0, max]).range(range);
  scaleColor.domain([0, max]).interpolator(interpolator);

  const ticksElevation = scaleElevation.ticks(4).slice(1);

  const transition = d3.transition();

  groupElevation
    .select("g")
    .selectAll("g")
    .data(ticksElevation)
    .join(
      (enter) => {
        const groupEnter = enter
          .append("g")
          .attr("transform", (d) => `translate(0 ${-scaleElevation(d)})`);

        groupEnter
          .attr("opacity", "0")
          .transition(transition)
          .attr("opacity", "1");

        groupEnter
          .append("path")
          .attr("fill", "none")
          .attr("opacity", "0.2")
          .attr("stroke", "currentColor")
          .attr("stroke-width", "1")
          .attr("d", `M 0 0 l ${h2} ${-v2} ${h1} ${v1}`);

        groupEnter
          .append("text")
          .attr("x", "-12")
          .attr("text-anchor", "end")
          .attr("fill", "currentColor")
          .attr("font-size", "18")
          .attr("font-weight", "500")
          .text((d) => d);
      },
      (update) => {
        update
          .transition(transition)
          .attr("transform", (d) => `translate(0 ${-scaleElevation(d)})`);

        update.select("text").text((d) => d);
      },
      (exit) => {
        exit.transition(transition).attr("opacity", "0").remove();
      }
    );

  const groupsBar = groupsData
    .selectAll("g")
    .data((d) => [...d[key]].reverse());

  groupsBar
    .select("path:nth-of-type(1)")
    .transition(transition)
    .attr("fill", ({ value }) => scaleColor(value))
    .attr(
      "d",
      ({ value }) =>
        `M ${p} 0 l ${gp1} ${gp1 / 2} ${gp2} ${-gp2 / 2} 0 ${-scaleElevation(
          value
        )} ${-gp1} ${-gp1 / 2} ${-gp2} ${gp2 / 2}`
    );

  groupsBar
    .select("path:nth-of-type(2)")
    .transition(transition)
    .attr("fill", ({ value }) => d3.color(scaleColor(value)).darker(0.6))
    .attr(
      "d",
      ({ value }) =>
        `M ${gp1 + p} ${gp1 / 2} l ${gp2} ${-gp2 / 2} 0 ${-scaleElevation(
          value
        )} ${-gp2} ${gp2 / 2} z`
    );

  groupsBar
    .select("path:nth-of-type(3)")
    .transition(transition)
    .attr(
      "d",
      ({ value }) =>
        `M ${gp1 + p} ${gp1 / 2} l ${gp2} ${-gp2 / 2} 0 ${-scaleElevation(
          value
        )} ${-gp2} ${gp2 / 2} 0 ${scaleElevation(value)} ${-gp1} ${
          -gp1 / 2
        } 0 ${-scaleElevation(value)} ${gp1} ${gp1 / 2} m ${gp2} ${
          -gp2 / 2
        } l ${-gp1} ${-gp1 / 2} ${-gp2} ${gp2 / 2}`
    );
});
