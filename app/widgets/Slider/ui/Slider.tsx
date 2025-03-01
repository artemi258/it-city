'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import cn from 'classnames';
import { useRef } from 'react';

import shop from './images/shop.jpg';
import shop2 from './images/shop2.jpg';
import shop3 from './images/shop3.jpg';
import shop4 from './images/shop4.jpg';
import arrow from './images/arrow.svg';

import styles from './styles/Slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export const Slider = (): JSX.Element => {
 const swiperRef = useRef<SwiperType>();

 return (
  <div className={styles.slider}>
   <button
    onClick={(): boolean | undefined => swiperRef.current?.slideNext()}
    className={cn(styles.sliderBtn, styles.btnNext)}>
    <Image src={arrow} alt='стрелка вправо' />
   </button>
   <button
    onClick={(): boolean | undefined => swiperRef.current?.slidePrev()}
    className={cn(styles.sliderBtn, styles.btnPrev)}>
    <Image src={arrow} alt='стрелка влево' />
   </button>
   <Swiper
    onBeforeInit={(swiper: SwiperType): SwiperType => (swiperRef.current = swiper)}
    speed={700}
    autoplay={{
     delay: 5000,
     disableOnInteraction: false,
    }}
    pagination={{
     clickable: true,
    }}
    loop
    modules={[Autoplay, Pagination]}
    className='mySwiper'>
    <SwiperSlide>
     <Image className={styles.image} src={shop} alt='фотография товара' />
    </SwiperSlide>
    <SwiperSlide>
     <Image className={styles.image} src={shop2} alt='фотография товара' />
    </SwiperSlide>
    <SwiperSlide>
     <Image className={styles.image} src={shop3} alt='фотография товара' />
    </SwiperSlide>
    <SwiperSlide>
     <Image className={styles.image} src={shop4} alt='фотография товара' />
    </SwiperSlide>
   </Swiper>
  </div>
 );
};
