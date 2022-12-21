# [Dumbbell Plot](https://codepen.io/borntofrappe/full/VwBYyZe)

Map data with a dumbbell plot to highlight the difference between two categories.

## Design

The project is created after a demo from [r-graph-gallery](https://r-graph-gallery.com/web-extended-dumbbell-plot-ggplot2.html). The goal is to plot a circle for the two keys and connect the two with a line right behind the two dots. On top of these visuals (technically behind in term of SVG order), the idea is to also highlight the average and standard deciation with additional marks.

## Data

The project maps life expectancy for the year 2020 in the European Union. The data is extracted from [Eurostat](https://ec.europa.eu/eurostat/databrowser/view/DEMO_MLEXPEC__custom_639270/bookmark/table?lang=en&bookmarkId=2f26f931-4df1-499a-a8eb-3dbf1125a63a).

## Axis

I've decided to have the scale consider the minimum and maximum for the domain, so that the scale does **not** begin at 0. To remark this choice the axis for the numerical variable is displayed with an inset, the 0 origin is added manually together with a dashed line connecting the origin with the actual axis.
