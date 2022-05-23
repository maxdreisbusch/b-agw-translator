import React from 'react';
import { render, screen } from '@testing-library/react';
import { Translator } from './translator';

test('renders enough buttons and translationAreas', () => {
	render(<Translator />);
	const translationAreas = screen.getAllByTestId(/translationarea/i);
	const buttons = screen.getAllByTestId(/button/i);

	expect(translationAreas.length).toBe(2);
	expect(buttons.length).toBe(2);
});
