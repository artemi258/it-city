import Image from 'next/image';

import plug from './plug.jpg';

import styles from './styles/skeletonProducts.module.scss';

export const Skeleton = (): JSX.Element => {
 const content = [];

 for (let index = 0; index < 15; index++) {
  content.push(
   <li key={index} className={styles.list}>
    <div className={styles.images}>
     <Image src={plug} className={styles.img} alt='заглушка' />
    </div>
    <div className={styles.wrapper}></div>
   </li>,
  );
 }

 return <ul className={styles.skeleton}>{content} </ul>;
};
