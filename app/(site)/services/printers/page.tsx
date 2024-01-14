'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';

const Printers = (): JSX.Element => {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1, transition: { duration: 0.5 } }}
   className={styles.root}>
   <div className={styles.item}>
    <div className={styles.text}>Бумага заминается на выходе из принтера.</div>
    <div className={styles.price}>от 1400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Внутри принтера застревает бумага.</div>
    <div className={styles.price}>от 750 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Повреждение или износ термопленкипринтера.</div>
    <div className={styles.price}>от 1500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Принтер издает «визг», скрежет, не «набирает оборотов» и т.п.</div>
    <div className={styles.price}>от 2400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Принтер издает сильный треск при печати.</div>
    <div className={styles.price}>от 750 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Принтер издает шелест при печати, слышны посторонние щелчки.</div>
    <div className={styles.price}>от 1400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Принтер издает шум, гул, более громкий звук при печати, чем обычно.
    </div>
    <div className={styles.price}>от 750 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Принтер не захватывает бумагу.</div>
    <div className={styles.price}>от 750 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Принтер печатает с повторами изображения, шаг повтора 37-38 мм.
    </div>
    <div className={styles.price}>от 500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Принтер печатает с повторами изображения, шаг повтора 56 мм.</div>
    <div className={styles.price}>от 1400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Принтер печатает с повторами изображения, шаг повтора 75-76 мм.
    </div>
    <div className={styles.price}>от 600 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Принтер смазывает изображение вниз, бумага не до конца выходит из принтера.
    </div>
    <div className={styles.price}>от 950 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Принтеру требуется техническое обслуживание.</div>
    <div className={styles.price}>от 1500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Проблема с картриджем принтера.</div>
    <div className={styles.price}>от 400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Разрыв термопленки принтера.</div>
    <div className={styles.price}>от 1500 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     У принтера мигает желтая лампочка или выдается сообщение об ошибке.
    </div>
    <div className={styles.price}>от 750 руб.</div>
   </div>
  </motion.div>
 );
};

export default Printers;
