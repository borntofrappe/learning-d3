const data = [
  { word: "take", polysemy: 66 },
  { word: "go", polysemy: 54 },
  { word: "up", polysemy: 50 },
  { word: "make", polysemy: 48 },
  { word: "on", polysemy: 43 },
  { word: "do", polysemy: 38 },
  { word: "out", polysemy: 38 },
  { word: "get", polysemy: 37 },
  { word: "back", polysemy: 36 },
  { word: "good", polysemy: 32 },
  { word: "well", polysemy: 30 },
  { word: "work", polysemy: 28 },
  { word: "like", polysemy: 26 },
  { word: "have", polysemy: 25 },
  { word: "see", polysemy: 25 },
  { word: "one", polysemy: 24 },
  { word: "in", polysemy: 23 },
  { word: "even", polysemy: 23 },
  { word: "be", polysemy: 21 },
  { word: "a", polysemy: 20 },
  { word: "come", polysemy: 20 },
  { word: "for", polysemy: 19 },
  { word: "by", polysemy: 19 },
  { word: "what", polysemy: 19 },
  { word: "over", polysemy: 19 },
  { word: "give", polysemy: 19 },
  { word: "it", polysemy: 18 },
  { word: "so", polysemy: 18 },
  { word: "about", polysemy: 18 },
  { word: "can", polysemy: 18 },
  { word: "new", polysemy: 18 },
  { word: "to", polysemy: 17 },
  { word: "that", polysemy: 17 },
  { word: "as", polysemy: 17 },
  { word: "but", polysemy: 17 },
  { word: "say", polysemy: 17 },
  { word: "look", polysemy: 17 },
  { word: "use", polysemy: 17 },
  { word: "and", polysemy: 16 },
  { word: "will", polysemy: 16 },
  { word: "way", polysemy: 16 },
  { word: "all", polysemy: 15 },
  { word: "at", polysemy: 14 },
  { word: "there", polysemy: 14 },
  { word: "time", polysemy: 14 },
  { word: "just", polysemy: 14 },
  { word: "after", polysemy: 14 },
  { word: "would", polysemy: 13 },
  { word: "know", polysemy: 13 },
  { word: "now", polysemy: 13 },
  { word: "the", polysemy: 12 },
  { word: "of", polysemy: 12 },
  { word: "other", polysemy: 12 },
  { word: "most", polysemy: 12 },
  { word: "with", polysemy: 11 },
  { word: "or", polysemy: 11 },
  { word: "when", polysemy: 11 },
  { word: "only", polysemy: 11 },
  { word: "how", polysemy: 11 },
  { word: "me", polysemy: 10 },
  { word: "no", polysemy: 10 },
  { word: "into", polysemy: 10 },
  { word: "some", polysemy: 10 },
  { word: "then", polysemy: 10 },
  { word: "think", polysemy: 10 },
  { word: "first", polysemy: 10 },
  { word: "want", polysemy: 10 },
  { word: "you", polysemy: 9 },
  { word: "this", polysemy: 9 },
  { word: "if", polysemy: 9 },
  { word: "people", polysemy: 9 },
  { word: "day", polysemy: 9 },
  { word: "I", polysemy: 7 },
  { word: "he", polysemy: 7 },
  { word: "she", polysemy: 7 },
  { word: "which", polysemy: 7 },
  { word: "year", polysemy: 7 },
  { word: "because", polysemy: 7 },
  { word: "his", polysemy: 6 },
  { word: "they", polysemy: 6 },
  { word: "we", polysemy: 6 },
  { word: "an", polysemy: 6 },
  { word: "could", polysemy: 6 },
  { word: "two", polysemy: 6 },
  { word: "us", polysemy: 6 },
  { word: "not", polysemy: 5 },
  { word: "my", polysemy: 5 },
  { word: "who", polysemy: 5 },
  { word: "him", polysemy: 5 },
  { word: "from", polysemy: 4 },
  { word: "your", polysemy: 4 },
  { word: "than", polysemy: 4 },
  { word: "any", polysemy: 4 },
  { word: "her", polysemy: 3 },
  { word: "them", polysemy: 3 },
  { word: "our", polysemy: 3 },
  { word: "their", polysemy: 2 },
  { word: "its", polysemy: 2 },
  { word: "also", polysemy: 2 },
  { word: "these", polysemy: 2 },
];

const dataPyramid = [];
for (let i = 0; i < data.length; i++) {
  const { word: label, polysemy: value } = data[i];
  if (i % 2 === 0) {
    dataPyramid.push({ label, value });
  } else {
    dataPyramid.unshift({ label, value });
  }
}

const width = 400;
const height = 300;

const colors = d3.schemeDark2;

const root = d3
  .hierarchy({
    label: "Cloud",
    children: dataPyramid,
  })
  .sum((d) => d.value);

const leaves = d3.treemap().size([width, height])(root).leaves();

const words = leaves.map((d) => {
  const { x0, y0, x1, y1, data } = d;
  const width = x1 - x0;
  const height = y1 - y0;

  let transform = `translate(${x0} ${y0})`;
  let fontSize = height;
  let textLength = width;

  if (width < height) {
    [fontSize, textLength] = [textLength, fontSize];
    transform = `translate(${x0} ${y0 + height}) rotate(-90)`;
  }

  const { label: text } = data;

  return {
    transform,
    fontSize,
    textLength,
    text,
  };
});

const svg = d3
  .select("body")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`);

svg
  .selectAll("text")
  .data(words)
  .enter()
  .append("text")
  .attr("fill", (_, i) => colors[i % colors.length])
  .attr("transform", ({ transform }) => transform)
  .attr("dominant-baseline", "hanging")
  .attr("font-size", ({ fontSize }) => fontSize)
  .attr("textLength", ({ textLength }) => textLength)
  .attr("lengthAdjust", "spacingAndGlyphs")
  .text(({ text }) => text);
