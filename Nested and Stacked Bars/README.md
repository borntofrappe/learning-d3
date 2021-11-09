# Nested and Stacked Bars

## [Live Demo](https://codepen.io/borntofrappe/pen/MWvXjEx)

## Notes

The [Jamstack Community Survey](https://jamstack.org/survey/2021/) argumented the findings with a few visualizations, among which a series of stacked bar charts. For reference consider [the breakout considering job specialization for large websites](https://jamstack.org/survey/2021/#breakout-3).

The goal of this project is to replicate such a visualization focusing on the nested structure:

- one section for each key: "Never", "Sometimes", "Mostly"

- one rectangle (and accompanying label) for each category: "Content Producer", "Back-end" and so forth

## Data binding

The visualization includes one group element for each key

```js
const keyGroups = dataGroup.selectAll("g").data(keys).enter().append("g");
```

Layered on top of this binding, the idea is to nest one group element for the stack considering the numerical values

```js
const stackGroups = keyGroups
  .selectAll("g")
  .data(/* ARRAYS MAKING UP THE STACK */)
  .enter()
  .append("g");
```

## Stack

The essential ingredient for `d3.stack` is the key accessor function. Starting from the example [in the GitHub repo](https://github.com/d3/d3-shape#_stack), the project creates a stack from an array describing the different categories.

```js
// [{ 'Content Producer': 1, { 'Back-end': 18 }, ...]
```

In light of this, the `.keys` function receives the cateogories themselves.

```js
const stackGenerator = stack().keys(["Content Producer", "Back-end" /**/]);
```

The script uses `Object.keys` instead of hard-coding the categories, but the result is ultimately the same.
