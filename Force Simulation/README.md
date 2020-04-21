# Force Simulation

Introduction to the `d3-force` module.

## [Live Demo](https://codepen.io/borntofrappe/full/GRpNqpd)

## Notice

Consider using the Canvas API instead of SVG syntax. It should be more viable when the number of data points grows exponentially.

## Notes

Inspired by [this particular slide](https://www.lemonde.fr/les-decodeurs/visuel/2020/04/02/coronavirus-a-quoi-sert-le-confinement_6035266_4355770.html#slide=31) from a data visualization [@lemondefr](https://www.lemonde.fr/), the goal is to show a network structure made entirely of circle elements. The idea is to then style more and more circle elements in the same way. Start with the circle at the center of the graph, spread the style to connecting circles, repeat going outwards. This combines two concepts actually: a network diagram and a hierarchical structure. If you think about the tree structure developed for the **positivity tree** project, the only difference is that the elements are laid in a circular pattern.

### Getting Started

In terms of markup, here's a first version, subject to change as I figure something better.

```pug
svg
.controls
  button.prev
  button.next
```

In terms of visuals, start by showing a network diagram entirely made of circle elements. Set the `fill` to `none` and specify the `stroke` only. Initially, the idea was to color the shapes in increments, but relying only on color is not an accessible solution. Using color _and_ filling the circles at the same time allows to highlight the change better.

Add a `fill` and update the color for the first circle.

As the visualization progresses, consider the circles which are already colored, and repeat the fill color update to neighboring data points.

### Data

As mentioned, the data is inherently hierarchial. To this end, I use a for loop to append a series of objects, each referencing the parent node.

- start with an array describing the root node.

  ```js
  const data = [{ hasStyle: true, generation: 0 }];
  ```

  `hasStyle` dictates whether the node should be filled and colored. `generation` intuitively describes the number behind the node's generation.

- set up a loop which creates a series of objects.

  The loop is based on two variables: `generations` and `connections`. The former describes the number of iterations in the for loop. The latter how many connections each node should have.

  ```js
  const generations = 4;
  const connections = 5;
  for (let generation = 0; generation < generations; generation += 1) {}
  ```

- within the for loop, consider the data points from the current generation.

  ```js
  const generations = 4;
  const connections = 5;
  for (let generation = 0; generation < generations; generation += 1) {
    const currentGenerations = data.filter((point) => point.generation === generation);
  }
  ```

- for each data point, create a unique identifier, and a series of objects linked to this `id`.

  ```js
  currentGenerations.forEach((currentGeneration) => {
    const id = Math.random();
    currentGeneration.id = id;

    const connectedGenerations = Array(connections)
      .fill()
      .map(() => ({
        parentId: id,
        generation: generation + 1,
        hasStyle: false,
      }));
  });
  ```

  The number for the `generation` property is aptly incremented by 1.

- spread the array in the original `data` structure.

  ```js
  data.push(...connectedGenerations);
  ```

Past the for loop, the idea is to have a series of data points connected to one another, and leading up to the root node.

### Simulation

`d3.force` provides a series of function to plot and animate data points in a network diagram. Here however, I'm purely interested in creating a static visualization. With this in mind, `d3.simulation` adds a series of properties to the different data points.

```js
const simulation = d3.forceSimulation(data);
```

Open the developer console, and logging the data you see that the objects have a few more properties.

```js
console.table(data[3]);
```

| Key        | Value               |
| ---------- | ------------------- |
| parentId   | 0.24405985212059123 |
| generation | 2                   |
| hasStyle   | false               |
| id         | 0.03234126595539921 |
| index      | 3                   |
| x          | 10.538470205147267  |
| y          | 13.745568221620495  |
| vy         | 0                   |
| vx         | 0                   |

I modified the `viewBox` to draw elements from the center of the `<svg>` element, so that `x` and `y` can be used directly to position the circle elements.

```js
svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", 4)
  .attr("fill", "none")
  .attr("stroke-width", 1)
  .attr("stroke", "currentColor");
```

In terms of style, I decided to actually use the `currentColor` value, and update the color depending on the value of the boolean.

```js
svg
  // ...
  .append("circle")
  .style("color", (d) => (d.hasStyle ? "tomato" : "inherit"))
  .attr("fill", (d) => (d.hasStyle ? "currentColor" : "none"))
  .attr("stroke-width", 2)
  .attr("stroke", "currentColor");
```

The stroke and fill, if specified, pick up from the color specified through the CSS property.

### Data Binding

Since the circle elements need to be updated, I moved the previous logic in a function.

```js
function plotData(data) {
  svg.selectAll();
  // ...
}
```

The function is called immediately, and then as the data array is modified. With the `join` function learned in a previous project, this is achieved by targeting the `enter` and `update` selection.

```js
function plotData(data) {
   svg
    .selectAll('circle')
    .data(data)
    .join(
      enter => // add elements
      update => // update the necessary attributes
          .style('color', d => (d.hasStyle ? 'tomato' : 'inherit'))
          .attr('fill', d => (d.hasStyle ? 'currentColor' : 'none'))
    );
}
```

The attributes updated in the latter selection boil down to the `color` property and `fill` attribute. These are in fact two values which depend on the input data.

```js
update
  // currentColor
  .style("color", (d) => (d.hasStyle ? "tomato" : "inherit"))
  // fill
  .attr("fill", (d) => (d.hasStyle ? "currentColor" : "none"));
```

### Data Update

To update the data, the idea is to either style every generation past the current one, or remove the style from the current one altogether.

Following a click on the respective buttons:

```js
controlsNext.on('click', function() {}
controlsPrevious.on('click', function() {}
```

Find the relevant number for the generation:

- the first one without style to color the generation past the current one

  ```js
  const { generation } = data.find((point) => !point.hasStyle);
  ```

- the last one with style to remove the current generation

  ```js
  const { generation } = [...data].reverse().find((point) => point.hasStyle);
  ```

And then update the boolean accordingly:

```js
data.forEach((point) => {
  if (point.generation === generation) {
    point.hasStyle = false;
    point.hasStyle = true;
  }
});
```

`true` or `false` once again depending on the direction.

More logic is specified to add a class of `.disabled`, and limit the update in the `[0, generations]` range, but that's substantially all.
