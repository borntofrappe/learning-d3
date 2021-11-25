# Complete the Line Chart

## [Live Demo](LIVE_DEMO_URL)

## Notes

An interesting article from [lemonde.fr](https://www.lemonde.fr/les-decodeurs/article/2020/02/13/comment-evoluent-les-inegalites-aux-etats-unis-tracez-la-courbe-de-ces-quatre-graphiques-pour-comprendre-l-injustice-fiscale_6029397_4355770.html) introduces a rather novel type of line chart. You are presented with a line and an additional, partial line, with the task of filling in the rest. The goal of this project is to replicate the concept.

## Data

I decided to focus on the _cumulative_ number of points awarded to F1 drivers in the 2020 season, focusing on specific pairs. To decide which pair the `Pairings` subfolder plots one line chart for each possible pair of 11 drivers. The effort is excessive as the comparison become less and less interesting the larger the gap, but it is a good excuse to practice with vanilla JavaScript. One could immediately improve the code by coputing the total first and conditioning the pairing to an arbitrary gap, say 100 points.
