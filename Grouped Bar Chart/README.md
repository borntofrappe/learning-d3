# [Grouped Bar Chart](https://codepen.io/borntofrappe/full/qByBPWV)

Map repeated observations for multiple categories with a grouped bar chart.

## Notes

The project takes inspiration from an article from [Le Monde](https://www.lemonde.fr/les-decodeurs/article/2022/11/30/coupe-du-monde-2022-quel-est-le-destin-des-premiers-de-chaque-poule-pour-la-suite-de-la-competition_6152373_4355770.html) which considers how the teams finishing first in the group stages continue their path in the FIFA World Cup.

### Scales

To plot a bar for each observation use a band scale, positioning a discrete number of observation into a continuous metric, a size. To plot groups of bars you can repeat the process for said groups.

This is exactly the approach of the script:

1. position the groups with a band scale, in the space devoted to the width of the chart

   ```js
   const positionScale = d3.scaleBand().range([0, width]);
   ```

2. position the bars with another band scale, in the space necessary to draw the group

   ```js
   const positionScale2 = d3.scaleBand().range([0, positionScale.bandwidth()]);
   ```

   Notice the use of the width devoted to the groups, and extracted through the `.bandwidth` method.

### Checkboxes

To add some sort of interaction the script injects a form with several input of type `checkbox`.

After the logic rendering the static visualization, check every input through the `.property` method.

```js
labels.select("input").property("checked", true);
```

> to draw bars only for the selected keys I ultimately relied on vanilla JavaScript, but I am positive there is a way to extract which input is checked through D3 as well

Following the `input` event consider the selected keys by looping through the HTML nodes which are indeed `input` elements of type `checkbox`.

```js
const keys = [...form.node().querySelectorAll('input[type="checkbox"]')]
  .filter((d) => d.checked)
  .map((d) => d.value);
```

What is left is updating the static visualization and the values affected by the keys:

- update the second band scale so that the rectangles are sized relative to the different number of keys

  ```js
  positionScale2.domain(keys);
  ```

- update the linear scale mapping the position and height of the bars with the possibly different maximum value (the value is computed by looping through the input data and considering only the keys extracted earlier)

  ```js
  valueScale.domain([0, valueMax]);
  ```

With the updated scales select all rectangles and bind the data relative to the new keys. Be mindful to add the key as the second argument of the `data` method.

```js
// prettier-ignore
groupsData
  .selectAll("rect")
  .data(arrayOfKeyValuePairs, (d) => d[0])
  .join(/* ... */);
```

## Axis

The project requires specific handling relative to the axis. Considering the value axis in details, the intention is to maintain only a set number of tick values — odd, integer numbers based on the first scale.

```js
const ticks = valueScale.ticks().filter((d) => d % 2 !== 0);
const tickFormat = d3.format("d");

const valueAxis = d3
  .axisLeft(valueScale)
  .tickValues(ticks)
  .tickFormat((d) => tickFormat(d));
```

When you select a subset of keys these might however produce a different domain for the vertical scale.

Following the `input` method and the new selection of keys:

1. find the ticks for the updated value scale

   ```js
   const tickValues = valueScale.ticks();
   ```

2. filter the array to consider only the same values from the original collection

   ```js
   const tickValues = valueScale.ticks().filter((d) => ticks.includes(d));
   ```

3. update the axis's tick values

   ```js
   valueAxis.tickValues(tickValues);
   ```

   > ultimately I update the values in a single line, but the separate variable helps to clarify the process

One final note for the grid lines: notice the use of the `data` method, binding an array of one value.

```js
// prettier-ignore
groupAxisValue
  .selectAll(".tick")
  .selectAll("line")
  .data([null])
  .join('line')
```

The goal is to avoid adding unnecessary lines, to inject a line if necessary _or_ update the line if it already exist.
