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
