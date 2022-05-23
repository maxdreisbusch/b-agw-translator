import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { DocumentHookExample } from './documentHook.example';

test('canGo* is handled correctly', () => {
	const valuesChanged = jest.fn();
	render(
		<DocumentHookExample valuesChanged={valuesChanged} numberOfPages={3} />
	);
	const previous = screen.getByTestId(/previous/i);
	const next = screen.getByTestId(/next/i);

	fireEvent.click(previous);
	expect(valuesChanged).toBeCalledWith(1, true, false);
	valuesChanged.mockReset();

	fireEvent.click(next);
	expect(valuesChanged).toBeCalledWith(2, true, true);
	valuesChanged.mockReset();

	fireEvent.click(previous);
	expect(valuesChanged).toBeCalledWith(1, true, false);
	valuesChanged.mockReset();

	fireEvent.click(next);
	expect(valuesChanged).toBeCalledWith(2, true, true);
	valuesChanged.mockReset();

	fireEvent.click(next);
	expect(valuesChanged).toBeCalledWith(3, false, true);
	valuesChanged.mockReset();

	fireEvent.click(next);
	expect(valuesChanged).not.toBeCalled();
	valuesChanged.mockReset();
});
