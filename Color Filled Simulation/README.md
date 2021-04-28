# Color Filled Simulation

## [Live Demo](https://codepen.io/borntofrappe/pen/dyYOBzV)

## Notes

In a previous project — see `Force Simulation` — I used the `d3-force` module to set up a simulation without specifying any force. Here, I experiment with the module further, in the hope of creating something similar to [this inspiring demo](https://observablehq.com/@d3/build-your-own-graph?collection=@d3/d3-force).

The project benefits from two specific modules of the D3 library:

- [`d3-force`](https://github.com/d3/d3-force) provides the essential functions to run the simulation. Take notice of the `.restart()` and `alpha()` functions, which are responsible for resetting the simulation with a new set of values

- [`d3-selection`](https://github.com/d3/d3-selectio) provides another helpful function in [`d3.mouse`](https://github.com/d3/d3-selection#mouse). The method allows to retrieve the coordinates in the element passed as input, which in the particular project is the `<svg>` element
