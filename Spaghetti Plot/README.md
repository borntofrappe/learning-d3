# Spaghetti Plot

## [Live Demo](https://codepen.io/borntofrappe/pen/XWawvgw)

## Notes

When a line chart plots multiple variables it is often described as a [spaghetti plot](https://www.data-to-viz.com/caveat/spaghetti.html); the term is meant to be discouraging, as the information becomes more difficult to parse than individual, dedicated lines.

With this project the goal is to create such a plot and try to cope with its shortcomings with a legend and mouse interaction.

## Data

Data is collected from [the US social security website](https://www.ssa.gov/oact/babynames/limits.html), considering the years from 1981 up to 2020.

## Improvements

Past the line chart, plotting one line for each variable, each `<svg>` element is equipped with a legend, positioned on the very right end. The idea is to include in this section every piece of information meant to simplify the visualization: the names and the values for a specific year, by default the most recent values.

It is possible to hover on the line chart, illustrating a year different from the default one. It is also possible to hover on the legend, focusing on a single line.
