# Renderer(s)

## Live Demos

- [Renderer - D3](https://codepen.io/borntofrappe/pen/OJMVmNg)

- [Renderer - React](https://codepen.io/borntofrappe/pen/zYrGwZV)

## Notes

Experiment with a data visualization and different rendering libraries:

- D3

- React

For the data visualization, I opted to replicate the bar plot as highlighted in [this study](https://climate.copernicus.eu/surface-air-temperature-may-2020) on the "Surface air temperature" up to the month of May 2020. The study focuses on a global and european scale, but I chose to focus on the first level only.

It is a rather rudimentary visualization, but one which already allows to consider the advantages of the two rendering libraries.

### React

There are a few specifics when using React as opposed to rely on D3 alone, but here a few notes.

#### npm install

You can include d3 in the `.html` document, and through a script tag, but using node, add the library alongside the other necessary packages.

```bash
npm install d3
```

In production, consider adding specific modules instead of the entire library.

#### Axes

When using D3 alone, the axes are included using the `call` method.

```js
d3.select('.viz').append('g').call(yAxis);
```

When React takes care of adding the necessary SVG elements, replicate the drawing with `path` and `text` elements.

Now, the `.ticks` function helps to create an array of ticks.

```js
const yAxis = d3.ticks(min, max, 5);
```

But in the specific visualization, it doesn't take care of adding a tick for the edges of the axes. To this end I rolled my own version considering the start and end of both axes.
