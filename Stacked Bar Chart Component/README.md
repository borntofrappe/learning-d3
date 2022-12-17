# [Stacked Bar Chart Component](https://codepen.io/borntofrappe/full/wvxwjGY)

Create a component function to map data with an interactive stacked bar chart. Transition the elements whenever the function is called with a different set of arguments.

## Input

The issue I personally have with _stacked_ bar charts is that it can be difficult to understand how the individual categories change over time (except the bottom-most one perhaps).

One way to cope with the comparison: allow to select and highlight a specific category.

## Implementation

`stackedBarChartComponent` takes inspiration from [the source code for the `d3-axis` module](https://github.com/d3/d3-axis/blob/main/src/axis.js).

> being my first attempt at a component function which handles a transition and a relatively complex SVG structure, the code is bound to have several areas of improvement

### Enter update exit

The component function is called on a group element.

```js
// highlight every key
group.call(stackedBarChart.keys(keys));
```

The challenge is that you ultimately want to update the instance of the function and repeat the call to the chosen container.

```js
// highlight a specific key
group.call(stackedBarChart.keys([keys[0]]));
```

With this in mind you cannot just add elements on the input selection through the `.append` method. You need to handle the D3's pattern of enter, update, and exit selections.

To understand how consider the section relative to the axis (roughly line 38):

- use `selectAll` to target group elements with a specific class

  ```js
  let groupXAxis = selection.selectAll("g.axis-x").data([null]);
  ```

  Use `let` since the variable is going to be updated throughout the rest of the function

- bind a solitary value — `[null]` — since the axis is meant to be one and one only

  ```js
  let groupXAxis = selection.selectAll("g.axis-x").data([null]);
  ```

- update the variable to consider the enter and update selections together

  ```js
  groupXAxis = groupXAxis.merge(
    groupXAxis
      .enter()
      .append("g")
      .attr("class", "axis-x")
      .attr("transform", `translate(0 ${height})`)
  );
  ```

  In the variable you now have a reference to the solitary group element, whether appended with the enter selection or found throuh the update counterpart.

  You can actually create an intermediate step, storing the enter selection if you need more clarity.

  ```js
  groupXAxisEnter = groupXAxis
    .enter()
    .append("g")
    .attr("class", "axis-x")
    .attr("transform", `translate(0 ${height})`);

  groupXAxis = groupXAxis.merge(groupXAxisEnter);
  ```

  This is actually the approach used for the group elements relative to the data points, since you need a specific handle on the new elements.

  - finally, inject the axis elements as you would with a regular axis, invoking the instance of `d3.axisBottom` on the group element.

  ```js
  groupXAxis.call(xAxis);
  ```

### Context

Consider how you would ultimately transition axis functions generated through the `d3-axis` module.

```js
groupXAxis.transition().call(xAxis);
```

Since the `.transition` method returns a transition selection, the axis function here receives a transition, not the group element.

---

Remember the `.call` method passes the current selection to the input function.

```js
const transition = groupXAxis.transition();

xAxis(transition);
```

---

In light of this:

- declare the function's parameter as `context`, reflecting the different types of input

  ```js
  const stackedBarChartComponent = (context) => {
  ```

- retrieve `selection`, the element, either as the value of `context.selection()` or through the `context` variable itself

  ```js
  const selection = context.selection ? context.selection() : context;
  ```

  In the moment you pass a transition, this transition has a `.selection` method to retrieve the element. When you pass an element however, there is no such reference.

- proceed with the logic [of the previous section](#enter-update-exit), adding elements on `selection` like `groupXAxis`

- if `context` and `selection` differ, therefore `context` refers to the transition and `selection` to the element in which the transition takes place, use the transition

  ```js
  if (context !== selection) {
    groupXAxis.transition(context);
  }
  ```

- finally, update the reference to `groupXAxis` so that the variable refers to the transition

  ```js
  groupXAxis.call(xAxis);
  ```

  The instruction is essential if you consider how you finally update the axis' elements.

  ```js
  groupXAxis.call(xAxis);
  // xAxis(groupXAxis);
  ```

  In this manner the axis function receives the transition if there is such a transition, or the element if the `if` statement is not executed.

### Practice makes perfect

For the vertical axis the logic repeats the steps discussed for the x axis:

- use `selectAll` to bind a single value

  ```js
  let groupYAxis = selection.selectAll("g.axis-y").data([null]);
  ```

- update the reference to consider the existing/updated element

  ```js
  groupYAxis = groupYAxis.merge(
    groupYAxis.enter().append("g").attr("class", "axis-y")
  );
  ```

- with a transition, apply the smooth change and update the reference to consider said transition

  ```js
  if (context !== selection) {
    groupYAxis = groupYAxis.transition(context);
  }
  ```

- call the axis generator function

  ```js
  groupYAxis.call(yAxis);
  ```

### Data

For the elements bound to the data points, the logic is slightly more convoluted. This is because you need to map two layers of elements: the group for the stacks and the rectangles for the bars in each stack.

- use `selectAll` to find the group elements with a specific class

  ```js
  let groupsSeries = selection.selectAll("g.series");
  ```

- this time bind the collection describing the data generated through `d3.stack()`

  ```js
  // const series = stack.keys(keys)(data);
  let groupsSeries = selection.selectAll("g.series").data(series);
  ```

  Use `key` so that you bind the group elements specifically to the input category (`key` being a value added by the stack function)

  ```js
  let groupsSeries = selection.selectAll("g.series").data(series, (d) => d.key);
  ```

- explicit the enter and exit selections

  ```js
  const groupsSeriesEnter = groupsSeries.enter();
  const groupsSeriesExit = groupsSeries.exit();
  ```

  `groupsSeriesEnter` refers to new series, `groupsSeriesExit` to series no longer represented in the input data

From this basis, you now have:

1. new group elements, without nested elements

2. existing group elements, potentially with a different number of rectangles

3. old group elements

Without a transition you would:

- add rectangles on the enter selection

  ```js
  groupsSeriesEnter
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect");
  ```

- remove rectangles from the exit selection

  ```js
  groupsSeriesExit.selectAll("rect").attr("y", height).attr("height", "0");
  ```

  Ultimately you remove the group elements altogether, so the instruction might be redundant.

  ```js
  groupsSeriesExit.remove();
  ```

- handle the update selection and its nested three selections through the `join` method

  ```js
  groupsSeries
      .selectAll("rect")
      .data((d) => d)
      .join(
          enter => (),
          update => (),
          exit => ()
  )
  ```

  Just like you have three selections of group elements, you have three selections of rectangle elements.

  For new and old rectangles (enter and exit) repeat the logic of the enter and exit groups.

  ```js
  enter => enter.append("rect")...

  exit => exit.remove()
  ```

  For existing rectangles update the relevant attributes (position and dimensions)

  ```js
  (update) =>
    update.attr("x", "").attr("y", "").attr("width", "").attr("height", "");
  ```

With a transition you ultimately repeat the instructions, but choose how you want to animate the elements. In the specific demo, for instance, I decided to have new rectangles grow from the bottom of the chart, and old elements shrink toward the same spot. Just take notice of the final line in the body of the `if` statement.

```js
groupsSeriesExit = groupsSeriesExit.transition(context);
```

As in previous instances, the instruction is necessary to have the variable refer to the transition. Here specifically it is necessary to "stall" the removal of the old group elements, until the nested rectangle elements are transitioned outside of sight.

```js
groupsSeriesExit.remove();
```
