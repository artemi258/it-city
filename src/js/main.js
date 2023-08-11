import WOW from 'wow.js';

import burger from './module/burger';
import form from './module/form';
import maskForPhone from './module/maskForPhone';
import modal from './module/modal';
import tabs from './module/tabs';

import '../sass/style.scss';
import { metrika } from './module/metrika';

const wow = new WOW({
	boxClass: 'wow', // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null // optional scroll container selector, otherwise use window
});

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	process.env.NODE_ENV === 'development' ? null : metrika();
	wow.init();
	tabs();
	burger();
	maskForPhone();
	modal();
	form();
});
