'use client';

import { fadeInSpinner } from '@/utils/animations';
import { Button, Input } from '@/app/components';
import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostProduct } from '@/api/requests';
import { IProduct } from '@/interfaces/product.interface';
import { IFormAdminPanelProps } from './FormAdminPanel.props';

import SpinnerIcon from './spinner.svg';

import styles from './FormAdminPanel.module.scss';

export const FormAdminPanel = ({ path = 'general' }: IFormAdminPanelProps): JSX.Element => {
 const [isSubmit, setIsSubmit] = useState<boolean>(false);
 const [isSuccess, setIsSuccess] = useState<boolean>(false);
 const [isError, setIsError] = useState<boolean>(false);

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<IProduct>();

 const onSubmit: SubmitHandler<IProduct> = async (data): Promise<void> => {
  setIsSubmit(true);
  PostProduct(data)
   .then((res) => {
    if (res.ok) {
     setIsSuccess(true);
     setTimeout(() => setIsSuccess(false), 4000);
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
  <div className={styles.formAdminPanel}>
   <motion.div layout transition={{ layout: { duration: 0.3 } }} className={styles.wrapper}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
     <h2 className={styles.title}>Создать товары</h2>
     <Input
      {...register('exel', {
       required: true,
      })}
      className={cn(styles.inputImage, styles.input)}
      type='file'
     />
     <motion.div
      initial={'hidden'}
      animate={isSubmit ? 'visible' : 'hidden'}
      variants={fadeInSpinner}
      className={styles.spinner}>
      <Image src={SpinnerIcon} alt='спиннер' />
     </motion.div>
     <Button className={styles.button}>СОЗДАТЬ</Button>
    </form>
    {isSuccess && <div className={cn(styles.message, styles.success)}>Товары созданы!</div>}
    {isError && (
     <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
    )}
   </motion.div>
  </div>
 );
};
