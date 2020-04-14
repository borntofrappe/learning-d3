# Python Lang

Describe the popularity of the Python language with a line chart. Customize the path elements with marker elements.

## Notes

This project builds on top of [this SVG demo](https://codepen.io/borntofrappe/pen/wvKKzzE) exploring the `<marker>` elements. I've created an `.svg` file in the **res** folder for further reference.

### Data

The visualization considers data from [Stack Overflow](https://stackoverflow.com/) and specifically [the interface](https://insights.stackoverflow.com/) highlighting the number of questions posed on the platform for a given topic. For the python language, see [this query](https://insights.stackoverflow.com/trends?tags=python):

```code
https://insights.stackoverflow.com/trends?tags=python
```

Stack Overflow maps data from `2008`, but I'm only interested in a subset describing the most recent observations. This allows to keep the attention on the line and the different marker elements. See `data.js` in the **res** folder for the more comprehensive set.

### JavaScript

I decided to create the projects in two versions: one without any library, and one with preact. In the root folder you find the `html`, `css` and `js` files responsible for the first versions. In the **preact-app** folder you find the second. It's the first time I pick preact, so I might include additional notes on the library as get use to it.
