# [Adjacency Matrix Layout](https://codepen.io/borntofrappe/full/ZERMyMz)

Add layout attributes on nodes and edges to map network data with an [Adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix).

## Data

A (relatively dated) article from the guardian titled [Europe: where do people live?](https://www.theguardian.com/news/datablog/2012/jan/26/europe-population-who-lives-where).

## Layout attributes

Instead of returning a collection with the necessary attributes the script modifies `nodes` and `edges` directly. This is inspired by `d3.forceSimulation`, which itself adds the attributes on the input data.

The position of the nodes, and the relative edges, is dictated by a band scale, which divides the size of the matrix per the size of the collection.

On top of the coordinates the nodes, and the edges through `nodeSize`, store a reference to the size of an individual cell. This additional information is necessary for the adjacency matrix, since the goal is to draw rectangles of a given width and height.
