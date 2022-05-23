import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';

const component = (
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
);
test('Header contains the logo', () => {
	render(component);
	const logo = screen.getByTestId(/logo/i);
	const navigationContainer = screen.getByTestId(/navigationContainer/i);
	const navigationItems = screen.getAllByTestId(/navigationItem/i);
	expect(logo).toBeInTheDocument();
	expect(navigationContainer).toBeInTheDocument();
	expect(navigationItems.length).toBe(3);
});
