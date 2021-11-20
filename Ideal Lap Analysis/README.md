# Ideal Lap Analysis

## [Live Demo](https://codepen.io/borntofrappe/pen/YzxMKXj)

## Notes

A recent article [on the F1 website](https://www.formula1.com/en/latest/article.5-things-we-learned-from-friday-practice-at-the-qatar-grand-prix.77yVf82ZjGfBNa5SnBCi5B.html) analysing the Friday practice session for the Qatar Grand Prix describes the ideal lap with a few visualizations. The goal of this project is to first create the visualization and second gather them in a single project.

### Dotplot

The first type of chart is a variation of a lollipop chart, itself a variation of a barplot. Instead of bars, instead of lines culminating in circles, the idea is to plot only the circles at the coordinate specified by the lap time.

### Barplot

The more conventional bar plot highlights the gap to the ideal lap.

### Analysis

The previous demos coalesce into a dashboard made of three separate `<svg>` element. There could be an argument for incorporating all visuals in the same parent SVG, but I believe this approach provides more flexibility. By having separare containers the layout is deferred to CSS and it's possible to configure the charts using responsive best practices. In terms of D3, I also believe it's easier to create multiple visualizations, as you don't have to structure and over-engineer the `<svg>` element and the dimensions for each separate component.

The script includes two functions responsible for the individual visualizations. Each function receives an object detailing a few defining fetures, like a title, label and the data itself. To accommodate for different types of data the logic for the dotplot is expanded to to receive an array of objects with a `key` and `value`. The band scale is also updated to sort the data according to the value, making it possible to position the drivers from fastest to slowest.

Both visualizations are also improved in terms of accessibility, adding a `<title>` element, the `tabindex` attribute to allow keyboard focus on the SVG, wrapping group element and the group elements for the individual data points and helpful ARIA attributes.

It is important to note that in terms of accessibility, and in the previous state, the order of the SVG elements did not match the visual order, correct thanks to the scale.

```js
const dataGroups = dataGroup.selectAll("g").data(data);
```

In the script the sorting happens when the data is bound to the elements, but it could also happen at the top of the body of the function.

```js
const dataGroups = dataGroup
  .selectAll("g")
  .data([...data.sort((a, b) => xAccessor(a) - xAccessor(b))]);
```

Just be careful sorting the input data in place, as it would modify the original array.
