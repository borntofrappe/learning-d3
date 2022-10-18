# Beauteous Villages

## Goal

Practice with `d3-geo` to 1. plot a map of France and 2. draw points corresponding to the villages listed on ["Les Plus Beaux Villages de France"](https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/).

## Notes

### GeoJSON

On [Natural Earth](https://www.naturalearthdata.com) download _Admin 1 – States, Provinces_ from the _Large Scale data, 1:10m_.

Load the files to [mapshaper.org](https://mapshaper.org/), open the console and type the following to consider continental France only.

```bash
filter 'iso_a2 == "FR"'
filter 'type_en == "Metropolitan department"'
```

Export to GeoJSON — see `geo.json`.

### Projection

The coordinates are already projected, so it would be possible to use the features directly.

```js
const path = d3
  .geoPath()

  // later
  .append("path")
  .attr("d", path);
```

There are however two issues.

1. you need to draw the departments in an SVG width a given width and height (or in this instance `viewBox`)

   Use an identity projection and the `fitSize` method. As a simplification I chose to map the data in a squared canvas

   ```js
   const projection = d3.geoIdentity().fitSize([size, size], dataGeo);
   ```

2. the map is upside down

   Flip the vertical coordinate, again through the projection, with the `reflectY` method

   ```js
   const projection = d3
     .geoIdentity()
     .reflectY(true)
     .fitSize([size, size], dataGeo);
   ```

Apply the projection to the path.

```js
const path = d3.geoPath().projection(projection);
```

### Load data

You need to load the JSON data with `d3.json`, an asynchronous function. To avoid a layout shift immediately add the `<svg>` element and then, _when the data is vailable_, draw the necessary visuals.

It would be possible to conjure something more complex, like an animated loader, but in the demo I was satisfied to add a string of text with a temporary message.

With a D3 transition you can remove the default view and introduce the map smoothly over time — in the demo with a fading transition.

### data

In `dataGeo` store the geographical coordinates to draw the map. Plot the map of France with `d3.geoPath()` and the chosen projection — see above.

In `dataVillages` store the array of values for the villages listed in the cited article. Add a series of elements matching the position described by the longitude and langitude. Here use the projection function to find the correct horizontal and vertical coordinate.

```js
// projection([long, lat]) // [x, y]
.attr(
  "transform",
  ({ longitude, latitude }) =>
    `translate(${projection([
      parseFloat(longitude),
      parseFloat(latitude),
    ])})`
);
```
