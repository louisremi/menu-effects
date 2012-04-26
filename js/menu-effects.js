/*
 * Menu Effects: A collection of CSS3 menu effects (degrades gracefully in IE8).
 *
 * This file make the animation run "progressively" and is optionnal
 * (by introducing a small delay between the animation of each item)
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/menu-effects
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * Are you using this in a paid work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */

(function(document) {

// feature detection
var div = document.createElement( "div" ),
	divStyle = div.style,
	suffix = "ransition",
	prefixes = [
		"WebkitT",
		"MozT",
		"msT",
		"0T",
		"t"
	],
	i = prefixes.length,
	prop,
	style = document.createElement( "style" ),
	inner = "",
	menus, i, longest = 0,
	items, j, nbItems;

// feature detection
while ( i-- ) {
	if ( ( prefixes[i] + suffix ) in divStyle ) {
		prop = "-" + prefixes[i].replace( /T/, "-t" ).toLowerCase() + suffix;
		continue;
	}
}

if ( !prop ) { return; }

window.addEventListener("DOMContentLoaded", function() {

	menus = document.querySelectorAll( ".submenu" );
	i = menus.length;

	// loop on menus
	while ( i-- ) {
		// finding the child items of this list is actually tricky
		c( menus[i], "add", "meTemp" );
		items = menus[i].parentNode.querySelectorAll( ".meTemp>li" );
		c( menus[i], "remove", "meTemp" );
		nbItems = j = items.length;
		c( menus[i], "add", "meL"+j );

		// search for the longest menu of the page
		if ( j > longest ) {
			longest = j;
		}

		// loop on items
		while ( j-- ) {
			// forward class
			c( items[j], "add", "meF" + j );
			// backward class
			c( items[j], "add", "meB" + (nbItems -j-1) );
		}
	}

	// It's now time to generate the css
	i = longest;
	while ( i-- ) {
		inner +=
			// The transition-delay prevents the menu to disappear before the transition is run backward
			".meL"+(i+1) + "{" + prop + ":max-height 1ms linear " + ( 600 + i * 66 ) + "ms}\n" +
			// these are the delay that make the animation progressive
			".menu>li:hover .meF"+i + ",.menu>li:focus .meF"+i + "{" + prop + "-delay:" + ( i * 66 ) + "ms}\n" +
			"li.meB"+(longest -i-1) + "{" + prop + "-delay:" + ( (longest -i-1) * 66 ) + "ms}\n";
	}

	style.innerHTML = inner;

	document.head.appendChild( style );

});

// c, an expressive className manipulation library
// (because classList still appear to be unavailable in IE10)
function c(e,v,n,c,r){r=e[c='className'].replace(RegExp(' *\\b'+n+'\\b','g'),'');return'has'==v?r!=e[c]:e[c]={add:1,toggle:r==e[c]}[v]?r+' '+n:r};

})(document);