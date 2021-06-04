# Seine River

## [Live Demo](https://codepen.io/borntofrappe/pen/qBroKjx)

## Notes

The goal of this project is to highlight the tributaries of the Seine river with at least two visualizations a Sankey diagram and a radial chart.

The Sankey diagram seems like a natural fit to describe the the flow between the streams, and provides an excellent way to split the tributaries according to side. The radial chart lacks the same kind of impact, but provides a different way to highlight the basin size and length. For the radial chart, I ultimately decided to order the data points according to the analysed metric; the information regarding the side is lost, but it is easier to compare adjacent nodes.

### linkVertical

`d3-sankey` provides `d3.sankeyLinkHorizontal` to provide the syntax for the `d` attribute of `<path />` elements, and relies on the data structure set up with `d3.sankey`. It is however possible to create a custom link generator function through the `d3-shape` module, which provides `d3.linkVertical` and `d3.linkHorizontal`. The functions consider the horizontal and vertical coordinates of two objects, `source` and `target`, and the project provides an example in the path creating the connection between the Seine river and the english channel.

```js
const linkGenerator = linkVertical();
```

Notice that the function is repeated to consider the multiple segments, from the top left of the visualization to the rectangle describing the Seine, then horizontally across its width, then to the top right of the SVG and back to the beginning.

```js
.attr(
  'd',
  `${linkGenerator({
    source: [0, 0],
    target: [x0, y0 + dimensions.margin.top],
  })} h ${x1 - x0} ${linkGenerator({
    source: [x1, y0 + dimensions.margin.top],
    target: [dimensions.boundedWidth, 0],
  })} L 0 0`
)
```

It is possible to attach the syntax since each the `d3.linkVertical` function provides independent segments.

```html
<path d="M .. h 20 M .. L 0 0 " />
```

### marker

In term of SVG syntax, the `<marker>` element allows to customize the end of the `<path />` elements included in the radial charts. The marker is defined in `index.html` to consider the width of the stroke.

```html
<defs>
  <marker id="line-cap">
    <rect />
  </marker>
</defs>
<>
```

The visual is finally referenced in the lines through the `marker-end` attribute.

```html
<path marker-end="url(#line-cap)" />
```

### Grid

The radial charts describing the basin size and length are included in a `<div>` container with the goal of having the two side by side. If CSS grid is supported, however, the layout changes to a grid of three columns and rows, with the goal of overlapping the visual in the top left and bottom right corners. The overlap shouldn't compromise the visualization as the charts inherently include considerable whitespace.
