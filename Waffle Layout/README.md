# Waffle Layout

Create a function to create the layout for [a waffle chart](https://en.wikipedia.org/wiki/Pie_chart#Square_chart_/_Waffle_chart).

## Layout

The implementation of the layout function is inspired by the functionality of `d3.pie()`.

`layout.js` shows a proof-of-concept with one of the most straightforward instances of the `waffle` function.

```js
const waffleLayout = waffle().flip(true);
```

By default the function expects an array of values.

```js
waffle([37, 10, 7, 3]);
```

The function returns an array, by default an array of 100 values where the data points are represented in numbers: 37 items for 37, 10 for 10 and so forth. Past the values the items describe a `null` value.

Each item is an object, the input (or `null`) value is stored in the `data` field. Past this value you find:

- `x`, `y`, for the position

- `width`, `height`, for the size

- `rx`, `ry`, for the (possibly) rounded corners

## Options

The `waffle` function is configurable through several options.

| Option       | Default    | Feature                                     |
| ------------ | ---------- | ------------------------------------------- |
| `size`       | `[10, 10]` | width and height                            |
| `dimensions` | `[10, 10]` | columns and rows                            |
| `padding`    | `0.1`      | percentage padding relative to cell size    |
| `rounding`   | `0.1`      | percentage rounding relative to waffle size |
| `reverse`    | `false`    | add values from the end of the array        |
| `flip`       | `false`    | add values right to left                    |
| `accessor`   | `d => d`   | data accessor                               |

## Script

To test out the feature the script includes the data for total population, in millions and percentage, considering UN regions. The values are taken directly from [the 2022 UN survey](https://population.un.org/wpp/).
