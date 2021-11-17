# Geo Practice

## Notes

The `d3-geo` module map data to geographies. The goal of this project folder is to create a few visualizations to practice with this challenging part of the D3 API.

### [World Atlas](https://codepen.io/borntofrappe/pen/gOxQXRK)

The first project lays the foundation by creating a world atlas.

- `world-atlas` provides the data necessary to draw the world, in JSON and specifically topoJSON

- `topojson` allows to convert the data from topoJSON to geoJSON, understood by the `d3-geo` module

### [Antipodes](https://codepen.io/borntofrappe/pen/eYEbPML)

The second project shows how the projection can be customized to show different parts of the world.

- `.rotate` allows to shift the projection in one of the three available axis

- `.reflextX` reflects the `x` dimension

### [Around the World in 80 Days](https://codepen.io/borntofrappe/pen/yLoZyEa)

The third project illustrates how to plot a series of landmarks using the chosen projection.
