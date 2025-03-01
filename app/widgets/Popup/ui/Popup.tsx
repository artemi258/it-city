'use client';

import { MouseEvent, useEffect } from 'react';

import styles from './styles/popup.module.scss';
import {
 CloseButton,
 fadeInPopup,
 fadeInPopupBackground,
 useAppDispatch,
 useAppSelector,
} from 'app/shared';
import { motion } from 'framer-motion';
import useScrollbarSize from 'react-scrollbar-size';
import { togglePopup, FormPopup } from '@features/popup';

export const Popup = (): JSX.Element => {
 const dispatch = useAppDispatch();

 const isActivePopup = useAppSelector((state) => state.popup.isActivePopup);
 const { width } = useScrollbarSize();
 useEffect(() => {
  if (isActivePopup) {
   document.body.style.overflow = 'hidden';
   document.body.style.marginRight = `${width}px`;
  }

  return () => {
   document.body.style.overflow = 'auto';
   document.body.style.marginRight = '0';
  };
 }, [isActivePopup]);

 const handleClosePopup = (e: MouseEvent<HTMLElement>): void => {
  const target = e.target;
  e.stopPropagation();
  if (
   target instanceof HTMLElement &&
   (target.classList.contains(`${styles.popup}`) || target.classList.contains(`${styles.close}`))
  ) {
   dispatch(togglePopup());
  }
 };

 return (
  <motion.article
   onClick={handleClosePopup}
   initial={'hidden'}
   animate={isActivePopup ? 'visible' : 'hidden'}
   variants={fadeInPopupBackground}
   className={styles.popup}>
   <motion.div
    initial={'hidden'}
    animate={isActivePopup ? 'visible' : 'hidden'}
    variants={fadeInPopup}
    className={styles.wrapper}>
    <CloseButton cb={handleClosePopup} classn={styles.close} />
    <FormPopup />
   </motion.div>
  </motion.article>
 );
};
