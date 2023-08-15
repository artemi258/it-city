import { Route, Routes } from 'react-router-dom';
import { AboutUs } from '../../components/aboutUs/aboutUs';
import { Header } from '../../components/header/header';
import { AppShop } from './AppShop';

import './app.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<main className="container">
				<AboutUs />
				<Routes>
					<Route path="/" element={<AppShop />}>
						<Route path="shop" element={<Header />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
