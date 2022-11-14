# [Reusable Chart](https://codepen.io/borntofrappe/full/BaVZdMo)

Create a chart and plot multiple instances following the post [_Towards Reusable Charts_](https://bost.ocks.org/mike/chart/).

Consider [Anscombe's quartet](https://en.wikipedia.org/wiki/Anscombe's_quartet) to draw four instances of the scatterplot and regression line.

## Setup

Start with a few constants describing the individual chart (`width`, `height`, `margin`).

Describe the overall dimension considering two instances, horizontally and vertically (`totalWidth` and `totalHeight`).

For the scales's domain you could compute the maximum on the basis of the input data, but I decided instead to consider all datasets at once. This is to have charts share the same metric (`domainX`, `domainY`).

Past these instruction, given the reusable function `chart`, all you need is to execute its logic in a section of the larger SVG.

```js
chart()(svg.append("g"));
```

With the helpful `call` method, which passes the current selection to the input function:

```js
svg.append("g").call(chart());
```

## Chart

The `chart` function is technically invoked and executed with additional methods.

```js
chart()
  .index(i)
  .width(width)
  .height(height)
  .data(data)
  .margin(margin)
  .domainX(domainX)
  .domainY(domainY);
```

This is much similar to D3 functions such as d3.axisBottom.

`chart` itself returns a function.

```js
function chart() {
  function my(selection) {}

  return my;
}
```

In the body of the `my` function add the logic for the visualization (in this instance the logic for scatterplot and regression line).

To configure the visualization, its width, height, and more generally the values chained as the function is called, with 1. the fact that functions are objects and 2. getter/setter functions.

Add the options in the `chart` function.

```js
function chart() {
  let index;
  let width;
  let height;
}
```

Set/get the values with a helper function.

```js
my.width = function (value) {
  if (!arguments.length) return width;

  width = value;
  return my;
};
```

Returning the instance of the function is essential to chain methods. You return the current selection for successive methods.
