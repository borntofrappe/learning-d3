# Lines and Delaunay

<!-- ## [Live Demo]() -->

## Notes

Here I want to create a chart with multiple lines, and lean on the [`d3-delaunay` module](https://github.com/d3/d3-delaunay) to ease user interaction in the form of `mouseover` events.

## Data

The visualization is inspired by an article describing the [change in influenza activity as a result of the COVID-19 pandemic](https://www.cdc.gov/mmwr/volumes/69/wr/mm6937a6.htm?s_cid=mm6937a6_w). The article highlights how the selected countries (United States, Australia, Chile and South Africa) reported a considerable decrease in the number of positive cases of influenza, and links the phenomenon with the measures and precautions put into place to cope with the recent pandemic.

Data is collected from the [WHO Influenza Surveillance Outputs](https://www.who.int/influenza/resources/charts/en/) considering:

- Australia

- week 14 to 31, so to analyze the colder period of the year (mid-autumn to winter)

- years 2017 to 2020

- number of positive and negative tests, all subtypes combined

## Data

Before creating the line chart, it is necessary to massage the data to compute the percentage of positive cases, shown on the `y` axis. To this end, I decided to store the dateset in a `dataset` variable, and create `data` with the new value.

```js
const data = dataset.map(...)
```

`d3.format` is useful to limit the numbers after the decimal point, while `Object.asssign` helps to extend the object describing each week with the new property.

_Please note:_ creating a different variable is ultimately a preference, and it is very well possible to modify the original set of values.

```js
dataset.forEach(...)
```
