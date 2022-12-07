// goals up to the round of 16
// feel free to update as the competition unfolds (and Portugal loses in the final)
const data = [
  { goals: [0, 2], teams: ["Qatar", "Equador"] },
  { goals: [0, 2], teams: ["Senegal", "Netherlands"] },
  { goals: [1, 3], teams: ["Qatar", "Senegal"] },
  { goals: [1, 1], teams: ["Netherlands", "Equador"] },
  { goals: [1, 2], teams: ["Equador", "Senegal"] },
  { goals: [2, 0], teams: ["Netherlands", "Qatar"] },
  { goals: [6, 2], teams: ["England", "Iran"] },
  { goals: [1, 1], teams: ["UnitedStates", "Wales"] },
  { goals: [0, 2], teams: ["Wales", "Iran"] },
  { goals: [0, 0], teams: ["England", "UnitedStates"] },
  { goals: [0, 3], teams: ["Wales", "England"] },
  { goals: [0, 1], teams: ["Iran", "UnitedStates"] },
  { goals: [1, 2], teams: ["Argentina", "SaudiArabia"] },
  { goals: [0, 0], teams: ["Mexico", "Poland"] },
  { goals: [2, 0], teams: ["Poland", "SaudiArabia"] },
  { goals: [2, 0], teams: ["Argentina", "Mexico"] },
  { goals: [0, 2], teams: ["Poland", "Argentina"] },
  { goals: [1, 2], teams: ["SaudiArabia", "Mexico"] },
  { goals: [0, 0], teams: ["Denmark", "Tunisia"] },
  { goals: [4, 1], teams: ["France", "Australia"] },
  { goals: [0, 1], teams: ["Tunisia", "Australia"] },
  { goals: [2, 1], teams: ["France", "Denmark"] },
  { goals: [1, 0], teams: ["Australia", "Denmark"] },
  { goals: [1, 0], teams: ["Tunisia", "France"] },
  { goals: [1, 2], teams: ["Germany", "Japan"] },
  { goals: [7, 0], teams: ["Spain", "CostaRica"] },
  { goals: [0, 1], teams: ["Japan", "CostaRica"] },
  { goals: [1, 1], teams: ["Spain", "Germany"] },
  { goals: [2, 1], teams: ["Japan", "Spain"] },
  { goals: [2, 4], teams: ["CostaRica", "Germany"] },
  { goals: [0, 0], teams: ["Morocco", "Croatia"] },
  { goals: [1, 0], teams: ["Belgium", "Canada"] },
  { goals: [0, 2], teams: ["Belgium", "Morocco"] },
  { goals: [4, 1], teams: ["Croatia", "Canada"] },
  { goals: [0, 0], teams: ["Croatia", "Belgium"] },
  { goals: [1, 2], teams: ["Canada", "Morocco"] },
  { goals: [1, 0], teams: ["Switzerland", "Cameroon"] },
  { goals: [2, 0], teams: ["Brazil", "Serbia"] },
  { goals: [3, 3], teams: ["Cameroon", "Serbia"] },
  { goals: [1, 0], teams: ["Brazil", "Switzerland"] },
  { goals: [2, 3], teams: ["Serbia", "Switzerland"] },
  { goals: [1, 0], teams: ["Cameroon", "Brazil"] },
  { goals: [0, 0], teams: ["Uruguay", "SouthKorea"] },
  { goals: [3, 2], teams: ["Portugal", "Ghana"] },
  { goals: [2, 3], teams: ["SouthKorea", "Ghana"] },
  { goals: [2, 0], teams: ["Portugal", "Uruguay"] },
  { goals: [0, 2], teams: ["Ghana", "Uruguay"] },
  { goals: [2, 1], teams: ["SouthKorea", "Portugal"] },
  { goals: [3, 1], teams: ["Netherlands", "UnitedStates"] },
  { goals: [2, 1], teams: ["Argentina", "Australia"] },
  { goals: [1, 1], teams: ["Japan", "Croatia"] },
  { goals: [4, 1], teams: ["Brazil", "SouthKorea"] },
  { goals: [3, 0], teams: ["England", "Senegal"] },
  { goals: [3, 1], teams: ["France", "Poland"] },
  { goals: [0, 0], teams: ["Morocco", "Spain"] },
  { goals: [6, 1], teams: ["Portugal", "Switzerland"] },
];

const dataGoals = data.map((d) => d.goals.reduce((a, c) => a + c, 0));

const width = 500;
const height = 200;

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

const scaleX = d3
  .scaleBand()
  .domain(d3.range(d3.max(dataGoals) + 1))
  .range([0, width]);

const axisX = d3.axisTop(scaleX).tickSize(0);

const svg = d3
  .select("body")
  .append("svg")
  .attr(
    "viewBox",
    `0 0 ${width + (margin.left + margin.right)} ${
      height + (margin.top + margin.bottom)
    }`
  );

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

const groupAxis = group.append("g").attr("fill", "currentColor");

groupAxis.append("g").call(axisX).select("path").remove();

const groupCenter = group
  .append("g")
  .attr("transform", `translate(0 ${height / 2})`);

const groupGoals = groupCenter.append("g");

const groupsGoals = groupGoals
  .selectAll("g")
  .data(dataGoals)
  .enter()
  .append("g")
  .attr(
    "transform",
    (d) => `translate(${scaleX(d) + scaleX.bandwidth() / 2} 0)`
  );

groupsGoals.append("circle").attr("r", "10");
