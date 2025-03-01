'use client';

import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

import SpinnerIcon from './spinner.svg';

import styles from './FormAdminPanel.module.scss';
import { API, Input, fadeInSpinner, Button } from '@shared';

export const FormAdminPanelService = (): JSX.Element => {
 const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
 const [isSuccess, setIsSuccess] = useState<boolean>(false);
 const [isError, setIsError] = useState<boolean>(false);

 const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  const form = e.currentTarget;
  setIsSubmitting(true);
  const formData: FormData = new FormData(form);
  API.adminPanel
   .createService(formData)
   .then(() => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
   })
   .catch(() => {
    setIsError(true);
    setTimeout(() => setIsError(false), 4000);
   })
   .finally(() => {
    form.reset();
    setIsSubmitting(false);
   });
 };

 return (
  <div className={styles.formAdminPanel}>
   <motion.div layout transition={{ layout: { duration: 0.3 } }} className={styles.wrapper}>
    <form onSubmit={onSubmit} className={styles.form}>
     <h2 className={styles.title}>Создать услуги</h2>
     <Input required className={cn(styles.inputImage, styles.input)} name='exel' type='file' />
     <motion.div
      initial={'hidden'}
      animate={isSubmitting ? 'visible' : 'hidden'}
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
