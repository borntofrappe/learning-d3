# [Beauteous Villages](https://codepen.io/borntofrappe/full/KKeGNVg)

## Goal

Practice with geographical visualizations:

1.  create a GeoJSON file from a shape file downloaded from Natural Earth

2.  map the GeoJSON coordinates to @@path` elements

3.  project a series of data points on the map

---

**Notice**: the project is developed mainly in the `France` folder.

`World` recreates the visualization without accessing local `.json` files — and without requiring a live server. For the map, the script retrieve a TopoJSON file from an online source. The idea is to then rotate and scale the projection to focus on France and draw only the connected feature.

## Dataset

Past the GeoJSON data the project includes a JSON file with the list of villages certified by a French association as ["Les Plus Beaux Villages de France"](https://www.les-plus-beaux-villages-de-france.org/fr/nos-villages/), the most beautiful villages in France.

## GeoJSON

On [Natural Earth](https://www.naturalearthdata.com) download _Admin 1 – States, Provinces_ from the _Large Scale data, 1:10m_.

Load the files to [mapshaper.org](https://mapshaper.org/), open the console and type the following to consider continental France only.

```bash
filter 'iso_a2 == "FR"'
filter 'type_en == "Metropolitan department"'
```

Export to GeoJSON — see `france.json`.

In the script, once you've downloaded the file with `d3.json`, use the features directly.

```js
const path = d3.geoPath();

groupGeoJSON
  .selectAll("path")
  .data(geoJSON.features)
  .enter()
  .append("path")
  .attr("d", path);
```

This works to add path elements, with two major issues:

1. the elements are not drawn in the visible area described by the `viewBox`

   Use an identity projection and the `fitSize()` method. I chose to map the data in a squared canvas:

   ```js
   const projection = d3.geoIdentity().fitSize([size, size], dataGeo);
   ```

2. the visual is upside down

   Flip the vertical coordinate, through the same projection, but with the `.reflectY()` method:

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

And the static map is complete.

For the list of villages, and again once you've loaded the necessary dataset, add a series of `circle` elements.

```js
groupVillages.selectAll("circle").data(villages).enter().append("circle");
```

Pass the longitude and latitude to the projection to find the matching x and y coordinates.

```js
.attr(
  "transform",
  ({ longitude, latitude }) =>
    `translate(${projection([longitude, latitude])})`
)
```

The script relies on the same projection later on, to pinpoint a specific position on the map. The logic remains the same, however: use longitude and latitud to find x y coordinates.

## async

You need to load the JSON data with `d3.json`, an asynchronous function. To avoid a layout shift add the `<svg>` element and then, _when the data is vailable_, draw the necessary visuals.

It would be possible to conjure something more complex, like an animated loader, but in the demo I only show a string of text with a temporary message.

With a D3 transition you can remove the default view and introduce the map smoothly over time.

## Transition

The visualization includes several transitions, often chained in sequence. In terms of design I tried to first map the data immediately. Only afterwards I modified the visuals and attributes to progressively paint the complete picture.

To summarize the flow of the script:

- start with a default `svg` element and a temporary message to justify the delay from the `async` function

- with the data fade the text out fade the map of France in (`transitionData`)

- after the map progressively animate the circles for the villages (`transitionVillages`)

- _at the same time_ and with the same duration it takes to show all circles animate the text describing the corresponding number

- after the villages animate the text to highlight a village at random (`transitionHighlight`)

- after the text animate the stroke of a path element to link the text to a circle on the map (callback for the `end` event associated to `transitionHighlight`)

- once the line is complete animate a separate circle above the existing one. Having a dedicated circle, included in the `svg` element after the villages, allows to have the visual above any previous shape

## Interaction

The idea is to update the village highlighted in the bottom left corner as the pointer hovers of different sections of the map.

For the sections I implemented a Delaunay triangulation to expand the interactable area (the circles being too small a target). The code follows the example of the demo _Lines and Delaunay_, in this very repository, with the only difference being the coordinates of the points. Use the projection function for the x and y values.
