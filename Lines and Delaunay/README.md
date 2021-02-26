# Lines and Delaunay

<!-- ## [Live Demo]() -->

## Notes

Here I want to create a chart with multiple lines, and lean on the [`d3-delaunay` module](https://github.com/d3/d3-delaunay) to ease user interaction in the form of `mouseover` events.

## Data

The visualization is inspired by an article describing the [change in influenza activity as a result of the COVID-19 pandemic](https://www.cdc.gov/mmwr/volumes/69/wr/mm6937a6.htm?s_cid=mm6937a6_w). The article highlights how the selected countries (United States, Australia, Chile and South Africa) reported a considerable decrease in the number of positive cases of influenza, and links the phenomenon with the measures and precautions put into place to cope with the recent pandemic.

Data is collected from the [WHO Influenza Surveillance Outputs](https://www.who.int/influenza/resources/charts/en/) considering:

- Australia

- week 14 to 31, so to analyze the colder period of the year (mid-autumn to winter)

- years 2017 to 2020

- number of positive and negative tests, all subtypes combined

## Data

Before creating the line chart, it is necessary to update the data to compute the percentage of positive cases, which is then shown on the `y` axis. To this end, I decided to store the tests in a `dataset` variable, and create `data` with the new value.

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

In this manner it is also possible to modify the order of the different parts, just by changing the order of execution. To draw the lines behind the axes, for instance.

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

Past the axes, a basic legend includes the years and the accompanying color. The color is actually set in the `data` variable, so to use the `hsl` code later in the visualization as well.

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

## Delaunay

### Outlines, boundaries, cells

### Highlight and not tooltip
