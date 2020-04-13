# Positivity Tree

## [Live Demo](https://codepen.io/borntofrappe/full/eYpNRRX)

This project is inspired by one of the visuals shown [in this article](https://www.lemonde.fr/les-decodeurs/article/2020/04/07/les-enjeux-du-deconfinement-expliques-en-schemas_6035827_4355770.html) on [lemonde.fr](https://www.lemonde.fr/), and more specifically the graphic showing how a virus is able to spread to more and more people with each passing generation.

I thought it would be a great way to practice with the `d3-tree` module, using the concept with a more uplifting visualization. The idea is to show a smiling face, and connect it with more and more smiling faces. In line with the inspiring visualization, with an arbitrary number of connections. See `face-smiling.svg` and `face.default` for a reference on the graphics making up the tree diagram.

### Faces

To draw the faces I decided to experiment with the `<defs>` ,`<symbol>` and `<use>` elements.

1. define a symbol

   ```html
   <svg>
     <defs>
       <symbol id="face-smiling" viewBox="-50 -50 100 100"></symbol>
     </defs>
   </svg>
   ```

   By default, nothing within the `defs` block will be drawn on the screen. Notice that the `symbol` element has a `viewBox`, which is applied to the nested drawing elements, and an `id` attribute, which will come in handy in a moment.

2. describe the shape with circle, path, rect... and other drawing elements

   ```html
   <svg>
     <defs>
       <symbol viewBox="-50 -50 100 100">
         <circle r="47" stroke="currentColor" stroke-width="6" fill="none" />
         <circle r="5" cx="-15" cy="-6" />
         <circle r="5" cx="15" cy="-6" />
         <path d="M -10 15 h 20" stroke="currentColor" stroke-width="4" fill="none" />
       </symbol>
     </defs>
   </svg>
   ```

3. use the symbol

   ```html
   <svg>
     <defs>
       <symbol viewBox="-50 -50 100 100">
       <!-- drawing elements -->
       </symbol>
     </defs>

     <use href="#face-smiling">
   </svg>
   ```

   Notice how `href` refers to the value previously set in the `id` attribute.

4. resize as needed

   ```html
   <svg>
     <use href="#face-smiling" width="80" height="80">
   </svg>
   ```

   The `width` and `height` attribute are relative to the wrapping `<svg>` element and its `viewBox`. **Pay attention** on where the symbol is drawn however. The shape is drawn starting from the top left corner, and to center the visual in the SVG coordinate system, be sure to offset by half the width and half the height

   ```html
   <svg>
     <use href="#face-smiling" x="-40" y="-40" width="80" height="80">
   </svg>
   ```

   Use the `transform` attribute alternatively to `x` and `y`

```html
<svg>
  <use href="#face-smiling" transform="translate(-40 -40)" width="80" height="80">
</svg>
```

### Data

A tree diagram is based on a hierarchical structure. Namely, you start with a root node, and for each "generation", you add a `children` array, describing the connection with the previous node.

```js
const data = {
  name: "",
  children: [
    {
      name: "",
    },
    {
      name: "",
      children: [],
    },
  ],
};
```

To build the nested structure I fell back to using arrays, and then `d3.stratify` to map the data as above. Here's the approach.

1. start with an array describing the root node

   ```js
   const data = [
     {
       isSmiling: true,
     },
   ];
   ```

The boolean is set to `true` as the root node ought to describe a smiling face.

2. set up a loop to specify however many generations

   ```js
   const generations = 2;

   for (let i = 0; i < generations; i += 1) {}
   ```

In the for loop:

1. consider the objects in the `data` array that have the boolean set to `true` and no `id` attribute

   ```js
   const latestGenerations = data.filter((point) => point.isSmiling && !point.id);
   ```

`isSmiling` because only the nodes with the affirmative boolean are meant to have children. `id` to make sure you don't get the same data point twice. More on this in a second.

2. loop through the latest generations

```js
latestGenerations.forEach(latestGeneration => {
}
```

3. add an `id` property. This will make the particular data point a node, with additional data points connected to it.

   ```js
   latestGenerations.forEach(latestGeneration => {
     const id = Math.random();
     latestGeneration.id = id;
   }
   ```

4. append to the `data` array however many connections to the specific `id`. To this end I developed a separate function in `getGeneration()`

   ```js
   latestGenerations.forEach(latestGeneration => {
     const id = Math.random();
     latestGeneration.id = id;
     data.push(...getGeneration(id));
   }
   ```

The `getGeneration` function is more self-explanatory than this construct. It takes as argument an `id` as well as the number of connections to the data point with the specific `id`

```js
function getGeneration(parentId, children = 5, numberPositive = 3) {}
```

`numberPositive` is most appropriate to the particular visualization, to describe how many data points share the `isSmiling` boolean. I'll let you dive in how the function creates an array of data points with a pseudo random order. Pay attention however to the `parentId` attribute, as this will become essential for the `.stratify` method.

```js
const point = {
  ...,
  parentId: parentId,
};
```

It isn't the most clear structure, but once the `for` loop has a chance to run, you end up with an array of objects. Some have an `id` property, and some have a `parentId` property linking to the `id` value.

To build the JSON-like data structure, `d3.stratify` references these values as follows:

```js
const root = d3
  .stratify()
  .id((d) => d.id)
  .parentId((d) => d.parentId);
```

[As per the documentation](https://github.com/d3/d3-hierarchy/blob/master/README.md#stratify) then, the function can be used directly on the input data

```js
const rootData = d3
  .stratify()
  .id((d) => d.id)
  .parentId((d) => d.parentId)(data);
```

But honestly, I prefer creating an explicit, additional variable.

```js
const dataRoot = root(data);
```

### Viewport

The inspiring visualization has an additional intriguing feature: for devices with a viewport smaller than an arbitrary threshold, the tree diagram displays the data top to bottom, instead of left to right.

As the direction changes, there are different parts of the codebase which need adjusting: the size of the tree diagram, the link function (vertical or horizontal), the position of the individual data points. To accommodate for these changes, I move the code in the body of a function, which then uses the data join introduced in the **data join** project to append/update the necessary elements.

Instead of just appending the path elements with a class of `.connection` for instance.

```js
svg
  .selectAll("path.highlight")
  .data(links.filter((link) => link.target.data.isSmiling))
  .enter()
  .append("path")
  .attr("class", "highlight")
  .attr("d", (d) => link(d))
  .attr("fill", "none")
  .attr("stroke", "hsl(45, 90%, 80%)")
  .attr("stroke-width", "25");
```

Use the join concept to update and later update if the nodes are already available.

```js
svg
  .selectAll("path.highlight")
  .data(links.filter((link) => link.target.data.isSmiling))
  .join(
    (enter) =>
      enter
        .append("path")
        .attr("class", "highlight")
        .attr("d", (d) => link(d))
        .attr("fill", "none")
        .attr("stroke", "hsl(45, 90%, 80%)")
        .attr("stroke-width", "25"),
    (update) => update.attr("d", (d) => link(d))
  );
```

The function accepts two arguments, in the input data and a boolean describing the direction of the diagram.

```js
function plotData(data, topToBottom = true) {}
```

By default, it is called with the data and a boolean describing if the window crosses a given threshold.

```js
const { innerWidth } = window;
const threshold = 600;
let topToBottom = innerWidth < threshold;
plotData(data, topToBottom);
```

And following the resize event, it is again called, but only if the boolean changes its value.

```js
window.addEventListener("resize", function () {
  const { innerWidth } = this;
  if (topToBottom !== innerWidth < threshold) {
    topToBottom = innerWidth < threshold;
    plotData(data, topToBottom);
  }
});
```

I used `this`, but the function would equally work retrieving the `innerWidth` from the `window` object, made available globally.
