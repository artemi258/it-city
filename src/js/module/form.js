export default function form() {
	const input = document.querySelectorAll('input');
	const textArea = document.querySelector('textarea');
	const success = document.querySelector('.popup__text-success');
	const error = document.querySelector('.popup__text-error');

	const message = {
		loading: 'img/load.gif',
		success: 'img/ok.png',
		error: 'img/error.png'
	};

	const form = document.querySelectorAll('form');

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await res;
	};

	const clearInput = () => {
		input.forEach((item) => {
			item.value = '';
		});
		textArea.value = '';
	};

	form.forEach((item) => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('popup__status');
			item.appendChild(statusMessage);

			let statusImg = document.createElement('img');
			statusImg.classList.add('popup__status-img');
			statusImg.setAttribute('src', message.loading);
			statusMessage.appendChild(statusImg);

			const formData = new FormData(item);

			postData('mailer/smart.php', formData)
				.then(() => {
					statusImg.setAttribute('src', message.success);
					success.style.display = 'block';
				})
				.catch(() => {
					statusImg.setAttribute('src', message.error);
					error.style.display = 'block';
				})
				.finally(() => {
					clearInput();
					setTimeout(() => {
						statusMessage.remove();
						success.style.display = 'none';
						error.style.display = 'none';
					}, 5000);
				});
		});
	});
}
