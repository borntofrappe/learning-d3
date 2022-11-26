# [Tally Chart](https://codepen.io/borntofrappe/full/wvXXoeP)

Create a chart highlighting a counter variable with [tally marks](https://en.wikipedia.org/wiki/Tally_marks).

## Five marks

To undeerstand the implementation focus on the unit of a tally chart, the five marks defined in the `<svg>` element.

The `<path>` elements are drawn in a 5x5 canvas as follows.

```html
<svg viewBox="-1 -1 5 5">
  <path d="M 0 0 v 3" />
  <path d="M 1 0 v 3" />
  <path d="M 2 0 v 3" />
  <path d="M 3 0 v 3" />
  <path d="M -0.5 2.4 l 4 -1.8" />
</svg>
```

Define in the `defs` element and then use with a stroke — less than 1 wide to have the marks separated.

```html
<svg viewBox="-1 -1 5 5">
  <use href="#mark-0" />
</svg>
```

## SVG filter

One way to emulate a hand-drawn line is to modify the stroke for the `<path/>` elements with a filter.

The filter itself is defined with two primitives:

- `<feTurbulence>`: distort the filter area with noise

- `<feDisplacementMap>`: add the turbulance the source graphic

The attributes are taken [from MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap#example) and tweaked until the effect is not overlwheming.

## Title

While the chart is visually effective it does very little for keyboard users. Add a title to the `<svg>` and allow to focus on the visualization, on the figure.

```html
<svg tabindex="0" role="figure">
  <title>12</title>
</svg>
```
