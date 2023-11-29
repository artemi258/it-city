import { IFormProps } from './Form.props';
import { Button, Input, Textarea } from '..';
import cn from 'classnames';
import Image from 'next/image';

import SpinnerIcon from './spinner.svg';

import styles from './Form.module.scss';

export const Form = (props: IFormProps): JSX.Element => {
 return (
  <section className={styles.popup}>
   <div className={styles.wrapper}>
    <Button type='button' className={styles.close}>
     ×
    </Button>
    <form className={styles.form}>
     <h2 className={styles.title}>Задайте свой вопрос</h2>
     <Input
      className={cn(styles.inputName, styles.input)}
      type='text'
      name='name'
      placeholder='Ваше имя'
     />
     <Input
      className={cn(styles.inputPhone, styles.input)}
      id='phone'
      type='text'
      name='phone'
      placeholder='Ваш телефон'
     />
     <Input
      className={cn(styles.inputEmail, styles.input)}
      id='phone'
      type='email'
      name='email'
      placeholder='Ваш E-mail'
     />
     <Textarea className={styles.textarea} name='message' placeholder='Задайте ваш вопрос здесь' />
     <div className={styles.spinner}>
      <Image src={SpinnerIcon} alt='спиннер' />
     </div>
     <Button className={styles.button}>ОТПРАВИТЬ</Button>
     <div className={cn(styles.message, styles.success)}>Сообщение отправлено!</div>
     <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
    </form>
   </div>
  </section>
 );
};
