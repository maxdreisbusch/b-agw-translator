import React, { useEffect } from 'react';
import { useToggle } from './toggleHook';

interface ToggleHookExampleProps {
	initialValue?: boolean;
	toggled: (value: boolean) => void;
}

export const ToggleHookExample: React.FunctionComponent<
	ToggleHookExampleProps
> = (props: ToggleHookExampleProps) => {
	const { value, toggle } = useToggle(props.initialValue);

	useEffect(() => {
		props.toggled(value);
	}, [value, props]);

	return (
		<button data-testid='toggle' onClick={toggle}>
			TOGGLE
		</button>
	);
};
