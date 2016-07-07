# InheritJS Plugin 0.1
Use this plugin when you need to inherit propertie(s) of another class in CSS by running JS.

---
## Example Usage

### HTML
```html
<div class="top-bar red">
<div class="box inherit" data-parent=".top-bar" data-inherit="background" data-applyto="borderColor,color">
```

### CSS
```css
.top-bar {
	/* WHATEVER */
}
.red {
	background: red;
}
.box {
	/* Changes Background, Border and Color according to the color of the topbar */
}
```

What if your topbar changes the color in different pages and you need to change some properties of the box too without creating classes like 'top-bar--red box--red text-red etc...'?
Use InheritJS!

### jQuery
```js
$('.inherit').each(function(){
	$(this).inheritJS();
});
```

---
## Advanced Usage Example

![](http://i.imgur.com/EfzigV4.png)
```html
<div class="top-bar red"></div>
<ul class="inherit">
  <!-- SELECTED LI NEED TO HAVE THE SAME COLOR (NOT BACKGROUND-COLOR) AND BORDER-COLOR OF TOPBAR !-->
  <li class="is-selected">Hello World</li>
</ul>
```
```css
.top-bar .red {
	// Can't use '.red' class in the li because we just want to change the 'color' property, not 'background'
	background: red;
}
```

Without using this plugin, you would have to create classes like '.red-text' and repeat a lot of html by applying the same things on top-bar as well as ul. InheritJS is here to help you now :)



![](http://i.imgur.com/AoPN1D4.png)
```html
<div class="top-bar red"></div>
<ul class="inherit" data-parent=".top-bar" data-inherit="background" data-applyto="borderColor,color">
  <!-- SELECTED LI NEED TO HAVE THE SAME COLOR (NOT BACKGROUND-COLOR) AND BORDER-COLOR OF TOPBAR !-->
  <li class="is-selected">Hello World</li>
</ul>
```
```js
$('.inherit').each(function(){
    var inheritClassData = $(this).data();
    $(this).children('li.is-selected').inheritJS(inheritClassData);
});
```