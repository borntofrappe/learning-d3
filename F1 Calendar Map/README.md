# [F1 Calendar Map](https://codepen.io/borntofrappe/full/GRGJYMN)

On the 15th of October 2021 the F1 website [ announced the 2022 calendar](https://www.formula1.com/en/latest/article.formula-1-announces-23-race-calendar-for-2022.2HcIP34fK3Zznx7YZfWL6P.html) with an informative table.

Learning geomapping with the D3 library, inspired by a [an interesting demo](http://bl.ocks.org/dwtkns/4973620) creating faux-3D arcs, I wanted to present the information with a map of the world's countries.

One year later I finally picked up the project and created this demo. I might not be following F1 any more, but I did checked the schedule to see if the calendar took place as tabled.

The final demo provides plenty of practice with the `d3-geo` module, orthographic projection, custom shapes and chained transitions.

## Coordinates

On top of the track's location, venue and date I've manually added the geographic coordinates from Wikipedia. These values describe the number of degrees, minutes and seconds with the following format.

```
26°1′57″N 50°30′38″E
23°42′4″S 46°41′50″W
```

`getLongLat` is my tentative way to process the string and return the coordinates understood by D3 and the `d3-geo` module.

## World map

[`world-atlas`](https://github.com/topojson/world-atlas) gives a JSON file with the TopoJSON necessary to draw the world and its countries.

[`topojson`](https://github.com/topojson/topojson) helps to convert the topologies to GeoJSON features and geometries.

In `index.html` require `topojson` on top of `d3`:

```html
<script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js"></script>
```

In `script.js` retrieve the geographical data with `d3.json`:

```js
(async () => {
  const json = await d3.json(
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  );
})();
```

Draw the world with an object with a `type` of `"Sphere"`.

```js
const sphere = { type: "Sphere" };
```

Pass the object to the path function mapping the data to the SVG with the desired projection.

```js
const projection = d3.geoOrthographic().fitSize([size, size], sphere);

const path = d3.geoPath().projection(projection);

groupGeo.append("path").attr("d", path(sphere)).attr("fill", "hsl(0, 0%, 97%)");
```

Draw the world's countries tapping into the `objects` and `countries` fields.

```js
groupCountries
  .selectAll("path")
  .data(topojson.feature(json, json.objects.countries).features)
  .enter()
  .append("path")
  .attr("d", path);
```

`topojson.features` returns the GeoJSON syntax with a `features` collection for the countries.

Draw relative to a point in the world calling the projecting function with a given longitude and latitude.

```js
groupData
  .select("circle")
  .attr("transform", `translate(${projection([long, lat])})`);
```

## Depth

The orthographic projection already creates the illusion of depth. To further this illusion add a radial gradient on the world's surface.

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

```diff
+.attr("clip-path", "url(#clip-path-overlay)")
```

## Arcs

The demo animates a path between venues, considering the coordinates for the start and end point.

```js
const start = projection(source);
const end = projection(coordinates);

const [x1, y1] = start;
const [x2, y2] = end;
```

With the edges you draw a straight line. With an additional point you can fake arcs with `d3.line` and a curve function.

```js
const line = d3
  .line()
  .x(([x]) => x)
  .y(([, y]) => y)
  .curve(d3.curveBasis);
```

For the additional point consider a point in between the start and end coordinates, offset on the normal perpendicular to the straight line.

Refer to [this Svelte REPL](https://svelte.dev/repl/7a2ab054457341b682f3b0bdb61a1c2f?version=3.52.0) for a simpler test case.

## Rotation

To focus on a point rotate the projection horizontally. Consider the longitude of a point.

```js
[50.510555555555555, 26.0325];
```

To center the point rotate the projection in the opposite direction.

```js
projection.rotate([-50.510555555555555, 0]);
```

To have an offset add, or remove, an arbitrary number of meridians.

## Animation

One way to update the projection's rotation over time is with `d3.timer`.

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

Since the projection's rotation works with an array use `d3.interpolateArray`.

```js
const i = d3.interpolateArray([startAngle, 0, 0], [endAngle, 0, 0]);
```

Update the projection and accompanying visuals.

```js
return (t) => {
  projection.rotate(i(t));

  groupCountries.selectAll("path").attr("d", path);
};
```

## Transition

The demo includes and chains several transitions. Define ahead of time.

```js
const transitionPoint = d3.transition().duration(300).ease(d3.easeQuadIn);
const transitionPath = d3
  .transition(transitionPoint)
  .transition()
  .duration(500)
  .ease(d3.easeQuadInOut);
```

Pass the transition to the `transition` method.

```js
groupData
  .select("circle")
  .attr("r", "0")
  .transition(transitionPoint)
  .attr("r", "7");

groupData
  .select("path")
  .attr("pathLength", "1")
  .attr("stroke-dasharray", "1")
  .attr("stroke-dashoffset", "1")
  .transition(transitionPath)
  .attr("stroke-dashoffset", "0");
```

If you need to do something once the animation ends listen to the `end` event.

```js
transitionPoint.on("end", () => {});
```

Remember that transitions are removed when they end. They are one-use only.

## Additional remarks

### Point

It is possible to draw points on the map with a GeoJSON object with a specific type.

```json
{
  "type": "Point",
  "coordinates": [50.510555555555555, 26.0325]
}
```

If you call the `geoPath` function on such an object it returns the syntax for the `d` attribute for a `path` element. Or `null` if the point should not be visible (consider a point on the other side of the orthographic) projection.

```js
path({
  type: "Point",
  coordinates: [50.510555555555555, 26.0325],
});
```

Change the size of the radius on the path function.

```js
const path = d3.geoPath().projection(projection).pointRadius(7);
```
