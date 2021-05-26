# Lap Chart

<!-- ## [Live Demo](LINK_TO_LIVE_DEMO_HERE) -->

## Notes

The section of the F1 website devoted to [live timing](https://www.formula1.com/en/f1-live.html) shows a rather intriguing visualization in the tab labeled lap chart. The goal of this project is to recreate the chart for the italian grand prix run in 2020. I chose the specific circuit due to the considerable shuffle in positions, not to mention the surprising victory of Pierre Gasly.

At first I created a single lap chart, but plotting 20 drivers and 53 laps creates a rather noisy visual. To this end I decided to include multiple visualizations, focused on specific intervals.

```js
drivers: data.drivers.filter(({position}) => position[firstLap])

position: position[firstLap]
        ? position.slice(firstLap, lastLap + 1)
        : [position[position.length - 1]],
```
