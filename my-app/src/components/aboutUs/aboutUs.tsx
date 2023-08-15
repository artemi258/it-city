import { motion } from 'framer-motion';
import { fadeInChildren, fadeInParent } from '../../utils/animations';

import photo from '../../assets/images/it.jpg';
import showcase from '../../assets/images/showcase.jpg';
import showcase2 from '../../assets/images/showcase2.jpg';

import './aboutUs.scss';

export const AboutUs = () => {
	return (
		<section className="aboutUs">
			<motion.div
				variants={fadeInParent}
				initial={'hidden'}
				whileInView={'visible'}
				viewport={{ once: true, margin: '-100px' }}
			>
				<h2 className="aboutUs__title">О нас</h2>
				<div className="aboutUs__wrapper" data-wow-duration="1s">
					<motion.div variants={fadeInChildren} className="aboutUs__block">
						<ul className="aboutUs__text">
							<li>Большой выбор аксессуаров в наличии и под заказ.</li>
							<li>Установка и настройка оборудования для работы Интернет.</li>
							<li>Модернизация и ремонт компьютерной и оргтехники.</li>
						</ul>
						<ul className="aboutUs__text">
							<li>Заправка картриджей.</li>
							<li>Установка лицензионного ПО.</li>
							<li>
								Продажа IPTV приставок и приставок для бесплатного просмотра 20 каналов эфирного
								цифрового ТВ.
							</li>
						</ul>
					</motion.div>
					<motion.div variants={fadeInChildren} className="aboutUs__photo">
						<img src={photo} alt="фото магазина" />
					</motion.div>
				</div>
				<motion.div
					variants={fadeInChildren}
					className="aboutUs__promo"
					data-wow-duration="1s"
					data-wow-delay="0.5s"
				>
					Компьютерный центр "Ай-Ти Сити" работает в городе Североуральске с 2007 года, за время
					своей работы зарекомендовал себя, как надежный и честный партнер, который легко решит ваши
					сложные задачи и поможет своим клиентам в области информационных технологий.
				</motion.div>
				<div className="aboutUs__showcases ">
					<motion.img variants={fadeInChildren} src={showcase} alt="фото витрин" />{' '}
					<motion.img variants={fadeInChildren} src={showcase2} alt="фото витрин" />
				</div>
			</motion.div>
		</section>
	);
};
