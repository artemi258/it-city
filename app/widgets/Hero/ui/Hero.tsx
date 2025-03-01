'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';

import bg from './images/bgMainPage.jpg';
import arrow from './images/arrow.png';

import styles from './styles/Hero.module.scss';
import { Button, useAppDispatch } from '@shared';
import { togglePopup } from '@features/popup';

const MontserratFont = Montserrat({ subsets: ['cyrillic'], style: ['normal'] });

export const Hero = (): JSX.Element => {
 const dispatch = useAppDispatch();

 const handleClick = (): void => {
  dispatch(togglePopup());
 };

 return (
  <section className={styles.hero}>
   <Image priority className={styles.bg} src={bg} alt={'задний фон'} />
   <div className='container'>
    <div className={styles.wrapper}>
     <h1 className={`${styles.title} ${MontserratFont.className}`}>компьютерный центр</h1>

     <div className={`${styles.promo} ${MontserratFont.className}`}>
      <span>Продажа компьютеров,</span>
      <span>любой офисной техники,</span>
      <span>расходных материалов и</span>
      <span>комплектующих по</span>
      <span>доступным ценам.</span>
     </div>
     <div className={styles.text}>более 10 лет работы</div>

     <Button onClick={handleClick} className={styles.btn}>
      Напишите нам
     </Button>
    </div>
   </div>

   <div className={styles.arrow}>
    <Image src={arrow} alt='стрелка вниз' />
   </div>
  </section>
 );
};
