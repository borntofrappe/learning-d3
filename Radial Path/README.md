# Radial Path(s)

With this project I set out to create a visualization with the `d3.lineRadial` and `d3.areaRadial` functions. Ultimately I plan to create something that is teaching _and_ useful, but in the build-up, I managed to create a couple more demos.

- **Static** attempts to use the radial functions in the most straightforward manner

- **Experiment** takes the static foundation and experiments with a constantly updated set of data.

## Data Viz

The idea is to plot the google trends for the four seasons. [Here's a URL for the search](https://trends.google.com/trends/explore?date=2019-01-01%202020-01-01&geo=US&q=spring,summer,fall,winter).

## Markup

> A bit of planning a long way goes

```pug
div root
  h1 title
  p copy
  svg area chart
```

## D3

Beside the `lineRadial` and the `d3-shape` module, the project takes advantage of several features of the D3 library.

- to format the search result and the dates, `d3-format` and `d3-timeFormat`

- to parse the dates, `d3-timeParse`

- to map the data on the radial line, and within the boundaries set by the SVG element, `d3-scale`. Specifically using a linear and a time scale.

### d3.lineRadial

The function generating the syntax for the path element functions similarly to the non-radial counterpart. Instead of using `x` and `y` values however,

```js
const line = d3
  .line()
  .x()
  .y();
```

The radial function depends on two different arguments:

```js
const lineRadial = d3
  .lineRadial()
  .angle()
  .radius();
```

- `angle` describes the rotation around the center. Its value is in radians, so that you need to map the input data to the `[0, Math.PI * 2]` range

- `radius` dictates the distance from the center

## Docs

- [d3-format](https://github.com/d3/d3-format)
- [d3-timeParse](https://github.com/d3/d3-time-parse)
- [d3-timeFormat](https://github.com/d3/d3-time-format)
- [d3-scale](https://github.com/d3/d3-scale)
- [d3-shape](https://github.com/d3/d3-shape), most prominently [d3.lineRadial](https://github.com/d3/d3-shape#lineRadial) and [d3.areaRadial](https://github.com/d3/d3-shape#areaRadial)
