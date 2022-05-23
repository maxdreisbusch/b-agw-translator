import classNames from 'classnames';
import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
	title: string;
	onClick?: () => void;
	as?: 'primary' | 'secondary';
	className?: string;
	disabled?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = (
	props: ButtonProps
) => {
	return (
		<button
			className={classNames(styles.button, props.className, {
				[styles.button__primary]: props.as === 'primary',
				[styles.button__secondary]: props.as === 'secondary',
				[styles.button__disabled]: props.disabled,
			})}
			onClick={props.onClick}
			disabled={props.disabled}
			data-testid='button'>
			{props.title}
		</button>
	);
};
