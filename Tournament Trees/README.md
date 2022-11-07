# [Tournament Trees](https://codepen.io/borntofrappe/full/oNyzrBJ)

Display the top and bottom bracket for a tennis tournament side by side.

## Links

- [2019 NCAA Men's Basketball Bracket](https://dribbble.com/shots/6217707-2019-NCAA-Men-s-Basketball-Bracket) inspires the design of the visualization

- [2022 Rolex Paris Masters – Singles Draws](https://en.wikipedia.org/wiki/2022_Rolex_Paris_Masters_%E2%80%93_Singles#Top_half) provides the data for the draws

## Data

`brackets` includes the draws for the Paris Masters 2022, separating the top and bottom halves in an object.

For the tree structure, however, you would need a hierarchy where the draws are the nested values of the tree, the leaves.

```js
{
    name: ['', ''],
    children: [
        { name: ["Alcaraz", "Bye"]},
        { name: ["Karatsev", "Nishioka"],},
    ]
}
```

As a work-around, however, I resorted to create a `complete` binary tree with `d3.stratify`.

Populate `dataIds` so that you have a root node and then each node nests two additional objects.

| id  | parentId |
| --- | -------- |
| 0   | 1        |
| 0   | 2        |
| 1   | 3        |
| 1   | 4        |
| 2   | 5        |
| 2   | 6        |
| 3   | 7        |
| ... | ...      |

With this setup use `d3.stratify` to create the root node, referring to the different identifiers.

```js
d3.stratify()
  .id((d) => d.id)
  .parentId((d) => d.parentId);
```

## Leaves

Given the complete binary tree of a given depth the leaves provide as many elements as necessary to add the bracket data. Add the elements for the leaves.

```js
groupText.selectAll("text").data(leaves).enter().append("text");
```

Refer to the bracket by index.

```js
.append("text")
.text((_, i) => bracket[i])
```

Ultimately I add `tspan` elements for the names in each bracket, but the leaves logic remains the same.

## Arcs

The idea is to have an arc extend from top to bottom. For the coordinates:

- consider the first leaf as a source

- consider the last leaf as a target

Horizontally the two coincide, so extract the starting x coordinate from either node.

Vertically consider the distance between the two nodes.

```js
const dy = target.x - source.x;
```

Refer to the `x` property since the tree is laid horizontally, and the coordinates are flipped.

With these values you can already draw the semicircle.

```js
const arc = `M ${sx} ${sy} a ${dy / 2} ${dy / 2} 0 0 ${sweepFlag} 0 ${dy}`;
```

`sweepFlag` is included as a variable since the two brackets are one the mirror of the other, and you need to draw the arc now on the right side, now on the left.

As a small refinement I extracted the length of the final segment of the links. In this manner I have the arc start after the line delimiting the players.

## Clips

To avoid drawing the links past the arc include a `clipPath` element.

```js
const clipPath = defs.append("clipPath").attr("id", `clip-path-${half}`);
```

In the clip repeat the same syntax as that describing the arc.

```js
clipPath.append("path").attr("d", arc);
```

Be sure to add a unique `id` so that the two trees are clipped by the respective area.

```js
defs.append("clipPath").attr("id", `clip-path-${half}`);
```
