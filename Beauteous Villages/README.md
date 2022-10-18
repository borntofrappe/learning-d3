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

Export to GeoJSON — see `france.json`.
