# Parallel sets

Create a visualization similar to [parallel sets](https://datavizproject.com/data-type/parallel-sets/)

## Data

The scripts includes the six teams competing in the rugby tournament _Six Nations Championship_, from year 2000 to year 2022. Each year shows the teams in order, from first to last.

## Sankey sets

You can map data with parallel sets with `d3-sankey`. Parallel sets can actually be thought as a special case of a Sankey diagram, where you have an equal number of nodes for each step, the same weight value for the connections and a link connecting each node once.

Starting from the input data the script creates three collections: `nodes`, `links` and `years`. To explain the implementation, however, consider the following test case.

Given an array of nodes with a unique `id` and ana array of links connecting the first two with the latter grouping.

```js
const nodes = [{ id: 0 }, { id: 1 }, { id: 2 }, { value: 3 }];
const links = [
  { source: 0, target: 3, value: 1 },
  { source: 1, target: 2, value: 1 },
];
```

Create a Sankey graph with `d3.sankey`.

```js
const sankey = d3.sankey();
```

Use `.nodeSort` to enforce a specific order — without this arrangement `d3` would sort the nodes to draw a straight line from node 0 to 3, from 1 to 2, defeating the purpose of parallel sets.

```js
const sankey = d3.sankey().nodeSort((a, b) => a.id - b.id);
```

Create the graph with the sankey generator function.

```js
const graph = sankey({ nodes, links });
```

The object includes two arrays: `nodes` and `links`. Use `nodes` to draw rectangles with the values added by D3 (`x0`, `x1`, `y0`, `y1`).

```js
.append("rect")
  .attr("x", (d) => d.x0)
  .attr("y", (d) => d.y0)
  .attr("width", (d) => d.x1 - d.x0)
  .attr("height", (d) => d.y1 - d.y0);
```

Use `links` to draw ribbons from the now updated `source` and `target` nodes. To draw the links with straight lines, instead of relying on d3 built-in links functions, use the position of the two nodes.

```js
.append("path").attr("d", (d) => {
  const { source, target } = d;
  const { x1: xStart, y0, y1: y3 } = source;
  const { x0: xEnd, y0: y1, y1: y2 } = target;

  return `M ${xStart} ${y0} ${xEnd} ${y1} ${xEnd} ${y2} ${xStart} ${y3}`;
});
```

## Nodes and links

To draw nodes for the teams across the years, to draw links connecting the same team throughout the editions, create an identifier in the form of `${team}-${year}`. The `id` is enough to create separate nodes. For the edges connect a node with a subsequent year, `${team}-${year+1}`.

## Top to bottom

The example explained in the [sankey sets](#sankey-sets) section draws the parallel sets left to right, given a specified width and height.

```js
d3.sankey()
  .nodeSort((a, b) => a.id - b.id)
  .size([width, height]);
```

To change the flow of the elements to move the sets top to bottom you need to update a few options. First, configure the sankey diagram to position the elements according to the height.

```js
d3.sankey()
  .nodeSort((a, b) => a.id - b.id)
  .size([height, width]);
```

Second, re-consider the drawing instructions. In this top to down perspective the `x` values describe the vertical coordinates, while `y` values the horizontal position.

For the nodes.

```js
.append("rect")
  .attr("x", (d) => d.y0)
  .attr("y", (d) => d.x0)
  .attr("width", (d) => d.y1 - d.y0)
  .attr("height", (d) => d.x1 - d.x0);
```

For the edges.

```js
.attr("d", (d) => {
    const { source, target } = d;
    const { y0: x0, y1: x1, x1: yStart } = source;
    const { y1: x2, y0: x3, x0: yEnd } = target;

    return `M ${x0} ${yStart} ${x1} ${yStart} ${x2} ${yEnd} ${x3} ${yEnd}`;
  })
```
