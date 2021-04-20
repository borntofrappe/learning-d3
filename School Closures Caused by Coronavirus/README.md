# [School Closures Caused by Coronavirus](https://replit.com/@borntofrappe/School-Closures-Caused-by-Coronavirus)

[UNESCO](https://en.unesco.org) studies the impact of Covid-19 on education at a global scale with [a couple of informative maps](https://en.unesco.org/covid19/educationresponse). The goal of this project is to immediately replicate the second of these geographical representation, the one studying the duration of school closures, in order to practice with `d3-geo` and `topojson`.

_Please note_: to read the data from `duration_school_closures.csv` it is necessary to run the project on a server.

```bash
npm install live-server
live-server
```

## World

`topojson/world-data` provides the data necessary to draw the world and its countries.

```js
const world = await d3.json(
  'https://unpkg.com/world-atlas@2.0.2/countries-110m.json'
);
```

The data is in topojson format, and since the `d3-geo` works with geojson syntax, it is necessary to include the `topojson/topojson` module.

```html
<script src="https://unpkg.com/topojson@3.0.2/dist/topojson.js"></script>
```

An object with a type of `'Sphere'` is all that is required to draw the outline of the planet.

```js
const sphere = { type: 'Sphere' };
```

The projection describes how to map the data in the 2D plane, and it uses the sphere to understand the size of the visualization.

```js
const projection = d3.geoNaturalEarth1().fitWidth(width, sphere);
```

Based on the projection, `d3.geoPath` receives a geojson object to provide a fitting syntax for the `d` attribute of `<path>` elements.

```js
const pathGenerator = d3.geoPath(projection);
```

`pathGenerator.bounds` provides a two dimensional array with the dimensions of the input geometry. Through the sphere object, it allows to retrieve the height of the projection.

```js
const height = pathGenerator.bounds(sphere)[1][1];
```

With this information, it is finally possible to draw the map.

- the object of type `'Sphere'` allows to draw the outline of the projection

  ```js
  pathGenerator(sphere);
  ```

- `d3.geoGraticule10()` provides an object to draw the langitude and longitude lines

  ```js
  pathGenerator(d3.geoGraticule10());
  ```

- the features from the retrieved topojson data provide the syntax for the countries

  ```js
  const countries = topojson.feature(world, world.objects.countries);
  pathGenerator(countries[0]);
  ```

Ultimately I opted to just draw the countries (all, but Antarctica), but the instructions are worth remembering.

## Data

The data describing the number of weeks of full and partial school closure is retrieved from the [cited UNESCO source](https://en.unesco.org/covid19/educationresponse). It is important to note that the source is however modified to differentiate the countries with an `id` column. The change is necessary since the `ISO` value from the original dataset describes the country with a short string, and the value doesn't match the identifier provided by the topojson object. `id` replaces the label with with the [ISO 3166-1 numeric country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric).

## Useful Links

- [d3-geo](https://github.com/d3/d3-geo)

- [topojson](https://github.com/topojson/topojson)

- [topojson/world-atlas](https://github.com/topojson/world-atlas)
