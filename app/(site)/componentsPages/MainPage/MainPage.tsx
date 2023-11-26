'use client';

import { motion } from 'framer-motion';
import { fadeInChildren, fadeInParent } from '@/utils/animations';
import { Montserrat } from 'next/font/google';

import arrow from './arrow.png';
import Image from 'next/image';

import styles from './MainPage.module.scss';
import { Button } from '@/components';

const MontserratFont = Montserrat({ subsets: ['cyrillic'], style: ['normal'] });

export const MainPage = (): JSX.Element => {
 return (
  <section className={styles.mainPage}>
   <div className='container'>
    <motion.div
     initial={'hidden'}
     animate={'visible'}
     variants={fadeInParent}
     className={styles.wrapper}>
     <motion.h1 variants={fadeInChildren} className={`${styles.title} ${MontserratFont.className}`}>
      компьютерный центр
     </motion.h1>

     <div className={`${styles.promo} ${MontserratFont.className}`}>
      <motion.span variants={fadeInChildren}>Продажа компьютеров,</motion.span>
      <motion.span variants={fadeInChildren}>любой офисной техники,</motion.span>
      <motion.span variants={fadeInChildren}>расходных материалов и</motion.span>
      <motion.span variants={fadeInChildren}>комплектующих по</motion.span>
      <motion.span variants={fadeInChildren}>доступным ценам.</motion.span>
     </div>
     <motion.div variants={fadeInChildren} className={styles.text}>
      более 10 лет работы
     </motion.div>

     <Button variants={fadeInChildren} className={styles.btn}>
      Напишите нам
     </Button>
    </motion.div>
   </div>

   <motion.div
    initial={{ x: '-50%' }}
    animate={{ y: [null, 20, 0] }}
    transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
    className={styles.arrow}>
    <Image priority src={arrow} alt='стрелка вниз' />
   </motion.div>
  </section>
 );
};
