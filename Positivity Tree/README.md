# Positivity Tree

## [Live Demo](https://codepen.io/borntofrappe/full/eYpNRRX)

This project is inspired by one of the visuals shown [in this article](https://www.lemonde.fr/les-decodeurs/article/2020/04/07/les-enjeux-du-deconfinement-expliques-en-schemas_6035827_4355770.html) on [lemonde.fr](https://www.lemonde.fr/), and more specifically the graphic showing how a virus is able to spread to more and more people with each passing generation.

I thought it would be a great way to practice with the `d3-tree` module, using the concept with a more uplifting visualization. The idea is to start with the visual described in `face-smiling.svg`, and have the smile spread to more data points. `face-smiling.svg` as opposed to the visual behind `face-default.svg`.

## Notes

> To my future self, a few things worth your time

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

   The `width` and `height` attribute are relative to the wrapping `<svg>` element and its `viewBox`. **Pay attention** on where the symbol is drawn however. Even though the `symbol` has a particular `viewBox`, the shape will be drawn starting from the top left corner. To center the shape in the coordinate system, offset by half the width and half the height

   ```html
   <svg>
     <use href="#face-smiling" x="-40" y="-40" width="80" height="80">
   </svg>
   ```

   Use the `transform` attribute alternatively to `x` and `y`
