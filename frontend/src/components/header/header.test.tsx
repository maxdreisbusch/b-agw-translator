import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './header';
import { BrowserRouter } from 'react-router-dom';

const component = (
	<BrowserRouter>
		<Header />
	</BrowserRouter>
);
test('Header contains the logo', () => {
	render(component);
	const element = screen.getByTestId(/logo/i);
	expect(element).toBeInTheDocument();
});

test('Header contains a navigation', () => {
	render(component);
	const element = screen.getByTestId(/navigationContainer/i);
	expect(element).toBeInTheDocument();
});

test('navigation submenus', () => {
	render(component);
	const elements = screen.getAllByTestId(/navigationItem/i);
	expect(elements.length).toBe(3);
});

test('navigation submenus toggle when clicked', () => {
	render(component);
	const elements = screen.getAllByTestId(/navigationItem/i);
	fireEvent.click(elements[0]);
});
