// prettier-ignore
const data = [
    { "edition": "1994", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 4, "Quarter-finalists (out of 8)": 8 },
    { "edition": "1998", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 3, "Quarter-finalists (out of 8)": 6 },
    { "edition": "2002", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 3, "Quarter-finalists (out of 8)": 4 },
    { "edition": "2006", "Final winner": 1, "Finalists": 1, "Semi-finalists (out of 4)": 3, "Quarter-finalists (out of 8)": 6 },
    { "edition": "2010", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 4, "Quarter-finalists (out of 8)": 7 },
    { "edition": "2014", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 4, "Quarter-finalists (out of 8)": 8 },
    { "edition": "2018", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 3, "Quarter-finalists (out of 8)": 6 },
    { "edition": "2022", "Final winner": 1, "Finalists": 2, "Semi-finalists (out of 4)": 3, "Quarter-finalists (out of 8)": 7 },
  ];

const keys = Object.keys(data[0]).filter((d) => d !== "edition");

const width = 400;
const height = 280;

const margin = {
  top: 10,
  bottom: 35,
  left: 45,
  right: 10,
};

const valueMax = d3.max(data, (d) =>
  d3.max(
    Object.entries(d)
      .filter((d) => d[0] !== "edition")
      .map((d) => d[1])
  )
);

const positionScale = d3
  .scaleBand()
  .domain(data.map((d) => d.edition))
  .range([0, width])
  .padding(0.3);

const positionScale2 = d3
  .scaleBand()
  .domain(keys)
  .range([0, positionScale.bandwidth()])
  .padding(0.3);

const valueScale = d3.scaleLinear().domain([0, valueMax]).range([height, 0]);

const colorScale = d3
  .scaleOrdinal(d3.schemeSet2)
  .domain(keys)
  .unknown("currentColor");

const ticks = valueScale.ticks().filter((d) => d % 2 !== 0);
const tickFormat = d3.format("d");

const valueAxis = d3
  .axisLeft(valueScale)
  .tickSize(0)
  .tickPadding(10)
  .tickValues(ticks)
  .tickFormat((d) => tickFormat(d));

const positionAxis = d3.axisBottom(positionScale).tickSize(0).tickPadding(6);

const root = d3.select("body").append("div").attr("id", "root");
root.append("h1").text("Grouped Bar Chart");

const form = root.append("form");

const labels = form
  .selectAll("label")
  .data(keys)
  .enter()
  .append("label")
  .text((d) => d);

labels
  .append("input")
  .attr("type", "checkbox")
  .attr("name", "key")
  .attr("value", (d) => d)
  .property("checked", true);

labels
  .append("svg")
  .attr("viewBox", "-1 -1 2 2")
  .attr("height", "1em")
  .attr("fill", (d) => colorScale(d))
  .append("circle")
  .attr("r", "0.9");

const svg = root
  .append("svg")
  .attr("class", "chart")
  .attr(
    "viewBox",
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  );

const footer = root.append("footer");
footer
  .append("p")
  .html(
    `The specific visualization takes inspiration from an article from <cite><a href="https://www.lemonde.fr/les-decodeurs/article/2022/11/30/coupe-du-monde-2022-quel-est-le-destin-des-premiers-de-chaque-poule-pour-la-suite-de-la-competition_6152373_4355770.html">Le Monde</a></cite> which considers how the teams finishing first in the group stages continue their path in the FIFA World Cup.`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupAxis = group.append("g");
const groupData = group.append("g");

const groupAxisValue = groupAxis.append("g").call(valueAxis);

const groupAxisPosition = groupAxis
  .append("g")
  .attr("transform", `translate(0 ${height})`)
  .call(positionAxis);

groupAxisValue.select("path").remove();

groupAxisValue
  .selectAll(".tick")
  .append("line")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.1")
  .attr("x1", width);

groupAxisValue.selectAll("text").attr("font-weight", "700");
groupAxisPosition.selectAll("text").attr("font-size", "9");

groupAxis
  .append("text")
  .attr("x", width / 2)
  .attr("y", height + margin.bottom - 2)
  .attr("font-size", "10")
  .attr("font-weight", "700")
  .attr("text-anchor", "middle")
  .text("World cup");

groupAxis
  .append("text")
  .attr("transform", `translate(${-margin.left + 1} ${height / 2}) rotate(-90)`)
  .attr("font-size", "10")
  .attr("font-weight", "700")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "hanging")
  .text("Number of teams");

const groupsData = groupData
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d) => `translate(${positionScale(d.edition)} 0)`);

groupsData
  .selectAll("rect")
  .data(
    (d) => Object.entries(d).filter((d) => d[0] !== "edition"),
    (d) => d
  )
  .enter()
  .append("rect")
  .attr("y", (d) => valueScale(d[1]))
  .attr("height", (d) => height - valueScale(d[1]))
  .attr("x", (d) => positionScale2(d[0]))
  .attr("width", positionScale2.bandwidth())
  .attr("fill", (d) => colorScale(d[0]));

form.on("submit", (e) => e.preventDefault());
form.on("input", (e) => {
  const keys = [...form.node().querySelectorAll('input[type="checkbox"]')]
    .filter((d) => d.checked)
    .map((d) => d.value);

  const valueMax =
    d3.max(data, (d) =>
      d3.max(
        Object.entries(d)
          .filter((d) => keys.includes(d[0]))
          .map((d) => d[1])
      )
    ) || 1;

  valueScale.domain([0, valueMax]);

  positionScale2.domain(keys);

  const transition = d3.transition().duration(500).ease(d3.easeQuadInOut);

  labels
    .filter((d) => !keys.includes(d))
    .transition(transition)
    .style("opacity", "0.3")
    .style("filter", "grayscale(1)");

  labels
    .filter((d) => keys.includes(d))
    .style("opacity", "1")
    .style("filter", "grayscale(0)");

  groupsData
    .selectAll("rect")
    .data(
      (d) => Object.entries(d).filter((d) => keys.includes(d[0])),
      (d) => d
    )
    .join(
      (enter) => {
        enter
          .append("rect")
          .attr("y", (d) => valueScale(d[1]))
          .attr("height", (d) => height - valueScale(d[1]))
          .attr("fill", (d) => colorScale(d[0]))
          .attr("x", (d) => positionScale2(d[0]) + positionScale2.bandwidth())
          .attr("width", "0")
          .transition(transition)
          .attr("x", (d) => positionScale2(d[0]))
          .attr("width", positionScale2.bandwidth());
      },
      (update) => {
        update
          .transition(transition)
          .attr("y", (d) => valueScale(d[1]))
          .attr("height", (d) => height - valueScale(d[1]))
          .attr("x", (d) => positionScale2(d[0]))
          .attr("width", positionScale2.bandwidth())
          .attr("fill", (d) => colorScale(d[0]));
      },
      (exit) => {
        exit
          .attr("data-x", function () {
            return (
              parseFloat(d3.select(this).attr("width")) +
              parseFloat(d3.select(this).attr("x"))
            );
          })
          .transition(transition)
          .attr("x", function () {
            return parseFloat(d3.select(this).attr("data-x"));
          })
          .attr("width", "0")
          .remove();
      }
    );

  groupAxisPosition.transition(transition).call(positionAxis);
  valueAxis.tickValues(valueScale.ticks().filter((d) => ticks.includes(d)));
  groupAxisValue.transition(transition).call(valueAxis);

  groupAxisValue.select("path").remove();

  groupAxisValue
    .selectAll(".tick")
    .selectAll("line")
    .data([null])
    .join("line")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.1")
    .attr("x1", width);

  groupAxisValue.selectAll("text").attr("font-weight", "700");
  groupAxisPosition.selectAll("text").attr("font-size", "9");
});
