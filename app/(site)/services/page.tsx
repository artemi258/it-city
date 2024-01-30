'use client';

import { motion } from 'framer-motion';
import styles from './page.module.scss';

export default function Cartridges(): JSX.Element {
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1, transition: { duration: 0.5 } }}
   className={styles.root}>
   <div className={styles.item}>
    <div className={styles.text}>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis doloribus atque dolorum
     optio odit animi qui cumque cum tempora expedita. Earum, nostrum error reiciendis molestiae
     repellendus ad ipsum tenetur rerum.
    </div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Canon Е16/Е30</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером клееного картриджа Canon Е16/Е31</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Заправка тонером картриджа Canon Fax L 300 (FX-3) аналог hp92a
    </div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Canon LBP 800/810 (EP-22)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Canon LBP 1210 (EP-25)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Canon LBP 3200 (EP-27)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1010/1012/1015 (Q2612A)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1102 СE285А</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1100/3100 (C4092A)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1150 (Q2624A)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Заправка тонером картриджа HP LJ 1200/1000/1220/3300/ 1005 (C7115A)
    </div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка картриджа HP LJ 1000-9 СВ435А</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1200 (C7115X)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1300 (Q2613A)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1300 (Q2613X)</div>
    <div className={styles.price}>450 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1320/1160 (Q5949A)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 1320/1160 (Q5949X)</div>
    <div className={styles.price}>550 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ P2015 (Q7553A)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ P2015 (Q7553X)</div>
    <div className={styles.price}>550 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка картриджа HP LJ 2055 CE505A</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка картриджа HP LJ 2055 CE505X</div>
    <div className={styles.price}>650 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 2300 (Q2610A)</div>
    <div className={styles.price}>650 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа HP LJ 5000 (C4129X)</div>
    <div className={styles.price}>1000 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Заправка тонером картриджа Samsung ML 1210/1010/1020/ 1250/1430/1610
    </div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Заправка тонером картриджа Samsung ML 1510/1520/1710/ 1720/1750
    </div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>
     Заправка тонером картриджа Samsung ML 2150/2151/2152/ 2550 с обнулением чипа
    </div>
    <div className={styles.price}>800 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Samsung ML 2250/4100</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Samsung ML 4500 (ml1210 родств)</div>
    <div className={styles.price}>400 руб.</div>
   </div>
   <div className={styles.item}>
    <div className={styles.text}>Заправка тонером картриджа Samsung 4200 с перепрошивкой</div>
    <div className={styles.price}>400 руб.</div>
   </div>
  </motion.div>
 );
}
