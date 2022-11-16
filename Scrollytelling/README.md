# [Scrollytelling](https://codepen.io/borntofrappe/full/XWYaLZv)

[The Pudding](https://pudding.cool/) frequently creates jaw-drapping visualizations which are updated as you scroll the page. Here's a first attempt implementing a rudimentary scrolling experience with the intersection observer API.

## Data

The script includes 13 sets of x, y coordinates from the [Datasaurus Dozen](https://cran.r-project.org/web/packages/datasauRus/vignettes/Datasaurus.html) dataset. These values illustrate the importance of graphing data and the shortcomings of summary statistics (the sets have very similar values for the means, standard deviations and correlation).

## Datasets

`data` is an object, where every set lists the x and y coordinates in an array.

To ease the visualization, the information is massaged into a `datasets` variable. This is an array where each item has three properties:

1. `label`, the name of the dataset

2. `values`, the array of x, y coordinates

3. `stats`, an array of objects listing metrics with three additional keys

   1. `label`, the stat's name

   2. `value`, the stat's digits highlighted in bold

   3. `excess`, the stat's digits de-emphasized in opacity

   The divide of value and excess is to stress how the dataset have very similar metrics. The excess digits, after the decimal point, change while the "core" value is the same.

   The label also includes a non-breaking space to ensure the different stats are aligned vertically.

## SVG

Start past the two helper functions `scatterPlot` and `detailsPlot` and focus on the `<svg>` element.

Set up the SVG with a series of group elements. This is where you position the scatter plot and the list of statistics.

```js
const groupValues = group.append("g");

const groupStats = group.append("g");
```

Then pass the groups to the helper functions discussed in the next section.

```js
groupValues.call(plotValues);
groupStats.call(plotStats);
```

## Plot

Following the logic from [Reusable Chart](https://github.com/borntofrappe/learning-d3/tree/master/Reusable%20Chart) the two plotting function are responsible for the elements of the actual visuals. The elements are appended on the input selection and are configured per the functions' properties.

```js
const plotValues = scatterPlot().data(values).width(width).height(height);
```

With the scatter plot use the join method to manage the enter and update selection:

- enter: add `circle` elements at the prescribed coordinates

- update: reposition the `circle` elements

With the details plot:

- enter: add a `text` element and the three `tspan` elements to highlight the stat's label, value and excess

- update: update the text of the different `tspan` elements

Once you plot the data once it is sufficient to update the functions' properties.

```js
plotValues.data(values);
plotStats.data(stats);
```

And then call the functions again on the group node.

```js
groupValues.call(plotValues);
groupStats.call(plotStats);
```

## Scroll

Position the SVG element to be fixed in the viewport.

```css
svg {
  position: fixed;
}
```

Add mutiple `<div>` elements which stretch to cover the entire height of the page, and thus force vertical overflow.

```css
#root > div {
  height: 100vh;
}
```

In the script I add as many `<div>` elements as there are datasets. In each container I center an `<article>` element with the datasets' label.

With this setup what you need is to know when the articles enter the viewport.

## Intersection observer

Set up an observer.

```js
const observer = new IntersectionObserver(callback);
```

Observe the HTML elements describing up the datasets by name.

```js
articles.nodes().forEach((node) => {
  observer.observe(node);
});
```

In the callback function consider when an article becomes visible.

```js
const callback = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
    }
  }
};
```

I use a `for .. of` loop to break out of the sequence as soon as an entry is detected as visible.

```js
if (entry.isIntersecting) {
    //...
    break;
}
```

For the intersecting entry consider the index of the dataset added to a data-index attribute

```js
const index = parseInt(entry.target.getAttribute("data-index"));
const { values, stats } = datasets[index];
```

## Supports

Add the instruction for the observer in an `if` statement checking for the feature's support.

```js
if (IntersectionObserver) {
}
```

Only in this instance add the elements causing the scroll and a class on the root node causing the `<svg>` to be fixed.
