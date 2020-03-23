# Radial Path(s)

With this project I set out to practice with several features of the D3 library, and most notably the functions `d3.lineRadial` and `d3.areaRadial` from the `d3-shape` module. Ultimately I plan to create something that is teaching _and_ useful, but in the build-up, I managed to create a couple more demos.

- **Static** attempts to use the radial functions in the most straightforward manner

- **Experiment** takes the static foundation and experiments with a constantly updated set of data.

## Data Viz

The idea is to plot the number of deaths registered in Italy due to the recent Coronavirus spread. This using data from [the Covid19 API](https://covid19api.com/), but starting from a fixed set of data. A fetch request can follow to update the visualization if necessary.

A radial line chart is here included next to a normal line chart to describe two facets of the dataset, namely its cumulative, and marginal distribution.

## Shape Functions

The line and area functions work similarly to the non-radial counterpart. You just need to adjust your thinking from `x` and `y` to:

- `angle`: the rotation around the `[0, Math.PI * 2]` circle

- `radius`: the distance from the center

The center is assumed to be where the path is within the `viewBox` of the SVG, so be sure to translate the shape accordingly.

While the radius can use a linear scale then, the angle takes advantage of an ordinal scale, so to map each successive data point to a value on the defined `Math.PI * 2` spectrum.

## Helpful links

- [lineRadial Docs](https://github.com/d3/d3-shape#lineRadial)
