# Force Simulation

Practice demo for the `d3-force` module.

## Notes

Inspired by [this particular slide](https://www.lemonde.fr/les-decodeurs/visuel/2020/04/02/coronavirus-a-quoi-sert-le-confinement_6035266_4355770.html#slide=31) from a data visualization [@lemondefr](https://www.lemonde.fr/), the goal is to show a network structure made entirely of circle elements. The idea is to then style more and more circle elements in the same way. Start with the circle at the center of the graph, spread the style to connecting circles, repeat going outwards. This combines two concepts actually: a network graph and a hierarchical structure. If you think about a tree structure, starting with a `root` node and continuing with `children` nodes, the only difference is that the elements are laid in a circular pattern.

### Markup

In terms of markup, here's a first version, subject to change as I figure something better.

```pug
svg
.controls
  button.play (button.pause)
```

### Script

By default, show a network graph entirely made of circle elements. Using a force function, make sure to squish the shapes together, but avoid any overlap still.

In terms of style, set the `fill` to `none` and specify the `stroke` only. The idea of the project was to color the shapes in increments, but relying only on color is not an accessible solution. Using color _and_ filling the circles at the same time allows to highlight the change in a more reliable manner.

Add a `fill` and update the color for the first circle.

As the visualization progresses, consider the children nodes of circle elements that are already colored, and repeat the fill+color update.

### Controls

I thought of refining the controls to allow for a more varied interaction. An interaction which allows to move forwards/backwards and even reset the visualization.

```pug
svg
.controls
  button.previous
  button.reset
  button.play (button.pause)
  button.next
```

However, consider this addition after you've completed the core visualization.

The cited article actually uses the left and right arrow key to update the visualization. Again, consider this step for a later update.

### Icons

Find in the **res** folder the `.svg` files I created for the buttons in the `.controls` container.

### Data

As previously mentioned, the data is inherently hierarchial. To this end, I use a for loop to append a series of objects, each referencing a previous node.

Start with an array describing the root node.

```js
const data = [{ hasStyle: true, generation: 0 }];
```

I might change the name of boolean `hasStyle`, but the idea is to dictate whether the node should be filled and colored. By default, the root node is. `generation` intuitively describes the number behind the node's generation.

Set up a loop which creates a series of objects. The loop is based on two variables: `generations` and `connections`. The first one dictates how many time the code runs in the for loop. The second one how many connections each node should have.

```js
const generations = 4;
const connections = 5;
for (let generation = 0; generation < generations; generation += 1) {}
```

Within the for loop, consider the data points from the current generation.

```js
const generations = 4;
const connections = 5;
for (let generation = 0; generation < generations; generation += 1) {
  const currentGenerations = data.filter((point) => point.generation === generation);
}
```

For each data point in the current generation, create a unique identifier, and a series of objects linked to said identifier.

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

Finally, spread the array in the original `data` structure.

```js
data.push(...connectedGenerations);
```

### Simulation

Let's start with a small step: create a network diagram where each data point is mapped to the outline of circle elements.

`d3.simulation` adds a series of properties to the different data points, already by passing the data set in the function itself.

```js
const simulation = d3.forceSimulation(data);
```

Open the developer console, and logging the data you see that the objects have a few more properties.

```js
console.table(data[3]);
```

| Key        | Value              |
| ---------- | ------------------ |
| parentId   | 0.123016122096959  |
| generation | 1                  |
| hasStyle   | false              |
| id         | 0.4124475271615715 |
| index      | 3                  |
| x          | 10.538470205147267 |
| y          | 13.745568221620495 |
| vy         | 0                  |
| vx         | 0                  |

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

### Forces
