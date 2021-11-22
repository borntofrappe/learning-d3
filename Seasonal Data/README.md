# Seasonal Data

<!-- ## [Live Demo](LIVE_DEMO_URL) -->

## Notes

[Google Trends](https://trends.google.com/trends/explore?q=sun,moon) highlights an interesting pattern in search interest for the keywords sun and moon and the last twelve months. The goal of this project is to immediately recreate the line chart and then repurpose the information with a small animation, playing on the following keywords: sunrise and sunset, moon phases.

## Data

Ultimately, I've chosen to focus on two separate arrays describing search interest for [sun](https://trends.google.com/trends/explore?q=sun) and [moon](https://trends.google.com/trends/explore?q=moon). I fear considering both has the effect of focusing the attention on the comparison more than the evolution of the individual variable.

## [Line Chart](https://codepen.io/borntofrappe/pen/XWaQwKN)

The project replicates the visualization from the cited Google Trends, illustrating how a line chart might be simple, but is often the most effective type of visualization. It is possible to assess the overall trend immediately and with mouse interaction it is also possible to highlight individual data points. Considering mouse interaction I've chosen to include the data in the `<svg>` element instead of a separate `<div>`, a tooltip.

## [Generative Visualization](https://codepen.io/borntofrappe/pen/BadEeLE)

In place of a line chart the data is illustrated with a bespoke `<svg>` element, designed to incorporate an icon, a small line chart and the individual data point. Over time, the idea is to animate the vertical coordinate of the icon, incrementally draw the line and update the text values.
