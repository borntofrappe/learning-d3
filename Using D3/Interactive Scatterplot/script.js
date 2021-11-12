const href =
  "https://www.nintendolife.com/news/2021/11/these-are-the-most-loved-and-most-hated-pokemon-according-to-a-new-study";

const data = [
  // {
  //   name: "Pikachu",
  //   conversations: 2300648,
  //   positive: 21.9,
  //   negative: 8.54,
  // },
  {
    name: "Eevee",
    conversations: 636373,
    positive: 26.4,
    negative: 7.37,
  },
  {
    name: "Charizard",
    conversations: 567763,
    positive: 25.6,
    negative: 7.56,
  },
  {
    name: "Mewtwo",
    conversations: 427822,
    positive: 19.1,
    negative: 11.8,
  },
  {
    name: "Bulbasaur",
    conversations: 352190,
    positive: 25.7,
    negative: 9.02,
  },
  {
    name: "Charmander",
    conversations: 265760,
    positive: 31.2,
    negative: 5.25,
  },
  {
    name: "Gengar",
    conversations: 246444,
    positive: 25.3,
    negative: 9.54,
  },
  {
    name: "Squirtle",
    conversations: 241259,
    positive: 25.6,
    negative: 5.96,
  },
  {
    name: "Lucario",
    conversations: 231319,
    positive: 24.5,
    negative: 10.8,
  },
  {
    name: "Gardevoir",
    conversations: 218200,
    positive: 22.6,
    negative: 7.56,
  },
  {
    name: "Snorlax",
    conversations: 212929,
    positive: 23.6,
    negative: 11.3,
  },
  {
    name: "Blastoise",
    conversations: 162794,
    positive: 19.5,
    negative: 6.04,
  },
  {
    name: "Umbreon",
    conversations: 159987,
    positive: 30.8,
    negative: 5.3,
  },
  {
    name: "Garchomp",
    conversations: 156910,
    positive: 14.1,
    negative: 7.3,
  },
  {
    name: "Dragonite",
    conversations: 132879,
    positive: 21.8,
    negative: 11.9,
  },
  {
    name: "Gyarados",
    conversations: 126151,
    positive: 10.6,
    negative: 4.99,
  },
  {
    name: "Absol",
    conversations: 121755,
    positive: 21.7,
    negative: 8.91,
  },
  {
    name: "Jigglypuff",
    conversations: 121314,
    positive: 17.7,
    negative: 7.44,
  },
  {
    name: "Tyranitar",
    conversations: 100761,
    positive: 10.7,
    negative: 3.62,
  },
  {
    name: "Mudkip",
    conversations: 80343,
    positive: 25.6,
    negative: 7.57,
  },
  {
    name: "Arcanine",
    conversations: 78050,
    positive: 27.1,
    negative: 5.41,
  },
  {
    name: "Ninetales",
    conversations: 67606,
    positive: 21.4,
    negative: 6.27,
  },
  {
    name: "Blaziken",
    conversations: 64580,
    positive: 24.2,
    negative: 9.52,
  },
  {
    name: "Typhlosion",
    conversations: 52025,
    positive: 25.5,
    negative: 9.59,
  },
  {
    name: "Ampharos",
    conversations: 50482,
    positive: 20.9,
    negative: 5.48,
  },
  {
    name: "Flygon",
    conversations: 42581,
    positive: 20.4,
    negative: 6.51,
  },
  {
    name: "Scizor",
    conversations: 39557,
    positive: 19.8,
    negative: 7.8,
  },
  {
    name: "Luxray",
    conversations: 39455,
    positive: 24.1,
    negative: 10.3,
  },
  {
    name: "Infernape",
    conversations: 36707,
    positive: 21.4,
    negative: 10.7,
  },
  {
    name: "Torterra",
    conversations: 31770,
    positive: 21.8,
    negative: 8.73,
  },
];

const { scaleLinear, extent, axisBottom, axisLeft, axisTop, axisRight } = d3;

const dimensions = {
  width: 400,
  height: 400,
  margin: {
    top: 10,
    right: 10,
    bottom: 50,
    left: 50,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const xAccessor = (d) => d.conversations;
const yAccessor = (d) => d.positive;

const xScale = scaleLinear()
  .domain(extent(data, xAccessor))
  .range([0, dimensions.boundedWidth])
  .nice();

const yScale = scaleLinear()
  .domain(extent(data, yAccessor))
  .range([dimensions.boundedHeight, 0])
  .nice();

const xAxis = axisBottom(xScale).ticks(6);
const yAxis = axisLeft(yScale).ticks(5);

const main = d3.select("body").append("main");
main.append("h1").text("Poke Preference");
main
  .append("p")
  .text(
    "A recent study considered online conversations on popular pocket monsters."
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

bounds
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 4)
  .attr("fill", "currentColor")
  .attr("cx", (d) => xScale(xAccessor(d)))
  .attr("cy", (d) => yScale(yAccessor(d)));

main
  .append("p")
  .text("Source: ")
  .append("a")
  .attr("href", href)
  .text("Nintendolife");
