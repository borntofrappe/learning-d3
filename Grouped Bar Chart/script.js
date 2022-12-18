// prettier-ignore
const data = [
    { "date": "2022-12-03", "Email & messages": 1, "Writing": 2, "Coding": 3, "Designing": 1, "Research": 0, "Paperwork": 0, "Planning": 1 },
    { "date": "2022-12-04", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 1, "Research": 1, "Paperwork": 0, "Planning": 0 },
    { "date": "2022-12-05", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 0, "Research": 1, "Paperwork": 2, "Planning": 0 },
    { "date": "2022-12-06", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 2, "Research": 0, "Paperwork": 0, "Planning": 0 },
    { "date": "2022-12-07", "Email & messages": 0, "Writing": 0, "Coding": 5, "Designing": 0, "Research": 0, "Paperwork": 0, "Planning": 2 },
    { "date": "2022-12-08", "Email & messages": 0, "Writing": 1, "Coding": 3, "Designing": 1, "Research": 0, "Paperwork": 0, "Planning": 0 },
    { "date": "2022-12-09", "Email & messages": 0, "Writing": 1, "Coding": 2, "Designing": 2, "Research": 0, "Paperwork": 0, "Planning": 1 },
    { "date": "2022-12-10", "Email & messages": 0, "Writing": 3, "Coding": 2, "Designing": 0, "Research": 0, "Paperwork": 0, "Planning": 1 },
    { "date": "2022-12-11", "Email & messages": 1, "Writing": 0, "Coding": 4, "Designing": 0, "Research": 2, "Paperwork": 0, "Planning": 1 },
    { "date": "2022-12-12", "Email & messages": 0, "Writing": 2, "Coding": 0, "Designing": 3, "Research": 1, "Paperwork": 0, "Planning": 0 },
    { "date": "2022-12-13", "Email & messages": 0, "Writing": 0, "Coding": 1, "Designing": 2, "Research": 1, "Paperwork": 2, "Planning": 0 },
    { "date": "2022-12-14", "Email & messages": 1, "Writing": 3, "Coding": 1, "Designing": 1, "Research": 0, "Paperwork": 1, "Planning": 0 },
    { "date": "2022-12-15", "Email & messages": 1, "Writing": 0, "Coding": 4, "Designing": 1, "Research": 0, "Paperwork": 0, "Planning": 0 },
    { "date": "2022-12-16", "Email & messages": 1, "Writing": 1, "Coding": 2, "Designing": 2, "Research": 0, "Paperwork": 0, "Planning": 1 }
  ];

const keys = Object.keys(data[0]).filter((d) => d !== "date");

const width = 600;
const height = 375;
const margin = {
  top: 10,
  bottom: 25,
  left: 40,
  right: 10,
};

const timeParse = d3.timeParse("%Y-%m-%d");
const timeFormat = d3.timeFormat("%b %-d");

const yMax = d3.max(data, (d) =>
  d3.max(
    Object.entries(d)
      .filter((d) => d[0] !== "date")
      .map((d) => d[1])
  )
);

const xScale = d3
  .scaleBand()
  .domain(data.map((d) => d.date))
  .range([0, width])
  .padding(0.05);

const xScale2 = d3
  .scaleBand()
  .domain(keys)
  .range([0, xScale.bandwidth()])
  .padding(0.15);

const yScale = d3.scaleLinear().domain([0, yMax]).range([height, 0]);

const colorScale = d3
  .scaleOrdinal(d3.schemeTableau10)
  .domain(keys)
  .unknown("currentColor");

const xAxis = d3
  .axisBottom(xScale)
  .tickSize(0)
  .tickPadding(10)
  .tickFormat((d) => timeFormat(timeParse(d)));

const yAxis = d3
  .axisLeft(yScale)
  .ticks(4)
  .tickSize(0)
  .tickPadding(6)
  .tickFormat((d) => (d ? `${d} h` : ""));

const svg = d3
  .select("body")
  .append("svg")
  .attr("class", "chart")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupAxis = group.append("g");
const groupData = group.append("g");

groupAxis
  .append("g")
  .attr("class", "axis-x")
  .attr("transform", `translate(0 ${height})`)
  .call(xAxis);

groupAxis.append("g").attr("class", "axis-y").call(yAxis);

const groupsData = groupData
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(${xScale(d.date)} 0)`);

groupsData
  .selectAll("rect")
  .data((d) => Object.entries(d).filter((d) => d[0] !== "date"))
  .enter()
  .append("rect")
  .attr("x", (d) => xScale2(d[0]))
  .attr("y", (d) => yScale(d[1]))
  .attr("width", xScale2.bandwidth())
  .attr("height", (d) => height - yScale(d[1]))
  .attr("fill", (d) => colorScale(d[0]));
