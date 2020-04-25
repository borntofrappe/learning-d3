# Data Practice

Practice with D3 and JavaScript to map data to HTML and SVG elements.

## [Live Demo](https://codepen.io/borntofrappe/full/pojPJGa)

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

- the value for each key is computed with a handy function, which takes as input a string and returns the sum of the index corresponding to each letter

  ```js
  const getValue = (key) => key.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0);
  ```

- once the data is processed through a function generating the pie slices, it provides the following information

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

- if you set up an arc generator, and later modify the values with one of its functions

  ```js
  // set up
  const arc = d3.arc().innerRadius().outerRadius();

  // modify
  arc.innerRadius();
  ```

  The change persists on the arc generator function. This is something to keep in mind.
