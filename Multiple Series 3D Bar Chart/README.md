# [Multiple Series 3D Bar Chart](https://codepen.io/borntofrappe/full/jOKZbqM)

Recreate one of the examples the [datavizproject](https://datavizproject.com/data-type/3d-bar-chart/) highlights with regards to a _Multiple Series 3D Bar Chart_.

## Data

[metoffice.gov.uk](https://www.metoffice.gov.uk/research/climate/maps-and-data/uk-climate-averages/) highlights climate average through different stations on english soil. The idea is to consider 5 stations in the _Greater London_ area, and highlight the differences between the stations' recordings.

## Data massaging

`data` is an array of objects, each with has five properties:

- `Station`, the name of the station

- `Distance from London`

- `Max temperature`, `Min temperature` and `Rainfall`, three array of values for the corresponding metric

`months` is an array of 12 items describing the month of a calendar year.

`metrics` is a hard-coded object detailing the differences between metrics. Each is highlighted with a custom interpolator function (the color of the bars), as well as a dedicated domain and range (for the scale functions).

For the purposes of the visualization it is useful to have `Max temperature`, `Min temperature` and `Rainfall` as array of objects instead of numbers. `dataViz` creates such a construct, accompanying each number with a month.

```diff
-[62.93, 49.09
+[{month: 'Jan', value: 62.93}, {month: 'Feb', value: 49.09}
```

In this manner you position the individual points on the basis of the month, not index, which helps with the rendering order. Indeed the idea for each series is to draw the bars starting from the last one.

```js
const groupsBar = groupsData.selectAll("g").data((d) => [...d[key]].reverse());
```

## Isometric

You can draw an isometric tile by having a `<path>` element where the horizontal segment is twice as long as the vertical straight.

```html
<path d="M 0 0 l 10 5 10 -5 -10 -5" />
```

You then draw a bar drawing a vertical line upwards.

```html
<path d="M 0 0 l 10 5 10 -5 0 -50 -10 -5 -10 5" />
```

This is the basic idea used in the script, implemented with variables to compute the horizontal segments. The only difference is that, since there are more months than stations, a 2:1 ratio tends to skew the bars. With this in mind the bar is drawn in two steps, with the bottom left and top right segments longer than the remaining two sides.

```js
const h1 = width / 3;
const h2 = width - h1;
const v1 = h1 / 2;
const v2 = h2 / 2;
```

The maximum height of the bars — `elevation` — depends on the height of the SVG and the value of the vertical segments.

The segments for the individual bars — `g1` and `g2` - depend on the horizontal segments _and_ the number of bars (eventually I create an additional step `gp1` and `gp2` to add padding around the bars).

## Offsets

Given the segments of the bars — `g1` and `g2` — `offsets1` and `offsets2` create two separate arrays for the position of the bars. Again, the idea is to use the isometric perspective, translating the bar in the x and y dimension by increments of `g1`, `g1 / 2` and `g2`, `g2/ 2`.

## Property

To change the option displayed on the `select` element you need to use the `property()` method, not `attr()`.

```js
select.property("value", key);
```

## Update

Once you change the data source the `join` method helps to manage the enter, update, exit selections of the ticks and labels describing the elevation.

```js
groupElevation
  .selectAll("g")
  .data(ticksElevation)
  .join(
    (enter) => {},
    (update) => {},
    (exit) => {}
  );
```

- enter: add a line and label

- update: reposition the existing `<group>`, update the label of the existing `<text>`

- exit: remove the associated `<group>`

For `groupData` there is no difference in the number of elements bound to the bars. In this instance "all" you need is to update the existing `<path>` elements.
