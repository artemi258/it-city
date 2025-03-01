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
  y: '-50%',
  x: '-50%',
  transition: { duration: 0.5 },
 },
 hidden: {
  y: '-100%',
  x: '-50%',
  transitionEnd: { display: 'none' },
  transition: { duration: 0.5 },
 },
};

export const fadeInPopupBackground = {
 visible: {
  display: 'block',
  opacity: 1,
  transition: { duration: 0.5 },
 },
 hidden: {
  opacity: 0,
  transitionEnd: { display: 'none' },
  transition: { duration: 0.5 },
 },
};
