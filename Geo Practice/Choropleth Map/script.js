const {
  select,
  json,
  geoPath,
  geoLarrivee,
  interpolateBlues,
  scaleQuantize,
  Delaunay,
  timeFormat,
  timeParse,
} = d3;
const { feature } = topojson;

// https://ourworldindata.org/
const data = {
  Afghanistan: {
    date: "2021-11-14",
    value: 8,
  },
  Albania: {
    date: "2021-11-16",
    value: 32.39,
  },
  Algeria: {
    date: "2021-11-13",
    value: 11.05,
  },
  Angola: {
    date: "2021-11-11",
    value: 5.91,
  },
  Argentina: {
    date: "2021-11-17",
    value: 61.08,
  },
  Armenia: {
    date: "2021-10-31",
    value: 8.51,
  },
  Australia: {
    date: "2021-11-17",
    value: 70.25,
  },
  Austria: {
    date: "2021-11-17",
    value: 63.88,
  },
  Azerbaijan: {
    date: "2021-11-17",
    value: 44,
  },
  Bahamas: {
    date: "2021-11-05",
    value: 32.31,
  },
  Bangladesh: {
    date: "2021-11-17",
    value: 20.29,
  },
  Belarus: {
    date: "2021-11-07",
    value: 24.34,
  },
  Belgium: {
    date: "2021-11-16",
    value: 74.22,
  },
  Belize: {
    date: "2021-11-12",
    value: 46.35,
  },
  Benin: {
    date: "2021-11-08",
    value: 2.13,
  },
  Bhutan: {
    date: "2021-10-31",
    value: 71.78,
  },
  Bolivia: {
    date: "2021-11-11",
    value: 33.37,
  },
  "Bosnia and Herz.": {
    date: "2021-11-04",
    value: 22.08,
  },
  Botswana: {
    date: "2021-11-10",
    value: 14.9,
  },
  Brazil: {
    date: "2021-11-17",
    value: 60.04,
  },
  Brunei: {
    date: "2021-11-17",
    value: 69.98,
  },
  Bulgaria: {
    date: "2021-08-17",
    value: 15.76,
  },
  "Burkina Faso": {
    date: "2021-11-04",
    value: 1.38,
  },
  Burundi: {
    date: "2021-11-12",
    value: 0,
  },
  Cambodia: {
    date: "2021-11-16",
    value: 78.04,
  },
  Cameroon: {
    date: "2021-11-12",
    value: 0.65,
  },
  Canada: {
    date: "2021-11-17",
    value: 75.56,
  },
  "Central African Rep.": {
    date: "2021-11-07",
    value: 6.54,
  },
  Chad: {
    date: "2021-11-10",
    value: 0.39,
  },
  Chile: {
    date: "2021-11-14",
    value: 81.89,
  },
  China: {
    date: "2021-11-12",
    value: 74.35,
  },
  Colombia: {
    date: "2021-11-15",
    value: 44.84,
  },
  Congo: {
    date: "2021-11-10",
    value: 2.22,
  },
  "Costa Rica": {
    date: "2021-11-15",
    value: 58.97,
  },
  "Côte d'Ivoire": {
    date: "2021-11-14",
    value: 4.14,
  },
  Croatia: {
    date: "2021-11-16",
    value: 45.89,
  },
  Cuba: {
    date: "2021-11-15",
    value: 77.83,
  },
  Cyprus: {
    date: "2021-11-16",
    value: 64.29,
  },
  Czechia: {
    date: "2021-11-17",
    value: 57.94,
  },
  "Dem. Rep. Congo": {
    date: "2021-11-11",
    value: 0.05,
  },
  Denmark: {
    date: "2021-11-16",
    value: 76.25,
  },
  Djibouti: {
    date: "2021-11-03",
    value: 2.6,
  },
  Ecuador: {
    date: "2021-11-12",
    value: 58.51,
  },
  Egypt: {
    date: "2021-11-10",
    value: 12.73,
  },
  "El Salvador": {
    date: "2021-11-16",
    value: 61.32,
  },
  Estonia: {
    date: "2021-11-17",
    value: 58.68,
  },
  Ethiopia: {
    date: "2021-11-16",
    value: 1.18,
  },
  Fiji: {
    date: "2021-11-15",
    value: 63.83,
  },
  Finland: {
    date: "2021-11-17",
    value: 71.59,
  },
  France: {
    date: "2021-11-16",
    value: 68.81,
  },
  Gabon: {
    date: "2021-11-15",
    value: 4.75,
  },
  Gambia: {
    date: "2021-11-14",
    value: 8.95,
  },
  Georgia: {
    date: "2021-11-17",
    value: 24.47,
  },
  Germany: {
    date: "2021-11-17",
    value: 67.17,
  },
  Ghana: {
    date: "2021-11-10",
    value: 2.63,
  },
  Greece: {
    date: "2021-11-17",
    value: 62.57,
  },
  Greenland: {
    date: "2021-11-04",
    value: 65.52,
  },
  Guatemala: {
    date: "2021-11-16",
    value: 20.17,
  },
  Guinea: {
    date: "2021-11-10",
    value: 5.75,
  },
  "Guinea-Bissau": {
    date: "2021-11-15",
    value: 0.89,
  },
  Guyana: {
    date: "2021-11-16",
    value: 33.33,
  },
  Haiti: {
    date: "2021-11-12",
    value: 0.42,
  },
  Honduras: {
    date: "2021-11-12",
    value: 36,
  },
  Hungary: {
    date: "2021-11-17",
    value: 60.05,
  },
  Iceland: {
    date: "2021-11-16",
    value: 81.48,
  },
  India: {
    date: "2021-11-17",
    value: 27.47,
  },
  Indonesia: {
    date: "2021-11-17",
    value: 31.22,
  },
  Iran: {
    date: "2021-11-13",
    value: 49.61,
  },
  Iraq: {
    date: "2021-11-15",
    value: 9.77,
  },
  Ireland: {
    date: "2021-11-16",
    value: 75.65,
  },
  Israel: {
    date: "2021-11-17",
    value: 61.99,
  },
  Italy: {
    date: "2021-11-17",
    value: 72.76,
  },
  Jamaica: {
    date: "2021-11-17",
    value: 16.28,
  },
  Japan: {
    date: "2021-11-17",
    value: 76.09,
  },
  Jordan: {
    date: "2021-11-16",
    value: 35.44,
  },
  Kazakhstan: {
    date: "2021-11-17",
    value: 41.4,
  },
  Kenya: {
    date: "2021-11-15",
    value: 3.96,
  },
  Kosovo: {
    date: "2021-11-16",
    value: 42.15,
  },
  Kuwait: {
    date: "2021-07-03",
    value: 21.33,
  },
  Kyrgyzstan: {
    date: "2021-11-17",
    value: 12.63,
  },
  Laos: {
    date: "2021-10-28",
    value: 37.63,
  },
  Latvia: {
    date: "2021-11-17",
    value: 60.6,
  },
  Lebanon: {
    date: "2021-11-17",
    value: 24.03,
  },
  Lesotho: {
    date: "2021-10-10",
    value: 15.72,
  },
  Liberia: {
    date: "2021-11-02",
    value: 7.17,
  },
  Libya: {
    date: "2021-11-14",
    value: 7.82,
  },
  Lithuania: {
    date: "2021-11-17",
    value: 65.31,
  },
  Madagascar: {
    date: "2021-10-20",
    value: 0.65,
  },
  Malawi: {
    date: "2021-11-15",
    value: 2.96,
  },
  Malaysia: {
    date: "2021-11-17",
    value: 75.94,
  },
  Mali: {
    date: "2021-11-02",
    value: 1.3,
  },
  Mauritania: {
    date: "2021-11-15",
    value: 13.89,
  },
  Mexico: {
    date: "2021-11-17",
    value: 48.74,
  },
  Moldova: {
    date: "2021-08-06",
    value: 13.14,
  },
  Mongolia: {
    date: "2021-11-16",
    value: 64.45,
  },
  Montenegro: {
    date: "2021-11-16",
    value: 39.75,
  },
  Morocco: {
    date: "2021-11-14",
    value: 60.23,
  },
  Mozambique: {
    date: "2021-11-10",
    value: 8.09,
  },
  Myanmar: {
    date: "2021-11-06",
    value: 15.05,
  },
  Namibia: {
    date: "2021-11-10",
    value: 10.61,
  },
  Nepal: {
    date: "2021-11-07",
    value: 25.06,
  },
  Netherlands: {
    date: "2021-11-07",
    value: 73.2,
  },
  "New Caledonia": {
    date: "2021-11-15",
    value: 57.11,
  },
  "New Zealand": {
    date: "2021-11-17",
    value: 67.48,
  },
  Nicaragua: {
    date: "2021-11-05",
    value: 8.4,
  },
  Niger: {
    date: "2021-11-14",
    value: 1.82,
  },
  Nigeria: {
    date: "2021-11-11",
    value: 1.51,
  },
  Norway: {
    date: "2021-11-16",
    value: 69.16,
  },
  Oman: {
    date: "2021-11-09",
    value: 52.32,
  },
  Pakistan: {
    date: "2021-11-17",
    value: 21.65,
  },
  Palestine: {
    date: "2021-11-10",
    value: 25.3,
  },
  Panama: {
    date: "2021-11-17",
    value: 54.82,
  },
  "Papua New Guinea": {
    date: "2021-10-25",
    value: 1.17,
  },
  Paraguay: {
    date: "2021-11-12",
    value: 34.74,
  },
  Peru: {
    date: "2021-11-13",
    value: 49.41,
  },
  Philippines: {
    date: "2021-10-21",
    value: 22.6,
  },
  Poland: {
    date: "2021-11-16",
    value: 53.38,
  },
  Portugal: {
    date: "2021-11-15",
    value: 87.78,
  },
  Qatar: {
    date: "2021-11-17",
    value: 75.7,
  },
  Romania: {
    date: "2021-09-27",
    value: 27.91,
  },
  Russia: {
    date: "2021-11-17",
    value: 35.8,
  },
  Rwanda: {
    date: "2021-11-11",
    value: 18.98,
  },
  "Saudi Arabia": {
    date: "2021-11-17",
    value: 62.61,
  },
  Senegal: {
    date: "2021-10-20",
    value: 5.11,
  },
  Serbia: {
    date: "2021-11-14",
    value: 44.42,
  },
  "Sierra Leone": {
    date: "2021-11-10",
    value: 3.72,
  },
  Slovakia: {
    date: "2021-11-16",
    value: 42.62,
  },
  Slovenia: {
    date: "2021-11-17",
    value: 54.59,
  },
  Somalia: {
    date: "2021-11-13",
    value: 3.45,
  },
  "South Africa": {
    date: "2021-11-16",
    value: 22.62,
  },
  "South Korea": {
    date: "2021-11-17",
    value: 78.57,
  },
  "S. Sudan": {
    date: "2021-11-09",
    value: 0.58,
  },
  Spain: {
    date: "2021-11-16",
    value: 80.2,
  },
  "Sri Lanka": {
    date: "2021-11-17",
    value: 63.65,
  },
  Sudan: {
    date: "2021-09-19",
    value: 1.3,
  },
  Suriname: {
    date: "2021-11-17",
    value: 35.96,
  },
  Sweden: {
    date: "2021-11-17",
    value: 68.72,
  },
  Switzerland: {
    date: "2021-11-16",
    value: 64.69,
  },
  Syria: {
    date: "2021-11-15",
    value: 3.95,
  },
  Taiwan: {
    date: "2021-11-17",
    value: 43.78,
  },
  Tajikistan: {
    date: "2021-11-07",
    value: 21.92,
  },
  Tanzania: {
    date: "2021-10-13",
    value: 1.44,
  },
  Thailand: {
    date: "2021-11-17",
    value: 53.65,
  },
  Togo: {
    date: "2021-11-12",
    value: 5.69,
  },
  "Trinidad and Tobago": {
    date: "2021-11-17",
    value: 44.95,
  },
  Tunisia: {
    date: "2021-11-16",
    value: 40.3,
  },
  Turkey: {
    date: "2021-11-17",
    value: 58.61,
  },
  Turkmenistan: {
    date: "2021-08-29",
    value: 52.41,
  },
  Uganda: {
    date: "2021-11-15",
    value: 1.94,
  },
  Ukraine: {
    date: "2021-11-17",
    value: 21.35,
  },
  "United Arab Emirates": {
    date: "2021-11-15",
    value: 88.4,
  },
  "United Kingdom": {
    date: "2021-11-16",
    value: 67.54,
  },
  "United States of America": {
    date: "2021-11-17",
    value: 57.72,
  },
  Uruguay: {
    date: "2021-11-17",
    value: 75.65,
  },
  Uzbekistan: {
    date: "2021-10-20",
    value: 17.33,
  },
  Vanuatu: {
    date: "2021-11-15",
    value: 11.73,
  },
  Venezuela: {
    date: "2021-11-05",
    value: 32.3,
  },
  Vietnam: {
    date: "2021-11-16",
    value: 37.49,
  },
  Yemen: {
    date: "2021-11-14",
    value: 1.13,
  },
  Zambia: {
    date: "2021-09-07",
    value: 1.54,
  },
  Zimbabwe: {
    date: "2021-11-16",
    value: 17.98,
  },
};

const parseDate = timeParse("%Y-%m-%d");
const formatDate = timeFormat("%b %d, %Y");

// projection 1 wide to roughly 0.82 tall
const dimensions = {
  width: 800,
  height: 655,
};

const sphere = { type: "Sphere" };

const projection = geoLarrivee()
  .fitSize([dimensions.width, dimensions.height], sphere)
  .translate([dimensions.width / 2, dimensions.height / 1.45])
  .scale(140)
  .rotate([-10, 0]);

const pathGenerator = geoPath(projection);

// one additional color for missing data
// not used in the scale
const colorStops = 5;
const colors = Array(colorStops + 1)
  .fill()
  .map((_, i, { length }) => interpolateBlues((i * 1) / length));

const colorScale = scaleQuantize().domain([0, 100]).range(colors.slice(1));

const svg = select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

svg
  .append("text")
  .text("Loading data")
  .attr("fill", "currentColor")
  .attr("font-size", "24")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .attr("x", dimensions.width / 2)
  .attr("y", dimensions.height / 2)
  .attr("font-weight", "bold");

const legendRect = {
  width: 60,
  height: 10,
  margin: 5,
};

svg
  .append("text")
  .attr("y", "32")
  .attr("fill", "currentColor")
  .attr("font-weight", "bold")
  .attr("font-size", "32")
  .text("Global vaccination map");

const timeout = setTimeout(() => {
  drawWorld();
  clearTimeout(timeout);
}, 2000);

async function drawWorld() {
  const world = await json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );

  const countries = feature(world, world.objects.countries);

  svg.select("text").transition().attr("opacity", "0").remove();

  const dataGroup = svg.append("g");

  const legendGroup = dataGroup
    .append("g")
    .attr("transform", "translate(0 70)");

  const worldGroup = dataGroup.append("g");

  const highlightGroup = dataGroup.append("g");

  legendGroup
    .append("text")
    .attr("fill", "currentColor")
    .attr("font-size", "16")
    .text("Population fully vaccinated");

  const legendGroups = legendGroup
    .append("g")
    .attr("transform", "translate(0 6)")
    .selectAll("g")
    .data(colorScale.range())
    .join("g")
    .attr("transform", (_, i) => `translate(${i * legendRect.width} 0)`);

  legendGroups
    .append("rect")
    .attr("width", legendRect.width)
    .attr("height", legendRect.height)
    .attr("fill", (d) => d);

  legendGroups
    .filter((_, i) => i > 0)
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "2")
    .attr("d", `M 0 0 v ${legendRect.height + legendRect.margin}`);

  legendGroups
    .filter((_, i) => i > 0)
    .append("text")
    .attr("y", legendRect.height + legendRect.margin + 14)
    .attr("font-size", "13")
    .attr("fill", "currentColor")
    .attr("text-anchor", "middle")
    .text((d) => colorScale.invertExtent(d)[0]);

  worldGroup
    .append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
    .attr("d", pathGenerator)
    .attr("fill", (d) =>
      data[d.properties.name]
        ? colorScale(data[d.properties.name].value)
        : colors[0]
    )
    .attr("stroke", colors[0])
    .attr("stroke-width", "0.5")
    .on("mouseenter", (e, d) => {
      const { name } = d.properties;
      const country = data[name];
      if (country) {
        text.select("tspan").text(name);
        text.select("tspan:nth-of-type(2)").text(` ${country.value}%`);
        textGroup
          .select("text:nth-of-type(2)")
          .text(`Dated ${formatDate(parseDate(`${country.date}`))}`);

        highlightGroup.select("path").attr("d", pathGenerator(d));

        const [x, y] = pathGenerator.centroid(d);
        console.log(x, y);

        highlightGroup
          .select("path:nth-of-type(2)")
          .attr(
            "d",
            `M ${highlightPosition.x} ${highlightPosition.y} v 30 L ${x} ${y}`
          );

        highlightGroup
          .select("circle")
          .attr("transform", `translate(${x} ${y})`);
      }
    });

  const highlight = Object.entries(data).sort(
    (a, b) => b[1].value - a[1].value
  )[0];

  const highlightPosition = {
    x: dimensions.width - 5,
    y: 70,
  };

  const textGroup = highlightGroup
    .append("g")
    .attr("text-anchor", "end")
    .attr("fill", "currentColor")
    .attr(
      "transform",
      `translate(${highlightPosition.x - 10} ${highlightPosition.y})`
    );

  const text = textGroup.append("text").attr("font-weight", "bold");

  text.append("tspan").attr("font-size", "24").text(highlight[0]);

  text.append("tspan").attr("font-size", "34").text(` ${highlight[1].value}%`);

  textGroup
    .append("text")
    .attr("font-size", "15")
    .attr("y", "24")
    .text(`Dated ${formatDate(parseDate(`${highlight[1].date}`))}`);

  const highlightFeature = countries.features.find(
    (d) => d.properties.name === highlight[0]
  );

  highlightGroup
    .append("path")
    .attr("fill", "hsl(0, 80%, 68%)")
    .attr("d", pathGenerator(highlightFeature));

  const [x, y] = pathGenerator.centroid(highlightFeature);

  highlightGroup
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "2")
    .attr("stroke-dasharray", "5 10")
    .attr("stroke-dashoffset", "5")
    .attr(
      "d",
      `M ${highlightPosition.x} ${highlightPosition.y} v 30 L ${x} ${y}`
    );

  highlightGroup
    .append("circle")
    .attr("fill", "currentColor")
    .attr("r", "3.5")
    .attr("transform", `translate(${x} ${y})`);

  highlightGroup
    .append("circle")
    .attr("fill", "currentColor")
    .attr("r", "3.5")
    .attr(
      "transform",
      `translate(${highlightPosition.x} ${highlightPosition.y})`
    );

  /*
  const delaunayGroup = svg.append("g");

  const delaunay = Delaunay.from(
    countries.features,
    (d) => pathGenerator.centroid(d)[0],
    (d) => pathGenerator.centroid(d)[1]
  );

  const voronoi = delaunay.voronoi([0, 0, dimensions.width, dimensions.height]);

  delaunayGroup
    .append("g")
    .selectAll("path")
    .data(countries.features)
    .enter()
    .append("path")
    .attr("opacity", 0)
    .attr("d", (d, i) => voronoi.renderCell(i))
    .on("mouseenter", (e, d) => {
      const { name } = d.properties;
      const country = data[name];
      if (country) {
        text.select("tspan").text(name);
        text.select("tspan:nth-of-type(2)").text(` ${country.value}%`);
        textGroup
          .select("text:nth-of-type(2)")
          .text(`Dated ${formatDate(parseDate(`${country.date}`))}`);

        highlightGroup.select("path").attr("d", pathGenerator(d));
      }
    });
  */

  dataGroup
    .attr("opacity", "0")
    .transition()
    .duration(1000)
    .attr("opacity", "1");
}
