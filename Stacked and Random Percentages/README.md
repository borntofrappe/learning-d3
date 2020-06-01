# Stacked and Random Percentages

## [Live Demo](https://codepen.io/borntofrappe/full/QWjeEEg)

This project is inspired by a pretend data visualization, shown [in this keynote](https://youtu.be/w9yrrQBBKos) to the JamStack 2020 conference.

At roughly [minute 9](https://youtu.be/w9yrrQBBKos?t=565), the speaker introduces the data visualization with a series of shapes stacked on top of each other. To replicate this structure, the script takes advantage of several d3 methods. `d3.randomBeta` and `d3.bin` are picked to build the desired shapes; `d3.randomBeta` is specifically used to create the desired tail in the distribution: at first to the right, then to the left.

Past these methods, however, the project is mostly about JavaScript, and massaging the data in the most appropriate structure. At first to build the values, then the format necessary for the `d3.stack` function.
