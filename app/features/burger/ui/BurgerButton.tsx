import { IBurgerButtonProps } from './BurgerButton.props';
import styles from './styles/burgerButton.module.scss';

export const BurgerButton = ({
 isOpenMobileMenu,
 setIsOpenMobileMenu,
}: IBurgerButtonProps): JSX.Element => {
 const handleToggleMenu = (): void => setIsOpenMobileMenu(!isOpenMobileMenu);

 return (
  <div onClick={handleToggleMenu} className={styles.burgerButton}>
   <span></span>
   <span></span>
   <span></span>
  </div>
 );
};
