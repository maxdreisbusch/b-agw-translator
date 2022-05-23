import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.scss';
import { Layout } from './components/layout/layout';
import { AboutPage } from './pages/about';
import { HomePage } from './pages/home';
import './translation';
import { RoutingConstants } from './utils/routingConstants';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='*' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path={RoutingConstants.about} element={<AboutPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
