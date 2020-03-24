# Radial Path(s)

With this project I set out to create a visualization with the `d3.lineRadial` and `d3.areaRadial` functions. Ultimately I plan to create something that is teaching _and_ useful, but in the build-up, I managed to create a couple more demos.

- **Static** attempts to use the radial functions in the most straightforward manner

- **Experiment** takes the static foundation and experiments with a constantly updated set of data.

## Links

### Live Demos

- [The Seasons of 2019](https://codepen.io/borntofrappe/full/jOPeKZp)

- [Experiment](https://codepen.io/borntofrappe/full/BaNOYgq)

### Docs

- [d3-format](https://github.com/d3/d3-format)
- [d3-timeFormat](https://github.com/d3/d3-time-format)
- [d3-scale](https://github.com/d3/d3-scale)
- [d3-shape](https://github.com/d3/d3-shape), most prominently [d3.lineRadial](https://github.com/d3/d3-shape#lineRadial) and [d3.areaRadial](https://github.com/d3/d3-shape#areaRadial)

## Notes

The idea is to plot the google trends for the four seasons. [Here's a URL for the search](https://trends.google.com/trends/explore?date=2019-01-01%202020-01-01&geo=US&q=spring,summer,fall,winter).

The function generating the syntax for the path element works similarly to the non-radial counterpart. Instead of using `x` and `y` values however,

```js
const line = d3
  .line()
  .x()
  .y();
```

It depends on two different arguments:

```js
const lineRadial = d3
  .lineRadial()
  .angle()
  .radius();
```

- `angle` describes the rotation around the center. Its value is in radians, so that you need to map the input data to the `[0, Math.PI * 2]` range

- `radius` dictates the distance from the center
