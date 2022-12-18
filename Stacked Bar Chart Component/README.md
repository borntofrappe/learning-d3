# [Stacked Bar Chart Component](https://codepen.io/borntofrappe/full/wvxwjGY)

Create a component function to map data with an interactive stacked bar chart. Apply a transition if the function is called with a d3 transition instead of a d3 selection.

## Goal

Map data with a stacked bar chart to highlight the overall trend for several categories. Allow to select a category to examine the change of the individual components.

## How to use

Create an instance.

```js
const stackedBarChart = stackedBarChartComponent();
```

Inject the chart in a D3 selection.

```js
group.call(stackedBarChart);
```

Update and call as needed.

```js
stackedBarChart.height = 500;
group.call(stackedBarChart);
```

Apply a transition.

```js
group.transition().duration(500).call(stackedBarChart);
```

Set different values to customize the chart and map the desired data:

- `data`: an array of objects with repeated keys, which you intend to highlight with stacked values

- `keys`: an array of strings describing which key you want to stack in the input data

- `width` and `height`: numbers for the dimensions of the chart

- `xAccessor`: a function to decide which value is used to position the series horizontally

  The component uses an instance of `d3.scaleBand()` to position the arrays produced with `d3.stack`.

  By default I set the accessor function to use the index in the arrays, but to highlight a different value, say a date, you pass an accessor function which points to the specific property.

- `xFormat`: a function to format the labels for the ticks of the horizontal axis

- `valueFormat`: a function to format the labels for the ticks of the vertical axis

- `colorScale`: a function which maps the keys to a color value.

  I prefer not to create the scale in the component since you might want to enforce a color scheme for all the keys and then visualize only a subset, but with the same colors.

---

## Source code

In the script I take inspiration from [the source code for the `d3-axis` module](https://github.com/d3/d3-axis/blob/main/src/axis.js).
Being my first attempt at a component function which handles a transition, as well as a relatively complex SVG structure, the code is bound to have several areas of improvement.

### Getting started

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

What is more, you want to optionally apply a transition, similarly to how you'd transition an axis produced with the `d3-axis` module.

```js
group.transition().call(stackedBarChart.keys([keys[0]]));
```

### Enter-update-exit

Consider the section relative to the axis (roughly line 38):

- use `selectAll` to target group elements with a specific class

  ```js
  let groupXAxis = selection.selectAll("g.axis-x").data([null]);
  ```

  Use `let` since the variable is going to be updated throughout the rest of the function.

- bind a solitary value since the axis is meant to be one and one only

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

  In the variable you now have a reference to the solitary group element, whether appended with the enter selection or found through the update counterpart.

  You can actually create an intermediate step, storing the enter selection, if you need more clarity.

  ```js
  groupXAxisEnter = groupXAxis
    .enter()
    .append("g")
    .attr("class", "axis-x")
    .attr("transform", `translate(0 ${height})`);

  groupXAxis = groupXAxis.merge(groupXAxisEnter);
  ```

  - inject the axis elements as you would with a regular axis, invoking the instance of `d3.axisBottom` on the group element.

  ```js
  groupXAxis.call(xAxis);
  ```

### Transition

Once more consider how you would transition axis functions generated through the `d3-axis` module.

```js
groupXAxis.transition().call(xAxis);
```

Since [`selection.transition()`](https://github.com/d3/d3-transition/blob/main/README.md#selection_transition) returns a transition, the axis function here receives a transition, not the group element.

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
  const stackedBarChartComponent = (context) => {};
  ```

- retrieve `selection`, the element, either as the value of `context.selection()` or through the `context` variable itself

  ```js
  const selection = context.selection ? context.selection() : context;
  ```

  In the moment you pass a transition, this object has a `.selection` method to retrieve the current selection. When you pass an element however, there is no such reference.

- proceed with the logic [of the previous section](#enter-update-exit), adding elements on `selection` like `groupXAxis`

- if `context` and `selection` differ, therefore `context` refers to the transition and `selection` to the element in which the transition takes place, use the transition

  ```js
  if (context !== selection) {
    groupXAxis.transition(context);
  }
  ```

- update the reference to `groupXAxis` so that the variable refers to the transition

  ```js
  groupXAxis = groupXAxis.transition(context);
  ```

  The instruction is essential if you consider how you finally update the axis' elements.

  ```js
  groupXAxis.call(xAxis);
  ```

  In this manner the axis function receives the transition if there is such a transition, or the element if the `if` statement is not executed.

### groupYAxis

For the vertical axis the script repeats the steps for the horizontal axis:

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

For the elements bound to the data points, the logic is slightly more convoluted. This is because you need to map two layers of elements: the group for the stacks and the rectangles for the bars in each stack. Furthermore, you need to handle the transition of the rectangles.

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

3. old group elements, with a set of rectangle children

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
  groupsSeriesExit.selectAll("rect").remove();
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

With a transition you ultimately repeat the instructions, but choose how you want to animate the elements. In the specific demo, for instance, I decided to have new rectangles grow from the bottom of the chart, and old elements shrink toward the same spot.

That being said, take notice of two additional lines in the body of the `if` statement evaluating that `context` describes a transition, not a selection:

1. the first line

   ```js
   selection.selectAll("*").interrupt();
   ```

   I found that rapidly changing the categories has the effect of stacking transitions. It might happen that you end up with an empty chart, where the rectangles are added and then immediately removed.

   `interrupt` has the effect of stopping a transition, in this instance all transitions, to consider only new changes.

2. the final line

   ```js
   groupsSeriesExit = groupsSeriesExit.transition(context);
   ```

   As in previous instances, the instruction is necessary to have the variable refer to the transition. Here specifically it is necessary to "stall" the removal of the old group elements, until the nested rectangle elements are transitioned and removed.

   ```js
   groupsSeriesExit.remove();
   ```
