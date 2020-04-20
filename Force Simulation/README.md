# Force Simulation

## Notes

With this demo I set out to use the `d3-force` module as to replicate a basic force directed graph.

The project is actually inspired by [this slide](https://www.lemonde.fr/les-decodeurs/visuel/2020/04/02/coronavirus-a-quoi-sert-le-confinement_6035266_4355770.html#slide=31) from a data visualization [@lemondefr](http://twitter.com/lemondefr). The idea is to plot a series of circles, and progressively color more and more shapes.

The structure is inherently hierarchical. Think of the visualization as a tree diagram, with each shape connected to an arbitrary number of shapes from the center.
