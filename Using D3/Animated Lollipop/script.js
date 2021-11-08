// https://en.wikipedia.org/wiki/List_of_Grand_Slam%E2%80%93related_tennis_records#Singles_career_totals_(all_time)
const data = {
  men: [
    {
      name: "Roger Federer",
      value: 20,
    },
    {
      name: "Rafael Nadal",
      value: 20,
    },
    {
      name: "Novak Djokovic",
      value: 20,
    },
    {
      name: "Pete Sampras",
      value: 14,
    },
    {
      name: "Roy Emerson",
      value: 12,
    },
    {
      name: "Rod Laver",
      value: 11,
    },
    {
      name: "Bjorn Borg",
      value: 11,
    },
    {
      name: "Bill Tilden",
      value: 10,
    },
    {
      name: "Fred Perry",
      value: 8,
    },
    {
      name: "Ken Rosewall",
      value: 8,
    },
    {
      name: "Jimmy Connors",
      value: 8,
    },
    {
      name: "Ivan Lendl",
      value: 8,
    },
    {
      name: "Andre Agassi",
      value: 8,
    },
  ],
  women: [
    {
      name: "Margaret Court",
      value: 24,
    },
    {
      name: "Serena Williams",
      value: 23,
    },
    {
      name: "Steffi Graf",
      value: 22,
    },
    {
      name: "Helen Wills",
      value: 19,
    },
    {
      name: "Chris Evert",
      value: 18,
    },
    {
      name: "Martina Navratilova",
      value: 18,
    },
    {
      name: "Billie Jean King",
      value: 12,
    },
    {
      name: "Maureen Connolly",
      value: 9,
    },
    {
      name: "Monica Seles Perry",
      value: 9,
    },
    {
      name: "Suzanne Lenglen",
      value: 8,
    },
    {
      name: "Molla Mallory",
      value: 8,
    },
  ],
};

const { scaleLinear, scaleBand, min, max } = d3;

const main = d3.select("body").append("main");

main.append("h1").text("Grand Slam Winners");
main.append("p").html("Let's consider singles career totals.");

const buttonGroup = main.append("div");

const buttonMen = buttonGroup.append("button").text("Men");
const buttonWomen = buttonGroup.append("button").text("Women");

const valueAccessor = (d) => d.value;
const nameAccessor = (d) => d.name;

const dimensions = {
  width: 500,
  height: 350,
  margin: {
    top: 10,
    right: 35,
    bottom: 10,
    left: 10,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const valueScale = scaleLinear().range([0, dimensions.boundedWidth]);
const nameScale = scaleBand().range([0, dimensions.boundedHeight]);

const wrapper = main
  .append("svg")
  .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
  .attr("width", dimensions.width)
  .attr("height", dimensions.height);

const defs = wrapper.append("defs");

defs
  .append("circle")
  .attr("id", "ball")
  .attr("r", "5")
  .attr("cx", "5")
  .attr("cy", "5");

defs
  .append("path")
  .attr("id", "line")
  .attr("fill", "none")
  .attr("stroke", "hsl(0, 0%, 100%)")
  .attr("stroke-width", "1")
  .attr("d", "M 0 0 a 5.5 5.5 0 0 1 0 10");

defs
  .append("clipPath")
  .attr("id", "clip-ball")
  .append("use")
  .attr("href", "#ball");

const patternGroup = defs
  .append("pattern")
  .attr("id", "tennis-ball")
  .attr("viewBox", "0 0 10 10")
  .attr("width", "1")
  .attr("height", "1")
  .append("g")
  .attr("clip-path", "url(#clip-ball)");

patternGroup
  .append("use")
  .attr("href", "#ball")
  .attr("fill", "hsl(140, 33%, 45%)");

patternGroup.append("use").attr("href", "#line");

patternGroup
  .append("use")
  .attr("href", "#line")
  .attr("transform", "translate(10 0) scale(-1 1)");

const bounds = wrapper
  .append("g")
  .attr(
    "transform",
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

const dataGroup = bounds.append("g");

function plotData(data) {
  valueScale.domain([0, max(data, valueAccessor)]);
  nameScale.domain(data.map((d) => nameAccessor(d)));
  const radius = min([10, nameScale.bandwidth() / 2.5]);

  const updateGroups = dataGroup.selectAll("g").data(data);
  const enterSelection = updateGroups.enter();
  const exitSelection = updateGroups.exit();

  const unitDelay = 50;

  const exitTransition = d3.transition().duration(1000);

  let updateTransition;
  let enterTransition;

  if (exitSelection._groups[0].some((d) => d)) {
    updateTransition = d3
      .transition(exitTransition)
      .transition()
      .duration(1000);

    enterTransition = d3.transition(exitTransition).transition().duration(1000);
  } else {
    updateTransition = d3.transition().duration(1000);
    enterTransition = d3.transition().duration(1000);
  }

  exitSelection
    .select("text:nth-of-type(1)")
    .attr("opacity", 1)
    .transition(exitTransition)
    .attr("opacity", 0);

  exitSelection
    .select("text:nth-of-type(2)")
    .attr("opacity", 1)
    .transition(exitTransition)
    .attr("opacity", 0);

  exitSelection
    .select("path")
    .transition(exitTransition)
    .attr("d", "M 0 0 h 0");

  exitSelection
    .select("circle")
    .transition(exitTransition)
    .attr("transform", "translate(0 0) rotate(0)");

  exitSelection
    .attr("opacity", 1)
    .transition(exitTransition)
    .attr("opacity", 0)
    .remove();

  updateGroups
    .transition(updateTransition)
    .attr(
      "transform",
      (d) =>
        `translate(0 ${nameScale(nameAccessor(d)) + nameScale.bandwidth() / 2})`
    );

  updateGroups
    .select("text:nth-of-type(1)")
    .transition(updateTransition)
    .attr("opacity", 0)
    .transition()
    .delay((_, i) => i * unitDelay)
    .attr("opacity", 1)
    .text((d) => nameAccessor(d));

  updateGroups
    .select("text:nth-of-type(2)")
    .transition(updateTransition)
    .attr("x", (d) => valueScale(valueAccessor(d)) + radius + 4)
    .attr("opacity", 0)
    .transition()
    .delay((_, i) => i * unitDelay)
    .attr("opacity", 1)
    .text((d) => valueAccessor(d));

  updateGroups
    .select("path")
    .transition(updateTransition)
    .attr("d", (d) => `M 0 0 h ${valueScale(valueAccessor(d))}`);

  updateGroups
    .select("circle")
    .transition(updateTransition)
    .attr("r", radius)
    .attr(
      "transform",
      (d) =>
        `translate(${valueScale(valueAccessor(d))} 0) rotate(${
          Math.floor(Math.random() * 30) + 5
        })`
    );

  const enterGroups = enterSelection
    .append("g")
    .attr(
      "transform",
      (d) =>
        `translate(0 ${nameScale(nameAccessor(d)) + nameScale.bandwidth() / 2})`
    );

  enterGroups.attr("opacity", 0).transition(enterTransition).attr("opacity", 1);

  enterGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("font-size", "13")
    .attr("y", "-5")
    .text((d) => nameAccessor(d))
    .attr("opacity", 0)
    .transition(enterTransition)
    .delay((_, i) => i * unitDelay)
    .transition()
    .attr("opacity", 1);

  enterGroups
    .append("text")
    .attr("fill", "currentColor")
    .attr("font-size", "14")
    .attr("font-weight", "bold")
    .attr("dominant-baseline", "middle")
    .attr("y", "1")
    .text((d) => valueAccessor(d))
    .attr("x", (d) => valueScale(valueAccessor(d)) + radius + 4)
    .attr("opacity", 0)
    .transition(enterTransition)
    .delay((_, i) => i * unitDelay)
    .transition()
    .attr("opacity", 1);

  enterGroups
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "2")
    .attr("d", (d) => `M 0 0 h ${valueScale(valueAccessor(d))}`)
    .attr("transform", "scale(0 1)")
    .transition(enterTransition)
    .delay((_, i) => i * unitDelay)
    .attr("transform", "scale(1 1)");

  enterGroups
    .append("circle")
    .attr("fill", "url(#tennis-ball")
    .attr("stroke", "hsl(0, 0%, 100%)")
    .attr("stroke-width", "2")
    .attr("r", radius)
    .attr("transform", "translate(0 0) rotate(0)")
    .transition(enterTransition)
    .delay((_, i) => i * unitDelay)
    .attr(
      "transform",
      (d) =>
        `translate(${valueScale(valueAccessor(d))} 0) rotate(${
          Math.floor(Math.random() * 30) + 5
        })`
    );
}

plotData(data.men);
buttonMen.attr("class", "active");

buttonMen.on("click", () => {
  if (buttonMen.attr("class") === "active") return;

  buttonMen.attr("class", "active");
  buttonWomen.attr("class", "");
  plotData(data.men);
});

buttonWomen.on("click", () => {
  if (buttonWomen.attr("class") === "active") return;

  buttonMen.attr("class", "");
  buttonWomen.attr("class", "active");
  plotData(data.women);
});
