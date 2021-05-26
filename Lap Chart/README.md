# Lap Chart

<!-- ## [Live Demo](LINK_TO_LIVE_DEMO_HERE) -->

## Notes

The goal of this project is to recreate one of the visualizations proposed on the F1 website, and specifically the one highlighting the progression of drivers lap by lap. You can find an example in the _lap chart_ tab on the page devoted to [live timing](https://www.formula1.com/en/f1-live.html).

Data is collected for the italian grand prix in 2020, for the tumultuous nature of the race.

```js
drivers: data.drivers.filter(({position}) => position[firstLap])

position: position[firstLap]
        ? position.slice(firstLap, lastLap + 1)
        : [position[position.length - 1]],
```
