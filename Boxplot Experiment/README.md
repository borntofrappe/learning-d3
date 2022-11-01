# [Boxplot Experiment](https://codepen.io/borntofrappe/full/oNybwPB)

## Goal

Recreate the graphic accompanying the Wikipedia page for [the boxplot](https://en.wikipedia.org/wiki/Box_plot) visualization. Technically without `d3.quantile`.

## Data

The values are carried over from the dataset package for the R tool, specifically [_morley_](https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/morley.html).

## Experiments

`data` stores the values in a one dimensional array, but it is helpful to group the observations according to the experiment's number. This to plot five boxplots, each devoted to an experiment.

```js
const dataBoxplots = [...d3.group(data, (d) => d.experiment)];
```

Spreading the map you get an array of 2D arrays, with the number of experiment as the first item, the values as the second.

## Axis & frame

With `d3.axisBottom` and `d3.axisLeft` draw the axis on the bottom and left side.

For the right and top side I am only interested in the line surrounding the visualization. One way to achieve the result, instead of using the corresponding axis generators without ticks, clone the `path` element for the existing axis.

```js
groupAxisX.select("path").node().cloneNode(true);
```

You get an HTML element, which you need to append on a node as well with `appendChild`.

```js
groupAxis.append("g").node().appendChild(/**/);
```

## Quantiles

`d3.quantile` returns an arbitrary quantile for the input array of values. Ultimately you'd use the function for the quartiles, but also the minimum, median, maximum values.

```js
d3.quantile(values, 0);
d3.quantile(values, 0.25);
d3.quantile(values, 0.5);
d3.quantile(values, 0.75);
d3.quantile(values, 1);
```

`d3.ScaleQuantile` creates maps the input values to a collection of discrete values. This means you can pass the data to the domain function, ask to slot the numbers in four possible values [0, 1, 2, 3], and essentially recreate the quantile method.

Call the function with a speed value to find in which "container" it would fall.

```js
scaleQuantile(700); // 0
```

Use the invertExtent method with a container to find the speed values at the beginning and end of the container.

```js
scaleQuantile.invertExtent(0); // [ 650, 850 ]
```

With 4 containers you progressively find the minimum and first quartile, then the first and second (the median), the second and the third, the third and the maximum.
