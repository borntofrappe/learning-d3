// prettier-ignore
const data = [
    { date: "2022-12-03", "Email & messages": 0.16, Writing: 0.03, Coding: 0.42, Designing: 0.16, Research: 0.05, Paperwork: 0.03, Planning: 0.14 },
    { date: "2022-12-04", "Email & messages": 0.09, Writing: 0.23, Coding: 0.32, Designing: 0.15, Research: 0.1, Paperwork: 0.03, Planning: 0.07 },
    { date: "2022-12-05", "Email & messages": 0.11, Writing: 0.24, Coding: 0.27, Designing: 0.11, Research: 0.16, Paperwork: 0.06, Planning: 0.05 },
    { date: "2022-12-06", "Email & messages": 0.06, Writing: 0.15, Coding: 0.37, Designing: 0.33, Research: 0.03, Paperwork: 0, Planning: 0.05 },
    { date: "2022-12-07", "Email & messages": 0, Writing: 0.06, Coding: 0.7, Designing: 0.07, Research: 0.03, Paperwork: 0.04, Planning: 0.09 },
    { date: "2022-12-08", "Email & messages": 0.05, Writing: 0.15, Coding: 0.38, Designing: 0.22, Research: 0.06, Paperwork: 0.05, Planning: 0.1 },
    { date: "2022-12-09", "Email & messages": 0.07, Writing: 0.1, Coding: 0.35, Designing: 0.22, Research: 0.08, Paperwork: 0.03, Planning: 0.15 },
    { date: "2022-12-10", "Email & messages": 0.01, Writing: 0.38, Coding: 0.3, Designing: 0.1, Research: 0.02, Paperwork: 0.05, Planning: 0.13 },
    { date: "2022-12-11", "Email & messages": 0.19, Writing: 0.02, Coding: 0.52, Designing: 0.08, Research: 0.02, Paperwork: 0.04, Planning: 0.13 },
    { date: "2022-12-12", "Email & messages": 0.07, Writing: 0.3, Coding: 0.01, Designing: 0.41, Research: 0.14, Paperwork: 0.03, Planning: 0.04 },
    { date: "2022-12-13", "Email & messages": 0.12, Writing: 0.04, Coding: 0.17, Designing: 0.37, Research: 0.15, Paperwork: 0.06, Planning: 0.09 },
    { date: "2022-12-14", "Email & messages": 0.14, Writing: 0.39, Coding: 0.23, Designing: 0.16, Research: 0.03, Paperwork: 0.05, Planning: 0 },
    { date: "2022-12-15", "Email & messages": 0.12, Writing: 0.08, Coding: 0.51, Designing: 0.18, Research: 0.02, Paperwork: 0.03, Planning: 0.06 },
    { date: "2022-12-16", "Email & messages": 0.11, Writing: 0.19, Coding: 0.25, Designing: 0.28, Research: 0.12, Paperwork: 0, Planning: 0.05 }
];

(() => {
  const width = 500;
  const height = 350;
  const margin = {
    top: 25,
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
  article.append("h2").text("Stacked bar chart");
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

  groupAxis.append("g").attr("transform", `translate(0 ${height})`).call(axisX);
  groupAxis.append("g").call(axisY).select("path").remove();

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
