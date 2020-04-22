# Color Filled Simulation

In a previous project (see **Force Simulation**), I used the `d3-force` module to set up a simulation, without specifying any force. Here, I experiment with the module further, in the hope of creating something similar to [this inspiring demo](https://observablehq.com/@d3/build-your-own-graph?collection=@d3/d3-force).

## [Live Demo](https://codepen.io/borntofrappe/full/dyYOBzV)

## Docs

[`d3-force`](https://github.com/d3/d3-force) is the hub of reference for this particular demo. I'd like to take a moment to specify the `.restart()` function, alongside `.alpha`. These are responsible for resetting the simulation with a new set of values.

`d3-selection` provides another helpful function in [`d3.mouse`](https://github.com/d3/d3-selection#mouse). It allows to retrieve the coordinates in the element passed as input, which in the particular project is the `<svg>` container.
