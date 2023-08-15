export const fadeInChildren = {
	visible: {
		opacity: 1,
		transition: { duration: 2 }
	},
	hidden: {
		opacity: 0
	}
};
export const fadeInParent = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3
		}
	},
	hidden: {
		opacity: 0
	}
};
