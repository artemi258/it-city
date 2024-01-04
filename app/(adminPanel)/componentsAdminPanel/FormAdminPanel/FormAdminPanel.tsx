'use client';

import { IForm } from './FormAdminPanel.props';
import { fadeInPopup, fadeInSpinner } from '@/utils/animations';
import { Button, Input, Textarea } from '@/app/components';
import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import SpinnerIcon from './spinner.svg';

import styles from './FormAdminPanel.module.scss';
import { useFormStatus } from 'react-dom';
import PostProduct from '../../../api/requests';

const FormAdminPanel = (): JSX.Element => {
 const { pending } = useFormStatus();

 const [isSubmit, setIsSubmit] = useState<boolean>(false);
 const [isPopupOpen, setPopupOpen] = useState<boolean>(true);

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<IForm>();

 const onSubmit: SubmitHandler<IForm> = (data): void => {
  //    setIsSubmit(true);
  //    const formData = new FormData();
  //    let key: keyof typeof data;
  //    for (key in data) {
  //     const file = data[key] as unknown as File[];
  //     if (key === 'image') formData.append(key, file[0]);
  //     formData.append(key, data[key]);
  //    }
  //    fetch('http://localhost:3001/api/product', {
  //     method: 'POST',
  //     body: formData,
  //    }).then(() => setIsSubmit(false));
 };

 return (
  <>
   <section className={styles.popup}>
    <div className={styles.wrapper}>
     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Задайте свой вопрос</h2>
      <Input
       {...register('image', {
        required: true,
       })}
       className={cn(styles.inputFile, styles.input)}
       type='file'
      />
      <Input
       {...register('category', {
        required: 'кириллица, без пробелов и без цифр, нет спецсимволов',
       })}
       className={cn(styles.inputCategory, styles.input)}
       type='text'
       placeholder='Категория'
       error={errors.category}
      />
      <Input
       {...register('title', {
        required: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
       })}
       className={cn(styles.inputTitle, styles.input)}
       type='text'
       placeholder='заголовок'
       error={errors.title}
      />
      <Input
       {...register('description', {
        required: 'латиница, может включать цифры и спецсимволы вроде дефиса',
       })}
       className={cn(styles.inputDescription, styles.input)}
       type='text'
       placeholder='описание товара'
       error={errors.description}
      />
      <Input
       {...register('price', { required: 'не должно быть пустым' })}
       className={styles.inputPrice}
       type='text'
       placeholder='цена'
       error={errors.price}
      />
      <motion.div
       initial={'hidden'}
       animate={pending ? 'visible' : 'hidden'}
       variants={fadeInSpinner}
       className={styles.spinner}>
       <Image src={SpinnerIcon} alt='спиннер' />
      </motion.div>
      <Button className={styles.button}>ОТПРАВИТЬ</Button>
      <div className={cn(styles.message, styles.success)}>Сообщение отправлено!</div>
      <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
     </form>
    </div>
   </section>
  </>
 );
};

export default FormAdminPanel;
