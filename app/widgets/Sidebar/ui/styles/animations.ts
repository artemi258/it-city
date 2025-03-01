export const container = {
 hidden: {
  opacity: 0,
  x: '-100%',
  transitionEnd: { borderRadius: '0 50% 50% 0', display: 'none' },
 },
 show: {
  opacity: 1,
  x: 0,
  display: 'block',
  borderRadius: '0',
  transition: {
   duration: 0.2,
   when: 'beforeChildren',
   staggerChildren: 0.2,
  },
 },
};
