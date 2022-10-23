# Race Calendar Map

> this project is based on a dated concept, but still worth pursuing

The [F1 website](https://www.formula1.com/en/latest/article.formula-1-announces-23-race-calendar-for-2022.2HcIP34fK3Zznx7YZfWL6P.html) published the race calendar for the 2022 season.

Highlight the destinations geographically taking inspiration from [a bl.ock introducing faux-3D arcs](http://bl.ocks.org/dwtkns/4973620).

## Data

The data is taken directly from the cited F1 website. On top of the three keys describing the date, grand prix and venue I've manually added the geographic coordinates from Wikipedia.

For each track the coordinates describe the location with degrees, minutes and seconds. `getLatLong` receives such a coordinate and returns the values for the longitude and latitude used in a D3 projection.

## World map

To draw a world map with the Earth sphere and countries proceed as follows:

- reference the d3 library

- reference the topojson library

- in the script refer to the JSON file from the world-atlas package: `https://unpkg.com/world-atlas@2.0.2/land-50m.json`

The mentioned JSON provides the TopoJSON coordinates to draw the world's countries.

To draw the sphere use the projecting function on an object with a specific `type` property.

```js
groupGeo
  .append("path")
  .attr("d", path({ type: "Sphere" }))
  .attr("fill", "hsl(0, 0%, 97%)");
```

For the countries refer to the objects and land field.

```js
groupGeo
  .append("path")
  .attr("d", path(topojson.feature(json, json.objects.land)))
  .attr("fill", "hsl(0, 0%, 78%)");
```

`topojson.feature` turns the TopoJSON coordinates to GeoJSON values.

## Overlay

To give the illusioon of depth overlay a translucent gradient.

```js
groupOverlay
  .append("rect")
  .attr("width", size)
  .attr("height", size)
  .attr("fill", "url(#gradient-overlay)")
  .attr("opacity", 0.5);
```

Clip the rectangle so that the gradient is applied to the existing visuals.

```js
groupOverlay
  .append("rect")
  .attr("width", size)
  .attr("height", size)
  .attr("clip-path", "url(#clip-path-overlay)");
```
