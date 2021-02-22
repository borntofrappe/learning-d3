# Football Stats

<!-- ## [Live Demo]() -->

## Notes

A more apt title would be _the lackluster success of French teams in the European League competition_.

Inspired by [this article from lemonde.fr](https://www.lemonde.fr/les-decodeurs/article/2018/05/04/marseille-club-francais-recordman-des-finales-europeennes-depuis-1980_5294581_4355770.html), I set out to highlight the highest stage of competition reached by any French team in the European League.

A first visualization replicates the graph proposed in the article, where a series of squares a layered on top of one another to highlight the different stages year by year. I took the liberty of expanding the dataset, but substantially, the visual is the same.

A second visualization, however, presents the same information with a different visual. Here the goal is to focus on individual years, showing the different stages of the competition with a more artsy `<svg>` element.

## Layered squares

The goal is to highlight

```txt
Final
Semi-finals                 o
Quarter-finals              o     o     o
Second round                o     o  o  o
Group stage or first round  o  o  o  o  o  o  o
```
