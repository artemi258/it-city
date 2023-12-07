'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';

const Repairs = (): JSX.Element => {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1, transition: { duration: 0.5 } }}
   className={styles.root}>
   <div className={styles.item}>
    <div className={styles.text}>
     Диагностика неисправности системного блока компьютера или его элементов
    </div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Замена вышедшей из строя материнской платы</div>
    <div className={styles.price}>1000 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Замена блока питания, приводов FDD, CD,DVD или жесткого диска, процессора, видеокарты
    </div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Замена оперативной памяти и других элементов СБ</div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Замена вентилятора на материнской плате</div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Замена вентилятора в блоке питания СБ</div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Чистка от пыли с заменой термопасты ноутбуков и компьютеров</div>
    <div className={styles.price}>1500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Монтаж/ демонтаж клавиатуры, матрицы, итп</div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Ремонт разъема питания ноутбука</div>
    <div className={styles.price}>от 500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Переустановка ОС с образа(Ноутбук)</div>
    <div className={styles.price}>1500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Установка драйверов внутренних устройств и периферии, настройка маршрутизатора
    </div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Установка, настройка Microsoft Office 97/2000/XP/2003/2007/2010
    </div>
    <div className={styles.price}>500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Установка, настройка антивирусных программ</div>
    <div className={styles.price}>1000 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Резервное копирование и восстановление данных</div>
    <div className={styles.price}>1000 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Инсталляция, настройка, удаление прочего ПО</div>
    <div className={styles.price}>
     по согла-
     <br />
     сованию
    </div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Нерегламентные работы</div>
    <div className={styles.price}>
     по согла-
     <br />
     сованию
    </div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Переустановка ОС с образа</div>
    <div className={styles.price}>1500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Замена диска HDD или SSD</div>
    <div className={styles.price}>500 руб.</div>
   </div>
  </motion.div>
 );
};

export default Repairs;
