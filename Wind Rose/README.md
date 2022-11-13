# [Wind Rose](https://codepen.io/borntofrappe/full/mdKmYLR)

Create a wind rose highlighting wind directions with a radial layout.

## Data

[climate.gov](https://www.climate.gov/maps-data/dataset/wind-roses-airports-around-world-graphics-or-raw-data-tables) refers to a specific source for wind rose data. The script refers specifically to [Forest City station and the month of January 2022](https://mesonet.agron.iastate.edu/sites/windrose.phtml?station=FXY&network=IA_ASOS).

## Arc

`d3.arc` produces the `d` attribute for `<path>` elements with a few helper methods: `startAngle`, `endAngle`, `innerRadius`, `outerRadius`. Since each arc in the wind rose has a distinct set of values, initialize the function without additional details.

```js
const arc = d3.arc();
```

With the arc data call the function on an object with the necessary keys.

```js
arc({
  innerRadius: 0,
  outerRadius: 10,
  startAngle: 0,
  endAngle: 0.21,
});
```

## Layout

With `d3.pie` the library processes the data so that the individual observations have a value for `startAngle` and `endAngle`.

The script mirrors this utility by processing the `directions` array and returning a collection with the attributes necessary for the instance of `d3.arc`.

The angles are immediately computed from the input data, which details the value in degrees (just remember `d3.arc` works with radians).

```js
let [startAngle, endAngle] = angles.map((d) => (d / 180) * Math.PI);
```

Since it happens that one of the angles begins and ends at opposite ends.

````js
{
    angles: [355, 4],
    speed: [
    { interval: "2-4.9", value: 0.276 },
    // ...
    ],
}
```

Increment the end angle to avoid drawing the arc all the way around.

```js
if (endAngle < startAngle) {
    endAngle += Math.PI * 2;
  }
````

The radii are instead calculated cumulatively from the speed values. Cumuatively since the arcs for the different categories are laid in sequence (each successive element sits above the previous one).

```js
const innerRadius = scaleValue(currentValue);
currentValue += value;
const outerRadius = scaleValue(currentValue);
```
