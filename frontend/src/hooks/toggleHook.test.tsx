import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ToggleHookExample } from './toogleHook.example';

test('Toggle Hook toggles correctly with initial value true', () => {
	const toggled = jest.fn();
	render(<ToggleHookExample toggled={toggled} initialValue={true} />);
	const element = screen.getByTestId(/toggle/i);
	fireEvent.click(element);
	expect(toggled).toBeCalledWith(false);
	fireEvent.click(element);
	expect(toggled).toBeCalledWith(true);
});

test('Toggle Hook toggles correctly with initial value false', () => {
	const toggled = jest.fn();
	render(<ToggleHookExample toggled={toggled} initialValue={false} />);
	const element = screen.getByTestId(/toggle/i);
	fireEvent.click(element);
	expect(toggled).toBeCalledWith(true);
	fireEvent.click(element);
	expect(toggled).toBeCalledWith(false);
});

test('Toggle Hook toggles correctly without initial value', () => {
	const toggled = jest.fn();
	render(<ToggleHookExample toggled={toggled} initialValue={undefined} />);
	const element = screen.getByTestId(/toggle/i);
	fireEvent.click(element);
	expect(toggled).toBeCalledWith(false);
});
