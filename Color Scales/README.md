# Color Scales

## Notes

`d3-scale-chromatic` offers several options to create a color palette. With this demo I set out to explore the module, and highlight the different types of scales you can set up with it.

## Scattered symbols

Three different data sets are highlighted in a scatter plot. I use the `d3-shape` module to map the data points with a variety of symbols, and a discrete color scale to differentiate the visuals in color.

```js
const colorScale = d3.schemeCategory10;
```

`schemeCategory10` provides an array of colors. You can then use the array in an ordinal scale to map a set of categories to the individual picks.

```js
const symbols = ["circle", "square", "wye", "cross"];
const colorScaleScatter = d3.scaleOrdinal(d3.schemeCategory10).domain(symbols);
```

For the symbol, the API uses two attributes: `size` and `type`. The first one is set globally on the symbol generator.

```js
const symbol = d3.symbol().size(82);
```

The second one is updated according to the input type. Annoyingly enough, the library uses types as `d3.symbolCircle` and `d3.symbolWye`, with camelCase notation.

## Github contributions

Here I map an arbitrary number of data points to a series of squares. This to replicate the layout of Github contributions. In terms of colors, I use a _continuous_ scale for a range of green colors.

```js
const colorScaleGithub = d3.scaleSequential(d3.interpolateGreens);
```

The function provides a darker and darker shade of green as you approach the end of the `[0, 1]` interval.

```js
colorScaleGithub(0); // rgb(247, 252, 245)
colorScaleGithub(1); // rgb(0, 68, 27)
```

This makes the scale an excellent way to map the values returned from the `Math.random()` function. The default domain is `[0, 1]`, but as with any other scale, you can modify this value with the `.domain` function.

```js
const colorScaleGithub = d3.scaleSequential(d3.interpolateGreens).domain([0, 5]);
colorScaleGithub(1); // rgb(211, 238, 205)
```
