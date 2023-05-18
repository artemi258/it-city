export default function maskForPhone() {
	let setCursorPosition = (pos, elem) => {
		elem.focus();
		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};

	function createMask(event) {
		let matrix = '+7 (___)-__-__-___',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, ''),
			checkMask = matrix.charAt(1);

		if (def.length >= val.length || this.value.charAt(1) !== checkMask) {
			val = def;
		}

		this.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});

		if (event.type === 'blur') {
			if (this.value.length == 2) {
				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}

	const inputs = document.querySelectorAll('[name="phone"]');

	inputs.forEach((item) => {
		item.addEventListener('input', createMask);
		item.addEventListener('focus', createMask);
		item.addEventListener('blur', createMask);
	});
}
