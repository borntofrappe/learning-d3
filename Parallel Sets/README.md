# Parallel sets

Create a visualization similar to [parallel sets](https://datavizproject.com/data-type/parallel-sets/)

## Data

Table results from the Six Nations competition, starting from the year 2000 with the incorporation of Italy.

## Sankey ribbons

The goal is to ultimately map countries with a visualization similar to a sankey diagram.

Use `d3.sankey` to position an array of nodes. To force a specific order sort the nodes specifically.

```js
const nodes = [{ id: 0 }, { id: 1 }, { id: 2 }, { value: 3 }];

const sankey = d3.sankey().nodeSort((a, b) => a.id - b.id);
```

To draw the links with straight lines, instead of relying on d3 built-in links functions, use the position of the source and target nodes.

```js
.join("path")
.attr("d", (d) => {
const { source, target } = d;
const { x1: x0, y0, y1: y3 } = source;
const { x0: x1, y0: y1, y1: y2 } = target;

return `M ${x0} ${y0} ${x1} ${y1} ${x1} ${y2} ${x0} ${y3}`;
})
```
