'use client';

import styles from './styles/SkeletonServices.module.scss';

export const SkeletonServices = (): JSX.Element => {
 const content = [];

 for (let index = 0; index < 16; index++) {
  content.push(<li key={index} className={styles.list}></li>);
 }

 return <ul className={styles.skeleton}>{content}</ul>;
};
