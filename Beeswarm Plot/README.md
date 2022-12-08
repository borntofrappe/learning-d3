# [Beeswarm Plot](https://codepen.io/borntofrappe/full/RwJdomB)

Create a beeswarm plot. Avoid overlaps with `d3.forceSimulation`.

## Data

The plot maps the goals scored in the Saudi Arabia 2022 World Cup, up to and including the round of 16. Each object describes the teams and goals scored in two separate strings. Goals part of the penalty shoot-out are not included.

## forceSimulation

`dataNodes` is structured to compute the final `x` and `y` coordinates based on the horizontal scale and the arbitrary mid-height line. Create a simulation based on the array.

```js
const simulation = d3.forceSimulation().nodes(dataNodes);
```

Add forces to:

1. avoid collision between the data points

   ```js
   .force("collision", d3.forceCollide().radius(radius))
   ```

   The `<use>` elements are sized to be twice as wide and twice as tall compared to the radius, but the graphic replaces a `<circle>` element

2. position the nodes according to the pre-computed values

   ```js
   .force("x", d3.forceX().x((d) => d.x))
   .force("y", d3.forceY().y((d) => d.y))
   ```

For the beeswarm plot you want the position of the nodes at the end of the simulation. Ordinarily, you'd listen to the `ticked` event, animating the data points to the eventual coordinate.

```js
simulation.on("ticked", () => {
  groupsGoals.attr("transform", (d) => `translate(${d.x} ${d.y})`);
});
```

For the final values, however, execute the `.tick` method until the simulation is complete.

```js
while (simulation.alpha() > simulation.alphaMin()) {
  simulation.tick();
}
```

`alpha` describes a value to decide when to stop the simulation. As the simulation progresses, the value diminishes, and the process stops when the value becomes smaller than `alphaMin`.

Past the `while` loop directly position the nodes with the `x` and `y` values.

```js
groupsGoals.attr("transform", (d) => `translate(${d.x} ${d.y})`);
```

As a small refinement, add the `while` loop after the `<svg>` element. In this manner you avoid a layout shift in the HTML document.
