'use client';

import { fadeInSpinner } from '@/utils/animations';
import { Button, Input } from '@/app/components';
import cn from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostProduct } from '@/app/api/requests';
import { IProduct } from '@/interfaces/product';

import SpinnerIcon from './spinner.svg';

import styles from './FormAdminPanel.module.scss';
import { IFormAdminPanelProps } from './FormAdminPanel.props';

export default function FormAdminPanel({ path }: IFormAdminPanelProps): JSX.Element {
 const [isSubmit, setIsSubmit] = useState<boolean>(false);
 const [isSuccess, setIsSuccess] = useState<boolean>(false);
 const [isError, setIsError] = useState<boolean>(false);

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<IProduct>();

 //  const imageConversion = (data: IProduct): Promise<string> => {
 //   return new Promise((res, _rej) => {
 //    const file = data['image'] as unknown as File[];
 //    const fileReader = new FileReader();

 //    fileReader.readAsDataURL(file[0]);
 //    fileReader.onload = (): void => {
 //     res(fileReader.result as string);
 //    };
 //   });
 //  };

 const onSubmit: SubmitHandler<IProduct> = async (data): Promise<void> => {
  setIsSubmit(true);
  data.category = path;
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
  <>
   <section className={styles.popup}>
    <motion.div layout transition={{ layout: { duration: 0.3 } }} className={styles.wrapper}>
     <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Создать товар</h2>
      <Input
       {...register('image', {
        required: true,
       })}
       className={cn(styles.inputImage, styles.input)}
       type='file'
      />
      <Input
       {...register('title', {
        required: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
       })}
       className={cn(styles.inputTitle, styles.input)}
       type='text'
       placeholder='название'
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
       animate={isSubmit ? 'visible' : 'hidden'}
       variants={fadeInSpinner}
       className={styles.spinner}>
       <Image src={SpinnerIcon} alt='спиннер' />
      </motion.div>
      <Button className={styles.button}>ОТПРАВИТЬ</Button>
     </form>
     {isSuccess && <div className={cn(styles.message, styles.success)}>Сообщение отправлено!</div>}
     {isError && (
      <div className={cn(styles.message, styles.error)}>Ошибка! Попробуйте в другой раз</div>
     )}
    </motion.div>
   </section>
  </>
 );
}
