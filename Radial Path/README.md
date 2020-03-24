# Radial Path(s)

With this project I set out to practice with several features of the D3 library, and most notably the functions `d3.lineRadial` and `d3.areaRadial` from the `d3-shape` module. Ultimately I plan to create something that is teaching _and_ useful, but in the build-up, I managed to create a couple more demos.

- **Static** attempts to use the radial functions in the most straightforward manner

- **Experiment** takes the static foundation and experiments with a constantly updated set of data.

## Goal

The idea is to plot the number of deaths registered in Italy due to the recent Coronavirus spread. This using data from [the Covid19 API](https://covid19api.com/), but starting from a fixed set of data. A fetch request can follow to update the visualization if necessary.

A radial line chart is here included next to a normal line chart to describe two facets of the dataset, namely its cumulative, and marginal distribution.

## Markup

> A bit of planning a long way goes

```pug
div root
  h1 title
  p copy
  div wrapper
    p brief
    svg line chart
  div wrapper
    p brief
    svg radial line chart
```

## D3

The script makes use of several functions from D3, and most notably `d3.line`, `d3.lineRadial`. There are however other useful methods picked up from the library:

- `format` and `timeFormat`, to format the values and dates scattered throughout the project

- `scaleLinear`, `scaleTime`, to position the elements in the area described by the SVG element

### d3-shape

Feature of this particular project, the radial line chart functions similarly to the non-radial counterpart. Instead of using `x` and `y` values however, the function depends on two different arguments:

- `angle`: the rotation around the `[0, Math.PI * 2]` circle

- `radius`: the distance from the center

Be aware that the point in the SVG element where you append the path element is considered the center of the visualization. In light of this, use group elements or the `viewBox` attribute to translate the shape where needed.

## Docs

- [d3-format](https://github.com/d3/d3-format)
- [d3-timeFormat](https://github.com/d3/d3-time-format)
- [d3-scale](https://github.com/d3/d3-scale)
- [d3-shape](https://github.com/d3/d3-shape), most prominently [d3.lineRadial](https://github.com/d3/d3-shape#lineRadial) and [d3.areaRadial](https://github.com/d3/d3-shape#areaRadial)
