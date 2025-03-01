import Image from 'next/image';
import Link from 'next/link';

import vk from './images/vk.svg';
import whatsapp from './images/whatsapp.svg';
import telegram from './images/telegram.svg';
import logo from 'public/images/logo.svg';

import styles from './styles/Footer.module.scss';
import { Htag } from '@shared';

export const Footer = (): JSX.Element => {
 return (
  <footer className={styles.footer}>
   <div className='container'>
    <div className={styles.wrapper}>
     <Link className={styles.linkLogo} href={'/'}>
      <Image className={styles.logo} src={logo} alt='логотип магазина' />
     </Link>
     <div className={styles.inner}>
      <Htag classn={styles.title} tag='h5'>
       Наши соцсети
      </Htag>
      <ul className={styles.socials}>
       <li className={styles.icon}>
        <a href='https://vk.com/id731518842' target='_blank' className={styles.social}>
         <Image src={vk} alt='иконка vkontakte' />
        </a>
       </li>
       <li className={styles.icon}>
        <a href='https://wa.me/79533865588' target='_blank' className={styles.social}>
         <Image src={whatsapp} alt='иконка WhatsApp' />
        </a>
       </li>
       <li className={styles.icon}>
        <a href='https://t.me/itcitymira4' target='_blank' className={styles.social}>
         <Image src={telegram} alt='иконка telegram' />
        </a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </footer>
 );
};
