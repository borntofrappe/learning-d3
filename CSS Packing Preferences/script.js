const dataset = [
  {
    Label: "Flexbox",
    "Know about it": 8074,
    "Have used it": 7987,
    Feature: "Layout",
  },
  {
    Label: "CSS position:sticky",
    "Know about it": 7834,
    "Have used it": 6747,
    Feature: "Layout",
  },
  {
    Label: "Grid",
    "Know about it": 8075,
    "Have used it": 6746,
    Feature: "Layout",
  },
  {
    Label: "Flexbox Gap",
    "Know about it": 6404,
    "Have used it": 4440,
    Feature: "Layout",
  },
  {
    Label: "Multi-Column Layout",
    "Know about it": 5082,
    "Have used it": 3136,
    Feature: "Layout",
  },
  {
    Label: "Break Rules",
    "Know about it": 3516,
    "Have used it": 1952,
    Feature: "Layout",
  },
  {
    Label: "CSS property: aspect-ratio",
    "Know about it": 6728,
    "Have used it": 2997,
    Feature: "Layout",
  },
  {
    Label: "CSS content-visibility",
    "Know about it": 4618,
    "Have used it": 1953,
    Feature: "Layout",
  },
  {
    Label: "Writing Modes",
    "Know about it": 3459,
    "Have used it": 1241,
    Feature: "Layout",
  },
  {
    Label: "CSS Logical Properties",
    "Know about it": 4341,
    "Have used it": 1420,
    Feature: "Layout",
  },
  {
    Label: "Subgrid",
    "Know about it": 5663,
    "Have used it": 1024,
    Feature: "Layout",
  },
  {
    Label: "CSS property: @container",
    "Know about it": 4822,
    "Have used it": 435,
    Feature: "Layout",
  },
  {
    Label: "object-fit",
    "Know about it": 6216,
    "Have used it": 5216,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "Filters & Effects",
    "Know about it": 6600,
    "Have used it": 4962,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "Intrinsic Sizing",
    "Know about it": 5123,
    "Have used it": 3601,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "clip-path",
    "Know about it": 6482,
    "Have used it": 4226,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "backdrop-filter",
    "Know about it": 4499,
    "Have used it": 2710,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "blend-mode",
    "Know about it": 5153,
    "Have used it": 2936,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "Perspective",
    "Know about it": 3630,
    "Have used it": 1990,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "Masking",
    "Know about it": 5455,
    "Have used it": 2543,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "Shapes",
    "Know about it": 4385,
    "Have used it": 1744,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "color()",
    "Know about it": 2959,
    "Have used it": 1163,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "conic-gradient()",
    "Know about it": 3019,
    "Have used it": 710,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "accent-color",
    "Know about it": 2893,
    "Have used it": 543,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "color-gamut",
    "Know about it": 1420,
    "Have used it": 119,
    Feature: "Shapes & Graphic",
  },
  {
    Label: "pointer-events",
    "Know about it": 5928,
    "Have used it": 5136,
    Feature: "Interactions",
  },
  {
    Label: "overscroll-behavior",
    "Know about it": 3398,
    "Have used it": 1730,
    Feature: "Interactions",
  },
  {
    Label: "Scroll Snap",
    "Know about it": 4656,
    "Have used it": 2161,
    Feature: "Interactions",
  },
  {
    Label: "touch-action",
    "Know about it": 2714,
    "Have used it": 1225,
    Feature: "Interactions",
  },
  {
    Label: "overflow-anchor",
    "Know about it": 1706,
    "Have used it": 561,
    Feature: "Interactions",
  },
  {
    Label: "scroll-timeline",
    "Know about it": 1192,
    "Have used it": 178,
    Feature: "Interactions",
  },
  {
    Label: "font-display",
    "Know about it": 3999,
    "Have used it": 2784,
    Feature: "Typography",
  },
  {
    Label: "line-clamp",
    "Know about it": 3621,
    "Have used it": 2112,
    Feature: "Typography",
  },
  {
    Label: "font-variant-numeric",
    "Know about it": 2138,
    "Have used it": 899,
    Feature: "Typography",
  },
  {
    Label: "font-variant",
    "Know about it": 3379,
    "Have used it": 1419,
    Feature: "Typography",
  },
  {
    Label: "initial-letter",
    "Know about it": 4241,
    "Have used it": 1703,
    Feature: "Typography",
  },
  {
    Label: "Variable Fonts",
    "Know about it": 4288,
    "Have used it": 1503,
    Feature: "Typography",
  },
  {
    Label: "ARIA attributes",
    "Know about it": 6608,
    "Have used it": 5658,
    Feature: "Accessibility",
  },
  {
    Label: "tabindex",
    "Know about it": 6191,
    "Have used it": 5191,
    Feature: "Accessibility",
  },
  {
    Label: "prefers-color-scheme",
    "Know about it": 4510,
    "Have used it": 2016,
    Feature: "Accessibility",
  },
  {
    Label: "prefers-reduced-motion",
    "Know about it": 4354,
    "Have used it": 1866,
    Feature: "Accessibility",
  },
  {
    Label: "color-scheme",
    "Know about it": 2084,
    "Have used it": 521,
    Feature: "Accessibility",
  },
  {
    Label: "color-contrast()",
    "Know about it": 1835,
    "Have used it": 238,
    Feature: "Accessibility",
  },
  {
    Label: "prefers-reduced-data",
    "Know about it": 2537,
    "Have used it": 275,
    Feature: "Accessibility",
  },
  {
    Label: "calc()",
    "Know about it": 6951,
    "Have used it": 6597,
    Feature: "Other Features",
  },
  {
    Label: "Variables",
    "Know about it": 6771,
    "Have used it": 5876,
    Feature: "Other Features",
  },
  {
    Label: "CSS Comparison Functions",
    "Know about it": 6118,
    "Have used it": 4407,
    Feature: "Other Features",
  },
  {
    Label: "will-change",
    "Know about it": 3670,
    "Have used it": 2357,
    Feature: "Other Features",
  },
  {
    Label: "::marker",
    "Know about it": 3756,
    "Have used it": 2330,
    Feature: "Other Features",
  },
  {
    Label: "@supports",
    "Know about it": 5306,
    "Have used it": 3226,
    Feature: "Other Features",
  },
  {
    Label: "Contain",
    "Know about it": 1958,
    "Have used it": 670,
    Feature: "Other Features",
  },
  {
    Label: "@property",
    "Know about it": 1912,
    "Have used it": 286,
    Feature: "Other Features",
  },
  {
    Label: "CSS Houdini",
    "Know about it": 3361,
    "Have used it": 253,
    Feature: "Other Features",
  },
];

const formatRatio = d3.format(".2f");
const data = dataset.map((d) => ({
  ...d,
  "Usage ratio": parseFloat(
    formatRatio(d["Have used it"] / d["Know about it"])
  ),
}));

const container = d3.select("body").append("article");

// const controls = container.append("div");
// controls.append("button").text("Grouped");
// controls.append("button").text("By awareness");
// controls.append("button").text("By usage");

const svg = container.append("svg").attr("viewBox", "0 0 1 1");
const groupFeatures = svg.append("g");
const groupLabels = svg.append("g");

// const children = [...d3.group(data, (d) => d.Feature)].map(([key, value]) => ({
//   name: key,
//   children: value,
// }));

const features = data
  .map(({ Feature }) => Feature)
  .reduce((a, c) => (a.includes(c) ? [...a] : [...a, c]), []);

const children = features.map((feature) => ({
  name: feature,
  children: data.filter(({ Feature }) => feature === Feature),
}));

const scaleColor = d3
  .scaleOrdinal()
  .domain(features)
  .range(["#4BC77D", "#7854C3", "#4861EC", "#ef4e88", "#FE6A6A", "#FFE589"]);

const root = d3
  .hierarchy({
    name: "CSS",
    children,
  })
  .sum((d) => d["Know about it"] || 0);

const dataPack = d3.pack()(root);

const dataLabel = dataPack.leaves();
const dataFeature = dataPack.descendants().filter(({ depth }) => depth === 1);
const groupsLabel = groupLabels
  .selectAll("g")
  .data(dataLabel)
  .enter()
  .append("g")
  .attr("fill", (d) => scaleColor(d.data["Feature"]))
  .attr("transform", ({ x, y }) => `translate(${x} ${y})`);

groupsLabel
  .append("circle")
  .attr("r", ({ r }) => r)
  .attr("opacity", "0.5");

groupsLabel.append("circle").attr("r", (d) => {
  return d.r * d.data["Usage ratio"];
});

const maxLength = 15;
groupsLabel
  .append("text")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "0.02")
  .attr("letter-spacing", "0.001")
  .attr("font-family", "sans-serif")
  .attr("fill", "#FFF6E6")
  .attr("stroke", "#272325")
  .attr("stroke-width", "0.01")
  .attr("stroke-linecap", "round")
  .attr("stroke-linejoin", "round")
  .attr("paint-order", "stroke")
  .text(({ data }) => {
    const { Label: label } = data;
    return label.length >= maxLength
      ? label.slice(0, maxLength - 3).padEnd(maxLength, ".")
      : label;
  });

groupsFeatures = groupFeatures
  .selectAll("g")
  .data(dataFeature)
  .enter()
  .append("g")
  .attr("transform", ({ x, y }) => `translate(${x} ${y})`);

groupsFeatures
  .append("circle")
  .attr("fill", "#FFF6E6")
  .attr("r", ({ r }) => r)
  .attr("opacity", "0.025");

groupsFeatures
  .append("circle")
  .attr("fill", "none")
  .attr("stroke", (d) => scaleColor(d.data["name"]))
  .attr("stroke-width", "0.002")
  .attr("stroke-dasharray", "0.003 0.01")
  .attr("r", ({ r }) => r);
