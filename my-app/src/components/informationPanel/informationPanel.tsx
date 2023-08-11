import vk from '../../assets/icons/vk.svg';

import './informationPanel.scss';

export const InformationPanel = () => {
	return (
		<div className="InformationPanel">
			<div className="container">
				<div className="InformationPanel__wrapper">
					<a href="https://vk.com/id731518842" target="_blank" className="InformationPanel__social">
						<img src={vk} alt="иконка вконтакте" />
					</a>
					<address className="InformationPanel__adress">
						Наш адресс:
						<br />
						г.Североуральск, Мира 4
					</address>
					<div className="InformationPanel__time">
						Часы работы:
						<br />
						Понедельник-пятница с 10-00 до 19-00
						<br />
						Суббота с 10-00 до 16-00
					</div>
					<div className="InformationPanel__email">
						Наша почта:
						<br />
						<a className="InformationPanel__link" href="mailto:itcity.su@gmail.com">
							itcity.su@gmail.com
						</a>
					</div>
					<div className="InformationPanel__phone">
						Звоните нам:
						<a href="tel:+79533865588" className="InformationPanel__tel">
							+7 (953) 386-55-88
						</a>
						<a href="tel:+73438021312" className="InformationPanel__tel">
							+7 (34380) 2-13-12
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
