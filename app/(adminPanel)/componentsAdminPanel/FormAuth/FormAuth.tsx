'use client';

import { motion } from 'framer-motion';
import cn from 'classnames';
import { IFormAuthProps } from './FormAuth.props';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from '@/app/components';
import { useState } from 'react';
import { fadeInSpinner } from '@/utils/animations';
import { Auth } from '@/api/requests';
import Image from 'next/image';

import SpinnerIcon from './spinner.svg';

import styles from './FormAuth.module.scss';
import { IAuth } from './auth.interface';

export const FormAuth = ({ cb }: IFormAuthProps): JSX.Element => {
 const [isSubmit, setIsSubmit] = useState<boolean>(false);
 const [isSuccess, setIsSuccess] = useState<boolean>(false);
 const [isError, setIsError] = useState<boolean>(false);

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<IAuth>();

 const onSubmit: SubmitHandler<IAuth> = async (data): Promise<void> => {
  setIsSubmit(true);
  Auth(data)
   .then((res) => {
    if (res.auth) {
     setIsSuccess(true);
     setTimeout(() => {
      setIsSuccess(false);
      cb(res.auth);
     }, 2000);
    } else {
     throw new Error();
    }
   })
   .catch(() => {
    setIsError(true);
    setTimeout(() => setIsError(false), 4000);
   })
   .finally(() => setIsSubmit(false));
 };

 return (
  <div className={styles.formAuth}>
   <motion.div layout transition={{ layout: { duration: 0.3 } }} className={styles.wrapper}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
     <h2 className={styles.title}>Авторизация</h2>

     <Input
      {...register('login', {
       required: 'латиница, может включать цифры и спецсимволы вроде дефиса',
      })}
      className={cn(styles.inputLogin, styles.input)}
      type='text'
      placeholder='почта'
      error={errors.login}
     />
     <Input
      {...register('pass', {
       required: 'латиница, может включать цифры и спецсимволы вроде дефиса',
      })}
      className={cn(styles.inputPass, styles.input)}
      type='text'
      placeholder='пароль'
      error={errors.pass}
     />

     <motion.div
      initial={'hidden'}
      animate={isSubmit ? 'visible' : 'hidden'}
      variants={fadeInSpinner}
      className={styles.spinner}>
      <Image src={SpinnerIcon} alt='спиннер' />
     </motion.div>
     <Button className={styles.button}>ОТПРАВИТЬ</Button>
    </form>
    {isSuccess && (
     <div className={cn(styles.message, styles.success)}>Авторизация выполнена успешно!</div>
    )}
    {isError && (
     <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
    )}
   </motion.div>
  </div>
 );
};
