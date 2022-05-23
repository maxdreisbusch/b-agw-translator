import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './button';

test('renders a button', () => {
	const click = jest.fn();
	render(<Button title='Testbutton' onClick={click} />);
	const element = screen.getByText(/Testbutton/i);
	fireEvent.click(element);
	expect(click).toBeCalled();
});

test('renders a primary button', () => {
	render(<Button title='Testbutton' as='primary' />);
	const element = screen.getByText(/Testbutton/i);
	expect(element.className).toBe('button button__primary');
});

test('renders a secondary button', () => {
	render(<Button title='Testbutton' as='secondary' />);
	const element = screen.getByText(/Testbutton/i);
	expect(element.className).toBe('button button__secondary');
});

test('renders a disabled button', () => {
	render(<Button title='Testbutton' disabled />);
	const element = screen.getByText(/Testbutton/i);
	expect(element.className).toBe('button button__disabled');
});
