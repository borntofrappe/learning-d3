# Using D3

[_Fullstack D3_](https://www.newline.co/fullstack-d3) highlights the D3 library with several data visualizations and argues for different frameworks towards the end of the book. Taking inspiration from this decision, the goal of this folder is to create several visualizations and then re-create the d3-only solution with different utilities, like React and Svelte.

## Line Chart

The line chart highlights search interest for the word **Pikmin** in the US, considering data from [Google Trends](https://trends.google.com/trends/explore?date=2020-01-01%202021-11-04&geo=US&q=pikmin).

### [Svelte](https://svelte.dev/repl/67a634161efd4788871ec3db5cca9181?version=3.44.1)

With respect to the D3-only version the biggest change relates to how the data is mapped to HTML elements. Instead of appending element to D3 selection the nodes are included directly in the DOM.

```svelte
<svg
  viewBox="0 0 {dimensions.width} {dimensions.height}"
  width="{dimensions.width}"
  height="{dimensions.height}"
>
  <path d="{lineGenerator(data)}" fill="none" stroke="currentColor" />
</svg>
```

Svelte allows to rapidly inject the logic in the attributes.

Past this crucial difference the Svelte demo relies on the same functions with one exception: axis. D3 generates the axis, ticks and labels with methods from the `d3-axis` module.

```js
const yAxis = axisLeft(yScale);
```

The functions are called with a selection, like a group element `<g>` and the library directly injects the markup.

```js
groupAxis.append("g").call(yAxis);
```

You can customize the axis from the generator function.

```js
const yAxis = axisLeft(yScale).ticks(4);
```

You can also customize the elements after the fact.

```js
groupAxis.selectAll("line").remove();
```

But fundamentally D3 manages the axis for you. With Svelte you don't have access to the selection object and you need an alternative. In the demo I relied on the `.tick` function available on both linear and time scales.

```js
const yTicks = yScale.ticks(4); // [0 20 40 60 80 100]
```

The function provides an array of intervals separating the domain of the continuous scales.

From this starting point the idea is to use an `#each` block to iterate through the landmarks and add the desired visuals — grid lines for the `x` axis and labels for both.

```svelte
{#each yTicks as yTick}
  <g>
  <!-- ticks -->
  </g>
{/each}
```

## Scatterplot

The scatterplot maps the waiting time between eruptions and the duration of the same natural phenomenon for [Old Faithful](https://en.wikipedia.org/wiki/Old_Faithful), a popular geyser in Yellowstone Park.

### [React](https://codesandbox.io/s/old-faithful-eruptions-8cuke)

Similarly to the line chart and the Svelte counterpart, React allows to use the same D3 functions for the scales and axis. What changes is how the markup is produced, with JSX syntax.

To include a collection of elements create an array of elements.

```jsx
const circles = data.map((d, i) => (
  <circle
    cx={xScale(xAccessor(d))}
    cy={yScale(yAccessor(d))}
    r="5"
    fill="currentColor"
    opacity="0.5"
  />
));
```

In the JSX returned by the component it is then possible to include the array directly.

```jsx
return (<g>
  {circles}
</g>)
```

Ultimately React raises a warning to include a `key` and differentiate the elements. For the simple project, I find it sufficient to include a short label with the  index of the observation.

```jsx
const circles = data.map((d, i) => (
  <circle
    key={`circle-${i}}`}
    />
))
```
