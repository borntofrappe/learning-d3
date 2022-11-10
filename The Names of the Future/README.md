# [The Names of the Future](https://codepen.io/borntofrappe/full/MWXpeve)

Create a streamgraph to highlight the 100 most frequent names for French babies, males, in the 2011-2021 range.

## Data

The script adds a record of the most 100 frequent names for French babies, males, as documented by the [national institute of statistics and economic studies](https://www.insee.fr/fr/statistiques/3532172)(INSEE).

## Groups

The structure of the SVG tree helps to explain the flow behind the interaction and transition between areas:

- `groupLetters`: add the `<path>` elements to show the letters

  These elements are interactive so that hovering on one of them highlights the letter with the tooltip, while clicking one of them triggers the transition to the detailed visualization

- `groupOverlay`: add a rectangle above the letters

  This element essentially blocks further interaction in the moment a letter is selected.

  Furthermore, it is used to move the visualization back to the letters in the moment a click is registered

- `groupLetter`: add one `<path>` element for the selected letter

  Changing all the `d` attribute for the letters at the same time doesn't produce the desired effect, which is to have the selected area expand above all other curves. This element creates the visual with a temporary overlay.

- `groupNames`: add the `<path>` elements to show the names beginning with the selected letter.

  These elements are interactive in that hovering on one of them prompts the tooltip to show the given name.

## Stack

There are several stack layouts, to display the letters, names, but also to create placeholder values to transition the areas in the `d` attribute of the different path elements:

- for the letters stack the data considering the array of letters

  ```js
  d3.stack()
    .keys(letters)
    .value((d, key) => d[key] || 0);
  ```

  Add a fallback value since a letter might not exist for every year.

- for the letter further condition the value to the selected option

  ```js
  d3.stack()
    .keys(letters)
    .value((d, key) => {
      if (key !== letter) return 0;

      return d[key] || 0;
    });
  ```

  Since you want the letter to expand and consider the available space note that you need a new scale, considering the new stack's values, and a new area function, see `scaleYLetter` and `areaLetter`.

  These are actually repeated for the names, as you want the curves to add up to the letter's area.

- for the names consider the array of names beginning with the given letter

  ```js
  d3.stack()
    .keys(namesLetter)
    .value((d, key) => d[key] || 0);
  ```

To create the streamgraph use a specific function for the `offset` and `order` methods of all stacks.

```js
d3.stack().offset(d3.stackOffsetSilhouette).order(d3.stackOrderInsideOut);
```
