# Spider Chart

## [Live Demo](https://codepen.io/borntofrappe/pen/ZEbZxgb)

## Notes

`d3.lineRadial` can actually be repurposed to plot data in a radial, or spider, chart.

### Data

Data is collected from bulbapedia looking at the [base](<https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)#Base_stats>) [stats](<https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)#Base_stats>) for two arbitrary pokemon.

### Angle

Remember that the lineRadial function expects an angle in radians, while the transform property awaits an angle in degree.

To go from one to the other: `degrees = radians * 180 / Math.PI`
