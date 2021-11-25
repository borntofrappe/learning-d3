# Complete the F1 Season

## [Live Demo](https://codepen.io/borntofrappe/pen/QWMeGWV)

## Notes

An interesting article from [lemonde.fr](https://www.lemonde.fr/les-decodeurs/article/2020/02/13/comment-evoluent-les-inegalites-aux-etats-unis-tracez-la-courbe-de-ces-quatre-graphiques-pour-comprendre-l-injustice-fiscale_6029397_4355770.html) introduces a rather novel type of line chart. You are presented with a line and an additional, partial line, with the task of filling in the rest. The goal of this project is to replicate the concept exploring the number of points accumulated by some F1 drivers in the 2020 season.

## Data

I decided to focus on the _cumulative_ number of points awarded to F1 drivers in the 2020 season, focusing on specific pairs. To decide which pair the `Pairings` subfolder plots one line chart for each possible pair of 11 drivers. The effort is excessive as the comparison become less interesting as the gap becomes wider, but it is a good excuse to practice with vanilla JavaScript. One could immediately improve the code by coputing the total number of points first and conditioning the pairing to an arbitrary gap.

## Interaction

There are two types of interaction, which are slightly intertwined in execution:

- by pressing a button the visualization auto-completes the line

- by clicking and dragging the cursor on the missing portion the visualization adds a series of points following the mouse coordinates

If the button is pressed the idea is to just fill in the rest of the visualization.

As the dragging operation is completed, however, the idea is instead to reveal the original line (as if the button was pressed) and then highlight the difference with the area between the two lines.

## Area

At first I thought it would be enough to rely on the `d3.area` generator function to create the area chart. The issue is that this solution is not be able to accurately match the points for both lines: one line uses `curveBasis`, is a curve, and the other line is but a connection of points, you could argue uses `curveLinear`.

In place of the generator function the script consider the `d` attributes of the two `<path>` elements and joins them together with string concatenation, making sure the sequence of points is reversed to continue with the same `x` coordinate of where the curve ends.

_Please note:_ the `Area Chart` sub-folder was created before I realized the issue and I needed to consider how to rely on the generator function.
