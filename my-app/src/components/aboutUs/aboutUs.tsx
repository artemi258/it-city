import photo from '../../assets/images/it.jpg';
import showcase from '../../assets/images/showcase.jpg';
import showcase2 from '../../assets/images/showcase2.jpg';

import './aboutUs.scss';

export const AboutUs = () => {
	return (
		<section className="aboutUs">
			<div className="container">
				<h2 className="aboutUs__title">О нас</h2>
				<div
					className="aboutUs__wrapper animate__animated animate__fadeInUp wow"
					data-wow-duration="1s"
				>
					<div className="aboutUs__block">
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
					</div>
					<div className="aboutUs__photo">
						<img src={photo} alt="фото магазина" />
					</div>
				</div>
				<div
					className="aboutUs__promo animate__animated animate__fadeInUp wow"
					data-wow-duration="1s"
					data-wow-delay="0.5s"
				>
					Компьютерный центр "Ай-Ти Сити" работает в городе Североуральске с 2007 года, за время
					своей работы зарекомендовал себя, как надежный и честный партнер, который легко решит ваши
					сложные задачи и поможет своим клиентам в области информационных технологий.
				</div>
				<div className="aboutUs__showcases ">
					<img src={showcase} alt="фото витрин" /> <img src={showcase2} alt="фото витрин" />
				</div>
			</div>
		</section>
	);
};
