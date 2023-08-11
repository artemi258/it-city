import { InformationPanel } from '../informationPanel/informationPanel';

import arrow from '../../public/assets/images/arrow.png';

import './header.scss';

export const Header = () => {
	return (
		<header className="header" id="header">
			<InformationPanel />
			<div className="header__wrapper">
				<div className="container">
					<h1 className="header__title">компьютерный центр</h1>
					<div
						className="header__text animate__animated animate__fadeIn wow"
						data-wow-duration="3s"
						data-wow-delay="1s"
					>
						более 10 лет работы
					</div>
					<div className="header__promo">
						<span
							className="animate__animated animate__fadeInUp wow"
							data-wow-duration="2s"
							data-wow-delay="0.7s"
						>
							Продажа компьютеров,
						</span>
						<span
							className="animate__animated animate__fadeInUp wow"
							data-wow-duration="2s"
							data-wow-delay="0.9s"
						>
							любой офисной техники,
						</span>
						<span
							className="animate__animated animate__fadeInUp wow"
							data-wow-duration="2s"
							data-wow-delay="1.2s"
						>
							расходных материалов и
						</span>
						<span
							className="animate__animated animate__fadeInUp wow"
							data-wow-duration="2s"
							data-wow-delay="1.5s"
						>
							комплектующих по
						</span>
						<span
							className="animate__animated animate__fadeInUp wow"
							data-wow-duration="2s"
							data-wow-delay="1.7s"
						>
							доступным ценам.
						</span>
					</div>

					<button className="header__btn">Напишите нам</button>
				</div>
			</div>
			<img src={arrow} alt="стрелка вниз" className="header__arrow" />
		</header>
	);
};
