export default function burger() {
	const burger = document.querySelector('.burger'),
		nav = document.querySelector('.header__nav-item ul');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger__active');
		nav.classList.toggle('nav__active');
	});

	function eventCloseNav() {
		if (document.documentElement.clientWidth < 768) {
			nav.addEventListener('click', (e) => {
				if (e.target.href) {
					burger.classList.toggle('burger__active');
					nav.classList.toggle('nav__active');
				}
			});
		}
	}

	window.addEventListener('resize', function () {
		eventCloseNav();
	});
	eventCloseNav();
}
