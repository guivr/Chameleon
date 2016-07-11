
<p align="center">
  <img src="http://i.imgur.com/s9mvGDd.png">
</p>
<h1 align="center"> Chameleon</h1>
<p align="center">Use Chameleon on elements that need to change their style inheriting properties of other elements through jQuery.</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <a href="https://github.com/guivr/chameleon/stargazers"><img src="https://img.shields.io/github/stars/guivr/chameleon.svg"></a>
  <a href="https://github.com/guivr/chameleon/issues"><img src="https://img.shields.io/github/issues/guivr/chameleon.svg"></a>
  <img src="https://img.shields.io/badge/version-0.4-green.svg">
  <a href="http://codepen.io/guivr/pen/Vjrmzr"><img src="https://img.shields.io/badge/demo-online-green.svg"></a>
  <br><br><br><br>
  <img src="http://i.imgur.com/vsAxG2X.gif">
</p>

---

## Why Chameleon?
Even when not using the real-time feature of Chameleon, it will save you lots of code and classes (e.g. each background color, border color..)

Imagine you have a sidenav that needs to change its `color` and `border-color` according to the `.top-bar`'s `background-color`. You can't simply use a single `.red` class on these elements because your sidenav can't have a red background. So then you would have to create classes such as `.red-bg`, `.red-text`, `.red-border` and so on for each color of your UI. With Chameleon, this is real-time and much easier, perfect for SPAs.

## How to Use
### jQuery
```js
$('.chameleon').chameleon({
	mirror: '.top-bar', /* Element from where you want to copy some properties */
	inheritAll: false, /* Default: false. If true, will inherit everything */
 	colorContrast: true, /* Default: true. If false, will not adapt text for readability */
	set: {
		/* Property that you want to set followed by the one you want to copy */
		color: 'backgroundColor',
		borderColor: 'backgroundColor'
	}
});
```

### License
> You can check out the full license here
This project is licensed under the terms of the MIT license.

### Disclaimer
> This plugin uses [attrchange](https://github.com/meetselva/attrchange), created by @meetselva
