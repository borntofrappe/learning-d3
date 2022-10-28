# [F1 Calendar Map](https://codepen.io/borntofrappe/full/GRGJYMN)

> this project is based on a dated concept, but still worth pursuing

## Goal

Display the circuits of the programmed 2022 F1 season with a geographical visualization. Focus on one circuit at a time and rotate the globe, animating elements to highlight the different venues.

## Links

- [2022 announced calendar](https://www.formula1.com/en/latest/article.formula-1-announces-23-race-calendar-for-2022.2HcIP34fK3Zznx7YZfWL6P.html) (whether the 2022 season actually took place as expected is outside of the project's scope)

- [Faux-3D arc bl.ock](http://bl.ocks.org/dwtkns/4973620). The demo inspires the project by providing two challenges: 1. how to shade the orthographic projection to further the illusion of depth and 2. how to create arcs to connects the points on the map

<!--

## Notes

### Data

Data for the programmed 2022 F1 season is taken directly from the cited F1 website. On top of the three keys describing the date, grand prix and venue I've manually added the geographic coordinates from Wikipedia.

| Date     | Grand Prix   | Venue  | Coordinates          |
| -------- | ------------ | ------ | -------------------- |
| 20 March | Bahrain      | Sakhir | 26°1′57″N 50°30′38″E |
| 27 March | Saudi Arabia | Jeddah | 21°37′55″N 39°6′16″E |
| ...      | ...          | ...    | ...                  |

For each track the coordinates describe the location with degrees, minutes and seconds, so you need to compute the longitude and latitude understood by D3's projection function.

### Geo

[`world-atlas`](https://github.com/topojson/world-atlas) gives a JSON file with the TopoJSON necessary to draw the world and its countries

D3 understands GeoJSON, so you need [`topojson`](https://github.com/topojson/topojson) to convert the topologies to the necessary geometries

In `index.html` require `topojson` on top of `d3`:

```html
<script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js"></script>
```

In `script.js` set up an SVG in which to display the map.

```js
const svg = div
  .append("svg")
  .attr("viewBox", `0 0 ${size} ${size}`)
  .attr("width", size)
  .attr("height", size);
```

Add default content as you need an async function to retrieve the json data.

This is one way to avoid a layout shift and in a more elaborate demo should provide a fallback visual in the moment the async call fails.

Past this setup immediately execute an async function.

```js
(async () => {
  //
})();
```

In the body retrieve the topojson from the world atlas.

```js
const json = await d3.json("https://unpkg.com/world-atlas@2.0.2/land-50m.json");
```

With the data remove the defaul content and add the world.

Describe the world with an object with a `type` of `"Sphere"`.

```js
const sphere = { type: "Sphere" };
```

Set up a projection to fit the map in the constraints of the SVG

```js
const projection = d3.geoOrthographic().fitSize([size, size], sphere);
```

Set up geoPath to use the projection.

```js
const path = d3.geoPath().projection(projection);
```

Draw the world.

```js
groupGeo.append("path").attr("d", path(sphere)).attr("fill", "hsl(0, 0%, 97%)");
```

Draw the world's countries.

```js
groupGeo
  .append("path")
  .attr("d", path(topojson.feature(json, json.objects.land)))
  .attr("fill", "hsl(0, 0%, 78%)");
```

Use `topojson.feature` for the desired geometries.

### Depth

The orthographic projection already creates the illusion of depth. To further this illusion, following the faux-3d arcs cited example, add a radial gradient on the Earth's surface.

Define the gradient relative to the SVG.

```js
const defs = svg.append("defs");

const radialGradient = defs
  .append("radialGradient")
  .attr("id", "gradient-overlay")
  .attr("gradientUnits", "userSpaceOnUse")
  .attr("cx", (size * 3) / 4)
  .attr("cy", size / 4);
```

For the colors of the gradient I chose two arbitrary shades of white.

Overlay a semitransparent rectangle with the gradient.

```js
groupOverlay
  .append("rect")
  .attr("width", size)
  .attr("height", size)
  .attr("fill", "url(#gradient-overlay)")
  .attr("opacity", 0.5);
```

Clip the rectangle with the same path element used for the sphere.

```js
defs
  .append("clipPath")
  .attr("id", "clip-path-overlay")
  .append("path")
  .attr("d", path(sphere));

// rect
.attr("clip-path", "url(#clip-path-overlay)");
```

## Points

Define getLongLat to return the values for a D3 projection, longitude and latitude, from an input coordinate. Given a certain direction the coversion follows the formula:

```pseudo
decimal = degrees + minutes / 60 + seconds / 3600
```

If the direction is South or West the value should be negative.

You could call the function whenever you use a projection, but out of convenience loop through the input dataset to create the values for all destinations.

```js
const data = dataset.map((datum) => {
  const { Coordinates } = datum;
  const coordinates = getLongLat(Coordinates);

  return { ...datum, coordinates };
});
```

To draw single points use the projection with a specific geometry (similar to how you use an object for the sphere).

```js
const point = { type: "Point", coordinates: [long, lat] };
```

Pass the object with the longitude and latitude to the instance of the `geoPath` function.

```js
groupData.append("path").attr("d", path(point)).attr("fill", "hsl(0, 0%, 32%)");
```

The function is based on the projection and returns the d attribute for a path element. The syntax essentially draws a dot. Based on the projection it returns the attribute _or_ `null`, meaning the point is not displayed. This happens when the point is behind the 3D projection.

Repeat the operation for all data points to describe all tracks.

Change the size of the point on the same path function.

```js
const path = d3.geoPath().projection(projection).pointRadius(7);
```

To test the visibility of the points rotate the projection.

```js
const projection = d3
  .geoOrthographic()
  .fitSize([size, size], sphere)
  .rotate([180, 0]);
```

### Focus

Ultimately you rotate the projection and update the elements which rely on the value, either directly through the projection or through the `geoPath` function which depends on the projection.

If you use the land object referenced in the geo section you don't see a rotation, but a morphing of the shape (it seems d3 animates the d attribute of the single path). To fix this reference the topojson with the data for all the countries.

```js
const json = await d3.json(
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
);
```

Add multiple path elements, one for each country.

```js
const groupCountries = groupGeo.append("g");

groupCountries
  .selectAll("path")
  .data(topojson.feature(json, json.objects.countries).features)
  .enter()
  .append("path")
  .attr("d", path)
  .attr("fill", "hsl(0, 0%, 78%)");
```

Bind the geometries to the path elements so that ultimately, with the updated projection, you just need to reference the `geoPath` function.

```js
groupCountries.selectAll("path").attr("d", path);
```

Repeat the process for the points. Bind data.

```js
const groupPoints = groupData.append("g");
groupPoints
  .selectAll("path")
  .data(data.map(({ coordinates }) => ({ type: "Point", coordinates })))
  .enter()
  .append("path")
  .attr("d", path)
  .attr("fill", "hsl(0, 0%, 32%)");
```

Update.

```js
groupPoints.selectAll("path").attr("d", path);
```

To focus on a point the idea is to rotate the projection horizontally. Consider the longitude of a point.

```js
[50.510555555555555, 26.0325];
```

To center the point rotate the projection in the opposite direction.

```js
projection.rotate([-50.510555555555555, 0]);
```

To have an offset add, or remove, an arbitrary number of meridians.

With the final value the goal is to animate the projection. One way is with `d3.timer`.

```js
const duration = 1000;
const timer = d3.timer((elapsed) => {
  const t = elapsed / duration;

  if (t >= 1) {
    timer.stop();
  }
}, 150);
```

`elapsed` describes the number of milliseconds, `t` a value from 0 to 1, so that the extra step is to map the value to the desired range.

Another approach is with a custom transition and [`transition.tween`](https://github.com/d3/d3-transition/blob/main/README.md#transition_tween).

```js
const transition = d3.transition().duration(1000).delay(150);

transition.tween("focus", () => {
  //
});
```

Since the projection's rotation works with an array use d3.interpolateArray.

```js
const i = d3.interpolateArray([startAngle, 0, 0], [endAngle, 0, 0]);
```

Update the projection and accompanying visuals.

```js
return (t) => {
  projection.rotate(i(t));

  groupCountries.selectAll("path").attr("d", path);

  groupPoints.selectAll("path").attr("d", path);
};
```

### Highlight

Instead of showing all points and rotate the projection to focus on the different ones the goal is to show only one dot a time, with additional information for the specific one.

Remove the objects of type Point. Add instead a circle with no radius and text elements with no text. For the text I prefer to increase contrast by using a bright color and add a background in the form of a dark rectangle. Since the size of the text depends on content the size of the rectangle, and its position, are computed every time the text changes.

Consider the _node_ which is the text.

```js
groupData.select("text").node();
```

Consider the width and height in terms of SVG unnit with getBBox()

```js
groupData.select("text").node().getBBox();
```

Use width and height for the attributes of the rectangle.

In terms of flow, the logic is relevant 1. as the visualization first focuses on the initial track and 2. as you pick different track. -in both instances show the circle, then animate stroke of a line to connect the point to the text. -->
