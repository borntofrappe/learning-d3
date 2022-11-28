# [Perlin-like Noise](https://codepen.io/borntofrappe/full/PoaBoQd)

Show one way to create Perlin-like noise by overlapping a series of functions with random values.

## Stepper

The script injects three elements in the `body` of the document: a header to introduce the project, the SVG in which to add and animate the visualization and a div "control panel". In the div container the idea is to add a heading and paragraph to illustrate the steps, a button to progress through the process.

The approach is rather tentative, but with each interaction the idea is to:

1. hide the control panel

2. implement the transition/animation involved in the step

3. show the control panel with the instructions which follow

By setting the visibility to `hidden`, by attaching the `{once: true}` flag to the event listener for the button element, each action happens once.

## Transition

The `.transition` method allows to interpolate between multiple values. Create an instance to have multiple elements in sync, animated at the same time.

```js
const transition = d3.transition().duration(250).ease(d3.easeQuadInOut);

d3.select("path").transition(transition);
d3.select("circle").transition(transition);
```

Chain transitions by repeating the method.

```js
d3.select("circle").transition(transition).transition();
```

Have something happen at the end of the transition thorugh the `end` event.

```js
transition.on("end", () => {
  // what follows
});
```

A world on `pointsNoise`. The array of values is computed looking at the `path` elements point by point, adding together the `y` coordinate. The operation takes some time, which is why the array is computed _before_ it is actually needed, before click event for the respective step.

## Scale

Initialize `scaleX` and `scaleY` as two linear scales which map a domain of `[0, 1]` to the width and height of the SVG. `[0, 1]` is actually the default domain for `d3.scaleLinear()`.

```js
const scaleX = d3.scaleLinear().range([0, width]);
const scaleY = d3.scaleLinear().range([height, 0]);
```

The domain helps to map the vertical coordinate of the point, computed with `Math.random()`, and the horizontal coordinate, a fraction of the arrays' length.

In this manner you can plot the points and associated octaves.

For the noise curve, the added challenge is that the curve is computed point by point, adding the vertical coordinate of the different lines:

1. find the y coordinate with the `getPointAtLength` method, from `0` up to and including `width`

   ```js
   const y = path.getPointAtLength(i).y;
   ```

2. retrieve the `y` value relative to the existing scale with the `.invert` method

   ```js
   const y = scaleY.invert(path.getPointAtLength(i).y);
   ```

Since the `y` value might exceed the `[0, 1]` interval, update the domain with the new maximum value.

```js
const max = d3.max(pointsNoise, (d) => d.y);
scaleY.domain([0, max]);
```
