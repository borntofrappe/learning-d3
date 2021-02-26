# Lines and Delaunay

## [Live Demo](https://codepen.io/borntofrappe/full/ExNQbax)

## Notes

Here I want to create a chart with multiple lines, and lean on the [`d3-delaunay` module](https://github.com/d3/d3-delaunay) to ease user interaction in the form of `mouse` events.

## Data

The visualization is inspired by an article describing the [change in influenza activity as a result of the COVID-19 pandemic](https://www.cdc.gov/mmwr/volumes/69/wr/mm6937a6.htm?s_cid=mm6937a6_w). The article highlights how the selected countries (United States, Australia, Chile and South Africa) reported a considerable decrease in the number of positive cases of influenza, and links the phenomenon with the measures and precautions put into place to cope with the recent pandemic.

Data is collected from the [WHO Influenza Surveillance Outputs](https://www.who.int/influenza/resources/charts/en/) considering:

- Australia

- week 14 to 31, so to analyze the colder period of the year (mid-autumn to winter)

- years 2017 to 2020

- number of positive and negative tests, all subtypes combined

## Data

Before creating the line chart, it is necessary to update the data with the percentage of positive cases, shown on the `y` axis. To this end, I decided to store the tests in a `dataset` variable, and create `data` with the new value.

```js
const data = dataset.map(...)
```

`d3.format` is useful to limit the numbers after the decimal point, while `Object.asssign` helps to extend the object describing each week with the new property.

_Please note:_ creating a different variable is ultimately a preference, and it is very well possible to modify the original set.

```js
dataset.forEach(...)
```

## Line Chart

The visualization is created in an `<svg>` element with an arbitray width and height.

With a rectangle element `<rect>`, the goal is to provide a solid backround.

```js
svg
  .append('rect')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('fill', '#fff');
```

This works as a quick, rough way to ultimately mask element, as any shape using the matching color would effectively hide the elements drawn before it.

With a series of group elements `<g>` then, the idea is to create containers for the different parts of the chart.

```js
const axesGroup = group.append('g');
const legendGroup = group.append('g');
const linesGroup = group.append('g');
```

In this manner it is also possible to modify the order of the different parts, just by changing the order in which the groups are appended. To draw the lines behind the axes, for instance, it is enough to have `linesGroup` precede `axesGroup`.

```js
const linesGroup = group.append('g');
const axesGroup = group.append('g');
```

### Scales

Scale are essential to map the data horizontally and vertically.

Horizontally, the graph is set to describe the numbered weeks, so that is useful to rely on a `scaleBand`.

```js
const xScale = d3
  .scaleBand()
  .domain(data[0].tests.map(({ week }) => week))
  .range([0, width]);
```

The scale divides the `[0, width]` space in sections of equal width.

Vertically, the chart displays the percentages of positive tests, and it would be possible to consider a `[0, 1]` range. Ultimately though, I decided to use the maximum percentage. This choice is bound to influence how data is perceived, but it is helpful to show smaller differences (it also allows additional practice with array functions and `d3.max`).

```js
const percentageMax = d3.max(
  data.map(({ tests }) => d3.max(tests, ({ percentage }) => percentage))
);
```

To leave enough whitespace above the tallest percentage, I decided to then round the number up to the nearest tenth. A percentage of `0.43` would create an upper threshold of `0.5`.

```js
d3.format('.1f')(percentageMax + 0.05);
```

While the specific dataset doesn't include a percentage greater than `0.95`, it is finally helpful to cap the value at `1`.

```js
d3.format('.1f')(Math.min(1, percentageMax + 0.05));
```

### Axes and Legend

On the basis of the scales, the chart includes the axes on the left and to the bottom of the chart. The idea is to show the labels without ticks, and a series of grid lines spanning the chart's width. It is worth mentioning that the `<path>` element describing the axis itself is modified so to have the line match the size of these grid lines.

```js
xAxisGroup
  .select('path.domain')
  .attr('d', `M -${margin.left} 0 h ${width + margin.left}`);
```

Past the axes, a basic legend includes the years and the matching color. The color is actually set in the `data` variable, so to use the `hsl` code later in the visualization as well.

```js
const data = dataset.map(({ year, tests }, i, { length }) => ({
  color: `hsl(${i * (360 / length)}, 70%, 50%)`,
  // year, and tests
}));
```

### Lines

`d3.line` maps the data for each year, considering the week for the `x` coordinate, and the percentage for the `y` dimension.

```js
const line = d3
  .line()
  .x(({ week }) => xScale(week) + xScale.bandwidth() / 2)
  .y(({ percentage }) => yScale(percentage));
```

Incrementing the `x` coordinate by half the band width of the scale is but a choice to center each point of the line in the respective band.

The function receives the object for the different lines, and produces the syntax necessary to the `d` attribute of the path elements `<path>`.

## Highlight

Before introducing Delaunay's triangulation, creating an overlay for mouse interaction, it is worth describing what is actually shown following mouse interaction, and how.

I decided to dedicate a section of the line chart to the point being highlighted.

```js
const highlightGroup = group.append('g');
```

In this group I store three elements: a `<circle>`, initialized without a radius, but later updated to overlay one of the line charts, and two `<text>` labels to provide illustrate the specific data point.

I prefer this approach instead of adding a `<div>` container to work as a tooltip. The most immediate gain is that it is no longer necessary to consider the position of the tooltip, or whether the tooltip hides sections of the line charts.

## Delaunay

It is first necessary to convert the `data` collection to a one dimensional array. This is because `d3.Delaunay.from` works by sectioning the area of the line chart according to an array of points.

Since the array is ultimately used to include `path` elements, it is however necessary to discuss what type of information to store in each item of the array.

A first approach is to have each object describe every single variable for any given week.

```js
/* 
[
{ color, year, week, positive, negative, percentage },
]
*/
const dataDelaunay = data.reduce(
  (acc, { color, year, tests }) => [
    ...acc,
    ...tests.map((test) => Object.assign({}, { color, year }, test)),
  ],
  []
);
```

When the mouse hovers on a specific `<path>` element, it is sufficient to then extract the values directly from the data bound to the object.

```js
.on('mouseenter', (event, { color, year, week, positive, negative, percentage }) => {
}
```

A second approach is to build the one dimensional array with the data strictly necessary for the triangulation, considering `week` and `percentage`, and to later identify the data point, through `year` and once again `week`.

```js
/* 
[
{ year, week, percentage },
]
*/
const dataDelaunay = data.reduce(
  (acc, { year, tests }) => [
    ...acc,
    ...tests.map(({ week, percentage }) =>
      Object.assign({}, { year }, { week, percentage })
    ),
  ],
  []
);
```

It is only following the `mouseenter` events that the script looks for the color and other variables, identifying the values in the original `data` collection.

```js
.on('mouseenter', (event, { year, week }) => {
  const { color } = data.find(d => d.year === year);
  const { positive, negative, percentage } = data
    .find(d => d.year === year)
    .tests
    .find(test => test.week === week);
}
```

Ultimately, I decided to adopt the second approach, but the topic is open to debate.

Regardless of the contents of `dataDelaunay`, `d3.Delaunay.from` builds the triangulation accepting the one dimensional array, and by specifying the points on the `x` and `y` axes.

```js
const delaunay = Delaunay.from(
  dataDelaunay,
  (d) => xScale(d.week),
  (d) => yScale(d.percentage)
);
```

The actual triangles are then created with `delaunay.voronoi`, by specifying the desired area.

```js
const voronoi = delaunay.voronoi([0, 0, width, height]);
```

With this setup, `voronoi` finally provides a few helper structures:

- `voronoi.render()` provides the syntax for the `d` attribute of the path element showing how the area is sectioned

- `voronoi.renderBounds()` provides a similar output, but for the boundaries of the area

- `voronoi.renderCell(i)` provides a similar output, but for a specific triangle

I decided to include the instructions necessary to show Delaunay's triangulation, but comment out the specific lines, as they are not useful for the actual visualization. For the visualization and mouse interaction, it is enough to consider `voronoi.renderCell(i)`. The function allows to include the `<path>` elements which are then used to consider mouse interaction.

```js
delaunayGroup
  .append('g')
  .selectAll('path')
  .data(dataDelaunay)
  .enter()
  .append('path')
  .attr('opacity', 0)
  .attr('d', (d, i) => voronoi.renderCell(i));
```

It is considering the `mouseenter` event on these `<path>` elements, that the visualization is updated (in the manner described in the previous section).

```js
delaunayGroup
  // previous snippet
  .append('path')
  .attr('opacity', 0)
  .attr('d', (d, i) => voronoi.renderCell(i))
  .on('mouseenter', () => ())
```

## Final Touches

Instead of using the `d3` object in the script, I ultimately decided to extract the necessary functions at the beginning of the program. This is also useful to highlight which parts of the library are actually being used.

```js
const {
  select,
  format,
  scaleBand,
  scaleLinear,
  max,
  axisBottom,
  axisLeft,
  line,
  curveCatmullRom,
  Delaunay,
} = d3;
```

From this point, it is enough to reference the variable without the `d3.` prefix. The only issue comes in the form of the function generating the line, which needs to be updated to avoid creating a variable with the same name (and in the same scope).

```js
// const line = d3.line();
const lineGenerator = line();
```

While the visualization is updated following the `mouseenter` event, I finally decided not to remove the information included through the highlight group.

```js
.on('mouseleave', () => {
  d3
  .select('#selection')
  .attr('r', 0)

  d3
    .select('#title')
    .text('')

  d3
    .select('#description')
    .text('')
});
```
