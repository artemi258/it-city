import styles from './styles/NavMenu.module.scss';
import { getMenu } from '../model';
import { IMainMenu, SkeletonMenu } from '@shared';
import { LinkButtonMenu } from '@entities/navMenu';

export const NavMenu = async (): Promise<JSX.Element> => {
 const menu: IMainMenu[] | null = await getMenu();

 return (
  <nav>
   {!menu ? (
    <div className={styles.error}>не удалось получить меню&#128532;</div>
   ) : !menu.length ? (
    <SkeletonMenu />
   ) : (
    <ul className={styles.menu}>
     {menu.map((m) => {
      return <LinkButtonMenu active={m.active} title={m.title} href={m.href} />;
     })}
    </ul>
   )}
  </nav>
 );
};
