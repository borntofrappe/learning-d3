# Area Spread

<!-- ## [Live Demo]() -->

Inspired by [this article](https://www.lemonde.fr/les-decodeurs/article/2020/05/28/deconfinement-la-forte-hausse-du-trafic-cyclable-a-paris-en-2020-en-trois-graphiques_6041056_4355770.html) highlighting the growth in bike traffic due to the de-confinement, create an area chart stressing the difference between two lines.

## Data

Consider the data from Google Trends and the interest in the search terms `apples` and `oranges`. Prefer a seven day period to analyze a smoother evolution in the interest of both keywords.

A note on the data, downloaded in a `.csv` format. To map the string and values in an array of objects, lean on the following regular expression:

```js
const regex = /(\d{4}-\d{2}-\d{2}T\d{2}),(\d{2,3}),(\d{2,3})/;
```

In VSCode, include the groups in the following format:

```js
const format = `{\n\tdate: '$1',\n\tapples: $2,\n\toranges: $3\n},`;
```

Finally, wrap the result in square brackets.

## Visualization

Looking at the inspiring article, consider adding the following features:

- a legend atop the line chart

- a pattern in the area chart describing the gap

- horizontal grid lines for the different values

- vertical grid lines separating each day

- lines highlighting the biggest gap for each day. For these lines, use a `<marker>` element to point at the two data sets.
