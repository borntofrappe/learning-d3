# [Stacked Bar Chart Component](https://codepen.io/borntofrappe/full/wvxwjGY)

Create a component function to map data with an interactive stacked bar chart. Transition the elements whenever the function is called with a different set of arguments.

## Input

The issue I personally have with _stacked_ bar charts is that it can be difficult to understand how the individual categories change over time (except the bottom-most one perhaps).

One way to cope with the comparison: allow to select and highlight a specific category.

## Implementation

The `stackedBarChartComponent` takes inspiration from [the source code for `d3-axis`](https://github.com/d3/d3-axis/blob/main/src/axis.js).
