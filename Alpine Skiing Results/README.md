# Alpine Skiing Results

The goal of this project is to recreate a visualization from the [F1 website](https://www.formula1.com/en/f1-live.html), specifically in the sectiondevoted to live timing. Here the drivers are highlighted with a line, changing in the `y` coordinate according to the lap position.

## Data

Instead of F1 drivers, the visualization highlights skiers in a recent competition in the world cup. The competition is specifically the women's giant slalom for the 7th of March 2021, and in Slovakia. For each athlete who completed the slalom, `data` describes a few fields.

```js
const data = [
  {
    bib: 3,
    name: 'VLHOVA Petra',
    nationality: 'SVK',
    intervals: [19.33, 18.45, 14.89, 15.84, 20.3, 17.94, 15.16, 14.75],
  },
];
```

`intervals` is the most important property for the visualization, as it highlights the number of seconds in which the athlete completed the session, and is therefore essential to consider the order.

Refer to the [official results](https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=104402#details) for the detailed information.
