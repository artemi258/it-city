import { InformationPanel } from '../informationPanel/informationPanel';
import { motion } from 'framer-motion';
import { fadeInChildren, fadeInParent } from '../../utils/animations';

import arrow from '../../assets/images/arrow.png';

import './header.scss';

export const Header = () => {
	return (
		<header className="header">
			<InformationPanel />
			<div className="header__wrapper">
				<motion.div
					initial={'hidden'}
					animate={'visible'}
					variants={fadeInParent}
					className="container"
				>
					<motion.h1 variants={fadeInChildren} className="header__title">
						компьютерный центр
					</motion.h1>

					<div className="header__block">
						<div className="header__promo">
							<motion.span variants={fadeInChildren}>Продажа компьютеров,</motion.span>
							<motion.span variants={fadeInChildren}>любой офисной техники,</motion.span>
							<motion.span variants={fadeInChildren}>расходных материалов и</motion.span>
							<motion.span variants={fadeInChildren}>комплектующих по</motion.span>
							<motion.span variants={fadeInChildren}>доступным ценам.</motion.span>
						</div>
						<motion.div variants={fadeInChildren} className="header__text">
							более 10 лет работы
						</motion.div>
					</div>

					<motion.button variants={fadeInChildren} className="header__btn">
						Напишите нам
					</motion.button>
				</motion.div>
				<motion.img
					variants={fadeInChildren}
					src={arrow}
					alt="стрелка вниз"
					className="header__arrow"
				/>
			</div>
		</header>
	);
};
