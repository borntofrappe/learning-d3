// goals up to the round of 16
// feel free to update as the competition unfolds and Portugal loses in the final
const data = [
  { match: "Qatar-Equador", result: "0-2" },
  { match: "Senegal-Netherlands", result: "0-2" },
  { match: "Qatar-Senegal", result: "1-3" },
  { match: "Netherlands-Equador", result: "1-1" },
  { match: "Equador-Senegal", result: "1-2" },
  { match: "Netherlands-Qatar", result: "2-0" },
  { match: "England-Iran", result: "6-2" },
  { match: "United States-Wales", result: "1-1" },
  { match: "Wales-Iran", result: "0-2" },
  { match: "England-United States", result: "0-0" },
  { match: "Wales-England", result: "0-3" },
  { match: "Iran-United States", result: "0-1" },
  { match: "Argentina-Saudi Arabia", result: "1-2" },
  { match: "Mexico-Poland", result: "0-0" },
  { match: "Poland-Saudi Arabia", result: "2-0" },
  { match: "Argentina-Mexico", result: "2-0" },
  { match: "Poland-Argentina", result: "0-2" },
  { match: "Saudi Arabia-Mexico", result: "1-2" },
  { match: "Denmark-Tunisia", result: "0-0" },
  { match: "France-Australia", result: "4-1" },
  { match: "Tunisia-Australia", result: "0-1" },
  { match: "France-Denmark", result: "2-1" },
  { match: "Australia-Denmark", result: "1-0" },
  { match: "Tunisia-France", result: "1-0" },
  { match: "Germany-Japan", result: "1-2" },
  { match: "Spain-Costa Rica", result: "7-0" },
  { match: "Japan-Costa Rica", result: "0-1" },
  { match: "Spain-Germany", result: "1-1" },
  { match: "Japan-Spain", result: "2-1" },
  { match: "Costa Rica-Germany", result: "2-4" },
  { match: "Morocco-Croatia", result: "0-0" },
  { match: "Belgium-Canada", result: "1-0" },
  { match: "Belgium-Morocco", result: "0-2" },
  { match: "Croatia-Canada", result: "4-1" },
  { match: "Croatia-Belgium", result: "0-0" },
  { match: "Canada-Morocco", result: "1-2" },
  { match: "Switzerland-Cameroon", result: "1-0" },
  { match: "Brazil-Serbia", result: "2-0" },
  { match: "Cameroon-Serbia", result: "3-3" },
  { match: "Brazil-Switzerland", result: "1-0" },
  { match: "Serbia-Switzerland", result: "2-3" },
  { match: "Cameroon-Brazil", result: "1-0" },
  { match: "Uruguay-South Korea", result: "0-0" },
  { match: "Portugal-Ghana", result: "3-2" },
  { match: "South Korea-Ghana", result: "2-3" },
  { match: "Portugal-Uruguay", result: "2-0" },
  { match: "Ghana-Uruguay", result: "0-2" },
  { match: "South Korea-Portugal", result: "2-1" },
  { match: "Netherlands-United States", result: "3-1" },
  { match: "Argentina-Australia", result: "2-1" },
  { match: "Japan-Croatia", result: "1-1" },
  { match: "Brazil-South Korea", result: "4-1" },
  { match: "England-Senegal", result: "3-0" },
  { match: "France-Poland", result: "3-1" },
  { match: "Morocco-Spain", result: "0-0" },
  { match: "Portugal-Switzerland", result: "6-1" },
];

const dataGoals = data.map((d) => {
  const { match, result } = d;
  const goals = result
    .split("-")
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  return {
    ...d,
    goals,
  };
});

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
  .domain(d3.range(d3.max(dataGoals, (d) => d.goals) + 1))
  .range([0, width]);

const axisX = d3.axisBottom(scaleX).tickSize(0);

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

groupAxis
  .append("g")
  .attr("transform", `translate(0 ${height})`)
  .call(axisX)
  .select("path")
  .remove();

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
    (d) => `translate(${scaleX(d.goals) + scaleX.bandwidth() / 2} 0)`
  );

groupsGoals.append("circle").attr("r", "10");
