# [Sparkline Component](https://codepen.io/borntofrappe/full/GRGLWoR)

Create a component function to highlight time data with a sparkline.

## Data

Refer to Google Trends for the most searched words for the 2022 year, specifically [for France](https://trends.google.com/trends/yis/2022/FR/) and the section devoted to the most searched recipes.

## import

At the top of the `sparkline` function I decided to import the necessary `d3` functions.

```js
const { timeParse, scaleTime, scaleLinear, extent } = d3;
```

Rather interestingly, you don't have to include `d3.select` as well. When you add the elements on the selection, `selection` is already equipped with the necessary `.append()` method.

## Defaults

The `sparkline` function maps data on the basis of several values.

```js
const sparkline = () => {
  let data;

  let dateAccessor;
  let valueAccessor;
  let domain;

  let width;
  let height;

  let title;
};
```

To add some kind of flexibility, I initialize the arguments with default values. The values are chosen specifically to draw 31 data points for the month of December 2022 and with a value of `50`.
