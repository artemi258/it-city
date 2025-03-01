import { Button } from '..';
import { ICloseButtonProps } from './CloseButton.props';

export const CloseButton = ({ cb, classn }: ICloseButtonProps): JSX.Element => {
 return (
  <Button onClick={cb} type='button' className={classn}>
   ×
  </Button>
 );
};
