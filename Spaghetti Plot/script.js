// https://www.ssa.gov/oact/babynames/limits.html [2000,2020]
const dataset = {
  female: [
    {
      name: "Olivia",
      values: [
        { year: "2000", value: 12852 },
        { year: "2001", value: 13977 },
        { year: "2002", value: 14630 },
        { year: "2003", value: 16152 },
        { year: "2004", value: 16106 },
        { year: "2005", value: 15694 },
        { year: "2006", value: 15501 },
        { year: "2007", value: 16584 },
        { year: "2008", value: 17084 },
        { year: "2009", value: 17438 },
        { year: "2010", value: 17029 },
        { year: "2011", value: 17327 },
        { year: "2012", value: 17320 },
        { year: "2013", value: 18439 },
        { year: "2014", value: 19823 },
        { year: "2015", value: 19710 },
        { year: "2016", value: 19380 },
        { year: "2017", value: 18744 },
        { year: "2018", value: 18011 },
        { year: "2019", value: 18508 },
        { year: "2020", value: 17535 },
      ],
    },
    {
      name: "Emma",
      values: [
        { year: "2000", value: 12556 },
        { year: "2001", value: 13316 },
        { year: "2002", value: 16546 },
        { year: "2003", value: 22709 },
        { year: "2004", value: 21611 },
        { year: "2005", value: 20348 },
        { year: "2006", value: 19120 },
        { year: "2007", value: 18377 },
        { year: "2008", value: 18817 },
        { year: "2009", value: 17905 },
        { year: "2010", value: 17351 },
        { year: "2011", value: 18808 },
        { year: "2012", value: 20954 },
        { year: "2013", value: 20950 },
        { year: "2014", value: 20943 },
        { year: "2015", value: 20465 },
        { year: "2016", value: 19522 },
        { year: "2017", value: 19837 },
        { year: "2018", value: 18770 },
        { year: "2019", value: 17155 },
        { year: "2020", value: 15581 },
      ],
    },
    {
      name: "Ava",
      values: [
        { year: "2000", value: 1796 },
        { year: "2001", value: 2539 },
        { year: "2002", value: 3751 },
        { year: "2003", value: 6280 },
        { year: "2004", value: 8644 },
        { year: "2005", value: 13605 },
        { year: "2006", value: 16940 },
        { year: "2007", value: 18052 },
        { year: "2008", value: 17042 },
        { year: "2009", value: 15873 },
        { year: "2010", value: 15436 },
        { year: "2011", value: 15506 },
        { year: "2012", value: 15541 },
        { year: "2013", value: 15256 },
        { year: "2014", value: 15709 },
        { year: "2015", value: 16386 },
        { year: "2016", value: 16325 },
        { year: "2017", value: 15988 },
        { year: "2018", value: 14985 },
        { year: "2019", value: 14474 },
        { year: "2020", value: 13084 },
      ],
    },
    {
      name: "Charlotte",
      values: [
        { year: "2000", value: 1104 },
        { year: "2001", value: 1379 },
        { year: "2002", value: 1604 },
        { year: "2003", value: 1763 },
        { year: "2004", value: 1994 },
        { year: "2005", value: 2444 },
        { year: "2006", value: 2779 },
        { year: "2007", value: 3329 },
        { year: "2008", value: 3670 },
        { year: "2009", value: 4189 },
        { year: "2010", value: 5357 },
        { year: "2011", value: 6430 },
        { year: "2012", value: 7479 },
        { year: "2013", value: 9305 },
        { year: "2014", value: 10118 },
        { year: "2015", value: 11405 },
        { year: "2016", value: 13100 },
        { year: "2017", value: 12949 },
        { year: "2018", value: 13005 },
        { year: "2019", value: 13191 },
        { year: "2020", value: 13003 },
      ],
    },
    {
      name: "Sophia",
      values: [
        { year: "2000", value: 6564 },
        { year: "2001", value: 7162 },
        { year: "2002", value: 8665 },
        { year: "2003", value: 9686 },
        { year: "2004", value: 10917 },
        { year: "2005", value: 12673 },
        { year: "2006", value: 13501 },
        { year: "2007", value: 17025 },
        { year: "2008", value: 16087 },
        { year: "2009", value: 16948 },
        { year: "2010", value: 20646 },
        { year: "2011", value: 21850 },
        { year: "2012", value: 22320 },
        { year: "2013", value: 21232 },
        { year: "2014", value: 18630 },
        { year: "2015", value: 17434 },
        { year: "2016", value: 16149 },
        { year: "2017", value: 14903 },
        { year: "2018", value: 13979 },
        { year: "2019", value: 13753 },
        { year: "2020", value: 12976 },
      ],
    },
    {
      name: "Amelia",
      values: [
        { year: "2000", value: 1531 },
        { year: "2001", value: 1634 },
        { year: "2002", value: 2443 },
        { year: "2003", value: 3094 },
        { year: "2004", value: 3352 },
        { year: "2005", value: 3908 },
        { year: "2006", value: 4064 },
        { year: "2007", value: 4194 },
        { year: "2008", value: 4350 },
        { year: "2009", value: 4699 },
        { year: "2010", value: 5460 },
        { year: "2011", value: 6369 },
        { year: "2012", value: 7245 },
        { year: "2013", value: 8041 },
        { year: "2014", value: 8799 },
        { year: "2015", value: 9865 },
        { year: "2016", value: 10785 },
        { year: "2017", value: 11850 },
        { year: "2018", value: 12363 },
        { year: "2019", value: 12900 },
        { year: "2020", value: 12704 },
      ],
    },
    {
      name: "Isabella",
      values: [
        { year: "2000", value: 6242 },
        { year: "2001", value: 8834 },
        { year: "2002", value: 12170 },
        { year: "2003", value: 13779 },
        { year: "2004", value: 15019 },
        { year: "2005", value: 15190 },
        { year: "2006", value: 18227 },
        { year: "2007", value: 19140 },
        { year: "2008", value: 18622 },
        { year: "2009", value: 22311 },
        { year: "2010", value: 22924 },
        { year: "2011", value: 19919 },
        { year: "2012", value: 19113 },
        { year: "2013", value: 17654 },
        { year: "2014", value: 17108 },
        { year: "2015", value: 15636 },
        { year: "2016", value: 14829 },
        { year: "2017", value: 15214 },
        { year: "2018", value: 14524 },
        { year: "2019", value: 13344 },
        { year: "2020", value: 12066 },
      ],
    },
    {
      name: "Mia",
      values: [
        { year: "2000", value: 3451 },
        { year: "2001", value: 3918 },
        { year: "2002", value: 6259 },
        { year: "2003", value: 7083 },
        { year: "2004", value: 7398 },
        { year: "2005", value: 10844 },
        { year: "2006", value: 12024 },
        { year: "2007", value: 10920 },
        { year: "2008", value: 10170 },
        { year: "2009", value: 11431 },
        { year: "2010", value: 10642 },
        { year: "2011", value: 11532 },
        { year: "2012", value: 12028 },
        { year: "2013", value: 13157 },
        { year: "2014", value: 13517 },
        { year: "2015", value: 14914 },
        { year: "2016", value: 14442 },
        { year: "2017", value: 13494 },
        { year: "2018", value: 12703 },
        { year: "2019", value: 12452 },
        { year: "2020", value: 11157 },
      ],
    },
    {
      name: "Evelyn",
      values: [
        { year: "2000", value: 2222 },
        { year: "2001", value: 2691 },
        { year: "2002", value: 3372 },
        { year: "2003", value: 3701 },
        { year: "2004", value: 3763 },
        { year: "2005", value: 4487 },
        { year: "2006", value: 4750 },
        { year: "2007", value: 5053 },
        { year: "2008", value: 5099 },
        { year: "2009", value: 5583 },
        { year: "2010", value: 5840 },
        { year: "2011", value: 6708 },
        { year: "2012", value: 6876 },
        { year: "2013", value: 7665 },
        { year: "2014", value: 8748 },
        { year: "2015", value: 9366 },
        { year: "2016", value: 10111 },
        { year: "2017", value: 10731 },
        { year: "2018", value: 10416 },
        { year: "2019", value: 10412 },
        { year: "2020", value: 9445 },
      ],
    },
    {
      name: "Harper",
      values: [
        { year: "2000", value: 135 },
        { year: "2001", value: 176 },
        { year: "2002", value: 164 },
        { year: "2003", value: 200 },
        { year: "2004", value: 274 },
        { year: "2005", value: 363 },
        { year: "2006", value: 597 },
        { year: "2007", value: 728 },
        { year: "2008", value: 1128 },
        { year: "2009", value: 1903 },
        { year: "2010", value: 2634 },
        { year: "2011", value: 4675 },
        { year: "2012", value: 7193 },
        { year: "2013", value: 8282 },
        { year: "2014", value: 9609 },
        { year: "2015", value: 10301 },
        { year: "2016", value: 10793 },
        { year: "2017", value: 10510 },
        { year: "2018", value: 10624 },
        { year: "2019", value: 10464 },
        { year: "2020", value: 8778 },
      ],
    },
  ],
  male: [
    {
      name: "Liam",
      values: [
        { year: "2000", value: 2780 },
        { year: "2001", value: 3028 },
        { year: "2002", value: 3381 },
        { year: "2003", value: 3565 },
        { year: "2004", value: 3827 },
        { year: "2005", value: 4151 },
        { year: "2006", value: 4513 },
        { year: "2007", value: 5139 },
        { year: "2008", value: 5979 },
        { year: "2009", value: 8565 },
        { year: "2010", value: 10928 },
        { year: "2011", value: 13440 },
        { year: "2012", value: 16808 },
        { year: "2013", value: 18144 },
        { year: "2014", value: 18470 },
        { year: "2015", value: 18389 },
        { year: "2016", value: 18235 },
        { year: "2017", value: 18824 },
        { year: "2018", value: 19924 },
        { year: "2019", value: 20555 },
        { year: "2020", value: 19659 },
      ],
    },
    {
      name: "Noah",
      values: [
        { year: "2000", value: 14279 },
        { year: "2001", value: 13487 },
        { year: "2002", value: 12069 },
        { year: "2003", value: 11835 },
        { year: "2004", value: 11906 },
        { year: "2005", value: 13896 },
        { year: "2006", value: 16336 },
        { year: "2007", value: 16595 },
        { year: "2008", value: 15789 },
        { year: "2009", value: 17254 },
        { year: "2010", value: 16460 },
        { year: "2011", value: 16868 },
        { year: "2012", value: 17360 },
        { year: "2013", value: 18266 },
        { year: "2014", value: 19319 },
        { year: "2015", value: 19650 },
        { year: "2016", value: 19154 },
        { year: "2017", value: 18453 },
        { year: "2018", value: 18366 },
        { year: "2019", value: 19097 },
        { year: "2020", value: 18252 },
      ],
    },
    {
      name: "Oliver",
      values: [
        { year: "2000", value: 978 },
        { year: "2001", value: 978 },
        { year: "2002", value: 1166 },
        { year: "2003", value: 1374 },
        { year: "2004", value: 1491 },
        { year: "2005", value: 1793 },
        { year: "2006", value: 2351 },
        { year: "2007", value: 2910 },
        { year: "2008", value: 3601 },
        { year: "2009", value: 4286 },
        { year: "2010", value: 4664 },
        { year: "2011", value: 5411 },
        { year: "2012", value: 5918 },
        { year: "2013", value: 7272 },
        { year: "2014", value: 9443 },
        { year: "2015", value: 11660 },
        { year: "2016", value: 13050 },
        { year: "2017", value: 13212 },
        { year: "2018", value: 13469 },
        { year: "2019", value: 13929 },
        { year: "2020", value: 14147 },
      ],
    },
    {
      name: "Elijah",
      values: [
        { year: "2000", value: 7470 },
        { year: "2001", value: 8339 },
        { year: "2002", value: 10052 },
        { year: "2003", value: 10662 },
        { year: "2004", value: 11712 },
        { year: "2005", value: 11609 },
        { year: "2006", value: 12048 },
        { year: "2007", value: 12410 },
        { year: "2008", value: 13229 },
        { year: "2009", value: 12829 },
        { year: "2010", value: 13905 },
        { year: "2011", value: 13978 },
        { year: "2012", value: 13885 },
        { year: "2013", value: 13806 },
        { year: "2014", value: 13851 },
        { year: "2015", value: 13676 },
        { year: "2016", value: 13930 },
        { year: "2017", value: 13388 },
        { year: "2018", value: 12960 },
        { year: "2019", value: 13339 },
        { year: "2020", value: 13034 },
      ],
    },
    {
      name: "William",
      values: [
        { year: "2000", value: 20665 },
        { year: "2001", value: 20104 },
        { year: "2002", value: 20125 },
        { year: "2003", value: 19992 },
        { year: "2004", value: 20228 },
        { year: "2005", value: 19054 },
        { year: "2006", value: 18961 },
        { year: "2007", value: 18883 },
        { year: "2008", value: 18392 },
        { year: "2009", value: 17924 },
        { year: "2010", value: 17058 },
        { year: "2011", value: 17347 },
        { year: "2012", value: 16894 },
        { year: "2013", value: 16651 },
        { year: "2014", value: 16832 },
        { year: "2015", value: 15922 },
        { year: "2016", value: 15783 },
        { year: "2017", value: 15007 },
        { year: "2018", value: 14604 },
        { year: "2019", value: 13599 },
        { year: "2020", value: 12541 },
      ],
    },
    {
      name: "James",
      values: [
        { year: "2000", value: 17989 },
        { year: "2001", value: 17073 },
        { year: "2002", value: 16965 },
        { year: "2003", value: 16895 },
        { year: "2004", value: 16466 },
        { year: "2005", value: 16138 },
        { year: "2006", value: 16243 },
        { year: "2007", value: 15966 },
        { year: "2008", value: 15181 },
        { year: "2009", value: 14211 },
        { year: "2010", value: 13887 },
        { year: "2011", value: 13256 },
        { year: "2012", value: 13440 },
        { year: "2013", value: 13579 },
        { year: "2014", value: 14442 },
        { year: "2015", value: 14843 },
        { year: "2016", value: 14887 },
        { year: "2017", value: 14327 },
        { year: "2018", value: 13600 },
        { year: "2019", value: 13131 },
        { year: "2020", value: 12250 },
      ],
    },
    {
      name: "Benjamin",
      values: [
        { year: "2000", value: 14842 },
        { year: "2001", value: 14335 },
        { year: "2002", value: 13487 },
        { year: "2003", value: 14073 },
        { year: "2004", value: 13821 },
        { year: "2005", value: 13577 },
        { year: "2006", value: 13759 },
        { year: "2007", value: 13278 },
        { year: "2008", value: 12954 },
        { year: "2009", value: 13120 },
        { year: "2010", value: 12433 },
        { year: "2011", value: 13070 },
        { year: "2012", value: 12825 },
        { year: "2013", value: 13501 },
        { year: "2014", value: 13813 },
        { year: "2015", value: 13716 },
        { year: "2016", value: 14661 },
        { year: "2017", value: 13838 },
        { year: "2018", value: 13450 },
        { year: "2019", value: 12980 },
        { year: "2020", value: 12136 },
      ],
    },
    {
      name: "Lucas",
      values: [
        { year: "2000", value: 4818 },
        { year: "2001", value: 4899 },
        { year: "2002", value: 5381 },
        { year: "2003", value: 5754 },
        { year: "2004", value: 6713 },
        { year: "2005", value: 7576 },
        { year: "2006", value: 8136 },
        { year: "2007", value: 8753 },
        { year: "2008", value: 9323 },
        { year: "2009", value: 9616 },
        { year: "2010", value: 10379 },
        { year: "2011", value: 10402 },
        { year: "2012", value: 10713 },
        { year: "2013", value: 11550 },
        { year: "2014", value: 12163 },
        { year: "2015", value: 12310 },
        { year: "2016", value: 12890 },
        { year: "2017", value: 13013 },
        { year: "2018", value: 12635 },
        { year: "2019", value: 12445 },
        { year: "2020", value: 11281 },
      ],
    },
    {
      name: "Henry",
      values: [
        { year: "2000", value: 3122 },
        { year: "2001", value: 3201 },
        { year: "2002", value: 3333 },
        { year: "2003", value: 3470 },
        { year: "2004", value: 3911 },
        { year: "2005", value: 4178 },
        { year: "2006", value: 4668 },
        { year: "2007", value: 5116 },
        { year: "2008", value: 5780 },
        { year: "2009", value: 5896 },
        { year: "2010", value: 6399 },
        { year: "2011", value: 7233 },
        { year: "2012", value: 8069 },
        { year: "2013", value: 8882 },
        { year: "2014", value: 9437 },
        { year: "2015", value: 10177 },
        { year: "2016", value: 10383 },
        { year: "2017", value: 10469 },
        { year: "2018", value: 10698 },
        { year: "2019", value: 10737 },
        { year: "2020", value: 10705 },
      ],
    },
    {
      name: "Alexander",
      values: [
        { year: "2000", value: 17288 },
        { year: "2001", value: 16715 },
        { year: "2002", value: 17716 },
        { year: "2003", value: 17712 },
        { year: "2004", value: 17924 },
        { year: "2005", value: 18124 },
        { year: "2006", value: 18228 },
        { year: "2007", value: 18140 },
        { year: "2008", value: 18702 },
        { year: "2009", value: 18239 },
        { year: "2010", value: 16757 },
        { year: "2011", value: 15704 },
        { year: "2012", value: 15241 },
        { year: "2013", value: 14912 },
        { year: "2014", value: 15428 },
        { year: "2015", value: 14559 },
        { year: "2016", value: 13424 },
        { year: "2017", value: 12546 },
        { year: "2018", value: 12064 },
        { year: "2019", value: 11264 },
        { year: "2020", value: 10151 },
      ],
    },
  ],
}

const {
  select,
  scaleLinear,
  scaleTime,
  scaleOrdinal,
  extent,
  max,
  line,
  timeParse,
  timeFormat,
  interpolateRainbow,
  axisLeft,
  axisBottom,
} = d3

const main = select("body").append("main")
main.append("h1").text("Spaghetti Plot")

function drawSpaghettiPlot({ title, key }) {
  const data = dataset[key].sort(
    (a, b) =>
      b.values[b.values.length - 1].value - a.values[a.values.length - 1].value
  )

  const timeParser = timeParse("%Y")

  const xAccessor = (d) => timeParser(d.year)
  const yAccessor = (d) => d.value

  const dimensions = {
    width: 600,
    height: 250,
    margin: {
      top: 20,
      right: 20,
      bottom: 25,
      left: 50,
    },
    legend: {
      width: 55,
    },
  }

  dimensions.boundedWidth =
    dimensions.width -
    (dimensions.margin.left + dimensions.margin.right + dimensions.legend.width)
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom)

  const xScale = scaleTime()
    .domain(extent(data[0].values, xAccessor))
    .range([0, dimensions.boundedWidth])

  const yScale = scaleLinear()
    .domain([
      0,
      max(
        data.reduce((acc, curr) => [...acc, ...curr.values], []),
        yAccessor
      ),
    ])
    .range([dimensions.boundedHeight, 0])

  const xAxis = axisBottom(xScale).ticks(6).tickSize(0).tickPadding(15)

  const yAxis = axisLeft(yScale).ticks(5).tickSize(0).tickPadding(10)

  const names = data.map(({ name }) => name)
  const colorScale = scaleOrdinal()
    .domain(names)
    .range(
      names.map((_, i, { length }) => interpolateRainbow((1 / length) * i))
    )

  const lineGenerator = line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)))

  const article = main.append("article")
  article.append("h2").text(title)

  const wrapper = article
    .append("svg")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)

  const bounds = wrapper
    .append("g")
    .attr(
      "transform",
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    )

  const linesGroup = bounds.append("g")
  const axisGroup = bounds.append("g")
  const legendGroup = bounds
    .append("g")
    .attr("transform", `translate(${dimensions.boundedWidth + 5} 0)`)

  const lineGroups = linesGroup.selectAll("g").data(data).join("g")

  lineGroups
    .append("path")
    .attr("d", (d) => lineGenerator(d.values))
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d.name))
    .attr("stroke-width", 2)

  const xAxisGroup = axisGroup
    .append("g")
    .attr("transform", `translate(0 ${dimensions.boundedHeight})`)
    .call(xAxis)

  const yAxisGroup = axisGroup.append("g").call(yAxis)

  axisGroup.selectAll("path").remove()

  axisGroup
    .selectAll("text")
    .attr("font-size", "12")
    .attr("font-family", "inherit")
    .attr("fill", "currentColor")

  xAxisGroup
    .selectAll("g.tick")
    .filter((_, i, { length }) => i > 0 && i < length - 1)
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.5")
    .attr("opacity", "0.2")
    .attr("d", `M 0 0 v -${dimensions.boundedHeight}`)

  yAxisGroup
    .selectAll("g.tick")
    .filter((_, i, { length }) => i > 0 && i < length - 1)
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.5")
    .attr("opacity", "0.2")
    .attr("d", `M 0 0 h ${dimensions.boundedWidth}`)

  const legendGroups = legendGroup
    .selectAll("g")
    .data(names)
    .join("g")
    .attr(
      "transform",
      (_, i, { length }) =>
        `translate(0 ${(dimensions.boundedHeight / length) * i})`
    )

  legendGroups
    .append("path")
    .attr("fill", "none")
    .attr("stroke", (d) => colorScale(d))
    .attr("stroke-width", "2")
    .attr("d", "M 0 0 h 8")

  legendGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("x", "14")
    .attr("y", "1")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "12")
    .text((d) => d)
}

drawSpaghettiPlot({
  title: "Female",
  key: "female",
})
drawSpaghettiPlot({
  title: "Male",
  key: "male",
})
