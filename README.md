# jQuery-Accordion
This plugin will use for creating an accordion menu.

<h2>Usage</h2>
<h4>Html</h4>

```html
<div class='accordion'>
  <div class='card'>
    <div class='header'>
      header 1
    </div>
    <div class='body'>
      body 1
    </div>
  </div>
  <div class='card'>
    <div class='header'>
      header 2
    </div>
    <div class='body'>
      body 2
    </div>
  </div>
</div>
```

<h4>jQuery</h4>

```javascript
$(document).ready(function() {
  $('.accordion').accordion();
})
```
