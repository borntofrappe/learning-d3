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

const size = 400;
const margin = 25;

const data = dataset.map((d) => ({
  ...d,
  "Usage ratio": parseFloat(d["Have used it"] / d["Know about it"]),
}));

const features = data
  .map(({ Feature }) => Feature)
  .reduce((a, c) => (a.includes(c) ? [...a] : [...a, c]), []);

const children = features.map((feature) => ({
  name: feature,
  children: data.filter(({ Feature }) => feature === Feature),
}));

const root = d3
  .hierarchy({
    name: "CSS",
    children,
  })
  .sum((d) => d["Know about it"] || 0);

const dataPack = d3.pack().padding(8).size([size, size])(root);

const dataFeatures = dataPack.descendants().filter(({ depth }) => depth === 1);

const dataValues = dataPack.leaves();

const dimensions = Math.ceil(dataValues.length ** 0.5);
const cellSize = size / dimensions;

dataValues
  .sort((a, b) => b.data["Know about it"] - a.data["Know about it"])
  .forEach((d, i) => {
    const x = (i % dimensions) * cellSize + cellSize / 2;
    const y = Math.floor(i / dimensions) * cellSize + cellSize / 2;

    d.position = {};
    d.position["Know about it"] = { x, y };
  });

dataValues
  .sort((a, b) => b.data["Have used it"] - a.data["Have used it"])
  .forEach((d, i) => {
    const x = (i % dimensions) * cellSize + cellSize / 2;
    const y = Math.floor(i / dimensions) * cellSize + cellSize / 2;

    d.position["Have used it"] = { x, y };
    d.position["Grouped"] = { x: d.x, y: d.y };
  });

const scaleColor = d3
  .scaleOrdinal()
  .domain(features)
  .range(["#4861EC", "#EF4E88", "#FE6A6A", "#7854C3", "#FFE589", "#4BC77D"]);

const container = d3.select("body").append("article").attr("id", "root");

const list = container.append("ul");
const listItems = list.selectAll("li").data(features).enter().append("li");

listItems
  .append("span")
  .style("style", "inline-block")
  .style("width", "1em")
  .style("height", "1em")
  .style("background", (d) => scaleColor(d));
listItems.append("span").text((d) => d);

const controls = container.append("div").attr("id", "controls");
controls.append("button").text("Grouped").attr("data-key", "Grouped");
controls
  .append("button")
  .text("By awareness")
  .attr("data-key", "Know about it");
controls.append("button").text("By usage").attr("data-key", "Have used it");

const viz = container
  .append("div")
  .attr("id", "viz")
  .style("position", "relative");

const tooltip = viz
  .append("div")
  .attr("id", "tooltip")
  .style("position", "absolute")
  .style("pointer-events", "none")
  .style("visibility", "hidden")
  .style("opacity", "0");

const svg = viz
  .append("svg")
  .attr("viewBox", `0 0 ${size + margin * 2} ${size + margin * 2}`);

const group = svg
  .append("g")
  .attr("transform", `translate(${margin} ${margin})`);

const groupFeatures = group.append("g");
const groupLabels = group.append("g");

const groupsLabel = groupLabels
  .selectAll("g")
  .data(dataValues)
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

const maxLength = 14;
groupsLabel
  .append("text")
  .style("pointer-events", "none")
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "7")
  .attr("letter-spacing", "1")
  .attr("font-family", "sans-serif")
  .attr("fill", "#FFF6E6")
  .attr("stroke", "#272325")
  .attr("stroke-width", "3")
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
  .data(dataFeatures)
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
  .attr("stroke-width", "1")
  .attr("stroke-dasharray", "2 4")
  .attr("r", ({ r }) => r);

controls.select("button").attr("class", "active");
controls.selectAll("button").on("click", function () {
  if (d3.select(this).classed("active")) return;

  controls.select("button.active").classed("active", false);
  d3.select(this).classed("active", true);

  const key = d3.select(this).attr("data-key");

  groupLabels
    .selectAll("g")
    .transition()
    .duration(750)
    .ease(d3.easeBackOut)
    .attr("transform", (d) => {
      const { x, y } = d.position[key];
      return `translate(${x} ${y})`;
    });

  if (key === "Grouped") {
    groupLabels
      .selectAll("text")
      .transition()
      .duration(250)
      .ease(d3.easeQuadInOut)
      .attr("y", 0);

    groupFeatures
      .selectAll("circle")
      .transition()
      .duration(200)
      .delay(350)
      .ease(d3.easeBackOut)
      .attr("transform", "scale(1)");
  } else {
    groupLabels
      .selectAll("text")
      .transition()
      .duration(250)
      .ease(d3.easeQuadInOut)
      .attr("y", cellSize / 2);

    groupFeatures
      .selectAll("circle")
      .transition()
      .duration(200)
      .ease(d3.easeQuadInOut)
      .attr("transform", "scale(0)");
  }
});

const formatRatio = d3.format(".2%");

groupsLabel
  .on("pointerenter", (e, d) => {
    tooltip.style("visibility", "visible").style("opacity", "1");

    const { data } = d;

    tooltip.append("h2").text(data["Label"]);

    const colorUsage = scaleColor(data["Feature"]);
    const colorAwareness = d3.color(colorUsage);
    colorAwareness.opacity = 0.5;

    const dl = tooltip.append("dl");
    for (const [key, value, background] of [
      ["Know about it", data["Know about it"], colorAwareness.toString()],
      ["Have used it", data["Have used it"], colorUsage],
      [
        "Usage ratio",
        formatRatio(data["Usage ratio"]),
        `linear-gradient(135deg, ${colorAwareness.toString()} 50%, ${colorUsage} 50%)`,
      ],
    ]) {
      const dt = dl.append("dt");
      dt.append("span")
        .style("style", "inline-block")
        .style("width", "1em")
        .style("height", "1em")
        .style("background", background);

      dt.append("span").text(key);
      dl.append("dd").text(value);
    }
  })
  .on("pointermove", (e) => {
    tooltip.style("left", `${e.offsetX}px`).style("top", `${e.offsetY - 25}px`);
  })
  .on("pointerleave", () => {
    tooltip
      .style("visibility", "hidden")
      .style("opacity", "0")
      .selectAll("*")
      .remove();
    //
  });
