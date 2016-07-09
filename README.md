
<p align="center">
  <img src="http://i.imgur.com/s9mvGDd.png">
</p>
<h1 align="center"> Chameleon</h1>
<p align="center">Make use of Chameleon for elements which need to change their style inheriting properties of other elements through jQuery.</p>

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
Even when you don't need to use the real time feature of Chameleon, it prevents you to repeat a lot of code and save a lot of classes (for each background color, border color etc).

For example, imagine a side-nav that needs to change its 'color' and 'border-color' according to the '.top-bar' background-color. You can't use a single class '.red' to these elements because side-nav can't have a red background. So, basically, you would have to create classes like '.red-bg', '.red-text', '.red-border' for each color of your UI and in each page which changes the classes of these elements. With Chameleon, this is much easier and it's realtime (perfect for SPA)!

What if your top-bar changes its background-color each page? You would have to create a lot of classes.
What if your top-bar changes its background-color in page? You would have to create a kinda messy JS.
And in other pages, you would have to repeat the process...

Automate this using Chameleon.

## How to use
### jQuery
```js
$('.chameleon').chameleon({
	mirror: '.top-bar', /* Element that you want to copy some properties */
	inheritAll: false, /* Default: false. If true, will inherit everything */
  colorContrast: true /* Default: true. If false, does not look for a rgb contrast comparing color and backgroundColor */
	set: {
		/* Property that you want to set followed by the one you want to copy */
		color: 'backgroundColor',
		borderColor: 'backgroundColor'
	}
});
```



Alert: This plugin uses another plugin called [attrchange](https://github.com/meetselva/attrchange) created by meetselva
