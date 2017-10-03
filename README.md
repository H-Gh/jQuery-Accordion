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

<H2>Methods</H2>
<h4>.open()</H4>
This method open a card. Notice that other cards will be close. It takes one parameter which is id of card which should be open.

```javascript
var accordion = $('.accordion').accordion();
accordion.open(0);
```

<h4>.close()</H4>
This method close a card. It takes one parameter which is id of card which should be close.

```javascript
var accordion = $('.accordion').accordion();
accordion.close(0);
```

<h2>Events</h2>
<h4>accordionCardOpen</h4>
This event trigger when a card open. It carry id of card which opened.

```javascript
  $(document).on('accordionCardOpen', function(event, cardId) {
    // ...
  });
```

<h4>accordionCardClose</h4>
This event trigger when a card close. It carry id of card which opened.

```javascript
  $(document).on('accordionCardClose', function(event, cardId) {
    // ...
  });
```
