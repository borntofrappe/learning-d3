# Race Calendar Map

The [F1 website](https://www.formula1.com/en/latest/article.formula-1-announces-23-race-calendar-for-2022.2HcIP34fK3Zznx7YZfWL6P.html) published the race calendar for the 2022 season.

Highlight the destinations geographically taking inspiration from [a bl.ock introducing faux-3D arcs](http://bl.ocks.org/dwtkns/4973620).

## Data

The data is taken directly from the cited F1 website. On top of the three keys describing the date, grand prix and venue I've manually added the geographic coordinates from Wikipedia.

For each track the coordinates describe the location with degrees, minutes and seconds, so that the script includes a function to covert the values for the longitude and latitude used in a D3 projection.

## World map

- d3
- topojson
- world-atlas

## Radial gradient

overlay translucent gradient
