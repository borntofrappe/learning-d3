# CSS Packing Preferences

## Goal

Recreate the visualization labeled Usage Overview on the [state of CSS 2021 survey](https://2021.stateofcss.com/en-US/features/), focusing on the packing algorithm and the animation repositioning the circles.

## Data

Refer to `data.csv` for the values I ultimately use in the script. The data is repeated with an array of objects to avoid using `d3.csv`, an async function which requires a live server. To create the data I logged the values in the console once and copied the resulting object.

```js
(async () => {
  const data = await d3.csv("data.csv", (d) => {
    return {
      Label: d["Label"],
      "Know about it": parseFloat(d["Know about it"]),
      "Have used it": parseFloat(d["Have used it"]),
      Feature: d["Feature"],
    };
    //
  });

  console.log(data);
})();
```

The cited state of CSS survey does provide a JSON object, but I find it overly complicated. To focus on the visualization instead of data processing the comma separated file is based on the table added in the _data_ section. I removed the _Usage ratio_ column and added a _Feature_ column to link the data points for the packing algorithm.
