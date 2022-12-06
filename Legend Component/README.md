# [Legend Component](https://codepen.io/borntofrappe/full/RwJEOyg)

Create a legend component for an ordinal color scale. Dispatch custom events to highlight specific items.

## dispatch

Create an instance of `d3.dispatch`

```js
const dispatch = d3.dispatch("enter-item", "leave-area");
```

Describe with a string the events to-be-emitted.

Ultimately, you'd dispatch the event with `dispatch.call`.

```js
item.on("mouseenter", () => {
  //...
  dispatch.call("enter-item");
});
```

In the context of a component this allows to listen to the specific event.

```js
legendComponent.on("enter-item", () => {
  //
});
```

However, you first need to pass the `.on()` instruction to the component.

```js
legend.on = function () {
  if (!arguments.length) return on;

  dispatch.on.apply(dispatch, arguments);
  return this;
};
```

This is a tad alien, but focus on the line with the `.apply` function.

```js
dispatch.on.apply(dispatch, arguments);
```

`.apply` is similar to `.call`, with the most immediate difference being that the first takes an array of arguments, the second a comma separated list of values.

You could actually achieve the same functionality with `.call`.

```js
dispatch.on.call(dispatch, ...arguments);
```

In both instances you pass the arguments, the `.on()` directives to the dispatcher, almost binding them to the `dispatch` object.

## arguments

Past the event name, you can pass more information with additional arguments.

```js
dispatch.call("enter-item", ...);
```

How you implement the call is up to you. Following D3's convention.

```js
rect.on("mouseenter", function (e, d) {
  // this | element
  // e    | mouseenter event
  // d    | data
});
```

Specify a value for `this`, the event and the data you wish to pass.

```js
dispatch.call("enter-item", this, e, d);
```

In the specific demo `d` refers to a label, picked up by the component to highlight the matching value.
