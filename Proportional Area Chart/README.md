# [Proportional Area Chart](https://codepen.io/borntofrappe/full/JjZvpMG)

Recreate one of the examples from [datavizproject](https://datavizproject.com/data-type/proportional-area-chart-half-circle/) for a _Proportional Area Chart (Half Circle)_.

## Data

The script includes sales figures from [bulbapedia](https://bulbapedia.bulbagarden.net). To have some kind of comparison between values I focused on values describing the units sold in Japan after one first week.

- [Ruby and Sapphire](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Ruby_and_Sapphire_Versions#Sales)

- [Diamond and Pearl](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Diamond_and_Pearl_Versions#Reception)

- [Black and White](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Black_and_White_Versions#Sales)

- [X and Y](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_X_and_Y#Reception)

- [Sun and Moon](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Sun_and_Moon#Reception)

- [Sword and Shield](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Sword_and_Shield#Reception)

## Slices

It'd be possible to create two semi-circles by hand, as arcs going around the center. With `d3.pie` and `d3.arc`, however, you find the `d` attribute for any number of slices.

Create an instance of the pie layout function.

```js
const pie = d3
  .pie()
  .value((d) => 1)
  .sort(null);
```

With a constant value you ensure the slices share the same portion of the pie.

Without sorting the slices you ensure the slices are positioned as per the input data.

Create an arc generator function to size the outer radius according to the sales figure.

```js
const arc = d3
    .arc()
    .outerRadius((d) => scaleRadius(d.sales);
```

In the reusable chart you refer to an accessor function, but the point remains. The goal is to change the size of the slices according to the chosen metric.

By default the slices are drawn clockwise, starting at the top. To draw the slices as semi-circles one above the other rotate the group devoted the `<path>` elements.

```js
const groupSlices = groupCenter.append("g").attr("transform", "rotate(-90)");
```

## each

`polarChart` is created as a reusable chart (refer to [Reusable Chart](https://github.com/borntofrappe/learning-d3/tree/master/Reusable%20Chart) to get started with the concept).

To add an instance of the chart you need to pass an element as current selection.

```js
polarChart()(d3.select("article"));
```

With `call`:

```js
d3.select("article").call(polarChart());
```

Since the script adds multiple instances of the `<article>` element, iterate through the D3 selection with the `.each` method.

```js
articles.each(function (d) {});
```

Use a regular function so that `this` refers to the bound element.

```js
articles.each(function (d) {
  d3.select(this).call(polarAreaChart());
});
```
