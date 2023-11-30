export const fadeInParent = {
 visible: {
  transition: {
   staggerChildren: 0.2,
  },
 },
};

export const fadeInChildren = {
 visible: {
  opacity: 1,
  transition: { duration: 1 },
 },
 hidden: {
  opacity: 0,
 },
};

export const fadeInSpinner = {
 visible: {
  height: 50,
  opacity: 1,
  transition: { duration: 0.5 },
 },
 hidden: {
  opacity: 0,
  height: 0,
  transition: { duration: 0.5 },
 },
};

export const fadeInPopup = {
 visible: {
  display: 'block',
  opacity: 1,
  y: '-50%',
  x: '-50%',
  transition: { duration: 0.5 },
 },
 hidden: {
  opacity: 0,
  y: '-100%',
  x: '-50%',
  transitionEnd: { display: 'none' },
  backgroundColor: '',
  transition: { duration: 0.5 },
 },
};
