# [Hive Plot](https://codepen.io/borntofrappe/full/MWXzdqm)

Map the audience for several French channels overe the span of three days with a [hive plot](https://datavizproject.com/data-type/hive-plot/).

## Data

Data is extracted manually from the French newspaper _Le Figaro_. Consider as an example an article discussing viewership data [for the 3rd of December](https://tvmag.lefigaro.fr/programme-tv/audiences-tv/audiences-quel-score-pour-argentine-australie-sur-tf1-20221204).

## Data massaging

Take a single date in the original `data` array. Here viewership data is scored in an additional array, `results`, with a list of objects detailing the channel, program and audience.

```js
{ channel: "TF1", program: "Coupe du monde", audience: 6028000 },
```

To draw the areas for the channels stacked one above the other you need a reference to the comulative audience.

`dataPercentages` loops through the datasets to:

1. compute the audience total

2. restructure `results` so that the audience data is tracked in percentages, relative to the total, and with an additional fiel, `cumulative`, tallying up the percentage with the value of previous channels

```js
{ audience: 33.57282094124199,​​​​ channel: "TF1",​​​​ cumulative: 87.42411584516847,​​​​ program: "Coupe du monde" }
```

`results` is also sorted to have the channels ordered alphabetically, to ensure the collections are directly comparable day by day.

## areaRadial

To draw the connections between the different dates, `<path>` elements linking the channels according to the audience data, `d3.areaRadial` leans on three values:

- angle

- innerRadius

- outerRadius

For each of the channels:

- compute the angle on the basis of the date

  ```js
  const angle = scaleAngle(date);
  ```

- compute the inner and outer radius through the percentages, individual and cumulative

  ```js
  const innerRadius = scaleRadius(cumulative - audience);
  const outerRadius = scaleRadius(cumulative);
  ```

## Closing remarks

- the scale for the radius starts from a value composed of `innerRadius` and `strokeGap`. This last value adds whitespace around the lines describing the dates

- the scale for the angle maps dates so that the plot excludes the top right quadrant. Use `startAngle` and `endAngle` to dictate where the areas begin and end

- the scale for the color includes one color for each channel with `d3.interpolateRainbow`. To ensure enough contrast between the 18 data points the range of the scale loops through the color wheel more than once

- the labels in the legend are positioned rather tentatively, in two columns and separated vertically to fit in the quadrant

- `data` highlights the audience recorded by specific programs. A more elaborate project would try to include this details, perhaps on hover and with a tooltip
