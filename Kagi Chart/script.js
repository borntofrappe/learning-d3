const data = [
  { date: "12/30/2022", close: 18.39 },
  { date: "12/29/2022", close: 18.27 },
  { date: "12/28/2022", close: 18.085 },
  { date: "12/27/2022", close: 18.325 },
  { date: "12/23/2022", close: 18.41 },
  { date: "12/22/2022", close: 18.33 },
  { date: "12/21/2022", close: 18.19 },
  { date: "12/20/2022", close: 18.075 },
  { date: "12/19/2022", close: 17.465 },
  { date: "12/16/2022", close: 16.685 },
  { date: "12/15/2022", close: 16.635 },
  { date: "12/14/2022", close: 16.755 },
  { date: "12/13/2022", close: 16.765 },
  { date: "12/12/2022", close: 16.705 },
  { date: "12/09/2022", close: 16.715 },
  { date: "12/08/2022", close: 16.755 },
  { date: "12/07/2022", close: 16.71 },
  { date: "12/06/2022", close: 16.845 },
  { date: "12/05/2022", close: 17.035 },
  { date: "12/02/2022", close: 17.635 },
  { date: "12/01/2022", close: 17.795 },
  { date: "11/30/2022", close: 17.81 },
  { date: "11/29/2022", close: 17.895 },
  { date: "11/28/2022", close: 17.93 },
  { date: "11/25/2022", close: 18.12 },
  { date: "11/23/2022", close: 18.01 },
  { date: "11/22/2022", close: 17.945 },
  { date: "11/21/2022", close: 17.81 },
  { date: "11/18/2022", close: 17.795 },
  { date: "11/17/2022", close: 17.73 },
  { date: "11/16/2022", close: 17.74 },
  { date: "11/15/2022", close: 17.78 },
  { date: "11/14/2022", close: 17.955 },
  { date: "11/11/2022", close: 17.975 },
  { date: "11/10/2022", close: 18.005 },
  { date: "11/09/2022", close: 17.985 },
  { date: "11/08/2022", close: 17.925 },
  { date: "11/07/2022", close: 17.79 },
  { date: "11/04/2022", close: 17.695 },
  { date: "11/03/2022", close: 17.585 },
  { date: "11/02/2022", close: 17.58 },
  { date: "11/01/2022", close: 17.65 },
  { date: "10/31/2022", close: 16.985 },
  { date: "10/28/2022", close: 16.505 },
  { date: "10/27/2022", close: 16.345 },
  { date: "10/26/2022", close: 16.37 },
  { date: "10/25/2022", close: 16.53 },
  { date: "10/24/2022", close: 16.575 },
  { date: "10/21/2022", close: 16.36 },
  { date: "10/20/2022", close: 16.45 },
  { date: "10/19/2022", close: 16.485 },
  { date: "10/18/2022", close: 16.54 },
  { date: "10/17/2022", close: 16.67 },
  { date: "10/14/2022", close: 16.735 },
  { date: "10/13/2022", close: 16.76 },
  { date: "10/12/2022", close: 16.81 },
  { date: "10/11/2022", close: 16.72 },
  { date: "10/10/2022", close: 16.715 },
  { date: "10/07/2022", close: 16.825 },
  { date: "10/06/2022", close: 16.89 },
  { date: "10/05/2022", close: 16.97 },
  { date: "10/04/2022", close: 16.965 },
  { date: "10/03/2022", close: 16.935 },
  { date: "09/30/2022", close: 17.17 },
  { date: "09/29/2022", close: 17.35 },
  { date: "09/28/2022", close: 17.36 },
  { date: "09/27/2022", close: 17.315 },
  { date: "09/26/2022", close: 17.35 },
  { date: "09/23/2022", close: 17.38 },
  { date: "09/22/2022", close: 17.385 },
  { date: "09/21/2022", close: 17.625 },
  { date: "09/20/2022", close: 17.725 },
  { date: "09/19/2022", close: 17.635 },
  { date: "09/16/2022", close: 17.825 },
  { date: "09/15/2022", close: 17.82 },
  { date: "09/14/2022", close: 17.8 },
  { date: "09/13/2022", close: 17.785 },
  { date: "09/12/2022", close: 17.7 },
  { date: "09/09/2022", close: 17.585 },
  { date: "09/08/2022", close: 17.24 },
  { date: "09/07/2022", close: 17.055 },
  { date: "09/06/2022", close: 17.13 },
  { date: "09/02/2022", close: 17.665 },
  { date: "09/01/2022", close: 17.675 },
  { date: "08/31/2022", close: 17.84 },
  { date: "08/30/2022", close: 17.79 },
  { date: "08/29/2022", close: 17.645 },
  { date: "08/26/2022", close: 17.665 },
  { date: "08/25/2022", close: 17.53 },
  { date: "08/24/2022", close: 17.605 },
  { date: "08/23/2022", close: 17.29 },
  { date: "08/22/2022", close: 17.125 },
  { date: "08/19/2022", close: 17.085 },
  { date: "08/18/2022", close: 16.555 },
  { date: "08/17/2022", close: 16.665 },
  { date: "08/16/2022", close: 16.9 },
  { date: "08/15/2022", close: 17.075 },
  { date: "08/12/2022", close: 17.155 },
  { date: "08/11/2022", close: 17.08 },
  { date: "08/10/2022", close: 16.945 },
  { date: "08/09/2022", close: 17 },
  { date: "08/08/2022", close: 17.195 },
  { date: "08/05/2022", close: 17.34 },
  { date: "08/04/2022", close: 17.325 },
  { date: "08/03/2022", close: 17.06 },
  { date: "08/02/2022", close: 16.775 },
  { date: "08/01/2022", close: 16.66 },
  { date: "07/29/2022", close: 16.885 },
  { date: "07/28/2022", close: 17.02 },
  { date: "07/27/2022", close: 17.085 },
  { date: "07/26/2022", close: 17.095 },
  { date: "07/25/2022", close: 16.93 },
  { date: "07/22/2022", close: 16.865 },
  { date: "07/21/2022", close: 16.985 },
  { date: "07/20/2022", close: 16.945 },
  { date: "07/19/2022", close: 17.16 },
  { date: "07/18/2022", close: 17.07 },
  { date: "07/15/2022", close: 16.525 },
  { date: "07/14/2022", close: 16.4 },
  { date: "07/13/2022", close: 16.425 },
  { date: "07/12/2022", close: 16.45 },
  { date: "07/11/2022", close: 16.535 },
  { date: "07/08/2022", close: 16.455 },
  { date: "07/07/2022", close: 16.385 },
  { date: "07/06/2022", close: 16.18 },
  { date: "07/05/2022", close: 16.11 },
  { date: "07/01/2022", close: 16.42 },
  { date: "06/30/2022", close: 16.745 },
  { date: "06/29/2022", close: 16.8 },
  { date: "06/28/2022", close: 16.58 },
  { date: "06/27/2022", close: 16.445 },
  { date: "06/24/2022", close: 16.41 },
  { date: "06/23/2022", close: 16.475 },
  { date: "06/22/2022", close: 16.685 },
  { date: "06/21/2022", close: 16.505 },
  { date: "06/17/2022", close: 16.6 },
  { date: "06/16/2022", close: 16.725 },
  { date: "06/15/2022", close: 16.815 },
  { date: "06/14/2022", close: 16.555 },
  { date: "06/13/2022", close: 16.38 },
  { date: "06/10/2022", close: 16.25 },
  { date: "06/09/2022", close: 16.635 },
  { date: "06/08/2022", close: 16.92 },
  { date: "06/07/2022", close: 16.94 },
  { date: "06/06/2022", close: 17.23 },
  { date: "06/03/2022", close: 16.795 },
  { date: "06/02/2022", close: 16.975 },
  { date: "06/01/2022", close: 17.135 },
  { date: "05/31/2022", close: 17.545 },
  { date: "05/27/2022", close: 17.47 },
  { date: "05/26/2022", close: 17.275 },
  { date: "05/25/2022", close: 17.075 },
  { date: "05/24/2022", close: 17.165 },
  { date: "05/23/2022", close: 17.27 },
  { date: "05/20/2022", close: 17.165 },
  { date: "05/19/2022", close: 16.985 },
  { date: "05/18/2022", close: 16.81 },
  { date: "05/17/2022", close: 17.165 },
  { date: "05/16/2022", close: 17.825 },
  { date: "05/13/2022", close: 17.37 },
  { date: "05/12/2022", close: 17.175 },
  { date: "05/11/2022", close: 17 },
  { date: "05/10/2022", close: 16.91 },
  { date: "05/09/2022", close: 16.85 },
  { date: "05/06/2022", close: 16.995 },
  { date: "05/05/2022", close: 17.08 },
  { date: "05/04/2022", close: 17.1 },
  { date: "05/03/2022", close: 17.035 },
  { date: "05/02/2022", close: 17.165 },
  { date: "04/29/2022", close: 17.475 },
  { date: "04/28/2022", close: 17.155 },
  { date: "04/27/2022", close: 17.03 },
  { date: "04/26/2022", close: 17.1 },
  { date: "04/25/2022", close: 16.665 },
  { date: "04/22/2022", close: 16.55 },
  { date: "04/21/2022", close: 16.58 },
  { date: "04/20/2022", close: 16.385 },
  { date: "04/19/2022", close: 16.065 },
  { date: "04/18/2022", close: 16.55 },
  { date: "04/14/2022", close: 16.195 },
  { date: "04/13/2022", close: 15.76 },
  { date: "04/12/2022", close: 15.71 },
  { date: "04/11/2022", close: 15.625 },
  { date: "04/08/2022", close: 15.78 },
  { date: "04/07/2022", close: 15.815 },
  { date: "04/06/2022", close: 15.905 },
  { date: "04/05/2022", close: 16.035 },
  { date: "04/04/2022", close: 15.965 },
  { date: "04/01/2022", close: 16.005 },
  { date: "03/31/2022", close: 16.01 },
  { date: "03/30/2022", close: 15.915 },
  { date: "03/29/2022", close: 15.73 },
  { date: "03/28/2022", close: 15.96 },
  { date: "03/25/2022", close: 16.255 },
  { date: "03/24/2022", close: 16.01 },
  { date: "03/23/2022", close: 15.99 },
  { date: "03/22/2022", close: 16.025 },
  { date: "03/21/2022", close: 15.93 },
  { date: "03/18/2022", close: 15.625 },
  { date: "03/17/2022", close: 15.71 },
  { date: "03/16/2022", close: 15.865 },
  { date: "03/15/2022", close: 16.18 },
  { date: "03/14/2022", close: 16.1 },
  { date: "03/11/2022", close: 15.855 },
  { date: "03/10/2022", close: 15.89 },
  { date: "03/09/2022", close: 15.835 },
  { date: "03/08/2022", close: 16.005 },
  { date: "03/07/2022", close: 16.25 },
  { date: "03/04/2022", close: 16.445 },
  { date: "03/03/2022", close: 16.36 },
  { date: "03/02/2022", close: 16.215 },
  { date: "03/01/2022", close: 16.185 },
  { date: "02/28/2022", close: 15.685 },
  { date: "02/25/2022", close: 15.39 },
  { date: "02/24/2022", close: 15.415 },
  { date: "02/23/2022", close: 15.345 },
  { date: "02/22/2022", close: 15.405 },
  { date: "02/18/2022", close: 15.16 },
  { date: "02/17/2022", close: 15.18 },
  { date: "02/16/2022", close: 14.88 },
  { date: "02/15/2022", close: 14.81 },
  { date: "02/14/2022", close: 15.05 },
  { date: "02/11/2022", close: 15.21 },
  { date: "02/10/2022", close: 14.795 },
  { date: "02/09/2022", close: 15.085 },
  { date: "02/08/2022", close: 15.26 },
  { date: "02/07/2022", close: 15.45 },
  { date: "02/04/2022", close: 15.275 },
  { date: "02/03/2022", close: 15.375 },
  { date: "02/02/2022", close: 15.435 },
  { date: "02/01/2022", close: 15.165 },
  { date: "01/31/2022", close: 15.06 },
  { date: "01/28/2022", close: 14.975 },
  { date: "01/27/2022", close: 14.96 },
  { date: "01/26/2022", close: 15.07 },
  { date: "01/25/2022", close: 14.97 },
  { date: "01/24/2022", close: 14.98 },
  { date: "01/21/2022", close: 14.85 },
  { date: "01/20/2022", close: 14.77 },
  { date: "01/19/2022", close: 14.655 },
  { date: "01/18/2022", close: 14.52 },
  { date: "01/14/2022", close: 14.555 },
  { date: "01/13/2022", close: 14.255 },
  { date: "01/12/2022", close: 14.25 },
  { date: "01/11/2022", close: 14.255 },
  { date: "01/10/2022", close: 14.58 },
  { date: "01/07/2022", close: 14.765 },
  { date: "01/06/2022", close: 14.71 },
  { date: "01/05/2022", close: 14.67 },
  { date: "01/04/2022", close: 14.695 },
  { date: "01/03/2022", close: 14.635 },
];

const div = d3.select("body").append("div").attr("id", "root");

(() => {
  const article = div.append("article");
  article.append("h2").text("An issue");
  article
    .append("p")
    .text(
      "In the moment you want to track the closing price of a certain stock, a simple line chart is often ineffective as the number of observation grows."
    );

  const width = 400;
  const height = 100;

  const margin = {
    top: 10,
    bottom: 25,
    left: 5,
    right: 20,
  };

  const timeParse = d3.timeParse("%m/%d/%Y");
  const formatDate = d3.timeFormat("%B");

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

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => timeParse(d.date)))
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.close))
    .range([height, 0]);

  const xAxis = d3
    .axisBottom(xScale)
    .tickFormat((d, i) => (i % 2 === 0 ? formatDate(d) : ""));

  const yTicks = yScale.ticks(5);

  const line = d3
    .line()
    .x((d) => xScale(timeParse(d.date)))
    .y((d) => yScale(d.close));

  const groupAxis = group.append("g");
  const groupData = group.append("g");

  groupAxis
    .append("text")
    .text("Line chart")
    .attr("fill", "#a2a2a2")
    .attr("x", "2")
    .attr("y", "8")
    .attr("font-family", "sans-serif")
    .attr("font-weight", "700")
    .attr("font-size", "8")
    .style("text-transform", "uppercase");

  const groupXAxis = groupAxis
    .append("g")
    .attr("transform", `translate(0 ${height})`)
    .call(xAxis);

  groupXAxis.selectAll("path").remove();
  groupXAxis.selectAll("line").remove();
  groupXAxis
    .selectAll("text")
    .attr("fill", "#8b909b")
    .attr("font-family", "sans-serif")
    .attr("font-size", "7");

  const groupsYAxis = groupAxis
    .append("g")
    .selectAll("g")
    .data(yTicks)
    .enter()
    .append("g")
    .attr("transform", (d) => `translate(0 ${yScale(d)})`);

  groupsYAxis
    .append("text")
    .attr("fill", "#8b909b")
    .attr("x", width + 2)
    .attr("font-family", "sans-serif")
    .attr("font-size", "7")
    .text((d) => `${d}$`);

  groupsYAxis
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#d5d7e4")
    .attr("stroke-width", "1")
    .attr("stroke-dasharray", "1 2")
    .attr("d", `M 0 0 h ${width}`);

  groupData
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#8b909b")
    .attr("stroke-width", "1")
    .attr("d", line(data));
})();

(() => {
  const article = div.append("article");
  article.append("h2").text("A solution");
  article
    .append("p")
    .text(
      "A Kagi chart, independent of time, allows to focus on the closing price by highlighting the direction of the changes."
    );

  const width = 200;
  const height = 200;

  const margin = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 20,
  };

  const timeParse = d3.timeParse("%m/%d/%Y");

  const dataSort = [...data].sort(
    (a, b) => timeParse(a.date) - timeParse(b.date)
  );
  const [first, second] = dataSort;

  let segment = 0;
  let wasRising = second.close > first.close;
  const dataKagi = [
    { ...first, segment },
    { ...second, segment },
  ];

  const reversalRate = 0.03;

  for (let i = 2; i < dataSort.length; i++) {
    const datum = dataSort[i];
    const { close } = datum;
    const { close: lastClose } = dataKagi[dataKagi.length - 1];

    const isRising = close >= lastClose;
    if (isRising === wasRising) {
      dataKagi.push({
        ...datum,
        segment,
      });
    } else {
      if (Math.abs(close - lastClose) / lastClose >= reversalRate) {
        segment++;
        wasRising = isRising;

        dataKagi.push({
          ...dataKagi[dataKagi.length - 1],
          segment,
        });

        dataKagi.push({
          ...datum,
          segment,
        });
      }
    }
  }

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

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataKagi, (d) => d.segment))
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataKagi, (d) => d.close))
    .range([height, 0]);

  const yTicks = yScale.ticks(5);

  const line = d3
    .line()
    .x((d) => xScale(d.segment))
    .y((d) => yScale(d.close));

  const groupAxis = group.append("g");
  const groupData = group.append("g");

  groupAxis
    .append("text")
    .text("Kagi chart")
    .attr("fill", "#a2a2a2")
    .attr("x", "2")
    .attr("y", "8")
    .attr("font-family", "sans-serif")
    .attr("font-weight", "700")
    .attr("font-size", "8")
    .style("text-transform", "uppercase");

  const groupsYAxis = groupAxis
    .append("g")
    .selectAll("g")
    .data(yTicks)
    .enter()
    .append("g")
    .attr("transform", (d) => `translate(0 ${yScale(d)})`);

  groupsYAxis
    .append("text")
    .attr("fill", "#8b909b")
    .attr("x", width + 2)
    .attr("font-family", "sans-serif")
    .attr("font-size", "7")
    .text((d) => `${d}$`);

  groupsYAxis
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#d5d7e4")
    .attr("stroke-width", "1")
    .attr("stroke-dasharray", "1 2")
    .attr("d", `M 0 0 h ${width}`);

  groupData
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#8b909b")
    .attr("stroke-width", "1")
    .attr("d", line(dataKagi));
})();
