---
layout: page
title: Clickable
---

{% raw %}
### Methods


<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [clickable](#clickable)

### clickable

Clicks elements matched by a selector.

**Parameters**

-   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** CSS selector of the element to click
-   `userOptions`   (optional, default `{}`)
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Additional options
    -   `options.scope` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Nests provided scope within parent's scope
    -   `options.at` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Reduce the set of matched elements to the one at the specified index
    -   `options.visible` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Make the action to raise an error if the element is not visible
    -   `options.resetScope` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Ignore parent scope
    -   `options.testContainer` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Context where to search elements in the DOM

**Examples**

```javascript
// <button class="continue">Continue<button>
// <button>Cancel</button>

import { create, clickable } from 'ember-cli-page-object';

const page = create({
  continue: clickable('button.continue')
});

// clicks on element with selector 'button.continue'
page.continue();
```

```javascript
// <div class="scope">
//   <button>Continue<button>
// </div>
// <button>Cancel</button>

import { create, clickable } from 'ember-cli-page-object';

const page = create({
  continue: clickable('button.continue', { scope: '.scope' })
});

// clicks on element with selector '.scope button.continue'
page.continue();
```

```javascript
// <div class="scope">
//   <button>Continue<button>
// </div>
// <button>Cancel</button>

import { create, clickable } from 'ember-cli-page-object';

const page = create({
  scope: '.scope',
  continue: clickable('button.continue')
});

// clicks on element with selector '.scope button.continue'
page.continue();
```

Returns **Descriptor** 
{% endraw %}