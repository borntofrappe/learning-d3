const sparkline = () => {
  const { timeParse, scaleTime, scaleLinear, extent } = d3;

  let data = Array(31)
    .fill()
    .map((_, i) => ({
      date: `2022-01-${i + 1}`,
      value: 50,
    }));

  let dateAccessor = (d) => timeParse("%Y-%m-%-d")(d.date);
  let valueAccessor = (d) => d.value;
  let domain = [0, 100];

  let width = 200;
  let height = 20;

  let title = "";
  let description = "";

  const sparkline = (selection) => {
    const scaleX = scaleTime()
      .domain(extent(data, (d) => dateAccessor(d)))
      .range([0, width]);

    const scaleY = scaleLinear().domain(domain).range([height, 0]);

    const lineGenerator = d3
      .line()
      .x((d) => scaleX(dateAccessor(d)))
      .y((d) => scaleY(valueAccessor(d)));

    const svg = selection
      .append("svg")
      .attr("viewBox", `-1 -1 ${width + 2} ${height + 2}`)
      .style("height", "1em")
      .style("width", "auto");

    svg.append("title").text(title);
    svg.append("desc").text(description);

    svg
      .append("path")
      .datum(data)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", "2");
  };

  sparkline.data = function (array) {
    if (!arguments.length) return data;

    data = array;
    return this;
  };

  sparkline.dateAccessor = function (fn) {
    if (!arguments.length) return dateAccessor;

    dateAccessor = fn;
    return this;
  };

  sparkline.valueAccessor = function (fn) {
    if (!arguments.length) return valueAccessor;

    valueAccessor = fn;
    return this;
  };

  sparkline.domain = function (array) {
    if (!arguments.length) return domain;

    domain = array;
    return this;
  };

  sparkline.width = function (number) {
    if (!arguments.length) return width;

    width = number;
    return this;
  };

  sparkline.height = function (number) {
    if (!arguments.length) return height;

    height = number;
    return this;
  };

  sparkline.title = function (string) {
    if (!arguments.length) return title;

    title = string;
    return this;
  };

  sparkline.description = function (string) {
    if (!arguments.length) return description;

    description = string;
    return this;
  };

  return sparkline;
};

const data = [
  {
    word: "Clafoutis",
    values: [
      { value: 2, date: "2022-01-02" },
      { value: 4, date: "2022-01-09" },
      { value: 4, date: "2022-01-16" },
      { value: 4, date: "2022-01-23" },
      { value: 5, date: "2022-01-30" },
      { value: 5, date: "2022-02-06" },
      { value: 6, date: "2022-02-13" },
      { value: 6, date: "2022-02-20" },
      { value: 7, date: "2022-02-27" },
      { value: 5, date: "2022-03-06" },
      { value: 8, date: "2022-03-13" },
      { value: 6, date: "2022-03-20" },
      { value: 7, date: "2022-03-27" },
      { value: 7, date: "2022-04-03" },
      { value: 4, date: "2022-04-10" },
      { value: 8, date: "2022-04-17" },
      { value: 6, date: "2022-04-24" },
      { value: 8, date: "2022-05-01" },
      { value: 11, date: "2022-05-08" },
      { value: 33, date: "2022-05-15" },
      { value: 85, date: "2022-05-22" },
      { value: 100, date: "2022-05-29" },
      { value: 92, date: "2022-06-05" },
      { value: 80, date: "2022-06-12" },
      { value: 64, date: "2022-06-19" },
      { value: 49, date: "2022-06-26" },
      { value: 41, date: "2022-07-03" },
      { value: 28, date: "2022-07-10" },
      { value: 22, date: "2022-07-17" },
      { value: 22, date: "2022-07-24" },
      { value: 24, date: "2022-07-31" },
      { value: 23, date: "2022-08-07" },
      { value: 27, date: "2022-08-14" },
      { value: 23, date: "2022-08-21" },
      { value: 19, date: "2022-08-28" },
      { value: 14, date: "2022-09-04" },
      { value: 14, date: "2022-09-11" },
      { value: 11, date: "2022-09-18" },
      { value: 13, date: "2022-09-25" },
      { value: 11, date: "2022-10-02" },
      { value: 11, date: "2022-10-09" },
      { value: 10, date: "2022-10-16" },
      { value: 10, date: "2022-10-23" },
      { value: 8, date: "2022-10-30" },
      { value: 7, date: "2022-11-06" },
      { value: 5, date: "2022-11-13" },
      { value: 5, date: "2022-11-20" },
      { value: 5, date: "2022-11-27" },
      { value: 6, date: "2022-12-04" },
    ],
  },
  {
    word: "Taboulé",
    values: [
      { value: 0, date: "2022-01-02" },
      { value: 0, date: "2022-01-09" },
      { value: 0, date: "2022-01-16" },
      { value: 6, date: "2022-01-23" },
      { value: 0, date: "2022-01-30" },
      { value: 0, date: "2022-02-06" },
      { value: 8, date: "2022-02-13" },
      { value: 0, date: "2022-02-20" },
      { value: 0, date: "2022-02-27" },
      { value: 0, date: "2022-03-06" },
      { value: 12, date: "2022-03-13" },
      { value: 10, date: "2022-03-20" },
      { value: 5, date: "2022-03-27" },
      { value: 5, date: "2022-04-03" },
      { value: 14, date: "2022-04-10" },
      { value: 19, date: "2022-04-17" },
      { value: 28, date: "2022-04-24" },
      { value: 33, date: "2022-05-01" },
      { value: 34, date: "2022-05-08" },
      { value: 41, date: "2022-05-15" },
      { value: 48, date: "2022-05-22" },
      { value: 42, date: "2022-05-29" },
      { value: 43, date: "2022-06-05" },
      { value: 100, date: "2022-06-12" },
      { value: 56, date: "2022-06-19" },
      { value: 53, date: "2022-06-26" },
      { value: 72, date: "2022-07-03" },
      { value: 97, date: "2022-07-10" },
      { value: 92, date: "2022-07-17" },
      { value: 54, date: "2022-07-24" },
      { value: 59, date: "2022-07-31" },
      { value: 70, date: "2022-08-07" },
      { value: 37, date: "2022-08-14" },
      { value: 25, date: "2022-08-21" },
      { value: 9, date: "2022-08-28" },
      { value: 8, date: "2022-09-04" },
      { value: 17, date: "2022-09-11" },
      { value: 0, date: "2022-09-18" },
      { value: 7, date: "2022-09-25" },
      { value: 5, date: "2022-10-02" },
      { value: 0, date: "2022-10-09" },
      { value: 10, date: "2022-10-16" },
      { value: 8, date: "2022-10-23" },
      { value: 0, date: "2022-10-30" },
      { value: 4, date: "2022-11-06" },
      { value: 0, date: "2022-11-13" },
      { value: 7, date: "2022-11-20" },
      { value: 0, date: "2022-11-27" },
      { value: 0, date: "2022-12-04" },
    ],
  },
  {
    word: "Salade César",
    values: [
      { value: 9, date: "2022-01-02" },
      { value: 16, date: "2022-01-09" },
      { value: 11, date: "2022-01-16" },
      { value: 7, date: "2022-01-23" },
      { value: 17, date: "2022-01-30" },
      { value: 19, date: "2022-02-06" },
      { value: 17, date: "2022-02-13" },
      { value: 14, date: "2022-02-20" },
      { value: 11, date: "2022-02-27" },
      { value: 18, date: "2022-03-06" },
      { value: 28, date: "2022-03-13" },
      { value: 17, date: "2022-03-20" },
      { value: 21, date: "2022-03-27" },
      { value: 24, date: "2022-04-03" },
      { value: 24, date: "2022-04-10" },
      { value: 37, date: "2022-04-17" },
      { value: 29, date: "2022-04-24" },
      { value: 37, date: "2022-05-01" },
      { value: 46, date: "2022-05-08" },
      { value: 76, date: "2022-05-15" },
      { value: 58, date: "2022-05-22" },
      { value: 46, date: "2022-05-29" },
      { value: 51, date: "2022-06-05" },
      { value: 76, date: "2022-06-12" },
      { value: 58, date: "2022-06-19" },
      { value: 40, date: "2022-06-26" },
      { value: 52, date: "2022-07-03" },
      { value: 73, date: "2022-07-10" },
      { value: 81, date: "2022-07-17" },
      { value: 44, date: "2022-07-24" },
      { value: 61, date: "2022-07-31" },
      { value: 100, date: "2022-08-07" },
      { value: 51, date: "2022-08-14" },
      { value: 35, date: "2022-08-21" },
      { value: 39, date: "2022-08-28" },
      { value: 17, date: "2022-09-04" },
      { value: 32, date: "2022-09-11" },
      { value: 18, date: "2022-09-18" },
      { value: 25, date: "2022-09-25" },
      { value: 23, date: "2022-10-02" },
      { value: 4, date: "2022-10-09" },
      { value: 10, date: "2022-10-16" },
      { value: 5, date: "2022-10-23" },
      { value: 19, date: "2022-10-30" },
      { value: 17, date: "2022-11-06" },
      { value: 14, date: "2022-11-13" },
      { value: 11, date: "2022-11-20" },
      { value: 5, date: "2022-11-27" },
      { value: 13, date: "2022-12-04" },
    ],
  },
  {
    word: "Gombo",
    values: [
      { value: 0, date: "2022-01-02" },
      { value: 0, date: "2022-01-09" },
      { value: 0, date: "2022-01-16" },
      { value: 0, date: "2022-01-23" },
      { value: 0, date: "2022-01-30" },
      { value: 0, date: "2022-02-06" },
      { value: 0, date: "2022-02-13" },
      { value: 0, date: "2022-02-20" },
      { value: 0, date: "2022-02-27" },
      { value: 0, date: "2022-03-06" },
      { value: 7, date: "2022-03-13" },
      { value: 0, date: "2022-03-20" },
      { value: 0, date: "2022-03-27" },
      { value: 0, date: "2022-04-03" },
      { value: 19, date: "2022-04-10" },
      { value: 0, date: "2022-04-17" },
      { value: 0, date: "2022-04-24" },
      { value: 0, date: "2022-05-01" },
      { value: 0, date: "2022-05-08" },
      { value: 9, date: "2022-05-15" },
      { value: 0, date: "2022-05-22" },
      { value: 0, date: "2022-05-29" },
      { value: 0, date: "2022-06-05" },
      { value: 0, date: "2022-06-12" },
      { value: 21, date: "2022-06-19" },
      { value: 32, date: "2022-06-26" },
      { value: 59, date: "2022-07-03" },
      { value: 41, date: "2022-07-10" },
      { value: 0, date: "2022-07-17" },
      { value: 0, date: "2022-07-24" },
      { value: 0, date: "2022-07-31" },
      { value: 0, date: "2022-08-07" },
      { value: 0, date: "2022-08-14" },
      { value: 0, date: "2022-08-21" },
      { value: 0, date: "2022-08-28" },
      { value: 36, date: "2022-09-04" },
      { value: 56, date: "2022-09-11" },
      { value: 100, date: "2022-09-18" },
      { value: 24, date: "2022-09-25" },
      { value: 0, date: "2022-10-02" },
      { value: 22, date: "2022-10-09" },
      { value: 0, date: "2022-10-16" },
      { value: 0, date: "2022-10-23" },
      { value: 8, date: "2022-10-30" },
      { value: 0, date: "2022-11-06" },
      { value: 0, date: "2022-11-13" },
      { value: 0, date: "2022-11-20" },
      { value: 7, date: "2022-11-27" },
      { value: 0, date: "2022-12-04" },
    ],
  },
  {
    word: "Moutarde",
    values: [
      { value: 57, date: "2022-01-02" },
      { value: 53, date: "2022-01-09" },
      { value: 69, date: "2022-01-16" },
      { value: 59, date: "2022-01-23" },
      { value: 60, date: "2022-01-30" },
      { value: 74, date: "2022-02-06" },
      { value: 69, date: "2022-02-13" },
      { value: 67, date: "2022-02-20" },
      { value: 59, date: "2022-02-27" },
      { value: 51, date: "2022-03-06" },
      { value: 61, date: "2022-03-13" },
      { value: 67, date: "2022-03-20" },
      { value: 62, date: "2022-03-27" },
      { value: 63, date: "2022-04-03" },
      { value: 59, date: "2022-04-10" },
      { value: 51, date: "2022-04-17" },
      { value: 55, date: "2022-04-24" },
      { value: 61, date: "2022-05-01" },
      { value: 59, date: "2022-05-08" },
      { value: 57, date: "2022-05-15" },
      { value: 61, date: "2022-05-22" },
      { value: 55, date: "2022-05-29" },
      { value: 91, date: "2022-06-05" },
      { value: 82, date: "2022-06-12" },
      { value: 78, date: "2022-06-19" },
      { value: 83, date: "2022-06-26" },
      { value: 100, date: "2022-07-03" },
      { value: 84, date: "2022-07-10" },
      { value: 95, date: "2022-07-17" },
      { value: 90, date: "2022-07-24" },
      { value: 71, date: "2022-07-31" },
      { value: 71, date: "2022-08-07" },
      { value: 88, date: "2022-08-14" },
      { value: 70, date: "2022-08-21" },
      { value: 70, date: "2022-08-28" },
      { value: 71, date: "2022-09-04" },
      { value: 61, date: "2022-09-11" },
      { value: 60, date: "2022-09-18" },
      { value: 62, date: "2022-09-25" },
      { value: 54, date: "2022-10-02" },
      { value: 66, date: "2022-10-09" },
      { value: 57, date: "2022-10-16" },
      { value: 70, date: "2022-10-23" },
      { value: 69, date: "2022-10-30" },
      { value: 71, date: "2022-11-06" },
      { value: 63, date: "2022-11-13" },
      { value: 57, date: "2022-11-20" },
      { value: 63, date: "2022-11-27" },
      { value: 27, date: "2022-12-04" },
    ],
  },
  {
    word: "Sex on the beach",
    values: [
      { value: 4, date: "2022-01-02" },
      { value: 9, date: "2022-01-09" },
      { value: 9, date: "2022-01-16" },
      { value: 11, date: "2022-01-23" },
      { value: 13, date: "2022-01-30" },
      { value: 29, date: "2022-02-06" },
      { value: 23, date: "2022-02-13" },
      { value: 32, date: "2022-02-20" },
      { value: 30, date: "2022-02-27" },
      { value: 24, date: "2022-03-06" },
      { value: 24, date: "2022-03-13" },
      { value: 29, date: "2022-03-20" },
      { value: 15, date: "2022-03-27" },
      { value: 21, date: "2022-04-03" },
      { value: 16, date: "2022-04-10" },
      { value: 30, date: "2022-04-17" },
      { value: 32, date: "2022-04-24" },
      { value: 33, date: "2022-05-01" },
      { value: 34, date: "2022-05-08" },
      { value: 40, date: "2022-05-15" },
      { value: 39, date: "2022-05-22" },
      { value: 32, date: "2022-05-29" },
      { value: 25, date: "2022-06-05" },
      { value: 43, date: "2022-06-12" },
      { value: 42, date: "2022-06-19" },
      { value: 44, date: "2022-06-26" },
      { value: 47, date: "2022-07-03" },
      { value: 47, date: "2022-07-10" },
      { value: 45, date: "2022-07-17" },
      { value: 48, date: "2022-07-24" },
      { value: 69, date: "2022-07-31" },
      { value: 100, date: "2022-08-07" },
      { value: 69, date: "2022-08-14" },
      { value: 73, date: "2022-08-21" },
      { value: 55, date: "2022-08-28" },
      { value: 40, date: "2022-09-04" },
      { value: 44, date: "2022-09-11" },
      { value: 23, date: "2022-09-18" },
      { value: 21, date: "2022-09-25" },
      { value: 27, date: "2022-10-02" },
      { value: 23, date: "2022-10-09" },
      { value: 22, date: "2022-10-16" },
      { value: 28, date: "2022-10-23" },
      { value: 32, date: "2022-10-30" },
      { value: 25, date: "2022-11-06" },
      { value: 34, date: "2022-11-13" },
      { value: 25, date: "2022-11-20" },
      { value: 15, date: "2022-11-27" },
      { value: 33, date: "2022-12-04" },
    ],
  },
  {
    word: "Wrap froid",
    values: [
      { value: 0, date: "2022-01-02" },
      { value: 0, date: "2022-01-09" },
      { value: 19, date: "2022-01-16" },
      { value: 0, date: "2022-01-23" },
      { value: 0, date: "2022-01-30" },
      { value: 11, date: "2022-02-06" },
      { value: 0, date: "2022-02-13" },
      { value: 14, date: "2022-02-20" },
      { value: 14, date: "2022-02-27" },
      { value: 0, date: "2022-03-06" },
      { value: 0, date: "2022-03-13" },
      { value: 0, date: "2022-03-20" },
      { value: 8, date: "2022-03-27" },
      { value: 8, date: "2022-04-03" },
      { value: 11, date: "2022-04-10" },
      { value: 10, date: "2022-04-17" },
      { value: 24, date: "2022-04-24" },
      { value: 15, date: "2022-05-01" },
      { value: 28, date: "2022-05-08" },
      { value: 23, date: "2022-05-15" },
      { value: 22, date: "2022-05-22" },
      { value: 0, date: "2022-05-29" },
      { value: 27, date: "2022-06-05" },
      { value: 68, date: "2022-06-12" },
      { value: 30, date: "2022-06-19" },
      { value: 41, date: "2022-06-26" },
      { value: 44, date: "2022-07-03" },
      { value: 100, date: "2022-07-10" },
      { value: 81, date: "2022-07-17" },
      { value: 27, date: "2022-07-24" },
      { value: 36, date: "2022-07-31" },
      { value: 39, date: "2022-08-07" },
      { value: 26, date: "2022-08-14" },
      { value: 21, date: "2022-08-21" },
      { value: 15, date: "2022-08-28" },
      { value: 28, date: "2022-09-04" },
      { value: 22, date: "2022-09-11" },
      { value: 6, date: "2022-09-18" },
      { value: 38, date: "2022-09-25" },
      { value: 33, date: "2022-10-02" },
      { value: 24, date: "2022-10-09" },
      { value: 6, date: "2022-10-16" },
      { value: 14, date: "2022-10-23" },
      { value: 23, date: "2022-10-30" },
      { value: 6, date: "2022-11-06" },
      { value: 14, date: "2022-11-13" },
      { value: 0, date: "2022-11-20" },
      { value: 0, date: "2022-11-27" },
      { value: 0, date: "2022-12-04" },
    ],
  },
  {
    word: "Pâte à crêpes",
    values: [
      { value: 2, date: "2022-01-02" },
      { value: 6, date: "2022-01-09" },
      { value: 15, date: "2022-01-16" },
      { value: 24, date: "2022-01-23" },
      { value: 100, date: "2022-01-30" },
      { value: 26, date: "2022-02-06" },
      { value: 16, date: "2022-02-13" },
      { value: 5, date: "2022-02-20" },
      { value: 9, date: "2022-02-27" },
      { value: 5, date: "2022-03-06" },
      { value: 7, date: "2022-03-13" },
      { value: 4, date: "2022-03-20" },
      { value: 0, date: "2022-03-27" },
      { value: 5, date: "2022-04-03" },
      { value: 10, date: "2022-04-10" },
      { value: 6, date: "2022-04-17" },
      { value: 6, date: "2022-04-24" },
      { value: 5, date: "2022-05-01" },
      { value: 5, date: "2022-05-08" },
      { value: 6, date: "2022-05-15" },
      { value: 9, date: "2022-05-22" },
      { value: 4, date: "2022-05-29" },
      { value: 17, date: "2022-06-05" },
      { value: 4, date: "2022-06-12" },
      { value: 11, date: "2022-06-19" },
      { value: 0, date: "2022-06-26" },
      { value: 0, date: "2022-07-03" },
      { value: 14, date: "2022-07-10" },
      { value: 5, date: "2022-07-17" },
      { value: 10, date: "2022-07-24" },
      { value: 4, date: "2022-07-31" },
      { value: 10, date: "2022-08-07" },
      { value: 8, date: "2022-08-14" },
      { value: 14, date: "2022-08-21" },
      { value: 10, date: "2022-08-28" },
      { value: 8, date: "2022-09-04" },
      { value: 9, date: "2022-09-11" },
      { value: 12, date: "2022-09-18" },
      { value: 14, date: "2022-09-25" },
      { value: 9, date: "2022-10-02" },
      { value: 11, date: "2022-10-09" },
      { value: 9, date: "2022-10-16" },
      { value: 12, date: "2022-10-23" },
      { value: 18, date: "2022-10-30" },
      { value: 13, date: "2022-11-06" },
      { value: 10, date: "2022-11-13" },
      { value: 13, date: "2022-11-20" },
      { value: 12, date: "2022-11-27" },
      { value: 10, date: "2022-12-04" },
    ],
  },
  {
    word: "Coulis tomate",
    values: [
      { value: 0, date: "2022-01-02" },
      { value: 26, date: "2022-01-09" },
      { value: 0, date: "2022-01-16" },
      { value: 7, date: "2022-01-23" },
      { value: 0, date: "2022-01-30" },
      { value: 0, date: "2022-02-06" },
      { value: 0, date: "2022-02-13" },
      { value: 13, date: "2022-02-20" },
      { value: 4, date: "2022-02-27" },
      { value: 10, date: "2022-03-06" },
      { value: 14, date: "2022-03-13" },
      { value: 0, date: "2022-03-20" },
      { value: 5, date: "2022-03-27" },
      { value: 13, date: "2022-04-03" },
      { value: 0, date: "2022-04-10" },
      { value: 8, date: "2022-04-17" },
      { value: 6, date: "2022-04-24" },
      { value: 6, date: "2022-05-01" },
      { value: 0, date: "2022-05-08" },
      { value: 0, date: "2022-05-15" },
      { value: 14, date: "2022-05-22" },
      { value: 0, date: "2022-05-29" },
      { value: 11, date: "2022-06-05" },
      { value: 0, date: "2022-06-12" },
      { value: 0, date: "2022-06-19" },
      { value: 9, date: "2022-06-26" },
      { value: 9, date: "2022-07-03" },
      { value: 12, date: "2022-07-10" },
      { value: 23, date: "2022-07-17" },
      { value: 50, date: "2022-07-24" },
      { value: 48, date: "2022-07-31" },
      { value: 45, date: "2022-08-07" },
      { value: 100, date: "2022-08-14" },
      { value: 72, date: "2022-08-21" },
      { value: 33, date: "2022-08-28" },
      { value: 48, date: "2022-09-04" },
      { value: 45, date: "2022-09-11" },
      { value: 28, date: "2022-09-18" },
      { value: 11, date: "2022-09-25" },
      { value: 18, date: "2022-10-02" },
      { value: 16, date: "2022-10-09" },
      { value: 0, date: "2022-10-16" },
      { value: 13, date: "2022-10-23" },
      { value: 0, date: "2022-10-30" },
      { value: 15, date: "2022-11-06" },
      { value: 4, date: "2022-11-13" },
      { value: 11, date: "2022-11-20" },
      { value: 0, date: "2022-11-27" },
      { value: 33, date: "2022-12-04" },
    ],
  },
  {
    word: "Sauce César",
    values: [
      { value: 11, date: "2022-01-02" },
      { value: 14, date: "2022-01-09" },
      { value: 57, date: "2022-01-16" },
      { value: 68, date: "2022-01-23" },
      { value: 35, date: "2022-01-30" },
      { value: 26, date: "2022-02-06" },
      { value: 24, date: "2022-02-13" },
      { value: 27, date: "2022-02-20" },
      { value: 29, date: "2022-02-27" },
      { value: 47, date: "2022-03-06" },
      { value: 35, date: "2022-03-13" },
      { value: 41, date: "2022-03-20" },
      { value: 49, date: "2022-03-27" },
      { value: 54, date: "2022-04-03" },
      { value: 73, date: "2022-04-10" },
      { value: 42, date: "2022-04-17" },
      { value: 60, date: "2022-04-24" },
      { value: 36, date: "2022-05-01" },
      { value: 49, date: "2022-05-08" },
      { value: 41, date: "2022-05-15" },
      { value: 63, date: "2022-05-22" },
      { value: 46, date: "2022-05-29" },
      { value: 97, date: "2022-06-05" },
      { value: 87, date: "2022-06-12" },
      { value: 88, date: "2022-06-19" },
      { value: 56, date: "2022-06-26" },
      { value: 51, date: "2022-07-03" },
      { value: 70, date: "2022-07-10" },
      { value: 83, date: "2022-07-17" },
      { value: 20, date: "2022-07-24" },
      { value: 97, date: "2022-07-31" },
      { value: 100, date: "2022-08-07" },
      { value: 96, date: "2022-08-14" },
      { value: 51, date: "2022-08-21" },
      { value: 40, date: "2022-08-28" },
      { value: 36, date: "2022-09-04" },
      { value: 34, date: "2022-09-11" },
      { value: 39, date: "2022-09-18" },
      { value: 32, date: "2022-09-25" },
      { value: 49, date: "2022-10-02" },
      { value: 26, date: "2022-10-09" },
      { value: 11, date: "2022-10-16" },
      { value: 28, date: "2022-10-23" },
      { value: 27, date: "2022-10-30" },
      { value: 33, date: "2022-11-06" },
      { value: 22, date: "2022-11-13" },
      { value: 16, date: "2022-11-20" },
      { value: 20, date: "2022-11-27" },
      { value: 68, date: "2022-12-04" },
    ],
  },
];

const root = d3.select("body").append("div").attr("id", "root");

root.append("h1").text("Most searched recipes");
root
  .append("p")
  .html(
    "In the review of <a href='https://trends.google.com/trends/yis/2022/FR/'>2022 search results</a>, for France, Google Trends highlights the most searched recipes."
  );

root
  .append("p")
  .text(
    "The ten most frequent words show interesting, often seasonal, patterns."
  );

const table = root.append("table");

table.append("thead").html("<tr><th>Word</th><th>Interest</th></tr>");

const trs = table
  .append("tbody")
  .selectAll("tr")
  .data(data)
  .enter()
  .append("tr");

trs.append("td").text((d) => d.word);
trs.append("td").each(function (d) {
  const { word, values } = d;

  const timeParse = d3.timeParse("%Y-%m-%d");
  const timeFormat = d3.timeFormat("%B %-d");

  const { date } =
    values[values.findIndex((d) => d.value === d3.max(values, (d) => d.value))];
  const prettyDate = timeFormat(timeParse(date));

  const description = `The word "${word}" was searched the most on ${prettyDate}`;

  const sparklineComponent = sparkline()
    .data(values)
    .dateAccessor((d) => timeParse(d.date))
    .valueAccessor((d) => d.value)
    .domain([0, 100])
    .width(200)
    .height(20)
    .title(word)
    .description(description);

  d3.select(this).call(sparklineComponent);
});
