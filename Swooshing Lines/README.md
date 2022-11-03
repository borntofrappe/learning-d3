# Swooshing Lines

Recreate one of the visualization from [the 2021 state of CSS survey](https://2021.stateofcss.com/en-US/technologies/css-in-js) highlighting CSS technologies with an animated line chart.

## Data

The script includes the data from the cited resource repeating the following structure for every label. I chose the CSS-in-JS data out of the three discussed technologies.

```js
{
    label: "Styled Components",
    satisfaction: [
      { year: 2019, ranking: 3, percentage: 0.85 },
      // ...
    ],
    interest: [
      { year: 2019, ranking: 2, percentage: 0.677 },
      // ...
    ],
    // ...
}
```
