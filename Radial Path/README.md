# Radial Paths

With this project I set out to use the functions `d3.lineRadial` and `d3.areaRadial`. A first visualization focuses on creating the radial shape using the two functions and a fixed set of data. Refer to the **Static** folder for such a visualization. A more complex example takes the static example and uses an interval to constantly update the shape according to new input data. The idea is to show only a limited number of observations, and see how the shape of the visualization changes over time.

The line and area functions work similarly to the non-radial counterpart. You just need to adjust your thinking from `x` and `y` to:

- angle: the rotation around the `[0, Math.PI * 2]` circle

- radius: the distance from the center

The center is assumed to be where the path is within the `viewBox` of the SVG, so be sure to translate the shape accordingly.

While the radius can use a linear scale then, the angle takes advantage of an ordinal scale, so to map each successive data point to a value on the defined `Math.PI * 2` spectrum.
