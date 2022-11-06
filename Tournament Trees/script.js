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

const width = 400;
const height = 400;
const padding = 20;

const dataIds = [{ id: 0, parentId: null }];
const depth = 3;
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
  .linkVertical()
  .x((d) => d.x)
  .y((d) => d.y);

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
const groupData = svg.append("g");

groupLinks
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", "2");

groupData
  .attr("font-size", "12")
  .attr("font-size", "currentColor")
  .attr("font-family", "sans-serif");

groupData
  .selectAll("circle")
  .data(dataTree.descendants())
  .enter()
  .append("circle")
  .attr("transform", (d) => `translate(${d.x} ${d.y})`)
  .attr("r", "4");

groupLinks
  .selectAll("path")
  .data(dataTree.links())
  .enter()
  .append("path")
  .attr("d", link);
