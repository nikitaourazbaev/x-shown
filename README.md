# `x-shown`

This is a plugin that adds two directives to Alpine: `x-shown` and `x-hidden`. The code in those directives is run when the element has been successfully shown or hidden.

Works with and without transitions.

Example:

```html
<div
  x-show="open"
  x-shown="console.log('shown', $el)"
  x-hidden="console.log('hidden', $el)"
></div>
```

Add the directives to an element that has `x-show`.

## Installation

### As a module

```sh
npm install x-shown
```

```js
import Alpine from 'alpinejs';
import shown from 'x-shown';

Alpine.plugin(shown);

window.Alpine = Alpine;

Alpine.start();
```

### From a CDN

```html
<html>
  <head>
    ...
    <!-- Alpine Plugins -->
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/x-shown@1.x.x/dist/cdn.min.js"
    ></script>
    <!-- Alpine Core -->
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
    ></script>
  </head>
  ...
</html>
```
