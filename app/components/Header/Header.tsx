import Image from 'next/image';

import vk from './vk.svg';
import logo from './logo.svg';

import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
 return (
  <header className={styles.header}>
   <div className='container'>
    <div className={styles.wrapper}>
     <Image className={styles.logo} src={logo} alt='логотив магазина' />
     <a href='https://vk.com/id731518842' target='_blank' className={styles.social}>
      <Image src={vk} alt='иконка вконтакте' />
     </a>
     <address className={styles.adress}>
      Наш адресс: <span>г.Североуральск, Мира 4</span>
     </address>
     <div className={styles.time}>
      Часы работы:
      <span>Понедельник-пятница с 10-00 до 19-00</span>
      <span>Суббота с 10-00 до 16-00</span>
     </div>
     <div className={styles.email}>
      Наша почта:
      <a className={styles.link} href='mailto:itcity.su@gmail.com'>
       itcity.su@gmail.com
      </a>
     </div>
     <div className={styles.phone}>
      Звоните нам:
      <a href='tel:+79533865588' className={styles.tel}>
       +7 (953) 386-55-88
      </a>
      <a href='tel:+73438021312' className={styles.tel}>
       +7 (34380) 2-13-12
      </a>
     </div>
    </div>
   </div>
  </header>
 );
};
