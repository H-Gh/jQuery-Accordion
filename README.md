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
$('.accordion').accordion();
```

<H2>Options</h2>

```javascript
var options = {
  slideDownSpeed : 200, // Duration in ms which sliding down takes long
  slideUpSpeed : 400 // Duration in ms which sliding up takes long
};
$('.accordion').accordion(options);
```

<H2>methods</H2>
<h4>.open()</H4>
This method open a card. Notice that other cards will be close. It takes one parameter which is id of card which should be open.

```javascript
var accordion = $('.accordion').accordion();
accordion.open(0);
```
