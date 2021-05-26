# F1 Race Lap Chart

## [Live Demo](https://codepen.io/borntofrappe/pen/yLMoYbY)

## Notes

The section of the F1 website devoted to [live timing](https://www.formula1.com/en/f1-live.html) shows a rather intriguing visualization in the tab labeled lap chart. The goal of this project is to recreate the chart for the italian grand prix run in 2020. I chose the specific circuit due to the numerous changes in position.

At first I created a single lap chart, but plotting 20 drivers and 53 laps creates a rather noisy visual. To this end I decided to include multiple visualizations, focused on specific intervals.

### filter

The visualization for specific intervals introduces an issue in the form of the driver who do not reach the specific lap. One way to handle these edge cases is by adding an array with one element describing the position of the driver in his lap.

```js
position: position[firstLap]
        ? position.slice(firstLap, lastLap + 1)
        : [position[position.length - 1]],
```

This means the driver is shown with a circle at the very left of the visualization.

A different solution, and the one chosen for the visualization, is to just remove the drivers from consideration.

```js
drivers: data.drivers
        .filter(({ position }) => position[firstLap])
        .map(...);
```

This has the advantage of devoting more space for the remaining athletes.

### id

When hovering on one of the drivers, the idea is to highlight the associated data point by reducing the importance of the other values. This is achieved through the `opacity` of the group element nesting the line, circle and text elements.

Reduce the opacity of the elements with a class of `.driver`.

```js
selectAll(`.driver`).style('opacity', 0.2);
```

Maintain the opacity of the elements with a class matching the short name.

```js
selectAll(`.${short}`).style('opacity', 1);
```

This works, but has the side effect of affecting _every_ visualization. In this particular instance I prefer to focus the attention on the individual charts, and therefore specify a unique identifier through `Math.random()`.

```js
const id = Math.random().toString().split('.').pop();
```

The idea is to use the digits after the decimal point in the class definition.

```js
.attr('class', d => `driver-${id}`);
```

Similarly for the short name.
