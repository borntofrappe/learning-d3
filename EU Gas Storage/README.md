# [EU Gas Storage](https://codepen.io/borntofrappe/full/JjZNoRB)

Create a radial line chart after a visual [from Reuters Graphics](https://www.reuters.com/graphics/UKRAINE-CRISIS/EUROPE-GAS/zdvxozxzopx/).

## Data

As per the page cited above the data refers to the [aggregated gas storage for the EU area](https://agsi.gie.eu/). The script includes values from the first of January 2017, so to plot values for the latest year and the average values for the year prior to the specific year.

The goal is to ultimately have an array of objects, each with a date and value. The two are mapped to and angle and radius value as in the `lineRadial` function.

## Radial line

For both the line (path without a fill and a stroke) and the area (path with fill), refer to an instance of `d3.lineRadial`

```js
const lineRadial = d3
  .lineRadial()
  .angle((d) => scaleAngle(d.date))
  .radius((d) => scaleRadius(d.value));
```

Given the input array the function leans on the `date` to create the relevant angle as per the `scaleAngle` scale.

```js
const scaleAngle = d3
  .scaleLinear()
  .domain(domainDates)
  .range([0, Math.PI * 2]);
```

`value` maps a percentage to a distance from the center.

```js
const scaleRadius = d3.scaleLinear().domain([0, 100]).range([0, radius]);
```

## Time

Use `d3.timeMonths` and `d3.timeDays` to create date objects for a specific interval.

In the script specifically `timeMonths` helps to create 12 objects, one for each month in the latest year.

```js
d3.timeMonths(new Date(year, 0, 1), new Date(year + 1, 0, 1));
```

`timeDays` helps to create 365 date objects, again for the same year.

```js
d3.timeDays(new Date(year, 0, 1), new Date(year + 1, 0, 1));
```

Use the 12 instances to plot the labels around the chart. Refer to the 365 dates to compute the average values, so that you consider the values from the previous years on the same day and month.

## Animation

After testing for the prefers-reduced-motion media query the goal is to animate the chart by hiding the elements in groupData and progressively introduce them back:

- animate the line to draw the radial chart point by point

- animate the area, year and latest value in opacity

Since `lineRadial` plots one point for each element in the input array it is sufficient to increase an index value and bind the ever expanding collection to the relevant path.

```js
groupData
  .select("#line")
  .datum((d) => d.slice(0, index))
  .attr("d", lineRadial);
```
