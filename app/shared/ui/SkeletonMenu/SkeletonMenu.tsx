'use client';

import styles from './styles/SkeletonMenu.module.scss';

export const SkeletonMenu = (): JSX.Element => {
 const content = [];

 for (let index = 0; index < 8; index++) {
  content.push(<li key={index} className={styles.list}></li>);
 }

 return <ul className={styles.skeleton}>{content}</ul>;
};
