const href =
  "https://www.carbonbrief.org/analysis-which-countries-are-historically-responsible-for-climate-change";

const data = {
  1850: {
    Argentina: 38.24680873,
    Australia: 27.03407838,
    Austria: 7.387899072,
    Belgium: 10.61953608,
    Brazil: 43.96654906,
    Canada: 62.43553829,
    Chile: 7.239712256,
    China: 158.0015893,
    "Czech Republic": 8.826477072,
    Danemark: 5.395767616,
    Egypt: -0.002652736,
    France: 52.62784018,
    Germany: 48.42528348,
    India: 154.7514271,
    Indonesia: 93.16256593,
    "International transport": 0,
    Iran: 6.474071824,
    Iraq: 0.5218452,
    Ireland: 0.178680456,
    Italy: 11.64930878,
    Japan: 14.50217795,
    Malaysia: 11.06643599,
    Mexico: 18.44040637,
    Netherlands: 5.792415768,
    "New Zeland": 14.04093348,
    Norway: 8.704779144,
    Pakistan: 7.37286568,
    Perù: 6.905625072,
    Poland: 29.08090419,
    Portugal: 3.438303096,
    Qatar: 0.0000311,
    Russia: 351.4072625,
    "Saudi Arabia": -0.093455816,
    "South Africa": 2.759246648,
    "South Korea": 4.864892488,
    Spain: 18.28704049,
    Turkey: 11.77176332,
    Ukraine: 50.22904713,
    "United Arab Emirates": 0.002797464,
    "United Kingdom": 129.4574611,
    "United States": 840.6700012,
  },
  1851: {
    Argentina: 77.93477308,
    Australia: 53.52713601,
    Austria: 14.68513979,
    Belgium: 22.04460073,
    Brazil: 88.67678569,
    Canada: 127.9847328,
    Chile: 14.8358053,
    China: 316.0699165,
    "Czech Republic": 17.45842872,
    Danemark: 10.80200145,
    Egypt: -0.079897184,
    France: 102.4887521,
    Germany: 94.49988196,
    India: 274.6804675,
    Indonesia: 220.0627712,
    "International transport": 0,
    Iran: 12.96510064,
    Iraq: 1.054017384,
    Ireland: -0.015390632,
    Italy: 22.86683714,
    Japan: 29.05902095,
    Malaysia: 24.08900464,
    Mexico: 36.45723418,
    Netherlands: 11.5108279,
    "New Zeland": 27.56934114,
    Norway: 17.37462571,
    Pakistan: 14.54442021,
    Perù: 14.82699155,
    Poland: 58.04310211,
    Portugal: 6.814116672,
    Qatar: 0.0000714,
    Russia: 709.2888931,
    "Saudi Arabia": -0.189091712,
    "South Africa": 5.696928264,
    "South Korea": 9.839530936,
    Spain: 35.57667972,
    Turkey: 22.8854356,
    Ukraine: 102.411453,
    "United Arab Emirates": 0.0055876,
    "United Kingdom": 251.7344935,
    "United States": 1706.714197,
  },
  1852: {
    Argentina: 119.1120417,
    Australia: 79.67439082,
    Austria: 22.36093583,
    Belgium: 34.67912063,
    Brazil: 134.8175981,
    Canada: 195.7479378,
    Chile: 22.7131415,
    China: 474.3174005,
    "Czech Republic": 25.94920828,
    Danemark: 16.24115632,
    Egypt: -0.21685384,
    France: 151.0295231,
    Germany: 139.8590588,
    India: 378.4277157,
    Indonesia: 369.3675084,
    "International transport": 0,
    Iran: 19.47055646,
    Iraq: 1.594400592,
    Ireland: -0.215604416,
    Italy: 33.66180554,
    Japan: 43.66551298,
    Malaysia: 38.30738564,
    Mexico: 54.28031884,
    Netherlands: 17.82522077,
    "New Zeland": 40.74890853,
    Norway: 26.00210362,
    Pakistan: 21.58414218,
    Perù: 22.3318913,
    Poland: 87.0516075,
    Portugal: 10.10923798,
    Qatar: 0.00010992,
    Russia: 1070.685871,
    "Saudi Arabia": -0.286473504,
    "South Africa": 8.76306056,
    "South Korea": 14.90024407,
    Spain: 52.2918239,
    Turkey: 33.42475756,
    Ukraine: 155.8918913,
    "United Arab Emirates": 0.008375904,
    "United Kingdom": 372.4550421,
    "United States": 2591.958059,
  },
  1853: {
    Argentina: 161.6616432,
    Australia: 105.8249322,
    Austria: 30.35263462,
    Belgium: 47.65855667,
    Brazil: 181.6859308,
    Canada: 265.3403141,
    Chile: 30.84262318,
    China: 632.4167215,
    "Czech Republic": 34.29156103,
    Danemark: 21.73306546,
    Egypt: -0.403921192,
    France: 201.3906077,
    Germany: 184.1404059,
    India: 470.7272393,
    Indonesia: 532.4516941,
    "International transport": 0,
    Iran: 25.98952694,
    Iraq: 2.141877304,
    Ireland: -0.4327184,
    Italy: 44.17481448,
    Japan: 58.34264327,
    Malaysia: 52.85546435,
    Mexico: 72.17823703,
    Netherlands: 24.5130247,
    "New Zeland": 53.81968809,
    Norway: 34.61097206,
    Pakistan: 28.52522745,
    Perù: 29.7742539,
    Poland: 115.9343846,
    Portugal: 13.36235885,
    Qatar: 0.000142896,
    Russia: 1434.684645,
    "Saudi Arabia": -0.385320896,
    "South Africa": 11.9104787,
    "South Korea": 20.02000806,
    Spain: 68.71563978,
    Turkey: 43.45850248,
    Ukraine: 210.4105057,
    "United Arab Emirates": 0.011160544,
    "United Kingdom": 491.6013935,
    "United States": 3496.149837,
  },
};

const {
  min,
  max,
  extent,
  scaleLinear,
  scaleBand,
  scaleOrdinal,
  interpolateRainbow: interpolate,
  axisTop,
  format,
} = d3;

const years = Object.keys(data);
const countries = Object.keys(data[years[0]]);

const colorScale = scaleOrdinal()
  .domain(countries)
  .range(countries.map((_, i, { length }) => interpolate(i / length)));

const year = years[0];
const dataYear = Object.entries(data[year])
  .sort((a, b) => b[1] - a[1])
  .slice(0, 13);

const dimensions = {
  width: 800,
  height: 480,
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 180,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const widthScale = scaleLinear()
  .domain([0, max(dataYear, (d) => d[1])])
  .range([0, dimensions.boundedWidth]);

const yScale = scaleBand()
  .domain(dataYear.map(([country]) => country))
  .range([0, dimensions.boundedHeight])
  .padding(0.25);

const widthAxis = axisTop(widthScale)
  .ticks(5)
  .tickFormat((d) => format(".2~s")(d));

const main = d3.select("body").append("main");
main
  .append("h1")
  .text("Which countries are historically responsible for climate change?");
main
  .append("p")
  .text(
    "Cumulative CO2 emissions from fossil fuels, land use and forestry, 1850-2021 (million tonnes)"
  );

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

const axisGroup = bounds.append("g");
const countriesGroup = bounds.append("g");

const countryGroups = countriesGroup
  .selectAll("g")
  .data(dataYear)
  .enter()
  .append("g")
  .attr("transform", ([country]) => `translate(0 ${yScale(country)})`);

countryGroups
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "16")
  .attr("x", "-5")
  .attr("text-anchor", "end")
  .attr("dominant-baseline", "middle")
  .attr("y", yScale.bandwidth() / 2)
  .text(([country]) => country);

countryGroups
  .append("rect")
  .attr("fill", ([country]) => colorScale(country))
  .attr("height", yScale.bandwidth())
  .attr("width", ([, emissions]) => widthScale(emissions));

axisGroup.append("g").call(widthAxis);

axisGroup.selectAll("line").remove();
axisGroup.select("path").remove();

axisGroup
  .selectAll("g.tick")
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "0.2")
  .attr("d", `M 0 0 v ${dimensions.boundedHeight}`);

axisGroup
  .selectAll("text")
  .attr("fill", "currentColor")
  .attr("font-size", "12");

bounds
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "48")
  .attr("font-weight", "bold")
  .attr("text-anchor", "end")
  .attr("x", dimensions.boundedWidth)
  .attr("y", dimensions.boundedHeight - 5)
  .text(year);

bounds
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "1")
  .attr("d", `M -0.5 0 v ${dimensions.boundedHeight}`);

main
  .append("p")
  .style("text-align", "right")
  .text("Source: ")
  .append("a")
  .attr("href", href)
  .text("Carbon Brief");
