# Alpine Skiing Results

The goal of this project is to recreate a visualization from the [F1 website](https://www.formula1.com/en/f1-live.html), specifically in the sectio ndevoted to live timing. Here the drivers are highlighted with a line, changing in the `y` coordinate according to the lap position.

## Data

Instead of F1 drivers, the visualization highlights skiers in a slalom competition programmed for the world cup. The competition is specifically the women's slalom for the 13th of March 2021 in Sweden.

`dataset`

`intervals` is the most important property for the visualization, as it highlights the number of seconds in which the athlete completed the session, and is therefore essential to consider the order.

Refer to the [official results](https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=104410#details) for the detailed information.

## Visualization

The goal of the visualization is to show how the competition takes place:

1. bib numbers are assigned following a specific procedure

2. the first session has the skiers proceed in the number dictated by the bib numbers

3. the second session has the top thirty skiers proceed in reverse order, all the while retaining the margins accumulated in the first session. The thirtyest athlete starts first, the twenty-ninth second and so forth, until the fastest starts number 30. Each successive skier starts with a gain from the previous athlete, and the challenge is to retain, or improve if possible
