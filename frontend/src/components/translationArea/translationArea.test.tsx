import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TranslationArea } from './translationArea';

test('renders a button', () => {
	const onChange = jest.fn();
	render(
		<TranslationArea
			value='this is the value'
			onChange={onChange}
			className='myClass'
			placeholder='This is a placeholder'
		/>
	);
	const element = screen.getByTestId<HTMLTextAreaElement>(/translationarea/i);
	fireEvent.change(element, { target: { value: 'abcdefghi' } });
	expect(onChange).toBeCalledWith('abcdefghi');
	expect(element.className).toBe('container myClass');
	expect(element.placeholder).toBe('This is a placeholder');
	expect(element.value).toBe('this is the value');
});

test('translationarea is disabled when no onChange is provided', () => {
	render(
		<TranslationArea
			value='this is the value'
			className='myClass'
			placeholder='This is a placeholder'
		/>
	);
	const element = screen.getByTestId<HTMLTextAreaElement>(/translationarea/i);
	expect(element.readOnly).toBe(true);
});
