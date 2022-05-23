import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home';

test('renders a Translator', () => {
	render(<HomePage />);
	const translator = screen.getByTestId(/translator/i);

	expect(translator).toBeInTheDocument();
});
