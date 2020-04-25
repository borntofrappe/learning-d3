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
