const brackets = {
  top: [
    ["Alcaraz", "Bye"],
    ["Karatsev", "Nishioka"],
    ["Van De Zandschulp", "Dimitrov"],
    ["Fils", "Fognini"],
    ["Hurkacz", "Mannarino"],
    ["Rune", "Wawrinka"],
    ["Isner", "Otte"],
    ["Bye", "Rublev"],
    ["Medvedev", "Bye"],
    ["Korda", "De Minaur"],
    ["Rinderknech", "Draper"],
    ["Sonego", "Tiafoe"],
    ["Fritz", "Davidovich"],
    ["Murray", "Simon"],
    ["Bublik", "Ymer"],
    ["Bye", "Auger-Aliassime"],
  ],
  bottom: [
    ["Djokovic", "Bye"],
    ["Schwartzman", "Cressy"],
    ["Baez", "Kachanov"],
    ["Huesler", "Sinner"],
    ["Cilic", "Musetti"],
    ["Basilashvili", "Halys"],
    ["Molcan", "Gasquet"],
    ["Bye", "Ruud"],
    ["Tsisipas", "Bye"],
    ["Evans", "Nakashima"],
    ["Moutet", "Coric"],
    ["Kecmanovic", "Norrie"],
    ["Carreno Busta", "Ramos"],
    ["Shapovalov", "Cerundolo"],
    ["Bautista Agut", "Paul"],
    ["Bye", "Nadal"],
  ],
};

const data = brackets.top;

const width = 400;
const height = 400;
const padding = 20;

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `${padding * -1} ${padding * -1} ${width + padding * 2} ${
      height + padding * 2
    }`
  );

const groupLabels = svg.append("g");
const groupLinks = svg.append("g");

groupLinks
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "2")
  .selectAll("path")
  .append("path");

groupLabels
  .attr("font-size", "12")
  .attr("font-size", "currentColor")
  .attr("font-family", "sans-serif")
  .append("text");

const scaleY = d3.scaleBand().domain(data).range([0, height]);

const text = groupLabels
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr(
    "transform",
    (d) => `translate(0 ${scaleY(d) + scaleY.bandwidth() / 2})`
  );

groupLabels
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr(
    "transform",
    (d) => `translate(0 ${scaleY(d) + scaleY.bandwidth() / 2})`
  )
  .attr("r", 2);

const fontSize = 8;
const gap = 4;
text
  .attr("font-size", fontSize)
  .attr("dominant-baseline", "hanging")
  .attr("y", (fontSize + gap / 2) * -1)
  .selectAll("tspan")
  .data((d) => d)
  .enter()
  .append("tspan")
  .attr("x", "0")
  .attr("dy", (_, i) => i * (fontSize + gap))
  .text((d) => d);
