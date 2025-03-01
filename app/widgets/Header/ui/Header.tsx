import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/logo.svg';

import styles from './styles/Header.module.scss';
import { NavMenu } from '@features/navMenu';

export const Header = async (): Promise<JSX.Element> => {
 return (
  <header className={styles.header}>
   <div className='container'>
    <div className={styles.wrapper}>
     <div className={styles.information}>
      <Link className={styles.logo} href={'/'}>
       <Image src={logo} alt='логотип магазина' />
      </Link>
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
       <span>
        <a href='mailto:itcity.su@gmail.com'>itcity.su@gmail.com</a>
       </span>
      </div>
      <div className={styles.phone}>
       Звоните нам:
       <a href='tel:+79533865588' className={styles.number}>
        +7 (953) 386-55-88
       </a>
       <a href='tel:+73438021312' className={styles.number}>
        +7 (34380) 2-13-12
       </a>
      </div>
     </div>
     <div className={styles.divinder}></div>
     <NavMenu />
    </div>
   </div>
  </header>
 );
};
