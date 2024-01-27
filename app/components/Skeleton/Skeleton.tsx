import { motion } from 'framer-motion';
import Image from 'next/image';

import plug from './plug.jpg';

import styles from './Skeleton.module.scss';

export default function Skeleton(): JSX.Element {
 const content = [];

 for (let index = 0; index < 8; index++) {
  content.push(
   <motion.li
    animate={{ opacity: [0.4, 1] }}
    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
    key={index}
    className={styles.wrapper}>
    <Image src={plug} className={styles.img} alt='заглушка' />
    <div className={styles.content}></div>
   </motion.li>,
  );
 }

 return <ul className={styles.skeleton}>{content}</ul>;
}
