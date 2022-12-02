# [Arc Diagram Layout](https://codepen.io/borntofrappe/full/PoaxYyq)

Add layout attributes on nodes and edges to map network data with an [Arc diagram](https://en.wikipedia.org/wiki/Arc_diagram).

## Data

The script includes data from the exploration of energy sources at European level titled [From where do we import energy?](https://ec.europa.eu/eurostat/cache/infographs/energy/bloc-2c.html). The arrays refer specifically to the member states of the European Union — `nodes` — and the export of electricity between the 27 countries.

## Layout

As per the project [Adjacency Matrix Layout](https://codepen.io/borntofrappe/pen/ZERMyMz) the goal is to attributes on the `nodes` and `edges` collection, so that it is later possible to position the `<text>` and `<path>` elements to complete the arc diagram.

Based on the `offset` value added on the nodes, on `offsetStart` and `offsetEnd` added on the edges you can draw the labels and lines horizontally or vertically, as in the script.
