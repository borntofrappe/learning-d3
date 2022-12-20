// prettier-ignore
const data = [
    { country: "Belgium", values: [{ key: "Male", value: 78.5, }, { key: "Female", value: 83, }] }, 
    { country: "Bulgaria", values: [{ key: "Male", value: 70, }, { key: "Female", value: 77.5, }] }, 
    { country: "Czechia", values: [{ key: "Male", value: 75.3, }, { key: "Female", value: 81.3, }] }, 
    { country: "Denmark", values: [{ key: "Male", value: 79.7, }, { key: "Female", value: 83.6, }] }, 
    { country: "Germany", values: [{ key: "Male", value: 78.7, }, { key: "Female", value: 83.5, }] }, 
    { country: "Estonia", values: [{ key: "Male", value: 74.4, }, { key: "Female", value: 83, }] }, 
    { country: "Ireland", values: [{ key: "Male", value: 80.8, }, { key: "Female", value: 84.4, }] }, 
    { country: "Greece", values: [{ key: "Male", value: 78.8, }, { key: "Female", value: 83.9, }] }, 
    { country: "Spain", values: [{ key: "Male", value: 79.6, }, { key: "Female", value: 85.2, }] }, 
    { country: "France", values: [{ key: "Male", value: 79.2, }, { key: "Female", value: 85.3, }] }, 
    { country: "Croatia", values: [{ key: "Male", value: 74.7, }, { key: "Female", value: 80.9, }] }, 
    { country: "Italy", values: [{ key: "Male", value: 80, }, { key: "Female", value: 84.5, }] }, 
    { country: "Cyprus", values: [{ key: "Male", value: 80.4, }, { key: "Female", value: 84.4, }] }, 
    { country: "Latvia", values: [{ key: "Male", value: 70.6, }, { key: "Female", value: 80, }] }, 
    { country: "Lithuania", values: [{ key: "Male", value: 70.1, }, { key: "Female", value: 80.1, }] }, 
    { country: "Luxembourg", values: [{ key: "Male", value: 79.9, }, { key: "Female", value: 84.5, }] }, 
    { country: "Hungary", values: [{ key: "Male", value: 72.3, }, { key: "Female", value: 79, }] }, 
    { country: "Malta", values: [{ key: "Male", value: 80.3, }, { key: "Female", value: 84.5, }] }, 
    { country: "Netherlands", values: [{ key: "Male", value: 79.7, }, { key: "Female", value: 83.1, }] }, 
    { country: "Austria", values: [{ key: "Male", value: 78.9, }, { key: "Female", value: 83.6, }] }, 
    { country: "Poland", values: [{ key: "Male", value: 72.5, }, { key: "Female", value: 80.7, }] }, 
    { country: "Portugal", values: [{ key: "Male", value: 78, }, { key: "Female", value: 84.1, }] }, 
    { country: "Romania", values: [{ key: "Male", value: 70.4, }, { key: "Female", value: 78.3, }] }, 
    { country: "Slovenia", values: [{ key: "Male", value: 77.8, }, { key: "Female", value: 83.4, }] }, 
    { country: "Slovakia", values: [{ key: "Male", value: 73.5, }, { key: "Female", value: 80.4, }] }, 
    { country: "Finland", values: [{ key: "Male", value: 79.2, }, { key: "Female", value: 84.8, }] }, 
    { country: "Sweden", values: [{ key: "Male", value: 80.6, }, { key: "Female", value: 84.2, }]
  },
];

const keys = ["Male", "Female"];
const countries = data.map((d) => d.country);

const width = 320;
const height = 550;
const margin = {
  top: 25,
  bottom: 5,
  left: 80,
  right: 5,
};

const max = d3.max(data, (d) => d3.max(d.values, (d) => d.value));

const xScale = d3.scaleLinear().domain([0, max]).range([0, width]);
const yScale = d3.scaleBand().domain(countries).range([0, height]);

const xAxis = d3.axisTop(xScale).tickSize(0).tickPadding(10);
const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(10);

const svg = d3
  .select("body")
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

const groupAxis = group.append("g");

groupAxis.append("g").call(xAxis);
groupAxis.append("g").call(yAxis);
