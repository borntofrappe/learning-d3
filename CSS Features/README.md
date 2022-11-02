# [CSS Features](https://codepen.io/borntofrappe/full/qBKZNyb)

## Goal

Recreate a visualization from [the state of CSS 2021 survey](https://2021.stateofcss.com/en-US/features/) positioning data points with circular packing or again in a grid.

## Data

Refer to `data.csv` for the values I ultimately use in the script. The structure is repeated with an array of objects to avoid using `d3.csv`, an async function which requires a live server. To create the array I logged the values in the console once and copied the resulting object.

```js
(async () => {
  const data = await d3.csv("data.csv", (d) => {
    return {
      Label: d["Label"],
      "Know about it": parseFloat(d["Know about it"]),
      "Have used it": parseFloat(d["Have used it"]),
      Feature: d["Feature"],
    };
    //
  });

  console.log(data);
})();
```

## Pack

[`d3-hierarchy`]() module explains the need for a hierarchy, a root node for the `d3.pack` function.

The format is similar to the following object structure.

```js
{
  name: "CSS",
  children: [
    {
      name: "Layout",
      children: [{ name: "Grid" }, { name: "Flexbox" }]
    },
    {
      // ...
    }
  ]
}
```

Starting from the input data, which includes the single observations, add an object and the observations in the topmost `children` array, further separating the values by _Feature_.

It'd be possible to build the root node with a call to `d3.group`.

```js
SSSSSSSSVELTE;
```

But I chose a two-step sequence to first extract the features. In this manner I maintain a reference for the keys for the color scale.

Regardless of implementation, use `d3.hierarchy` to process the data and add attributes such as `depth` and `height`.

```JS
const root = d3
  .hierarchy({
    name: "CSS",
    children,
  })
```

To compute the value of the nodes refer to the _"Know about it"_ field, which ultimately gives the number for the size of the circle (the largest circle, to be technical).

```js
hierarchy.sum((d) => d["Know about it"] || 0);
```

Use `d3.pack` to add additional attributes based on the root node.

```js
const dataPack = d3.pack().size([size, size])(root);
```

In dataPack the objects have an `x`, `y` coordinate as well as a value `r` for the radius of the circle.

Use the `.leaves` method to extract the bottom nodes, in this instance the data points.

```js
const dataValues = dataPack.leaves();
```

To draw circles for the wrapping features use the `.descendants` method, which refers to all nodes, and filter for a specific depth, in this instance 1.

```js
const dataFeatures = dataPack.descendants().filter(({ depth }) => depth === 1);
```

## position

`d3.pack` adds the coordinates for the pack structure, but you also need the position for a grid layout, where the nodes are placed according to a key, in columns and rows.

One way to achieve this feat is by directly modifying the objects stored in `dataValues`.

Describe the structure of the grid, and in this instance the (same) number for the columns and rows.

```js
const dimensions = Math.ceil(dataValues.length ** 0.5);
```

Find the size of the individual cell in the grid.

```js
const cellSize = size / dimensions;
```

Sort the values according to a specific key.

```js
dataValues.sort((a, b) => b.data["Know about it"] - a.data["Know about it"]);
```

Iterate through the sorted collection and use the index to find the column and row.

```js
.forEach((d, i) => {
  const column = i % dimensions
  const row = Math.floor(i / dimensions)
})
```

The x and y coordinate depend on the size of the cell (making sure to center the circles as well).

```js
const x = column * cellSize + cellSize / 2;
const y = row * cellSize + cellSize / 2;
```

Store the coordinates in the object itself, here in an arbitrary `position` property.

```js
d.position = {};
d.position["Know about it"] = { x, y };
```

Ultimately I repeat the process for the other key, and also repeat the pack coordinates in the `position` object. The `position` object finally has three sets of coordinates for the three available options.

```js
position: {
  'Grouped': { x, y },
  'Know about it': { x, y },
  'Have used it': { x, y },
}
```

What you then need is update the position of the data points, circles and labels, extracting the x, y values for the selected key.

> I am aware sorting dataValues array modifies the data structure. However, the forEach loop also updates the data to include the coordinates, and for the relatively small demo I preferred not to create yet another array

## Option

Add a data-key attribute to the buttons.

```js
controls.append("button").text("Grouped").attr("data-key", "Grouped");
```

In this manner you can listen to the click event on all buttons and react to the relevant option.

```js
const key = d3.select(this).attr("data-key");
```

## classed

Use the `.classed` method to:

1. check if the click event is caught on the already active selection. You update the visualization only when a different option is picked.

```js
if (d3.select(this).classed("active")) return;
```

2. remove the class from the previous selection

```js
controls.select("button.active").classed("active", false);
```

3. add the active class on the clicked element

```js
d3.select(this).classed("active", true);
```
