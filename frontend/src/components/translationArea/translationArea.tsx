import classNames from 'classnames';
import React, { useCallback } from 'react';
import styles from './translationArea.module.scss';

interface TranslationAreaProps {
	value: string;
	onChange?: (value: string) => void;
	className?: string;
	placeholder?: string;
	onBlur?: () => void;
}

export const TranslationArea: React.FunctionComponent<TranslationAreaProps> = (
	props: TranslationAreaProps
) => {
	const handleOnChange = useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			props.onChange && props.onChange(event.target.value);
		},
		[props]
	);

	return (
		<textarea
			className={classNames(styles.container, props.className)}
			rows={10}
			placeholder={props.placeholder}
			value={props.value}
			onChange={handleOnChange}
			onBlur={props.onBlur}
			readOnly={!props.onChange} //should be readonly when no onChange is provided
			data-testid='translationarea'
		/>
	);
};
