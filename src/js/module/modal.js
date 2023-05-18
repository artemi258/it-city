export default function modal() {
	const btn = document.querySelector('.header__sub-btn'),
		popup = document.querySelector('.popup'),
		popupClose = document.querySelector('.popup__close'),
		header = document.querySelector('.header__nav'),
		windowWidth = document.documentElement.clientWidth;

	const width = calcScroll();

	btn.addEventListener('click', () => {
		popup.classList.add('animate__animated', 'wow', 'animate__fadeIn');
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${width}px`;
		header.style.width = `${windowWidth}px`;
		header.style.right = `${width}px`;
	});
	popupClose.addEventListener('click', () => {
		popup.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = `0px`;
		header.style.right = `0px`;
		header.style.width = '100%';
		popup.classList.remove('animate__animated', 'wow', 'animate__fadeIn');
	});
	popup.addEventListener('click', (e) => {
		if (e.target === popup) {
			popup.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
			header.style.right = `0px`;
			header.style.width = '100%';
			popup.classList.remove('animate__animated', 'wow', 'animate__fadeIn');
		}
	});

	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);

		document.body.appendChild(div);

		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}
}
