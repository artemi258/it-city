'use client';

import { motion } from 'framer-motion';

import styles from './SkeletonMenu.module.scss';

export const SkeletonMenu = (): JSX.Element => {
 const content = [];

 for (let index = 0; index < 8; index++) {
  content.push(
   <motion.li
    animate={{ opacity: [0.4, 1] }}
    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
    key={index}
    className={styles.content}></motion.li>,
  );
 }

 return <ul className={styles.skeleton}>{content}</ul>;
};
