# Football Stats

## [Live Demo](https://codepen.io/borntofrappe/pen/eYBeJjL)

## Notes

A more apt title would be _the lackluster success of French teams in the European League competition_.

Inspired by [this article from lemonde.fr](https://www.lemonde.fr/les-decodeurs/article/2018/05/04/marseille-club-francais-recordman-des-finales-europeennes-depuis-1980_5294581_4355770.html), I set out to highlight the highest stage of competition reached by any French team in the European League.

A first visualization replicates the graph proposed in the article, where a series of squares a layered on top of one another to highlight the different stages year by year. I took the liberty of expanding the dataset, but substantially, the visual is the same.

A second visualization, however, presents the same information with a different visual. Here the goal is to focus on individual years, showing the different stages of the competition with a more artsy `<svg>` element.

### D3 V6

One considerable (and breaking) change introduced with the most recent version of D3 relates to how the library manages events. Version 6 deprecates `d3.event`, in favour of an `event` received as the first argument of the callback function. The datum for the selected element is now described by the second argument.

```js
// v5
dataYearGroups.on('mouseenter', function(d) {
  d3.event.x;
  d3.event.y;
}

// v6
dataYearGroups.on('mouseenter', function(event, d) {
  event.x;
  event.y;
}
```

It is also possible to use an arrow function and have access to `this` through `event.currentTarget`, which provides an alternative way to select the element.

```js
dataYearGroups.on('mouseenter', function(event, d) {
  d3.select(this);
}

dataYearGroups.on('mouseenter', (event, d) => {
  d3.select(event.currentTarget);
}
```
