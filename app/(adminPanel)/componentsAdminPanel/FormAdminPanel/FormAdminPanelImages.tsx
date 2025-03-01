'use client';

import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FormEvent, FormEventHandler, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormAdminPanelProps } from './FormAdminPanel.props';

import SpinnerIcon from './spinner.svg';

import styles from './FormAdminPanel.module.scss';
import { API, Input, fadeInSpinner, Button } from '@shared';

export const FormAdminPanelImages = (): JSX.Element => {
 const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
 const [isSuccess, setIsSuccess] = useState<boolean>(false);
 const [isError, setIsError] = useState<boolean>(false);

 const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  const form = e.currentTarget;
  setIsSubmitting(true);
  const formData: FormData = new FormData(form);
  API.adminPanel
   .addImages(formData)
   .then(() => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
   })
   .catch((err) => {
    console.log(err);
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
     <h2 className={styles.title}>Добавить картинки к товарам</h2>
     <Input
      multiple
      required
      className={cn(styles.inputImage, styles.input)}
      name='images'
      type='file'
     />
     <motion.div
      initial={'hidden'}
      animate={isSubmitting ? 'visible' : 'hidden'}
      variants={fadeInSpinner}
      className={styles.spinner}>
      <Image src={SpinnerIcon} alt='спиннер' />
     </motion.div>
     <Button className={styles.button}>ДОБАВИТЬ</Button>
    </form>
    {isSuccess && <div className={cn(styles.message, styles.success)}>Картинки добавлены!</div>}
    {isError && (
     <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
    )}
   </motion.div>
  </div>
 );
};
