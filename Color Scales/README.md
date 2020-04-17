# Color Scales

## Notes

`d3-scale-chromatic` offers several options to create a color palette. With this demo I set out to explore the module, and highlight the different types of scales you can set up with it.

## Github Contributions

Here I use a _continuous_ scale.

```js
const colorScale = d3.scaleSequential(d3.interpolateGreens);
```

The function provides a darker and darker shade of green as you approach the end of the `[0, 1]` range.

```js
colorScale(0); // rgb(247, 252, 245)
colorScale(1); // rgb(0, 68, 27)
```

This makes the scale a prime candidate to map data returned from the `Math.random()` function.

### Domain

The default domain is `[0, 1]`, but as with any other scale, you can modify this value with the `.domain` function.

```js
const colorScale = d3.scaleSequential(d3.interpolateGreens).domain([0, 5]);
colorScale(1); // rgb(211, 238, 205)
```
