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

const drawBracket = (half = "top") => {
  let bracket = [...brackets[half]];
  let getX = (d) => width - d.y;
  let textAnchor = "start";

  if (half === "bottom") {
    bracket = [...bracket].reverse();
    getX = (d) => d.y;
    textAnchor = "end";
  }

  const width = 400;
  const height = 400;
  const padding = 20;

  const fontSize = 6;
  const gap = 2;

  const dataIds = [{ id: 0, parentId: null }];
  const depth = bracket.length ** 0.5;
  let id = 0;
  let parentId = 0;
  for (let i = 0; i < 2 ** depth - 1; i++) {
    dataIds.push({ id: ++id, parentId });
    dataIds.push({ id: ++id, parentId });
    parentId++;
  }

  const root = d3
    .stratify()
    .id((d) => d.id)
    .parentId((d) => d.parentId)(dataIds);

  const dataTree = d3.tree().size([width, height])(root);

  const link = d3
    .link(d3.curveStep)
    .x(getX)
    .y((d) => d.x);

  const svg = d3
    .select("body")
    .append("svg")
    .attr(
      "viewBox",
      `${padding * -1} ${padding * -1} ${width + padding * 2} ${
        height + padding * 2
      }`
    );

  const groupLinks = svg.append("g");
  const groupText = svg.append("g");

  groupLinks
    .attr("fill", "none")
    .attr("stroke", "currentColor")
    .attr("stroke-width", "0.5");

  groupText
    .attr("font-size", fontSize)
    .attr("fill", "currentColor")
    .attr("font-family", "sans-serif")
    .attr("text-anchor", textAnchor);

  const text = groupText
    .selectAll("text")
    .data(dataTree.leaves())
    .enter()
    .append("text")
    .attr("transform", (d) => `translate(${getX(d)} ${d.x - 1 - gap / 2})`);

  text
    .selectAll("tspan")
    .data((_, i) => bracket[i])
    .enter()
    .append("tspan")
    .attr("x", "0")
    .attr("dy", (_, i) => i * (fontSize + gap))
    .text((d) => d);

  groupLinks
    .selectAll("path")
    .data(dataTree.links())
    .enter()
    .append("path")
    .attr("d", link);
};

drawBracket("top");
drawBracket("bottom");
