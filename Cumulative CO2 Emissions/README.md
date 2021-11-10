# Cumulative CO2 Emissions

## [Live Demo](https://codepen.io/borntofrappe/pen/VwzBZgB)

## Notes

[lemonde.fr](https://www.lemonde.fr/les-decodeurs/article/2021/11/06/cop26-visualisez-les-emissions-cumulees-de-dioxyde-de-carbone-par-pays-depuis-1850_6101202_4355770.html) recently published a striking visualization on cumulative CO2 emissions, ranked by countries from 1850 up to 2021. The concept is taken directly from an article from [Carbon Brief](https://www.carbonbrief.org/analysis-which-countries-are-historically-responsible-for-climate-change).

The goal of this project is to replicate the visualization, animating the bar chart to change the size, position and text of the different entries with each passing year.

## Data

Data is stored in a giant object describing the emissions for each country and for each year.

```json
const data = { 
  1850: { "Argentina": 38.24680873, "Australia": /**/ },
  1851: { "Argentina": 77.93477308, "Australia": /**/ },
}
```

In the script, however, it is helpful to have a reference for the current and previous level of emissions.


```json
const data = { 
  1850: { "Argentina": {
    current: 38.24680873,
    previous: 38.24680873,
  }
  /**/ },
  1851: { "Argentina": {
    current: 77.93477308,
    previous: 38.24680873,
  }
}
```

This structure allows to tween between the numerical values with `textTween`, discussed in a later section.

## Transition

In the body of `plotData()` it is helpful to create a reference to a transition, so to have the different elements animated with the same duration and easing.

```js
const transition = d3.transition()
  .duration(500)
  .ease(d3.easeLinear);
```

The reference is also helpful to animate the visualization on a loop. At the bottom of the function it is possible to listen on the `end` event on the unified transition.

```js
transition.on("end", () => {
  // plot data for the following year
}
```

A couple of things worth remembering:

- `d3.transition` returns a transiton selection

  This explains why the groups for the enter selection are stored in a variable and then transitioned
    
  ```js
  const enterGroups = enter.append("g");
  enterGroups
    .transition(transition)
  ```

  If you were to chain the transition method `enterGroups` would not describe the group elements

- you need to initialize the transition ni the body of the `plotData` function

  ```js
  function plotData() {
    const transition = d3.transition()
  }
  ```

  This is because, as [the docs describe](https://github.com/d3/d3-transition#the-life-of-a-transition):

  > after ending, the transition is deleted from the element, and its configuration is destroyed
  >
  > Attempting to inspect a transition after it is destroyed throws an error with the message “transition not found”

## Text transition

[`d3-transition`](https://github.com/d3/d3-transition#transition_textTween) allows to animate strings with the `textTween` function.

```js
text
  .transition(transition)
  .textTween()
```

Chained on a transition, the function receives a _factory_ to interpolate to the desired end value. In the project the goal is to tween between the previous level of emissions and the current one. The function provides a value `t` updated in the `[0, 1]` range

```js
textTween((d) => (t) => {
  //
})
```

Knowing this the level of emissions is updated adding the increment multipled by `t`.

```js
return previous + (current - previous) * t
```

Thanks to `d3.format` it is then possible to round the number.

## Button

Instead of immediately running the animation the idea is to provide a button and race the bars as the button is clicked.

```js
button.on("click", () => {
  // plot data
})
```

The button is positioned above the visualization, and removed following the click event. It would be possible to use the `function` keyword to retrieve a reference to the element, but since version 6 the event provides the same value in `e.target`.

```js
button.on("click", (e) => {
  d3.select(e.target).remove()
})
```