# [Word Map](https://codepen.io/borntofrappe/full/xxzEKaW)

Recreate the concept of [a tag cloud](https://en.wikipedia.org/wiki/Tag_cloud) with a treemap layout and `<text>` elements.

## Data

As a test case use the list of [Most common words in English](https://en.wikipedia.org/wiki/Most_common_words_in_English#100_most_common_words). For the value describing the words' importance use the polysemy column.

| word | polysemy |
| ---- | -------- |
| take | 66       |
| go   | 54       |
| up   | 50       |
| make | 48       |
| on   | 43       |
| ...  | ...      |

## Pyramid

The order ultimately influences the arrangement in the layout, positioning elements from the top left corner to the bottom right corner.

Since I'd like to have the most important words around the center `dataPyramid` arranges the data so that the highest value is in the middle of the array, and smaller values are positioned before and after.

## Layout

The treemap layout divides the SVG into rectangles, efficiently positioning and sizing the elements in the given width and height.

Based on these rectangles the idea is to add `text` elements and have the text sized as much as the rectangle area.

The relevant attributes are:

- `textLength`: expand the text to match the rectangle's width

- `lengthAdjust`: modify the individual characters to have them sized as much as the space allows

- `fontSize`: expand the text to have each character as tall as the rectangle's height

I might also note the importance of the `dominant-baseline` attribute. The elements are positioned relative to the top left corner of the rectangle, and the `hanging` value pushes the labels down into the desired <!-- , visible --> area.

Refer to [this Svelte REPL](https://svelte.dev/repl/c7c73bfd42ad4d0dbfd4b7898883bbba?version=3.52.0) for a proof-of-concept.

## Rotate

When a rectangle is taller than wider the characters are exceedingly distorted. To reduce the issue the idea is to have the text rotated and sized in the opposite dimension. Here `textLength` matches the rectangle's height and `fontSize` the box's width.

It is also necessary to translate the element to the appropriate corner of the rectangle (bottom left), knowing that the rotation is applied from the top left corner.
