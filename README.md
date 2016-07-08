# ChameleonElement jQuery Plugin 0.3
Build fluid interfaces for apps that need to inherit CSS properties of another class.

* Alert: This plugin uses another plugin called [attrchange](https://github.com/meetselva/attrchange) created by meetselva *

![](http://i.imgur.com/8FoyRmq.gif)

---
## Why Chameleon?
Even when you don't need to use the real time feature of Chameleon, it prevents you to repeat a lot of code and save a lot of classes (for each background color, border color etc).

For example, imagine a side-nav that needs to change its 'color' and 'border-color' according to the '.top-bar' background-color. You can't use a single class '.red' to these elements because side-nav can't have a red background. So, basically, you would have to create classes like '.red-bg', '.red-text', '.red-border' for each color of your UI and in each page changes all the classes of all elements. With Chameleon, this is much easier and it's realtime (perfect for SPA)!

### Without Chameleon:
```html
<div class="top-bar red-bg white-text">Topbar</div>
<ul>
	<li class="is-selected red-text">Option</li>
</ul>
```

And in other pages, you would have to repeat the process...

```html
<div class="top-bar blue-bg white-text">Topbar</div>
<ul>
	<li class="is-selected blue-text">Option</li>
</ul>
```

A lot of different classes, a lot of work, right? Automate this using ChameleonClass.

---

### With Chameleon (any kind of property):
```html
<div class="top-bar red-bg white-text">Topbar</div>
<ul class="chameleon">
	<li class="is-selected"> Option </li>
</ul>
```

## How to use
### jQuery
```js
$('.chameleon').each(function(){
	$(this).chameleonElement({
		element: '.top-bar', /* Element that you want to copy some properties */
		inheritAll: false, /* If true, will inherit everything */
		inherit: {
			/* Property that you want to set followed by the one you want to copy */
			color: 'backgroundColor',
			borderColor: 'backgroundColor'
		}
	});
});
```