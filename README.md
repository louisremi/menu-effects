Menu Effects
==============

A collection of CSS3 menu effects (degrades gracefully in IE8).

Have a look at the [Demo](http://louisremi.github.com/menu-effects/)!

Using and extending
-------------------

Your page should include both `menu-effects.css` and `menu-effect.js`. The latter is optionnal but makes the animation run progressively.

Your menus should be marked with `.menu` & `.submenu` classes, and an effect specific class such as `.fly`:

```html
<ul class="menu">
	<li>My submenu will fly!
		<ul class="submenu fly">
			<li>flying item 1</li>
			<li>flying item 2</li>
			...
		</ul>
	</li>
	<li>My submenu will pop!
		<ul class="submenu pop">
			<li>popping item 1</li>
			<li>popping item 2</li>
			...
		</ul>
	</li>
</ul>
```

You are welcome to fork and create new effects.

Credits & License
-----------------

Heavily inspired by [@hakimel](http://twitter.com/hakimel)'s [scroll-effects](http://lab.hakim.se/scroll-effects)

MIT Licensed http://louisremi.mit-license.org/, by [@louis_remi](http://twitter.com/louis_remi)