export default function tabs() {
	const tabsContent = document.querySelectorAll('.tabs__content'),
		tabs = document.querySelectorAll('.tabs__link'),
		tabsParent = document.querySelector('.tabs__tab');

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.style.display = 'none';
			item.classList.remove('wow', 'animate__animated', 'animate__fadeIn');

			tabs.forEach((item) => {
				item.classList.remove('tabs__link-active');
			});
		});
	}

	hideTabContent();

	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabsContent[i].classList.add('wow', 'animate__animated', 'animate__fadeIn');
		tabs[i].classList.add('tabs__link-active');
	}

	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains('tabs__link')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}
