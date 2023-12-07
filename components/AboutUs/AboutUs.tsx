'use client';

import Image from 'next/image';
import { Htag } from '..';
import { IAboutUsProps } from './AboutUs.props';
import { motion } from 'framer-motion';

import it from './it.jpg';
import shop from './shop.jpg';
import shop2 from './shop2.jpg';
import shop3 from './shop3.jpg';

import styles from './AboutUs.module.scss';

export const AboutUs = (props: IAboutUsProps): JSX.Element => {
 return (
  <motion.div
   whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
   viewport={{ once: true }}
   initial={{ opacity: 0 }}
   className={styles.aboutUs}>
   <div className={styles.wrapper}>
    <Htag classn={styles.title} tag='h2'>
     О нас
    </Htag>
    <div className={styles.services}>
     <ul className={styles.text}>
      <li>Большой выбор аксессуаров в наличии и под заказ.</li>
      <li>Установка и настройка оборудования для работы Интернет.</li>
      <li>Модернизация и ремонт компьютерной и оргтехники.</li>
     </ul>
     <ul className={styles.text}>
      <li>Заправка картриджей.</li>
      <li>Установка лицензионного ПО.</li>
      <li>
       Продажа IPTV приставок и приставок для бесплатного просмотра 20 каналов эфирного цифрового
       ТВ.
      </li>
     </ul>
    </div>
    <div className={styles.photo}>
     <Image src={it} alt='фотография магазина' />
    </div>
    <div className={styles.info}>
     Компьютерный центр "Ай-Ти Сити" работает в городе Североуральске с 2007 года, за время своей
     работы зарекомендовал себя, как надежный и честный партнер, который легко решит ваши сложные
     задачи и поможет своим клиентам в области информационных технологий.
    </div>
    <div className={styles.shop}>
     <Image src={shop} alt='фотография товара' />
     <Image src={shop2} alt='фотография товара' />
     <Image src={shop3} alt='фотография товара' />
    </div>
   </div>
  </motion.div>
 );
};
