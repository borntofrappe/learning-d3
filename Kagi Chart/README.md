# [Kagi Chart](https://codepen.io/borntofrappe/full/QWZeQdq)

In a [Kagi Chart](https://en.wikipedia.org/wiki/Kagi_chart) you track price movements for a certain stock, paying particular attention to closing prices.

There is no x axis describing the time. There are only a series of vertical and horizontal lines, often varying in size and or color.

To build a Kagi chart you compare the closing prices. From a starting value you draw a vertical line for each closing price. Keep drawing until the trend does not reverse.

The trend is reversed when the closing price exceeds the value in the opposite direction _and_ by a given reversal amount.

When reversed, draw an horizontal segment and repeat the process.

For the thickness:

- draw a thick line if the value exceeds the previous high

- draw a thin life is the value goes below the previous low

## Data

Stock price from nasdaq.com and the commodity [rough rice](https://www.nasdaq.com/market-activity/commodities/zr/historical) for the year 2022.

## Dev notes

The script immediately maps the data with a line chart. The type works to illustrate the noise from an excessive number of observation.

Past the line chart, the second function maps the data with the promised Kagi chart. It is necessary to manipulate the data in a different format, one which specifies the point horizontally and vertically. Vertically use the closing price (much similarly to the line chart). Horizontally create a new variable to position the segments side by side.

The idea is to use a counter variable `segment`. Initialize the variable at 0 and increment the value each time the trend reverses. Whenever the trend is reversed, remember to add the previous value with the incremented segment to create the horizontal connection.

```js
x++;
// connection
dataKagi.push({
  ...dataKagi[dataKagi.length - 1],
  segment,
});

// new observation
dataKagi.push({
  ...datum,
  segment,
});
```

The challenging portion, past describing the (x, y) coordinates for the segments, is to finally drawing the thicker line. `d3.line` has a method, `.defined`, to selectively draw a line based on a condition. As the data is manipulated, the idea is to have a boolean variable describing whether or not the point should be part of this separate line. It is not enough to consider the condition in the premise, however (draw a thick line if the closing price exceeds the previous high). Whenever you change the thickness you also need to include the previous high to only draw the relevant, vertical segment.
