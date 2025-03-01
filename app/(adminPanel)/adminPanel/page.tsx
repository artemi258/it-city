import {
 FormAdminPanel,
 FormAdminPanelImages,
 FormAdminPanelService,
} from '../componentsAdminPanel';
import styles from './page.module.scss';

export default function General(): JSX.Element {
 return (
  <div className={styles.root}>
   <FormAdminPanel />
   <FormAdminPanelImages />
   <FormAdminPanelService />
  </div>
 );
}
