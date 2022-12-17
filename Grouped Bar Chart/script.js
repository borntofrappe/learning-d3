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

(() => {
  const width = 500;
  const height = 350;
  const margin = {
    top: 30,
    bottom: 25,
    left: 35,
    right: 10,
  };

  const valueFormat = (d) => `${d3.format(".2")(d)}h`;
  const timeParse = d3.timeParse("%Y-%m-%d");
  const timeFormat = d3.timeFormat("%b %-d");

  const keys = Object.keys(data[0]).filter((d) => d !== "date");

  const stack = d3.stack().keys(keys);

  const series = stack(data);

  const scaleX = d3
    .scaleBand()
    .domain(data.map((d) => timeParse(d.date)))
    .range([0, width])
    .padding(0.4);

  const scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(series[series.length - 1], (d) => d[1])])
    .range([height, 0]);

  const scaleColor = d3.scaleOrdinal(d3.schemeTableau10).domain(keys);

  const axisX = d3
    .axisBottom(scaleX)
    .tickFormat((d) => timeFormat(d))
    .tickSize(0)
    .tickPadding(10);

  const axisY = d3
    .axisLeft(scaleY)
    .ticks(4)
    .tickFormat((d) => (d ? `${d} h` : ""))
    .tickSize(0)
    .tickPadding(6);

  const article = d3.select("body").append("article");
  article.append("h2").text("Stacked bar chart — Highlight");
  const legendKeys = article.append("div").attr("class", "legend");

  const legendsKeys = legendKeys
    .selectAll("span")
    .data(keys)
    .enter()
    .append("span")
    .text((d) => d);

  legendsKeys
    .append("svg")
    .attr("viewBox", "0 0 1 1")
    .style("height", "1em")
    .attr("fill", (d) => scaleColor(d))
    .append("rect")
    .attr("width", "1")
    .attr("height", "1");

  const svg = article
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

  const groupData = group.append("g");
  const groupAxis = group.append("g");
  const groupDetails = group.append("g").style("pointer-events", "none");

  const groupAxisX = groupAxis
    .append("g")
    .attr("transform", `translate(0 ${height})`)
    .call(axisX);
  const groupAxisY = groupAxis.append("g").call(axisY);

  groupAxisY.select("path").remove();

  groupAxisX.selectAll("text").attr("font-size", "8");
  groupAxisY.selectAll("text").attr("font-size", "10");

  const groupsData = groupData
    .selectAll("g")
    .data(series)
    .enter()
    .append("g")
    .attr("fill", (d) => scaleColor(d.key));

  groupsData
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect")
    .attr("x", (d) => scaleX(timeParse(d.data.date)))
    .attr("width", scaleX.bandwidth())
    .attr("y", (d) => scaleY(d[1]))
    .attr("height", (d) => scaleY(d[0]) - scaleY(d[1]));

  legendsKeys.style("cursor", "pointer").on("click", function (e, d) {
    e.stopPropagation();

    legendsKeys
      .filter((key) => key !== d)
      .transition()
      .style("opacity", "0.25")
      .style("filter", "grayscale(1)");

    groupsData
      .filter(({ key }) => key !== d)
      .transition()
      .attr("opacity", "0.25")
      .style("filter", "grayscale(1)");

    d3.select(this).style("opacity", "1").style("filter", "grayscale(0)");

    groupsData
      .filter(({ key }) => key === d)
      .attr("opacity", "1")
      .style("filter", "grayscale(0)");

    const dataDetails = series.find(({ key }) => key === d);
    groupDetails
      .selectAll("text")
      .data(dataDetails)
      .join(
        (enter) => {
          enter
            .append("text")
            .attr("font-size", "10")
            .attr("font-weight", "700")
            .attr("text-anchor", "middle")
            .attr("x", scaleX.bandwidth() / 2)
            .attr("y", -5)
            .attr(
              "transform",
              (d) => `translate(${scaleX(timeParse(d.data.date))} 0)`
            )
            .text((d) => valueFormat(d[1] - d[0]));
        },
        (update) => {
          update
            .attr(
              "transform",
              (d) => `translate(${scaleX(timeParse(d.data.date))} 0)`
            )
            .text((d) => valueFormat(d[1] - d[0]));
        },
        (exit) => {
          exit.remove();
        }
      );
  });

  article.on("click", () => {
    legendsKeys
      .transition()
      .style("opacity", "1")
      .style("filter", "grayscale(0)");

    groupsData
      .transition()
      .attr("opacity", "1")
      .style("filter", "grayscale(0)");

    groupDetails.selectAll("*").remove();
  });
})();
