# InheritJS Plugin 0.1
Use this plugin when you need to inherit propertie(s) of another class on CSS by running JS.

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

What if your topbar changes the color in different pages and you need to change some properties of the box too without creating classes like 'top-bar--red box--red text-red etc...'
Use InheritJS!

### jQuery
```js
$('.inherit').each(function(){
	$(this).inheritJS();
});
```