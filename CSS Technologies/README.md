# [CSS Technologies](https://codepen.io/borntofrappe/full/qBKNPXY)

Recreate one of the visualization from [the 2021 state of CSS survey](https://2021.stateofcss.com/en-US/technologies/css-in-js) highlighting CSS technologies with animated line charts.

## Data

`data` repeats the following structure for every label.

```js
const data = [
  {
    label: "Styled Components",
    satisfaction: [
      { year: 2019, ranking: 3, percentage: 0.85 },
      // ...
    ],
    interest: [
      { year: 2019, ranking: 2, percentage: 0.677 },
      // ...
    ],
    // ...
  },
  // ...
];
```

For each label you have four criteria: satisfaction, interest, usage, and awareness.

For each criterium you have an array of observations describing a year, ranking and percentage value. Note that the ranking value can be `null`.

## defined

Use the `defined` method in the line generator function. Since the ranking value can be `null` the method allows to draw a line only for the desired values.

```js
const line = d3.line().defined((d) => d.ranking !== null);
```

## Key

For each data point add an identifier based on the label.

```js
const key = label.replace(/\s/g, "");
```

Remove whitespace characters since the value is used to distinguish SVG elements by `id`. Whitespace characters seem to break the attribute's functionality.

## Marker

In an earlier version the script relied on a `<marker>` element to extend the lines slightly before and after the actual points. However, the stroke set on the path is not picked up by the defined shape. This ultimately means you'd need to define multiple markers, one for each colored line.

<!-- prettier-ignore -->
```js
data.forEach(({ key, color }) => {
  const marker = defs
    .append("marker")
    .attr("id", `marker-${key}`)
    //...

  marker
    .append("path")
    .attr("fill", "none")
    .attr("stroke", color)
    //...
});
```

The approach is feasible, but ultimately I decided to just add the line and then two additional segments, extending horizontally around the original shape.

<!-- prettier-ignore -->
```js
groupsDataLines.append("path").attr("d", line);

groupsDataLines
  .append("path")
  .attr("class", "start")
  //...

  groupsDataLines
  .append("path")
  .attr("class", "end")
  //...
```

You do need to update the position of all segments, but you are able to style the linees directly and in the same way (stroke, stroke width and so forth).

## Transition

As long as the `d` attribute for the `<path>` has the same number of points the `.transition` method is all that it's necessary to animate the curvy segment.

<!-- prettier-ignore -->
```js
groupsDataLines
  .select("path")
  .transition(transition)
  .attr("d", line);
```

## Interaction

To expand the interactable area each line is repeated with a much larger stroke.

<!-- prettier-ignore -->
```js
groupsInteraction
  .append("path")
  .attr("stroke-width", scaleY.bandwidth())
  .attr("d", (d) => line(d[option]))
  //...
```

For the segments before and after the curvy portion refer to the rectangles which follow the path. The two `<rect>` element are sized to have the same vertical spread.

<!-- prettier-ignore -->
```js
groupsInteraction
  .append("rect")
  .attr("class", "start")
  .attr("height", scaleY.bandwidth())
  // ...

groupsInteraction
  .append("rect")
  .attr("class", "end")
  .attr("height", scaleY.bandwidth())
  // ...
```

Change the opacity of the group to highlight the overlay visuals.

```js
groupsInteraction.attr("opacity", "0.2");
```

Remember to also update the shapes when the visualization is itself updated, to preserve the correct position the overlays.

Use the key to target the selected data point.

```js
d3.select(`g#${key}`);
```

Ultimately the approach is to de-emphasize all values (reuced opacity, hidden details) and emphasize the selection (original opacity, larger scale and thicker stroke).
