# Kagi Chart

In a [Kagi Chart](https://en.wikipedia.org/wiki/Kagi_chart) you track price movements for a certain stock, paying particular attention to the opening and closing prices.

There is no x axis, usually reserved to time. There are only a series of vertical and horizontal lines, often varying in size and or color.

To build a Kagi chart you compare the closing prices. From a starting value you draw a vertical line for each closing price (up if growing). Keep drawing until the trend does not reverse.

The trend is reversed when the closing price exceeds the value in the opposite direction _and_ by a given reversal amount.

When reversed, draw an horizontal segment and repeat the process.

To change the thickness and or color:

- thick line if the value exceeds the previous high

- thin life is the value goes below the previous low

## Data

Stock price from nasdaq.com and the commodity [rough rice](https://www.nasdaq.com/market-activity/commodities/zr/historical) for the year 2022.

## res

In the `res` folder you find a first approximation of the data visualizations for the project, a line chart and the promised kagi chart. The two visuals are meant to be as slimmed down as possible so that it is possible to focus on the core of each type (the line and the segments).
