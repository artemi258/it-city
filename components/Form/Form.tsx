'use client';

import { IForm, IFormProps } from './Form.props';
import { fadeInPopup, fadeInSpinner } from '@/utils/animations';
import { Button, Input, Textarea } from '..';
import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

import SpinnerIcon from './spinner.svg';

import styles from './Form.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

export const Form = ({ isPopupOpen, setPopupOpen }: IFormProps): JSX.Element => {
 const [isSubmit, setIsSubmit] = useState<boolean>(false);
 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<IForm>();

 const onSubmit: SubmitHandler<IForm> = (data): void => {
  setIsSubmit(true);
  setTimeout(() => setIsSubmit(false), 4000);
 };

 return (
  <>
   <motion.div
    onClick={(): void => setPopupOpen((state) => !state)}
    initial={{ backgroundColor: '' }}
    animate={
     isPopupOpen
      ? { visibility: 'visible', backgroundColor: 'rgba(0, 0, 0, 0.5)' }
      : { visibility: 'hidden', backgroundColor: '' }
    }
    className={styles.background}></motion.div>

   <motion.section
    initial={'hidden'}
    animate={isPopupOpen ? 'visible' : 'hidden'}
    variants={fadeInPopup}
    className={styles.popup}>
    <div className={styles.wrapper}>
     <Button
      onClick={(): void => setPopupOpen((state) => !state)}
      type='button'
      className={styles.close}>
      ×
     </Button>
     <motion.form
      layout
      transition={{ layout: { duration: 0.3 } }}
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}>
      <h2 className={styles.title}>Задайте свой вопрос</h2>
      <Input
       {...register('name', {
        required: 'кириллица, без пробелов и без цифр, нет спецсимволов',
        pattern: /^[А-Яа-яЁё]+$/,
       })}
       className={cn(styles.inputName, styles.input)}
       type='text'
       placeholder='Ваше имя'
       error={errors.name}
      />
      <Input
       {...register('phone', {
        required: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
        pattern: /^\+?\d{11}$/,
       })}
       className={cn(styles.inputPhone, styles.input)}
       type='text'
       placeholder='Ваш телефон'
       error={errors.phone}
      />
      <Input
       {...register('email', {
        required: 'латиница, может включать цифры и спецсимволы вроде дефиса',
        pattern: /^[\w-.]+@[\w]+\.[A-Za-z]{2,}$/i,
       })}
       className={cn(styles.inputEmail, styles.input)}
       type='text'
       placeholder='Ваш E-mail'
       error={errors.email}
      />
      <Textarea
       {...register('message', { required: 'не должно быть пустым' })}
       className={styles.textarea}
       placeholder='Задайте ваш вопрос здесь'
       error={errors.message}
      />
      <div className={styles.politic}>
       <input
        {...register('checkbox', { required: true })}
        id='checkbox'
        className={styles.checkbox}
        type='checkbox'
        required
       />
       <label htmlFor='checkbox' className={styles.text}>
        Я согласен(а) с
        <a className={styles.link} href='./politic.html' target='_blank'>
         политикой конфиденциальности
        </a>
       </label>
      </div>
      <motion.div
       initial={'hidden'}
       animate={isSubmit ? 'visible' : 'hidden'}
       variants={fadeInSpinner}
       className={styles.spinner}>
       <Image src={SpinnerIcon} alt='спиннер' />
      </motion.div>
      <Button className={styles.button}>ОТПРАВИТЬ</Button>
      <div className={cn(styles.message, styles.success)}>Сообщение отправлено!</div>
      <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
     </motion.form>
    </div>
   </motion.section>
  </>
 );
};
