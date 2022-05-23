import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Hamburger } from './hamburger';

test('renders a hamburger with class isOpen', () => {
	const click = jest.fn();
	render(<Hamburger onClick={click} isOpen={true} />);
	const element = screen.getByTestId(/hamburger/i);
	expect(element.className).toBe('hamburger isOpen');
});

test('renders a hamburger with class isClosed', () => {
	const click = jest.fn();
	render(<Hamburger onClick={click} isOpen={false} />);
	const element = screen.getByTestId(/hamburger/i);
	expect(element.className).toBe('hamburger isClosed');
});

test('can click the hamburger menu and executes onClick', () => {
	const click = jest.fn();
	render(<Hamburger onClick={click} isOpen={false} />);
	const element = screen.getByTestId(/hamburger/i);
	fireEvent.click(element);
	expect(click).toBeCalled();
});
