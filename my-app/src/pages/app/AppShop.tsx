import { Outlet } from 'react-router-dom';
import { Link } from '../../components/button/Link';

export const AppShop = () => {
	return (
		<section className="app__shop">
			<nav className="app__shop-links">
				<Link text="Услуги" to={'/'} />
				<Link text="Магазин" to={'/shop'} />
			</nav>
			<Outlet />
		</section>
	);
};
