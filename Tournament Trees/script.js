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

const width = 200;
const height = 325;
const padding = 5;
const inset = 35;

const fontSize = 5;
const gap = 2;
const strokeWidth = 0.75;

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `${padding * -1} ${padding * -1} ${width * 2 - inset + padding * 2} ${
      height + padding * 2
    }`
  );

const defs = svg.append("defs");

const groupTop = svg.append("g").attr("id", "top");
const groupBottom = svg
  .append("g")
  .attr("transform", `translate(${width - inset} 0)`)
  .attr("id", "bottom");

svg
  .append("g")
  .attr("transform", `translate(${width - inset / 2} ${height / 2})`)
  .append("circle")
  .attr("r", inset / 2)
  .attr("fill", "none")
  .attr("stroke", "var(--accent, currentColor)")
  .attr("stroke-width", strokeWidth);

const groupTitle = svg
  .append("g")
  .attr("transform", `translate(${width - inset / 2} 30)`)
  .attr("text-anchor", "middle");

groupTitle
  .append("text")
  .attr("fill", "var(--accent, currentColor)")
  .attr("font-size", "26")
  .attr("font-weight", "700")
  .text("2022");

const { width: widthText } = groupTitle.select("text").node().getBBox();

groupTitle
  .append("text")
  .attr("fill", "currentColor")
  .attr("font-size", "6")
  .attr("textLength", widthText)
  .attr("y", "8")
  .style("text-transform", "uppercase")
  .text("Paris Masters");

const drawBracket = (half = "top") => {
  let bracket = [...brackets[half]];
  let getX = (d) => width - d.y;
  let textAnchor = "start";
  let sweepFlag = 1;
  let cx = width - inset / 2;

  if (half === "bottom") {
    bracket = [...bracket].reverse();
    getX = (d) => d.y;
    textAnchor = "end";
    sweepFlag = 0;
    cx = inset / 2;
  }

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

  const dataTree = d3.tree().size([height, width])(root);

  const link = d3
    .link(d3.curveStep)
    .x(getX)
    .y((d) => d.x);

  const leaves = dataTree.leaves();
  const links = dataTree.links().slice(2);

  const [m, l] = link(links[links.length - 16])
    .split("L")
    .map((d) => parseFloat(d.match(/\d+/)[0]));

  const descendants = dataTree.descendants();
  const target = descendants[descendants.length - 1];
  const source = descendants[descendants.length - 16];

  const sx = getX(source);
  const sy = source.x;
  const ty = target.x;
  const dx = m - l;
  const dy = ty - sy;

  const arc = `M ${sx} ${sy} h ${dx} a ${dy / 2} ${
    dy / 2
  } 0 0 ${sweepFlag} 0 ${dy} h ${dx * -1}`;

  const clipPath = defs.append("clipPath").attr("id", `clip-path-${half}`);

  clipPath.append("path").attr("d", `${arc} z`).attr("stroke", "currentColor");

  const group = svg.select(`g#${half}`);

  const groupClipPath = group.append("g");
  const groupLinks = groupClipPath.append("g");

  const groupArc = group.append("g");
  const groupText = group.append("g");

  groupClipPath.attr("clip-path", `url(#clip-path-${half})`);

  groupLinks
    .attr("fill", "none")
    .attr("stroke", "var(--accent, currentColor)")
    .attr("stroke-width", strokeWidth);

  groupArc
    .attr("fill", "none")
    .attr("stroke", "var(--accent, currentColor)")
    .attr("stroke-width", strokeWidth);

  groupText
    .attr("font-size", fontSize)
    .attr("fill", "currentColor")
    .attr("font-weight", "700")
    .attr("text-anchor", textAnchor);

  groupClipPath
    .append("g")
    .attr("transform", `translate(${cx} ${height / 2})`)
    .append("circle")
    .attr("r", inset / 2 - 1)
    .attr("fill", "var(--accent, currentColor)");

  groupLinks
    .selectAll("path")
    .data(links)
    .enter()
    .append("path")
    .attr("d", link);

  groupArc.append("path").attr("d", arc);

  const textBracket = groupText
    .selectAll("text")
    .data(leaves)
    .enter()
    .append("text")
    .attr("transform", (d) => `translate(${getX(d)} ${d.x - 1 - gap / 2})`);

  textBracket
    .selectAll("tspan")
    .data((_, i) => bracket[i])
    .enter()
    .append("tspan")
    .attr("x", "0")
    .attr("dy", (_, i) => i * (fontSize + gap))
    .text((d) => d);
};

drawBracket("top");
drawBracket("bottom");
