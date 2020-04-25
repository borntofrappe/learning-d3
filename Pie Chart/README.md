# Pie Chart

Plot data in a colorful pie chart.

## Notes

- the icons are picked from [Google Material Design](https://material.io/resources/icons/).

- the colors correspond to the following `hsl` values.

  ```css
  .palette {
    color: hsl(245, 70%, 55%);
    color: hsl(210, 95%, 60%);
    color: hsl(85, 30%, 55%);
    color: hsl(330, 65%, 50%);
    color: hsl(35, 70%, 60%);
  }
  ```

- the data is built with a handy function, which takes as input a string and returns the sum of the index corresponding to each letter

  ```js
  const getValue = (key) => key.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0);
  ```

Once the data is processed through a function generating the pie slices, it provides the following information

```js
[
  {
    data: {
      key: "volleyball",
      icon: "",
      value: 1078,
    },
    index: 0,
    value: 1078,
    startAngle: 0,
    endAngle: 1.7078350381088236,
    padAngle: 0,
  },
  // ...
];
```

The initial values are stored in a `data` object. `startAngle`, `endAngle` and `padAngle` are used by an arc generator function to describe the `d` attribute for `path` elements.

## Links

- [`d3-shape`](https://github.com/d3/d3-shape)

- [arc](https://github.com/d3/d3-shape#arc)

- [pie](https://github.com/d3/d3-shape#pies)

- [arc-centroid](https://github.com/d3/d3-shape#arc_centroid)

- [html](https://github.com/d3/d3-selection/blob/master/README.md#selection_html)
