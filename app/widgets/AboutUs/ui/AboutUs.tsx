'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import cn from 'classnames';

import it from '/public/images/it.jpg';

import styles from './styles/AboutUs.module.scss';
import { ReactNode } from 'react';
import { Htag } from 'app/shared';

export const AboutUs = ({ children }: { children: ReactNode }): JSX.Element => {
 return (
  <motion.div
   whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
   viewport={{ once: true }}
   initial={{ opacity: 0 }}
   className={styles.aboutUs}>
   <div className={cn(styles.wrapper, 'container')}>
    <Htag classn={styles.title} tag='h2'>
     О нас
    </Htag>
    <div className={styles.services}>
     <ul className={styles.text}>
      <li>Продажа компьютерной техники</li>
      <li>Продажа периферийных устройств</li>
      <li>Продажа оборудования для сети Интернет и TV</li>
      <li>Продажа канцелярских товаров и товаров для школы</li>
      <li>Заправка и восстановление лазерных картриджей</li>
     </ul>
     <ul className={styles.text}>
      <li>Ремонт офисной техники, ноутбуков, мониторов</li>
      <li>Ремонт лазерных принтеров</li>
      <li>Ремонт периферийного оборудования</li>
      <li>Установка антивирусных программ</li>
      <li>Установка лицензионного ПО</li>
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
    {children}
   </div>
  </motion.div>
 );
};
