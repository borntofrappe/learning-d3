# [Layered Area Chart](https://codepen.io/borntofrappe/full/xxzYmzx)

Recreate one of the examples from [datavizproject](https://datavizproject.com/data-type/nested-area-chart/) for a _Layered Area Chart_.

## Data

[Google trends](https://trends.google.com/trends/explore?q=%2Fm%2F030q7&date=now%207-d) for the term _World Cup_, looking at the months of June of July for the years of four editions: Germany 2006 (9 June - 9 July), South Africa 2010 (11 June - 11 July), Brazil 2014 (12 June - 13 July), and Russia 2018 (14 June - 15 July).

## Isometric perspective

Much similarly to the project [Multiple Series 3D Bar Chart](https://codepen.io/borntofrappe/full/jOKZbqM) add perspective with `<path>` elements stretching in the horizontal dimension for twice as much as the vertical spread.

The approach has been refined to have the elevation as a separate variable, instead of a value computed from the height. It would indeed be possible to have `elevation` smaller than or equal to zero.

Just be sure to have the SVG taller by the prescribed amount.

```diff
height + margin.top + margin.bottom
+height + margin.top + margin.bottom + elevation
```

## Area

Once `offsets1` and `offsets2` describe the offsets per the two isometric segments use the coordinates for the points in the area function (this is opposed to the bars, which are positioned individually with the `transform` attribute).

Since the offsets describe `[x, y]` coordinates you need to compute the offset both for the `x` and `y` methods.

```js
d3.area().x((d) => {
  const { date } = d;

  const [x] = scaleOffset2(timeParse(date));

  return x;
});
```

Vertically compute two values: use the offset to position the start of the area.

```js
.y0((d) => {
    const { date } = d;

    const [, y] = scaleOffset2(timeParse(date));
    return y;
  })
```

Use the offset _on top_ of the elevation for the end.

```js
.y1((d) => {
    const { date, value } = d;

    const [, y] = scaleOffset2(timeParse(date));
    const elevation = scaleElevation(value);
    return y + elevation;
  })
```
