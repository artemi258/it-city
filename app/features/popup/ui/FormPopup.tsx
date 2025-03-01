'use client';

import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

import SpinnerIcon from './images/spinner.svg';

import styles from './styles/Popup.module.scss';
import { Button, fadeInSpinner, Input, Textarea } from 'app/shared';
import { postQuestion } from '../api';
import { IPopup } from '..';

export const FormPopup = (): JSX.Element => {
 const [isSubmit, setIsSubmit] = useState<boolean>(false);
 const [isSuccess, setIsSuccess] = useState<boolean>(false);
 const [isError, setIsError] = useState<boolean>(false);

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<IPopup>({
  mode: 'onChange',
 });

 const onSubmit: SubmitHandler<IPopup> = (data): void => {
  setIsSubmit(true);
  postQuestion(data)
   .then(() => {
    setIsSubmit(false);
    setIsSuccess(true);
    reset();
   })
   .catch(() => {
    setIsSubmit(false);
    setIsError(true);
   })
   .finally(() => {
    setTimeout(() => {
     setIsSuccess(false);
     setIsError(false);
    }, 5000);
   });
 };

 return (
  <motion.form
   layout
   transition={{ layout: { duration: 0.3 } }}
   onSubmit={handleSubmit(onSubmit)}
   className={styles.form}>
   <h2 className={styles.title}>Задайте свой вопрос</h2>
   <Input
    {...register('name', {
     required: 'не должно быть пустым',
     pattern: {
      value: /^[А-Яа-яЁё]+$/,
      message: 'кириллица, без пробелов и без цифр, нет спецсимволов',
     },
    })}
    className={cn(styles.inputName, styles.input)}
    type='text'
    placeholder='Ваше имя'
    error={errors.name}
   />
   <Input
    {...register('phone', {
     required: 'не должно быть пустым',
     pattern: {
      value: /^\+?\d{11}$/,
      message: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
     },
    })}
    className={cn(styles.inputPhone, styles.input)}
    type='text'
    placeholder='Ваш телефон'
    error={errors.phone}
   />
   <Input
    {...register('email', {
     required: 'не должно быть пустым',
     pattern: {
      value: /^[\w-.]+@[\w]+\.[A-Za-z]{2,}$/i,
      message: 'латиница, может включать цифры и спецсимволы вроде дефиса',
     },
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
     <Link href='politic' className={styles.link} target='_blank'>
      политикой конфиденциальности
     </Link>
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

   <motion.div
    variants={fadeInSpinner}
    animate={isSuccess ? 'visible' : 'hidden'}
    className={cn(styles.message, styles.success)}>
    Сообщение отправлено!
   </motion.div>

   <motion.div
    variants={fadeInSpinner}
    animate={isError ? 'visible' : 'hidden'}
    className={cn(styles.message, styles.error)}>
    Ошибка! Попробуйте в другой раз
   </motion.div>
  </motion.form>
 );
};
